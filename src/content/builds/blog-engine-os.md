---
title: "Blog Engine OS"
description: "An agent that writes, images, and stages SEO blog posts for this site twice a week. I review, then push."
pubDate: 2026-07-20T00:00:00Z
buildType: "agent"
status: "live"
stack: ["Claude Code", "Astro", "Scheduled tasks"]
featured: true
---

## What it does

Blog Engine OS runs on a schedule, picks the next topic from a planned queue, writes a full article in my voice, generates a hero image, and stages everything in the site repo. Nothing publishes on its own. The uncommitted files are my approval queue.

## How it works

A scheduled run invokes a Claude Code skill that holds the whole workflow: topic selection, drafting against my writing rules, image generation, frontmatter, and internal links to the right pillar pages. State lives in a small folder of tracking files so each run knows what came before it.

## Demo

Video coming soon.
