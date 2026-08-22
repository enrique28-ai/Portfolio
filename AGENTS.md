# AGENTS.md

## Project purpose

This repository contains Enrique Preciado's personal academic and professional portfolio website.

The portfolio's primary purpose is to present Enrique's technical development and project progression clearly to university admissions committees. It may also be viewed by recruiters, faculty, collaborators, and other technical readers.

The site should communicate a credible progression from earlier projects such as CRUD-Process and MedRecord to the more advanced DR-VIPS project family. It should emphasize what was built, what was learned, and how the engineering complexity evolved over time.

## Core principles

1. **Truth before marketing.** Never invent technologies, metrics, dates, responsibilities, awards, impact, users, security claims, project outcomes, or features. If a claim cannot be verified from project material or information explicitly provided by the user, ask before publishing it.
2. **Show progression, not just projects.** The portfolio should make technical growth visible across projects and versions.
3. **Academic credibility.** Write and design for an audience that may include admissions officers who are not software specialists. Technical depth should be available without making the main narrative difficult to understand.
4. **Keep the portfolio focused.** Do not turn this repository into another large application. Prefer a fast, maintainable, mostly frontend portfolio unless a later phase explicitly requires backend functionality.
5. **Do not modify linked project repositories.** DR-VIPS, MedRecord, CRUD-Process, and other referenced projects are independent repositories. Changes in this repository must not alter them.
6. **Accessibility and responsiveness are requirements.** Keyboard navigation, focus states, semantic HTML, readable contrast, mobile layouts, reduced-motion support, and accessible labels must be preserved.
7. **Performance matters.** Avoid unnecessary dependencies, oversized media, excessive animation, and client-side complexity that does not improve the portfolio.

## Planned technical baseline

Unless a later approved phase changes the architecture, prefer:

- React
- Vite
- Tailwind CSS
- React Router when multiple routes are needed
- Framer Motion only for purposeful motion
- Lucide or another single consistent icon source if icons are needed

Do not add state-management libraries, a database, authentication, a backend API, CMS infrastructure, or additional frameworks unless a concrete requirement justifies them.

## Product structure

The intended information architecture should support:

- Home / introduction
- About
- Development journey / timeline
- Featured projects
- Individual project case studies
- Skills
- Education / credentials when approved for publication
- Resume link
- Contact
- GitHub and LinkedIn links

Project case studies should focus on:

- Context / problem
- What was built
- Technologies actually used
- Engineering challenges
- Decisions and iteration
- What was learned
- Relationship to later projects
- Source code and live-demo links when available

DR-VIPS should be presented as the strongest and most mature project, while earlier projects should remain visible as evidence of progression rather than being made to look artificially equivalent in complexity.

## Design direction

This is a personal academic/professional portfolio, not a SaaS dashboard and not a generic developer-template site.

Use `.agents/skills/frontend-design/SKILL.md` when doing substantial visual design work.

Design goals:

- Distinctive but restrained
- Professional enough for university admissions
- Strong typography and visual hierarchy
- Clear storytelling
- High-quality screenshots and project presentation
- Deliberate motion rather than constant animation
- Excellent mobile behavior

Avoid common AI-portfolio defaults unless there is a project-specific reason for them:

- fake terminal interfaces
- falling code backgrounds
- excessive neon gradients
- dozens of technology logos without hierarchy
- arbitrary glassmorphism
- meaningless animated counters
- decorative complexity that competes with the work

The portfolio should make the person and the work memorable, not the visual effects.

## Content rules

- Default public-facing copy to English unless the user explicitly chooses bilingual content.
- Keep language concise, specific, and natural.
- Prefer evidence over adjectives.
- Do not call a project "production-grade", "enterprise", "secure", "global", "AI-powered", or similar without evidence that supports the wording.
- Never expose private personal information, secrets, tokens, credentials, private URLs, internal identifiers, or sensitive project data.
- Contact information should only include details explicitly approved for public display by the user.

## Development workflow

Work phase by phase. Do not implement future phases unless the user explicitly requests them.

Before editing:

1. Read this `AGENTS.md`.
2. Inspect the current repository structure and current phase.
3. Read existing components/styles before creating replacements.
4. State the files expected to change when the task is substantial.

During implementation:

- Keep changes scoped to the requested phase.
- Prefer existing patterns over new abstractions.
- Do not refactor unrelated files.
- Do not add dependencies without explaining why they are needed.
- Use semantic HTML first.
- Keep components readable and appropriately sized.
- Keep reusable content/data separate from presentation when it meaningfully improves maintainability.

After implementation, when the relevant scripts exist, run the applicable checks:

```powershell
npm run lint
npm run test
npm run build
git diff --check
```

Only run commands that actually exist in `package.json`; do not invent scripts.

For visual changes, also verify manually at representative mobile, tablet, and desktop widths.

## Git rules

- Keep commit messages professional and descriptive.
- Prefer conventional prefixes when they fit: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`.
- Do not rewrite history, force-push, reset, merge, rebase, or delete branches unless the user explicitly asks.
- Inspect changes for secrets before staging or committing.
- A Git push is not a deployment.

Use `.agents/skills/git-commit-push/SKILL.md` when the user explicitly asks to commit and push.
Use `.agents/skills/sync-main-clean-merged-branch/SKILL.md` only after a feature branch has already been merged and the user asks to synchronize/clean it.

## Agent strategy

Keep agent usage lightweight for this repository.

### Default

The main coding agent owns architecture, implementation, refactoring, and routine validation.

### Frontend design specialist

A dedicated frontend-design agent may be used for visual direction, responsive implementation, component polish, typography, layout, and motion. Any existing agent definition that still references DR-VIPS, medical records, doctor/patient roles, or DR-VIPS-specific folder structure is stale and must not be used until rewritten for this portfolio.

### QA / review

Do not create a permanent QA agent just to increase agent count. For most phases, the main agent should perform the validation checklist itself.

A read-only portfolio reviewer can be added later if repeated independent review becomes useful. Its scope should be:

- responsive behavior
- accessibility
- broken links
- visual consistency
- spelling and copy consistency
- truthful project claims
- SEO metadata
- performance regressions
- build/lint/test failures

### Senior engineer

A separate "senior engineer" agent is not required by default. Use the main agent for architecture decisions. Add a specialist only when a recurring task has a clearly different role, permissions, or review objective.

## Stale copied instructions

This repository was initially seeded with reusable agent/skill files from another project. Treat any instruction that mentions DR-VIPS, healthcare workflows, medical records, doctor/patient roles, authentication protections, or a `frontend/` subproject layout as copied legacy configuration rather than portfolio guidance.

This `AGENTS.md` is the repository-level source of truth for the portfolio.

## Completion standard

A phase is complete only when:

- the requested scope is implemented;
- unrelated functionality was not added;
- public claims are accurate;
- responsive behavior is checked;
- accessibility basics are preserved;
- applicable lint/test/build checks pass;
- `git diff --check` passes;
- remaining limitations are reported clearly.
