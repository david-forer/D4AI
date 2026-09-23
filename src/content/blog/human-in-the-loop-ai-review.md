---
title: "Human in the Loop AI Review: Design It or It Decays"
seoTitle: "Human in the Loop AI Review – Why Approval Steps Quietly Stop Working, the 10-Second Rule That Keeps Review Real, and How to Decide What Still Needs a Person – Forersight"
description: "Human in the loop AI review fails quietly when the queue gets long. How to design an approval step people actually read, and what to stop reviewing."
pubDate: 2026-09-23T00:00:00Z
tags: ["ai-readiness"]
pillar: "ai-governance-for-small-businesses"
heroImage: "/images/blog/human-in-the-loop-ai-review.webp"
articleType: "cluster"
---

Most firms add a human approval step to an AI system and assume the job is done. This page is about keeping that step real once the queue gets busy.

## Key Takeaways

- Human in the loop AI review survives only while approving an item is faster than doing the work, and past that point people approve without reading.
- If a single AI approval takes a person more than about 10 seconds, the item is too large, the wrong thing is being shown, or the job should not be gated at all.
- A person should stay on any AI output that reaches a client, moves money, commits to a date, changes a shared client record, or that a regulator or contract says a person must decide.
- For AI work that has proved reliable, reading 10 random cases a week tells a reviewer more than skimming 60.
- The right reviewer for AI output is whoever did the task before the agent existed, with a second named person as backup.
- Asking the reviewer once a month what they last rejected shows whether review is real, because a rubber stamp still produces an excellent approval rate.

---

## Why human in the loop AI review decays, and what holds it up

An approval step survives only while approving is faster than doing the work. Cross that line and people start clicking approve without reading, and you now have a record of oversight that did not happen.

That failure is worse than having no review at all. No review is a known risk you can manage. A rubber-stamped queue produces an audit trail saying a person checked, which is what you will point at when a client asks, and it will not be true.

So the design question is not whether to keep a human in the loop. It is how much you can put in front of that human before the loop becomes theatre. This sits inside the wider framework in [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## The 10-second rule

If a single approval takes a person more than about 10 seconds, the design is wrong.

Ten seconds is roughly what someone will actually spend, repeatedly, on a queue of items while doing their real job. It is enough to read a drafted reply and judge whether it is right. It is not enough to verify a chain of reasoning, cross-check a figure against a source, or read a 4-paragraph rationale.

When an approval needs more than that, one of 3 things is true and each has a different fix.

**The item is too large.** The agent is presenting a whole completed task where it could present one decision. Break it up so the person judges the part that carries the risk.

**The wrong thing is being shown.** A reviewer needs the output plus the one fact it turned on, not the full working. Change what the interface surfaces.

**The job should not be gated at all.** Some work cannot be checked at a glance, and pretending otherwise produces the rubber stamp. Either accept the risk unreviewed, or take the agent out of that job.

---

## What still needs a person, and what does not

Most firms review too much and then stop reviewing properly. Sorting by consequence rather than by discomfort fixes it.

**Always keep a person on these.** Anything that reaches a client under your firm's name. Anything that moves money or commits to a date. Anything that touches a client record other people will rely on later. Anything a regulator or a contract says a person must decide.

**Stop reviewing these once the evidence supports it.** Internal drafts nobody sends. Tagging and routing where a wrong answer is visibly wrong to the next person. Summaries a human reads anyway, because that reader is the review. Research briefs, which are checked by the fact that somebody uses them.

| Work | Review | Why |
|---|---|---|
| Anything reaching a client under your name | Always a person | A wrong sent email is already outside the building |
| Anything that moves money or commits to a date | Always a person | The harm lands before anyone naturally sees it |
| Client records other people rely on later | Always a person | Errors spread to everyone who uses the record |
| Decisions a regulator or contract assigns to a person | Always a person | The rule is set outside the firm |
| Internal drafts nobody sends | Stop once the evidence supports it | Whoever opens it notices a wrong one |
| Tagging and routing | Stop once the evidence supports it | A wrong answer is visibly wrong to the next person |
| Summaries a human reads anyway | Stop once the evidence supports it | That reader is the review |
| Research briefs | Stop once the evidence supports it | Checked by the fact that somebody uses them |

The distinction is whether a wrong output causes harm before a person naturally encounters it. A drafted internal note that is wrong gets noticed by whoever opens it. A sent email that is wrong is already outside the building.

That is the same reasoning behind sorting actions into reversible, reviewable and irreversible, which is set out in [AI agent guardrails](/blog/ai-agent-guardrails).

---

## The 4 ways human review quietly stops working

None of these announces itself. Each one is worth checking for specifically.

**Volume creep.** The agent handled 15 cases a day at launch and handles 60 now. Nothing was decided, the queue simply grew past what one person can read, and quality of attention fell to match.

**The single reviewer.** One person holds it. They go on holiday, the queue backs up for 9 days, and the standing instruction becomes catch up quickly. Every design needs a second named person.

**Habituation.** The first 200 approvals were all correct, so the 201st gets a glance. This is a normal human response to a reliable system and no amount of instruction prevents it. It is managed by sampling rather than by asking people to concentrate harder.

**Reviewer drift.** The person approving changes, and the new one has different standards because nobody wrote down what good looks like. Six weeks later the agent's effective behaviour has changed without a single configuration edit.

---

## Sampling beats full human review

For any category where the agent has proved reliable, replace full review with a sample and a check.

Read 10 random cases a week rather than skimming 60. Ten read properly tells you far more than 60 skimmed, and it takes less time. You are looking for a pattern, and a pattern shows up in 10.

Pair that with an exception rule so unusual cases still get seen individually. Anything the agent escalated, anything where a client replied unhappily, anything involving a value above a threshold you set.

This is how the review burden stops growing with volume. A firm that keeps 100% review as the agent scales will abandon review entirely within a quarter, because the alternative is a person doing nothing else. Deciding this deliberately is what keeps the control alive as the work grows, and it is the same staged approach described in [how to deploy an AI agent safely](/blog/how-to-deploy-an-ai-agent-safely).

---

## Make the reviewer's job possible

Four things, none of which require software.

**Write down what good looks like.** Half a page with 4 approved examples and 2 rejected ones, with a line on why. This is what survives a change of reviewer, and it takes an hour to produce.

**Give them a reject path that is not just reject.** A reviewer who can only approve or discard will approve marginal items, because discarding means doing the work themselves. Let them send it back with one line of correction.

**Record the corrections.** Every rejection is information about a gap in the agent's instructions. Firms that fix the top 3 correction patterns after month one usually cut their rejection rate by more than half.

**Put a time on it.** Fifteen minutes a day at a set point, rather than a queue that interrupts. An approval step competing with client work loses to client work every time.

---

## The question that tells you whether it is real

Ask the person doing the approving one question: what was the last thing you rejected, and why.

An answer that comes immediately, with a specific case, means the loop is working. Hesitation, or an answer along the lines of it is usually fine, means you have a queue rather than a review, and the control you believe you have is not there.

Ask it monthly. It takes 30 seconds and it is more reliable than any metric the tool reports, because the tool reports approval rates and a rubber stamp produces an excellent approval rate.

If the answer is unconvincing, the fix is not a conversation about diligence. It is to cut what gets reviewed until the remaining items are few enough and consequential enough that reading them is obviously worth it.

---

## Who should hold the review

The person who would have done the work, not the most senior person available.

Founders default to reviewing everything themselves, which fails for a predictable reason. The founder is already the constraint, so the queue waits on the busiest calendar in the building, and within a month the standing instruction becomes approve unless obviously wrong.

The right reviewer is whoever owned the task before the agent existed. They know what correct looks like, they spot a wrong answer in 2 seconds because they have seen the pattern before, and they have the standing to send it back. They also have the strongest incentive to get the agent working properly, since it is their workload.

Name a second person at the same time. A single reviewer is a single point of failure, and the failure mode is a 9-day backlog cleared in one careless sitting.

---

## What to tell a client about it

Service firms get asked this now, and a vague answer costs more than a modest true one.

Say what a person checks and when. We use AI to draft and analyse. Anything that reaches you has been read and approved by the person responsible for your account. We keep a record of what was produced and who approved it.

That is defensible because it is specific, and it is only defensible if it is true, which is the reason the 10-second rule matters commercially rather than just operationally. A firm that gates too much and stamps it has given the client an answer it cannot support. Where this sits alongside data handling commitments is covered in [AI compliance and client data](/blog/ai-compliance-client-data).

---

## The bottom line for founders

Human review is a real control at the size where a person can actually read what they are approving, and it becomes decoration above that size.

Decide what must always have a person on it, sample everything else, write down what good looks like so the standard survives a change of reviewer, and ask once a month what the last rejection was. If the honest answer is that nobody remembers rejecting anything, either the agent is excellent or the loop is empty, and you should find out which.

If you want a view on whether your approval step is a control or a queue, you can [book a call](https://calendly.com/david-j-forer/30min) and we will look at what the reviewer actually sees and how long they actually have.

---

## Frequently Asked Questions

### What does human in the loop mean for AI in a small business?

A person approves AI output before it takes effect. In a small firm that usually means someone reads a draft before it reaches a client, moves money, or changes a record others rely on. It only works while that person can read what they approve.

### How much AI output should a person review?

Everything that reaches a client or moves money, and a sample of the rest once the agent has proved reliable. Reading 10 random cases a week beats skimming 60. Nobody reads carefully at item 60, and there's no shame in admitting it.

### Who should review AI output in a small firm?

The person who did the task before the agent existed, not the founder by default. They know what correct looks like and spot a wrong answer fast. Name a second person too, so a holiday does not turn into a 9-day backlog.

### How do I know if AI approvals are being rubber-stamped?

Ask the reviewer what they last rejected and why. A quick, specific answer means the loop is working. Hesitation means you have a queue, not a review.

### What should I tell clients about human review of AI work?

Say what a person checks and when, for example that anything reaching them has been read and approved by the person responsible for their account. Only say it if it is true. A modest claim you can back up beats a big one you can't.
