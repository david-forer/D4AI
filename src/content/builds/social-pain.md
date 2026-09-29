---
title: "Social Pain"
description: "A local app that finds people describing their problems on Reddit, Hacker News and Twitter, so I can hear a market in its own words before I write for it."
seoTitle: "Social Pain | Find Customer Pain Points on Reddit, Hacker News and Twitter | Forersight"
pubDate: 2026-09-29T00:00:00Z
buildType: "app"
status: "live"
githubUrl: "https://github.com/david-forer/social-pain"
stack: ["Next.js", "TypeScript", "Apify", "Algolia"]
---

## What it does

Before I write a post or shape an offer, I want to know the problem is real and how the people who have it describe it. This app finds those people. I type an audience or topic, pick Reddit, Hacker News or Twitter, and it returns the posts where someone is complaining or asking how anyone else copes, with a link back to each one.

The words matter more than the count. One line from a real owner about doing everything themselves is a better headline than anything a keyword tool will give me.

## How it works

Each source is its own small module, and they all return posts in the same shape, so the interface never needs to know where a post came from. Hacker News runs on a free public search API and answers in about a second. Reddit and Twitter run through Apify scrapers, since Reddit wouldn't approve an API app for this account. A Reddit search takes about three and a half minutes and costs around 14 cents.

Filtering was the hard part. My first version ranked posts by how many complaint words they held, so a long rant about the FAA beat a post that was actually about small business operations. Now the search engine's own relevance order stays in charge, and complaint language only decides what gets kept. On Hacker News it also puts Ask HN and Tell HN threads first, since that's where people describe problems, and drops the monthly hiring threads.

It runs on my own machine. The search has no login and every Reddit or Twitter search spends real credit, so it's built to stay local, and the README says what to add before anyone hosts it.

## What it looks like

A Twitter search for "small business owner overwhelmed" over the past month brought back 25 posts. Sixth on the list was this one, which lays out the path most of my clients are on:

```
Every business owner follows the same path:
1) Do everything yourself
2) Get overwhelmed. Hire the...
```

That's the founder bottleneck in about 15 words.

## Demo

Video coming soon.
