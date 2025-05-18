// Import utilities from Astro
import { defineCollection, z } from 'astro:content';

// Define the blog collection schema
export const collections = {
  'blog': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.string()).optional(),
    }),
  }),
};