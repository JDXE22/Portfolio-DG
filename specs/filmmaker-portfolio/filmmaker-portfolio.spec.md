# Filmmaker Portfolio - Specification

## Overview

A single-page portfolio experience for a filmmaker that feels like a dark, premium gallery. The interface is quiet, atmospheric, and focused on motion work.

## Goals

- Present the filmmaker's identity with a cinematic, premium introduction.
- Showcase a curated selection of video work with clear categories and easy exploration.
- Provide a frictionless path to contact and social profiles.
- Maintain a responsive, high-performance experience on mobile and desktop.

## User Stories

- As a visitor, I want a memorable opening moment that sets a cinematic tone.
- As a visitor, I want to quickly understand the filmmaker's style and background.
- As a visitor, I want to browse work by category and preview clips on hover.
- As a visitor, I want an easy way to contact the filmmaker.

## Functional Requirements

FR-1 Intro Animation (Preloader)

- Show an opening screen with the filmmaker name as the primary focus.
- Animate the name with a premium fade-in/scale-in effect.
- After the animation completes, transition to the hero section smoothly.

FR-2 Hero Section

- Provide a top navigation with links to Hero, About, Cinematography, and Contact sections.
- Include a prominent View Reel call-to-action.
- If the reel is not ready, the View Reel action is visibly disabled.
- Show a Trusted By carousel with client/brand logos that loops smoothly.

FR-3 About Me Section

- Use a balanced two-column layout with bio text and a portrait image.
- Include a scroll invitation with a subtle animated cue.
- The portrait image appears grayscale by default and transitions to full color on hover.

FR-4 Cinematography Section

- Provide category filters for Commercial, Interview, Art, Social, and Narrative.
- Initially show up to four video cards.
- If more than four videos exist, provide a View All control to reveal the rest.
- Each video card shows a loading placeholder while the video is buffering.
- Videos play on hover (muted) and stop/reset on mouse leave.

FR-5 Contact Section and Footer

- Provide social links to Instagram and LinkedIn.
- Provide an Email Me action that opens the user's mail client.
- End the page with a standard footer and copyright line.

## Content Requirements

- Use Lorem Ipsum for all bio and descriptive text.
- All images and media must include clear, descriptive alt text.

## Visual and Motion Requirements

- Follow the Cinematic Noir framework from DESIGN.md for typography, color, spacing, and motion.
- Avoid visible borders; section boundaries are defined by tonal background shifts.
- Use generous vertical spacing to emphasize depth and atmosphere.
- Motion should be subtle and slow, favoring smooth ease-out transitions.

## Accessibility Requirements

- Use semantic landmarks for each section and navigation.
- All interactive controls include accessible labels.
- Color and contrast must remain readable in the dark palette.

## Out of Scope

- Multi-page navigation or blog content.
- Auth, CMS, or backend integrations.
