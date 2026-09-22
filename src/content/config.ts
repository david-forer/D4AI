// Import utilities from Astro
import { defineCollection, z } from 'astro:content';
import { HUB_SLUGS, PILLAR_SLUGS } from '../lib/hubs';

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
      // EXACTLY ONE TAG, AND IT MUST BE A HUB SLUG FROM src/lib/hubs.ts.
      //
      // Not optional, not two, not a free-text label. A post with a bad tag,
      // no tag, or more than one fails the build and does not publish. That is
      // deliberate: it is the only thing that reliably stops an automated
      // writer inventing tags like "long-term ROI", which render nowhere and
      // silently leave the post orphaned at pagination depth 15.
      //
      // The tag decides which hub page the post appears on, and hub pages are
      // what keep all 137 posts two clicks from the homepage.
      tags: z.array(z.enum(HUB_SLUGS)).length(1),

      // Optional. Which content cluster this post belongs to, which drives the
      // VSCode explorer nesting and nothing on the rendered site.
      //
      // Leave it off unless the post belongs to a pillar that is NOT the main
      // pillar of its hub. Today that means only the ai-governance and ai-agents
      // posts, because those two pillars share a hub with readiness and tools.
      // Everything else infers its pillar from its tag, so there is nothing to
      // remember in the normal case.
      pillar: z.enum(PILLAR_SLUGS).optional(),

      image: z.string().optional(),
      articleType: z.enum(['pillar', 'cluster', 'supporting']).optional(),
      seoTitle: z.string().optional(),
    }),
  }),
  'builds': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      // Search title, written to the Target Keyword | Benefit | Brand formula.
      // The on-page title stays short and human. Falls back to the title when
      // absent, so an entry without one still renders.
      seoTitle: z.string().optional(),
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
