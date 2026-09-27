---
title: "Presentation Builder"
description: "A desktop app that turns pasted notes into a finished slide deck in one click. Pick the slide count and a style, and it writes the slides and the speaker notes."
seoTitle: "Presentation Builder | Notes to Slide Deck in One Click | Forersight"
pubDate: 2026-09-27T00:00:00Z
buildType: "app"
status: "live"
heroImage: "/images/builds/presentation-builder.webp"
githubUrl: "https://github.com/david-forer/presentation-builder"
stack: ["Electron", "Node", "Claude"]
---

## What it does

Building slides takes longer than deciding what to say on them. Presentation Builder takes my notes, a call transcript or a rough outline and returns a finished deck, with speaker notes on every slide.

## How it works

I paste up to 50,000 characters of notes, pick 3 to 15 slides and choose one of 12 visual styles. Claude plans the slides from the notes, writes each one and adds the talking points. The app drops the slides into the chosen style and shows the deck in a preview window.

The output is a single HTML file. It opens in any browser, moves with the arrow keys and goes full screen with F. Every deck is saved to a folder, so past decks sit in a list on the left and open again with one click.

## What it looks like

![Presentation Builder with pasted notes on the left and the title slide of a 5 slide deck in the preview, with speaker notes beside it](/images/builds/presentation-builder.webp)

These notes on fixing a process before adding AI became a 5 slide deck in the Bold Signal style. The speaker notes on the right tell me what to say on each slide.

## Get it

Presentation Builder is free and open source. It needs Node 18 or newer and your own Anthropic API key. The [setup guide on GitHub](https://github.com/david-forer/presentation-builder#setup) covers the install.

## Demo

Video coming soon.
