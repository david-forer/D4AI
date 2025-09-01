// Import utilities from Astro
import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
export const collections = {
  'blog': defineCollection({
    // By default, Astro will look for both .md and .mdx files
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
      image: z.string().optional(),
    }),
  }),
};
