# Project: Rodrigo Novelo, personal portfolio

## Read first
PRODUCT.md (facts), REFERENCES.md, the Impeccable surface brief (direction),
SCROLL_SCRIPT.md (motion plan), DESIGN.md once it exists. Ask if they conflict.
Website-Building-Playbook.md is the process; we are in improve mode, one step at a time.

## Stack (no alternatives)
Plain HTML, CSS and vanilla JS. Vite is the dev server and bundler only.
No React, Next.js, Tailwind, shadcn or Motion.
GSAP + ScrollTrigger + SplitText + Flip (npm `gsap`), Lenis (npm `lenis`, one instance).
Use Context7 for current API docs before writing library code.

## Structure
- `index.html` is the whole site today: inline `<style>` and inline `<script>`.
  Keep that layout unless a step says otherwise. New library code goes in an ES module
  (`<script type="module" src="/src/main.js">`) so npm imports work through Vite.
- `assets/` holds the CV PDF and the video. Media keeps fixed aspect ratios.
- Design tokens live in `:root` (`--void`, `--gold`, `--matrix`, `--cyan`, `--font-display`,
  `--font-hud`, `--ease-physics`). Use tokens; never hard-code new colors or fonts.
- Existing canvases (`#singularity-canvas`, `#matrix-canvas`) and the custom cursor run
  their own requestAnimationFrame loops. Move them onto gsap.ticker when touching them.

## Scroll and GSAP setup (vanilla)
- Register plugins once: `gsap.registerPlugin(ScrollTrigger, SplitText, Flip)`.
- One Lenis: `new Lenis({ autoRaf: false })`; `gsap.ticker.add(t => lenis.raf(t * 1000))`;
  `gsap.ticker.lagSmoothing(0)`; `lenis.on('scroll', ScrollTrigger.update)`.
- In dev (`import.meta.env.DEV`) expose `window.lenis`.
- Wrap each chapter's animations in `gsap.context(() => { ... }, sectionEl)` so selectors are
  scoped and `ctx.revert()` cleans up.
- Responsive and reduced motion through `gsap.matchMedia()`:
  `(min-width: 768px) and (prefers-reduced-motion: no-preference)` for desktop motion,
  a simpler mobile branch, and a reduced-motion branch that shows final states.

## Signature move
[one sentence, filled in Phase 3]

## Banned defaults
Inter/system fonts for display, purple-blue gradients, centered hero over 3 cards,
icon tiles over headings, nested cards, gray text on color, eyebrow chips,
bounce/elastic easing, the same fade-up on everything. [+ your own]

## Motion rules
- Animate transform, opacity and clip-path. Background color changes only on a fixed
  full-screen background layer. Never animate width, height, top or margin.
- Exit seams live in the outgoing chapter's timeline (see SCROLL_SCRIPT.md).
- Every chapter has a mobile version (gsap.matchMedia) and a reduced-motion version.
- ScrollTrigger.config({ ignoreMobileResize: true }); pinned sections use svh, not vh.
- Media has fixed aspect ratios; ScrollTrigger.refresh() after fonts and media load.
- Real copy only. No lorem ipsum, invented stats or fake testimonials.

## Verify before reporting
1. Dev server running (`npm run dev`, http://localhost:5173). In dev, window.lenis is exposed.
2. playwright-cli: screenshot at 1440px, and with --device="iPhone 15".
3. For each seam: eval "lenis.scrollTo(Y,{immediate:true})", wait 2 frames, screenshot
   at 25/50/75% of the seam.
4. Check reduced motion with set-reduced-motion reduce.
5. Fix what's off, then report what changed with the screenshots.

## Checkpoints
Work on the `redesign` branch. Commit after every passed gate: git commit -m "gate N: [phase]".
