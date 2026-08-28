---
title: "Site SEO Check"
description: "A weekly health check for this site. Crawls everything, compares against last week, and writes a delta report."
pubDate: 2026-07-16T00:00:00Z
buildType: "skill"
status: "live"
stack: ["Claude Code", "Python", "GSC", "GA4"]
---

## What it does

Once a week this skill crawls the full site, pulls search and analytics data, and compares the snapshot against the previous one. Instead of a wall of metrics I get a short report of what changed: pages that dropped, new errors, wins worth noting.

## How it works

Deterministic Python collectors do the crawling and data pulls. The skill orchestrates them, runs the comparison, ingests any SEO tool exports I drop in an inbox folder, and writes the report. Numbers come from code, judgment comes from the model.

## Demo

Video coming soon.
