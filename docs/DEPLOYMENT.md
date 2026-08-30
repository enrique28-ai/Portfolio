# Deployment

This document records the current production architecture. The portfolio is deployed on Cloudflare Pages at `https://enriquepreciado.dev`.

## Build configuration

- **Hosting:** Cloudflare Pages
- **Cloudflare Pages project:** `portfolio`
- **Pages hostname:** `https://portfolio-8au.pages.dev`
- **Repository:** `enrique28-ai/Portfolio`
- **Production branch:** `main`
- **Framework:** Vite
- **Build command:** `npm run build`
- **Build output:** `dist`
- **Node:** `22.18.0`
- **Environment variables:** None
- **Canonical production origin:** `https://enriquepreciado.dev`
- **Custom domain:** Active with SSL enabled

Automatic deployments are connected to the GitHub repository. Updates to the production branch `main` produce production deployments.

## Routing

The application uses React BrowserRouter as a single-page application. Cloudflare Pages must serve the SPA shell for direct requests to application routes. Its current SPA serving behavior supports this when there is no top-level `404.html`, so this repository does not add `public/_redirects` or `404.html`.

Public application routes:

- `/`
- `/projects`
- `/projects/crud-process`
- `/projects/medrecord`
- `/projects/dr-vips`
- `/skills`
- `/contact`

Static resources:

- `/robots.txt`
- `/sitemap.xml`

## Not Found behavior

Unknown application URLs use the SPA fallback, so the initial HTTP response may be `200` before React renders the Not Found page. The React wildcard route applies `noindex, follow` and removes canonical and sharing metadata. This soft-404 behavior is intentionally accepted for the initial release.

## Canonical host policy

The primary host is `https://enriquepreciado.dev`.

Cloudflare DNS records:

- `enriquepreciado.dev` is a proxied CNAME to `portfolio-8au.pages.dev` with automatic TTL.
- `www.enriquepreciado.dev` is a proxied A record to `192.0.2.1` with automatic TTL. It exists only to enter Cloudflare and redirect to the canonical apex domain.

The active Bulk Redirect List is `portfolio_canonical_redirects`, and the enabled Bulk Redirect Rule is `portfolio-canonical-redirects-rule`.

Active permanent redirects:

- `https://www.enriquepreciado.dev/*` to `https://enriquepreciado.dev/*`
- `https://portfolio-8au.pages.dev/*` to `https://enriquepreciado.dev/*`

Both redirects use HTTP `301` and preserve paths, path suffixes, and query strings.

The Pages-hostname redirect applies to the exact production hostname `https://portfolio-8au.pages.dev`. Preview deployment subdomains such as `https://<preview>.portfolio-8au.pages.dev` are intentionally excluded so pull-request and branch previews remain directly accessible for verification. These preview URLs are not canonical production URLs.

## Metadata limitation

Route-specific metadata is client-rendered. Social preview crawlers that do not execute JavaScript may not receive route-specific metadata. The application does not use server-side rendering or prerendering.
