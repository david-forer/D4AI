import express from 'express';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const DIST = path.join(__dirname, 'dist');

// Redirect trailing slashes to clean URLs (matches Astro trailingSlash: 'never')
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path.length > 1) {
    return res.redirect(301, req.path.slice(0, -1));
  }
  next();
});

// 301 redirects for old WordPress / previous-site URLs
const redirects = {
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

  // Old blog/category pages
  '/seo-news':                                      '/blog',
  '/category/small-business-seo':                  '/blog',
  '/blog/category/automation':                      '/blog',
  '/blog/category/business':                        '/blog',
  '/blog/category/operations':                      '/blog',
  '/blog/category/ai':                              '/blog',

  // Old content/resource pages
  '/small-business-seo-videos':                     '/free-resources',
  '/seo-ai-resources':                              '/free-resources',
  '/guides-templates':                              '/resources',
  '/resources/checklist':                           '/resources',
};

app.use((req, res, next) => {
  const dest = redirects[req.path];
  if (dest) return res.redirect(301, dest);
  next();
});

// Serve static files. redirect:false stops express from 301ing /about -> /about/
// (which would loop with the trailing-slash middleware above).
app.use(express.static(DIST, { redirect: false }));

// Astro builds pages as /about/index.html; serve that for clean URLs like /about
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  const file = path.join(DIST, req.path, 'index.html');
  if (file.startsWith(DIST) && fs.existsSync(file)) return res.sendFile(file);
  next();
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(DIST, '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('serving dist on port ' + PORT));