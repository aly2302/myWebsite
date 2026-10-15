---
name: Rodrigo Novelo
description: A quiet, cinematic portfolio on a black-hole void, with gold for action, cyan for knowledge and one gold line that carries you to the email.
colors:
  void: "#030304"
  void-deep: "#050505"
  black: "#000000"
  white: "#ffffff"
  gargantua-gold: "#c5a059"
  tesseract-cyan: "#5efce8"
  matrix-green: "#00FF41"
  breach-red: "#ff3333"
  starlight: "#f0f0f0"
  dust-grey: "#989898"
typography:
  display:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "clamp(2.2rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.2
  headline-sm:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
  title-lg:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.3
  title-sm:
    fontFamily: "Syncopate, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 700
    letterSpacing: "2px"
  lede:
    fontFamily: "Space Mono, monospace"
    fontSize: "clamp(1.1rem, 2vw, 1.4rem)"
    lineHeight: 1.5
  email:
    fontFamily: "Space Mono, monospace"
    fontSize: "clamp(1.15rem, 4.4vw, 3.4rem)"
  glyph:
    fontFamily: "system-ui"
    fontSize: "1.6rem"
  body:
    fontFamily: "Space Mono, monospace"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Space Mono, monospace"
    fontSize: "1rem"
  small:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.9rem"
  label:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.8rem"
    letterSpacing: "1px"
  micro:
    fontFamily: "Space Mono, monospace"
    fontSize: "0.75rem"
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
  section: "130px"
components:
  button-primary:
    backgroundColor: "rgba(197, 160, 89, 0.05)"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "15px 25px"
  button-primary-hover:
    backgroundColor: "{colors.gargantua-gold}"
    textColor: "{colors.black}"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.03)"
    textColor: "{colors.white}"
    rounded: "{rounded.none}"
    padding: "15px 25px"
  nav-link:
    textColor: "{colors.dust-grey}"
  nav-link-hover:
    textColor: "{colors.gargantua-gold}"
  tech-tag:
    backgroundColor: "transparent"
    textColor: "{colors.dust-grey}"
    rounded: "{rounded.none}"
    padding: "6px 14px"
  card-module:
    backgroundColor: "rgba(14, 14, 18, 0.82)"
    rounded: "{rounded.none}"
    padding: "3rem"
  card-education:
    backgroundColor: "rgba(10, 10, 15, 0.8)"
    rounded: "{rounded.none}"
    padding: "2rem"
  email-display:
    textColor: "{colors.white}"
    typography: "{typography.email}"
---

# Design System: Rodrigo Novelo

<!-- Re-recorded from the built site on 2026-10-15 (P8). The first version recorded the incumbent HUD
     site; this one records the polished site with Level 2 motion. -->

## Overview

**Creative North Star: "The Event Horizon"**

A black-hole void with a slow gold particle field and an edge vignette. Content sits on dark,
square, hairline-bordered panels and is written plainly: name, role, work, proof, contact. The
cinematic world now lives in the material (void, gold, cyan, wide display type, monospace) and in
the motion, not in sci-fi labels. Earlier versions used HUD language ("SYSTEM ONLINE"); that was
removed on purpose because recruiters had to decode it.

The page reads top to bottom as one argument: who he is, the job he does now, what he built, what
he knows, how to reach him. Density is calm: generous section spacing, a 1200px column, one primary
action per screen.

The signature is a **gold line**. It draws down the side rail as you scroll (a hairline across the
top on phones), lights each section's diamond, and ends by underlining the email address in
Contact. Everything else moves less than it.

**Key Characteristics:**
- Void-black canvas, gold particle field, edge vignette
- Syncopate for display and titles, Space Mono for everything else
- Gold = action and identity; cyan = knowledge and data; green = Matrix easter egg only
- Square, hairline-bordered panels with a thin top accent rule
- Coloured glow only on hover; flat at rest
- One signature motion (the gold line); section entrances differ from each other

## Colors

A void-black base lit by two accents with one job each.

### Primary
- **Gargantua Gold**: action and identity. The email button and display address, hover states,
  the signature line, accent rules on project cards, date tags, ledger stack lines, the active
  side-nav diamond.

### Secondary
- **Tesseract Cyan**: knowledge and data. The publication card, skills labels, education cards,
  certification issuers.

### Tertiary
- **Matrix Green**: only inside the Matrix easter egg (rain, cursor).
- **Breach Red**: reserved for errors. Not used on the page today.

### Neutral
- **Void** page background; **Void Deep** footer; **Black** text on gold; **White** headings;
  **Starlight** body text; **Dust Grey** secondary text (7:1 on the void).

### Named Rules
**The One Job Rule.** Gold is action and identity, cyan is knowledge. Never swap them.

**The Void Base Rule.** Surfaces are the void plus a dark translucent fill; never a lighter solid grey.

## Typography

**Display Font:** Syncopate (sans-serif fallback)
**Body Font:** Space Mono (monospace fallback)

**Character:** Syncopate is wide and engineered, for names and titles. Space Mono sets everything
read: copy, labels, the email address.

### Hierarchy
- **Display**: the hero name only.
- **Headline** (3rem, 2rem on phones): section titles.
- **Title-lg / Title / Title-sm** (1.8 / 1.4 / 1.1rem): card titles, the publication and
  institution, ledger names and the brand.
- **Lede**: the hero role line; module ledes at 1.1rem.
- **Email**: the Contact address, set large in Space Mono.
- **Body** (18px, line-height 1.6), **Body-sm** (1rem), **Small** (0.9rem): copy and details.
- **Label / Micro** (0.8 / 0.75rem): date tags, stack lines, footer meta. Never below 0.75rem.

### Named Rules
**The Telemetry Rule.** If it isn't a name or a title, it's in Space Mono.

**The No-Kicker Rule.** No small labels above headings. Context goes beside or below the title
(e.g. "Closer Consulting · Lisbon" under the role).

## Layout

One long page: hero (100svh), Experience, Projects, Skills, Education, Contact, footer. Sections
are content height with 130px top padding; content in a 1200px column with 40px side padding
(25px at 1024px, 15px at 400px). Skills and Education are two-column grids that stack at 768px.
Personal projects are a ledger: name left, description and stack right, hairline rows.

Fixed layers back to front: particle canvas, vignette, content, Matrix canvas (off), header,
side rail with the gold line, cursor. The header hides on scroll down and returns on scroll up.
Phones (768px and below) get a Menu button; the side rail is replaced by a top progress hairline
at 1024px and below.

## Elevation & Depth

Flat at rest, light on interaction. Panels are dark translucent fills with no backdrop blur (blur
over the animated canvas was too expensive). On hover, project panels rise 5px and their border
turns gold; buttons fill gold. The only glow is the cyan hover on education-style cards, chosen
by the owner ("glass at rest, glow on interaction").

### Named Rules
**The Light-Not-Shadow Rule.** No grey drop shadows. Depth comes from borders and colour on hover.

## Shapes

Square and engineered: 0px corners on panels and buttons, 1px hairline borders, 2px top accent
rules in gold (projects) or cyan (publication, education). Small exceptions: 2px and 4px on tiny
badges. Diamonds (rotated squares) for side-nav nodes; circles only for the cursor.

## Components

### Buttons
- **Primary (email address in the hero):** gold hairline on a faint gold tint; fills gold with
  black text on hover. Clicking copies the address and says so, then opens the mail app.
- **Copy:** secondary button; label switches to "Copied" (announced to screen readers).
- **Text links (Download CV, LinkedIn, GitHub):** uppercase Space Mono with a Lucide icon,
  grey to gold on hover.

### Cards / Containers
- **Project module:** dark fill, hairline border, gold top rule that draws in on scroll; date tag
  top right, context line under the title, details collapsible on phones.
- **Publication card:** same shell with a cyan top rule; opens with a scrubbed mask on desktop.
- **Education card:** single frame, cyan top border, date tag, institution, degree.

### Lists
- **Skills list:** definition list in two columns; cyan uppercase label, starlight items.
- **Project ledger:** hairline rows, Syncopate name, description, gold stack line.

### Navigation
- **Header:** fixed, near-opaque void, brand left, links right (Menu button on phones).
- **Side rail:** a hairline with a diamond per section; the gold signature line fills it as you
  scroll and the current section's diamond fills gold (aria-current).

### Contact
The email address in large Space Mono with a gold underline that the signature line draws, a Copy
button, nothing else. The footer carries the Interstellar quote, links, and the Matrix glyph toggle.

### Motion (src/main.js)
Lenis smooth scroll on gsap.ticker; hero name split by line on load; hero exit drift on desktop;
role points, ledger rows, skills rows and education cards each enter differently; reduced motion
shows final states with the line drawn in full.

## Do's and Don'ts

### Do:
- **Do** keep surfaces as the void plus a dark translucent fill.
- **Do** keep corners square; 2-4px only on tiny badges.
- **Do** use gold for action and identity, cyan for knowledge (the One Job Rule).
- **Do** use the physics ease (`cubic-bezier(0.19, 1, 0.22, 1)`) for hover movement and the header.
- **Do** put context beside or below a title, never above it.
- **Do** use the `:root` tokens and the type ramp above for every new colour and size.

### Don't:
- **Don't** use grey drop shadows or static glows.
- **Don't** set paragraphs in Syncopate.
- **Don't** use Matrix Green outside the easter egg.
- **Don't** put kicker or eyebrow labels above headings.
- **Don't** add backdrop blur to panels over the particle canvas.
- **Don't** add a second signature motion; the gold line is the one.
