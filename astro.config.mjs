// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Build a map of /blog/<slug> -> last modified date from frontmatter
// (updatedDate if present, otherwise pubDate) so the sitemap carries lastmod.
function blogLastmodMap() {
  const dir = path.resolve('./src/content/blog');
  const map = new Map();
  if (!fs.existsSync(dir)) return map;
  for (const file of fs.readdirSync(dir)) {
    if (!/\.(md|mdx)$/.test(file)) continue;
    const src = fs.readFileSync(path.join(dir, file), 'utf-8');
    const fm = src.match(/^---\s*([\s\S]*?)\n---/);
    if (!fm) continue;
    const pick = (key) => {
      const m = fm[1].match(new RegExp('^' + key + ':\\s*["\']?([0-9]{4}-[0-9]{2}-[0-9]{2})', 'm'));
      return m ? m[1] : null;
    };
    const date = pick('updatedDate') || pick('pubDate');
    if (!date) continue;
    const slug = file.replace(/\.(md|mdx)$/, '').toLowerCase();
    map.set('/blog/' + slug, date);
  }
  return map;
}
const lastmodMap = blogLastmodMap();

export default defineConfig({
  site: 'https://davidjforer.com',
  trailingSlash: 'never',

  // Dev/preview server port comes from the environment when assigned (falls back to Astro's 4321)
  server: ({ command }) => ({
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  }),

  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      // Exclude noindex/utility pages from sitemap
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/thankyou') &&
        !page.includes('/ob-buildout') &&
        !page.includes('/fb-help') &&
        !page.includes('/html') &&
        !/\/content\/?$/.test(page) &&
        !page.includes('/blog/page/') &&
        !page.includes('/seo-ai-resources') &&
        // The agent-info endpoint is JSON, not a page. Crawlers reach it from
        // the link rel="alternate" in Layout.astro and from llms.txt.
        !page.includes('/api/'),
      serialize: (item) => {
        const pathname = new URL(item.url).pathname.replace(/\/$/, '');
        const lastmod = lastmodMap.get(pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});

