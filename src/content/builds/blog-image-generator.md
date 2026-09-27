---
title: "Blog Image Generator"
description: "A desktop app that reads a blog post and makes two header images for it, with the post's title built into the picture."
seoTitle: "Blog Image Generator | Header Images From the Post Itself | Forersight"
pubDate: 2026-09-27T00:00:00Z
buildType: "app"
status: "live"
heroImage: "/images/builds/blog-image-generator.webp"
stack: ["Electron", "Node", "OpenAI"]
---

## What it does

I wanted header images that match what a post says. This app reads the post first, works out what the image should show, and returns two editorial-style options sized for where they will be used.

## How it works

I paste the post and pick the use: blog header, in-article image, LinkedIn post or social preview. I also pick a visual style, such as cinematic or documentary, and a scene, or leave the scene on auto.

A language model reads the post like an art director briefing a photographer. It returns a concept, a scene, a tone and a short title for the image. The app turns that brief into two prompts with different camera angles and generates both images at the same time. It crops them to the right shape and hands them back as WebP files. The prompts carry fixed rules too: no robots, no gears, no lightbulbs and no stock handshakes.

## What it looks like

![Blog Image Generator with a pasted blog post on the left and two finished header images titled The Founder Ops Trap](/images/builds/blog-image-generator.webp)

I pasted the post on the founder ops trap and got these two headers back. Here is the first one at full size.

![A founder alone at a desk late in the day, surrounded by screens of task boards, with the title The Founder Ops Trap](/images/builds/blog-image-generator-output.webp)

## Demo

Video coming soon.
