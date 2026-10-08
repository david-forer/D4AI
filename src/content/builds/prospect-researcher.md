---
title: "Prospect Researcher"
description: "A Claude Code agent that researches a sales prospect before the first email or call, scores the fit, and drafts the outreach or a one-page call brief."
seoTitle: "Prospect Researcher | AI Sales Prospect Research and Pre-Call Briefs | Forersight"
pubDate: 2026-09-29T00:00:00Z
buildType: "agent"
status: "live"
githubUrl: "https://github.com/david-forer/prospect-researcher"
stack: ["Claude Code", "Python", "Vibe Prospecting"]
---

## What it does

It does the homework before a sales conversation. Give it a company and a contact, and it reads their website, checks recent news and the contact's background, then scores how well they fit the kind of client I work with. I hate prospecting, so this handles the part I kept putting off.

It works in two modes. Outreach mode drafts a short cold email that opens with something specific to that company, and every row lands in a spreadsheet sorted by fit. Brief mode writes one screen of notes to read in the five minutes before a call, with five questions tied to what it found. Nothing gets sent. I review every draft.

## How it works

A list comes in from Vibe Prospecting or a plain CSV. A small Python script cuts it to one decision-maker per company, since a data vendor will happily sell you five partners at the same law firm. Then each prospect gets its own copy of the agent, and they run in parallel (a batch of 10 takes about as long as one).

Each copy reads my ideal customer profile and writing rules before it looks at the prospect. It fetches the prospect's site and a few inner pages, then runs four or five searches. Any size or revenue figure from the list gets checked against what it finds, and it says so when they disagree. Every claim carries its source URL. A second script turns the results into the review spreadsheet.

It runs on a Claude Code subscription, with no separate API key or paid search tool.

## What it looks like

On a test pull of Milwaukee firms, the list vendor tagged one law firm at 11 to 50 staff and $1M to $5M in revenue. The agent's note on that row:

```
Fit: Low. Independent research puts headcount around 43, and the firm already
has a VP of Administration and an IT Manager, which cuts against the
no-operations-leader profile. Multi-shareholder firm, not founder-led.
```

A list tool would have mailed that firm. In the same batch, a Brookfield agency running brand tours for Keurig and Modelo with fewer than 10 people scored High, and its email opened with the problem of staffing drivers across several markets at once.

For a sales team, the same setup works against your own customer profile. Point it at tomorrow's calls and every rep walks in with a brief instead of a cold start.
