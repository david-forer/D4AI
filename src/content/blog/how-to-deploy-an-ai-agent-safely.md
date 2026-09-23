---
title: "How to Deploy an AI Agent Safely: A 4-Week Sequence"
seoTitle: "How to Deploy an AI Agent Safely – The 4-Week Rollout Sequence for a Small Firm, What to Test in Week 1, When to Let It Touch Real Work, and the Deployment Mistakes That Reach Clients – Forersight"
description: "How to deploy an AI agent safely in a small firm: a 4-week sequence from shadow mode to live, what to check each week, and when to stop and roll back."
pubDate: 2026-09-23T00:00:00Z
tags: ["ai-agents"]
heroImage: "/images/blog/how-to-deploy-an-ai-agent-safely.webp"
articleType: "cluster"
---

Most agent launches are a switch flipped on a Friday. This page is for the founder who wants a rollout where the surprises happen inside the building.

## The short answer

- To deploy an AI agent safely, run it against real work in shadow mode for 2 weeks before it touches anything.
- Three things must exist first: a one-sentence job, a written permission list, and a named owner with time to review it weekly.
- The 4-week sequence is shadow mode on real work, shadow mode on your 15 worst past cases, live with approval on everything, then 1 category widened on evidence.
- If approvals take more than 15 seconds each or the queue backs up past a day, narrow what needs approval rather than asking the approver to go faster.
- Decide the rollback conditions before launch, such as a never-list action, a client complaint caused by its output, or 3 weeks without a log review.

## How to deploy an AI agent safely, in the order that works

Run it against real work with its hands tied for 2 weeks before it touches anything.

Almost every agent deployment that damages a small firm skipped that step. The agent was configured, tested on a few invented examples, and switched on. It worked for a fortnight, then met a case nobody had thought about, and the first person to notice was a client.

A safe rollout is a sequence, and it takes about 4 weeks of low effort rather than a big launch. Below is that sequence week by week, with what you are looking for at each stage and the conditions that should stop it. This assumes you have already decided the workflow suits an agent, which is settled in [when to use an AI agent](/blog/when-to-use-an-ai-agent).

---

## Before you deploy the agent: 3 things that must exist

Skip these and the sequence below cannot protect you.

**A one-sentence job.** If describing what the agent does needs 2 uses of the word "and", the scope is too wide. Narrow it until one sentence covers it, because everything after depends on being able to say what correct looks like.

**A written permission list.** What it may reach, what it may do alone, when it stops and asks, what gets logged. That list is the substance of the deployment, and how to write one is set out in [AI agent guardrails](/blog/ai-agent-guardrails).

**A named owner with time.** One person, inside the firm, who will read what the agent did every week for the first 2 months and has the authority to switch it off without asking anyone. If that person does not exist, do not deploy. This is the condition founders most often wave through, and it is the one that decides whether the agent is still running in 6 months.

---

## Week 1: shadow mode

The agent sees real work and takes no action at all. It produces what it would have done, into a document or a channel only your team can see.

You are answering one question: on the actual cases that arrive, how often would this have been right.

Read every output. Not a sample, every one, because week 1 volume is small and the value is in seeing the range. Mark each as would have been correct, would have been wrong, or should have escalated. The third category is the one that matters, and it is the one people forget to record.

By the end of the week you want roughly 20 to 40 judged cases. If you cannot get 20 real cases in a week, the workflow does not have the volume to justify an agent, and that is a useful thing to learn for the cost of 5 days.

**Stop here if** the agent was wrong in a way you did not anticipate more than a couple of times. That is a scoping problem, and continuing means automating it.

---

## Week 2: shadow mode with the awkward cases

Same setup, with a deliberate addition. Feed it the 15 worst cases from your last 6 months.

The complaint that arrived phrased as a question. The client who asked 3 things in one message. The one where the answer depended on something not written down anywhere. The message from a person who left the client company. The one in a second language.

Ordinary volume will not surface these for months, and they are where an agent either escalates sensibly or acts confidently and wrongly. Testing them deliberately in week 2 costs an hour and moves the discovery from a client's inbox to yours.

Adjust the escalation rules based on what you see, then rerun the same 15. You are looking for the agent to now stop and ask on the ones that need judgment. Perfect answers on hard cases are not the goal, correct escalation is.

**Stop here if** it still acts confidently on cases where your best person would have asked a colleague. That gap does not close with more prompting, and it usually means the job needs narrowing.

---

## Week 3: live with approval on everything

The agent now acts, and a person approves every action before it takes effect.

Two things are being tested, and only one is the agent. The other is whether your approval step is realistic. Watch how long each approval takes and whether the approver is actually reading. If approvals are taking more than 15 seconds each, or the queue is backing up past a day, the design is wrong and it will fail as soon as attention drifts.

Fix that now by narrowing what needs approval rather than by asking the approver to be faster. A short approval list that gets read beats a long one that gets rubber-stamped, which is a manufactured record of oversight rather than oversight.

Keep the log. Every action, what it was based on, who approved. You will use it in week 4 and you cannot reconstruct it later.

---

## Week 4: widen one category, keep the rest

Read the log from week 3 and look for a category of action where the agent's judgment matched the approver's every single time.

That category, and only that category, moves to acting alone. Everything else stays behind approval.

This is the whole mechanism for building autonomy safely. Autonomy is granted per type of action, on recorded evidence, one type at a time. A firm that widens everything at once because the first month went well has not made a decision, and it will find out which category it was wrong about when a client tells it.

Repeat the review monthly. Most agents settle after 3 or 4 rounds with a stable split: routine actions alone, anything reaching a client or involving money still gated. That end state is correct and firms should stop trying to move past it.

| Week | Setup | What you are checking | Red flag |
|---|---|---|---|
| 1 | Shadow mode on real work | How often it would have been right, and when it should have escalated | Wrong in ways you did not anticipate more than a couple of times |
| 2 | Shadow mode plus your 15 worst past cases | Whether it stops and asks on cases that need judgment | Still acts confidently where your best person would have asked |
| 3 | Live, a person approves every action | Whether approvals are actually read | Approvals over 15 seconds each, or a queue backed up past a day |
| 4 | 1 proven category acts alone | That the category matched the approver every time in week 3 | Widening more than 1 category at once |

---

## What to monitor once it is running

Weekly for 2 months, then monthly. Fifteen minutes each time.

**The escalation rate.** A rate falling toward zero usually means the agent has become confident rather than that the work got easier. That is the earliest signal of drift and it is easy to miss because it looks like improvement.

**The cases it handled alone.** Read 10 at random. You are checking whether the category you widened is still behaving.

**What changed underneath it.** Model updates and vendor changes alter behaviour without altering your configuration, which is covered in [AI vendor and model risk](/blog/ai-vendor-and-model-risk).

**Whether the owner still has the time.** The most common quiet failure is that the named person got busy 5 weeks in and stopped reading. Nothing breaks visibly. The agent just stops being supervised, and nobody decides that, it simply happens.

---

## The 4 deployment mistakes that cause the damage

**Launching without shadow mode.** Saves 2 weeks and moves every discovery into production, where the audience includes clients.

**Testing on invented examples.** Made-up cases are always cleaner than real ones, and a clean pass on them tells you nothing about the messy inbox the agent will actually meet.

**Approving in bulk.** A person clicking through 30 approvals in 2 minutes is not a control. Narrow the list until it is.

**Deploying onto weak foundations.** An agent reasons from your records and acts through your tools. If the CRM is half-populated and the process lives in one person's head, the agent will act confidently on bad inputs. Fixing that first is a smaller project than the agent and pays for itself either way, which is the sequencing argument in [the AI readiness framework for service businesses](/blog/ai-readiness-framework-for-service-businesses).

---

## When to roll it back

Decide the conditions before you launch, because deciding them during an incident produces hesitation.

Roll back if the agent takes an action you had put in the never category. Roll back if a client raises something caused by its output. Roll back if the owner has not reviewed the log for 3 weeks running.

A rollback is also the moment to re-examine whether this job suited an agent in the first place, rather than assuming the rollout was at fault. The catalogue of jobs that hold up in firms this size is in [AI agent use cases for small business](/blog/ai-agent-use-cases-small-business), and the pillar behind all of it is [AI agents for small businesses](/blog/ai-agents-for-small-businesses).

Rolling back is cheap and reversible. The work returns to the person who used to do it and you have a fortnight of evidence about what to fix. Firms that treat a rollback as failure tend to leave a misbehaving agent running while they debate it, and that is how a small problem becomes a client conversation. Where the limits get written down is covered in [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## The bottom line for founders

Four weeks, and 3 of them the agent cannot touch anything that matters. Shadow mode on real work, then shadow mode on your worst cases, then live with approval on everything, then widen one category on evidence.

The sequence is deliberately slow at the start because that is where the discoveries are cheap. A fortnight of watching costs you nothing and tells you almost everything you need, including, in a good number of cases, that this particular job should not have an agent at all.

If you want a second opinion on a rollout plan before you switch anything on, you can [book a call](https://calendly.com/david-j-forer/30min) and we will look at the actual workflow and the real cases it will meet.

## Questions that come up often

### How long does it take to deploy an AI agent safely?

About 4 weeks of low effort. For the first 3, the agent cannot touch anything that matters without a person seeing it first. Slow at the start is cheap. Fast at the start gets expensive later.

### What is shadow mode for an AI agent?

The agent sees real work and writes down what it would have done, somewhere only your team can see, without taking any action. You read every output and mark it right, wrong, or should have escalated.

### How do I test an AI agent before it goes live?

Use real cases, not invented ones. Aim for 20 to 40 judged cases in week 1, then feed it the 15 worst cases from the last 6 months and check that it stops and asks on the ones that need judgment.

### Who should own an AI agent in a small business?

One named person inside the firm who reads the log every week for the first 2 months and can switch it off without asking anyone. If nobody fits that description, do not deploy yet.

### When should I roll back an AI agent?

When it takes an action from the never list, when a client raises a problem caused by its output, or when the owner has not reviewed the log for 3 weeks running. The work goes back to the person who used to do it, and nothing is lost but a fortnight.
