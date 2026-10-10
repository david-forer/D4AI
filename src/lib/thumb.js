/**
 * Card thumbnail for a blog hero. Returns the 640px copy made by
 * scripts/make-thumbs.mjs when it exists, otherwise the original path,
 * so a post without a thumbnail still shows its image.
 */
import fs from 'node:fs';
import path from 'node:path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

export function thumbSrc(src) {
  const m = typeof src === 'string' && src.match(/^\/images\/blog\/([^/]+\.webp)$/);
  if (!m) return src;
  const thumb = `/images/blog/thumbs/${m[1]}`;
  return fs.existsSync(path.join(PUBLIC_DIR, thumb)) ? thumb : src;
}
