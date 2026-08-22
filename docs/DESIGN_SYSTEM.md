# Portfolio Design System

## Direction

**Systems Blueprint — Academic Edition** combines modern engineering precision with academic credibility. Neutral structure should dominate the interface; accent color should remain approximately 10% of the visual field.

The **Complexity Spine** is the only recurring signature element. Phase 2 reserves a minimal line primitive for it, but the actual progression visualization belongs to Phase 5.

## Color

| Role | Value |
| --- | --- |
| Background | `#F5F7FA` |
| Surface | `#FFFFFF` |
| Primary text | `#132238` |
| Secondary text | `#56657A` |
| Accent | `#245FC7` |
| Accent strong | `#194A9B` |
| Border | `#C8D2E1` |

Accent communicates interaction and structural emphasis. It should not become a page background or substitute for information hierarchy.

## Typography

- **Display and headings:** Archivo Variable with Arial fallbacks.
- **Body:** Source Sans 3 with Segoe UI and Arial fallbacks.
- **Technical metadata:** IBM Plex Mono with Consolas and Liberation Mono fallbacks.

The fonts are delivered through a standards-based Google Fonts stylesheet request with `display=swap`. Each approved family is distributed under the SIL Open Font License in the Google Fonts repository.

Responsive roles are available for display, H1, H2, H3, large body, small text, and technical labels. Monospaced text is limited to versions, dates, captions, technical labels, and architecture metadata.

## Spacing and layout

- Base spacing rhythm: `4px`, scaling through `8`, `12`, `16`, `24`, `32`, `48`, `64`, and `96px` tokens.
- Section spacing: fluid from `64px` to `120px`.
- Wide container: `75rem`.
- Content container: `64rem`.
- Reading container: `43rem`.
- Responsive page gutters: `20–48px`.

Use wide containers for the site shell, content containers for structured page regions, and reading containers for sustained narrative.

## Shape, borders, and elevation

- Control radius: `6px`.
- Media/surface radius: `10px`.
- Default structural border: `1px solid #C8D2E1`.
- Group content with spacing and borders before introducing a surface.
- The reserved soft shadow is only for a genuinely elevated layer; routine sections and cards should remain shadow-free.

## Reusable rules

- `section-block` and its compact variant provide consistent vertical rhythm.
- `content-region`, `surface`, and `narrative-flow` support structured content without turning every section into a card.
- `caption` and the reading-width primitive support future evidence and long-form case studies.
- `text-link`, primary button, and secondary button treatments provide visible hover and focus behavior.
- The navigation remains conventional, with an underline and text change for the active route so state is not communicated by color alone.

## Accessibility

- Preserve semantic landmarks and heading order.
- Keep the skip link and visible `:focus-visible` outline.
- Maintain at least 44px interactive targets.
- Never rely on color alone for meaning.
- Keep normal paragraphs in the body typeface.
- Respect `prefers-reduced-motion`; the interface must remain complete without animation.
- Ensure responsive layouts reflow without changing the logical reading order.

## Constraints

Do not add dark mode, decorative gradients, glassmorphism, dashboard grids, glowing effects, oversized shadows, pill collections, fake technical interfaces, or competing signature motifs. Future content phases must reuse this system without being implemented prematurely.
