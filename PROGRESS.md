# Progress

Mode: improve an existing site (playbook section "Improving a site you already built").
Motion level: 2 (Polished): Lenis smooth scroll, a few scroll moments, one signature move.
Branch: `redesign`.

## Current phase
P7 and P8 done. Next: the owner's feel-tuning rounds on a real phone, then P9 launch (metadata,
social image, Netlify build to dist/, deploy). Playbook v3 merged from PLAYBOOK-NOTES.md.
Level 3 choreography is a later, separate round (owner's request, 2026-10-15).

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
- P7 motion pass: no backdrop blur over the canvas, cursor on transforms, explicit transitions,
  hover-only lifts, fewer particles on small screens, delegated cursor hover state (flicker fix).
- P8 quality: Font Awesome replaced by 6 inline Lucide SVGs, 44 dead CSS rules removed, type ramp
  consolidated, DESIGN.md + sidecar re-recorded as built, detector 0 findings, no overflow at
  320/375/768/1024/1440, heading order clean, reduced motion shows everything.
- Polish round 2 (from the re-critique): skills as a compact list, personal projects as a ledger,
  Education without the film clip and without nested frames, Contact ends on the email in large type,
  skip link, live region for copy, favicon, title case, cursor hidden until the mouse moves,
  sections no longer forced to full height, phone overflow and touch-particle fixes.
- Motion (src/main.js): Lenis on gsap.ticker, side-nav state via ScrollTrigger, signature gold line,
  hero SplitText intro + exit seam, reveals per SCROLL_SCRIPT.md, matchMedia desktop/mobile/reduced.
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
- Fix 3, email: the address itself is the one primary button (mailto), with a Copy button that
  says "Copied" inline (no alert, no forced mailto). CV, LinkedIn and GitHub are quiet text links.
  A Contact section before the footer repeats the same actions; Contact added to both navs.
  Follow-up: clicking the email button also copies the address and shows "Copied · opening your
  email app", because mailto alone does nothing without a default email app.
- Fix 4, Matrix: red header button removed; the footer glyph is now the toggle (aria-pressed, Esc
  turns it off). Rain runs at 35% behind the content; nothing is hidden, blurred or blocked.
- Fix 5, accessibility: zoom allowed, gold :focus-visible ring and gold text selection, side nav
  is 7 labelled buttons after the header in tab order (aria-current on the active one), reduced
  motion stops CSS animations, freezes the particles, pauses the video and draws Matrix once.
- Hero second line shortened (approved): "Networking degree, self-hosted servers and
  published LLM research. Based in Portugal."
- Fix 6, labels: nav, side nav and footer all read Home / Experience / Projects / Skills / Education /
  Blog / Contact (footer adds LinkedIn, GitHub). Kickers and HUD captions removed, #timeline renamed
  #education with an EDUCATION heading, Blog no longer gold. Detector: 27 findings, 0 kickers.
- Fix 7, phone: Menu button (44px, aria-expanded, closes on link tap and Esc) opens the nav under
  the header; email assistant details collapse behind "+ Architecture and stack" on phones only;
  "ISEC, Coimbra" with the full name below; a global mobile h2 override removed; tighter cards.
  Phone page 10,535px to 9,311px. The repo link sits inside the collapsed details on phones.
- Fix 8, video: 12-second loop (assets/interstellar_loop.mp4, 160 KB, was 10 MB) with a 13 KB poster;
  preload none, plays only while on screen, poster only under reduced motion. The old 10 MB
  interstellar_msg.mp4 was deleted (still in git history).
- Fix 9, ending: blog panel removed ("Blog coming soon" line in the footer, Blog dropped from both
  navs); page ends Contact -> footer; footer has the Interstellar quote, current year, plain meta,
  Matrix toggle beside it.
- Fix 10, polish: inline styles 28 -> 0, all colours via tokens (--white, --black, --void-deep added),
  side-tab borders -> 2px top accents, static glows removed (hover glow kept by the user's hybrid
  choice; file-scoped ignore in .impeccable/config.json), footer contrast fixed, unused CSS removed.
  Repo link moved out of the collapsed details. Detector 35 -> 16 (14 font-size advisories and the
  documented 10px video radius; both get recorded when DESIGN.md is re-documented at P8).
- Baseline screenshots in `screenshots/baseline/` (not committed).

## Deferred (don't lose these)
- After P7: feel-tuning rounds on the owner's real phone (playbook v2, Level 2).
- Before merge: Netlify build to dist/ (see below).

## Open questions
- Omitted "SPMS Design System" from the Closer tags: it names the client. Add it back if that's fine.

## Deploy
- netlify.toml builds with Vite and publishes dist/ only. Static files live in public/assets/.
  Merge PR #1 (redesign -> main) to deploy to production.
