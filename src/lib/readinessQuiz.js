/**
 * AI Readiness Snapshot: questions, scoring, and the cost model.
 *
 * Single source of truth. The component renders whatever is in here, so adding
 * or reordering a question means editing this file only.
 *
 * Design notes, because they will not be obvious in six months:
 *
 * - Four scored categories. System Readiness is the one competitors do not
 *   measure, and it maps to the tool-openness research in Audit Method v2
 *   part 4. A recommendation that ignores whether a tool can be connected is
 *   a guess, so the quiz asks up front.
 *
 * - Every scored option carries explicit points. No implicit index-based
 *   scoring, because reordering options would then silently rescore the quiz.
 *
 * - The cost model produces a RANGE and shows its own arithmetic. It is a
 *   crude version of what the paid audit does properly, and it says so on the
 *   page. False precision here would poison the one number the whole funnel
 *   rests on.
 */

export const CATEGORIES = {
  process: {
    key: 'process',
    name: 'Process clarity',
    blurb:
      'Whether the work is described precisely enough to hand to anyone, human or machine. You cannot automate a process nobody has written down.',
  },
  founder: {
    key: 'founder',
    name: 'Founder dependency',
    blurb:
      'How much of the business runs through one head. This is the number that caps your growth and the one most owners have never priced.',
  },
  systems: {
    key: 'systems',
    name: 'System readiness',
    blurb:
      'Whether your tools can actually be connected to anything. Good software that cannot export or integrate is a dead end for automation.',
  },
  practice: {
    key: 'practice',
    name: 'AI practice',
    blurb:
      'Whether AI use is governed and shared, or scattered and personal. Gains that stay with one person do not compound.',
  },
};

/**
 * Question types:
 *   single   - one choice, each option carries points
 *   multi    - several choices, scored by a named scorer function
 *   number   - numeric entry, scored by bands
 *   segment  - unscored, captured for routing or the cost model
 */
export const QUESTIONS = [
  // ---------- On-ramp ----------
  {
    id: 'stage',
    type: 'single',
    category: null,
    helper: 'There is no wrong answer. It helps me read your result and does not affect your score.',
    question: 'Which of these sounds most like you right now?',
    options: [
      { value: 'unstarted', label: 'We know we should be doing something with AI, we just do not know what.' },
      { value: 'stalled', label: 'We have tried a few AI tools. Nothing really stuck.' },
      { value: 'scattered', label: 'A few people use AI daily, but everyone is doing their own thing.' },
      { value: 'building', label: 'We have automated real work and we want to go further.' },
    ],
  },
  {
    id: 'headcount',
    type: 'number',
    category: null,
    helper: 'Include everyone who does work for you, part-timers and regular contractors included.',
    question: 'How many people work in your business?',
    min: 1,
    max: 500,
    suffix: 'people',
  },
  {
    id: 'model',
    type: 'multi',
    category: null,
    helper: 'Custom work needs more documentation than repeatable work. This helps me read your result and does not affect your score.',
    question: 'How does your business actually make its money?',
    options: [
      { value: 'custom', label: 'Custom or project work for clients' },
      { value: 'productized', label: 'Packaged or productized services' },
      { value: 'retainer', label: 'Recurring services or retainers' },
      { value: 'physical', label: 'Physical products' },
      { value: 'digital', label: 'Digital products, software, or courses' },
    ],
  },

  // ---------- Process Clarity ----------
  {
    id: 'newHire',
    type: 'single',
    category: 'process',
    question:
      'Could a competent new hire run your single most important process from written instructions alone, without asking anyone a question?',
    options: [
      { value: 'yes', label: 'Yes. The instructions exist and they would be fine.', points: 3 },
      { value: 'mostly', label: 'Mostly, but they would need to ask about the edge cases.', points: 2 },
      { value: 'notes', label: 'There are some notes, but they would be asking constantly.', points: 1 },
      { value: 'none', label: 'Nothing is written down. They would shadow someone.', points: 0 },
    ],
  },
  {
    id: 'docAge',
    type: 'single',
    category: 'process',
    question: 'When did anyone last update a written process, checklist, or guideline?',
    options: [
      { value: 'month', label: 'Within the last month', points: 3 },
      { value: 'sixmonths', label: 'Within the last 6 months', points: 2 },
      { value: 'year', label: 'Over a year ago', points: 1 },
      { value: 'never', label: 'Never, or I genuinely do not know', points: 0 },
    ],
  },
  {
    id: 'knowWhen',
    type: 'single',
    category: 'process',
    question: 'How does your team know WHEN routine work needs doing?',
    options: [
      { value: 'system', label: 'The system tells them. Work shows up assigned with a due date.', points: 3 },
      { value: 'schedule', label: 'There is a recurring schedule people follow.', points: 2 },
      { value: 'memory', label: 'People mostly remember, and someone chases what slips.', points: 1 },
      { value: 'me', label: 'Someone asks me.', points: 0 },
    ],
  },
  {
    id: 'knowHow',
    type: 'single',
    category: 'process',
    question: 'And how do they know HOW to do it?',
    options: [
      { value: 'written', label: 'Written instructions or checklists they actually follow.', points: 3 },
      { value: 'partial', label: 'Some documentation, plus asking when stuck.', points: 2 },
      { value: 'memory', label: 'They learned it once and they remember.', points: 1 },
      { value: 'ask', label: 'They ask the person who knows.', points: 0 },
    ],
  },
  {
    id: 'firefighting',
    type: 'single',
    category: 'process',
    question:
      'How often does a mistake, a rush job, or an unusual client request blow up your plan for the day?',
    options: [
      { value: 'daily', label: 'Most days', points: 0 },
      { value: 'weekly', label: 'A few times a week', points: 1 },
      { value: 'monthly', label: 'A few times a month', points: 2 },
      { value: 'rarely', label: 'Rarely. We have a way of handling it.', points: 3 },
    ],
  },

  // ---------- Founder Dependency ----------
  {
    id: 'absence',
    type: 'single',
    category: 'founder',
    helper: 'Be honest here. Picture it actually happening.',
    question:
      'If you were unreachable for 4 weeks starting tomorrow, with no warning and no handover, what would happen?',
    options: [
      { value: 'fine', label: 'Most things keep running. A few decisions wait.', points: 3 },
      { value: 'cope', label: 'We would cope, but quality and speed would drop.', points: 2 },
      { value: 'struggle', label: 'We would struggle badly. Some things would simply stop.', points: 1 },
      { value: 'collapse', label: 'It would fall apart.', points: 0 },
    ],
  },
  {
    id: 'founderHours',
    type: 'number',
    category: 'founder',
    helper: 'The admin, approvals, chasing and fixing.',
    question: 'Roughly how many hours a week do you personally spend on work someone else could do?',
    min: 0,
    max: 80,
    suffix: 'hours a week',
    // Bands run best to worst. First match wins.
    bands: [
      { max: 5, points: 3 },
      { max: 12, points: 2 },
      { max: 20, points: 1 },
      { max: Infinity, points: 0 },
    ],
  },
  {
    id: 'decisions',
    type: 'single',
    category: 'founder',
    question: 'In a normal week, how many things sit waiting because they need your specific sign-off?',
    options: [
      { value: 'none', label: 'Almost nothing. The team decides.', points: 3 },
      { value: 'few', label: 'A handful of genuinely big calls.', points: 2 },
      { value: 'lots', label: 'Quite a lot. It is a regular bottleneck.', points: 1 },
      { value: 'all', label: 'Nearly everything routes through me.', points: 0 },
    ],
  },
  {
    id: 'onlyYou',
    type: 'multi',
    category: 'founder',
    question: 'Which of these can genuinely only be done by you?',
    scorer: 'onlyYou',
    options: [
      { value: 'pricing', label: 'Pricing and quoting' },
      { value: 'signoff', label: 'Final sign-off on client work' },
      { value: 'escalation', label: 'Anything a client escalates' },
      { value: 'hiring', label: 'Hiring and firing' },
      { value: 'money', label: 'Money and vendor decisions' },
      { value: 'fixing', label: 'Fixing things when they break' },
      { value: 'most', label: 'Honestly, most of it' },
      { value: 'none', label: 'None of these. The team has it covered.', exclusive: true },
    ],
  },

  // ---------- System Readiness ----------
  {
    id: 'toolCount',
    type: 'single',
    category: 'systems',
    question: 'How many separate tools or apps does your team touch in a normal week?',
    options: [
      { value: 'few', label: '1 to 3', points: 3 },
      { value: 'some', label: '4 to 7', points: 2 },
      { value: 'many', label: '8 to 12', points: 1 },
      { value: 'sprawl', label: 'More than 12, or I have lost count', points: 0 },
    ],
  },
  {
    id: 'dataPull',
    type: 'single',
    category: 'systems',
    question:
      'If you needed a list today of every customer, what they bought, and when, how long would that take?',
    options: [
      { value: 'minutes', label: 'Minutes. It is one export.', points: 3 },
      { value: 'hours', label: 'An hour or two of pulling it together.', points: 2 },
      { value: 'day', label: 'A day, and someone would piece it together by hand.', points: 1 },
      { value: 'cannot', label: 'We could not produce that reliably.', points: 0 },
    ],
  },
  {
    id: 'stack',
    type: 'multi',
    category: 'systems',
    helper: 'I check whether each one can be connected to anything else. Some cannot.',
    question: 'Which of these does your team run?',
    scorer: 'stack',
    options: [
      { value: 'airtable', label: 'Airtable', open: true },
      { value: 'asana', label: 'Asana', open: true },
      { value: 'clickup', label: 'ClickUp', open: true },
      { value: 'google', label: 'Google Workspace', open: true },
      { value: 'hubspot', label: 'HubSpot', open: true },
      { value: 'ms365', label: 'Microsoft 365', open: true },
      { value: 'monday', label: 'Monday', open: true },
      { value: 'notion', label: 'Notion', open: true },
      { value: 'pipedrive', label: 'Pipedrive', open: true },
      { value: 'accounting', label: 'QuickBooks or Xero', open: true },
      { value: 'salesforce', label: 'Salesforce', open: true },
      { value: 'slack', label: 'Slack', open: true },
      { value: 'trello', label: 'Trello', open: true },
      { value: 'industry', label: 'Industry-specific software', open: false },
      { value: 'sheets', label: 'Mostly spreadsheets and email', open: false, caps: 1 },
      { value: 'other', label: 'Something else', open: false },
    ],
  },
  {
    id: 'integration',
    type: 'single',
    category: 'systems',
    question: 'Do your main tools pass information to each other, or does a person move it across by hand?',
    options: [
      { value: 'connected', label: 'They are connected. Information moves on its own.', points: 3 },
      { value: 'partial', label: 'A few are connected. The rest is manual.', points: 2 },
      { value: 'manual', label: 'A person copies and pastes between them.', points: 1 },
      { value: 'unknown', label: 'I am not sure how the information moves.', points: 0 },
    ],
  },

  // ---------- AI Practice ----------
  {
    id: 'aiUse',
    type: 'single',
    category: 'practice',
    question: 'Which best describes how AI actually gets used in your business today?',
    options: [
      { value: 'embedded', label: 'It is built into workflows the team relies on.', points: 3 },
      { value: 'daily', label: 'A few people use it daily for real work.', points: 2 },
      { value: 'occasional', label: 'People experiment occasionally. Nothing consistent.', points: 1 },
      { value: 'none', label: 'Barely at all, or only me.', points: 0 },
    ],
  },
  {
    id: 'aiRules',
    type: 'single',
    category: 'practice',
    helper: 'I mean anything written down. A page in Notion counts.',
    question: 'Has anyone written down what AI can and cannot be used for here?',
    options: [
      { value: 'yes', label: 'Yes, and the team knows it.', points: 3 },
      { value: 'stale', label: 'Something exists, but nobody reads it.', points: 1 },
      { value: 'no', label: 'No, we have never discussed it.', points: 0 },
    ],
  },
  {
    id: 'aiSpread',
    type: 'single',
    category: 'practice',
    question: 'When someone finds an AI workflow that genuinely works, what happens next?',
    options: [
      { value: 'documented', label: 'It gets written up and rolled out to whoever else needs it.', points: 3 },
      { value: 'mentioned', label: 'It gets mentioned, and some people pick it up.', points: 2 },
      { value: 'siloed', label: 'It stays with that person.', points: 1 },
      { value: 'invisible', label: 'I would not know it had happened.', points: 0 },
    ],
  },
  {
    id: 'blockers',
    type: 'multi',
    category: 'practice',
    helper: 'Pick as many as are true. This shapes the recommendation more than almost anything else.',
    question: 'What has stopped AI from sticking so far?',
    scorer: 'blockers',
    options: [
      { value: 'time', label: 'No time to figure it out' },
      { value: 'start', label: 'We did not know where to start' },
      { value: 'adoption', label: 'The team did not adopt it' },
      { value: 'quality', label: 'It produced unreliable output' },
      { value: 'privacy', label: 'Worried about client data' },
      { value: 'roi', label: 'Could not tell if it was actually saving anything' },
      { value: 'nothing', label: 'Nothing has stopped us', exclusive: true },
    ],
  },

  // ---------- Close ----------
  {
    id: 'rate',
    type: 'single',
    category: null,
    helper:
      'A rough guess is fine. Salary plus tax and overhead, divided by hours. I use this to put a number on what the gaps are costing you.',
    question: 'What does an average team member cost per hour, fully loaded?',
    options: [
      { value: 'u30', label: 'Under $30', rate: 25 },
      { value: '30-50', label: '$30 to $50', rate: 40 },
      { value: '50-75', label: '$50 to $75', rate: 62 },
      { value: '75-100', label: '$75 to $100', rate: 87 },
      { value: 'o100', label: 'Over $100', rate: 115 },
      { value: 'unknown', label: 'No idea, use a sensible average', rate: 50, assumed: true },
    ],
  },
  {
    id: 'preference',
    type: 'single',
    category: null,
    helper: 'This does not affect your score. It decides which of two reports you get.',
    question: 'If you decided to fix this, how would you rather do it?',
    options: [
      { value: 'diy', label: 'Give me the roadmap and I will run it myself' },
      { value: 'dfy', label: 'I want someone to do the heavy lifting with us' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

const MULTI_SCORERS = {
  /** Fewer things only the founder can do is better. */
  onlyYou(selected) {
    if (selected.includes('most')) return 0;
    if (selected.includes('none') || selected.length === 0) return 3;
    if (selected.length <= 1) return 3;
    if (selected.length <= 3) return 2;
    if (selected.length <= 5) return 1;
    return 0;
  },

  /**
   * Tool openness. What matters is not how good the tools are, it is what
   * share of the stack has an API or an export path worth connecting to.
   * Running on spreadsheets and email caps the score regardless of what else
   * is ticked, because that is where the real data usually lives.
   */
  stack(selected, question) {
    if (selected.length === 0) return 0;
    const byValue = Object.fromEntries(question.options.map((o) => [o.value, o]));
    const open = selected.filter((v) => byValue[v]?.open).length;
    const ratio = open / selected.length;
    let points = ratio >= 0.8 ? 3 : ratio >= 0.5 ? 2 : ratio >= 0.25 ? 1 : 0;
    const cap = Math.min(
      ...selected.map((v) => byValue[v]?.caps ?? Infinity),
    );
    return Math.min(points, cap);
  },

  /** Fewer live blockers is better. */
  blockers(selected) {
    if (selected.includes('nothing') || selected.length === 0) return 3;
    if (selected.length === 1) return 2;
    if (selected.length === 2) return 1;
    return 0;
  },
};

export const ARCHETYPES = [
  {
    max: 35,
    key: 'firefighter',
    name: 'The Firefighter',
    line: 'The business runs on you and on memory.',
    body:
      'Almost nothing is written down, so almost nothing can be handed over, to a person or to a machine. It is the normal result of growing fast enough that documenting never made it to the top of the list. The good news is that this is the cheapest position to fix from, because the first few processes you capture will each buy back real hours.',
    move:
      'Pick the one process that interrupts you most often and write down what goes in, what decisions get made, and what comes out. One process, one page.',
  },
  {
    max: 60,
    key: 'experimenter',
    name: 'The Experimenter',
    line: 'You have tried the tools. The tools did not stick.',
    body:
      'This is a frustrating place to land, because the effort has already been spent. AI landed on processes that were never defined, so every use was a one-off that needed a person to set it up and check it afterward. Nothing compounded, so it stopped.',
    move:
      'Before you try anything new, take the one AI use that worked, write down exactly how it works, and get a second person using it the same way. Repeatability first, then expansion.',
  },
  {
    max: 80,
    key: 'operator',
    name: 'The Operator',
    line: 'The systems are real. The leverage has not been taken yet.',
    body:
      'Work is visible, the important processes exist somewhere in writing, and the team does not need you for everything. What you have now is a foundation that AI can multiply. The next step is to ask which of these documented processes should stop being done by a person at all.',
    move:
      'Take your 3 most repeated documented processes and work out which steps need judgment and which only move or reformat information. Those second steps are where the first real automation goes.',
  },
  {
    max: 100,
    key: 'multiplier',
    name: 'The Multiplier',
    line: 'Your systems are documented and connected, and the gains are starting to compound.',
    body:
      'You did this in the right order. Processes were written before they were automated, tools were chosen for whether they connect, and improvements get shared across the team. From here the returns compound, and the risk changes shape. What slows businesses at this stage is governance and drift: documentation going stale and parallel versions of the same workflow appearing in different corners.',
    move:
      'Audit for drift. Find where the written process and the actual process have separated, and decide which one is right before automating either.',
  },
];

export function archetypeFor(percent) {
  return ARCHETYPES.find((a) => percent <= a.max) ?? ARCHETYPES[ARCHETYPES.length - 1];
}

/**
 * Hard caps.
 *
 * Averaging across seventeen questions dilutes the answers that actually
 * disqualify a business. Someone can score 88% and still say the company would
 * fall apart if they vanished, because that single answer is worth three points
 * out of fifty-one. Without a cap the result reads "Multiplier" next to a
 * six-figure cost estimate, which is the flattery failure that makes these
 * assessments useless.
 *
 * Kept deliberately short. Each entry has to be something that is disqualifying
 * on its own, no matter how good everything else is. Adding more turns the
 * score into a lookup table.
 */
const CAPS = [
  {
    test: (a) => a.absence === 'collapse',
    maxKey: 'experimenter',
    reason:
      'you said the business would fall apart if you were unreachable, and nothing else can outweigh that',
  },
  {
    test: (a) => a.newHire === 'none' && a.docAge === 'never',
    maxKey: 'experimenter',
    reason:
      'nothing is written down and nothing has ever been updated, so there is no system for AI to multiply',
  },
];

/** Category band words used on the result cards. */
export function bandFor(percent) {
  if (percent >= 80) return 'Strong';
  if (percent >= 60) return 'Workable';
  if (percent >= 35) return 'Fragile';
  return 'At risk';
}

/**
 * Score a full answer set.
 * Returns per-category percentages, an overall percentage, and the archetype.
 */
export function score(answers) {
  const totals = {};
  for (const key of Object.keys(CATEGORIES)) totals[key] = { earned: 0, possible: 0 };

  for (const q of QUESTIONS) {
    if (!q.category) continue;
    const bucket = totals[q.category];
    bucket.possible += 3;

    const a = answers[q.id];
    if (a === undefined || a === null || a === '') continue;

    if (q.type === 'single') {
      const opt = q.options.find((o) => o.value === a);
      bucket.earned += opt?.points ?? 0;
    } else if (q.type === 'multi') {
      const fn = MULTI_SCORERS[q.scorer];
      bucket.earned += fn ? fn(Array.isArray(a) ? a : [], q) : 0;
    } else if (q.type === 'number') {
      const n = Number(a);
      const band = q.bands?.find((b) => n <= b.max);
      bucket.earned += band?.points ?? 0;
    }
  }

  const categories = Object.keys(CATEGORIES).map((key) => {
    const { earned, possible } = totals[key];
    const percent = possible ? Math.round((earned / possible) * 100) : 0;
    return { ...CATEGORIES[key], earned, possible, percent, band: bandFor(percent) };
  });

  const earned = categories.reduce((s, c) => s + c.earned, 0);
  const possible = categories.reduce((s, c) => s + c.possible, 0);
  const rawPercent = possible ? Math.round((earned / possible) * 100) : 0;

  // Apply caps. The displayed percentage is clamped into the capped band as
  // well, so the number and the label never contradict each other on screen.
  let archetype = archetypeFor(rawPercent);
  let percent = rawPercent;
  let cappedBy = null;
  for (const cap of CAPS) {
    if (!cap.test(answers)) continue;
    const limit = ARCHETYPES.findIndex((a) => a.key === cap.maxKey);
    const current = ARCHETYPES.findIndex((a) => a.key === archetype.key);
    if (limit >= 0 && current > limit) {
      archetype = ARCHETYPES[limit];
      percent = Math.min(percent, ARCHETYPES[limit].max);
      cappedBy = cap.reason;
    }
  }

  // The weakest category drives the recommendation. Ties break in declaration
  // order, which puts Process Clarity first, and that is the right default
  // because nothing else can be fixed before it.
  const weakest = categories.reduce((lo, c) => (c.percent < lo.percent ? c : lo), categories[0]);

  return { categories, earned, possible, percent, rawPercent, cappedBy, archetype, weakest };
}

/* ------------------------------------------------------------------ */
/* Cost model                                                          */
/* ------------------------------------------------------------------ */

/** Working weeks per year after holiday and slack. Deliberately conservative. */
const WORKING_WEEKS = 46;

/**
 * Founder opportunity cost. A founder hour is not worth a staff hour, because
 * the alternative use of it is selling or building the business rather than
 * doing the next task in the queue. 2.5x the loaded team rate with a $100
 * floor is a defensible multiplier for this revenue band, and the page states
 * the assumption rather than hiding it.
 */
function founderRateFrom(teamRate) {
  return Math.max(teamRate * 2.5, 100);
}

/** Hours per person per week lost to rework, by firefighting frequency. */
const REWORK_HOURS = {
  daily: 6,
  weekly: 3.5,
  monthly: 1.5,
  rarely: 0.5,
};

export function estimateCost(answers) {
  const rateOpt = QUESTIONS.find((q) => q.id === 'rate')?.options.find(
    (o) => o.value === answers.rate,
  );
  const teamRate = rateOpt?.rate ?? 50;
  const rateAssumed = Boolean(rateOpt?.assumed) || !rateOpt;

  const headcount = Math.max(1, Number(answers.headcount) || 1);
  const founderHours = Math.max(0, Number(answers.founderHours) || 0);
  const founderRate = founderRateFrom(teamRate);

  const founderCost = founderHours * WORKING_WEEKS * founderRate;

  const reworkHours = REWORK_HOURS[answers.firefighting] ?? 1.5;
  const teamSize = Math.max(0, headcount - 1);
  const reworkCost = reworkHours * teamSize * WORKING_WEEKS * teamRate;

  const total = founderCost + reworkCost;

  // Presented as a range because every input is an estimate. Rounding to the
  // nearest thousand signals the precision honestly.
  const roundTo = (n, step) => Math.round(n / step) * step;
  const low = roundTo(total * 0.8, 1000);
  const high = roundTo(total * 1.2, 1000);

  return {
    founderHours,
    founderRate,
    founderCost: roundTo(founderCost, 1000),
    reworkHours,
    teamSize,
    teamRate,
    rateAssumed,
    reworkCost: roundTo(reworkCost, 1000),
    total: roundTo(total, 1000),
    low,
    high,
    workingWeeks: WORKING_WEEKS,
    hasSignal: founderHours > 0 || teamSize > 0,
  };
}

export function formatMoney(n) {
  return '$' + Math.round(n).toLocaleString('en-US');
}

/**
 * Which audit tier the result routes to.
 *
 * No prices here, deliberately. Pricing is not published on this site, and
 * `NOT_THIS` in src/lib/agentInfo.ts states that to answer engines. The tier
 * carries a name and a shape so a founder knows what they would be buying into,
 * and the number comes up in conversation. If pricing is ever published, it
 * belongs on /ai-readiness-and-ai-audits first and here second, never only here.
 */
export function recommendTier(result, answers) {
  const wantsDone = answers.preference === 'dfy';
  if (!wantsDone) {
    return {
      key: 'tier1',
      name: '80/20 Process Audit',
      shape: 'A single working session',
      pitch:
        'Two to three hours with me. Your top three processes captured as inputs, decision rules, and outputs, plus the five highest-return automation opportunities with the math behind each one. You keep the process sketches whether or not you do anything else.',
      href: '/fix-the-chaos',
    };
  }
  if (result.percent < 45) {
    return {
      key: 'tier2',
      name: 'Quick Assessment',
      shape: 'A 1-week engagement',
      pitch:
        'One week. Interviews with you and one key person, five to six core processes documented properly, and a ranked table of what each gap costs per year with the founder-dependency line called out separately.',
      href: '/fix-the-chaos',
    };
  }
  return {
    key: 'tier3',
    name: 'Full AI Operations Audit',
    shape: 'A 2-week engagement',
    pitch:
      'Two weeks, following the customer journey from first inquiry through to billing. Full process library, evidence-linked findings, every opportunity priced in dollars, and a roadmap that names the first two builds. One working automation ships live during the audit itself.',
    href: '/fix-the-chaos',
  };
}
