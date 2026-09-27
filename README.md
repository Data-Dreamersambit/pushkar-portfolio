# Telecom Engineer Portfolio

A multi-page portfolio site for a telecom/RF engineer, built with React, TypeScript,
Tailwind CSS, Framer Motion and an interactive Three.js hero scene.

## Stack

- React 19 + Vite + TypeScript
- React Router (5 routes + 404)
- Tailwind CSS v4 (token-based theming, dark by default with a light toggle)
- Three.js via @react-three/fiber and @react-three/drei
- Framer Motion (page transitions, entrance animation, expandable timeline)

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint       # ESLint
npm run format     # Prettier, writes in place
```

## Editing content

All copy lives in `src/content/*.ts`, separate from the components that render it —
edit these without touching any component code:

- `site.ts` — name, title, location, email, LinkedIn/GitHub links, hero value statement,
  stats strip, nav labels. **Start here** — replace every `[PLACEHOLDER]` value.
- `about.ts` — the About page's story paragraphs, "what I do" / "how I work" blocks,
  and certifications/education highlights.
- `skills.ts` — skill categories, each skill's name and proficiency (`1`–`5`, rendered
  as signal bars), and the tools strip.
- `experience.ts` — the timeline: roles, dates, locations, summaries and impact bullets,
  plus the education list.

Also replace:
- `public/cv-placeholder.pdf` with a real CV/résumé (same filename, or update
  `owner.cvFile` in `site.ts`).
- The portrait placeholder in `src/pages/About.tsx` (`<div>` labelled "Portrait
  placeholder") with a real `<img>`.

## Wiring the contact form to a real inbox

The form in `src/pages/Contact.tsx` is fully validated and stateful (loading /
success / error), but by default only *simulates* a submission. To send real
messages, open `src/lib/contactSubmit.ts` and either:

1. **Formspree** — create a form at formspree.io, then set
   `VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id` in a `.env` file
   (see `.env.example`). No code changes needed — the handler already POSTs
   JSON to whatever `VITE_CONTACT_ENDPOINT` points to.
2. **EmailJS** — `npm install @emailjs/browser` and replace the body of
   `submitContactForm` with an `emailjs.send(...)` call, per the comment in that file.

## Customizing the 3D hero scene

`src/components/three/CellTowerScene.tsx` holds the whole scene: the tower mesh,
the pulsing signal rings, the node mesh, and the travelling data-packet particles.

- Colors: change the `SIGNAL` / `SIGNAL_STRONG` hex constants at the top of the file.
- Node layout: edit the `NODES` and `NODE_LINKS` arrays.
- Ring speed/count: `SignalRings()` — `ringCount` and the `0.28` speed multiplier.
- Camera parallax strength: `Rig()` — the `0.6` / `0.35` multipliers on `pointer.x/y`.

The scene is lazy-loaded (`src/components/three/HeroScene.tsx`) and only mounts
after first paint, is skipped entirely when `prefers-reduced-motion` is set or
WebGL isn't available, and is wrapped in an error boundary — in every one of
those cases `HeroFallback.tsx` (a static SVG) is shown instead, so the hero is
always legible even if the 3D scene can't run.

## Adding a new page

1. Create `src/pages/YourPage.tsx` (copy an existing simple page like `About.tsx`
   as a starting point — it already shows the `SEO` + `SectionHeader` pattern).
2. Add a `<Route>` for it in `src/App.tsx`, wrapped in `<PageTransition>` like the
   others.
3. Add it to the `nav` array in `src/content/site.ts` if it should appear in the
   navbar.

## Theme tokens

All colors, fonts and the dark/light variable swap live in `src/index.css` under
`:root` and `:root[data-theme="light"]`, then mapped into Tailwind utilities via
the `@theme` block — so `bg-signal`, `text-text-muted`, `border-border`, etc. are
available as Tailwind classes anywhere in the app. Change a value once in
`index.css` and it updates everywhere.

## Notes

- The production build code-splits the Three.js/`@react-three/fiber` bundle into
  its own chunk (`HeroCanvas`), so it's only downloaded when the hero mounts —
  everything else stays light.
- Accessibility: skip-to-content link, visible focus rings, `aria-live` status on
  the contact form, `aria-expanded`/`aria-controls` on the mobile menu and the
  expandable timeline items, and full `prefers-reduced-motion` support throughout.
