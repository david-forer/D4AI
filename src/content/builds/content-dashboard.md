---
title: "Content Dashboard"
description: "A local web app for reviewing AI-generated content. Point it at a folder, see everything as a grid, leave comments that Claude actions."
pubDate: 2026-07-10T00:00:00Z
buildType: "app"
status: "live"
stack: ["Node", "HTML", "Claude Code"]
featured: true
---

## What it does

When an agent generates 30 images or 15 drafts, reviewing them file by file is slow. Content Dashboard serves any folder as a visual grid with previews for images, video, text, and HTML. I click a file, leave a comment, and the comments save to a JSON file in the folder. Claude reads that file and makes the changes.

## How it works

A small local server scans the target folder, builds the grid, and writes review comments back to disk. The comment file becomes the work order for the next Claude session. Review happens in the browser, fixes happen in the repo.

## Demo

Video coming soon.
