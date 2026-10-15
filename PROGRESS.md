# Progress

Mode: improve an existing site (playbook section "Improving a site you already built").
Branch: `redesign`.

## Current phase
Improve step 5, polish. Work through the 10 baseline problems one at a time, stopping for
review after each. Next up: item 1.
Playbook sections to read: "Improving a site you already built".
Critique backlog: `.impeccable/critique/2026-10-15T00-29-18Z__index-html.md` (score 15/32).

## Decisions (2026-10-15)
- Polish, not redesign: keep the void, gold/cyan, Syncopate + Space Mono, panel language.
- Sci-fi voice turned down: plain section names, HUD language only in small secondary labels,
  Matrix mode becomes a quiet easter egg that can't break the page, film quote leaves the hero.
- Kicker/eyebrow labels above headings are banned (DESIGN.md updated).
- Page order: who + role -> Closer -> projects + publication -> skills + education -> contact.
- Scope: all 10 problems.

## Fix order
1. Content: add Closer, rebuild Skills frontend-first, add the 3 new projects, demote the winery (clarify, distill)
2. Hero: name, role and positioning line; quote out (clarify)
3. Email as the one primary action, no alert(), closing contact block (layout)
4. Matrix mode: quiet easter egg, no trap (quieter, harden)
5. Accessibility: reduced motion, allow zoom, keyboard side nav, gold focus ring (harden)
6. Plain section labels (clarify)
7. Phone: anchor nav, title sizes, "ISEC Coimbra" (adapt)
8. Video: poster, lazy load, smaller file (optimize)
9. Blog to one line, page ends on contact, footer year (distill)
10. Contrast, gradient-text name, token drift, inline styles (polish)
Then: re-run `/impeccable critique`, then step 6 (retrofit motion: SCROLL_SCRIPT.md, then P6).

## Done
- Step 1, protect: work committed, `redesign` branch created.
- Step 2, set up: Vite dev server, gsap + lenis, Impeccable, playwright-cli skill, CLAUDE.md (gate 0).
- Step 3, record: PRODUCT.md (`/impeccable init`, updated from the October 2026 CV),
  DESIGN.md + .impeccable/design.json (`/impeccable document`).
- Step 4, baseline: detect (35 findings) + dual-agent critique, 15/32.
- Baseline screenshots in `screenshots/baseline/` (not committed).

## Open questions
- Confirm skills on the site but not on the CV: C#, Flask, VMware, Google Cloud APIs,
  Prometheus & Grafana.
- Email assistant dates: site says 03-08/2025, CV says March-July 2025.
