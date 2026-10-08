---
title: "Content Prism"
description: "A desktop app that turns one idea into several LinkedIn post drafts, each written from a different angle."
seoTitle: "Content Prism | One Idea, Many LinkedIn Drafts | Forersight"
pubDate: 2026-09-27T00:00:00Z
buildType: "app"
status: "live"
heroImage: "/images/builds/content-prism.webp"
githubUrl: "https://github.com/david-forer/content-prism"
stack: ["Electron", "React", "TypeScript", "Claude"]
---

## What it does

Most of my post ideas show up as one sentence in a notes app. Content Prism takes that sentence and writes several drafts from it, one per angle: a story, a myth to bust, a quick tip, a checklist and so on. I pick the draft that sounds most like me and edit from there.

## How it works

I type the idea, or paste something I already wrote, and set the context: who it is for, the voice, the goal and the length. Then I choose the angles. There are about 30, including Story, Contrarian and Business Impact.

Claude writes one draft per angle. Each card shows the word count and a health check that flags a missing call to action, a post that runs long or phrases I have banned. From there I can copy a draft, regenerate it with a different hook or export the whole set as Markdown or CSV. With no API key set, a built-in template engine writes the drafts offline.

## What it looks like

![Content Prism with an idea about fixing a messy process, context settings, 3 selected angles and 3 finished drafts](/images/builds/content-prism.webp)

One idea about fixing the process before buying the tool, 3 angles picked, 3 drafts back in under a minute.

## Get it

Content Prism is free and open source. It needs Node 18 or newer. Add an Anthropic or OpenAI API key for AI drafts, or leave it empty and the template engine writes them offline. The [setup guide on GitHub](https://github.com/david-forer/content-prism#setup) covers the install.
