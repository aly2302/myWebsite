# Playbook notes

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
