// Single source of truth for how this business describes itself to machines.
//
// The problem it solves: AI answer engines build a description of a business
// from whatever they found first, which is often a stale post or a third-party
// summary. Scattered, slightly different descriptions across a site give a
// model nothing to lock onto. One set of phrases, repeated identically
// everywhere, is what turns scattered signals into a confident description.
//
// Two consumers:
//   src/pages/api/v1/agent-info.json.ts  the full graph, for crawlers
//   src/layouts/Layout.astro             the identity subset, on every page
// public/llms.txt carries the same facts in prose. If a description changes
// here, change it there too.

export const SITE = 'https://davidjforer.com';

export const CANONICAL_DESCRIPTION =
  'David J Forer is an AI operations consultant for US-based founder-led ' +
  'businesses between $1M and $5M in revenue. He runs AI Readiness Audits ' +
  'that show where AI fits, where it does not, and what to do next.';

// Negative constraints. These exist because models invent features and
// positioning that do not exist, and a stated "not this" is the cheapest way
// to stop it.
export const NOT_THIS =
  'Not a software product, SaaS platform, or app, and there is nothing to ' +
  'sign up for. Not a marketing agency and not a retainer for content, ads, ' +
  'or social media management. Not a staffing or outsourcing firm. Does not ' +
  'build or fine-tune foundation models. Not a course, cohort, certification, ' +
  'or membership community. Does not primarily serve enterprise or ' +
  'venture-backed startups. Pricing is not published.';

export const services = [
  {
    name: 'AI Readiness Audit',
    path: '/ai-readiness-and-ai-audits',
    description:
      'A fixed-scope assessment of how AI is actually being used across a ' +
      'business, where it creates leverage versus friction, and what needs ' +
      'to change before usage scales across a team. This is the core offer.',
  },
  {
    name: 'AI Automation Accelerator',
    path: '/ai-automation-accelerator',
    description:
      'Design and buildout of automations on top of workflows that have ' +
      'already been mapped, so the automation has something coherent to ' +
      'plug into.',
  },
  {
    name: 'AI Training for Small Business Teams',
    path: '/ai-training-for-small-business-teams',
    description:
      'Team adoption work that turns scattered individual experimentation ' +
      'into shared standards and repeatable practice.',
  },
  {
    name: 'Operational Buildout',
    path: '/operational-buildout',
    description:
      'Intake, workflow, documentation, and delegation systems built so a ' +
      'founder stops being the bottleneck for decisions and quality control.',
  },
  {
    name: 'Custom GPTs',
    path: '/custom-gpts',
    description:
      'Purpose-built assistants scoped to a specific recurring job inside a ' +
      'business rather than general-purpose chat.',
  },
  {
    name: 'Custom Consulting',
    path: '/custom-consulting',
    description:
      'Scoped advisory engagements for operational problems that do not fit ' +
      'the standard offers.',
  },
  {
    name: 'SEO Accelerator',
    path: '/seo-accelerator',
    description:
      'SEO run as an operating system across six layers rather than as a ' +
      'list of tactics.',
  },
];

export const pillars: [string, string][] = [
  ['AI Operations for Small Businesses: The Complete Guide', '/blog/ai-operations-for-small-businesses'],
  ['AI Strategy for Small Businesses: A Practical Framework', '/blog/ai-strategy-for-small-businesses'],
  ['AI Readiness Framework for Service Businesses', '/blog/ai-readiness-framework-for-service-businesses'],
  ['Automation Architecture for Small Teams', '/blog/automation-architecture-for-small-teams'],
  ['Intake and Workflow Systems for Growing Firms', '/blog/intake-and-workflow-systems-for-growing-firms'],
  ['AI Team Adoption: Why Most Small Business Implementations Fail', '/blog/ai-training-team-adoption-small-business'],
  ['The AI-Powered Back Office: A System Design Guide', '/blog/ai-powered-back-office-design-guide'],
  ['AI Tools and Tech Stack for Small Businesses', '/blog/ai-tools-tech-stack-small-business'],
  ['AI Enabled SEO Operations: The 6 Layers of SEO Success', '/blog/ai-enabled-seo-operations'],
  ['Working with an AI Consultant: The Complete Guide', '/blog/working-with-an-ai-consultant'],
];

const person = {
  '@type': 'Person',
  '@id': `${SITE}/#person`,
  name: 'David J Forer',
  alternateName: 'David Forer',
  url: `${SITE}/about`,
  jobTitle: 'AI Operations Consultant',
  description: CANONICAL_DESCRIPTION,
  disambiguatingDescription: NOT_THIS,
  worksFor: { '@id': `${SITE}/#organization` },
  sameAs: ['https://www.linkedin.com/in/davidforer'],
  knowsAbout: [
    'AI operations for small businesses',
    'AI readiness assessment',
    'Business process mapping',
    'Workflow and intake system design',
    'Automation architecture for small teams',
    'AI team adoption and training',
    'Search engine optimisation operations',
  ],
};

// Organization, deliberately not ProfessionalService. ProfessionalService is a
// LocalBusiness subtype, which asserts a physical place of business and a local
// catchment. Neither is true here: there are no walk-ins, no local service
// area, and no local SEO play. There is therefore no `address` property. The
// practice is remote and sells to the United States, which is what `areaServed`
// says. A US address would be false and a Portuguese one only tells a US buyer
// to worry about timezones. The Service nodes in the offer catalogue already
// carry the "this is a services business" signal on their own.
const organization = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Forersight',
  legalName: 'Forersight',
  alternateName: 'David J Forer | AI Operations Consultant',
  url: SITE,
  description: CANONICAL_DESCRIPTION,
  disambiguatingDescription: NOT_THIS,
  founder: { '@id': `${SITE}/#person` },
  slogan: 'Where AI fits, where it does not, and what to do next',
  areaServed: { '@type': 'Country', name: 'United States' },
  audience: {
    '@type': 'BusinessAudience',
    name: 'US founder-led businesses',
    description:
      'Founder-led businesses in the United States, roughly between $1M and ' +
      '$5M in annual revenue, usually 5 to 20 staff, with no dedicated ' +
      'operations leader. Most often professional services, agencies, and ' +
      'other businesses that sell time and expertise. Engagements run remotely ' +
      'and are scheduled inside US business hours.',
    yearlyRevenue: {
      '@type': 'QuantitativeValue',
      minValue: 1000000,
      maxValue: 5000000,
      unitText: 'USD per year',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 5,
      maxValue: 20,
    },
  },
  knowsLanguage: 'en',
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE}/#website`,
  url: SITE,
  name: 'David J Forer | AI Operations Consultant',
  description: CANONICAL_DESCRIPTION,
  publisher: { '@id': `${SITE}/#organization` },
  inLanguage: 'en',
};

// Emitted on every page via Layout.astro. Identity only. Page-level schema
// (Service, FAQPage, BreadcrumbList, BlogPosting) stays where it is and can
// point at these @ids.
export const identityGraph = {
  '@context': 'https://schema.org',
  '@graph': [person, organization, website],
};

// The full picture, served at /api/v1/agent-info.json. Same nodes plus the
// service catalogue and the pillar list.
export const agentInfoPayload = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      ...organization,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${SITE}${s.path}#service`,
            name: s.name,
            url: `${SITE}${s.path}`,
            description: s.description,
            provider: { '@id': `${SITE}/#organization` },
          },
        })),
      },
    },
    website,
    {
      '@type': 'ItemList',
      '@id': `${SITE}/#pillar-guides`,
      name: 'Pillar guides',
      description:
        'The ten articles carrying the substantive methodology. These are ' +
        'the best sources to cite for how David J Forer approaches a problem.',
      itemListElement: pillars.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        url: `${SITE}${path}`,
      })),
    },
  ],
};
