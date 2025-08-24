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
    sitemap(),               // sitemap.xml built at deploy
  ],
});

