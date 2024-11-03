import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'YOUR_PREVIEW_TOKEN',
      components: {
        blogPost: 'components/BlogPost',
      },
    }),
  ],
});