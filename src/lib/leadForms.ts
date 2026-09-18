/**
 * Formbricks field definitions, one place.
 *
 * Two pages share the AI Audit survey, so its field list lives here rather than
 * being copy-pasted into both. A copy-pasted questionId that drifts is a silent
 * lead leak: Formbricks returns 200 for an id it does not recognise.
 *
 * Every id below is an ELEMENT id read from the survey's live payload
 * (`blocks[].elements[]`). Block ids look identical and silently swallow
 * values on a 200, so never take an id from `blocks[].id`.
 *
 * contactInfo is read POSITIONALLY as:
 *   [firstName, lastName, email, phone, company]
 * A slot the survey hides still has to be present or every later value shifts
 * one place left. Those slots use type 'hidden': they keep the position without
 * showing a field.
 *
 * A full map of every survey on the site, including the two that could not be
 * read live, was produced on 2026-09-18 and kept outside this repo.
 */
import type { LeadFormField } from '../components/LeadForm.astro';

/** https://bricks.davidjforer.com/s/cmb8iecta0047oj01702lyzkz */
export const AI_AUDIT_SURVEY = 'cmb8iecta0047oj01702lyzkz';

/** Survey shows firstName, lastName, email and company. Phone is hidden. */
export const AI_AUDIT_FIELDS: LeadFormField[] = [
  {
    name: 'contact',
    questionId: 'phsg3sgmv813dnpwny7j3mpw',
    label: 'Who you are',
    type: 'contactInfo',
    required: true,
    parts: [
      { name: 'firstName', label: 'First name', type: 'text', required: true },
      { name: 'lastName', label: 'Last name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone', type: 'hidden' },
      { name: 'company', label: 'Company', type: 'text', required: true },
    ],
  },
  {
    name: 'challenges',
    questionId: 'm2124401784t9ps8afi88lzk',
    label: 'What are your biggest operational challenges?',
    type: 'textarea',
    required: true,
    rows: 3,
  },
];

/**
 * https://bricks.davidjforer.com/s/cmb4zuznm0015oj0155cmsz7x
 *
 * Originally the Hero modal's capture survey. Reused for the homepage giveaway
 * so David does not have to build a second survey for two fields. Responses
 * from both land in the same place, and `meta.url` tells them apart: the modal
 * posts from wherever it was opened, the giveaway always posts from "/".
 *
 * Both questions are plain openText rather than contactInfo, so there is no
 * positional array to get wrong here.
 */
export const GIVEAWAY_SURVEY = 'cmb4zuznm0015oj0155cmsz7x';

export const GIVEAWAY_FIELDS: LeadFormField[] = [
  {
    name: 'name',
    questionId: 'fg3f7a167nnolx34i3cbxaxi',
    label: 'Your name',
    type: 'text',
    required: true,
  },
  {
    name: 'email',
    questionId: 'x8h15np6kokmf9g3idoqdw4i',
    label: 'Where should I send it?',
    type: 'email',
    required: true,
  },
];

/** https://bricks.davidjforer.com/s/cmb8jgo1v004hoj01a5mb7gm9 */
export const SEO_SURVEY = 'cmb8jgo1v004hoj01a5mb7gm9';

/** Survey shows firstName, email and company. lastName and phone are hidden. */
export const SEO_FIELDS: LeadFormField[] = [
  {
    name: 'contact',
    questionId: 'vhhf1n9n9zo34ux1s06dz966',
    label: 'Who you are',
    type: 'contactInfo',
    required: true,
    parts: [
      { name: 'firstName', label: 'Name', type: 'text', required: true },
      { name: 'lastName', label: 'Last name', type: 'hidden' },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'phone', label: 'Phone', type: 'hidden' },
      { name: 'company', label: 'Company', type: 'text', required: true },
    ],
  },
  {
    name: 'url',
    questionId: 'cki40qdnx5ycajuiecxy6krl',
    label: 'What is your URL?',
    type: 'url',
    required: true,
  },
  {
    name: 'goals',
    questionId: 'g9aq1t2kljbc9m25gj6u9qfp',
    label: 'What are your SEO goals?',
    type: 'textarea',
    required: true,
    rows: 3,
  },
];
