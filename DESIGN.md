---
name: Rodrigo Novelo
description: A cinematic sci-fi HUD portfolio, with gold and cyan instruments over a black-hole void.
colors:
  void: "#030304"
  void-deep: "#050505"
  gargantua-gold: "#c5a059"
  tesseract-cyan: "#5efce8"
  matrix-green: "#00FF41"
  breach-red: "#ff3333"
  starlight: "#f0f0f0"
  pure-white: "#ffffff"
  dust-grey: "#989898"
typography:
  display:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "clamp(2rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
  headline:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 400
    letterSpacing: "2px"
  body:
    fontFamily: "Space Mono, monospace"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.9rem"
    fontWeight: 700
    letterSpacing: "0.25em"
rounded:
  none: "0px"
  hairline: "2px"
  badge: "4px"
spacing:
  xs: "10px"
  sm: "15px"
  md: "20px"
  lg: "30px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "rgba(197, 160, 89, 0.05)"
    textColor: "{colors.pure-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.gargantua-gold}"
    textColor: "#000000"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.none}"
    padding: "15px 25px"
  button-secondary-hover:
    backgroundColor: "rgba(197, 160, 89, 0.1)"
  button-breach:
    backgroundColor: "transparent"
    textColor: "{colors.breach-red}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
  button-breach-hover:
    backgroundColor: "{colors.breach-red}"
    textColor: "#000000"
  nav-link:
    textColor: "{colors.dust-grey}"
  nav-link-hover:
    textColor: "{colors.gargantua-gold}"
  skill-pill:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    textColor: "#aaaaaa"
    rounded: "{rounded.hairline}"
    padding: "5px 12px"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.dust-grey}"
    rounded: "{rounded.none}"
    padding: "6px 14px"
  card-skill:
    backgroundColor: "rgba(15, 15, 20, 0.6)"
    rounded: "{rounded.none}"
    padding: "25px"
  card-module:
    backgroundColor: "rgba(20, 20, 25, 0.4)"
    rounded: "{rounded.none}"
    padding: "3rem"
---

# Design System: Rodrigo Novelo

## Overview

**Creative North Star: "The Event Horizon HUD"**

The site is an astronaut's heads-up display at the edge of Gargantua. A near-black void fills the screen, with a slow particle field and a radial vignette that darkens the edges like a gravity well. On top of it, thin-bordered instrument panels carry the content: gold readouts, cyan data signals, monospace telemetry. Its references are Interstellar (the quote, the video, the tesseract side nav) and The Matrix (a hidden mode that hides the content and fills the screen with falling green code).

The mood is cinematic. Type is wide and spaced out for headlines and monospace for everything else, so the whole page reads like instrument output. Labels are in uppercase system language ("SYSTEM ONLINE", "ARCHIVE ACCESS", "TEMPORAL LOG"). Density is low: each section takes a full viewport and the content sits inside a 1200px column with generous space around it.

Interaction is where the panels come alive. At rest they are dark, translucent glass. When the cursor arrives (a custom gold dot with a trailing ring), borders light up gold or cyan, panels lift a few pixels and coloured light spills out.

**Key Characteristics:**
- Void-black canvas with a live particle field and an edge vignette
- Syncopate for display, Space Mono for everything else
- Gold for action and identity, cyan for knowledge and data, green only in Matrix mode
- Square-cornered, hairline-bordered instrument panels
- Glass at rest, coloured glow on interaction
- Custom cursor on desktop, native cursor on touch

## Colors

A void-black base lit by three instrument colours, each with one job.

### Primary
- **Gargantua Gold**: the main accent. Used for action and identity: the primary CTA, nav hover, HUD labels, the active side-nav node, project-card hover borders, work-experience accents and the cursor dot. A 30% alpha version (`rgba(197,160,89,0.3)`) is the gold glow.

### Secondary
- **Tesseract Cyan**: knowledge and data. Used for skill-card hover, the publication card, education entries, the citation badge and the cursor ring on hover.

### Tertiary
- **Matrix Green**: the hidden channel. Only used for Matrix mode (rain canvas, toggle active state, cursor) and the "system online" status light.
- **Breach Red**: alarm. Used for the Matrix toggle at rest, the offline status and the blog scan line.

### Neutral
- **Void**: the page background and the base of every surface.
- **Void Deep**: the footer background, one step off the void.
- **Starlight**: default body text.
- **Pure White**: headings, the brand mark and button labels.
- **Dust Grey**: muted text, nav links at rest, tech tags and icons.

### Named Rules
**The One Job Rule.** Each accent means one thing. Gold is action and identity, cyan is knowledge and data, green is Matrix mode only, red is alarm only. Don't use cyan on a CTA or gold on an education entry.

**The Void Base Rule.** Every surface is the void plus transparency (`rgba(15,15,20,0.6)`, `rgba(20,20,25,0.4)`), never a lighter solid grey. Panels let the particle field show through.

## Typography

**Display Font:** Syncopate (with sans-serif)
**Body Font:** Space Mono (with monospace)

**Character:** Syncopate is wide, geometric and engineered, made for titles on a mission patch. Space Mono turns every paragraph into terminal output. Together they read as a spacecraft interface, not a document.

### Hierarchy
- **Display** (700, clamp(2rem, 5vw, 4rem), uppercase, 0.1em tracking): the hero name only. Filled with a moving grey-to-white shine gradient (`#666 → #fff → #666`, 5s loop).
- **Headline** (700, 3rem, 2rem on phones): section titles such as "TECHNICAL SKILLS" and "DEPLOYED WORK", in white.
- **Title** (400, 1.1–1.8rem, 2px tracking): card headers, timeline column headers, project names, the institution name.
- **Body** (400, 18px, line-height 1.6): paragraphs and descriptions in Starlight; Dust Grey for secondary copy.
- **Label** (700, 0.9rem, 0.25em tracking, uppercase): HUD lines such as "SYSTEM ONLINE // PORTUGAL", led by a 40px gold rule. Nav and buttons use a lighter version (0.8–0.9rem, 1px tracking, uppercase).

### Named Rules
**The Telemetry Rule.** If text isn't a headline, it's in Space Mono. Syncopate never sets a paragraph.

**The Slash Rule.** Labels separate their parts with `//` or `|` ("SYSTEM ONLINE // PORTUGAL", "WebDev | Networking | Cybersecurity"), never bullets or commas.

## Layout

One long single page. Sections are at least a viewport tall (`100vh`, `auto` on phones), with content centred vertically inside a 1200px column. Side padding is 40px on desktop, 25px at 1024px and 15px at 400px. Vertical padding is 80px per section (60px on phones).

Grids are fluid auto-fit: identity buttons use `minmax(200px, 1fr)` and skill cards use `minmax(250px, 1fr)`, both collapsing to one column at 768px. The timeline is a two-column split (education and work) under a centred video, stacking to one column on phones.

Fixed layers, from back to front: particle canvas, vignette, content, Matrix canvas, header, side nav, cursor. The header hides on scroll down (it slides up out of view). The diamond side nav (the "tesseract thread") sits 40px from the right edge and disappears at 1024px.

Breakpoints: 1024px (side nav off, smaller hero), 991px (custom cursor off), 768px (nav links hidden, single columns), 400px (tightest padding and type).

## Elevation & Depth

Hybrid: glass at rest, glow on interaction. Panels sit on the void as translucent dark glass, some with `backdrop-filter: blur(5–10px)`, so the particle field shows through. Panels don't cast shadows at rest. On hover they rise (`translateY(-3px to -5px)` or `scale(1.02)`) and give off coloured light in their accent.

### Shadow Vocabulary
- **Cyan lift** (`box-shadow: 0 10px 30px rgba(94, 252, 232, 0.1)`): skill-card hover.
- **Accent halo** (`box-shadow: 0 0 30px rgba(94, 252, 232, 0.15)` or the gold equivalent): timeline cards on hover.
- **Signal glow** (`box-shadow: 0 0 15px <accent>`): active states such as the Matrix toggle, the active side-nav node and the loading bar.
- **Void sink** (`box-shadow: 0 0 50px rgba(0,0,0,0.5–0.8)`): the video frame and the blog panel, which sit deeper in the void.

### Named Rules
**The Light-Not-Shadow Rule.** Elevation is shown with coloured light, not grey drop shadows. If a panel needs to come forward, it glows in its accent.

## Shapes

Square and engineered. Panels, cards and buttons have sharp 0px corners and 1px hairline borders (`rgba(255,255,255,0.08–0.15)`) that switch to an accent on hover. The few exceptions are small: skill pills at 2px, the citation badge at 4px, and the video frame rounded only on top (10px) like a projector housing. Circles appear only on lights: the status light, the cursor dot and ring, and the lock badge. Diamonds (squares rotated 45°) mark the side-nav nodes. Accent strips on the left or top edge (2–3px) tag a card's category: cyan for education and publication, gold for work.

## Components

### Buttons
Instrument switches: square, hairline-bordered, monospace uppercase.
- **Shape:** sharp corners (0px), 1px border, icon and label centred with a 15px gap.
- **Primary (Download CV):** gold border on a faint gold tint. On hover it fills solid gold with black text and black icon.
- **Secondary (LinkedIn, GitHub, Email):** faint white tint, white hairline, grey icon. On hover the border and icon turn gold, the tint turns gold and the button rises 3px.
- **Breach toggle (Matrix):** a red outlined switch in the header, 180px minimum width. On hover it fills red with a red glow. In Matrix mode it fills Matrix Green.

### Chips
- **Skill pill:** tiny 2px corners, faint white tint, grey text. They light up cyan when their card is hovered.
- **Tech tag:** square, bold 0.8rem grey text in a hairline outline. They turn gold when the project card is hovered.
- **Citation badge:** cyan outline, 4px corners, 0.75rem.

### Cards / Containers
- **Corner Style:** square (0px).
- **Background:** void glass, `rgba(15,15,20,0.6)` (skill), `rgba(20,20,25,0.4)` with 10px blur (project module) and `rgba(10,10,15,0.8)` with 5px blur (timeline).
- **Shadow Strategy:** none at rest; accent glow on hover (see Elevation & Depth).
- **Border:** 1px white hairline at 8–10% opacity; it switches to cyan or gold on hover.
- **Internal Padding:** 25px (skill and timeline cards), 3rem (project modules, 1.5rem on phones).

### Navigation
- **Header:** fixed, `rgba(3,3,4,0.85)` with 10px blur and a 5% white bottom hairline; it hides on scroll down. Brand "R // NOVELO" in Syncopate 700.
- **Links:** Space Mono 0.9rem, uppercase, 1px tracking, Dust Grey. On hover they turn gold and a 1px gold underline grows from the left. The Blog link sits in gold permanently.
- **Mobile:** links are hidden at 768px; only the brand and the Matrix toggle remain. There is no menu replacement.
- **Tesseract thread:** a fixed vertical hairline on the right with a diamond node per section. The active node glows gold and grows from 8px to 12px.

### Custom Cursor
A 6px gold dot with a 30px white-hairline ring that follows it. Over interactive elements, the ring grows to 50px and turns cyan with a faint cyan fill. In Matrix mode both turn green. Hidden at 991px and on touch devices.

### Hazard Panel (blog placeholder)
A dark glass box between two animated gold and black hazard-tape strips, with a pulsing shield icon, a gold lock badge, a red laser scan line, a looping gold loading bar and a blinking terminal underscore. It signals "locked, under construction" through the HUD language.

## Do's and Don'ts

### Do:
- **Do** set every surface as void plus transparency, and let the particle field show through.
- **Do** keep corners square (0px) on panels and buttons; 2–4px only on tiny chips and badges.
- **Do** use Gargantua Gold for action and identity, and Tesseract Cyan for knowledge and data (the One Job Rule).
- **Do** use the physics ease (`cubic-bezier(0.19, 1, 0.22, 1)`) for movement such as panels and the header.
- **Do** write labels in uppercase HUD language with `//` separators.
- **Do** use the `:root` tokens; the current hard-coded `#fff`, `#aaa`, `#666` and `#ff4444` (the breach button, which differs from `--error #ff3333`) are drift to fold back into tokens.

### Don't:
- **Don't** use grey drop shadows for elevation; use coloured light.
- **Don't** set paragraphs in Syncopate.
- **Don't** use Matrix Green outside Matrix mode and the status light.
- **Don't** round panels or buttons.
- **Don't** fill surfaces with solid lighter greys; they break the void.
