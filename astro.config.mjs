import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'YOUR_PREVIEW_TOKEN',
      components: {
        blogPost: 'components/BlogPost',
        integrations: [tailwind()],
      },
    }),
  ],
});