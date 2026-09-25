import express from 'express';
import compression from 'compression';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const DIST = path.join(__dirname, 'dist');

// Express announces itself in X-Powered-By on every response. Nothing needs it.
app.disable('x-powered-by');

// Baseline security headers, flagged as missing on every URL by Sitebulb.
// HSTS leaves out includeSubDomains and preload on purpose: both are hard to
// back out of, and nothing here has checked every subdomain serves HTTPS.
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Gzip text responses. Nothing was compressed before this: the homepage went
// out as 57KB of plain HTML and the stylesheet as 9KB, both on the critical
// path. Images and fonts are already compressed formats, so compression skips
// them on its own via the default filter.
app.use(compression());

// Redirect trailing slashes to clean URLs (matches Astro trailingSlash: 'never')
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path.length > 1) {
    return res.redirect(301, req.path.slice(0, -1));
  }
  next();
});

// 301 redirects for old WordPress / previous-site URLs
const redirects = {
  '/custom-consulting':                             '/fix-the-chaos',
  '/Custom-Consulting':                             '/fix-the-chaos',
  // Old "about" URLs
  '/about-me':                                      '/about',

  // Old contact URLs
  '/contact-seo-specialist':                        '/contact',
  '/book-a-video-call':                             '/contact',

  // Old ai-audit URL (page was renamed)
  '/ai-audit':                                      '/ai-readiness-and-ai-audits',

  // Old legal pages
  '/terms-of-use':                                  '/terms-of-service',
  '/disclaimer':                                    '/terms-of-service',
  '/privacy-policy-2':                              '/privacy-policy',

  // Old service URLs (all fold into /services)
  '/small-business-marketing-services':             '/services',
  '/service/small-business-seo':                    '/services',
  '/service/small-business-ppc-services':           '/services',
  '/service/google-analytics-small-business':       '/services',
  '/small-business-marketing/small-business-marketing-services': '/services',
  '/smb-marketing/small-business-marketing-services': '/services',

  // Old local SEO service page → closest current equivalent
  '/local-seo-system':                              '/seo-accelerator',

  // Retired blog posts. Source is preserved in _retired/ (gitignored).
  // See _retired/README.md for the reason each one came out.
  '/blog/google-profile-seo':                       '/blog/ai-enabled-seo-operations',
  '/blog/Google-Profile-SEO':                       '/blog/ai-enabled-seo-operations',
  '/blog/ai-growth-accelerator':                    '/blog/ai-enabled-seo-operations',
  '/blog/AI-Growth-Accelerator':                    '/blog/ai-enabled-seo-operations',

  // Old blog/category pages. Only the ones with no matching Astro route belong
  // here. '/blog/category/automation' was removed because it IS a live hub in
  // src/pages/blog/category/[category].astro, and this rule was 301ing the
  // "AI Automation" link on /blog straight back to /blog.
  '/seo-news':                                      '/blog',
  '/category/small-business-seo':                  '/blog',
  '/blog/category/business':                        '/blog',

  // Hub renamed. "AI for Business" described the whole site rather than
  // dividing it. What actually separates those posts is the department, so the
  // hub is now business-functions, "AI by Business Function".
  '/blog/category/ai-for-business':                 '/blog/category/business-functions',
  '/blog/category/operations':                      '/blog',
  '/blog/category/ai':                              '/blog',

  // Old content/resource pages. Everything in this family now lands on
  // /resources, which is the only one of the four that ranks (position 2.5).
  // /free-resources and /seo-ai-resources were theme carry-overs advertising
  // downloads and priced products that never existed, so they are retired
  // rather than left to compete with /resources for the same intent.
  '/small-business-seo-videos':                     '/resources',
  '/seo-ai-resources':                              '/resources',
  '/free-resources':                                '/resources',
  '/guides-templates':                              '/resources',
  '/resources/checklist':                           '/resources',
};

app.use((req, res, next) => {
  const dest = redirects[req.path];
  if (dest) return res.redirect(301, dest);
  next();
});

// Old WordPress query-string URLs still sitting in Google's index. ?s= was the
// WP search box, ?p= and ?page_id= were the pre-permalink post IDs, ?ref= was
// affiliate tagging. They all render the clean page today with a correct
// canonical, but a 301 retires them properly instead of relying on Google to
// consolidate. Deliberately narrow: utm_*, gclid, fbclid and any Calendly
// parameters pass through untouched so campaign tracking keeps working.
const DEAD_PARAMS = ['s', 'p', 'page_id', 'ref', 'cat', 'tag', 'm', 'attachment_id'];

app.use((req, res, next) => {
  const q = req.query || {};
  if (DEAD_PARAMS.some((k) => k in q)) {
    return res.redirect(301, req.path);
  }
  next();
});

// Cache policy.
//
// Everything Astro emits into /_astro/ carries a content hash in its filename
// (about.6Up92m6Q.css, inter-latin-wght-normal.<hash>.woff2). A changed file
// gets a new name, so those can be cached forever and never revalidated.
//
// Everything else under /images, /downloads, favicons and so on keeps its
// filename across deploys, so it gets a week with revalidation rather than
// immutability. HTML is never cached: a deploy has to be visible immediately.
const YEAR = 60 * 60 * 24 * 365;
const WEEK = 60 * 60 * 24 * 7;

const HTML_CACHE = 'public, max-age=0, must-revalidate';

function cacheHeaderFor(filePath) {
  if (filePath.endsWith('.html')) return HTML_CACHE;
  // Hashed build output. Safe to pin for a year.
  if (filePath.includes(`${path.sep}_astro${path.sep}`)) {
    return `public, max-age=${YEAR}, immutable`;
  }
  // robots.txt and the sitemaps have to stay fresh for crawlers.
  if (/(robots\.txt|sitemap[^/\\]*\.xml)$/i.test(filePath)) {
    return 'public, max-age=0, must-revalidate';
  }
  return `public, max-age=${WEEK}`;
}

// Serve static files. redirect:false stops express from 301ing /about -> /about/
// (which would loop with the trailing-slash middleware above).
app.use(express.static(DIST, {
  redirect: false,
  setHeaders: (res, filePath) => {
    res.setHeader('Cache-Control', cacheHeaderFor(filePath));
  },
}));

// Astro builds pages as /about/index.html; serve that for clean URLs like /about.
// sendFile does not run the express.static setHeaders hook, so set it here too.
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  const file = path.join(DIST, req.path, 'index.html');
  if (file.startsWith(DIST) && fs.existsSync(file)) {
    res.setHeader('Cache-Control', HTML_CACHE);
    return res.sendFile(file);
  }
  next();
});

// Astro builds the agent info endpoint as /api/v1/agent-info.json. Serve the
// same bytes at the extensionless path too, because that is the form that gets
// written down in third-party AEO guidance and it costs nothing to honour.
app.get('/api/v1/agent-info', (req, res, next) => {
  const file = path.join(DIST, 'api', 'v1', 'agent-info.json');
  if (!fs.existsSync(file)) return next();
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', `public, max-age=${WEEK}`);
  return res.sendFile(file);
});

app.use((req, res) => {
  res.setHeader('Cache-Control', HTML_CACHE);
  res.status(404).sendFile(path.join(DIST, '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('serving dist on port ' + PORT));