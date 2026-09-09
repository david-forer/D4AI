// One-off migration: rewrite every blog post's `tags:` to the single hub slug
// implied by the pillar it nests under in .vscode/settings.json.
//
// After this runs, scripts/generate-nesting.mjs takes over and the direction
// reverses: tags become the source of truth and the nesting map is generated
// from them. This script exists only to make that first handover, and it can be
// deleted once the tags are correct.
//
// Run: node scripts/retag-from-nesting.mjs [--dry]

import fs from 'node:fs';
import path from 'node:path';

const DRY = process.argv.includes('--dry');
const BLOG = 'src/content/blog';

// Which hub each pillar's cluster belongs to. Two pillars currently share a hub
// because they are too small to carry one alone: governance folds into
// readiness, and agents folds into tools. Both split out on their own once the
// planned posts under them are written.
const PILLAR_TO_HUB = {
  'ai-readiness-framework-for-service-businesses.md': 'ai-readiness',
  'ai-governance-for-small-businesses.md': 'ai-readiness',
  'ai-operations-for-small-businesses.md': 'ai-operations',
  'ai-training-team-adoption-small-business.md': 'ai-training',
  'ai-tools-tech-stack-small-business.md': 'ai-tools',
  'ai-agents-for-small-businesses.md': 'ai-tools',
  'automation-architecture-for-small-teams.md': 'automation',
  'intake-and-workflow-systems-for-growing-firms.md': 'workflow-systems',
  'working-with-an-ai-consultant.md': 'hiring-an-ai-consultant',
  'ai-strategy-for-small-businesses.md': 'ai-strategy',
  'ai-enabled-seo-operations.md': 'seo',
  'ai-powered-back-office-design-guide.md': 'business-functions',
};

const settings = JSON.parse(fs.readFileSync('.vscode/settings.json', 'utf8'));
const nesting = settings['explorer.fileNesting.patterns'] || {};

const onDisk = fs.readdirSync(BLOG).filter((f) => /\.mdx?$/.test(f));
const byLower = new Map(onDisk.map((f) => [f.toLowerCase(), f]));

/** file -> hub slug */
const assign = new Map();
const ghosts = [];

for (const [pillar, kids] of Object.entries(nesting)) {
  const hub = PILLAR_TO_HUB[pillar.toLowerCase()];
  if (!hub) {
    console.error(`  UNMAPPED PILLAR (no hub): ${pillar}`);
    continue;
  }
  // the pillar post itself belongs to its own hub
  const pillarReal = byLower.get(pillar.toLowerCase());
  if (pillarReal) assign.set(pillarReal, hub);
  else ghosts.push(`${pillar} (pillar)`);

  for (const kid of String(kids).split(',').map((s) => s.trim()).filter(Boolean)) {
    const real = byLower.get(kid.toLowerCase());
    if (!real) { ghosts.push(`${kid} (under ${pillar})`); continue; }
    assign.set(real, hub);
  }
}

const unassigned = onDisk.filter((f) => !assign.has(f));

console.log(`posts on disk: ${onDisk.length}`);
console.log(`assigned a hub: ${assign.size}`);
console.log(`unassigned: ${unassigned.length}`);
unassigned.forEach((f) => console.log(`  NO HUB: ${f}`));
console.log(`ghost entries in the nesting map (not written yet): ${ghosts.length}`);
ghosts.forEach((g) => console.log(`  ghost: ${g}`));

if (unassigned.length) {
  console.error('\nRefusing to write. Every post must resolve to a hub first.');
  process.exit(1);
}

let changed = 0;
const counts = {};
for (const [file, hub] of assign) {
  counts[hub] = (counts[hub] || 0) + 1;
  const p = path.join(BLOG, file);
  const text = fs.readFileSync(p, 'utf8');
  const next = text.replace(/^tags:.*$/m, `tags: ["${hub}"]`);
  if (next === text) {
    if (!/^tags:/m.test(text)) console.error(`  NO tags: LINE in ${file}`);
    continue;
  }
  changed++;
  if (!DRY) fs.writeFileSync(p, next, 'utf8');
}

console.log(`\n${DRY ? 'would rewrite' : 'rewrote'} ${changed} files`);
console.log('\nHUB SIZES');
Object.entries(counts).sort((a, b) => b[1] - a[1])
  .forEach(([h, n]) => console.log(`  ${String(n).padStart(3)}  ${h}`));
