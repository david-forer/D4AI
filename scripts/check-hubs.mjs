// Guards the shape of the hub taxonomy at build time.
//
// The schema in src/content/config.ts already makes a bad tag unpublishable.
// This checks the things a schema cannot see: whether a hub has starved, bloated,
// or drifted out of sync with the generated nesting map.
//
// Run: node scripts/check-hubs.mjs

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const BLOG = 'src/content/blog';
const MIN = 6;   // below this a hub page is too thin to earn its own URL
const MAX = 40;  // above this the hub needs pagination and stops flattening depth

const hubSrc = fs.readFileSync('src/lib/hubs.ts', 'utf8');
const slugs = [...hubSrc.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]);

let failures = 0;
const fail = (m) => { console.log(`  FAIL  ${m}`); failures++; };
const ok = (m) => console.log(`  PASS  ${m}`);

console.log('\nHub taxonomy');

if (!slugs.length) { fail('could not parse hubs from src/lib/hubs.ts'); process.exit(1); }
ok(`${slugs.length} hubs defined in src/lib/hubs.ts`);

const counts = Object.fromEntries(slugs.map((s) => [s, 0]));
let untagged = 0;
for (const f of fs.readdirSync(BLOG).filter((x) => /\.mdx?$/.test(x))) {
  const m = fs.readFileSync(path.join(BLOG, f), 'utf8').match(/^tags:\s*\[(.*)\]/m);
  const tags = m ? m[1].split(',').map((s) => s.trim().replace(/"/g, '')).filter(Boolean) : [];
  if (tags.length !== 1) { fail(`${f} has ${tags.length} tags, expected exactly 1`); untagged++; continue; }
  if (!(tags[0] in counts)) { fail(`${f} has unknown hub "${tags[0]}"`); untagged++; continue; }
  counts[tags[0]]++;
}
if (!untagged) ok('every post carries exactly one valid hub tag');

for (const [slug, n] of Object.entries(counts)) {
  if (n < MIN) fail(`hub "${slug}" has only ${n} posts, under the ${MIN} needed to earn a page. Fold it or write more.`);
  else if (n > MAX) fail(`hub "${slug}" has ${n} posts, over ${MAX}. It needs splitting or pagination.`);
}
if (Object.values(counts).every((n) => n >= MIN && n <= MAX)) {
  const sizes = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([s, n]) => `${s} ${n}`).join(', ');
  ok(`every hub sits between ${MIN} and ${MAX} posts (${sizes})`);
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
