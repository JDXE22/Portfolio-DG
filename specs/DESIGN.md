# Design System Specification: The Cinematic Noir Framework

## 1. Overview & Creative North Star: "The Observational Frame"

This design system is crafted for the high-end portfolio of a Director of Photography. Our Creative North Star is **"The Observational Frame."** In cinematography, the frame doesn't just contain the image; it directs the soul toward it.

We are moving away from "template-driven" web design. This system rejects rigid, symmetrical grids in favor of **Intentional Asymmetry** and **Tonal Depth**. The UI should feel like a dark gallery—silent, expensive, and atmospheric—where the interface recedes to let the moving image breathe. We achieve this through sophisticated layering, high-contrast typography, and a total prohibition of traditional decorative borders.

## 2. Color & Atmospheric Theory

The palette is rooted in the deep, desaturated teals and greens of the "Aztec" scale. We utilize a dark-mode-first approach to mimic the environment of a color grading suite.

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers.

- **Boundaries** must be defined solely through background color shifts. For example, a `surface_container_low` (`#141d1c`) section sitting on a `surface` (`#0c1514`) background.
- **The Tonal Transition:** Use 80px to 120px of vertical padding to let colors transition naturally, creating a sense of "boundless" depth.

### Surface Hierarchy & Nesting

Treat the UI as a series of physical layers, like stacked sheets of obsidian glass.

- **Base Layer:** `surface` (`#0c1514`) for the main background.
- **Sectional Shifts:** Use `surface_container_lowest` (`#07100f`) to "recede" content and `surface_container_high` (`#232c2b`) to "lift" featured content.
- **Nesting:** A card (`surface_container_highest`) should never sit directly on the base `surface`. It must sit on a middle-tier container to create a logical, physical progression of light.

### The "Glass & Gradient" Rule

To elevate the "out-of-the-box" feel:

- **Floating Elements:** Use `surface_variant` at 60% opacity with a `24px` backdrop-blur for navigation bars or overlays.
- **Signature Textures:** For primary CTAs, use a subtle linear gradient (135°) from `primary` (`#abcec5`) to `primary_container` (`#587972`). This provides a metallic, lens-like sheen.

## 3. Typography: The Editorial Voice

We use a high-contrast scale to establish an authoritative, cinematic hierarchy.

- **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-noir" feel.
  - `display-lg` (3.5rem) should be used with `letter-spacing: -0.04em` to create a tight, cinematic title feel.
- **Body & Labels (Inter):** Chosen for its clinical readability.
  - Body text should always use `on_surface_variant` (`#c0c8c5`) rather than pure white to reduce eye strain and maintain the atmospheric "dimmed" aesthetic.
- **Hierarchy as Identity:** Use `label-sm` in all-caps with `0.15em` tracking for metadata (e.g., "4K • ANAMORPHIC • 2024"). This mimics the technical "slate" on a film set.

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "software-heavy" for a Director of Photography. We use light, not shadow, to define space.

- **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_lowest` card on a `surface_container_low` section to create a soft, natural "recessed" look.
- **Ambient Shadows:** If a "floating" effect is mandatory (e.g., a modal), use an extra-diffused shadow: `box-shadow: 0 20px 80px rgba(7, 16, 15, 0.5);`. The shadow color is a dark tint of the background, never pure black.
- **The "Ghost Border":** For interactive states (hover), use the `outline_variant` token at **15% opacity**. It should be felt, not seen—a "ghost" of a container.
- **Glassmorphism:** Use semi-transparent `surface` colors to create "frosted glass." This integrates the UI into the photography behind it, making the layout feel like an optical overlay rather than a separate layer.

## 5. Components & Signature Patterns

### Buttons (The "Aperture" Style)

- **Primary:** No borders. Gradient fill (`primary` to `primary_container`). `rounded-sm` (0.125rem).
- **Secondary:** Ghost Border (15% opacity `outline_variant`). On hover, the opacity of the fill increases to 10% `primary`.
- **Tertiary:** Purely typographic. `label-md` with an icon that shifts 4px on hover.

### Cinematic Cards

- **Constraint:** No dividers. Use `surface_container_lowest` for the card body.
- **Image Treatment:** Images must have a `0.5rem` (lg) corner radius. Use a `10%` inner glow (overlay) to prevent images from bleeding into the dark background.

### Inputs & Fields

- **Style:** Minimalist underline or "lowered" container. Use `surface_container_lowest` for the field background.
- **Focus State:** Instead of a thick border, use a `primary` color glow with a `2px` blur.

### Bespoke DoP Components

- **The Film Strip Scrubber:** A custom horizontal scroll component for high-res stills using `surface_container_highest` as the track and `primary` as the progress indicator.
- **Metadata Tags:** Selection chips using `secondary_container` with `on_secondary_container` text. No rounded-full corners; use `rounded-sm` to maintain the architectural look.

## 6. Do’s and Don’ts

### Do:

- **Embrace the Void:** Use massive amounts of negative space (Aztec 950). Let the user’s eye rest.
- **Asymmetrical Balance:** Offset large typography against smaller, technical metadata to create a "composed" feel.
- **Subtle Motion:** Use slow (500ms+), ease-out transitions for surface color shifts. It should feel like a camera iris opening.

### Don’t:

- **No 1px Borders:** Never use a solid, high-contrast line to separate content.
- **No Pure White:** Never use `#FFFFFF`. Use `on_surface` or `primary_fixed` for high-impact text.
- **No Sharp Shadows:** Avoid standard "Material" shadows. If it looks like a standard app, it has failed the cinematic brief.
- **No Generic Grids:** Avoid the "3-column card row" standard. Vary the widths (e.g., 60% / 40%) to create editorial interest.
