---
title: "ClaudeClaw"
description: "A Telegram bot that gives me a full Claude Code session from my phone. I text it, it runs real work on my machine."
seoTitle: "ClaudeClaw | Run Claude Code From Your Phone | Forersight"
pubDate: 2026-07-12T00:00:00Z
buildType: "agent"
status: "live"
stack: ["Claude Code", "Node", "Telegram Bot API", "Windows Task Scheduler"]
featured: true
---

## What it does

ClaudeClaw connects Telegram to a Claude Code instance running on my desktop. I can send it a task from anywhere, on a walk, in a waiting room, and it executes on my actual file system with my actual tools. It also runs a small dashboard so I can watch what it is doing.

## How it works

A Node service listens for Telegram messages, passes them to Claude Code, and streams responses back to the chat. It runs as a Windows scheduled task so it survives reboots. Guardrails limit what it can touch without confirmation.

## Demo

Video coming soon.
