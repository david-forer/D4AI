// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidjforer.com',
  trailingSlash: 'never',

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
        !page.includes('/blog/category/') &&
        !page.includes('/content') &&
        !page.includes('/blog/page/'),
    }),
  ],
});

