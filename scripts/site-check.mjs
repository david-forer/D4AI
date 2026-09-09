// Live site health check for davidjforer.com
// Run locally:  npm run check
// Runs on GitHub Actions daily and after every deploy (see .github/workflows/site-check.yml)
// Exits 1 (fails) when anything is wrong, so GitHub emails you.

const SITE = process.env.SITE_URL || 'https://davidjforer.com';
const UA = 'D4AI-site-check/1.0 (+https://davidjforer.com)';
let failures = 0;
let passes = 0;

function ok(msg) { passes++; console.log('  PASS  ' + msg); }
function fail(msg) { failures++; console.log('  FAIL  ' + msg); }

async function head(path) {
  const res = await fetch(SITE + path, { method: 'GET', redirect: 'manual', headers: { 'user-agent': UA } });
  const text = res.headers.get('content-type')?.includes('text') || res.headers.get('content-type')?.includes('xml')
    ? await res.text() : '';
  return { status: res.status, location: res.headers.get('location'), type: res.headers.get('content-type') || '', powered: res.headers.get('x-powered-by') || '', text };
}

async function expectRedirect(path, to) {
  const r = await head(path);
  if (r.status === 301 && r.location === to) ok(`${path} -> 301 ${to}`);
  else fail(`${path} expected 301 -> ${to}, got ${r.status} ${r.location || ''}`);
}

async function expectStatus(path, status, typeIncludes) {
  const r = await head(path);
  if (r.status !== status) { fail(`${path} expected ${status}, got ${r.status}`); return r; }
  if (typeIncludes && !r.type.includes(typeIncludes)) { fail(`${path} expected content-type ${typeIncludes}, got ${r.type}`); return r; }
  ok(`${path} -> ${status} ${r.type}`);
  return r;
}

console.log(`\nChecking ${SITE}\n`);

// 1. Is our Express server the thing answering? (nginx means server.js is not running)
console.log('Server');
{
  const r = await head('/about/');
  if (r.powered.toLowerCase().includes('express')) ok('Express server is live (X-Powered-By: Express)');
  else fail('Express server is NOT answering. server.js is not running. Check Coolify start command and Logs.');
}

// 2. Redirects that must work
console.log('\nRedirects');
await expectRedirect('/about/', '/about');
await expectRedirect('/blog/ai-agents-vs-chatbots/', '/blog/ai-agents-vs-chatbots');
await expectRedirect('/about-me', '/about');
await expectRedirect('/local-seo-system', '/seo-accelerator');
// The whole resources family folds into /resources. /free-resources and
// /seo-ai-resources were retired, so these must resolve in one hop rather than
// chaining through a page that no longer exists.
await expectRedirect('/seo-ai-resources', '/resources');
await expectRedirect('/free-resources', '/resources');
await expectRedirect('/small-business-seo-videos', '/resources');
// Retired posts. The redirect map is an exact case-sensitive lookup on
// req.path, so both casings are registered and both are checked.
await expectRedirect('/blog/google-profile-seo', '/blog/ai-enabled-seo-operations');
await expectRedirect('/blog/AI-Growth-Accelerator', '/blog/ai-enabled-seo-operations');
// Category hubs that have no Astro route still fold back to /blog.
await expectRedirect('/blog/category/operations', '/blog');

// 2.5 The Formbricks host that every lead form on the site depends on.
//
// The forms are cross-origin iframe embeds pointing at bricks.davidjforer.com,
// so nothing on davidjforer.com reveals whether they work. If that container is
// down the modals open empty, visitors cannot submit, and the site itself looks
// completely healthy. It died silently once and was only noticed by accident.
//
// A dead form host is a lost-lead problem, so it fails the run and emails.
const FORM_HOST = process.env.FORM_HOST_URL || 'https://bricks.davidjforer.com';
console.log('\nForm host (lead capture)');
try {
  const res = await fetch(FORM_HOST + '/health', { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(20000) });
  if (res.status === 200) ok(`${FORM_HOST}/health -> 200, lead forms can load`);
  else fail(`${FORM_HOST}/health -> ${res.status}. Every lead form on the site is an iframe from this host, so they are broken. Restart the Formbricks container in Coolify.`);
} catch (e) {
  fail(`${FORM_HOST}/health unreachable (${e.name === 'TimeoutError' ? 'timed out' : e.message}). The container is almost certainly down. Restart it in Coolify. Traefik answers while the app is dead, so HTTP 404 and an HTTPS hang are the usual signature.`);
}

// 3. Core pages and files
console.log('\nCore pages');
await expectStatus('/', 200, 'text/html');
await expectStatus('/blog', 200, 'text/html');
await expectStatus('/does-not-exist-xyz', 404);
const robots = await expectStatus('/robots.txt', 200, 'text/plain');
if (robots.text.includes('Sitemap: ' + SITE + '/sitemap-index.xml')) ok('robots.txt points at sitemap-index.xml');
else fail('robots.txt is missing the Sitemap line');

// 4. Sitemap
console.log('\nSitemap');
const idx = await expectStatus('/sitemap-index.xml', 200, 'xml');
if (idx.text.includes('sitemap-0.xml')) ok('sitemap-index.xml references sitemap-0.xml');
else fail('sitemap-index.xml does not reference sitemap-0.xml');
const sm = await expectStatus('/sitemap-0.xml', 200, 'xml');
const urls = [...sm.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const lastmods = (sm.text.match(/<lastmod>/g) || []).length;
if (urls.length > 100) ok(`sitemap has ${urls.length} URLs`); else fail(`sitemap only has ${urls.length} URLs`);
if (lastmods > 100) ok(`sitemap has ${lastmods} lastmod tags`); else fail(`sitemap has only ${lastmods} lastmod tags, expected one per blog post`);
if (urls.some(u => u.endsWith('/'))) fail('sitemap contains trailing-slash URLs'); else ok('no trailing-slash URLs in sitemap');

// 5. Every sitemap URL: must be 200, self-canonical, not noindex, clean encoding.
//
// The encoding half exists because on 2026-09-08 an em dash removal pass did not
// remove some em dashes, it corrupted them, and 71 mojibake characters sat live
// across 34 files for a day. Grepping the source for the em dash character found
// nothing, because the character was no longer an em dash. Only the rendered page
// tells the truth, so the check runs here, against production, and costs no extra
// requests because the loop already has the HTML.
const ENCODING_DEFECTS = [
  ['em dash',        /—/g],
  ['U+FFFD',         /�/g],
  ['mojibake C2 B7', /Â·/g],
  ['mojibake E2 80', /â€/g],
];
console.log('\nEvery sitemap URL (200, one self-referencing canonical, no noindex, clean encoding)');
let bad = 0;
let dirty = 0;
for (const u of urls) {
  const path = u.replace(SITE, '') || '/';
  const r = await head(path);
  const found = ENCODING_DEFECTS
    .map(([name, re]) => [name, (r.text.match(re) || []).length])
    .filter(([, n]) => n > 0);
  if (found.length) {
    dirty++;
    fail(`${path}: ${found.map(([name, n]) => `${n} x ${name}`).join(', ')}`);
  }
  const canon = [...r.text.matchAll(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
  const noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(r.text);
  const problems = [];
  if (r.status !== 200) problems.push(`status ${r.status}${r.location ? ' -> ' + r.location : ''}`);
  if (canon.length !== 1) problems.push(`${canon.length} canonical tags`);
  else if (canon[0].replace(/\/$/, '') !== u.replace(/\/$/, '')) problems.push(`canonical is ${canon[0]}`);
  if (noindex) problems.push('noindex');
  if (problems.length) { bad++; fail(`${path}: ${problems.join(', ')}`); }
}
if (bad === 0) ok(`all ${urls.length} sitemap URLs are 200, self-canonical, indexable`);
if (dirty === 0) ok(`all ${urls.length} sitemap URLs are free of em dashes and mojibake`);

console.log(`\n${passes} passed, ${failures} failed\n`);
process.exit(failures ? 1 : 0);
