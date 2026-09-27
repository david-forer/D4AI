---
title: "SERP Analyzer"
description: "A desktop app for writers. Type a search and it tells you what kind of piece Google rewards and who you would be up against."
seoTitle: "SERP Analyzer | Know What to Write Before You Start | Forersight"
pubDate: 2026-09-25T00:00:00Z
buildType: "app"
status: "live"
heroImage: "/images/builds/serp-analyzer.webp"
githubUrl: "https://github.com/david-forer/serp-analyzer"
stack: ["Python", "OpenAI", "Serper", "DataForSEO"]
---

## What it does

Most writers pick a format by feel. This app reads the top 10 Google results for a search and answers two questions in plain language: what kind of piece Google rewards, and who you would be competing with. It also lists the questions readers ask and the related searches worth checking next.

## How it works

The app pulls the top 10 results, then an AI model labels each one by page type, such as how-to guide, explainer, service page or forum thread, and by how well known the site behind it is. The format recommendation comes from counting page types. The competition rating (Open, Mixed or Crowded) comes from counting big names and established brands. Every rating traces back to results you can click and check.

It does not predict whether you will rank. That depends mostly on your own site, which the app cannot see, so it describes the field and leaves the call to you.

## What it looks like

![SERP Analyzer showing its read of the search AI readiness assessment framework: Explainer, with Crowded competition](/images/builds/serp-analyzer.webp)

This is the app's read of "AI readiness assessment framework". Nine of the top 10 results are explainers, and Microsoft, Cisco, the UN and the ITU hold four of the spots, so the rating is Crowded. The page also suggests what to include and lists the questions readers ask.

## Get it

The app is free and open source. It runs on Windows 10 or 11 with Python 3.10 or newer. You need your own OpenAI API key and a Serper key, or DataForSEO if you want AI Overviews. Each check costs well under a cent in API fees.

The [setup guide on GitHub](https://github.com/david-forer/serp-analyzer#setup) walks through the install step by step, written for people who have never opened PowerShell.
