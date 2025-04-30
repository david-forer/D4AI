import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
    storyblok({
      accessToken: 'YOUR_PREVIEW_TOKEN',
      components: {
        blogPost: 'components/BlogPost',
      },
    }),
  ],
});
