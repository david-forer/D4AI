// The blog hub taxonomy. THIS FILE IS THE SOURCE OF TRUTH.
//
// Every blog post carries exactly one tag, and that tag must be one of the
// slugs below. Nothing else is a valid tag. The rule is enforced by the schema
// in src/content/config.ts, so a post with a bad tag, no tag, or two tags
// fails the build rather than publishing quietly.
//
// Everything downstream is generated from this file:
//   - src/pages/blog/category/[category].astro  builds one hub page per entry
//   - src/pages/blog/index.astro                builds the category nav
//   - src/content/config.ts                     builds the tag enum
//   - scripts/generate-nesting.mjs              rewrites .vscode/settings.json
//
// To add a hub: add an entry here, then run `npm run nest`. Do not hand-edit
// .vscode/settings.json, it is generated and your changes will be overwritten.
//
// Why one tag and not several: descriptive tags render nowhere on this site,
// so a second tag adds no page, no link and no signal. It only adds a judgment
// call, and judgment calls are what produced 105 distinct tags of which 98 were
// invisible. A wrong hub costs almost nothing because the post is still two
// clicks from the homepage. A missing hub costs a page Google will not index.

export interface Hub {
  /** URL slug. Also the literal tag value used in post frontmatter. */
  slug: string;
  /** Label for the post byline, card badges and the hub page title. Keeps the AI prefix. */
  name: string;
  /** Short label for the blog nav chip row only. Drops the AI prefix because the whole blog is about AI. */
  navLabel: string;
  h1: string;
  /** Meta description for the hub page. */
  description: string;
  /** Hub page intro copy. */
  body: string;
  serviceLink: string;
  serviceLabel: string;
  /**
   * Pillar posts that anchor this hub. Used by scripts/generate-nesting.mjs to
   * decide which file the cluster nests under in the VSCode explorer. The first
   * entry is the primary pillar.
   */
  pillars: string[];
  /** One line telling a writer when to choose this hub. Keep it decisive. */
  chooseWhen: string;
}

export const HUBS: Hub[] = [
  {
    slug: 'ai-readiness',
    name: 'AI Readiness',
    navLabel: 'Readiness',
    h1: 'AI Readiness and Audit Resources',
    description: 'Everything you need to assess, prepare for, and act on an AI readiness audit, from self-assessment to acting on what it finds.',
    body: `Before investing in AI tools, automation systems, or training programs, it is worth understanding where your business actually stands. AI readiness is not primarily a technology question. It is a question of whether your processes, data quality, and team are in a position where AI can make a genuine difference.

This category covers the full arc of AI readiness, from initial self-assessment through professional audit and into implementation planning. Articles here help you understand what readiness actually means in a small business context, what gaps most commonly hold businesses back from getting real value from AI, and how to move from assessment to action without getting stuck in analysis.

Topics include what to expect from a professional AI readiness audit, how to prepare your operations before bringing in an outside assessment, common readiness gaps in founder-led teams, the difference between AI readiness and AI maturity, and how to act on your findings once an audit is complete.

An audit shows you where the exposure is. The rules that come after it (use policy, risk assessment, data security) have their own section under AI Governance.`,
    serviceLink: '/ai-readiness-and-ai-audits',
    serviceLabel: 'View AI Readiness Services',
    pillars: ['ai-readiness-framework-for-service-businesses.md'],
    chooseWhen: 'Whether they are ready, audits, assessments, acting on findings',
  },
  {
    slug: 'ai-governance',
    name: 'AI Governance',
    navLabel: 'Governance',
    h1: 'AI Governance for Small Businesses',
    description: 'How to set AI rules, data limits and review steps in a small business without a compliance team, plus what to do about the AI your staff already use.',
    body: `Most small businesses start using AI before anyone writes down a single rule for it. A bookkeeper pastes a client's payroll export into a free chatbot to reformat the columns. A project manager connects an AI note-taker to every client call because it came bundled with the video tool. Nobody decided either of those things.

This category covers the governance work that makes AI safe to use at that size: which data can go into which tools, which tools are approved, who checks AI output before a client sees it, and what happens when something goes wrong. Each piece is written for a founder with no compliance officer, no IT department, and maybe one afternoon a month to spend on this.

Topics include writing an acceptable use policy people will read, running a risk assessment on the tools you already pay for, handling client data under contracts you've already signed, finding the shadow AI your team uses without telling you, vendor and model risk, and the points where a human reviewer has to stay in the loop.

Clear rules make a team faster with AI. Once people know what they can paste where, they stop guessing (and stop quietly avoiding the tools). For most firms under 20 people, the whole framework fits on 2 pages.`,
    serviceLink: '/ai-readiness-and-ai-audits',
    serviceLabel: 'Start With an AI Readiness Audit',
    pillars: ['ai-governance-for-small-businesses.md'],
    chooseWhen: 'Rules, risk, policy, data security, shadow AI, human review',
  },
  {
    slug: 'ai-operations',
    name: 'AI Operations',
    navLabel: 'Operations',
    h1: 'AI Operations for Small Businesses',
    description: 'Practical guides on building AI-powered operational systems for small businesses and founder-led teams.',
    body: `Most small business owners reach a point where the business is technically working but feels impossible to manage. Revenue is growing, but so is the chaos. Decisions pile up, manual tasks multiply, and the founder ends up becoming the bottleneck in their own company.

This category covers AI-powered operational systems built specifically for small businesses and founder-led teams. The articles here go beyond surface-level tool recommendations. They address the deeper question of how to design a business that runs on clear processes rather than constant intervention.

Topics include eliminating operational bottlenecks, replacing manual workflows with AI-assisted systems, building dashboards and visibility tools that give founders actual oversight, and understanding when AI genuinely helps versus when it adds complexity. Each article is written for operators who want practical frameworks they can apply, not theoretical concepts that require a dedicated ops team to execute.

If you are trying to scale without adding headcount, or you are drowning in the day-to-day management of your own business, this is where to start.`,
    serviceLink: '/operational-buildout',
    serviceLabel: 'View AI Operations Services',
    pillars: ['ai-operations-for-small-businesses.md'],
    chooseWhen: 'How the business runs day to day, bottlenecks, founder capacity',
  },
  {
    slug: 'ai-training',
    name: 'AI Training',
    navLabel: 'Training',
    h1: 'AI Training and Team Adoption for Small Business',
    description: 'Resources for training non-technical teams to use AI effectively and consistently.',
    body: `Buying AI tools is straightforward. Getting a team to use them well is a different problem entirely. Most small businesses that struggle with AI adoption do not have a technology problem. They have a training and change management problem.

This category covers AI training, team adoption, and skills development for small business environments. The articles here are built for founders and managers who need practical frameworks for bringing their teams along, not enterprise-scale programs that require a dedicated HR department to run.

Topics include AI skills gap analysis, designing pilot programs that build team confidence, measuring the performance impact of AI training over time, navigating resistance to new tools, and creating a workplace culture where AI gets used consistently rather than occasionally. You will also find guidance on budgeting for AI training realistically and identifying internal champions who help adoption spread naturally.

The goal is a team that uses AI as a standard part of how they work, not a handful of power users carrying everyone else.`,
    serviceLink: '/ai-training-for-small-business-teams',
    serviceLabel: 'View AI Training Services',
    pillars: ['ai-training-team-adoption-small-business.md'],
    chooseWhen: 'Getting people to use it, adoption, upskilling, prompting skill',
  },
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    navLabel: 'Tools',
    h1: 'Choosing and Running an AI Tech Stack',
    description: 'How to choose, compare, buy, replace and retire AI tools without ending up with twelve subscriptions and no system.',
    body: `Most small businesses do not have a tool shortage. They have eleven subscriptions, four of them forgotten, two of them doing the same job, and no clear answer to what would break if any of them were cancelled tomorrow. The problem is rarely finding a tool. It is deciding between them and then living with the decision.

This category covers tool selection, stack design, and the decisions that surround them. The articles here treat buying software as an operational choice rather than a shopping exercise, which means they spend more time on evaluation criteria, switching costs, and what happens in month six than on feature comparisons that go stale in a quarter.

Topics include how to evaluate an AI tool before committing, free versus paid tiers and where the line actually sits, off-the-shelf products versus custom builds, auditing a stack you inherited, and switching tools without losing the work already built on the old one. Questions about AI agents in particular have their own section under AI Agents.

The aim is a small stack you understand completely, rather than a large one you are quietly afraid to change.`,
    serviceLink: '/services',
    serviceLabel: 'View Services',
    pillars: ['ai-tools-tech-stack-small-business.md'],
    chooseWhen: 'Choosing, comparing, buying, switching tools',
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents',
    navLabel: 'Agents',
    h1: 'AI Agents for Small Businesses',
    description: 'What AI agents are, how they differ from automations and chatbots, where they pay off in a small business, and how to deploy one without losing control.',
    body: `Every software vendor now calls its product an agent. The chatbot on a scheduling app, the rules engine inside a CRM, the email sequencer a sales rep set up three years ago. Founders hear the word every week and still can't say what one would do in a 12-person firm.

An AI agent takes a goal, works out the steps, and carries them out across more than one tool. That makes it useful for high-volume work that changes from case to case, like triaging maintenance requests for a property management company or researching a lead before a discovery call. It also carries more risk than an automation that does the same thing every time.

This category covers the practical questions: when an agent is the right choice and when a plain automation will do, specific use cases in support and lead qualification, building versus buying, the guardrails that stop an agent from emailing a client something nobody approved, and how to test one on real past cases before it touches live work.

The order that tends to work is documented processes first, automation second, and agents last, one narrow job at a time. Most of the articles here are written with that order in mind.`,
    serviceLink: '/ai-automation-accelerator',
    serviceLabel: 'View Automation Services',
    pillars: ['ai-agents-for-small-businesses.md'],
    chooseWhen: 'Agents specifically: what they are, use cases, guardrails, build or buy',
  },
  {
    slug: 'automation',
    name: 'AI Automation',
    navLabel: 'Automation',
    h1: 'AI Automation Strategy and Architecture',
    description: 'Strategic and technical guides on building automation systems that actually work.',
    body: `Automation is not a tool purchase. It is a design decision that reflects how clearly you understand your own business processes. Implemented well, it removes friction, reduces error, and creates space for higher-value work. Implemented poorly, it automates problems rather than solving them.

This category covers AI automation strategy, architecture, and execution for small and mid-size businesses. Articles here address the full picture, from identifying which processes are ready to automate, to building an automation architecture that scales, to calculating the genuine return on automation investment before committing resources.

Topics include process mapping for automation readiness, automation ROI analysis, building automation systems without a dedicated technical team, understanding the difference between AI agents and rule-based automations, and the less-discussed question of when not to automate.

Whether you are running your first business automation or rethinking a system that is not delivering results, these guides offer a grounded, strategic starting point.`,
    serviceLink: '/ai-automation-accelerator',
    serviceLabel: 'View Automation Services',
    pillars: ['automation-architecture-for-small-teams.md'],
    chooseWhen: 'Building the automation itself, architecture, what to automate',
  },
  {
    slug: 'workflow-systems',
    name: 'Workflow Systems',
    navLabel: 'Workflows',
    h1: 'Workflow and Intake Systems for Growing Businesses',
    description: 'Deep dives into workflow design, intake systems, SOPs, and operational frameworks that scale.',
    body: `Work breaks in predictable ways. A client inquiry falls through the cracks because there is no intake process. A recurring task gets done differently each time because no one documented how it should work. A new team member makes the same mistakes because the onboarding process lives in someone's head.

These articles focus on the architecture of how work moves through a business: intake systems, workflow design, standard operating procedures, and the operational frameworks that prevent good work from going sideways. The focus is practical and structural.

You will find guides on building intake systems for growing teams, designing workflows that adapt when conditions change, reducing workflow debt before it compounds, and applying systems thinking to operational problems that most founders try to solve with more software.

Workflow design is one of the highest-leverage investments a growing business can make. These articles give you a structured way to approach it.`,
    serviceLink: '/operational-buildout',
    serviceLabel: 'View Operational Buildout Services',
    pillars: ['Intake-and-Workflow-Systems-for-Growing-Firms.md'],
    chooseWhen: 'Intake, SOPs, how work moves, process design',
  },
  {
    slug: 'hiring-an-ai-consultant',
    name: 'Hiring a Consultant',
    navLabel: 'Hiring a Consultant',
    h1: 'Working With an AI Consultant',
    description: 'What an AI consultant actually does, what an engagement costs, how to choose one, and what the first 90 days look like.',
    body: `Hiring an AI consultant is a decision most founders make exactly once, with no reference points and no way to tell a good engagement from an expensive one until it is over. The market does not help. There is no standard credential, the job title means six different things, and the failure mode is not a dramatic blow-up. It is a slow, costly disappointment that ends with systems nobody owns.

This category is written for the buying decision itself. It covers what the work actually involves, what it should cost, what to ask before signing, and what a well-run engagement looks like week by week. It is deliberately honest about when hiring anyone is the wrong move, because a consultant who cannot tell you that is not worth the invoice.

Topics include what an AI consultant does day to day in a small business, questions to ask before hiring one, how to prepare so the engagement starts fast, realistic cost ranges, doing it yourself versus bringing someone in, what to expect in the first 90 days, and what you should own when it ends.

The test of a good engagement is what your team can do without the consultant afterwards. Everything here works backwards from that.`,
    serviceLink: '/custom-consulting',
    serviceLabel: 'View Consulting Services',
    pillars: ['working-with-an-ai-consultant.md'],
    chooseWhen: 'The buying decision and the engagement itself',
  },
  {
    slug: 'ai-strategy',
    name: 'AI Strategy',
    navLabel: 'Strategy',
    h1: 'AI Strategy for Small Businesses',
    description: 'How to sequence AI investment, build a roadmap you will actually follow, and measure whether any of it worked.',
    body: `Most small business AI strategy is a list of tools with no order attached. That is not a strategy, it is a wish list, and it fails in a specific way. The team implements whatever is easiest first, the hard problems stay untouched, and twelve months later the business has spent real money without changing how anything runs.

This category covers the sequencing decisions: what to do first, what to deliberately not do this year, how much to spend before you have evidence, and how to tell whether the last decision worked before making the next one. It assumes no technical team and no separate budget line, because that is the situation most firms this size are actually in.

Topics include building an AI roadmap that survives contact with a busy quarter, aligning AI investment to business goals rather than to capability, prioritising between competing opportunities, the strategy mistakes that show up repeatedly in founder-led firms, and measuring results in numbers that mean something to the person paying for it.

A strategy is only real if it tells you what not to do. These articles are written to produce that list as much as the other one.`,
    serviceLink: '/ai-readiness-and-ai-audits',
    serviceLabel: 'Start With an AI Readiness Audit',
    pillars: ['ai-strategy-for-small-businesses.md'],
    chooseWhen: 'Sequencing, roadmap, investment, measurement',
  },
  {
    slug: 'seo',
    name: 'SEO + AI',
    navLabel: 'SEO',
    h1: 'SEO Strategy and AI-Enabled Search',
    description: 'Advanced SEO guides covering topical authority, semantic SEO, and AI search optimization.',
    body: `Search is changing faster than most content strategies can keep up with. Topical authority, semantic relevance, and AI-generated overviews are reshaping how search engines evaluate and surface content. Tactics that worked two or three years ago are producing diminishing returns, and the businesses pulling ahead are building search presence as a compounding system rather than a one-off campaign.

This category covers SEO strategy for small businesses operating in the current search environment. Articles address both the foundational elements that remain constant, including internal linking architecture, schema markup, and content structure, and the emerging priorities around generative engine optimization, AI search, and entity-based relevance signals.

Topics include building topical authority through structured content pillars, optimizing for AI-powered search features such as Google AI Overviews, conducting SEO content audits, writing content briefs that produce consistent quality, and understanding how to build search visibility without an enterprise SEO budget.

The underlying principle across every article here is the same: search visibility compounds when you build it deliberately.`,
    serviceLink: '/seo-accelerator',
    serviceLabel: 'View SEO Services',
    pillars: ['ai-enabled-seo-operations.md'],
    chooseWhen: 'Search, AEO, content operations',
  },
  {
    slug: 'business-functions',
    name: 'AI by Function',
    navLabel: 'Departments',
    h1: 'AI Across Business Functions',
    description: 'Function-by-function guides on deploying AI in sales, marketing, finance, HR, customer support, and operations.',
    body: `AI implementation looks different depending on where in the business you deploy it. The tools and approaches that work for sales prospecting are not the same as what works for financial reporting or HR onboarding. Generic AI advice tends to miss this entirely, which is why so many AI initiatives produce results in one area and almost nothing in another.

This category covers AI deployment across specific business functions, including sales operations, marketing, finance, HR and people management, customer support, project management, business intelligence, and internal communications. Each article focuses on one function and gives you a practical framework for identifying where AI creates real leverage, what to prioritize first, and how to avoid the common mistakes teams make when adding AI to an existing process without thinking it through.

The goal is not to automate everything. It is to find the parts of each function that carry the most operational cost or decision-making burden and apply AI there first.

These articles are written for small business owners and operators who want to move deliberately rather than chase every new tool.`,
    serviceLink: '/operational-buildout',
    serviceLabel: 'View AI Operations Services',
    pillars: ['ai-powered-back-office-design-guide.md'],
    chooseWhen: 'A named department: finance, HR, sales, marketing, support',
  },
];

/** Every valid tag value, in hub order. */
export const HUB_SLUGS = HUBS.map((h) => h.slug) as [string, ...string[]];

export const HUB_BY_SLUG: Record<string, Hub> = Object.fromEntries(
  HUBS.map((h) => [h.slug, h]),
);

// ---------------------------------------------------------------------------
// PILLARS
//
// Hubs and pillars are different things and were briefly conflated. Keeping
// them separate is deliberate:
//
//   hub    = which page a post appears on. 12 of them. Exists for crawl depth,
//            so it is sized for search (6 to 40 posts per hub) and set by the
//            required `tags` field.
//   pillar = which content cluster a post belongs to. 12 of them. Exists for
//            how the work is organised and how the explorer nests, and is set
//            by the optional `pillar` field.
//
// Today every hub has exactly one pillar. ai-governance and ai-agents used to
// share a hub with ai-readiness and ai-tools until they had enough posts, and
// were split out on 2026-09-23. A new pillar too small for its own hub can
// share one the same way. Folding a hub must never collapse a pillar.
//
// A post only needs an explicit `pillar` when it differs from the primary
// pillar of its hub. Today that is no post. Every post infers it, so there is
// nothing extra for a writer to remember.
// ---------------------------------------------------------------------------

export interface Pillar {
  /** Filename minus extension, lowercased. The value used in frontmatter. */
  slug: string;
  /** Actual filename in src/content/blog, original casing. */
  file: string;
  /** Hub this pillar's posts appear under. */
  hub: string;
  /** True when this is the hub's main pillar, so posts default to it. */
  primary: boolean;
}

export const PILLARS: Pillar[] = HUBS.flatMap((h) =>
  h.pillars.map((file, i) => ({
    slug: file.replace(/\.mdx?$/, '').toLowerCase(),
    file,
    hub: h.slug,
    primary: i === 0,
  })),
);

export const PILLAR_SLUGS = PILLARS.map((p) => p.slug) as [string, ...string[]];

export const PILLAR_BY_SLUG: Record<string, Pillar> = Object.fromEntries(
  PILLARS.map((p) => [p.slug, p]),
);

/** The pillar a post belongs to when its frontmatter does not name one. */
export function defaultPillarFor(hub: string): Pillar | undefined {
  return PILLARS.find((p) => p.hub === hub && p.primary);
}
