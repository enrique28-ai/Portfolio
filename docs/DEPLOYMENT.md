# Deployment

This document records the approved production architecture. The portfolio has not yet been deployed, and the redirects described below are not yet live.

## Build configuration

- **Hosting:** Cloudflare Pages
- **Repository:** `enrique28-ai/Portfolio`
- **Production branch:** `main`
- **Framework:** Vite
- **Build command:** `npm run build`
- **Build output:** `dist`
- **Node:** `22.18.0`
- **Environment variables:** None
- **Canonical production origin:** `https://enriquepreciado.dev`

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

The primary host will be `https://enriquepreciado.dev`.

After deployment, the intended redirects are:

- `http://enriquepreciado.dev/*` to `https://enriquepreciado.dev/*`
- `https://www.enriquepreciado.dev/*` to `https://enriquepreciado.dev/*`
- the Cloudflare Pages production hostname to `https://enriquepreciado.dev/*`

Redirects must preserve paths and query strings. These redirects are not yet configured or live.

## Metadata limitation

Route-specific metadata is client-rendered. Social preview crawlers that do not execute JavaScript may not receive route-specific metadata. The application does not use server-side rendering or prerendering.
