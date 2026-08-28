# Enrique Preciado Portfolio

Enrique Preciado's academic and professional portfolio, created primarily for university admissions committees and also accessible to recruiters, faculty, and technical readers.

## Stack

- React
- Vite
- JavaScript and JSX
- Tailwind CSS
- React Router
- ESLint

## Local setup

Requirements: a current Node.js LTS release and npm.

```powershell
npm install
npm run dev
```

Open the local URL shown by Vite.

## Commands

```powershell
npm run dev      # Start the development server
npm run lint     # Check JavaScript and JSX with ESLint
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Current phase

Phase 14 — SEO & Sharing Metadata (`COMPLETE`). Phases 1–11, Phase 13, and Phase 14 are complete; Phase 12 was intentionally skipped for the current release. Route metadata, indexing guidance, and sharing metadata are implemented and reviewed.

See [docs/PORTFOLIO_PLAN.md](docs/PORTFOLIO_PLAN.md) for the phased plan.

## Project structure

```text
public/             Static public assets
src/
  assets/           Source-controlled media assets
  components/       Shared interface components
  data/             Future structured portfolio content
  layouts/          Shared page layouts
  pages/            Route-level placeholder pages
  App.jsx            Application routes
  index.css          Tailwind and global CSS foundation
  main.jsx           React application entry point
docs/                Project planning documentation
```
