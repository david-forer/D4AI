---
title: "SERP Gap"
description: "A Claude Code skill that compares one of my pages with the pages ranking for its keyword and shows where mine falls outside the pack."
seoTitle: "SERP Gap | On-Page Gap Analysis Against the Live Top 20 | Forersight"
pubDate: 2026-09-27T00:00:00Z
buildType: "skill"
status: "live"
heroImage: "/images/builds/serp-gap.webp"
stack: ["Claude Code", "Python", "DataForSEO", "GSC"]
---

## What it does

It replaces two paid on-page tools, Page Optimizer Pro and CORA. Give it a page and a keyword and it reports where the page sits against the pages Google ranks for that keyword. It also lists the words those pages share that mine is missing.

## How it works

It starts with the free data. Search Console shows which searches Google already matches the page to, and whether a title fix would do more than a rewrite. Next it checks the live results for the keyword. If the ranking pages sell to a different market, it stops there, since no amount of editing will make those pages my competition.

A local Python script then fetches the top 20 pages and measures each one: word count, headings, links, schema and where the keyword shows up, zone by zone from the title down to the image alt text. For each measure it reports the range covered by the middle half of the ranking pages and where my page falls. With 20 pages, correlation math mostly produces noise, so I left it out. A second script pulls the AI Overview, the People Also Ask questions and related searches. Claude turns the tables into a short, ranked list of fixes.

## What it looks like

![A SERP Gap table comparing davidjforer.com's AI readiness audit page with 13 ranking pages, with internal links flagged below the range](/images/builds/serp-gap.webp)

This is its report on my AI readiness audit page, laid out as a table. The page had 1 internal link against a range of 3 to 17 for the pages ranking above it. It flagged the same gap on 3 of my pages.
