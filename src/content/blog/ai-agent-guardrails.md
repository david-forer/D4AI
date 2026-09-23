---
title: "AI Agent Guardrails: Write the Permission List First"
seoTitle: "AI Agent Guardrails for Small Business – The 4 Limits Every Agent Needs Before It Runs, How to Write a Permission List a Non-Technical Founder Can Enforce, and the Guardrail Failures That Reach Clients – Forersight"
description: "AI agent guardrails are a permission list, written before the agent runs. The 4 limits every agent needs, and how to enforce them without a dev team."
pubDate: 2026-09-23T00:00:00Z
tags: ["ai-agents"]
heroImage: "/images/blog/ai-agent-guardrails.webp"
articleType: "cluster"
---

Most guardrail advice assumes an engineering team. This page is for the founder who has to decide what an agent may do before it runs.

## Key takeaways

- AI agent guardrails for a small business are 4 written limits: what the agent may touch, what it may do alone, what it does when unsure, and what gets recorded.
- Every action an agent can take belongs in 1 of 3 groups: alone, with approval, or never.
- Escalation rules should be written as situations, such as a complaint or an unknown sender, because a confidence score the agent gives itself is not evidence.
- A working permission list takes about 90 minutes to write and needs no engineer.
- Autonomy should widen 1 category of action at a time, after reading the log of at least 30 real cases.

## What AI agent guardrails are, in the only form that matters

A guardrail is a sentence saying what the agent may do without asking, written down before the agent can do anything.

That sounds too simple for a technical-sounding term, and the simplicity is the point. In a firm without engineers, guardrails that live in code nobody can read are not controls, because nobody can check them or change them after somebody leaves. A permission list in plain language, agreed by the person accountable for the work, is enforceable by whoever is holding the job that quarter.

Four limits cover almost every agent a firm of 5 to 20 people will run. Below are those 4, how to write each one so it can be enforced, and the failure patterns that reach clients when they are missing. The prior question of whether the workflow suits an agent at all is answered in [when to use an AI agent](/blog/when-to-use-an-ai-agent).

---

## Guardrail 1: what the agent may touch

The narrowest set of systems and records the agent needs to do its one job.

Agents are usually connected by giving them an account, and accounts default to broad. A support agent given a normal staff login can read every ticket, every customer record, and often the shared drive, because that is what a staff login sees. It only needs the tickets in one queue.

Write it as a list. This agent may read the shared support inbox and the customer record for the sender. It may not read finance, HR, or any other client's file.

Then make it true in the tool. Most products let you scope access per connection, and the ones that do not are telling you something about how much thought went into them. Where scoping is impossible, create a dedicated account with only the access the job needs rather than reusing a person's.

This is the guardrail that turns a mistake into an incident when it is missing, because the blast radius of a wrong action is set entirely by what the agent could reach.

---

## Guardrail 2: what the agent may do alone

Sort every action the agent can take into 3 groups and write the list.

**Alone.** Reversible internal actions. Reading, drafting, tagging, creating a task, adding a note, updating an internal status field. Wrong ones are annoying and undoable.

**With approval.** Anything that leaves the building or is hard to reverse. Sending an external message, changing a client record, committing to a date, issuing a document.

**Never.** Actions the agent has no business taking regardless of confidence. Moving money, deleting anything, changing permissions, contacting anyone outside an approved list.

| Group | What belongs in it | Examples |
|---|---|---|
| Alone | Reversible internal actions | Reading, drafting, tagging, creating a task, adding a note |
| With approval | Anything that leaves the building or is hard to reverse | Sending an external message, changing a client record, committing to a date |
| Never | Actions it should not take at any confidence level | Moving money, deleting anything, changing permissions |

The mistake to avoid is putting too much in the approval group. An agent that asks about everything becomes a queue somebody has to work through, and within a fortnight they are clicking approve without reading, which is worse than no approval step because it manufactures a record of oversight that did not happen.

Get the alone group as wide as you safely can, keep the approval group short enough that a person reads each one properly, and treat the never list as fixed.

---

## Guardrail 3: what the agent does when it is unsure

The guardrail most often missing, and the one that separates a working agent from an expensive one.

An agent handling varied work will meet cases outside what it can judge. Without an instruction it will pick the most plausible action and proceed with full confidence. That is the behaviour that produces the wrong email to the wrong person.

Write the escalation rule in terms of situations rather than confidence scores, because a number the agent generates about its own certainty is not evidence.

Escalate when the sender is not in the CRM. Escalate when the message mentions a complaint, a contract, a refund or a legal matter. Escalate when more than one interpretation would lead to a different action. Escalate when the case does not resemble anything in the examples it was given.

Then decide what escalation means in practice. Who gets it, where, and what happens if that person is away for a week. An escalation path that ends in an unmonitored inbox is the same as no escalation, and it fails silently.

---

## Guardrail 4: what gets recorded

Every action the agent takes, what it based the decision on, and whether a person approved.

This is the guardrail founders skip because it produces no visible benefit on day one. It becomes the only thing that matters the first time a client asks why they received something, or when you need to decide whether the agent can be trusted with more.

Without a log you are guessing. With one you can review 30 real decisions after the first month and answer the question you actually care about, which is whether the escalation rule is set correctly. Firms that widen an agent's autonomy without that evidence are not making a decision, they are hoping.

Keep it somewhere a person can read, not only inside the vendor's interface. This is the same reasoning that applies to keeping process descriptions outside a tool, covered in [AI vendor and model risk](/blog/ai-vendor-and-model-risk).

---

## The 3 guardrail failures that reach clients

Each one comes from a specific missing limit.

**The confident wrong reply.** No escalation rule. The agent met an ambiguous case, picked an interpretation, and sent it. The client sees a firm that did not read their message properly.

**The action at scale.** No approval gate combined with broad access. A wrong judgment applied once is a mistake, and the same wrong judgment applied to 40 cases before anyone notices is a different kind of conversation.

**The quiet drift.** No log and no review. The agent has been routing on a field nobody has updated since March, and the first evidence is a pattern of complaints that nobody connects to the agent for 6 weeks.

None of those is exotic. All 3 are ordinary, and all 3 are prevented by a list somebody wrote in an hour.

What they share is that the agent was allowed to act in a situation nobody had described in advance. That is the definition of a missing guardrail, and it is why the list is written before deployment rather than after the first surprise. The wider case for treating agents as a governed capability rather than a productivity purchase runs through [AI agents for small businesses](/blog/ai-agents-for-small-businesses).

---

## Writing the list without a technical team

A working version takes about 90 minutes and needs no engineer.

**Describe the job in one sentence.** If the sentence needs the word "and" twice, the scope is too wide and the guardrails will be unwriteable. Narrow it first.

**List every action it could take, then sort into alone, approval, never.** Do this with the person who currently does the work, because they know which actions are hard to undo.

**Write 5 escalation situations in plain English.** Use real cases from the last month, including the 2 that were awkward.

**Name the person who reviews the log weekly for the first 2 months.** If that name does not exist, stop. An unsupervised agent is the problem the other 3 guardrails exist to prevent.

**Test against 20 real past cases before it goes live.** You are watching the edges rather than the easy ones, because the easy ones were never the risk.

Keep the list in the same place as your other operating rules so it is found by whoever inherits the job. Where that sits alongside policy and data rules is covered in [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## Widening autonomy safely

Guardrails should loosen over time, and the mechanism matters.

Start with approval on everything that leaves the building. After 30 cases, read the log. If the agent's judgment matched what the approver would have done in every case of a specific type, move that type into the alone group and leave the rest.

Autonomy is earned per category of action, on evidence, one category at a time. Granting it up front because the demo was impressive is how firms end up rebuilding trust with a client instead of a workflow, and it is the same staged logic that runs through [how AI agents compare with automations](/blog/ai-agents-vs-automations).

---

## The bottom line for founders

Guardrails are 4 lists: what it can reach, what it can do alone, when it stops and asks, and what gets written down. All 4 fit on a page and none requires a developer.

Write them before the agent runs, because writing them afterwards means writing them during an incident, with a client waiting and a partner asking what the system was allowed to do. Answering that question from memory, under pressure, is how firms end up over-correcting and switching off something that was mostly working. The list is also the thing that lets you say yes to more automation later, since you will have the evidence to justify it rather than a feeling.

If you want a second opinion on the permission list for an agent you are about to run, you can [book a call](https://calendly.com/david-j-forer/30min) and we will look at the actual actions before anything goes live.

## Frequently asked questions

### What are guardrails for AI agents?

They are the written limits on what an agent may reach, what it may do without asking, when it must stop and hand over, and what it has to log. In a small firm they should be plain sentences anyone can read, not code only one person understands.

### Do I need a developer to set up AI agent guardrails?

No. The list takes about 90 minutes with the person who does the work today. Most tools let you scope access per connection, and where they do not, give the agent its own account with only what the job needs.

### What should an AI agent never be allowed to do?

Move money, delete anything, change permissions, or contact anyone outside an approved list. Keep that list fixed. Nobody ever regretted an agent that could not wire money.

### How do I stop an AI agent from sending the wrong thing to a client?

Put every external message behind approval and write escalation rules for the cases that confuse it, like complaints, refunds, or senders not in the CRM. Then make sure escalations land with a person who is actually watching.

### When can I give an AI agent more autonomy?

After you have read the log of about 30 real cases. If the agent matched the approver every time on one type of action, move that type to the alone group and leave the rest where they are. Earn it one step at a time, same as a new hire.
