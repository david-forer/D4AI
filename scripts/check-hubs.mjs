// Guards the shape of the hub taxonomy at build time.
//
// The schema in src/content/config.ts already makes a bad tag unpublishable.
// This checks the things a schema cannot see: whether a hub has starved,
// bloated, drifted out of sync with the generated nesting map, or grown a
// secondary pillar big enough to deserve its own hub.
//
// Run: node scripts/check-hubs.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const BLOG = 'src/content/blog';
const MIN = 6;   // below this a hub page is too thin to earn its own URL
const MAX = 40;  // above this the hub needs pagination and stops flattening depth

// Deliberately higher than MIN. The bar to KEEP a hub and the bar to CREATE one
// are not the same number. Spinning up a new hub at exactly MIN means it opens
// on the failure boundary, and one retired post breaks the build. Splitting
// needs headroom, so a folded pillar has to clear MIN with room to spare before
// it is worth suggesting.
const SPLIT_MIN = 8;

const hubSrc = fs.readFileSync('src/lib/hubs.ts', 'utf8');
const hubs = [...hubSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?pillars:\s*\[([^\]]*)\]/g)].map((m) => ({
  slug: m[1],
  pillars: [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]),
}));

let failures = 0;
const fail = (m) => { console.log(`  FAIL  ${m}`); failures++; };
const ok = (m) => console.log(`  PASS  ${m}`);
const note = (m) => console.log(`  NOTE  ${m}`);

console.log('\nHub taxonomy');

if (!hubs.length) { fail('could not parse hubs from src/lib/hubs.ts'); process.exit(1); }
ok(`${hubs.length} hubs defined in src/lib/hubs.ts`);

const toSlug = (f) => f.replace(/\.mdx?$/, '').toLowerCase();
const counts = Object.fromEntries(hubs.map((h) => [h.slug, 0]));
const pillarCounts = {};
let bad = 0;

for (const f of fs.readdirSync(BLOG).filter((x) => /\.mdx?$/.test(x))) {
  const src = fs.readFileSync(path.join(BLOG, f), 'utf8');
  const m = src.match(/^tags:\s*\[(.*)\]/m);
  const tags = m ? m[1].split(',').map((s) => s.trim().replace(/"/g, '')).filter(Boolean) : [];
  if (tags.length !== 1) { fail(`${f} has ${tags.length} tags, expected exactly 1`); bad++; continue; }
  const hub = hubs.find((h) => h.slug === tags[0]);
  if (!hub) { fail(`${f} has unknown hub "${tags[0]}"`); bad++; continue; }
  counts[hub.slug]++;
  const explicit = (src.match(/^pillar:\s*"([^"]+)"/m) || [])[1];
  const pil = explicit || toSlug(hub.pillars[0]);
  pillarCounts[pil] = (pillarCounts[pil] || 0) + 1;
}
if (!bad) ok('every post carries exactly one valid hub tag');

for (const [slug, n] of Object.entries(counts)) {
  if (n < MIN) fail(`hub "${slug}" has only ${n} posts, under the ${MIN} needed to earn a page. Fold it or write more.`);
  else if (n > MAX) fail(`hub "${slug}" has ${n} posts, over ${MAX}. It needs splitting or pagination.`);
}
if (Object.values(counts).every((n) => n >= MIN && n <= MAX)) {
  const sizes = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s} ${n}`).join(', ');
  ok(`every hub sits between ${MIN} and ${MAX} posts (${sizes})`);
}

// A secondary pillar folded into someone else's hub is a temporary state. It
// exists only because the pillar was too thin to carry a page of its own. Once
// it clears MIN, and splitting would leave the host hub above MIN too, it
// should become its own hub. Nothing else will surface that moment: the host
// hub is not starved or bloated, so every other check stays green while the
// opportunity sits there unnoticed.
//
// This is a NOTE, not a FAIL. Splitting is a judgment call about whether the
// cluster reads as its own subject, and a green build should not depend on it.
let split = 0;
for (const hub of hubs) {
  for (const p of hub.pillars.slice(1)) {
    const n = pillarCounts[toSlug(p)] || 0;
    const left = counts[hub.slug] - n;
    if (n >= SPLIT_MIN && left >= SPLIT_MIN) {
      split++;
      note(`pillar "${toSlug(p)}" now has ${n} posts and can carry its own hub. `
         + `Splitting leaves "${hub.slug}" at ${left}, still healthy. `
         + `To do it: add a hub to src/lib/hubs.ts, drop the pillar from "${hub.slug}", `
         + `remove the now-redundant pillar: lines from those ${n} posts, run npm run nest.`);
    } else if (n >= SPLIT_MIN) {
      note(`pillar "${toSlug(p)}" has ${n} posts but splitting would leave "${hub.slug}" at ${left}, under ${SPLIT_MIN}. Not yet.`);
    }
  }
}
if (!split) {
  const folded = hubs.flatMap((h) => h.pillars.slice(1).map((p) => `${toSlug(p)} ${pillarCounts[toSlug(p)] || 0}`));
  if (folded.length) ok(`no folded pillar is ready to split yet (${folded.join(', ')}, need ${SPLIT_MIN})`);
}

// The nesting map is generated. If it is stale, the explorer view lies.
try {
  execFileSync(process.execPath, ['scripts/generate-nesting.mjs', '--check'], { stdio: 'pipe' });
  ok('.vscode/settings.json is current (run `npm run nest` if this ever fails)');
} catch {
  fail('.vscode/settings.json is stale. Run: npm run nest');
}

console.log(`\n${failures ? `${failures} hub check(s) failed` : 'hub taxonomy is healthy'}\n`);
process.exit(failures ? 1 : 0);
