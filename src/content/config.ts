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
      // pillar of its hub. Today every hub has one pillar, so no post needs it.
      // Everything infers its pillar from its tag, so there is nothing to
      // remember in the normal case.
      pillar: z.enum(PILLAR_SLUGS).optional(),

      image: z.string().optional(),
      articleType: z.enum(['pillar', 'cluster', 'supporting']).optional(),
      seoTitle: z.string().optional(),
      // Optional. true builds FAQPage JSON-LD from the "Questions" section at
      // the end of the post, using the same question and answer text shown on the page.
      faqSchema: z.boolean().optional(),
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
  // Anonymized operations audits, served at /case-studies/<slug> and shown as
  // cards under the homepage hero. One .md file per study, frontmatter only.
  // Add a study by adding a file. `order` sets the card order and `draft: true`
  // hides it everywhere. `videoUrl` is optional: with no video the page simply
  // has no video block, never a placeholder.
  // Public wording rule: "an operations audit I performed". Nothing about where
  // or for whom the audits were done (David, 2026-10-07).
  'case-studies': defineCollection({
    schema: z.object({
      title: z.string(),
      accent: z.string().optional(),
      seoTitle: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      order: z.number(),
      draft: z.boolean().default(false),
      videoUrl: z.string().optional(),
      videoTitle: z.string().optional(),
      videoText: z.string().optional(),
      card: z.object({
        who: z.string(),
        number: z.string(),
        caption: z.string(),
        lines: z.array(z.object({ label: z.string(), value: z.string() })).max(3),
      }),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).min(3).max(6),
      cost: z.object({
        heading: z.string(),
        intro: z.string(),
        receiptTitle: z.string(),
        lines: z.array(z.object({ label: z.string(), value: z.string(), work: z.string() })),
        foot: z.string().optional(),
      }),
      findingsHeading: z.string(),
      findings: z.array(z.object({ title: z.string(), paragraphs: z.array(z.string()) })),
      recsHeading: z.string(),
      recs: z.array(z.object({ label: z.string(), text: z.string() })),
      automate: z.array(z.object({ title: z.string(), text: z.string() })),
      stops: z.string().optional(),
    }),
  }),
  // Sample SOPs, one per niche, served at /resources/sops/<slug>. Frontmatter
  // only, so a new niche is a new file and no code change. The businesses are
  // composites, never a real company. Text fields may carry inline links
  // (<a href="#safety">) and are rendered as HTML.
  // Step owner sets the colour in the diagram: ai, auto (rules, no AI), human
  // or shared. Box kinds: stop (red), after (after hours), why (neutral).
  'sops': defineCollection({
    schema: z.object({
      title: z.string(),
      accent: z.string().optional(),
      seoTitle: z.string().optional(),
      description: z.string(),
      niche: z.string(),
      cardText: z.string(),
      lede: z.string(),
      disclaimer: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      order: z.number(),
      draft: z.boolean().default(false),
      facts: z.array(z.object({ label: z.string(), value: z.string() })).min(3).max(8),
      rolesNote: z.string().optional(),
      safety: z.object({ heading: z.string(), intro: z.string(), items: z.array(z.string()), body: z.array(z.string()), note: z.string().optional() }).optional(),
      afterHours: z.object({ heading: z.string(), text: z.string() }).optional(),
      diagramIntro: z.string(),
      diagramFooter: z.string().optional(),
      aiLayer: z.object({
        intro: z.string(),
        rows: z.array(z.object({ source: z.string(), does: z.string(), kind: z.string() })),
        note: z.string().optional(),
      }),
      beforeAfter: z.object({
        summary: z.string(),
        today: z.string(),
        removed: z.array(z.string()),
        stay: z.array(z.string()),
        newWork: z.array(z.string()),
        note: z.string().optional(),
      }),
      steps: z.array(z.object({
        title: z.string(),
        // Shorter title for the diagram box, which fits about 20 characters.
        short: z.string().optional(),
        owner: z.enum(['ai', 'auto', 'human', 'shared']),
        diagram: z.array(z.string()).min(1).max(3),
        who: z.string(),
        tools: z.array(z.string()),
        procedure: z.array(z.string()),
        automationDoes: z.string().optional(),
        aiDoes: z.string().optional(),
        personDoes: z.string(),
        boxes: z.array(z.object({ kind: z.enum(['stop', 'after', 'why']), label: z.string(), text: z.string() })).default([]),
        done: z.string(),
      })).min(3),
      outage: z.array(z.string()).optional(),
      consent: z.object({ items: z.array(z.string()), note: z.string() }).optional(),
      raci: z.array(z.object({ step: z.string(), r: z.string(), a: z.string(), c: z.string(), i: z.string() })),
      ownership: z.array(z.string()),
      metrics: z.array(z.object({ measure: z.string(), baseline: z.string(), target: z.string(), owner: z.string(), how: z.string() })),
      metricsNote: z.string().optional(),
      snapshot: z.array(z.object({ label: z.string(), value: z.string() })),
      changelog: z.array(z.object({ date: z.string(), change: z.string(), version: z.string(), by: z.string() })),
    }),
  }),
  // Statistics hubs and other citable data pages, served at /research/<slug>.
  // Kept out of the blog collection so they never count toward a hub's post
  // total or show up in the blog index. A tag is optional and, when present,
  // must still be a hub slug so the chip links to a real hub page.
  'research': defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      seoTitle: z.string().optional(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      heroImage: z.string().optional(),
      tags: z.array(z.enum(HUB_SLUGS)).max(1).optional(),
    }),
  }),
};
