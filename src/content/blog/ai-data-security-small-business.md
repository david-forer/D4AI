---
title: "AI Data Security for Small Business Starts With the Account Tier"
seoTitle: "AI Data Security for Small Business – What Happens to Your Data Inside AI Tools, Why the Account Tier Is a Bigger Control Than the Policy, and the 3-Class Data Rule a Founder Can Roll Out This Week – Forersight"
description: "AI data security for a small business is decided by which accounts your team uses and what data is allowed near them. Here is what to change this week."
pubDate: 2026-09-01T00:00:00Z
tags: ["ai-readiness"]
pillar: "ai-governance-for-small-businesses"
heroImage: "/images/blog/ai-data-security-small-business.webp"
articleType: "cluster"
---

## The short answer on AI data security for a small business

2 decisions carry most of the risk. Which account your team is logged into, and which class of data is allowed near it. Most of what gets sold under the heading of AI data security is second order for a firm under 115 people.

Search this topic and you land on either a security vendor explaining data loss prevention tooling built for companies with an IT department, or a short post telling you not to paste sensitive information into ChatGPT. One is unbuyable at your size. The other leaves out the 2 things a founder needs to know: what counts as sensitive, and what to change on Monday.

Your exposure comes from a handful of people, using a handful of tools, on a handful of document types. Close the tier question and the data class question and most of it is gone for close to no money. This article is the data component of the wider framework in [AI governance for small businesses](/blog/ai-governance-for-small-businesses), taken down to the level of what to change.

---

## What happens to your data inside an AI tool

When someone types into a general AI tool, 3 separate things can happen to that text. Each is governed by its own setting, and each has its own answer. Collapsing them into a single question about whether the tool is safe is what produces reassuring vendor replies that mean very little.

**It can be stored.** The provider keeps a copy for some period. This is normal and mostly mundane. It exists for abuse monitoring, support, and product function such as chat history. Periods vary widely by product and by tier, from days to well over a year.

**It can be used to improve the model.** A separate question from storage, and the confusion between the two causes most of the bad reasoning in this area. A vendor can decline to train on your content and still hold it for a month. A vendor can also delete it quickly and have trained on it in the meantime.

**It can be seen by a person.** Some providers allow human review of sampled conversations for quality and safety work. Again a separate setting, often with a different retention period attached to it.

Ask a vendor those 3 questions separately and you get 3 different answers. Ask whether your data is safe and you get marketing. Separating them is the first practical skill to build in a small team, and it is the discipline covered in [how to evaluate AI tools](/blog/how-to-evaluate-ai-tools) applied to one specific dimension.

---

## The account tier is the control most small businesses skip

The biggest variable across all 3 of those settings is the tier of the product your team is logged into.

Across the major providers, consumer tiers and business tiers behave differently by default. Business and team tiers generally exclude your content from model training as a matter of course. Consumer tiers vary, and several treat training as the default state that a user has to go and switch off. Retention periods differ along the same lines. Same brand, same interface, same model, materially different treatment of what your team types.

AI usually enters a small business through one person who signed up personally, found the tool useful, and told 2 colleagues. Nine months later a third of the firm is doing client work inside personal accounts that leadership never saw a bill for. The tool might be an excellent choice. The account it is being used through is the problem.

A 30-person firm can fix this in an afternoon for less than the cost of one contractor day. Buy the business tier for the 2 or 3 tools people use. Move everyone onto company accounts under the company domain. Retire the personal logins for work. You have now changed the default treatment of every prompt your team writes, without writing a line of policy or buying a monitoring product.

There is a second benefit founders underrate. Company accounts mean you can see who has access, remove it when somebody leaves, and give a real answer when a client asks who at your firm can reach their data. Personal accounts leave you guessing on all 3, and policy does not close that gap.

---

## The 3-class data rule your team can apply in 5 seconds

Tier decides how the tool treats data. The second control decides what reaches the tool at all. This has to be simple enough to run in someone's head mid-task, because that is the only moment it gets used.

3 classes is enough for almost every firm under 115 people.

**Open.** Material that is already public, or that you would not mind being public. Marketing copy, published content, general research questions, anything already on your own website. Goes anywhere, including free tools. No approval needed and no reason to slow anybody down.

**Internal.** Your own operational material that has not been published. Process documents, internal notes, draft plans, non-identifying analysis, most of the day-to-day work of running the company. Approved tools on business tier accounts only.

**Restricted.** Anything that belongs to a client or identifies a person. Client files and contracts, personal data, health or financial records, credentials, unreleased work you are contractually obliged to protect. Stays out of general AI tools unless there is a specific approved setup for it, agreed deliberately, with the vendor terms checked against what you promised that client.

3 classes works because of sorting speed. A paralegal at a 20-person practice with a document in front of them has about 2 seconds of willingness to think about this. Client name on it means restricted. Ours and unpublished means internal. Already public means open. That is the whole test, and it is one people will still be applying correctly in 6 months.

Write the rule down. What protects you is the behaviour, and a rule nobody can recall mid-task never reaches behaviour, which is the argument made at length in [AI policy versus AI training](/blog/ai-policy-vs-ai-training).

---

## 5 questions that settle whether a tool is safe for client data

Before any tool touches restricted material, get answers to these 5. They take one email to a vendor or 10 minutes in the documentation.

**Do you train on our content on the plan we are actually on?** Plan specific, not brand specific. The answer for the free tier tells you nothing about the answer for the team tier.

**How long do you retain inputs and outputs, and can we shorten it?** Some providers offer reduced or zero retention arrangements on business plans. Most small firms never ask, and the default is what they get.

**Can a person at your company read our content, and under what conditions?** This is the question clients ask you, so you need to be able to answer it about your suppliers.

**Where is the data processed and stored?** This matters the moment you have a client contract, a regulated sector, or customers covered by data protection rules that name jurisdictions.

**What happens to our data if we leave?** Deletion on request, and how long it takes in practice, is the part that gets discovered too late.

Keep the answers in one file next to your approved tools list. It is the difference between telling a client you have checked and telling them you believe so, and in a service business that distinction is worth more than it looks. It also feeds the wider stack review described in [the AI tech stack audit](/blog/ai-tech-stack-audit).

---

## What breaks first in a small business with no data rule

The failure pattern here is ordinary, which is exactly what makes it hard to notice.

A recruitment consultant pastes a candidate's full CV, salary history, and personal contact details into whatever tool is open, to rewrite the summary. A bookkeeper drops a client's management accounts in to get a plain-English explanation. An account manager feeds a signed contract in to draft a renewal email. Every one of those people is trying to do good work quickly. Every one of them has moved restricted data onto infrastructure the firm does not control, through an account the firm cannot see.

The damage arrives later. It shows up when a client asks a direct question in a supplier review, or when a contract you signed 2 years ago turns out to name where their data may be processed, or when the person who used the personal account leaves and takes the login with them.

The cost is asymmetric for a small firm. A 2,000-person company absorbs one mishandled document. A 15-person consultancy whose entire product is trust does not have that cushion. The same asymmetry is why the unapproved tools problem covered in [shadow AI](/blog/shadow-ai) is worth solving early, before the more sophisticated controls.

---

## Where security software fits for a firm your size

Worth being direct about the tooling question, because the search results on this topic are dominated by products.

Data loss prevention platforms, AI monitoring software, compliance suites, and 40-page policies written by a consultant are built for organisations with hundreds of staff, a security team to run them, and a regulatory obligation that names them specifically. Bought at 30 people, they become expensive software nobody administers.

The controls that carry most of your risk at this size are 3 business tier subscriptions, one page of rules, and the habit of asking 5 questions before a new tool touches client work. A few hundred a month, and one afternoon of a founder's attention.

Revisit the tooling question when something specific changes. A regulated client writes a control into a contract. Headcount passes the point where you can no longer name everybody with access. An incident shows you a gap the rule did not cover. Buying ahead of one of those signals buys a feeling.

---

## What to do this week

4 steps, in this order, achievable inside a normal week.

**Monday, find out what is in use.** Ask every person, with no blame attached, which AI tools they use for work and whether the account is personal or company. Nobody is in trouble. The answers you get from asking plainly beat the answers you get from any audit, and the exercise takes an hour.

**Tuesday, fix the tier.** Take the 2 or 3 tools that came up most, buy the business or team plan, and move everyone onto company accounts. While you are in the settings, check the training and retention options and set them deliberately rather than accepting the defaults.

**Wednesday, write the 3 classes.** One page. Open, internal, restricted, with 3 or 4 real examples from your own business under each. Use documents your team handles, not generic categories. Walk the team through it in one short meeting rather than emailing it out.

**Thursday, check the 2 tools that touch client data.** Only those 2. Run the 5 questions, write the answers in a file, and decide whether the current setup is one you would be comfortable describing to the client in question.

Anything beyond that can wait. Access reviews, incident procedures, and vendor re-checks are worth doing after the 2 controls that carry the weight are in place. Sequencing matters more than completeness here, which is the logic behind the staged approach in the [AI readiness framework for service businesses](/blog/ai-readiness-framework-for-service-businesses).

---

## The bottom line for founders

AI data security at your size comes down to 2 decisions nobody has explicitly made yet.

The first is which account your team works inside, because that setting decides how every prompt they write gets treated. The second is which class of data is allowed near it, because that decides what is at stake when something goes wrong. Both are cheap. Both are reversible. Both take effect the moment you make them, unlike a policy, which takes effect only when somebody remembers it.

Make those 2 and you have addressed the exposure that damages small firms, while the rest of the market is still deciding which monitoring platform to evaluate.

If you want a read on where your firm's AI use currently puts client data, you can [book a call](https://calendly.com/david-j-forer/30min) and we will look at the real tools and the real documents rather than the policy on paper.
