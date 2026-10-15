# Scroll script

Motion level 2 (Polished): Lenis smooth scroll, a few scroll moments, one signature move.
Scroll owner: Lenis on gsap.ticker + ScrollTrigger. No pins anywhere (level 2, and the page is
content a recruiter reads, not a film to sit through).

Continuity carrier: the gold particle field (`#singularity-canvas`), fixed behind the whole page.
It's code-built, already there, and it's the "Event Horizon" of DESIGN.md.

Signature move: **gravity.** Scrolling pulls the particle field toward a point, like light bending
around Gargantua. Scroll speed sets the strength; when you stop, the field drifts back to calm.
At the end of the page the field settles into a slow orbit around the Contact email button.
(One sentence for CLAUDE.md: "The particle field is pulled by your scroll, like light around a
black hole, and comes to rest orbiting the email button.")

How it's built: the existing particle loop moves onto gsap.ticker and reads two numbers each frame:
`pull` (0-1, from Lenis velocity, smoothed) and `anchor` (a screen point). No new canvas.

## Ch1 Hero (100svh, not pinned)
On load (0.9s, power3.out, once): name splits by line and rises 24px from opacity 0; the role line,
depth line and actions follow at 0.12s steps. The particle field fades in from 0 over 1.2s.
Exit seam (owned by Ch1, scrub, last 30% of the hero): name and role drift up 40px and fade to 0.3;
gravity anchor sits behind the Experience heading, so the field visibly leans toward it.

## Ch2 Experience (auto height)
Entrance: heading rises once (trigger at 80% viewport). The five role points reveal one by one as
they enter (stagger 0.08s, opacity + 12px), tags light gold in sequence. Earlier line: no motion.
No exit seam; the carrier (field) carries the handoff.

## Ch3 Projects (auto height)
Email assistant card: top gold border draws left to right (scaleX 0 to 1) as the card enters.
Publication card: mask reveal, `clip-path: inset(0 0 100% 0)` to `inset(0)`, scrubbed over its
first 40% in view, cyan border leading.
Three personal projects: enter in a single stagger (0.1s), once.

## Ch4 Skills (auto height)
Cards don't move. Pills light up in reading order as each card enters (border to cyan for 0.4s,
then back), once. Different from every other section's entrance on purpose.

## Ch5 Education (auto height)
Video frame opens like a projector: `clip-path: inset(50% 0 50% 0)` to `inset(0)`, scrubbed while
the frame moves from 85% to 55% of the viewport. The video starts playing when fully open.

## Ch6 Contact + footer
Gravity anchor moves to the email button; as Contact enters, `pull` eases to a steady 0.3 and the
field settles into a slow orbit around the button. The button's border brightens once when the
orbit forms. Footer: no motion.

## Mobile (<768px)
Lenis on with default touch behaviour (syncTouch off). No scrubbed clip-path; publication and video
reveal as one-shot fades. Gravity at half strength, 200 particles, anchor fixed at screen centre.
Each section keeps one triggered entrance at most.

## Reduced motion
No Lenis smoothing, no scrub, no reveals: final states shown. Particle field static (already built
in fix 5). Video shows its poster. Gravity off.

## Seams at a glance
| From -> To | Owner | Carrier | Pattern |
| --- | --- | --- | --- |
| Hero -> Experience | Hero, last 30% | Particle field leaning to the heading | Text drift + color continuity of the field |
| Experience -> Projects | none (no seam) | Particle field | Simple reveals |
| Projects -> Skills | none | Particle field | Mask reveal on the publication |
| Skills -> Education | none | Particle field | Projector mask reveal |
| Education -> Contact | Contact entrance | Field converges on the email button | Signature payoff |
