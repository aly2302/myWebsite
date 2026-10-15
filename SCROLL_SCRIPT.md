# Scroll script

Motion level 2 (Polished): Lenis smooth scroll, a few scroll moments, one signature move.
Scroll owner: Lenis on gsap.ticker + ScrollTrigger. No pins anywhere (level 2, and the page is
content a recruiter reads, not a film to sit through).

Continuity carrier: the gold particle field (`#singularity-canvas`), fixed behind the whole page.
It's code-built, already there, and it's the "Event Horizon" of DESIGN.md.

Signature move: **the gold line.** A gold line draws down the side rail as you scroll (a hairline
across the top on phones and tablets), lighting each section's diamond as you reach it, and it
ends by drawing the underline of the email address in Contact. The journey ends on the main
action. Chosen over the particle-gravity idea after the re-critique: the canvas is too faint to
carry a signature, and the line ties the motion to the email.

As built (src/main.js): `.thread-progress` scaleY / `.scroll-progress` scaleX scrubbed over the whole
page; `.email-rule` scaleX scrubbed while Contact moves from 75% to 25% of the viewport; nodes via
ScrollTrigger onToggle. Reduced motion: line and underline drawn in full, static.

## Ch1 Hero (100svh, not pinned)
On load (0.9s, power3.out, once): name splits by line and rises 24px from opacity 0; the role line,
depth line and actions follow at 0.12s steps. The particle field fades in from 0 over 1.2s.
Exit seam (owned by Ch1, scrub, desktop only): name and role drift up 60px and fade to 0.3 while the
hero's bottom moves from 75% to 25% of the viewport.

## Ch2 Experience (auto height)
Entrance: heading rises once (trigger at 80% viewport). The five role points reveal one by one as
they enter (stagger 0.08s, opacity + 12px), tags light gold in sequence. Earlier line: no motion.
No exit seam; the carrier (field) carries the handoff.

## Ch3 Projects (auto height)
Email assistant card: top gold rule draws left to right (scaleX 0 to 1) as the card enters.
Publication card: mask reveal, `clip-path: inset(0 0 100% 0)` to `inset(0)`, scrubbed from 90% to
55% of the viewport (desktop); one-shot fade on phones.
Personal projects ledger: rows enter in one stagger (0.1s), once.

## Ch4 Skills (auto height)
Rows slide in from the label side (x -16), stagger 0.06s, once. Different from every other entrance.

## Ch5 Education (auto height)
The two cards open downward from their cyan edge (clip-path), stagger 0.15s, once.
The film clip was removed from this section: unlicensed and unrelated to the content.

## Ch6 Contact + footer
Heading, line and email address rise once; the gold underline under the address is the end of the
signature line. Footer: no motion.

## Mobile (<=1024px)
Lenis on with default touch behaviour. No hero exit scrub; the publication fades in once. The
signature line is a 2px hairline across the top. Other entrances as desktop.

## Reduced motion
No Lenis, no scrub, no reveals: final states shown, signature line drawn in full. Particle field
static (fix 5).

## Seams at a glance
| From -> To | Owner | Carrier | Pattern |
| --- | --- | --- | --- |
| Hero -> Experience | Hero exit scrub | Gold line + particle field | Text drift |
| Experience -> Projects | none | Gold line | Simple reveals, rule draw |
| Projects -> Skills | none | Gold line | Mask reveal on the publication |
| Skills -> Education | none | Gold line | Clip reveal of the cards |
| Education -> Contact | Contact | Gold line becomes the email underline | Signature payoff |
