// Small helpers for page-level JSON-LD. Identity nodes live in agentInfo.ts.
import { SITE } from './agentInfo';

// Items are [name, path]. Path '/' is the home page. The last item is the
// current page.
export function breadcrumbJson(items: [string, string][]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: path === '/' ? SITE : `${SITE}${path}`,
    })),
  });
}
