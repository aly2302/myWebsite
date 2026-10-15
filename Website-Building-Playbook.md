# Website Building Playbook

Oct 15, 2026 · v3, rewritten after the first real run (improve mode on a vanilla HTML portfolio)

Great sites come from a system, not from prompting harder. This playbook is that system: four global installs, a kit of project files, ten phases with a quality gate after each, and a prompt for every phase. It's written so it can become a Claude skill later with almost no changes.

## How the system works

Raw prompting stalls at "good" because every session starts from zero: Claude doesn't know your product, can't see its own page, and falls back to the average of the internet. Three changes fix that, and everything below serves one of them.

1. **Memory instead of repetition.** Facts about the product, the design rules and the scroll story live in files in the project (the kit). Claude reads them every session, so your prompts get short and specific.
2. **Decisions before code.** Direction, references and the scroll script are chosen before anything is built. Most bad results are decided in the first prompt, not fixed in the fiftieth.
3. **Eyes and gates.** Claude screenshots its own work, and every phase ends with a check. You review results, not code.

**Your job:** taste and decisions. **Claude's job:** research, building, checking. When you catch yourself typing "make it better", a phase was skipped.

## How Claude works in this system

The first real run showed that the process fails less on technique than on rhythm: Claude stopped too often, asked about things it could decide, and reported too much. These rules fix that and belong in every project's CLAUDE.md.

- **Autopilot through PROGRESS.md.** Each session Claude reads PROGRESS.md, then only the playbook section for the current phase, never the whole playbook. It runs the phase end to end (build, verify, fix, commit) and stops only at a gate that needs you. You type "continue".
- **Gates that stop for you:** motion level (start), brief facts (P1), references pick (P2), direction pick (P3), scroll script approval (P4), hero "oh damn" (P5), feel-tuning (after P7), launch (P9). Polish fixes, P6 chapters, the P7 motion pass and P8 quality run without stopping and end in one short report.
- **Decision rule.** Claude decides anything reasonable and reversible (cleanup, unused files, small technical choices) and says what it did. It asks only about content and facts, taste and direction, anything that can't be undone, and anything involving accounts or money.
- **Working style.** Fewer, bigger steps. When you report a bug, Claude fixes it directly instead of re-investigating. One short report per phase, with a few screenshots at most.
- **New wording needs approval.** Claude's sentences can sound unlike the client. New copy may only state facts from PRODUCT.md (no invented promises such as "I reply to every message"), and new sentences are shown to you in the report.
- **Deferred items are written down.** Anything postponed goes into PROGRESS.md's Deferred list with the phase it belongs to.

**PROGRESS.md template:**

```markdown
# Progress
Mode: new | improve. Motion level: 1 | 2 | 3. Branch: ...
## Current phase
[phase or improve step, what's next, which playbook section to read]
## Decisions
[dated, one line each]
## Build order / fix order
## Deferred (don't lose these)
## Done
## Open questions
```

## Install once (global)

Four global installs, checked against each official repo on 2026-10-14 and re-verified by an independent review. Run them in a normal terminal, then restart Claude Code. `-g -a claude-code` makes a skill available in every project; without it, `npx skills` installs only into the current folder. Per-project tools (Impeccable, the Playwright skill, shadcn) are set up in Phase 0 of each project.

| # | Tool | Job | Install |
| --- | --- | --- | --- |
| 1 | [GSAP skills (official)](https://github.com/greensock/gsap-skills) | Correct ScrollTrigger, timelines, SplitText, `useGSAP` | `npx skills add https://github.com/greensock/gsap-skills -g -a claude-code` |
| 2 | [Emil Kowalski skills](https://github.com/emilkowalski/skills) (4 of 15) | Animation feel, frame drops, phone polish | `npx skills@latest add emilkowalski/skills --skill review-animations improve-animations animation-performance mobile-native -g -a claude-code` |
| 3 | [Playwright CLI](https://github.com/microsoft/playwright-cli) | Claude's eyes: opens the site, scrolls, screenshots | `npm install -g @playwright/cli@latest` |
| 4 | [Context7](https://context7.com/docs/clients/claude-code) | Current docs for Next.js, GSAP, Lenis, three.js | `npx ctx7 setup --claude`, choose CLI + Skills (needs Node 22.13+ and a sign-in) |

**Why these, in one line each:** GSAP's own team wrote its skill. Emil's four are the ones this workflow calls; he advises using them on demand. Microsoft recommends the Playwright CLI over its MCP for coding agents because it costs far less context. Context7 in CLI mode stops outdated code without adding an MCP.

**Design skill: Impeccable, and only Impeccable.** It's installed per project in Phase 0. It's the most praised design skill in community comparisons and the only one that deals you human-reviewed design directions, which is the core of the anti-generic system. Don't add Taste Skill or Anthropic's frontend-design next to it: two design rulebooks give Claude conflicting rules.

### Add only when the trigger happens

| Trigger | Add | Install |
| --- | --- | --- |
| The site has real 3D | [three-agent-skills](https://github.com/emalorenzo/three-agent-skills) | `npx skills add https://github.com/emalorenzo/three-agent-skills --skill r3f-best-practices three-best-practices -g -a claude-code` |
| You design in Figma | [Figma plugin (official)](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server) | `claude plugin install figma@claude-plugins-official` |
| Launch is next | [Marketing Skills](https://github.com/coreyhaines31/marketingskills): seo-audit, ai-seo, schema | `npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo schema -g -a claude-code` |
| Page feels slow | [Chrome DevTools MCP (Google)](https://claudelog.com/claude-code-mcps/chrome-devtools-mcp) | `claude mcp add chrome-devtools --scope user npx chrome-devtools-mcp@latest` |

**Ignore:** a second design skill, mega packs of dozens of plugins, and memory plugins (the project kit does that job).

**Check it worked:** in any folder, start Claude Code and ask "List the skills you can use." You should see the gsap skills, Emil's four and context7.

**In the Claude desktop app:** `/exit` and `/model` don't exist. After installing per-project skills, start a new session so they load, and switch models in the app's model picker. Also have `ffmpeg` installed: it turns video and image prep into one command each.

## The stack

One stack for every project. Each piece has one job, and two tools never own the same job; two systems fighting over scroll is the most common cause of jank.

| Layer | Use | Rule |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Vite + React only for a single static page |
| Styling | Tailwind CSS | Colors and fonts as tokens, never hard-coded |
| Scroll animation | GSAP + ScrollTrigger + `@gsap/react` (all plugins free) | GSAP owns everything scrubbed or pinned |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) | Exactly one instance, driven by GSAP's ticker (or scroll-rig's, see 3D) |
| Small reveals | CSS `animation-timeline: view()` | One-shot reveals only; works in Chrome, Edge, Safari 26, not Firefox, so wrap in `@supports` |
| UI motion | Motion (formerly Framer Motion) | Hovers, menus, page transitions; never scroll-linked |
| Text effects | GSAP SplitText | `SplitText.create(el, { type: "lines", autoSplit: true, onSplit(self) { return gsap.from(self.lines, {...}) } })`; re-splits itself on font load and resize |
| 3D (optional) | React Three Fiber + drei | One canvas per site |
| Components | shadcn/ui + registries | Install via the shadcn MCP, restyle to the design system |
| Deploy | GitHub + the host the site already uses (Vercel for new Next.js sites) | Preview link from Phase 5 on; publish only the build folder, never the repo root |

### Vanilla variant (plain HTML, CSS and JS)

Don't migrate a working static site to Next.js just to follow the playbook. The vanilla stack:

- **Vite** as dev server and bundler only; keep the existing file structure. Hero assets live in `assets/` (in Next.js, `public/`).
- **`npm i gsap lenis`.** One ES module, `src/main.js`, loaded with `<script type="module">`. One Lenis with `autoRaf: false` and `anchors: true`, driven by `gsap.ticker`; `lenis.on('scroll', ScrollTrigger.update)`; `window.lenis` in dev via `import.meta.env.DEV`.
- **`gsap.context(fn, sectionEl)`** per section instead of `useGSAP`, and **`gsap.matchMedia()`** with desktop, mobile and reduced-motion branches.
- No Tailwind, shadcn or Motion. Icons as inline SVG from `lucide-static`, not an icon font.
- **Deploy:** a Vite build to `dist/` (for Netlify, a `netlify.toml` with `command = "npm run build"` and `publish = "dist"`). If the host serves the repo root, the kit files, `.claude/` and `content/` get published.

## The project kit

Every project gets the same files. They're Claude's memory: short, true, updated when a decision changes. Each has exactly one writer, which keeps tools from overwriting each other.

| File | Holds | Written by | When |
| --- | --- | --- | --- |
| `CLAUDE.md` | Stack, rules, banned defaults, how to verify | You, from the template below | Phase 0 |
| `REFERENCES.md` + `references/` | Screenshots and what to take from each | reference-scout, curated by you | Phase 2 |
| `PRODUCT.md` | Audience, purpose, main action, real facts | `/impeccable init` | Phase 1 |
| `.impeccable/surfaces/*.md` | The chosen direction and its "direction contract", plus your signature move | Impeccable during shape and build | Phases 3-5 |
| `SCROLL_SCRIPT.md` | Chapter storyboard of what moves on scroll | Claude drafts, you approve | Phase 4 |
| `DESIGN.md` | The design system as actually built | `/impeccable document` | After Phase 5 |
| `ASSETS.md` + `assets/` | Every asset: file, source link, license, credit, where used | Claude (P-Asset), from your files and its searches | Phase 3 (improve mode: the baseline), updated whenever assets change |
| `PROGRESS.md` | Current phase, decisions, build order, deferred items | Claude | Phase 0, updated at every gate |
| `content/` | Your source material: CV, briefs, copy, photos to process | You | Before Phase 1; never published |

Add to `.gitignore`: `node_modules/`, `dist/`, `.claude/skills/impeccable/scripts/bin/` (a 19 MB binary that re-downloads), `.impeccable/live/`, `.playwright-cli/`, `screenshots/`.

Don't create empty PRODUCT.md or DESIGN.md files yourself. Impeccable checks DESIGN.md to decide whether a design already exists, and its docs explain that DESIGN.md is recorded from what was built, because rules written before the build get defended against reality.

**CLAUDE.md template** (copy into every project):

```markdown
# Project: [name]

## Read first
PROGRESS.md (where we are), then PRODUCT.md (facts), REFERENCES.md, the Impeccable surface brief
(direction), SCROLL_SCRIPT.md (motion plan), DESIGN.md once it exists. Ask if they conflict.
Read only the playbook section PROGRESS.md names, never the whole playbook.

## Autopilot
- Run the current phase end to end; stop only at gates that need taste or facts. One short report.
- Decide reversible things yourself and report them. Ask only about content, taste, anything
  irreversible, accounts or money. When the user reports a bug, fix it directly.
- New copy states only facts from PRODUCT.md; show new sentences in the report.
- Motion level: [1 | 2 | 3].

## Stack (no alternatives)
Next.js 16 App Router, Tailwind, GSAP + ScrollTrigger + SplitText + Flip + @gsap/react,
Lenis (one instance on gsap.ticker), Motion for hover/menus only.
Use Context7 for current API docs before writing library code.

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
- Real copy from PRODUCT.md. No lorem ipsum, invented stats or fake testimonials.

## Verify before reporting
1. Dev server answers (curl it) before any screenshot. In dev, window.lenis is exposed.
2. playwright-cli at 1440px and --device="iPhone 15"; no element past the viewport at 320/375/768px.
3. For each seam: eval "lenis.scrollTo(Y,{immediate:true})", wait 2 frames, screenshot at 25/50/75%.
4. Interaction smoke test: scroll down AND back up through every scrubbed moment; move the mouse
   across nested hover targets; open and close the phone menu; click every primary action and
   check what the user sees (a mailto link alone does nothing without a mail app).
5. Console clean (no GSAP "target not found" warnings); every href="#x" resolves.
6. Reduced motion (set-reduced-motion reduce): everything visible, nothing moving.
7. Report what changed and which feel checks still need a real phone.

## Checkpoints
Commit after every passed gate: git commit -m "gate N: [phase]" (improve mode: "improve N: [step]",
and one commit per polish fix).
```

## Never generic: how variety is built in

A model gives the average answer to an average input. Results differ only when the inputs differ, so the workflow makes six inputs unique to each project.

| Lever | What makes it unique | Lives in |
| --- | --- | --- |
| Product truth | Real audience, offer and facts, plus the visitor's job: decide, use, read or explore | `PRODUCT.md` |
| Direction | Impeccable deals a hand of human-reviewed visual directions weighed against your product; you pick or re-roll | Impeccable surface brief |
| References | Fit references from your field plus wildcards from unrelated fields | `REFERENCES.md` |
| Signature move | One thing a visitor would describe to a friend; strongest when it ends on the main action | `CLAUDE.md` |
| Hero asset | A visual nobody else has: your photos, a generated video loop, a 3D model, a shader | `public/` |
| Banned defaults | Impeccable's detector plus your list | `CLAUDE.md` + Impeccable hook |

Three habits:

- **Mix, never clone.** Layout from one reference, motion from another, type from a third.
- **Diverge, then converge.** Use `/impeccable generate 3 variants of [element]` on the static hero and pick in the browser. Picking is fast; describing is slow.
- **Mockup first when you can.** Impeccable's comp-first path renders a full mockup and builds toward it; its docs say this composes bolder than code-first. Automatic comp-first needs an image generator Impeccable can call (Claude Code has none built in; the fallback is a paid OpenAI API key). Without one, do it by hand: make a mockup of the key screen in any image tool, or ask Claude in the Claude app for a visual design, save it as references/hero-mockup.png, and tell Claude Code to build toward it (prompt P5-Comp). The mockup decides the look; SCROLL_SCRIPT.md still decides the motion.

## Hero asset: where the "wow" comes from

On cinematic sites, one strong visual does more than any prompt; it's most of what sites like MotionSites sell. Choose it in Phase 3, right after the direction, and have it in `assets/` before the hero is built. Without one, a Level 3 site comes out clean but not cinematic.

| Asset | Where to get it | Best for | Prepare it |
| --- | --- | --- | --- |
| AI video loop | Image-to-video AI tools (for example Runway, Kling or Google Veo; check current pricing and usage rights). Start from a still that matches the direction; 5-10 s, seamless loop, no text | Atmospheric heroes, product mood, scroll-scrubbed sequences | Compress to H.264 and WebM, a few MB at most, plus a poster image. For scroll-scrub, encode all keyframes (`ffmpeg -g 1`) or export WebP frames |
| Stock video | Pexels or Mixkit (free; check each license) | Real footage, fast | Same as above |
| 3D model | [Poly Haven](https://polyhaven.com) (CC0, free), Sketchfab (license varies per model), Spline community | A rotating or interactive centerpiece | gltf-transform (Draco or Meshopt), textures to KTX2 or WebP, a few MB at most |
| Code-built visual | Claude writes a WebGL shader, particle field or R3F scene | No asset available; abstract or tech brands | Follow the 3D rules, with a poster fallback |
| Real photography | The client | Restaurants, people, places: nothing beats real | AVIF or WebP, fixed aspect ratios |

**Rules:** one hero asset that fits the direction, not a pile of effects. Every asset gets a rights check in ASSETS.md; on an existing site, audit what's already there (the first run found unlicensed film footage on the live page). A lighter version or poster for phones. Check the license, and never take assets from another site. Decide in the scroll script how scroll uses it: scrubbed, scaling into the next chapter as the continuity carrier, or fixed behind the page.

### Finding assets: you, Claude, or both

Every project has an `ASSETS.md` in its kit: each asset's file, source link, license, whether credit is required, and where it's used. Assets reach it two ways, and most projects mix them:

- **You provide:** drop files into `assets/` (client photos, a video you generated, a model you bought) and say what they are. Claude adds them to ASSETS.md and prepares them.
- **Claude finds:** Claude searches the sources below for the direction, returns a shortlist of 3-5 options per need with links, license, preview screenshot and file size, and you pick. Claude downloads what the source allows directly (Poly Haven, for example); for sites that need a sign-in or have no direct link, it gives you the link to download into `assets/`.

**Curated sources** (free unless noted; always confirm each item's license):

| Need | Sources |
| --- | --- |
| Video loops | [Pexels Videos](https://www.pexels.com/videos/), [Mixkit](https://mixkit.co), [Coverr](https://coverr.co) |
| AI-generated video (paid) | Runway, Kling, Google Veo: start from a still that matches the direction |
| 3D models | [Poly Haven](https://polyhaven.com) (CC0), [Sketchfab](https://sketchfab.com) (filter for downloadable and Creative Commons), [Spline community](https://spline.design) |
| Textures and HDRI lighting | [Poly Haven](https://polyhaven.com), [ambientCG](https://ambientcg.com) (CC0) |
| Photos | [Unsplash](https://unsplash.com), [Pexels](https://www.pexels.com) |
| Icons | [Lucide](https://lucide.dev), [Phosphor](https://phosphoricons.com) |
| Fonts | [Google Fonts](https://fonts.google.com), [Fontshare](https://www.fontshare.com) (free for commercial use) |
| Effects to learn from | [Codrops](https://tympanus.net/codrops), [Made With GSAP](https://madewithgsap.com) (techniques, not assets to copy) |

For client or commercial sites, never use NonCommercial (NC) licenses. Free stock is used by thousands of sites, so it can look generic; prefer AI-generated or client material for the hero, and stock for supporting pieces. Real client material always beats stock. Use stock and generated assets where the client has none, and mark in ASSETS.md which ones should be replaced by real photography later.

**P-Asset · Find and prepare assets**

```markdown
Create or update ASSETS.md. Assets I've provided are in assets/: [list, or "none"].
For what's still missing ([hero video loop | hero 3D model | textures | photos | icons]),
search the playbook's curated sources for options that fit the locked direction.
Give me 3-5 options per need: link, license, credit required, preview screenshot, size.
After I pick: download what's allowed (or give me the links), prepare each for the web per
the hero asset rules (compressed desktop and mobile versions, poster image, [all-keyframe
video | WebP frames | compressed GLB]), record everything in ASSETS.md, and report sizes.
If nothing fits, propose 3 code-built options instead.
```

## References: fit plus wildcards

Claude gathers, screenshots and explains; you choose. The scout returns two pools, because the best ideas often come from outside your field:

- **Fit references:** sites that serve a similar audience and purpose. They show what works and what visitors expect.
- **Wildcards:** sites from unrelated fields (fashion, museums, games, editorial, architecture, music) chosen for one transferable idea: a scroll mechanic, a typographic gesture, a pacing. Each comes with a one-line translation, such as "a fashion lookbook's horizontal scroll becomes our product-feature tour."

You keep three: usually two fit references for layout and type, and one wildcard for motion or the signature move. The wildcard is what stops a fintech site from looking like every fintech site.

Save as `~/.claude/agents/reference-scout.md` so every project can use it:

```markdown
---
name: reference-scout
description: Finds and documents website references for a brief, from the same field and from unrelated fields. Use before design work.
tools: WebSearch, WebFetch, Bash, Read, Write
skills: playwright-cli
---
You are a senior art director's researcher.
Input: PRODUCT.md and the user's brief.

1. FIT (4-5 sites): live sites with a similar audience and purpose, from Godly,
   Awwwards, Land-book and recent award winners.
2. WILDCARDS (3-4 sites): sites from unrelated fields (fashion, museums, games,
   editorial, architecture, music, Made With GSAP, Codrops demos) with ONE idea that
   could transfer. For each, write the translation: "X becomes Y on our site".
3. For every site, with playwright-cli (run playwright-cli --help first): screenshot
   the hero at 1440px, one transition mid-scroll, and mobile. Save to references/<name>/.
4. Write REFERENCES.md: URL, pool (fit | wildcard), best role (layout | motion |
   type-color | signature), what to take, likely technique, what NOT to copy.
5. Find one tutorial or official demo for the most promising technique.

Rules: references teach structure and motion. Never copy code, copy, images, logos or
brand assets. If a site blocks automated browsing, skip it. Don't start design work.
Return the shortlist with a one-line pitch per site.
```

Technical sources are automatic too: Context7 fetches current library docs while Claude codes, and the GSAP and Emil skills carry the best practices.

## Scroll choreography: how sections merge

Sites that flow are designed as one continuous film cut into chapters. Every chapter's exit is the next chapter's entrance, planned before any code. Sections that don't merge were built one at a time, each with its own fade-up, with nothing crossing the boundary.

### Six principles

1. **Storyboard first.** `SCROLL_SCRIPT.md` lists chapters, scroll length, what moves, and how each hands off.
2. **The outgoing chapter owns the seam.** The last 20-30% of a chapter's master timeline performs the transition and also animates the incoming chapter's first elements. The incoming chapter's own trigger starts after the seam. One timeline, no overlap fights.
3. **Carry something across.** Each seam needs a continuity carrier: a background that blends, an element that stays fixed and changes, an image that grows into the next section, a line that keeps drawing, the 3D object.
4. **Scrub for story, trigger for details.** Story beats follow the scroll and reverse; small reveals play once. Mixed at random, it feels broken.
5. **One scroll owner.** Lenis on GSAP's ticker, ScrollTrigger updated on Lenis scroll. One master timeline per pinned chapter, no pins inside pins, triggers created top to bottom (or set `refreshPriority`).
6. **Stable layout.** Fixed media aspect ratios, `ScrollTrigger.refresh()` after fonts and media load, `ignoreMobileResize` and `svh` units so pins don't jump when the phone's address bar moves, `markers: true` while building.

### Pattern library

| Pattern | What you see | How it's built | Watch out |
| --- | --- | --- | --- |
| Pinned chapter | Section holds while its content changes | `pin: true`, scrubbed timeline, `end: "+=200%"` | 150-300% is typical; longer feels stuck |
| Stack / overlap | Next section slides over the previous, which shrinks and dims | Previous `position: sticky` (or pinned with `pinSpacing: false`), next above it; scrub previous to scale 0.92 and dim | Rounded corners and shadow on the incoming panel sell the depth |
| Shared element | Hero image becomes a card in the next section | GSAP Flip between two positions, or one fixed-layer element moved between them | Measure after layout settles |
| Mask reveal | Next chapter opens through a growing circle or slit | Scrub `clip-path: circle()` or `inset()` on the incoming section | clip-path, not width or height |
| Color continuity | Background melts from dark to light | Tween `backgroundColor` of one fixed full-screen background element; flip text color in the same tween | Not a CSS variable on `body`: that restyles the whole page every frame |
| Horizontal track | Vertical scroll moves a row sideways | Pin wrapper; tween `x: () => -(track.scrollWidth - innerWidth)` with `ease: "none"` and `invalidateOnRefresh: true`; inner triggers use `containerAnimation` | Inner triggers can't pin or snap; swap to swipe on mobile |
| Text scrub | Words light up or lines slide as you read | `SplitText.create` with `autoSplit`, scrubbed stagger on opacity or y | Return the animation from `onSplit` so re-splits stay in sync |
| Scroll-synced sequence | Product rotates or assembles as you scroll | Canvas drawing preloaded WebP frames by progress (Apple's method), about 60-150 frames, fewer on mobile | Video `currentTime` only with all-keyframe encoding (`ffmpeg -g 1`), or Safari stutters |
| Simple reveals | Small fades as items enter | CSS `animation-timeline: view()` in `@supports` | No Firefox; content must look right without it |

### Motion bugs that look fine in screenshots

All of these shipped in the first run and were caught by the user, not by screenshots:

- **Scrubbed tween on an element with a load intro:** `gsap.to()` records the pre-intro value (opacity 0) as its start, so scrolling back up hides the element. Use `fromTo` with explicit start values and `immediateRender: false`.
- **`gsap.context(fn, el)` scopes selector strings to `el`:** a trigger of `'#home'` inside the `#home` context, or a fixed canvas outside it, silently isn't found. Pass element references; keep global targets outside the context.
- **Flash before the intro:** hide intro targets with a class set by an inline head script (skipped under reduced motion) and a 3-second safety timeout that reveals everything if the module fails.
- **Custom cursor hover flicker:** per-element `mouseenter`/`mouseleave` toggles off and on across nested targets. Use one delegated `pointerover` with `closest()`.
- **Custom cursor ring that jumps on hover:** a CSS `scale` on an element positioned with `transform` multiplies the translation too. Put the scale inside the same transform string. Verify by measuring where the ring lands, not just that the hover class is set.
- **Hidden frame costs:** `backdrop-filter` over an animated canvas re-blurs every frame; a cursor moved with `left/top` lays out every frame; `transition: all` animates layout. Use transforms and explicit properties.
- **Lock the signature after the re-critique, not before:** in the first run the drafted signature (particle gravity) was too faint to carry the page; a line that ends on the main action replaced it.

### SCROLL_SCRIPT.md template

```markdown
# Scroll script
Scroll owner: Lenis + ScrollTrigger. Continuity carrier: [the orange orb, always fixed]

## Ch1 Hero (100svh, not pinned)
On load: headline splits in by line, 0.8s, power3.out. Video loops.
Exit seam (owned by Ch1, last 30%, scrub): video scales to 0.6, corners round to 24px,
Ch2 headline starts rising.

## Ch2 Product (pinned, +=250%)
0-40%: card 1 in from right. 40-70%: card 2 stacks over card 1, card 1 dims.
Exit seam (70-100%): fixed bg layer #0B0B0B -> #F2EFE9, text flips dark, Ch3 slides over.

## Mobile (<768px)
No pins. Each chapter: one triggered fade-up. Video becomes a poster image.

## Reduced motion
No scrub, no pins. Final states shown. Lenis smoothing off (its default).
```

## 3D scroll sites

Sites that feel effortless use the cheapest tier that achieves the effect. Choose by what the visitor must do with the 3D, not by what's impressive to build.

| Tier | Technique | Use when | Cost |
| --- | --- | --- | --- |
| 1. Baked 3D | Pre-rendered frames or video scrubbed by scroll; CSS 3D transforms for tilting cards | The object only rotates, assembles or follows a fixed path | Lowest; works on every phone |
| 2. Spline | Scene designed visually, embedded, driven from code | One hero object reacting to cursor or a few scroll beats | Medium; heavy runtime, one scene max |
| 3. Real-time R3F | React Three Fiber + drei | Free interaction, or 3D merged into the page layout | Highest; needs the rules below and a fallback |

### Tier 3: pick one scroll model

| Model | Use for | Scroll ownership |
| --- | --- | --- |
| Fixed canvas + GSAP | A 3D object behind a normal page | Normal Lenis + ScrollTrigger; a scrubbed timeline animates camera and model |
| [r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig) | Meshes that sit in the layout (rippling images, objects in a grid) | Its `SmoothScrollbar` is the only Lenis: remove the Phase 0 Lenis, sync ScrollTrigger from its scroll callback |
| drei `ScrollControls` | The whole site is a 3D world with text on top | No Lenis, no ScrollTrigger: read `useScroll().offset` in `useFrame`, optionally to drive a paused GSAP timeline's `progress()` |

r3f-scroll-rig's last release was December 2024. Test it on your exact Next.js, React and R3F versions before committing a project to it.

### Rules for any real-time 3D

- One canvas per site: browsers cap how many WebGL contexts run at once.
- Compress models with gltf-transform (Draco or Meshopt); textures to KTX2 (needs `KTX2Loader` with its transcoder) or WebP. A few megabytes at most.
- Clamp pixel ratio to `[1, 2]`. With `frameloop="demand"`, call `invalidate()` in your GSAP timeline's `onUpdate`, or the scene freezes while scrolling.
- Brand colors: `toneMapped={false}` on those materials; color textures in sRGB.
- Poster image while loading and as fallback. On phones and low-power devices serve tier 1; the scroll-rig authors call scrolling WebGL on mobile usually laggy.

A strong first 3D site: a tier 1 hero (a rendered or generated product loop scrubbed by scroll) plus exactly one tier 2 or 3 moment.

## The routine: ten phases, one gate each

Same order every project. Don't start a phase until the previous gate passes, and commit at every gate so you can always roll back. Phases 0-4 are decisions (about an hour or two); 5-9 are building.

**First decide the motion level with the client;** it sets how much of the process applies. The quality process is the same at every level.

| Level | What the visitor gets | What changes in the phases |
| --- | --- | --- |
| 1 Simple | Clean layout and type, subtle hovers and fades, no scroll story | No Lenis, no SCROLL_SCRIPT.md (Phase 4 is one line), Phase 6 builds sections, 3D skipped |
| 2 Polished | Smooth scroll, a few scroll moments, one signature move, no pins | Short scroll script: the moments, one carrier, seams only where a moment needs one |
| 3 Showcase | Full choreography: sections hand off, elements travel between sections, pinned chapters, a hero asset, maybe 3D | Everything below, including the pattern library and 3D tiers |

Level 2 reads as "clean, with nice effects"; if the client describes sites where "the sections fit into each other while you scroll", that's Level 3. Ask with an example of each.

**Content before the brief.** Put the CV, brief and real copy in `content/` before `/impeccable init`. In the first run the interview came first, and PRODUCT.md had to be rewritten when the CV showed a job the site didn't mention. Check CV facts against confidentiality (client names, internal systems) before they reach the page.

**Critique budget.** A full `/impeccable critique` runs two sub-agents and is expensive. Run it at the baseline (existing sites), once after polish to measure the change, and at P8. In between use `npx impeccable detect`, which is free. If a sub-agent fails to launch, retry once.

| # | Phase | What happens | Tool | Gate: done when |
| --- | --- | --- | --- | --- |
| 0 | Setup | Terminal setup, then kit files and Lenis | Terminal block + P0 | Dev server runs; Claude lists impeccable, playwright-cli, shadcn |
| 1 | Brief | Answer Impeccable's product questions | `/impeccable init` | PRODUCT.md is true and names one main action |
| 2 | References | Scout returns fit and wildcard pools; you keep 3 | P2 | Three refs, each with a role |
| 3 | Direction | Pick from Impeccable's hand of directions; choose and prepare the hero asset (P-Asset) | P3 (`/impeccable shape`) | Direction locked in the surface brief; signature move in CLAUDE.md; hero asset ready and licensed in assets/ (Level 3) |
| 4 | Scroll script | Claude drafts the storyboard; you edit | P4 | Every seam has an owner and a carrier |
| 5 | Hero | Static hero, three variants, pick, then its seam; first Vercel preview | P5 | "Oh damn" on desktop and on your real phone |
| 6 | Chapters | One chapter plus its exit seam at a time; `/clear` between | P6 | Mid-seam screenshots look intentional |
| 7 | Motion pass | Timing, easing, frame drops, phone feel | P7 | Smooth on your real phone; reduced motion clean |
| 8 | Quality | Record DESIGN.md, critique, audit, harden | P8 | Detector at 0, or each remaining finding ignored on purpose with a reason |
| 9 | Launch | SEO, metadata, social image, performance, publish only the build | P9 | Live; Core Web Vitals in the good range; the published folder holds only the site |

**Phase 0 terminal block** (in the folder where projects live):

```bash
npx create-next-app@latest my-site --ts --tailwind --app --eslint
cd my-site
npm i gsap @gsap/react lenis motion
npx shadcn@latest init
npx shadcn@latest mcp init --client claude
npx impeccable install --project --providers=claude-code -y   # flags needed when Claude runs it
playwright-cli install --skills
git init && git add -A && git commit -m "gate 0: scaffold"
claude
```

**Stuck?** Don't repeat the ask. Run `/impeccable critique`, or name the exact problem with P-Fix. Still wrong: go back one phase (`git` makes it free). The bug is usually in a decision, not the code.

## Prompt library

Each prompt points at the kit files instead of re-describing taste, sets hard constraints, and ends with a self-check. Consistency comes from the prompts; uniqueness comes from the files. Fill the brackets, paste.

**P0 · Kit and scroll setup** (after the terminal block)

```markdown
Create CLAUDE.md from the template I paste below, plus REFERENCES.md, SCROLL_SCRIPT.md
and a references/ folder. Don't create PRODUCT.md or DESIGN.md; Impeccable writes those.
Set up smooth scroll in one 'use client' provider in the root layout:
ReactLenis root with autoRaf: false; gsap.ticker.add(t => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0); lenis.on('scroll', ScrollTrigger.update);
register ScrollTrigger, SplitText, Flip and useGSAP once here; expose window.lenis in dev.
Check current APIs with Context7. Run the dev server, then commit "gate 0".
[paste CLAUDE.md template]
```

**P2 · References**

```markdown
Use the reference-scout agent. Brief: [what it is, for whom, the feeling].
I want fit references from similar sites and wildcards from unrelated fields.
Return the shortlist; I'll pick three.
```

**P3 · Direction**

```markdown
/impeccable shape the landing page. Read PRODUCT.md and REFERENCES.md.
Borrow layout from [ref A], type and color from [ref B], and [the idea] from wildcard [ref C];
copy none of them. Show me the directions.
After I lock one, add this to CLAUDE.md under Signature move: [one sentence].
```

**P4 · Scroll script**

```markdown
Draft SCROLL_SCRIPT.md from the locked direction and the motion reference, in the template format.
Rules: one continuity carrier; each exit seam owned by the outgoing chapter's last 20-30%;
pins 150-300%; no nested pins; a mobile and a reduced-motion version for every chapter.
Patterns allowed: pinned chapter, stack, shared element, mask reveal, color continuity,
horizontal track, text scrub, scroll-synced sequence. No code yet. One line per seam.
```

**P5 · Hero**

```markdown
Build Chapter 1 from SCROLL_SCRIPT.md as a static layout first, no scroll animation.
Hero asset: [public/hero.mp4 | named component | 3D scene]. Copy from PRODUCT.md.
Verify per CLAUDE.md, then stop so I can run /impeccable generate on it.
```

Then: `/impeccable generate 3 variants of the hero` (keep `npm run dev` running; pick in the browser). Then:

```markdown
Now add Chapter 1's load animation and exit seam exactly as scripted.
Verify the seam at 25/50/75% per CLAUDE.md. Push to GitHub so I get a Vercel preview.
```

**P5-Comp · Build toward a mockup** (optional, for redesigns; replaces the first P5 prompt)

```markdown
Build Chapter 1 toward references/hero-mockup.png as a static layout, no scroll animation.
Match its layout, scale, spacing and type hierarchy; use real copy from PRODUCT.md;
follow CLAUDE.md, including the banned defaults. Where the mockup is unclear
(hover states, mobile, exact fonts), choose what fits the direction and tell me.
Screenshot your result next to the mockup and list the differences before fixing them.
```

**P6 · Each chapter** (`/clear` first)

```markdown
Read the kit files. Build Chapter [N] and its exit seam into Chapter [N+1] per SCROLL_SCRIPT.md.
Don't change earlier chapters. One master timeline for this chapter.
Verify the entrance from Chapter [N-1] and the exit seam at 25/50/75%, desktop and phone.
Report what you built and which patterns, with screenshots. Commit "gate 6: ch[N]".
```

**P7 · Motion pass**: Claude runs Emil's skills itself (through the Skill tool) and reports once; you do the feel-tuning afterwards:

```markdown
/review-animations Review all motion in app/ and components/. Scrubbed ScrollTrigger
timelines are exempt from duration rules; judge their easing and pacing only.
```

Then:

```markdown
Apply the review. Then use improve-animations, animation-performance and mobile-native.
Transform, opacity and clip-path only; Lenis and ScrollTrigger in sync. Verify reduced motion
and phone per CLAUDE.md. Fix the top five issues and list the rest.
```

**Feel-tuning rounds** (Level 2-3, after P7): watch the site on your real phone, then give two or three rounds of specific feedback naming the seam, what feels wrong and what you want, for example "The Ch2 to Ch3 stack feels abrupt: start the scale-down earlier and make it slower." Screenshots can't judge timing; this is where award-level feel comes from. Stop when nothing bothers you.

**P8 · Quality**

```markdown
/impeccable document to record DESIGN.md from what's built.
Then /impeccable critique, then /impeccable audit, then /impeccable harden.
Fix every P0 and P1. Remove dead CSS (compare CSS class selectors with the markup and JS),
replace icon fonts with inline SVG, consolidate near-duplicate font sizes into one ramp and record it.
Re-run the detector: 0 findings, or tell me each remaining one and why it should be ignored.
Run the interaction smoke test from CLAUDE.md. Report once with before/after numbers.
```

**P9 · Launch**

```markdown
Run seo-audit and schema. Add metadata, Open Graph image, sitemap and robots.
Record a performance trace of the home page with 4x CPU throttling (Chrome DevTools MCP),
fix what hurts LCP or causes layout shift. Check every asset is licensed (ASSETS.md).
Make sure the host publishes only the build folder, then walk me through deploying.
```

**P-Fix · Feedback that works**

```markdown
Only these changes, nothing else:
1. [What's wrong + where]: [what right looks like, with a number if possible]
Keep everything else identical. Screenshot before and after.
```

## Improving a site you already built

Yes, the playbook works on existing sites, and it's the fastest way to learn it because product, content and structure already exist. The difference is that you measure first and choose between polishing and redesigning.

1. **Protect it.** Commit everything and work on a branch: `git checkout -b redesign`.
2. **Set up.** Run the per-project lines of the Phase 0 block that apply (Impeccable with its flags, `playwright-cli install --skills`, shadcn only for React projects; Vite for a plain HTML site). Add CLAUDE.md and PROGRESS.md, adjusting the stack lines to what the site really uses. Check how the host deploys: if it serves the repo root, set up a build folder before anything merges.
3. **Record what exists.** Put the CV and current facts in `content/` first, then `/impeccable init` (it asks only what it can't infer) and `/impeccable document`. Then reconcile CLAUDE.md's banned defaults with the recorded DESIGN.md: decide each conflict once, in both files.
4. **Get a baseline.** `/impeccable critique` already includes the detector, screenshots and a ranked list: ask it for the top 10 problems and for polish vs redesign in the same run. Add an asset audit (ASSETS.md with licenses) and the motion level.
5. **Decide.** Polish keeps the identity. Redesign means Phases 2-4: new references, a new direction, a scroll script.
6. **Polish by section, not by problem type.** The critique groups problems by type, but fixes land by section (the hero fix absorbs the gradient, the kicker and the status line). Content and section labels are one fix, and content always comes first. Run the fixes without stopping, detector after each, then re-critique once to measure.
7. **Retrofit motion.** Write SCROLL_SCRIPT.md for the cleaned-up page at the agreed level, then build it (P6), then P7 and P8. Most old sites improve most from three things: one continuity carrier, owned exit seams, and Lenis.

**Improve-mode traps from the first run:**

- Old global overrides cause new bugs: grep for `!important` in media queries before resizing anything.
- Inline scripts couple markup and behaviour: grep an element's id before deleting it.
- Renaming a section id breaks every `#link` to it: check all anchors resolve after a rename.
- The phone page gets longer while content is added and shorter only at the adapt fix; measure section heights with one script to find where the length comes from.
- Fixed decorative navs placed before the header put dozens of tab stops before the main nav: put them after it in the markup.
- The Impeccable design hook repeats every old finding after each edit and goes quiet after 6 edits; run the detector once per fix instead of reacting to the hook.

Not built with Next.js? GSAP and Lenis work on plain HTML (see the vanilla variant), Webflow, WordPress and other frameworks. Don't migrate just to follow the playbook; change the stack lines in CLAUDE.md instead.

**Ground-up redesign instead of polish:** start a new project through Phase 0, copy over PRODUCT.md, CLAUDE.md, PROGRESS.md and `content/` (not DESIGN.md: the new direction gets its own), and keep the old site live until the final gate.

## Definition of done

- [ ] A stranger can say what the site offers within five seconds.
- [ ] One signature move, obvious.
- [ ] Detector clean, or every remaining finding ignored on purpose.
- [ ] Every seam screenshotted mid-transition and looks intentional.
- [ ] Smooth on your real phone, not only your laptop; no pin jumps when the address bar moves.
- [ ] Mobile has its own simpler motion; reduced motion shows clean final states.
- [ ] No layout shift while media loads.
- [ ] Interaction smoke test passed: scroll back up through every moment, nested hovers, phone menu, every primary action gives visible feedback.
- [ ] Every asset licensed in ASSETS.md; the published folder holds only the site.
- [ ] All copy and numbers are real.
- [ ] Metadata, social image, sitemap; Core Web Vitals good.

## Honest limits

This workflow will reliably lift you from "prompted until decent" to consistently strong, distinctive sites. It won't hand you award winners on day one. Here's what it can't do and what that means for you.

- **It has been run once, in improve mode.** v3 folds in a full improve-mode run on a vanilla HTML portfolio (baseline 15/32 to 24/32 after polish, detector 35 findings to 0). The from-scratch path (Phases 0-5) and Level 3 choreography still need their first real run; keep notes as you go.
- **Claude's checks miss interaction feel.** Every bug the user found in the first run (a line that vanished after scrolling back up, a flickering cursor, an email button that did nothing without a mail app) passed the screenshots. The interaction smoke test narrows that gap; your real phone closes it.
- **Taste is still yours.** The tools prevent bad defaults and offer good options. Choosing between them, and the last 10% of feel, is your eye. It improves with each project.
- **The hero asset sets the ceiling.** Without a distinctive photo, video loop or 3D model, the result is clean but not memorable. Budget real time for it.
- **Claude's screenshots catch layout, not feel.** Easing and smoothness are judged by you, on a real phone.
- **Award sites take studios weeks** of motion design and custom WebGL. This gets you a strong version fast; deeper effects (custom shaders, complex 3D) need practice and the 3D add-ons.
- **Quality costs time and tokens.** In one public head-to-head, Impeccable took 24 minutes and $7.49 for a page another skill made in 7 minutes for $2.28, and its page was the bolder, more memorable one. Phases 0-4 feel slow; they're where the quality comes from.
- **The tools move fast.** Re-check this page's commands every two or three months (`npx impeccable update`, the repos' READMEs).

## Turning this into a skill, and using it from now on

Build the skill after one real project, not before. A skill written from a plan encodes guesses; one written after a project encodes what worked.

**When you're ready:** put this file in a folder and ask Claude Code: "Use skill-creator to turn this playbook into a skill called site-studio, with this layout, adding my notes from the last project."

```text
~/.claude/skills/site-studio/
  SKILL.md              # when to use, the ten phases and gates (short)
  templates/            # CLAUDE.md, PROGRESS.md, SCROLL_SCRIPT.md, REFERENCES.md, ASSETS.md
  references/
    scroll-patterns.md  # principles + pattern library
    3d-tiers.md         # tiers, scroll models, rules
    anti-generic.md     # levers, banned defaults
    existing-site.md    # the improve-a-site flow and its traps
    vanilla.md          # the plain HTML/CSS/JS variant
    verification.md     # verify steps, interaction smoke test, motion bugs screenshots miss
    workflow.md         # autopilot, gates, decision rule, working style
  prompts/              # P0-P9, P-Fix
~/.claude/agents/reference-scout.md
```

SKILL.md stays short and points to the reference files, so Claude loads scroll or 3D guidance only in the phase that needs it. The skill orchestrates; Impeccable, GSAP and Emil's skills keep doing the specialist work. Don't copy their content in, or the copies go stale when those projects update.

**How you'll use it:**

- **New site:** run the Phase 0 block, then tell Claude "Start site-studio for [brief]." It walks the phases and stops at each gate for you.
- **Existing site:** "Run site-studio in improve mode on this project."
- **After each project:** spend ten minutes telling Claude what went wrong and ask it to update the skill. That loop is what makes it better than anything you could buy.

## Sources

- [Impeccable on GitHub](https://github.com/pbakaus/impeccable) and [Designing with Impeccable](https://impeccable.style/designing)
- [GSAP AI skills (official)](https://github.com/greensock/gsap-skills)
- [Emil Kowalski skills](https://github.com/emilkowalski/skills)
- [Playwright CLI](https://github.com/microsoft/playwright-cli) and [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Context7 for Claude Code](https://context7.com/docs/clients/claude-code)
- [shadcn MCP server](https://ui.shadcn.com/docs/mcp)
- [Lenis](https://github.com/darkroomengineering/lenis)
- [r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig)
- [three-agent-skills](https://github.com/emalorenzo/three-agent-skills)
- [Marketing Skills](https://github.com/coreyhaines31/marketingskills)
- [Figma MCP setup for Claude Code](https://help.figma.com/hc/en-us/articles/39888612464151-Claude-Code-and-Figma-Set-up-the-MCP-server)
- [Chrome DevTools MCP](https://claudelog.com/claude-code-mcps/chrome-devtools-mcp)
- [Impeccable vs Taste Skill, tested](https://dev.to/skillgild/impeccable-vs-taste-skill-which-claude-design-skill-to-use-tested-3d6i)
- [Best-regarded frontend design skills](https://ruoqijin.com/blog/frontend-design-skills-ai-agents)
- [Skills vs MCP vs plugins: context cost](https://www.morphllm.com/claude-code-skills-mcp-plugins)
- [CSS scroll-driven animations status](https://www.buildmvpfast.com/blog/css-scroll-driven-animations-replace-js-2026)
- [Codrops: seamless scroll with GSAP and Lenis](https://tympanus.net/codrops/2026/05/28/the-never-ending-story-building-a-seamless-infinite-scroll-experience-with-gsap-lenis/)
- [MotionSites](https://motionsites.ai/)
