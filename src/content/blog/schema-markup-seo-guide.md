---
title: "The Best Schema Markup Types for SEO: A Complete Guide"
description: "Which schema markup types still earn rich results in 2026, which ones Google retired, and how to implement each on a small business site."
pubDate: 2025-12-13T00:00:00Z
updatedDate: 2026-10-08T00:00:00Z
tags: ["seo"]
heroImage: "/images/blog/schema-markup.webp"
articleType: "cluster"
---

Schema markup is structured data that tells search engines what your content means. This guide covers which types of schema still earn something in Google Search in 2026, which ones Google has retired, and how to implement each one on a small business site.

## Key takeaways

- Schema markup is structured data that tells search engines what a page is, who wrote it and how it fits your site. Google's own documentation says it does not guarantee that any feature will show up in search results.
- Several types that used to produce visible rich results no longer do. FAQ rich results stopped appearing on May 7, 2026. HowTo rich results were removed in 2023. The sitelinks search box was removed in 2024.
- Types that still earn a visible result include BreadcrumbList, Article and BlogPosting, Organization, and SoftwareApplication when it carries pricing and a rating or review.
- Person and WebSite markup describe your authors and your site to machines. They do not produce a visible rich result.
- JSON-LD is the preferred format because it keeps structured data separate from your HTML.
- Old markup can stay in place. Google says unused structured data does not cause problems for Search.

## What happened to schema in search results

Schema markup is still worth doing, but the payoff has shrunk and moved. The visible extras that made schema exciting a few years ago have been switched off one at a time.

Here is the timeline, from Google's own documentation and announcements:

- In August and September 2023, Google stopped showing HowTo rich results and removed the documentation. It had already limited FAQ rich results to well-known government and health sites.
- In late 2024, Google removed the sitelinks search box, the search field that appeared inside some branded listings.
- In June 2025 and November 2025, Google phased out several lesser-used types, including Book Actions, Course Info, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing and Practice Problems.
- On May 7, 2026, FAQ rich results stopped appearing in Google Search for every site. The FAQ search appearance filter and the Rich Results Test support for FAQ were removed in June 2026, and the Search Console API support ends in August 2026.

John Mueller put the pattern plainly in November 2025: markup types come and go. A page marked up for a feature that disappears loses the feature and nothing else. The markup itself stays valid, so there is no reason to rip it out.

The practical question is no longer which schema gets you the most space in the results. It is which schema describes your pages accurately, and which of it still earns a visible result.

## Why Schema Markup Matters for SEO

Schema markup is structured data that tells search engines what your content means, not just what it says. When you mark up an article, you are explicitly identifying the headline, author, publish date and body content. When you mark up an organization, you are defining its name, logo and profiles.

Google uses this data to build rich results where a feature exists, and to understand the entities behind a page. Marking up your organization, authors and content types helps a search engine build a more complete model of your site and who stands behind it.

Structured data does not rank a page on its own, and it does not guarantee a feature. Its job is to remove guesswork about what a page is. Some types still change how your listing looks. Others work in the background.

The following types are the ones worth knowing, with an honest note on what each does today.

## FAQPage Schema

FAQPage schema used to produce expandable accordions under a search result. That has ended. FAQ rich results no longer appear in Google Search for any site as of May 7, 2026, and Google has removed the matching report and test support.

FAQPage is still a valid schema.org type, and Google says existing FAQ markup can stay on your pages. Other search engines and tools that read structured data can still use it, and it keeps a clear question and answer structure that is easy for a machine to lift.

So the advice changes. Do not add FAQPage markup to chase a rich result, because there is none to chase. If your pages already carry it, leave it. If you publish a visible set of questions and answers because readers need them, write them well and mark them up if it costs you nothing.

The rule that was always true still applies. Every question and answer in the markup must be visible on the page. You cannot use schema to surface content that users cannot see.

## Article and BlogPosting Schema

Article schema tells Google that a piece of content is editorial in nature. It identifies the headline, author, publish date and modification date. BlogPosting is a more specific subtype that applies to blog content.

Article remains a supported structured data type in Google's search gallery. It does not generate flashy rich snippets for most small sites, but it helps Google read freshness, authorship and topic. Marking up your blog posts correctly ensures that Google recognizes them as articles rather than generic web pages.

You should apply Article or BlogPosting schema to all blog content. If your site publishes news, use NewsArticle instead.

Google recommends including the headline, a featured image, the dates published and modified, and the author. The author is best linked to a Person entry, and the publisher can point to your Organization entry.

This is one of the simplest schema types to implement, and it forms the foundation for other editorial markup.

## HowTo Schema

HowTo schema used to produce step-by-step lists in search results, often with an image for each step. Google removed that rich result in 2023 on both desktop and mobile, and it removed the HowTo documentation soon after.

The schema.org type still exists and the markup is harmless, but it no longer changes how a result looks. There is no reason to add it to new pages, and no urgent reason to remove it from old ones.

The part of the old advice that still holds is the page itself. A guide with clearly labeled, sequential steps is easier for readers to follow and easier for a machine to summarize. Write the steps well and let the headings do the work. Article or BlogPosting schema is the right markup for that page.

## BreadcrumbList Schema

Breadcrumbs help users understand where they are within your site hierarchy. BreadcrumbList schema tells Google the same thing, and Google can show the path in the result in place of the raw URL.

Instead of showing "example.com/blog/category/post-title", Google can display "Home > Blog > Category > Post Title". That format is easier to read and shows the page's place in your site structure.

Google's documentation says the breadcrumb feature is available on desktop. Treat the visible breadcrumb as a bonus on desktop searches and the markup as a clear statement of your site structure everywhere.

BreadcrumbList requires a list of items, each with a position, a name and a URL. The final item does not need a URL. The markup should match the breadcrumbs visible on your page. If your site does not display breadcrumbs to users, add visible breadcrumbs first and the markup second.

This schema type is low effort, and it is one of the few that still changes how a listing looks.

## SoftwareApplication Schema

SoftwareApplication schema provides structured data about a software product. It tells Google what your application is, what platforms it supports and what it costs.

Google's software app feature has stricter requirements than most. To be eligible, the markup needs the application name, an offer with a price (use 0 for a free app), and either an aggregate rating or a review. Markup without a real rating or review does not qualify for the rich result.

That makes it a fit for software you actually sell or publish, with genuine user reviews. It is not a fit for a services page, and you should never invent ratings to meet the requirement.

If you are marking up a mobile app, use MobileApplication. If your product is a web-based tool, SoftwareApplication is the correct choice. Even without the rich result, the markup tells Google clearly that a page describes a software product.

## WebSite Schema with SearchAction

WebSite schema defines your site as a whole, including its name and URL. It used to pair with SearchAction to show a search box inside your Google listing for branded searches.

Google removed the sitelinks search box in late 2024. The SearchAction markup no longer produces anything, so there is no benefit in building a search URL pattern for it.

WebSite markup on its own is still harmless and still useful. It states your site name and URL in a form machines can read. Add it once to your homepage or load it globally, and skip the SearchAction part on new builds.

## Person Schema for Author Profiles

Person schema defines an individual, typically an author or subject matter expert. It includes their name, job title, affiliation and optionally a photo and social profiles.

Google does not show a visible Person rich result, so this markup has no direct effect on how your listing looks. Its value is clarity. It ties your content to a named, real person and links to places that confirm who they are.

Apply Person schema to author bio pages or embed it within Article schema. If your blog has multiple contributors, each should have an entry with a name, a brief description of their role and a link to their profile page.

If your authors have published work elsewhere, "sameAs" links to their LinkedIn profiles or other verifiable presences help confirm that the person is a real entity. This matters most for topics where readers need to trust who is speaking, such as health, finance and legal content.

## Organization Schema

Organization schema defines your business or brand. It includes your name, logo, contact information and social profiles.

Organization is a supported structured data type in Google's search gallery, and Google uses it for facts such as your logo and legal name. Accurate markup gives it the facts it needs and nothing more.

Implement Organization schema globally. The markup should include your official business name, logo URL, a description of what you do and "sameAs" links to your verified social profiles. If your organization has a physical location, add the address.

Organization schema works with other types. When you mark up an article, the publisher field should reference your Organization entry. When you mark up your authors, their affiliation should link back to it.

This creates a web of structured data that helps Google understand the relationships between your content, your team and your brand.

## Schema Types Compared

| Schema type | Where to apply it | What it does in search now |
|---|---|---|
| FAQPage | Pages with a visible set of questions and answers | No rich result since May 7, 2026. Markup stays valid |
| Article and BlogPosting | All blog and editorial content | Supported. Helps Google read freshness, authorship and topic |
| HowTo | Guides with sequential steps | No rich result since 2023. Markup stays valid |
| BreadcrumbList | Site-wide, especially posts and deep pages | Supported. Breadcrumb path shown on desktop |
| SoftwareApplication | Software products with pricing and real reviews | Supported when it has a price and a rating or review |
| WebSite with SearchAction | Homepage or global, once per site | Search box removed in 2024. WebSite still names your site |
| Person | Author bio pages or inside Article schema | No visible result. Describes your authors to machines |
| Organization | Global, in the header or footer | Supported. Gives Google your name, logo and profiles |

## Implementation Considerations

Schema markup can be added to your site in several ways. JSON-LD is the preferred format because it keeps the structured data separate from your HTML. You add a script tag containing the schema to your page's head or body, and Google reads it without affecting your visible content.

Microdata and RDFa are older formats that embed schema directly into your HTML tags. These still work, but JSON-LD is cleaner and easier to maintain.

Once you implement schema, validate it using Google's Rich Results Test and the Schema.org validator. They flag errors and warnings that need to be fixed. Keep in mind that the Rich Results Test no longer reports on FAQ markup.

After deployment, check the rich result reports in Google Search Console. They show which pages have valid markup for the types Google still supports. If your markup is correct but a feature is not appearing, Google may not be showing it for your query, or your content may not meet its quality thresholds.

Schema markup is not a guarantee of anything. Google decides when and where to show a feature, and it can retire a feature entirely, as it has done several times. Implementing schema correctly keeps you eligible for what exists today and makes your pages easier to understand.

## Final Thoughts

Schema markup is a modest technical investment that pays off over time. It improves how Google reads your content, and for a few supported types it improves how your listing looks.

The types covered here are the ones worth knowing for most sites. Article, BreadcrumbList and Organization still earn their place. Person and WebSite describe you to machines. FAQPage and HowTo are retired as rich results and can stay where they already exist.

Start with the markup that matches your content. If you publish blog posts, implement Article and Person first. Add BreadcrumbList and Organization next. Add SoftwareApplication only for real software with real reviews.

Check Google's documentation before you build around any feature. The list of supported types has changed every year since 2023, and the safest approach is to mark up what is true about your pages and treat any visible feature as a bonus.

## Questions that come up often

### What are the main types of schema in SEO?

The ones worth most sites' time are Article or BlogPosting, BreadcrumbList, Organization, Person, WebSite and, for real software products, SoftwareApplication. FAQPage and HowTo are still valid types, but Google no longer shows rich results for them.

### Does schema markup help SEO?

It helps Google interpret your content, and a few supported types can change how your listing looks. It does not rank a page on its own, and Google does not guarantee that any feature will appear. Think of it as making your pages easier to read for a machine.

### Is FAQ schema still worth using?

Not for rich results. Google stopped showing FAQ rich results on May 7, 2026, for every site. The markup is still valid and Google says it can stay in place, so you do not need to remove it. Write FAQ sections for your readers and treat any markup as optional.

### Did Google remove HowTo rich results?

Yes. Google stopped showing HowTo rich results in 2023 on both desktop and mobile and removed its documentation. The markup is harmless, but it no longer changes how a result looks.

### Which schema types should I implement first?

Match them to your content. A blog should start with Article and Person, then add Organization and BreadcrumbList. Add SoftwareApplication only if you sell or publish software with genuine reviews.

### What format should schema markup use?

JSON-LD. It sits in a script tag in the page head or body, separate from your visible HTML, so it is easier to maintain. Microdata and RDFa still work, but they tangle the markup into your page code.

### Why is my schema valid but not showing rich results?

Google decides when to show a feature based on relevance, query intent and content quality, and some features no longer exist. Correct markup makes you eligible, it does not guarantee a feature. Check the rich result reports in Search Console to confirm Google sees your markup, then be patient.


---

*Related reading: [AI Enabled SEO Operations](/blog/ai-enabled-seo-operations) · [Entity Mapping: A Practical Framework for Modern SEO](/blog/entity-mapping-article)*

If you are ready to operationalize your SEO, the [SEO accelerator](/seo-accelerator) builds the operational layer.
