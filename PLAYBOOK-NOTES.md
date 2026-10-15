# Playbook notes

> Merged into Website-Building-Playbook.md v3 on 2026-10-15. Kept as the history of the first run.

Additions and corrections to Website-Building-Playbook.md, collected while running it in improve
mode on this portfolio (October 2026). Merge them into the site-studio skill after the project.
Part A is what was planned up front; part B is what the first real run showed.

## A. Planned additions

### 1. Motion levels
The first question for every project, asked before Phase 1, since it sizes everything after it.

| Level | What it means | Phases |
| --- | --- | --- |
| 1 Simple | Clean layout, typography, subtle hovers and fades, no scroll story | Skip Lenis, SCROLL_SCRIPT.md and seams. Phase 4 is skipped; Phase 6 builds sections, not chapters |
| 2 Polished | Lenis smooth scroll, a few scroll moments, one signature move | Short SCROLL_SCRIPT.md: only the moments, one carrier; seams only where a moment needs one |
| 3 Showcase | Full scroll choreography, owned seams, maybe 3D | Everything in the playbook, including the 3D tiers |

The quality process stays the same at every level: kit files, Impeccable, screenshots, gates, P7-P9.
Record the level in PROGRESS.md and CLAUDE.md.

### 2. Autopilot workflow
- PROGRESS.md holds the current phase, the decisions, the fix order and the open questions.
- Each session: read PROGRESS.md, then only the playbook section for the current phase (never the
  whole playbook). Do that phase, run the commands yourself, stop at the gate, update PROGRESS.md
  and commit.
- The user reviews and types "continue". Anything that needs taste or a fact the files don't
  have is asked, not guessed.
- Template:

```markdown
# Progress
Mode: new | improve. Motion level: 1 | 2 | 3. Branch: ...
## Current phase
[phase or improve step, what's next, which playbook section to read]
## Decisions
[dated, one line each]
## Fix order / build order
## Done
## Open questions
```

### 3. Vanilla variant (plain HTML/CSS/JS)
- Vite as dev server and bundler only; keep the existing file structure.
- `npm i gsap lenis`. One Lenis in `src/main.js` (loaded with `<script type="module">`),
  `autoRaf: false`, driven by `gsap.ticker`; `lenis.on('scroll', ScrollTrigger.update)`;
  `window.lenis` in dev via `import.meta.env.DEV`.
- `gsap.context(fn, sectionEl)` per section instead of `useGSAP`; `gsap.matchMedia()` for
  desktop, mobile and reduced motion.
- No Tailwind, shadcn or Motion. P0 shrinks to the CLAUDE.md stack lines and main.js.

### 4. Desktop app
- `/exit` doesn't exist there. After installing skills (Impeccable, playwright-cli), start a new
  session so they load.
- `/model` may not exist either; switch models with the app's model picker.

### 5. Critique budget
- A full `/impeccable critique` runs two sub-agents and is expensive. Run it only at the baseline
  (existing sites) and at P8, plus once after the last polish fix to measure the change.
- Optional cheap check after Phase 5: "critique the hero" scoped to one section.
- Quick checks: `npx impeccable detect` (deterministic, no AI cost). The design hook already runs it
  after every edit.
- Use a lighter model for routine build steps; keep the strongest one for direction, critique
  and scroll scripts.

### 6. Content updates
- Drop source files into `content/` and say what they are. The CV is the source of truth for facts:
  update PRODUCT.md from it and show the diff before building on it.
- Get the CV and content BEFORE `/impeccable init`, not after. On this project the interview ran
  first and PRODUCT.md had to be rewritten when the CV arrived (the person already had a job the
  site didn't mention).
- `content/` holds private sources (the CV has a phone number). It must never be published; see B4.

### 7. Ground-up redesign
- A new project through Phase 0, in a new folder or repo. Copy over PRODUCT.md, CLAUDE.md,
  PROGRESS.md, the playbook and `content/`. Don't copy DESIGN.md: the new world gets its own.
- Keep the old site live until the final gate, then switch the domain.

## B. Learned from the first run

1. **Impeccable install needs flags in an agent session:**
   `npx impeccable install --project --providers=claude-code -y`. The plain command prompts.
2. **Ignore Impeccable's binary:** `.claude/skills/impeccable/scripts/bin/` (about 19 MB) is
   re-downloaded on first run; add it to `.gitignore`, along with `.impeccable/live/`,
   `.playwright-cli/` and `screenshots/`.
3. **Reconcile banned defaults with DESIGN.md in improve mode.** The template bans "eyebrow chips",
   but `/impeccable document` records the incumbent site, which used them. The detector and critique
   both flagged the conflict. After `document`, go through the banned list and decide each conflict
   once, in both files.
4. **Check how the host deploys before adding the kit.** This site deploys from the repo root on
   Netlify with no build step, so merging would publish CLAUDE.md, PRODUCT.md, `.claude/` and
   anything in `content/`. Before the final gate: build with Vite to `dist/` (`netlify.toml` with
   `command = "npm run build"`, `publish = "dist"`), or the kit must stay out of the published folder.
   The playbook's "GitHub + Vercel" line should say "the host the site already uses".
5. **Gate names in improve mode.** The ten phase numbers don't map to the six improve steps.
   Use `git commit -m "improve N: [step]"` and, during polish, one commit per fix.
6. **The baseline is the critique.** Improve step 4 and `/impeccable critique` overlap; the critique
   already includes the detector, screenshots and a ranked list. Ask it for the top 10 and for
   polish vs redesign in the same run.
7. **Sub-agents can fail to launch.** The first critique attempt errored and the retry worked. Retry
   once before falling back to a degraded single-context run.
8. **The critique reads facts from PRODUCT.md, not the page.** With an outdated page, its top
   problems are content gaps. That's correct, but it means content is always fix 1 in improve mode.

## C. Running log (one line per note)

- [improve 5 / fix 1] The Impeccable design hook re-reports every pre-existing finding after each edit and goes silent after 6 edits per session; during one-fix-at-a-time polish it's mostly noise. Run `npx impeccable detect` once at the end of each fix instead.
- [improve 5 / fix 1] The dev server had stopped between sessions and the first screenshot round came back blank (HTTP 000). Check the server responds before screenshotting.
- [improve 5 / fix 1] Fix boundaries overlap: adding the Experience section forced nav and side-nav changes that fix 6 (labels) will redo. In improve mode, merge "content" and "section labels" into one fix.
- [improve 5 / fix 1] A content-from-CV fix needed only craft-floor.md, not the clarify/distill references. Skip command references for pure content fixes to save tokens.
- [improve 5 / fix 1] The CV named the client's design system (SPMS). Add to the playbook: check CV facts against confidentiality before publishing them.
- [improve 5 / fix 1] Content-first makes the phone page longer before adapt shortens it (6,800px to 9,900px). Expected; don't judge mobile until the adapt fix.
- [improve 5 / fix 2] The critique's top 10 is grouped by problem type, but work happens by section: the hero fix also absorbed the gradient text (fix 10), the kicker (fix 6) and the status line (fix 4). Order polish fixes by section, not by problem type.
- [improve 5 / fix 2] Vanilla inline scripts couple markup and behaviour: removing the hero status line broke nothing only because the Matrix JS that wrote to it was edited too. Grep element ids before deleting markup.
- [improve 5 / fix 3] Writing new UI copy invited an unconfirmed promise ("I reply to every message"); caught on review and removed. Add to the craft rules: new copy may only state facts from PRODUCT.md, including promises about behaviour.
- [improve 5 / fix 4] Removing the Matrix header button also cleared three detector findings (a red glow, undersized phone text and a font size), so the baseline count isn't a fix-by-fix checklist. Re-run detect after each fix and compare counts instead.
- [improve 5 / fix 5] Tab order follows the DOM: the fixed side nav sat before the header, so keyboard users hit 7 diamonds before the main nav. Put fixed decorative navs after the header in the markup.
- [improve 5 / fix 5] Claude's own wording can sound unlike the client; show new sentences for approval before moving on (the hero line came out long and stiff).
- [improve 5 / fix 5] Deferred items need tracking so they aren't forgotten: keep a "Deferred" list in PROGRESS.md with the fix each item belongs to.
- [process] Every note here is tagged by phase, but not by mode. When merging into the skill, mark each one new / improve / both; this run only exercises improve mode, so the from-scratch path (Phases 0-5) still needs its own test project.
- [improve 5 / fix 6] Renaming a section's id breaks every in-page link pointing at it (nav, side nav, footer). Check anchors with one script after any rename: every href="#x" must resolve.
- [improve 5 / fix 3, found by the user] A mailto: link does nothing visible when no email app is set up (and in the app's built-in browser), and Claude's checks only confirmed the href and that the button was clickable. Make every primary action give visible feedback (here: copy the address and say so), and verify the outcome, not just the markup.
- [improve 5 / fix 7] The worst phone heading (ISEC wrapping to 6 lines) came from an old global `h2 { font-size: 2rem !important }` in the mobile query, not from the heading's own rule. In improve mode, grep for !important overrides in media queries before resizing anything.
- [improve 5 / fix 7] Measuring section heights with one eval (`section.getBoundingClientRect().height`) showed where the phone length came from (projects 3,387px) faster than screenshots. Put it in CLAUDE.md's verify steps for the adapt fix.
- [improve 5 / fix 8] Impeccable's context check listed ffmpeg as available, which made the optimize fix a two-command job (cut + compress, extract a poster). Phase 0 should check for ffmpeg and say how to install it if missing.
- [improve 5 / fix 8] Media on the site may be third-party (here, a film clip). Add a rights check to the playbook's hero-asset and launch steps.
- [workflow, all phases] Decision rule: Claude decides anything clearly reasonable and reversible (cleanup, unused files, small technical choices) and reports it; it asks only about content and facts, taste and design direction, anything irreversible, and anything involving accounts or money. Asking about reversible cleanup (here, deleting an unused video) wastes a round trip. Put this rule in the CLAUDE.md template.
- [workflow, all phases] Autonomy by default: Claude runs each phase end to end (build, verify, fix, commit) and stops only at decision gates that need taste or facts: references pick (P2), direction pick (P3), scroll script approval (P4), hero "oh damn" (P5), and launch (P9). Quality phases (polish fixes, P7 motion pass, P8 audit) run without stopping and end in one report. Stopping after every small step made this run slow and leaned on the user for calls Claude could infer.
- [improve 5 / fix 9-10] Polish fixes 9 and 10 were cleanup with no taste calls (remove the blog panel, tokenise colours, drop inline styles); done in one pass without stopping. Inline styles 28 to 0, detector 27 to 16 findings.
- [improve 5 / fix 10] `impeccable hooks ignore-value` can't target a box-shadow glow by value; the only option is `"*" --file`, which suppresses the rule for the whole file. Fine with one remaining hover glow, too broad in general.
- [playbook v2 review] The levers table puts the hero asset in `public/`, while the new Hero asset section and ASSETS.md use `assets/`. Pick one folder (`assets/` for vanilla/Vite, `public/` for Next.js) and say so per stack.
- [playbook v2 review] P7 says "you type this one" because review-animations only runs when called, but Claude can call it itself through the Skill tool. With the autonomy rule, Claude runs the review and the feel-tuning rounds stay the user's job.
- [playbook v2 review] ASSETS.md is placed in Phase 3, but in improve mode it belongs in the baseline (step 4): this site's existing video turned out to be unlicensed film footage, which only an asset audit catches.
- [playbook v2 review] The new version still lacks the autonomy rule, PROGRESS.md, the vanilla variant and the content-before-init order from parts A-C here; those still need merging.
- [workflow, all phases, user feedback] Working style for the skill: fewer, bigger steps; when the user reports a mistake, fix it directly instead of re-investigating; one short report at the end of each phase without a pile of screenshots; questions only for content, taste or anything irreversible. The first run over-verified and over-reported, and the user felt overwhelmed.
- [improve 6 / motion, vanilla] gsap.context(fn, sectionEl) scopes every selector string to that section, so targeting the section itself ('#home') or anything outside it (the fixed canvas) silently fails with a "target not found" warning. In vanilla, pass element references for triggers and keep global targets outside the context. Check the console for GSAP warnings after the first build.
- [improve 6 / motion, vanilla] Hide motion targets before first paint with a class set by an inline head script (skipped under reduced motion), plus a 3-second safety timeout that reveals everything if the module fails. Without it the hero flashes, then animates.
- [improve 6 / motion] The signature changed during the build: the drafted particle-gravity idea was too faint to carry a signature, and the re-critique suggested a line ending on the main action. Let the re-critique run before locking the signature; a signature tied to the main action beats a decorative one.
- [tooling] Long python heredocs in Git Bash on Windows failed twice with "unexpected EOF"; writing the script to a scratch file and running it works every time. Use files for multi-line edit scripts.
- [improve 6 / motion, found by the user] A scrubbed exit tween (gsap.to) on an element that also has a load intro records the pre-intro value (opacity 0) as its start, so scrolling back up hid the hero role line. Rule: any scrubbed tween on an element with an intro uses fromTo with explicit start values and immediateRender: false. Verify every seam by scrolling down AND back up; the checks only scrolled down.
- [P7 / motion pass] animation-performance found real costs the screenshots never showed: backdrop-filter blur on panels over an animated canvas (re-blurred every frame), a custom cursor positioned with left/top, `transition: all` and `transition: 0.3s` shorthands, width-based underline and node growth. All swapped to transform/opacity or explicit properties.
- [P7 / found by the user] Custom-cursor hover state toggled per element with mouseenter/mouseleave flickers on nested targets (a link inside a card). Use one delegated pointerover check with closest(). Add an interaction smoke test to every verify step: hover across nested elements, scroll down and back up, tap through the phone menu.
- [P8 / quality] Dead CSS piles up during polish (44 rules for removed layouts). A 20-line script comparing CSS class selectors against markup and JS finds them; run it before the final detector pass.
- [P8 / quality] The type-ramp advisories cleared by consolidating near-duplicate sizes (0.95 to 0.9rem, 0.85 to 0.8rem) and then recording the ramp in DESIGN.md as built, not by adding every stray value as a token.
- [P8 / quality] Icon fonts are a large hidden cost: Font Awesome was ~376 KB for 6 icons. Pull exact SVGs from the official npm package (lucide-static) and inline them.
- [why mistakes slipped through] Checks verified states (classes, opacity, overflow) after scripted actions, not the experience a person has (scroll back up, move the mouse across nested elements, a real mail client). Every user-found bug in this run was in that gap. The verify step needs a short real-interaction script, and the report should say which feel checks still need a human.
- [P7 / found by the user, twice] The cursor ring still glitched after the delegation fix: the P7 swap from width/height to the CSS `scale` property multiplied the ring's translate transform, so it jumped away from the dot. The check had only read the hover class. Measure the visible outcome (ring centre vs pointer), not the state.
