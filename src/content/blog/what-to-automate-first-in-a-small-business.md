---
title: "What to Automate First in a Small Business: The Data You Retype"
seoTitle: "What to Automate First in a Small Business | Start With the Data Your Team Retypes | David J Forer"
description: "What to automate first in a small business: count every time your team retypes data from one tool into another for 5 days, then automate the top item."
pubDate: 2026-11-06T00:00:00Z
tags: ["automation"]
heroImage: "/images/blog/what-to-automate-first-in-a-small-business.webp"
articleType: "supporting"
---

What to automate first in a small business has a plain answer: the data your team already has and types in again somewhere else. A 5-day count shows you where that happens, and the item at the top of the count is your first automation.

## Key Takeaways

- The first thing to automate in a small business is retyping: data a person copies from one tool into another by hand.
- Retyping is the safest first automation because the data already exists, the rule is obvious, and a mistake is easy to spot and undo.
- A 5-day retype tally, kept by everyone who touches client data, finds the first candidate in under a week with no software.
- After retyping, the usual order is reminders and follow-ups, then documents built from templates, then intake routing, with AI drafting last.
- Work that needs judgment, touches money without review, or changes every time should wait until the simpler automations have run cleanly for a month.
- As of November 2026, a first retyping automation in a firm of 5 to 20 people usually takes 1 to 3 days to build with tools the firm already pays for.

## What to Automate First in a Small Business

Start with retyping. Retyping is any moment where a person reads information in one place and types it into another. A new client's details go from the web form into the CRM, then into the accounting tool, then into the project board. A signed proposal gets re-entered as a job. Hours from the timesheet get typed into an invoice.

Each of those moves follows a rule nobody has to think about. The data is already correct at the source, so the automation only has to carry it across. That makes retyping the lowest-risk place to learn how automation behaves in your business before you trust it with anything harder.

The pillar guide on [automation architecture for small teams](/blog/automation-architecture-for-small-teams) covers how the pieces fit together once you have several. This post is about picking the first one.

## Why Retyping Comes Before Everything Else

Retyping has four properties that make it a good first automation.

The data already exists. Nobody has to write anything new, so there is no quality question about the output.

The rule is fixed. "Copy the client name, email and service type from the form into the CRM" is the same every time. An automation that follows a fixed rule rarely surprises you.

Mistakes are visible. If the automation copies the wrong field, someone sees a phone number where a name should be within a day. Compare that with an automated client email that says the wrong thing and goes out before anyone reads it.

The saving is easy to count. You know how many records were retyped last month and roughly how long each took. That gives you a before and after number without a spreadsheet model.

Other guides on this site rank candidates by impact and effort. The [automation prioritization framework](/blog/framework-high-leverage-automation) scores tasks on a matrix, and [your first business automation](/blog/your-first-business-automation) lists the criteria a good first project meets. Retyping is what usually wins when you apply either one, so the tally below is a shortcut to the same answer.

## How to Find What to Automate First: The 5-Day Retype Tally

The retype tally is a shared sheet where everyone records each time they copy information from one tool into another. Run it for 5 working days.

Each row has five columns:

1. **From.** The tool or document the data came from.
2. **To.** Where it was typed.
3. **What.** The data itself, such as "new client contact details" or "approved hours".
4. **Minutes.** A rough guess of the time it took.
5. **Who.** The role doing it.

Tell the team the sheet is for finding tool problems. People log honestly when they know the sheet will remove work from their week.

The free guide [Find your first automation in 5 days](/resources/guides/find-your-first-automation) has the sheet, the message to send your team and a build checklist.

At the end of the week, group the rows by the From and To pair. Add up the minutes for each pair. The pair with the most total minutes is your first candidate. If two pairs are close, pick the one with the fewest people involved, because it will be easier to test.

A worked example helps. In an illustrative 12-person accounting firm, a 5-day tally might show:

| From | To | Rows | Minutes |
|---|---|---|---|
| Web inquiry form | CRM | 14 | 70 |
| Signed engagement letter | Practice management tool | 6 | 60 |
| Timesheets | Invoice draft | 22 | 110 |
| CRM | Welcome email | 6 | 30 |
| Client email | Shared task list | 31 | 95 |

Timesheets to invoices wins on minutes. In this case it also touches money, so the firm would build it with a review step, where the automation drafts the invoice and a person approves it before it sends. The web form to CRM pair is the safer pick if the founder wants a first win with no review step at all. Either choice is defensible. The tally makes the choice visible.

The [process mapping guide](/blog/map-business-processes-for-automation) goes deeper if you want to map the whole workflow around the winning pair before you build.

## The Order to Automate After the First One

Once the first retyping automation has run for 2 to 4 weeks without a fix, move down this list. Each step adds a little more risk, so each one gets a little more testing.

| Order | What to automate | Example | Why it comes here |
|---|---|---|---|
| 1 | Retyping between tools | Form entries into the CRM | Data exists, rule is fixed, errors are visible |
| 2 | Reminders and follow-ups | Overdue invoice reminders, missing document chasers | Triggered by a date or status you already track |
| 3 | Documents from templates | Engagement letters, onboarding packs | Template is approved once, fields are filled from data |
| 4 | Intake routing | Sending new inquiries to the right person | Needs a written rule for who gets what |
| 5 | AI drafting with review | First draft of a client update or proposal | Output is new text, so a person checks every one |

The order follows one idea. Each step creates a little more new content than the one before it, and new content is where automations go wrong. Retyping creates nothing new. A reminder creates a short, fixed message. A template creates a document, but from approved text. Routing makes a decision. AI drafting writes something nobody has seen yet.

If your business keeps most of its records in spreadsheets, read [when to move from a spreadsheet to an automation](/blog/spreadsheet-to-automation-when-to-graduate) before step 1. The answer there affects which tool carries your first automation.

## What Not to Automate First

Some work looks like a good candidate and makes a poor first project. Leave these until the simpler steps are running:

- **Anything that moves money with no review.** Payments, refunds and payroll changes need a person to approve them until you trust the system.
- **Work that changes each time.** If the steps depend on the client or the day, write the process down first. An automation cannot follow a rule nobody has written.
- **Client-facing messages written from scratch.** These belong at step 5, with review.
- **A process two people do differently.** Agree on one way first, then automate it.

The guide on [when not to automate](/blog/when-not-to-automate) covers the work that should stay with people for good. The list above is narrower. It is about timing, and most of these become fine candidates later.

## How to Build the First One in a Week

A first retyping automation in a small firm usually uses tools already in place. Many CRMs, form builders and accounting tools have built-in connections. Where they do not, a connector tool such as Zapier or Make links two apps with a trigger and an action.

Use this sequence:

1. **Day 1.** Write the rule in one sentence. "When a web form is submitted, create a CRM contact with name, email, phone and service type."
2. **Day 2.** Check whether either tool already offers this connection in its settings. Built-in options are cheaper to run and easier to maintain.
3. **Day 3.** Build it and run it on 5 test records you create yourself.
4. **Day 4 and 5.** Turn it on for live data. The person who used to do the retyping checks every record it creates for one week.
5. **Week 2.** If the week of checks was clean, the person stops checking each record and does a weekly spot check of 5.

Name one owner for the automation on day 1. The post on [who maintains an automation after it launches](/blog/who-maintains-an-automation-after-it-launches) covers what that person does each month. Without an owner, a broken connection can run for weeks before anyone notices. The [holiday test for your automations](/resources/guides/holiday-test-for-your-automations) checklist covers a related gap: automations that only run while one computer is on.

## Where AI Fits in the First Automation

For most firms, AI does not belong in the first automation. Retyping needs a fixed rule, and a fixed rule does not need a model to interpret anything.

AI earns a place when the data arrives messy. If client inquiries come in as free-text emails, an AI step can pull the name, service and deadline out of the message before the automation files it. That step should still write into a review queue for the first few weeks, because the extraction will sometimes guess.

AI is also useful before the build. Paste a week of your retype tally into an AI assistant and ask it to group the rows and total the minutes. It saves an hour of sorting. You still choose the winner.

## Frequently Asked Questions

### What should a small business automate first?

Start with data your team retypes from one tool into another, such as web form entries going into the CRM. The data already exists and the rule never changes, so it is the lowest-risk first project.

### How do I decide which process to automate?

Keep a 5-day tally of every time someone copies information between tools, with rough minutes for each. Add up the minutes by tool pair, and the pair with the highest total is your first candidate.

### What processes should not be automated first?

Leave payments without review, client messages written from scratch and work that changes each time until later. Those carry more risk and need a written process before an automation can follow them.

### How long does a first automation take to build?

Most first automations between two common tools take 1 to 3 days to build and a week of checked live use. Budget about 2 weeks from picking the task to trusting it.

### Do I need AI for my first automation?

Usually not. Copying data between tools follows a fixed rule. AI helps when the input is messy free text, and even then its output should go to a person for review at first.

---

[Book an AI readiness audit to find the retyping and handoffs that cost your team the most hours each week.](/ai-readiness-and-ai-audits)
