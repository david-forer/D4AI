// Writes 640px-wide card thumbnails to public/images/blog/thumbs/.
// Skips files whose thumbnail is already newer than the source.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SRC = path.resolve('public/images/blog');
const OUT = path.join(SRC, 'thumbs');
fs.mkdirSync(OUT, { recursive: true });

let made = 0;
for (const f of fs.readdirSync(SRC)) {
  if (!f.endsWith('.webp')) continue;
  const src = path.join(SRC, f);
  const dest = path.join(OUT, f);
  if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= fs.statSync(src).mtimeMs) continue;
  await sharp(src).resize({ width: 640, withoutEnlargement: true }).webp({ quality: 78 }).toFile(dest);
  made++;
}
console.log(`thumbnails written: ${made}`);
