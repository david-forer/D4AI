---
title: "Same-day service call: first ring to paid invoice"
accent: "first ring to paid invoice"
seoTitle: "HVAC Service Call SOP Example – Same-Day and Emergency Calls From First Ring to Paid Invoice – Where AI Fits and Where Techs Decide – David J Forer"
description: "A worked SOP for a 12-person HVAC company, from the first ring to the paid invoice, with the AI and human boundary set at every step."
niche: "Residential HVAC"
cardText: "A 12-person HVAC shop, from the first ring to the paid invoice. After-hours emergencies, safety triggers, quotes, payment and reviews."
lede: "A worked SOP for a 12-person residential HVAC company. It covers one workflow, with the tools a shop this size already runs, and it marks where AI acts alone, where a person decides, and where the two hand off."
disclaimer: "The business is a composite. Product names are examples of common tools in this trade, so swap in the ones you use. No affiliation with any vendor named. Dollar limits and time windows are sample numbers, so set your own. The consent section is a starting outline, so have your attorney confirm it for your state."
pubDate: 2026-10-29
order: 1
facts:
  - { label: "Business", value: "Residential HVAC, 12 people, about $3M revenue" }
  - { label: "Workflow", value: "Same-day and emergency repair calls, including after hours" }
  - { label: "Workflow owner", value: "Office manager" }
  - { label: "Trigger", value: "A customer calls, texts, or submits a request" }
  - { label: "Systems", value: "Housecall Pro, QuickBooks Online, Google Local Services Ads, Google Business Profile, a business text line" }
  - { label: "Staff", value: "Owner, office manager, 2 CSRs, 8 technicians and installers" }
  - { label: "Reviewed", value: "Monthly, first Monday" }
rolesNote: "Roles in a shop this size: the service manager is the lead tech, the on-call lead rotates weekly among 3 other senior techs (the service manager is not in that rotation), and the bookkeeper is outsourced."
safety:
  heading: "Safety triggers (the one list every step uses)"
  intro: "Any of these on a call, text or visit stops the normal flow:"
  items:
    - "A gas smell"
    - "A carbon monoxide alarm going off"
    - "Smoke or a burning smell"
    - "Arcing or crackling from electrical parts, or water touching electrical equipment"
  body:
    - "The caller is told to leave the home first, without touching light switches or appliances, then call 911 from outside, and the gas utility as well for a gas smell. A person then calls back within 5 minutes. For these calls the on-call lead and the service manager are paged at the same time, so the promise never depends on one phone."
    - "Flooding or an active leak with no electrical contact is an emergency booking. Tell the customer to shut off the water main if it is safe to reach. It is not a 911 call."
  note: "Change this list in one place only. Steps 1, 4 and 5 and the diagram point here. Step 5 holds the tech's on-site safety steps."
afterHours:
  heading: "After-hours routing rule"
  text: "After hours, anything routed to the CSR or the office manager goes to the on-call lead if it cannot wait, and otherwise to the 7:30 AM queue. This covers requests for a person, customer questions by text, unpaid balances, out-of-zone addresses and commercial equipment."
diagramIntro: "The color shows who carries each step today: AI, rule-based automation, a person, or a mix with a handoff."
diagramFooter: "Safety exit at any step: any trigger on the safety list goes straight to a person and 911 guidance."
aiLayer:
  intro: "Most of this SOP runs on software the shop already pays for. Four sources cover it."
  rows:
    - { source: "Field service software (Housecall Pro in this example)", does: "Reminders, on-my-way and delay texts, review requests, invoices, payment reminders, the QuickBooks sync", kind: "Automation, from rules and templates" }
    - { source: "AI receptionist add-on", does: "Answers calls and texts after hours, runs intake, books into the schedule", kind: "AI" }
    - { source: "AI features in the software, or an AI assistant connected to it", does: "Urgency ranking, history lookup, data plate reading, job summaries from voice notes, dispatch suggestions, review reply drafts", kind: "AI" }
    - { source: "Built for the shop", does: "The morning exception list, the call-sampling sheet, the plan offer eligibility check", kind: "AI or simple rules, depending on the build" }
  note: "What each platform includes changes often and varies by plan. Check your own plan before counting on a feature."
beforeAfter:
  summary: "7 handoffs today. 4 are removed. 3 stay, each now with a review point. 11 pieces of new work appear."
  today: "The 7 handoffs today: caller to CSR notes, notes into the software, dispatcher phoning the tech, tech phoning the customer, tech's notes back to the office, office typing the invoice, office typing the books."
  removed:
    - "Re-typing call notes into the software"
    - "Phoning the customer with an ETA"
    - "Typing the invoice from the tech's notes"
    - "Typing invoices into QuickBooks"
  stay:
    - "Caller to CSR notes: the record is read back to the caller"
    - "Dispatcher to tech: the dispatcher confirms the board"
    - "Tech notes to office: the tech reads and sends the AI summary"
  newWork:
    - "Morning exception list (15 minutes)"
    - "5 sampled AI calls reviewed weekly"
    - "Monthly update of the limits on this page"
    - "Low-score call-backs by the office manager"
    - "On-call approvals and dispatch"
    - "7:30 AM review of after-hours dispatches"
    - "Re-entering paper forms after an outage"
    - "Keeping opt-in records"
    - "Payment plan approvals"
    - "Monthly safety drill call"
    - "Approving plan offers for the first 30 days"
  note: "Counts come from mapping this one sample workflow. Some of the new work, such as payment plan approvals, may already happen informally in your shop. Count it anyway. Map your own before quoting a number to anyone."
steps:
  - title: "Capture the request"
    owner: "shared"
    diagram: ["Google Local Services Ads", "Business text line", "AI after hours, CSR by day"]
    who: "CSR during business hours. AI phone and text assistant after hours and when both lines are busy."
    tools: ["Google Local Services Ads", "Business text line (OpenPhone or Podium)", "Housecall Pro online booking"]
    procedure:
      - "Answer within 3 rings. A missed call gets a text within 1 minute asking what is going on."
      - "The AI says at the start that it is an automated assistant, and offers a person on request. After hours, that person is the on-call lead if the matter cannot wait, and otherwise the 7:30 AM queue."
      - "Collect the name, mobile number, service address, system type (AC, furnace, heat pump), the symptom, and how long it has been happening."
      - "Ask who lives in the home. Infants, elderly residents and anyone on medical equipment raise the urgency."
      - "Ask the safety questions from the <a href=\"#safety\">safety triggers list</a> on every call."
      - "Read the address and phone number back to the caller."
      - "Create or match the customer record in Housecall Pro before the call ends."
    aiDoes: "Answers after hours, asks the same intake questions in the same order, writes the record, and reads the address back to the caller."
    personDoes: "Takes live calls first, handles upset callers, and picks up anything the AI cannot classify."
    boxes:
      - { kind: "stop", label: "AI handles it unless", text: "The caller mentions any safety trigger. The AI gives the 911 guidance, then pages the on-call lead and the service manager at the same time. If neither answers within 3 minutes, it phones the owner and keeps trying until a person picks up." }
    done: "Done when the record holds address, phone, system, symptom and the safety answer."
  - title: "Triage and book"
    owner: "ai"
    diagram: ["Housecall Pro", "Urgency, history, fee", "AI books, CSR confirms"]
    who: "AI books routine and same-day jobs. A person approves emergencies: the CSR by day, the on-call lead after hours."
    tools: ["Housecall Pro", "Price book"]
    procedure:
      - "Rank the call. Emergency: no heat or no cooling with a vulnerable resident, or an active leak. Same-day: no heat or cooling otherwise. Routine: tune-ups, noises, thermostats, booked within 5 business days."
      - "Check the record: past jobs, equipment age, warranty, membership plan, any unpaid invoice."
      - "Quote the diagnostic fee from the price book."
      - "Book the window and send a confirmation text with the date, arrival window and fee."
    aiDoes: "Ranks urgency from the intake answers, pulls the customer and equipment history, proposes the slot, and books it when it is open."
    personDoes: "Confirms every emergency booking."
    boxes:
      - { kind: "stop", label: "AI handles it unless", text: "The customer has an unpaid balance, the address is outside the service zone, the equipment is commercial, or the job is a warranty callback inside 30 days. Those go to the office manager." }
      - { kind: "after", label: "After hours", text: "The AI books the emergency and pages the on-call tech and the on-call lead at the same time, by call and text. The on-call tech heads out on the page and does not wait for approval. If the tech does not acknowledge the page in 5 minutes, the on-call lead assigns the next senior tech. The on-call lead confirms the job in the app. If the lead has not answered in 5 minutes, the page goes to the service manager, and 5 minutes after that to the owner. Once on the road, the tech taps \"on my way,\" which sends the automated ETA text." }
    done: "Done when a job exists with job type, window and fee, and the confirmation text has gone out."
  - title: "Dispatch"
    owner: "shared"
    diagram: ["Dispatch board", "AI proposes the route", "Dispatcher confirms"]
    who: "Office manager acts as dispatcher by day. The on-call lead dispatches after hours."
    tools: ["Housecall Pro dispatch board"]
    procedure:
      - "Open the board at 7:30 AM and again after every emergency booking."
      - "Match each job to a tech by certification (refrigerant, gas, heat pump), location and remaining capacity."
      - "Put emergencies ahead of scheduled work and tell the displaced customers by text."
    aiDoes: "Proposes the assignment and drive order, and flags overlapping windows. The 20-minute late alert comes from the step 4 automation."
    personDoes: "Accepts or changes every proposal. The board is not final until the dispatcher says so."
    boxes:
      - { kind: "stop", label: "AI handles it unless", text: "The job is an emergency or a warranty callback. By day, the dispatcher assigns those by hand, and a callback goes back to the tech who did the original job when possible. After hours, the on-call path below applies." }
      - { kind: "after", label: "After hours", text: "The on-call lead confirms the on-call tech in the app, or reassigns the job if another tech is closer. The office manager reviews every after-hours dispatch at 7:30 AM." }
    done: "Done when every job today has a tech and a window, and no tech has overlapping windows."
  - title: "Customer heads-up"
    owner: "auto"
    diagram: ["Housecall Pro texts", "On-my-way text with photo", "Rule-based, no AI"]
    who: "Automated, on a schedule and from the tech's app."
    tools: ["Housecall Pro customer notifications"]
    procedure:
      - "The night before a scheduled job, the customer gets a reminder with the arrival window."
      - "When the tech taps \"on my way,\" the customer gets a text with the tech's first name, photo and live ETA."
      - "If the tech runs more than 20 minutes late, the customer gets a delay text and the dispatcher sees an alert."
    automationDoes: "Sends the reminder, on-my-way and delay texts from templates. No AI is involved in sending them."
    aiDoes: "Sorts customer replies into questions and confirmations."
    personDoes: "CSR answers replies that contain a question. After hours, the <a href=\"#afterhours\">after-hours routing rule</a> applies."
    boxes:
      - { kind: "stop", label: "AI handles it unless", text: "The reply contains a complaint, a cancellation, or any <a href=\"#safety\">safety trigger</a>. It goes to the CSR at once, and a safety trigger follows the step 1 path." }
    done: "Done when the on-my-way text is sent and the arrival time is logged."
  - title: "Diagnose and quote"
    owner: "human"
    diagram: ["Housecall Pro price book", "Good, better, best options", "Tech decides, AI looks up"]
    who: "Technician. The customer approves."
    tools: ["Housecall Pro mobile app", "Price book with good, better, best options"]
    procedure:
      - "Check for the <a href=\"#safety\">safety triggers</a> before touching the equipment."
      - "Photograph the data plate and the failed part."
      - "Record a short voice note on what was found."
      - "Pick the repair from the price book and show the customer the options on the tablet."
      - "Get the customer's signature on the option they choose, or log why they declined."
    aiDoes: "Reads the data plate photo to fill model, serial and age (the tech confirms them before the warranty lookup), pulls service history and warranty status, drafts the findings from the voice note, and flags a price book item that does not match the part described."
    personDoes: "The tech diagnoses, recommends and sells. AI never sets the diagnosis or the price."
    boxes:
      - { kind: "stop", label: "If a safety trigger is found", text: "For a gas smell, do not operate switches, phones or anything electrical near the leak. Get everyone out, shut off the gas at the appliance or meter if it is safe to reach, and call the gas utility from outside. For a carbon monoxide reading, get everyone out, ventilate, and shut the appliance down. For an electrical hazard, kill power at the breaker. Then red-tag the unit, photograph it, and notify the service manager before leaving. Nobody restarts the unit until the service manager clears it. If the customer refuses the red tag, the tech explains the hazard, gets a signed refusal, and attaches the signature and photos to the record. For a gas leak or a carbon monoxide reading, the tech also calls the gas utility, which can shut off or lock the meter, following the utility's rules and local code." }
      - { kind: "stop", label: "The tech decides alone unless", text: "The quote is above $1,500, the customer asks about replacing the system, or the tech wants to discount more than 10%. The service manager approves by text with photos, usually within 15 minutes. With no reply in 15 minutes, the request goes to the owner. The tech does not start the work until someone approves. With no approval in 30 minutes on a routine job, the tech books a return visit and leaves. On an emergency job, the tech makes the system safe and does a temporary repair within their own limit before leaving, and the on-call lead is told." }
    done: "Done when there is a signed approval, or a logged decline with the reason."
  - title: "Complete the work and collect payment"
    short: "Complete and collect"
    owner: "shared"
    diagram: ["Tap to pay, card on file", "AI writes the job summary", "Tech approves and sends"]
    who: "Technician. AI drafts the paperwork."
    tools: ["Housecall Pro invoicing", "Card reader or card on file", "Text-to-pay link"]
    procedure:
      - "Finish the repair, then take before and after photos."
      - "Add the parts used to the job."
      - "Read the AI-drafted job summary, fix anything wrong, and send it to the customer."
      - "Collect payment on site by tap to pay, card on file, or a text-to-pay link."
      - "If payment is not collected, leave the invoice open. Automatic reminders go out for 30 days, then the invoice goes to the office manager for collection."
    aiDoes: "Turns the voice note into a plain-English summary for the customer and a shorter internal note, and builds the invoice from the approved option and the parts list."
    personDoes: "The tech reads the summary before it goes out. The office manager approves payment plans up to $2,000. The owner approves larger ones."
    boxes:
      - { kind: "stop", label: "Stop and escalate when", text: "The customer disputes a charge, asks for a refund, or reports damage from the visit. No automatic reply is sent. The office manager gathers the facts the same day and settles disputes and refunds up to $500. Above $500, or for any damage claim, the owner decides and is told within 1 hour." }
    done: "Done when the invoice is paid or an approved payment plan is noted, photos are attached, and the job is closed."
  - title: "Books and sync"
    owner: "shared"
    diagram: ["QuickBooks Online", "AI flags mismatches", "Office manager clears them"]
    who: "Office manager daily. Bookkeeper monthly."
    tools: ["Housecall Pro to QuickBooks Online sync"]
    procedure:
      - "Invoices and payments sync to QuickBooks overnight. This is a built-in integration with no AI in it."
      - "By 8 AM the office manager receives one exception list."
      - "The office manager clears the list in about 15 minutes, giving each open item an owner and a date."
      - "The bookkeeper reconciles the month against the bank and card processor."
    aiDoes: "Builds the exception list: payments that differ from the invoice, closed jobs with no parts cost, closed jobs with no photos, and duplicate customer records."
    personDoes: "Fixes each item. AI does not edit financial records."
    boxes:
      - { kind: "stop", label: "Escalate to the owner when", text: "The same exception shows up on 3 jobs in a week, or a payment mismatch is above $500." }
    done: "Done when the list is empty or every item has an owner and a date."
  - title: "Follow-up and reviews"
    short: "Follow-up, reviews"
    owner: "shared"
    diagram: ["Google Business Profile", "Link goes to every customer", "Low scores get a call"]
    who: "Automated request. Office manager takes the low scores."
    tools: ["Housecall Pro review requests", "Google Business Profile"]
    procedure:
      - "24 hours after the job, every customer gets the same text. It asks for a private 1 to 5 rating and includes the Google review link."
      - "A rating of 1, 2 or 3 also goes to the office manager, who calls within one business day and logs the call. The owner sees the week's low scores every Monday. The call fixes the problem. It never asks the customer to change or remove a review, and nothing is offered in exchange for one."
      - "New Google reviews get a reply within 2 business days."
      - "Customers whose system is 5 or more years old, who are not already members and who opted in to marketing texts, get the maintenance plan offer."
    aiDoes: "Drafts review replies and the maintenance plan offer, after checking membership status. Sending the requests and routing the scores is rule-based automation."
    personDoes: "The office manager posts every review reply. For the first 30 days, the office manager also approves each plan offer before it goes out."
    boxes:
      - { kind: "stop", label: "Stop and escalate when", text: "A message mentions a lawyer, an injury or property damage. It goes to the owner immediately and gets no automatic reply." }
      - { kind: "why", label: "Why everyone gets the link", text: "Google's policy against selectively soliciting positive reviews, and the FTC's guidance to businesses, both rule out sending the link only to customers expected to rate high. The score routes the follow-up call. It never decides who is asked." }
    done: "Done when the request is sent, every low score has a logged call, and eligible customers have the plan offer."
outage:
  - "The office manager, or the on-call lead after hours, declares the outage and tells the owner."
  - "Calls forward to the CSR's cell. If the outage runs after hours, they forward to the on-call lead."
  - "Intake runs on a paper form with the same fields as step 1, including the safety questions."
  - "The on-call lead dispatches by phone and text."
  - "Within 1 hour of the system coming back, the CSR enters every paper form and the office manager checks for duplicates."
consent:
  items:
    - "The AI identifies itself as an automated assistant at the start of every call and text, and hands off to a person on request. After hours, the after-hours routing rule decides who that is."
    - "Call recording follows your state's consent law. Some states need every party's consent, so the greeting says the call may be recorded."
    - "Customers agree to service texts (confirmations, ETAs, receipts) when they book. When the AI books by phone, it reads the consent line aloud, the caller confirms, and the AI logs the confirmation to the customer record. Marketing texts, including the maintenance plan offer, go only to customers who gave written opt-in, and every text honors a stop request."
    - "Outbound calls to customers stay with a person by default. Under the FCC's 2024 ruling, an AI-generated voice counts as an artificial voice under the TCPA, so an AI placing calls to customers needs the same consent as a prerecorded call."
    - "Keep the opt-in record with the customer file in Housecall Pro."
  note: "This is an outline of the questions to settle, not legal advice. Have your attorney confirm it for your state before turning on the AI assistant."
raci:
  - { step: "1 Capture", r: "CSR, AI after hours", a: "Office manager", c: "On-call lead, service manager", i: "Owner" }
  - { step: "2 Triage and book", r: "AI, CSR (on-call lead after hours)", a: "Office manager", c: "Service manager", i: "Technicians" }
  - { step: "3 Dispatch", r: "Office manager, on-call lead after hours", a: "Office manager", c: "Service manager", i: "Technicians, CSR" }
  - { step: "4 Heads-up", r: "Automation, AI for replies", a: "Office manager", c: "CSR", i: "On-call lead after hours" }
  - { step: "5 Diagnose and quote", r: "Technician", a: "Service manager", c: "Owner (replacements, discounts)", i: "Office manager" }
  - { step: "6 Complete and collect", r: "Technician", a: "Office manager", c: "Owner (disputes over $500, plans over $2,000)", i: "Bookkeeper" }
  - { step: "7 Books and sync", r: "Office manager", a: "Owner", c: "Bookkeeper", i: "Service manager" }
  - { step: "8 Follow-up and reviews", r: "Automation, office manager", a: "Office manager", c: "CSR", i: "Owner, technicians" }
ownership:
  - "Only the office manager changes AI settings, and every change gets a dated line in the change log. The owner owns the dollar limits, the escalation timeouts, disputes over $500, and anything involving a lawyer or an injury. The owner is the last person paged, never the first. The service manager owns the safety list. The on-call lead owns after-hours approvals. Dispatcher means the office manager by day and the on-call lead after hours."
  - "Live emergency calls and upset callers stay with the CSRs. New hires learn the judgment calls from those, so the AI takes the routine volume and leaves them the hard cases they need to hear."
metrics:
  - { measure: "Safety trigger to a person on the phone", baseline: "Run a drill call in week 1", target: "Under 5 minutes, 100% of cases", owner: "Service manager", how: "Page log timestamps, plus a monthly drill call" }
  - { measure: "After-hours emergency page to a tech on the road", baseline: "Run a drill call in week 1", target: "Under 10 minutes", owner: "Service manager", how: "Page log and Housecall Pro job timestamps" }
  - { measure: "Calls answered or texted back inside 1 minute", baseline: "Record for 2 weeks before go-live", target: "95%", owner: "Office manager", how: "Phone system report" }
  - { measure: "Jobs with a complete record at booking", baseline: "Record for 2 weeks before go-live", target: "98%", owner: "Office manager", how: "Weekly check of 20 jobs" }
  - { measure: "Job closed to invoice paid", baseline: "Record for 2 weeks before go-live", target: "Same day for 80% of jobs", owner: "Office manager", how: "Housecall Pro report" }
  - { measure: "Exceptions on the morning list", baseline: "Count during the first 2 weeks", target: "Under 5 a day, trending down", owner: "Office manager", how: "Daily count" }
  - { measure: "Sampled AI calls that needed a correction", baseline: "First 20 sampled calls", target: "Under 1 in 10", owner: "Service manager", how: "5 calls reviewed each week" }
  - { measure: "Replies posted inside 2 business days", baseline: "Current Google Business Profile history", target: "100%", owner: "Office manager", how: "Google Business Profile" }
metricsNote: "Hours saved is a weak measure here. Count the handoffs removed and the new work added, because the second number is the one people forget."
snapshot:
  - { label: "Workflow", value: "Same-day service call, first ring to paid invoice" }
  - { label: "Stuck point", value: "Call details are captured once, then re-keyed by hand at several later handoffs" }
  - { label: "What AI handles", value: "Intake, urgency ranking, history lookup, summaries, exception spotting" }
  - { label: "What stays human", value: "Diagnosis, emergencies, quotes above $1,500, refunds, disputes, payment plans" }
  - { label: "Who was missing", value: "Before this SOP, nobody owned what the after-hours assistant says to a caller or who answers when it pages" }
  - { label: "First change to test", value: "Connect the phone line to the customer record, then turn on after-hours booking with the on-call path in place" }
changelog:
  - { date: "2026-10-29", change: "First release", version: "Sample v1.0", by: "Office manager" }
  - { date: "2026-10-29", change: "Added on-site safety steps, after-hours routing rule, simultaneous safety paging, two safety metrics", version: "Sample v1.1", by: "Office manager" }
  - { date: "2026-10-29", change: "Separated AI from automation, moved approvals off the owner, added the AI layer, red-tag refusals, approval and collection timeouts", version: "Sample v1.2", by: "Office manager" }
  - { date: "2026-10-29", change: "Emergency rule for stalled approvals, gas utility call on red-tag refusals, on-call tech timeout, automated after-hours ETA", version: "Sample v1.3", by: "Office manager" }
---
