// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Your canonical, preferred URL (no www)
  site: 'https://davidjforer.com',

  integrations: [
    tailwind(),  // TailwindCSS
    mdx(),       // MDX support
    sitemap(),   // Auto-generate /sitemap.xml at build
  ],

  // Optional: uncomment if you want URLs without trailing slash
  // trailingSlash: 'never', // 'always' | 'ignore' | 'never'
});
