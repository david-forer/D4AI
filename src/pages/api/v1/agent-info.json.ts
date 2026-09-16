// Machine-readable description of the practice, for AI crawlers and answer
// engines. Prerendered to dist/api/v1/agent-info.json at build time. server.js
// serves the same bytes at the extensionless /api/v1/agent-info.
//
// The content lives in src/lib/agentInfo.ts so that this endpoint and the
// site-wide JSON-LD in Layout.astro cannot drift apart.

import type { APIRoute } from 'astro';
import { agentInfoPayload } from '../../../lib/agentInfo';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(agentInfoPayload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
