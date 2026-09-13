# Tarun — Portfolio

A modern, motion-rich portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. It features:

- A floating "tablet" glass navigation bar that shrinks and highlights the active section as you scroll
- Scroll-linked parallax layers in the hero and about sections (built with Framer Motion's `useScroll`/`useTransform`)
- A real 3D animated scene (rotating faceted sun + drifting stardust) built with `react-three-fiber` + `drei`
- 3D mouse-tilt cards for the project grid
- A dawn → daylight → golden-hour color journey as you scroll through the page

## Theme concept

"Tarun" means *young / first light* in Sanskrit, so the whole site is structured as a sunrise: the hero opens in deep night, the sun rises in 3D as you scroll, and the page warms section by section until the contact section is full golden hour.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts (Fraunces + Space Grotesk)
  page.tsx           Assembles all sections
  globals.css        Base styles, glass utility, reduced-motion handling
components/
  Header.tsx         Floating glass tablet nav
  Hero.tsx           Parallax sky/mountains + 3D sun
  SunScene.tsx        react-three-fiber 3D scene
  ParallaxLayer.tsx   Reusable scroll-linked parallax wrapper
  TiltCard.tsx        3D mouse-tilt card wrapper
  About.tsx, Projects.tsx, Skills.tsx, Contact.tsx, Footer.tsx
```

## Customizing

- **Copy & projects**: edit the arrays at the top of `Projects.tsx` and `Skills.tsx`, and the paragraphs in `About.tsx` / `Hero.tsx` — everything in this repo is placeholder content for Tarun.
- **Colors**: the dawn palette lives in `tailwind.config.ts` (`night`, `dusk`, `horizon`, `ember`, `gold`, `dawn`, `cream`, `mist`).
- **Fonts**: swapped in `app/layout.tsx` via `next/font/google`.
- **3D scene**: tweak geometry, colors, or speed in `components/SunScene.tsx`.
- **Contact email**: update the `mailto:` link in `Contact.tsx`.

## Notes

- The 3D scene is loaded client-side only (`next/dynamic` with `ssr: false`) since WebGL needs the browser.
- Motion respects `prefers-reduced-motion` (see `globals.css`).
- No external image assets are used — project thumbnails are CSS gradients so the project runs immediately with zero setup. Swap them for real screenshots via `next/image` when ready.
