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

Phases 1–16 are complete. Phase 12 — Project Evidence, originally deferred for the first release, was later resumed and completed with directly reviewable project evidence for CRUD-Process, MedRecord, and DR-VIPS. The final admissions audit is complete, and the portfolio is ready for admissions use. Production remains [https://enriquepreciado.dev](https://enriquepreciado.dev).

See [docs/PORTFOLIO_PLAN.md](docs/PORTFOLIO_PLAN.md) for the phased plan and [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the approved deployment architecture.

## Project structure

```text
public/             Static public assets
src/
  assets/           Source-controlled media assets
  components/       Shared interface components
  data/             Structured portfolio content and metadata
  layouts/          Shared page layouts
  pages/            Route-level pages and project case studies
  App.jsx            Application routes
  index.css          Tailwind and global CSS foundation
  main.jsx           React application entry point
docs/                Project planning documentation
```
