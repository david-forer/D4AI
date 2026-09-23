---
title: "Your AI Risk Assessment Fits on One Spreadsheet Row"
seoTitle: "AI Risk Assessment for Small Business – How to Score the Workflows Where AI Output Leaves the Building, Rank Your Real Exposure on 3 Numbers, and Finish the Whole Assessment in an Afternoon Without a Compliance Team – Forersight"
description: "An AI risk assessment for a small business works when you score workflows rather than tools. Here is the 3-number method and how to run it in an afternoon."
pubDate: 2026-09-08T00:00:00Z
tags: ["ai-governance"]
heroImage: "/images/blog/ai-risk-assessment-small-business.webp"
articleType: "cluster"
---

## The short answer on an AI risk assessment for a small business

An AI risk assessment for a small business is a ranked list of the workflows where AI output leaves your control, scored on 3 numbers: how sensitive the data is, how far a bad output travels, and how easily you can take it back.

You can finish one in an afternoon. The output is 3 or 4 workflows that need a control this month, and a much longer list you have now decided to leave alone on purpose.

The reason this works comes down to what you count. Nearly every AI risk template a founder finds online counts tools. It asks you to inventory every AI product in use, check each vendor's data terms, log a risk rating per product, and repeat quarterly. That approach was designed for a company with an IT function and a procurement process. Run it at 14 people and you produce a spreadsheet of vendors that tells you nothing about where you would get hurt.

---

## Why tool-based risk assessments fail a small business

A tool inventory answers the question "what are we using." Your exposure sits one layer down, in the question "what are we doing with it."

Consider two uses of the same account. A designer runs a public case study through a chatbot to tighten the wording. A bookkeeper runs a client's payroll register through that same chatbot to explain a variance. Identical tool, identical data terms, identical entry in your inventory. One of them is harmless. The other is a client data incident waiting for someone to notice.

Score by tool and both land in the same row. Score by workflow and they separate immediately, which is the point of doing the exercise.

A tool inventory also goes stale in weeks. Your team adds a product, a vendor changes a model, someone signs up for a free tier on a Tuesday, and the inventory you spent a day building is now wrong in ways you cannot see. Workflows change far more slowly. The way client reports get produced at your firm will look roughly the same in 6 months. That stability is what makes a workflow-based assessment worth the afternoon you spend on it.

The tool layer still matters. Which account tier your team uses determines what happens to data after you paste it, and that is covered in [AI data security for small business](/blog/ai-data-security-small-business). The point is sequencing. Decide which workflows carry real consequence first, then check the tools sitting inside those specific workflows. Checking every tool your team touches is work you will not finish.

---

## Step 1: list the places AI already touches your work

Give yourself 30 minutes and write down every point where AI output makes its way into something real. Each entry is a job your firm does, described the way you would describe it to a new hire.

The prompt that gets useful answers out of a team is narrow: where does something a machine produced end up in front of a client, in a system of record, or in a decision someone acts on. Ask it that way and you will get answers like these.

Drafting client-facing emails and proposals. Summarizing discovery or sales calls into notes that go in the CRM. Producing first-draft deliverables such as reports, designs, or copy. Cleaning and categorizing data before it enters a spreadsheet someone bills from. Screening inbound leads or applicants. Writing internal documentation that people later follow as if it were checked. Coding or scripting anything that runs against live data.

Most firms between 5 and 20 people land on somewhere between 8 and 15 entries. If you get 3, your team has not told you everything, and the missing entries are the ones nobody wants to raise. That pattern is common enough to have a name, and it is worth reading [the shadow AI problem](/blog/shadow-ai) before you take a short list at face value.

One rule while you build the list. Write down what people actually do, including the parts that are already against your stated policy. An assessment built on the sanctioned version of events measures a firm you do not run.

---

## Step 2: score each workflow on 3 numbers

Every entry on your list gets 3 scores from 1 to 3. The whole method fits on one line of a spreadsheet, and a founder can score 15 workflows in under an hour.

### Data class: what goes in

Score 1 if the input is public or already published. Score 2 if it is internal but unremarkable, such as an agenda or a draft blog outline. Score 3 if it is client confidential, personal data, financial detail, or anything covered by a contract you signed.

Most firms find that 3 or 4 of their workflows are quietly running at a 3 and always have been.

### Blast radius: how far a bad output travels

Score 1 if a wrong output is seen only by the person who generated it. Score 2 if it circulates internally. Score 3 if it reaches a client, a candidate, a regulator, an invoice, or anything published under your name.

Blast radius is the number founders underrate, because the failure they picture is an obvious one. AI output rarely fails obviously. It fails as a plausible number in paragraph 4 of a report that a client reads, believes, and acts on.

### Reversibility: how easily you take it back

Score 1 if a mistake is caught and fixed before it costs anything. Score 2 if fixing it costs time and an awkward conversation. Score 3 if it cannot be undone, which covers anything sent to a client, anything that moved money, anything that formed the basis of a decision someone else has now made, and anything that left your infrastructure entirely.

Data exposure is always a 3 on reversibility. Once client material has been pasted into a tool that retains it, there is no version of the next hour in which you get it back.

Multiply the 3 numbers. The result runs from 1 to 27. A workflow scoring 18 or higher is where your firm is genuinely exposed. Anything under 8 is noise you can leave alone this year and stop feeling vaguely guilty about.

---

## Step 3: rank the list and cut it to 3

Sort by score and draw a line under the third row.

This is the part founders skip, and skipping it is why so many governance efforts stall out. A list of 12 risks with no ranking produces a steady background worry and no action, because every item on it looks equally urgent and none of them has an owner.

Three controls is the right load for a firm without an operations lead. Three can be designed, explained to the team, and held in place across a normal month that also contains client work. Ten cannot. The 9 risks below the line go onto the schedule, and you pick them up when you re-run this.

Expect the top 3 to be unglamorous. In service firms the usual winners are client deliverables drafted with AI and sent without a real read, call notes containing client confidential detail flowing into a tool nobody checked, and some form of data cleanup where a wrong categorization ends up inside a number you bill against.

---

## Step 4: give every top risk one control and one owner

A risk with no named person attached is a note, and notes do not survive contact with a busy quarter. For each of your 3, write a single sentence in this shape: for this workflow, this control, owned by this person, checked at this moment.

The controls that work at this size are ordinary.

A review checkpoint, where a named human reads AI output before it leaves the building. This is the highest-value control you can add, and it covers blast radius and reversibility at the same time.

A data rule, where a class of input is barred from a workflow entirely. Cheap to state, and the risk goes away.

A tool substitution, where the same job moves to an account with terms you have actually read.

A hard stop, where a workflow is paused until someone has time to set it up properly. Founders under-use this one. Turning something off for 6 weeks is a legitimate control, and it beats leaving a 24-score workflow running while you intend to get to it.

Write the 3 sentences into your policy so the assessment and the rules people follow are the same document. If those two live apart, the policy drifts from reality within a quarter. The gap between a written rule and what people do is its own well-worn failure, covered in [AI policy versus AI training](/blog/ai-policy-vs-ai-training).

---

## What a finished AI risk assessment looks like for a 14-person firm

A recruitment firm runs the exercise on a Thursday afternoon and lists 11 workflows.

Candidate CV summarization scores 3 on data, 3 on blast radius since the summary goes to the client, and 3 on reversibility. That is 27, and it has been running for 8 months on a free account.

Job advert drafting scores 1, 3, and 2. That is 6, and it drops below the line despite feeling risky, because everything published gets read anyway.

Interview note cleanup scores 3, 2, and 3, which is 18 and lands third.

Internal process documentation scores 2, 2, and 1, so it comes to 4 and gets left alone.

The firm ends the afternoon with 3 controls. CV summarization moves to a paid account with a no-training term and gains a read-before-send step owned by the delivery lead. Interview notes get a rule that salary and personal contact detail are stripped before anything is pasted. The third control is a hard stop on an AI screening experiment a partner started, until it can be reviewed properly.

Total elapsed time is under 3 hours. No consultant, no software, no framework document. It worked because the firm scored 11 specific things it does on Tuesdays.

---

## How often to re-run it, and what to do between runs

Twice a year suits most firms this size, and the trigger matters more than the calendar. Re-run when you add a service line, when you take on a client with contractual data obligations, when headcount moves by a third, or when you deploy anything that acts on its own rather than drafting for a person. That last case changes the reversibility column across the board, which is why [when to use an AI agent](/blog/when-to-use-an-ai-agent) is worth settling before an agent goes live.

Between runs, the only maintenance that earns its keep is adding a row when a new workflow appears. Someone starts using AI for a job that was manual last month, it goes on the list with 3 numbers next to it. Thirty seconds of work, and your assessment stays current instead of expiring quietly.

---

## What this assessment will not catch

Be clear about the edges, because a method that claims to cover everything is one you will stop trusting the first time it misses.

It will not catch a workflow your team chose not to mention. Scoring depends on an honest list, and honesty depends on how you react to the first uncomfortable entry.

It will not evaluate model quality. Whether a given tool is accurate enough for a job is a separate test, and the assessment only tells you where accuracy matters most.

It will not satisfy a formal audit. A client running a vendor security review will want documented controls and evidence, and this exercise is the input to that work.

It will not replace the rest of your governance. The assessment tells you where the exposure sits. The tools list, the data classes, the access decisions, and the incident plan are what hold the line once you know, and they are laid out in [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## The bottom line for founders

Most small firms have never run an AI risk assessment because the available templates were built for companies with a compliance function, and a 14-person business correctly recognizes that a vendor register is a poor use of its Thursday.

The version that fits your firm counts workflows, scores each on data class, blast radius, and reversibility, and ends with 3 controls that have names attached. It takes an afternoon, and what you hold at the end is a decision.

The value shows up in what you stop worrying about. Once the list is ranked, the 8 low-scoring workflows are settled, and your attention goes to the 3 that could damage a client relationship. Governance work feels heavy because nobody drew that line.

If you want to see where your firm's exposure sits, [book a call](https://calendly.com/david-j-forer/30min) and we will run this on your real workflows and leave you with the ranked list and the 3 controls.
