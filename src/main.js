import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

// --- One scroll owner: Lenis on GSAP's ticker (off under reduced motion) ---
let lenis = null;
if (!reduceMotion) {
    lenis = new Lenis({ autoRaf: false, anchors: { offset: -70 } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    window.siteLenis = lenis;
    if (import.meta.env.DEV) window.lenis = lenis;
}

// --- Side-nav state, always on (replaces the old scroll-position check) ---
const nodes = [...document.querySelectorAll('.thread-node')];
nodes.forEach(node => {
    const section = document.getElementById(node.dataset.target);
    if (!section) return;
    ScrollTrigger.create({
        trigger: section,
        start: 'top 45%',
        end: 'bottom 45%',
        onToggle: self => {
            if (!self.isActive) return;
            nodes.forEach(n => {
                const on = n === node;
                n.classList.toggle('active', on);
                if (on) n.setAttribute('aria-current', 'location');
                else n.removeAttribute('aria-current');
            });
        },
    });
});

const mm = gsap.matchMedia();

mm.add(
    {
        desktop: '(min-width: 1025px) and (prefers-reduced-motion: no-preference)',
        mobile: '(max-width: 1024px) and (prefers-reduced-motion: no-preference)',
        reduce: '(prefers-reduced-motion: reduce)',
    },
    ctx => {
        const { desktop, reduce } = ctx.conditions;

        // Reduced motion: final states, signature line drawn in full, nothing moves.
        if (reduce) {
            gsap.set(['.thread-progress', '.scroll-progress', '.accent-rule', '.email-rule'], { scale: 1 });
            return;
        }

        // --- Signature: the gold line. It draws down the side rail (desktop) or across the top
        // (phone) as you scroll, and ends by underlining the email address in Contact. ---
        gsap.to(desktop ? '.thread-progress' : '.scroll-progress', {
            [desktop ? 'scaleY' : 'scaleX']: 1,
            ease: 'none',
            scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
        });
        gsap.fromTo('.email-rule', { scaleX: 0 }, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: '#contact', start: 'top 75%', end: 'top 25%', scrub: 0.5 },
        });

        const home = document.getElementById('home');
        const contact = document.getElementById('contact');

        gsap.from('#singularity-canvas', { opacity: 0, duration: 1.4, ease: 'power2.out' });

        // --- Ch1 Hero: load, then an owned exit seam ---
        gsap.context(() => {
            const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
            SplitText.create('.hero-name', {
                type: 'lines',
                mask: 'lines',
                autoSplit: true,
                onSplit(self) {
                    gsap.set('.hero-name', { visibility: 'visible' });
                    return gsap.from(self.lines, { yPercent: 110, duration: 0.9, stagger: 0.08, ease: 'power3.out' });
                },
            });
            intro
                .fromTo(['.hero-role', '.hero-sub', '.contact-actions', '.contact-links'],
                    { autoAlpha: 0, y: 18 },
                    { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.35);

            if (desktop) {
                gsap.to(['.hero-name', '.hero-role'], {
                    y: -60,
                    opacity: 0.3,
                    ease: 'none',
                    scrollTrigger: { trigger: home, start: 'bottom 75%', end: 'bottom 25%', scrub: true },
                });
            }
        }, home);

        // --- Ch2 Experience: points arrive one by one, tags light up ---
        gsap.context(() => {
            gsap.from('.role-points li', {
                autoAlpha: 0, y: 12, duration: 0.6, stagger: 0.08, ease: 'power2.out',
                scrollTrigger: { trigger: '.role-points', start: 'top 80%', once: true },
            });
            gsap.from('.role-card .tech-tag', {
                autoAlpha: 0, duration: 0.4, stagger: 0.04, ease: 'power1.out',
                scrollTrigger: { trigger: '.role-card .tag-row', start: 'top 90%', once: true },
            });
        }, '#experience');

        // --- Ch3 Projects: accent rules draw, publication opens like a mask, ledger rows follow ---
        gsap.context(() => {
            gsap.utils.toArray('.accent-rule').forEach(rule => {
                gsap.fromTo(rule, { scaleX: 0 }, {
                    scaleX: 1, duration: 1, ease: 'power3.inOut',
                    scrollTrigger: { trigger: rule.parentElement, start: 'top 80%', once: true },
                });
            });
            if (desktop) {
                gsap.fromTo('.publication-card', { clipPath: 'inset(0% 0% 100% 0%)' }, {
                    clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
                    scrollTrigger: { trigger: '.publication-card', start: 'top 90%', end: 'top 55%', scrub: 0.4 },
                });
            } else {
                gsap.from('.publication-card', {
                    autoAlpha: 0, y: 20, duration: 0.7, ease: 'power2.out',
                    scrollTrigger: { trigger: '.publication-card', start: 'top 85%', once: true },
                });
            }
            gsap.from('.ledger-row', {
                autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: '.ledger', start: 'top 80%', once: true },
            });
        }, '#projects');

        // --- Ch4 Skills: rows slide in from the label side, a different entrance on purpose ---
        gsap.context(() => {
            gsap.from('.skills-row', {
                autoAlpha: 0, x: -16, duration: 0.6, stagger: 0.06, ease: 'power2.out',
                scrollTrigger: { trigger: '.skills-list', start: 'top 80%', once: true },
            });
        }, '#skills');

        // --- Ch5 Education: cards open from the cyan edge ---
        gsap.context(() => {
            gsap.from('.edu-card', {
                clipPath: 'inset(0% 0% 100% 0%)', duration: 0.9, stagger: 0.15, ease: 'power3.inOut',
                scrollTrigger: { trigger: '.edu-grid', start: 'top 80%', once: true },
            });
        }, '#education');

        // --- Ch6 Contact: the heading and line rise, the email lands on the gold line ---
        gsap.context(() => {
            gsap.from(['.section-title', '.contact-lede', '.email-label'], {
                autoAlpha: 0, y: 24, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: contact, start: 'top 75%', once: true },
            });
        }, contact);
    }
);

// Layout settles after fonts load; re-measure triggers then.
document.fonts?.ready.then(() => ScrollTrigger.refresh());
root.classList.add('motion-ready');
