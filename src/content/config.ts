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
      articleType: z.enum(['pillar', 'cluster', 'supporting']).optional(),
      seoTitle: z.string().optional(),
    }),
  }),
  'builds': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      buildType: z.enum(['app', 'skill', 'agent']),
      status: z.enum(['live', 'in-progress', 'archived']).default('live'),
      heroImage: z.string().optional(),
      videoUrl: z.string().optional(),
      githubUrl: z.string().optional(),
      stack: z.array(z.string()).optional(),
      featured: z.boolean().default(false),
    }),
  }),
};
