---
title: "When to Use an AI Agent: 4 Thresholds a Workflow Must Clear"
seoTitle: "When to Use an AI Agent – The 4 Thresholds a Single Workflow Has to Clear Before an Agent Earns Its Cost, the Jobs That Qualify in a Firm of 5 to 115 People, and the Near Misses That Waste Six Months – Forersight"
description: "When to use an AI agent is a workflow question. Here are the 4 thresholds a single job has to clear before an agent earns what it costs to run and monitor."
pubDate: 2026-09-04T00:00:00Z
tags: ["ai-agents", "automation", "operations", "small-business"]
heroImage: "/images/blog/when-to-use-an-ai-agent.webp"
articleType: "cluster"
---

## The short answer on when to use an AI agent

Deciding when to use an AI agent is a question about one specific workflow, and it has 4 conditions attached to it. Enough volume that the hours returned are visible. Enough variation that a written rule breaks. Actions a person can reverse or approve. Data solid enough to reason from.

A workflow that clears all 4 is worth an agent. A workflow that clears 3 usually costs more to run and supervise than it gives back, and the one it fails is almost always volume or reversibility.

That framing matters because the common test in circulation is "does this work need judgment," and nearly every job in a service business needs some judgment. It qualifies everything, which qualifies nothing. The 4 thresholds are narrower on purpose. In a typical firm of 5 to 115 people, they leave 1 or 2 workflows standing. The wider question of what agents are and where they sit against other tools is covered in [AI agents for small businesses](/blog/ai-agents-for-small-businesses).

---

## Threshold 1: enough volume that the hours come back

An agent costs money to build, money per run, and time to monitor. That last one gets left out of every business case and is the reason most small agent projects quietly stop being used.

The working number is 20 instances a week, or 4 hours of staff time a week, whichever you can measure more honestly. Below that, a competent person handling it manually is cheaper than the build plus the ongoing checking, and will stay cheaper for longer than the project's payback assumption.

Count the real volume before anything else. Founders routinely estimate 40 inbound inquiries a week and find 11 when they actually count a month of them. An agent handling 11 cases a week saves perhaps 90 minutes and needs about the same amount of review time in its first quarter. The build was free entertainment.

Volume is also what makes the review burden shrink over time. At 30 cases a week you learn what the agent gets wrong within days and can tighten it. At 4 cases a week you are still guessing after 3 months, because you have not seen enough of its behaviour to trust or correct it. The arithmetic behind this kind of decision is worked through in [building the business case for automation ROI](/blog/automation-roi-business-case).

---

## Threshold 2: variation a written rule cannot hold

This is the threshold with a test you can run in 20 minutes, and it is worth running before you talk to a vendor.

Write the workflow out as if-then branches. Actually write it, on paper. If someone emails asking about pricing, then send the rate card. If they ask about availability, then check the calendar and reply with 2 slots. Keep going until you have covered what really arrives.

If you finish in 6 or 7 branches and the exceptions are rare, build an automation. It will be cheaper, more predictable, and easier to fix at 11pm. If you pass 12 branches and are still writing, or if half the branches end in "it depends what they mean," the work has variation an agent handles and a rule does not. The full comparison between the two lives in [AI agents versus automations](/blog/ai-agents-vs-automations).

One caution on this test. Variation in the input is what counts, not variation in the output format. A firm sending 30 different-looking proposals from the same 4 pieces of information has a template problem. An agent will produce 30 slightly different documents at a higher cost than a merge field would.

---

## Threshold 3: actions you can reverse or approve in one click

Every agent action has a blast radius, and this threshold is about what happens the first time it gets a case wrong. It will get a case wrong.

Sort the actions in the workflow into 3 groups. Reversible internal actions, like updating a record, creating a task, or adding a note. Reviewable external actions, where the agent drafts and a person approves before anything leaves the building. Irreversible actions, like sending a client message directly, moving money, filing something with a deadline, or deleting anything.

An agent belongs in workflows made of the first 2 groups. It also belongs in workflows where an irreversible step exists but can be gated behind a human approval that takes under 10 seconds. A partner clicking approve on a drafted reply is a workable design. A partner reading a 4-paragraph agent rationale before every approval is not, and the approval becomes the new bottleneck within a fortnight.

Workflows where the valuable step is inherently irreversible and cannot be gated fail this threshold, and they fail it permanently rather than until the technology improves. Deciding what a system is allowed to do alone belongs on paper before the system exists, which is the position argued throughout [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## Threshold 4: data the agent can read without guessing

An agent reasons from what it can see. If what it can see is wrong, it acts confidently on wrong information, at whatever speed you gave it.

Check 3 things. Is the record the agent will read populated for most cases, or is the relevant field blank on 4 out of 10 clients. Is the process written down anywhere a system could consume, or does it live in the head of the person who has done it for 6 years. Can the agent reach the systems it needs through a real connection, or will somebody be exporting a spreadsheet weekly to feed it.

A 40-person firm with a CRM where the status field is accurate for the accounts one salesperson owns and stale everywhere else does not have an agent problem yet. Fixing the data is a smaller project than the agent and pays for itself even if the agent never gets built. The sequencing argument here sits at the centre of the [AI readiness framework for service businesses](/blog/ai-readiness-framework-for-service-businesses).

This threshold is the one that fails quietly. The other 3 announce themselves in a planning meeting. Weak data announces itself 6 weeks after launch, when someone notices the agent has been routing on a field nobody has updated since March.

---

## Jobs that clear all 4 in a firm of 5 to 115 people

Three patterns come up repeatedly, and they share a shape.

**Inbound inquiry triage and first drafts.** A 30-person agency taking 45 messages a week across a form, a shared inbox, and LinkedIn. High volume, every message different, the agent drafts and a human sends, and the CRM has enough in it to check whether the sender is already a client. All 4 thresholds clear comfortably.

**Pre-call research briefs.** A sales team running 25 discovery calls a week where somebody spends 20 minutes beforehand pulling background together. The work varies every time, the output is a document a person reads rather than an action taken, and nothing about it is irreversible. This one clears threshold 3 by default, which is why it is a good first agent.

**Tier one support resolution with escalation.** A firm handling 60 tickets a week where 35 are documented, repeatable cases. The judgment being bought is the escalation decision, the agent knowing when it is out of its depth. That is genuine agent behaviour and no chatbot supplies it, a distinction covered in [AI agents versus chatbots](/blog/ai-agents-vs-chatbots).

---

## Four common candidates and the threshold each one fails

**Monthly management reporting.** Runs 12 times a year. Fails threshold 1 by a wide margin, however tedious it is. Build a template and a scheduled export.

**Contract review before signature.** The valuable action is a judgment nobody can afford to be wrong about, and it cannot be gated behind a 10 second approval because checking the agent takes as long as doing the work. Fails threshold 3.

**Invoice capture and filing.** High volume and clearly worth automating, with almost no variation once the formats are handled. Fails threshold 2, and an agent here is a slower, more expensive automation. [When not to automate](/blog/when-not-to-automate) covers the neighbouring version of this mistake.

**"Handle our client communications."** This is a department, not a workflow, which is why it fails every threshold at once. It cannot be counted, its branches cannot be written, its blast radius is unbounded, and no data set covers it. Scope it down to one message type and one action, then run the 4 thresholds on that.

---

## When to wait even though the workflow qualifies

A workflow can clear all 4 and still be the wrong project this quarter, for reasons about the business rather than the work.

Nobody owns it. An agent needs a named person who checks its output weekly for the first 2 months and has the authority to switch it off. If that person does not exist, or is the founder who is already the constraint, the agent becomes another unsupervised system.

The team is mid-change. Onboarding a new operations hire, migrating a CRM, or absorbing a 25 percent headcount increase all move the ground the agent stands on. Ship it after, not during.

The same hours are available cheaper elsewhere. If a 2 hour process mapping session would remove the work entirely, do that first. Removing a step beats automating a step, and it is a smaller project. Most firms find at least one of these when they run the exercise in [mapping business processes for automation](/blog/map-business-processes-for-automation).

---

## What to do this week

Four steps, achievable inside a normal week without buying anything.

**Monday, list candidates.** Ask the team which repeating work eats the most time. Write down 5 workflows. Name each one as a specific job with a trigger and an outcome, not as a department.

**Tuesday, count.** For each of the 5, find the real weekly volume and the real staff hours. Use a month of data rather than an estimate. Most lists lose 2 or 3 candidates at this step, which is the point.

**Wednesday, write the branches.** Take the survivors and write the if-then rules for each. Anything you finish in under 8 branches goes on the automation list and is probably a better project anyway.

**Thursday, sort the actions.** For whatever is left, sort every action into reversible, reviewable, and irreversible, and check the data the agent would read. A workflow standing after Thursday is your agent candidate, and there is usually exactly 1.

---

## The bottom line for founders

Knowing when to use an AI agent is a counting exercise before it is a technology decision. Volume, variation, reversibility, and data quality decide the answer, and they can all be checked in a week with a spreadsheet and 4 honest conversations.

Run those checks and the field narrows fast. One workflow qualifies, you scope it tightly, you keep a person approving anything that leaves the building, and you review its decisions after the first 30 cases. That is a project a firm your size can finish and keep running.

If you want a second opinion on whether a specific workflow in your business clears the 4 thresholds, you can [book a call](https://calendly.com/david-j-forer/30min) and we will count the volume and look at the actual data before naming a tool.
