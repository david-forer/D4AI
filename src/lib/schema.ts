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

// Service with one or more Offers. offers is [name, minPrice, maxPrice]. Prices
// are USD and must match the visible page copy.
export function serviceJson(
  name: string,
  path: string,
  description: string,
  offers: [string, number, number][] = [],
): string {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    url: `${SITE}${path}`,
    description,
    provider: { '@type': 'Person', name: 'David J. Forer', url: SITE },
    areaServed: { '@type': 'Country', name: 'United States' },
  };
  if (offers.length) {
    node.offers = offers.map(([oname, min, max]) => ({
      '@type': 'Offer',
      name: oname,
      url: `${SITE}${path}`,
      priceCurrency: 'USD',
      ...(min === max
        ? { price: min }
        : { priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', minPrice: min, maxPrice: max } }),
      availability: 'https://schema.org/InStock',
    }));
  }
  return JSON.stringify(node);
}

