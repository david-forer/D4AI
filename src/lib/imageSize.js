/**
 * Read the intrinsic pixel dimensions of an image in /public at build time.
 *
 * Why this exists: an <img> with no width/height has no intrinsic aspect ratio,
 * so the browser reserves zero height until the bytes arrive and then reflows
 * the page. That reflow is Cumulative Layout Shift, and on a blog post the hero
 * is also the LCP element, so it is the single worst place on the site to have
 * it. Astro frontmatter runs in Node during the build, so we can just read the
 * file header and emit exact numbers.
 *
 * Only the headers are parsed, not the pixel data. PNG, JPEG and all three
 * WebP variants are covered, which is everything in public/images.
 */
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const cache = new Map();

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function parse(buf) {
  if (buf.length > 24 && buf.subarray(0, 8).equals(PNG_MAGIC)) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }

  if (
    buf.length > 30 &&
    buf.subarray(0, 4).toString('latin1') === 'RIFF' &&
    buf.subarray(8, 12).toString('latin1') === 'WEBP'
  ) {
    const format = buf.subarray(12, 16).toString('latin1');
    if (format === 'VP8X') {
      return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    }
    if (format === 'VP8 ') {
      const i = buf.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
      if (i > 0) {
        return {
          width: buf.readUInt16LE(i + 3) & 0x3fff,
          height: buf.readUInt16LE(i + 5) & 0x3fff,
        };
      }
    }
    if (format === 'VP8L') {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }

  if (buf.length > 4 && buf[0] === 0xff && buf[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buf.length) {
      if (buf[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buf[offset + 1];
      // SOF0 through SOF15, skipping DHT (c4), JPG (c8) and DAC (cc).
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: buf.readUInt16BE(offset + 7), height: buf.readUInt16BE(offset + 5) };
      }
      offset += 2 + buf.readUInt16BE(offset + 2);
    }
  }

  return null;
}

/**
 * @param {string} src A root-relative path such as "/images/blog/foo.webp".
 * @returns {{width: number, height: number} | null} null when the file is
 *   missing or the format is not recognised, so callers can fall back to
 *   emitting no dimensions rather than emitting wrong ones.
 */
export function getImageSize(src) {
  if (!src || typeof src !== 'string' || !src.startsWith('/')) return null;
  if (cache.has(src)) return cache.get(src);

  let result = null;
  try {
    const file = path.join(PUBLIC_DIR, decodeURIComponent(src).split('?')[0]);
    if (file.startsWith(PUBLIC_DIR) && fs.existsSync(file)) {
      result = parse(fs.readFileSync(file));
    }
  } catch {
    result = null;
  }

  cache.set(src, result);
  return result;
}
