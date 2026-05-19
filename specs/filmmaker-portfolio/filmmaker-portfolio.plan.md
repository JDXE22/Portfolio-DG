# Filmmaker Portfolio - Technical Plan

## Stack and Constraints

- Framework: Astro 6.x (project currently uses 6.3.1).
- Styling: Tailwind CSS v4 with CSS-first configuration using `@theme` in a global stylesheet.
- Interactivity: Minimal vanilla JavaScript in Astro `<script>` blocks.
- Design system: Follow DESIGN.md (Cinematic Noir) for colors, typography, spacing, and motion.

## Architecture Overview

- Single-page layout in `src/pages/index.astro` composed of Astro components.
- Shared layout in `src/layouts/Layout.astro` with global styles and font loading.
- New components in `src/components/`:
  - `Navbar.astro`
  - `Button.astro`
  - `TrustedBy.astro`
  - `VideoCard.astro`
  - (Optional) `Preloader.astro` if it improves clarity; otherwise inline in `index.astro`.

## Styling and Tokens (DESIGN.md Mapping)

- Create `src/styles/global.css` and load it in `Layout.astro`.
- Use Tailwind v4 syntax:
  - `@import "tailwindcss";`
  - `@theme` for tokens (colors, fonts, radii, spacing).
- Define tokens from DESIGN.md:
  - `surface`: #0c1514
  - `surface_container_lowest`: #07100f
  - `surface_container_low`: #141d1c
  - `surface_container_high`: #232c2b
  - `surface_container_highest`: #2a3433 (use a close dark lift for cards)
  - `surface_variant`: #1a2322 (for translucent overlays)
  - `outline_variant`: #5b6b69
  - `primary`: #abcec5
  - `primary_container`: #587972
  - `on_surface`: #eef2f0
  - `on_surface_variant`: #c0c8c5
  - `secondary_container`: #2f3a38
  - `on_secondary_container`: #d0dad7
- Fonts:
  - Headings: Manrope
  - Body/labels: Inter
- Apply large vertical padding (80-120px) for section transitions; avoid borders.
- Use gradient for primary CTA (primary -> primary_container) and ghost outlines for secondary.

## Data and Content Structure

- Define data arrays in `index.astro`:
  - `navLinks`: { id, label, href }
  - `logos`: { name, src }
  - `categories`: [Commercial, Interview, Art, Social, Narrative]
  - `videos`: { id, title, category, src, poster, meta }
- `isReelReady` boolean defaults to `false`; the View Reel button renders disabled styles and `aria-disabled`.
- Use Lorem Ipsum for bio and descriptive copy.

## Component Behavior and Interactivity

- Preloader:
  - Fullscreen overlay with filmmaker name.
  - CSS keyframes for fade/scale in.
  - JS adds a class (e.g., `data-ready=true`) to hide the preloader and reveal the hero.
  - Respect `prefers-reduced-motion` to skip long animations.
- Navbar:
  - Semantic `<nav>` with anchor links.
  - Mobile toggle uses minimal JS to expand/collapse.
  - No borders; use translucent `surface_variant` with blur for glass effect.
- Trusted By carousel:
  - CSS-only looping marquee using duplicated logo rows.
  - Smooth, slow animation to match cinematic pacing.
- About portrait:
  - Default `grayscale` filter; transition to `grayscale-0` on hover with 500ms+ duration.
  - Add a subtle inner glow overlay to satisfy image treatment.
- Cinematography grid:
  - Filter buttons update visible cards via JS (data attributes or class toggles).
  - Show up to 4 cards initially; `View All` toggles the rest when total > 4.
  - Each `VideoCard` renders a skeleton layer that hides on `loadeddata` event.
  - Hover play: on `mouseenter` call `video.play()`; on `mouseleave` pause and reset `currentTime`.
- Contact and footer:
  - `mailto:` link for Email Me CTA.
  - Social icons with accessible labels and focus styles.

## Accessibility

- Use semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`.
- Add `aria-label` for nav toggle and social links.
- Ensure buttons use `aria-disabled` when inactive.
- Provide descriptive `alt` text for portraits and brand logos.
- Support reduced motion where possible.

## Files to Update or Add

- Update: `src/layouts/Layout.astro` (title, metadata, global CSS import, body classes).
- Update: `src/pages/index.astro` (page structure, data arrays, scripts).
- Remove or replace: `src/components/Welcome.astro` usage.
- Add: `src/styles/global.css` with Tailwind v4 `@theme` tokens.
- Add: `src/components/Navbar.astro`, `Button.astro`, `TrustedBy.astro`, `VideoCard.astro`.
- Add assets in `public/` or `src/assets/` (portrait image, logos, poster placeholders).

## Risks and Mitigations

- Tailwind v4 integration: confirm Astro Tailwind integration uses `@import "tailwindcss"` and no legacy config.
- Video hover behavior: ensure JS only runs on the client and does not access `window` at module scope.
- Performance: keep JS minimal and avoid unnecessary hydration.
