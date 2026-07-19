# Health & Wellness Landing Page

A clean, minimal, modern e-commerce landing page for a compounded GLP-1
weight-loss brand. Built with **React**, **Vite**, **Tailwind CSS**,
**TypeScript**, and **shadcn/ui** primitives.

## Tech stack

- **React 18** + **React Router** (home page + `/product/:handle` route)
- **Vite 5** build tooling
- **Tailwind CSS 3** with an HSL design-token system
- **TypeScript** (strict)
- **shadcn/ui**-style primitives (`Button`, `Accordion`) built on Radix
- **lucide-react** icons

## Design system

All colors are defined as HSL CSS custom properties in `src/index.css` and
exposed to Tailwind as semantic tokens (`--background`, `--foreground`,
`--primary`, `--card`, `--muted`, `--border`, …).

| Token          | Value            |
| -------------- | ---------------- |
| `--background` | `hsl(0 0% 98%)`  |
| `--foreground` | `hsl(11 6% 11%)` |
| `--radius`     | `9999px`         |

- **Fully-rounded** borders everywhere via `--radius: 9999px`.
- **System fonts** only — no custom web fonts.
- Standard soft shadow: `shadow-[2px_4px_12px_rgba(0,0,0,0.08)]`.
- A reusable **`GradientButton`** (`src/components/GradientButton.tsx`) renders
  the animated 2px multi-stop gradient border used across the site; on hover the
  gradient's `background-position` scrolls from `0%` to `200%` over `0.8s`.

## Sections

1. **Navbar** — sticky, logo + nav links + solid & gradient CTAs, with a mobile
   menu toggle.
2. **Hero** — rating badge, feature list, pricing, info card, and dual vertical
   auto-scrolling image marquees with fade overlays.
3. **Products grid** — product cards linking to `/product/{handle}`.
4. **Weight Loss** — split feature section.
5. **Product carousel** — static showcase card + interactive carousel.
6. **Science & Nature** — feature badges.
7. **FAQ** — Radix accordion.
8. **Health guide** — article cards.
9. **Footer** — newsletter signup, link columns, social icons, badges.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    ui/              # shadcn-style primitives (button, accordion)
    GradientButton.tsx
    Navbar.tsx  Hero.tsx  ProductsGrid.tsx  WeightLoss.tsx
    ProductCarousel.tsx  ScienceNature.tsx  FAQ.tsx
    HealthGuide.tsx  Footer.tsx
  pages/
    ProductPage.tsx  # /product/:handle detail route
  lib/
    data.ts          # product / carousel / guide content
    utils.ts         # cn() class helper
  App.tsx            # home page composition
  main.tsx           # router entry
  index.css          # design tokens + marquee keyframes
```

> **Note:** Product imagery uses Unsplash URLs so the page renders with real
> photography out of the box. Swap these in `src/lib/data.ts` for owned assets
> before production.
