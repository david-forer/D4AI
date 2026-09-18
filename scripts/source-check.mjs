// Source check: catches private notes and byte-level corruption in the repo
// before they can be built, deployed or committed to a public GitHub repo.
//
// This exists because of 2026-09-18. Four pages carried an HTML comment naming
// a private knowledge-base path and restating an internal price ladder,
// including a tier the page itself does not show. Two of those comments were
// stripped by the build and two shipped into live HTML, so a live-only check
// could never have found all four. The repo is public, so a comment in src/ is
// published whether or not it reaches a rendered page.
//
// The same commits also put a literal NUL byte into two .astro files. A prior
// session wrote the Windows path through a non-raw Python string literal, where
// \00 is a valid octal escape for NUL. Python warns about the invalid escapes
// that follow it and says nothing about the NUL. Astro passed the byte through
// to HTML, where it decoded as U+FFFD, and that stray character was the only
// reason any check noticed at all.
//
// Runs against the checked-out source, needs no network, and finishes in about
// a second, so it is placed ahead of the live check in the workflow.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOTS = ['src', 'public'];
const TEXT = /\.(astro|ts|js|mjs|cjs|md|mdx|json|css|html|txt|xml|svg)$/i;

// Structural, not a name list. An earlier draft of this file enumerated the
// actual private directory and filenames, which published the very thing it was
// written to protect, in a public repo. These patterns match the SHAPE of a
// local Windows path instead, so they name nothing and they also catch private
// directories that do not exist yet.
//
// A local machine path is never legitimate content on a public marketing site.
// If a blog post ever needs to show one in a code sample, add that file to
// ALLOW below rather than loosening these.
const LEAKS = [
  ['Windows drive path',   /[A-Za-z]:\\[\w.]/g],
  ['numbered private dir', /\b\d{2}_[A-Z][A-Z0-9_]{2,}\b/g],
  ['underscore-caps dir',  /[\\/]_[A-Z]{3,}\b/g],
];

// Optional belt and braces. A gitignored .private-patterns file, one regex per
// line, lets exact private names be matched locally without committing them.
// Blank lines and # comments are ignored. Absent by default, and absent in CI.
function localPatterns() {
  try {
    return readFileSync('.private-patterns', 'utf8')
      .split('\n')
      .map((l) => l.trim())
      .filter((l) => l && !l.startsWith('#'))
      .map((l) => [`local pattern /${l}/`, new RegExp(l, 'g')]);
  } catch {
    return [];
  }
}

const ALLOW = [
  // 'src/content/blog/some-post.md',
];

let passes = 0;
let failures = 0;
const ok = (m) => { passes++; console.log('  PASS  ' + m); };
const fail = (m) => { failures++; console.log('  FAIL  ' + m); };

// Leading-dot files are local tool state by convention, not deliverables. They
// are excluded because public/images/blog/.dashboard-comments.json is the state
// file of an image-review dashboard: untracked, so it never reaches GitHub, and
// 404 live because dotfiles are not served. It does get copied into dist/ on
// every build, which is worth knowing but is not this check's job.
function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (TEXT.test(name)) out.push(p);
  }
  return out;
}

const files = ROOTS.flatMap((r) => {
  try { return walk(r); } catch { return []; }
}).filter((f) => !ALLOW.includes(relative('.', f).split('\\').join('/')));

console.log(`\nChecking ${files.length} source files in ${ROOTS.join(', ')}`);

// 1. Byte-level corruption. A NUL byte in a text file is never intentional and
// survives into rendered HTML, where it becomes an invalid character.
console.log('\nByte integrity');
const nul = [];
const bom = [];
for (const f of files) {
  const raw = readFileSync(f);
  if (raw.includes(0x00)) {
    const line = raw.subarray(0, raw.indexOf(0x00)).toString('utf8').split('\n').length;
    nul.push(`${f}:${line}`);
  }
  if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) bom.push(f);
}
if (nul.length) fail(`NUL byte in source: ${nul.join(', ')}. A non-raw string literal ate a backslash escape. Rewrite the line with a raw string or the edit tool.`);
else ok('no NUL bytes');
if (bom.length) fail(`UTF-8 BOM in source: ${bom.join(', ')}. Written by PowerShell Set-Content. Rewrite without it.`);
else ok('no UTF-8 BOMs');

// 2. Private disclosure. The repo is public, so this applies to every tracked
// file, not only the ones whose comments survive the build.
console.log('\nPrivate disclosure');
const RULES = [...LEAKS, ...localPatterns()];
if (RULES.length > LEAKS.length) console.log(`  (plus ${RULES.length - LEAKS.length} pattern(s) from local .private-patterns)`);
let leaking = 0;
for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const hits = [];
  for (const [name, re] of RULES) {
    const found = [...text.matchAll(re)];
    for (const m of found) {
      const line = text.slice(0, m.index).split('\n').length;
      hits.push(`line ${line}: ${name} "${m[0]}"`);
    }
  }
  if (hits.length) {
    leaking++;
    fail(`${f} -> ${hits.slice(0, 4).join('; ')}${hits.length > 4 ? ` (+${hits.length - 4} more)` : ''}`);
  }
}
if (leaking === 0) ok(`no private paths or filenames in ${files.length} source files`);
else console.log('\n  Private notes belong in SEO-WORK-LOG.md, which is gitignored. A comment in\n  src/ is published to a public repo whether or not it reaches a rendered page.');

console.log(`\n${passes} passed, ${failures} failed\n`);
process.exit(failures ? 1 : 0);
