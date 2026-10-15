# Progress

Mode: improve an existing site (playbook section "Improving a site you already built").
Motion level: 2 (Polished): Lenis smooth scroll, a few scroll moments, one signature move.
Branch: `redesign`.

## Current phase
Improve step 5, polish. Work through the 10 baseline problems one at a time, stopping for
review after each. Next up: item 3 (email as the primary action).
Playbook sections to read: "Improving a site you already built".
Critique backlog: `.impeccable/critique/2026-10-15T00-29-18Z__index-html.md` (score 15/32).

## Decisions (2026-10-15)
- Polish, not redesign: keep the void, gold/cyan, Syncopate + Space Mono, panel language.
- Sci-fi voice turned down: plain section names, HUD language only in small secondary labels,
  film quote leaves the hero.
- Matrix mode stays only as a quiet easter egg that can never block buttons or hide content.
- Skills on the site = skills on the CV. Remove the ones the CV doesn't list
  (C#, SQL as a language, Flask, VMware, Google Cloud APIs, Prometheus & Grafana, GNS3,
  Cisco Packet Tracer, Wireshark); networking shows through the CCNA certifications instead.
- Dates follow the CV: email assistant March-July 2025.
- Motion level 2. Step 6 is a short SCROLL_SCRIPT.md with a few moments, not full choreography.
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
Then: re-run `/impeccable critique`, then step 6 (Level 2 motion): SCROLL_SCRIPT.md for the cleaned-up
page, build the scroll moments chapter by chapter (P6), then the motion pass (P7) and quality (P8).

## Done
- Step 1, protect: work committed, `redesign` branch created.
- Step 2, set up: Vite dev server, gsap + lenis, Impeccable, playwright-cli skill, CLAUDE.md (gate 0).
- Step 3, record: PRODUCT.md (`/impeccable init`, updated from the October 2026 CV),
  DESIGN.md + .impeccable/design.json (`/impeccable document`).
- Step 4, baseline: detect (35 findings) + dual-agent critique, 15/32.
- Fix 1, content: Experience section (Closer) after the hero, winery demoted to an "Earlier" line,
  3 new projects + DOI, skills rebuilt from the CV (6 groups, frontend first), certifications and
  languages in the education block. Order is now home, experience, projects, skills, education, blog.
- Fix 2, hero: h1 "Rodrigo Novelo" in solid white (gradient shine removed), role line "Frontend developer
  building enterprise Angular apps at Closer Consulting", a depth line, no kicker, quote and
  status line removed (Matrix JS no longer writes to it). Quote can return in the footer (fix 9).
- Baseline screenshots in `screenshots/baseline/` (not committed).

## Open questions
- Omitted "SPMS Design System" from the Closer tags: it names the client. Add it back if that's fine.
- Signature move (one sentence for CLAUDE.md): decide during step 6.

## Before merging to main
- Netlify serves the repo root with no build. Add netlify.toml (npm run build, publish dist)
  so CLAUDE.md, PRODUCT.md, .claude/ and content/ are not published.
