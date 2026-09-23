---
title: "AI Vendor and Model Risk Is Really Concentration Risk"
seoTitle: "AI Vendor and Model Risk for Small Business – Why Concentration Is the Exposure That Actually Lands, What Happens When a Model Changes Underneath You, and the 5 Questions to Ask Before You Sign – Forersight"
description: "AI vendor and model risk for a small firm is concentration risk. What happens when a vendor dies, raises prices, or changes the model underneath you."
pubDate: 2026-09-23T00:00:00Z
tags: ["ai-governance"]
heroImage: "/images/blog/ai-vendor-and-model-risk.webp"
articleType: "cluster"
---

Most vendor risk advice is written for companies shipping AI products. This page is for the firm that uses AI to run its own work and needs to know what happens when a tool goes away.

## Key Takeaways

- For a small service firm, the AI vendor and model risk that causes real damage is concentration: one vendor holding one workflow, with no way to get the work out.
- AI models change underneath you through deprecation, quality shifts and unannounced behaviour changes, and 20 real test cases rerun monthly catch that drift in about 20 minutes.
- The 4 vendor failure modes that hit small firms are acquisition and retirement, repricing, capability withdrawal, and the vendor closing.
- A plain written description of each automated workflow, kept outside the vendor's tool, turns a forced migration from a rebuild into a configuration job.
- Before signing with an AI vendor, ask which model is underneath, whether configuration can be exported, what the renewal terms are, who funds the company, and what happens on acquisition.

---

## The AI vendor and model risk that actually lands on a small firm

Your exposure is concentration. One vendor, holding one workflow, with your process built inside it and no way to get the work out.

Most writing on this topic covers model bias, hallucination rates and evaluation frameworks. Those are real engineering concerns for a company shipping an AI product. For a 30-person service firm using AI to run its own operations, the events that actually cause damage are duller and more likely: the vendor gets acquired and the product is retired, the price triples at renewal, or the model underneath changes and output quality shifts without anyone announcing it.

None of those is a model quality problem. All 3 are dependency problems, and they are managed differently. This sits inside the wider framework in [AI governance for small businesses](/blog/ai-governance-for-small-businesses).

---

## Model risk is the risk of change underneath you

When you buy an AI product you are renting a model you do not control, and the vendor can change it whenever they like.

**Models get deprecated.** Providers retire older models on published timelines and vendors follow. A workflow tuned against one model behaves differently on its replacement. Prompts that were reliable start producing a different shape of output, and the change arrives as a support ticket from your own team rather than as a notification.

**Quality moves in both directions.** A newer model is usually better on average and can be worse on your specific task, particularly where you had tuned prompts around the old one's habits. Average improvement is not improvement for you.

**Behaviour changes without a version number.** Vendors adjust system prompts, safety layers and routing continuously. The label stays the same and the output does not.

The practical control is small and unglamorous. Keep 20 real cases with the outputs you consider correct. Run them once a month and after any vendor announcement. It takes 20 minutes and it converts silent drift into something you notice on your own schedule rather than a client's.

---

## The vendor risk that decides whether you recover

Four failure modes, in rough order of how often they hit firms this size.

**Acquisition and retirement.** The AI tooling market is consolidating. Products get bought and folded into a larger suite or shut down with a few months notice. This is the most likely event to interrupt you, and it has nothing to do with how good the product is today.

**Repricing.** Introductory pricing on a young product is a customer acquisition cost, not a business model. Renewal is where the real price appears. Firms with 9 months of process built inside a tool pay it, which is exactly why it works.

**Capability withdrawal.** A feature you built a workflow on moves to a higher tier or disappears. Nothing broke, the terms changed.

**The vendor simply stops.** Smaller AI companies close. Your data export window is measured in weeks and lands during a busy month.

| Failure mode | What happens | Why it hurts |
|---|---|---|
| Acquisition and retirement | The product is folded into a larger suite or shut down with a few months notice | The most likely interruption, whatever the product's quality today |
| Repricing | Introductory pricing ends at renewal | Firms with 9 months of process built inside the tool pay it |
| Capability withdrawal | A feature you built on moves to a higher tier or disappears | Nothing broke, the terms changed |
| The vendor stops | A smaller AI company closes | The export window is weeks, often in a busy month |

Against all 4, the question that matters is the same: how long would it take you to run this work another way, and what would you lose. If the answer is a fortnight of disruption, you have an inconvenience. If the answer is that nobody remembers how the process worked before the tool, you have a real dependency.

---

## The exposure nobody prices: the process leaves with the tool

This is the part that turns a vendor change into a real problem, and it builds quietly.

A firm adopts a tool. Over a year the workflow gets shaped around it. The prompts, the routing rules, the scoring criteria, the exceptions, all of it accumulates inside the vendor's interface. The knowledge of how the work is done stops living in the firm and starts living in the product.

Then the vendor is acquired, and the firm discovers it cannot describe its own process well enough to rebuild it elsewhere.

The fix costs an afternoon a quarter. Keep a plain document outside the tool describing what the workflow does, the rules it applies, and why the exceptions exist. Not a technical export. A description a competent person could work from. That single habit converts a migration from a rebuild into a configuration job, and it is the same discipline behind [mapping business processes for automation](/blog/map-business-processes-for-automation).

---

## 5 questions that price a vendor's risk before you sign

Ten minutes in the documentation or one email. Ask them before the tool touches anything important.

**Which model is underneath this, and do you tell us when it changes?** Some vendors name the provider and publish changes. Some will not say. That answer alone tells you how much drift you are accepting blind.

**Can we export our configuration, not just our data?** Data export is common and is the smaller half. Prompts, rules and workflow logic are the part that took you 9 months to build.

**What are your renewal terms and your notice period on price?** Ask now, while you are the party being courted.

**How long have you been operating, and who funds you?** A blunt question, and reasonable for a supplier you are about to depend on. A 14-month-old company with one product is a different risk from an established firm adding an AI feature.

**What happens to our data and our access if you are acquired?** Rarely answered well. The quality of the non-answer is informative.

Keep the replies in one file next to your approved tools list. It takes an hour once and it is the difference between telling a client you checked and telling them you assumed. The wider version of this discipline is in [how to evaluate AI tools](/blog/how-to-evaluate-ai-tools).

---

## Proportion: what to actually do at 30 people

The controls that match this risk at your size are cheap, and the ones being marketed are not.

**Do these 4.** Keep 20 test cases and run them monthly. Keep a written description of each automated workflow outside the vendor's tool. Ask the 5 questions before adopting anything that touches client work. Know, for your 2 most important tools, roughly what a move would cost in days.

**Skip these until something changes.** Model evaluation platforms, formal vendor risk management software, dual-vendor redundancy for the same workflow, and a written model governance framework. All are built for organisations with a risk function to run them. Bought at 30 people they become software nobody administers, which is the same pattern described in [AI risk assessment for small business](/blog/ai-risk-assessment-small-business).

Revisit when a regulated client writes a control into a contract, when a single tool starts carrying work you could not run manually for a week, or after your first real incident.

---

## What to do the week a vendor announces a change

Deprecation notices, acquisitions and pricing letters all arrive the same way, as an email somebody skims. A short standing response keeps it from turning into a month of firefighting.

**Work out what the change actually touches.** Most announcements affect one product tier or one model. Read to the specific, because the alarming headline often does not reach your setup at all.

**Run your 20 test cases before the change lands, not after.** If a model is being retired on a date, most vendors let you run against the replacement early. Twenty minutes of testing in the notice window tells you whether your prompts survive, while you still have both options available.

**Check what the change does to your terms.** An acquisition can bring a new privacy policy, a new processing location, or new retention defaults. If you have told a client where their data sits, that sentence may have quietly stopped being true.

**Decide on a date, not on a feeling.** Either you accept the new arrangement, adjust your prompts, or start moving. Pick which one and put it in the calendar. The failure mode here is a firm that reads the notice, feels uneasy, does nothing, and then discovers the change at the same moment a client does.

For most small firms the honest answer to most notices is that nothing needs to happen. The value of having a routine is that you can establish that in 30 minutes rather than carrying it as background worry for 6 weeks.

---

## The concentration question worth asking once a year

List your AI tools. For each one, answer 2 things: what work stops if this disappears on Monday, and how long until that work runs another way.

Most firms find the answers are fine for 4 tools and uncomfortable for 1. That 1 is your concentration risk, and it is usually not the most expensive subscription. It is the one that quietly absorbed a process nobody wrote down.

You do not need a second vendor for it. You need the process described outside the tool, and a rough idea of what a move would take. That is proportionate, it costs an afternoon, and it is the difference between a supplier change being an inconvenience and being a bad quarter.

---

## The bottom line for founders

Model quality is the vendor's problem. Dependency is yours.

Pick your 2 most important AI tools, ask the 5 questions, write down what each automated workflow actually does in a file the vendor does not control, and keep 20 test cases you rerun monthly. That is the whole programme, it costs one afternoon plus 20 minutes a month, and it covers the events that realistically happen to firms your size.

If you want a view on where your stack is concentrated and what a forced move would cost you, you can [book a call](https://calendly.com/david-j-forer/30min) and we will look at the real tools and the real workflows rather than the vendor's security page.

---

## Frequently Asked Questions

### What happens to my data if an AI vendor shuts down or gets acquired?

It depends on the vendor, and few answer the question well until you ask it. When a smaller vendor closes, the export window is usually weeks. Ask what happens on acquisition before you sign and keep the reply on file.

### How do I know if an AI model update has broken my workflow?

Keep 20 real cases with the outputs you consider correct, and rerun them monthly and after any vendor announcement. It takes about 20 minutes. Otherwise you find out from a client, and that is the expensive way to learn.

### Should a small business use two AI vendors for the same workflow?

Usually not. Dual-vendor redundancy is built for organisations with a risk function to run it. What you need is the process written down outside the tool and a rough idea of what a move would cost in days.

### What questions should I ask an AI vendor before signing?

Five: which model is underneath and whether they tell you when it changes, whether you can export configuration and not just data, the renewal terms and notice on price, how long they have operated and who funds them, and what happens on acquisition. Ask while you are still the one being courted.

### How do I reduce my dependency on one AI tool?

Write down what each automated workflow does, the rules it applies, and why the exceptions exist, in a plain document the vendor does not control. An afternoon a quarter covers it. Tools come and go, but the know-how for running your work should stay in the building.
