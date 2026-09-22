---
title: "Universal Scraper"
description: "A research agent that turns a plain question into structured data pulled from the web, with a hard cap on cost."
seoTitle: "Universal Scraper | Web Research, Cost Capped | Forersight"
pubDate: 2026-07-18T00:00:00Z
buildType: "agent"
status: "live"
stack: ["Claude Code", "Apify"]
---

## What it does

I give it a research question, it picks the right scraper from the Apify marketplace, runs it, and hands back clean structured results. A results cap and a spend confirmation rule keep it from burning money on an open-ended crawl.

## How it works

The agent reads the request, searches for a matching Apify actor, checks the input schema, and runs it with sane limits. Results land in the agent's folder for review before anything moves into a project.

## Demo

Video coming soon.
