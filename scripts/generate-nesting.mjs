// Regenerates the VSCode file-nesting map in .vscode/settings.json from the
// frontmatter on the posts themselves.
//
// This inverts how the site used to work. The nesting map used to BE the
// architecture, hand-maintained, and it drifted: 13 entries pointed at files
// that did not exist. Now the posts are the source of truth and this map is
// derived, so that kind of drift cannot happen again.
//
// DO NOT HAND-EDIT the nesting map. Run this instead:
//   npm run nest              rewrite .vscode/settings.json
//   npm run nest -- --check   fail if it is stale, for CI
//
// Nesting follows PILLAR, not hub. The two are different on purpose. A hub is a
// page and is sized for search, so a pillar too small to carry its own hub can
// share one. A pillar is a content cluster and is how the work is organised, so
// pillars always stay separate here. Folding a hub must never collapse a pillar.
//
// A post nests under its explicit `pillar` when it has one, otherwise under the
// primary pillar of its hub. Most posts have no `pillar` field and never need
// one.
//
// Planned-but-unwritten posts are preserved. They are the content roadmap, not
// drift, and dropping them would lose real intent. They sit at the end of each
// line and are reported on every run so they stay visible.

import fs from 'node:fs';
import path from 'node:path';

const SETTINGS = '.vscode/settings.json';
const BLOG = 'src/content/blog';
const KEY = 'explorer.fileNesting.patterns';
const CHECK = process.argv.includes('--check');

// Read the hub definitions out of the TS source without needing a TS runtime.
const hubSrc = fs.readFileSync('src/lib/hubs.ts', 'utf8');
const hubs = [...hubSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?pillars:\s*\[([^\]]*)\]/g)].map((m) => ({
  slug: m[1],
  pillars: [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]),
}));
if (!hubs.length) { console.error('could not parse src/lib/hubs.ts'); process.exit(1); }

const pillarFiles = hubs.flatMap((h) => h.pillars);
const toSlug = (file) => file.replace(/\.mdx?$/, '').toLowerCase();

const onDisk = fs.readdirSync(BLOG).filter((f) => /\.mdx?$/.test(f));
const byLower = new Map(onDisk.map((f) => [f.toLowerCase(), f]));

const fmOf = (file) => {
  const src = fs.readFileSync(path.join(BLOG, file), 'utf8');
  return {
    hub: (src.match(/^tags:\s*\["([^"]+)"\]/m) || [])[1] || null,
    pillar: (src.match(/^pillar:\s*"([^"]+)"/m) || [])[1] || null,
  };
};

const pillarOf = (file) => {
  const { hub, pillar } = fmOf(file);
  if (pillar) return pillar;
  const h = hubs.find((x) => x.slug === hub);
  return h ? toSlug(h.pillars[0]) : null;
};

// Preserve planned entries: anything currently nested that has no file yet.
const current = JSON.parse(fs.readFileSync(SETTINGS, 'utf8'));
const planned = new Map();
for (const [pillar, kids] of Object.entries(current[KEY] || {})) {
  const ghosts = String(kids).split(',').map((s) => s.trim())
    .filter((k) => k && !byLower.has(k.toLowerCase()));
  if (ghosts.length) planned.set(pillar.toLowerCase(), ghosts);
}

const orphans = [];
for (const f of onDisk) {
  const { hub } = fmOf(f);
  if (!hub) { orphans.push(`${f} (no tag)`); continue; }
  if (!hubs.some((h) => h.slug === hub)) { orphans.push(`${f} (unknown hub "${hub}")`); continue; }
  const pil = pillarOf(f);
  if (!pillarFiles.some((p) => toSlug(p) === pil)) orphans.push(`${f} (unknown pillar "${pil}")`);
}
if (orphans.length) {
  console.error('Refusing to write. These posts do not resolve:');
  orphans.forEach((o) => console.error(`  ${o}`));
  process.exit(1);
}

const nesting = {};
for (const pillarFile of pillarFiles) {
  const primary = byLower.get(pillarFile.toLowerCase());
  if (!primary) { console.error(`  pillar missing on disk: ${pillarFile}`); continue; }
  const slug = toSlug(pillarFile);
  const kids = onDisk
    .filter((f) => f !== primary && pillarOf(f) === slug)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  const carried = planned.get(pillarFile.toLowerCase()) || [];
  nesting[primary] = [...kids, ...carried].join(', ');
}

const next = { ...current, [KEY]: nesting };
const out = JSON.stringify(next, null, 2) + '\n';
const stale = out !== fs.readFileSync(SETTINGS, 'utf8');

if (CHECK) {
  if (stale) { console.error('.vscode/settings.json is stale. Run: npm run nest'); process.exit(1); }
  console.log('nesting map is current');
  process.exit(0);
}

fs.writeFileSync(SETTINGS, out, 'utf8');
const carriedTotal = [...planned.values()].flat().length;
console.log(`${stale ? 'rewrote' : 'no change to'} ${SETTINGS}`);
console.log(`  ${Object.keys(nesting).length} pillars, ${onDisk.length} posts, all resolved`);
for (const [file, kids] of Object.entries(nesting)) {
  const n = String(kids).split(',').filter((s) => s.trim()).length;
  console.log(`    ${String(n).padStart(3)}  ${file}`);
}
console.log(`  ${carriedTotal} planned posts preserved, not yet drafted:`);
for (const [pillar, ghosts] of planned) ghosts.forEach((g) => console.log(`    ${g}   under ${pillar}`));
