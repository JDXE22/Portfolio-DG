# Mux-to-YouTube Migration — Tasks

## Phase 1: Dependency & Data Layer

- [ ] **T1** — Remove `@mux/mux-player` from `package.json` and run `pnpm install`
- [ ] **T2** — Update video data array in `index.astro` frontmatter: rename `playbackId` → `youtubeId`, set placeholder IDs

## Phase 2: VideoCard Component

- [ ] **T3** — Update `VideoCard.astro` Props interface: `playbackId` → `youtubeId`
- [ ] **T4** — Replace Mux thumbnail URL with YouTube thumbnail URL
- [ ] **T5** — Replace `<mux-player>` card element with static `<img>` for thumbnail
- [ ] **T6** — Update data attributes: `data-playback-id` → `data-youtube-id`
- [ ] **T7** — Remove `import '@mux/mux-player'` from client script
- [ ] **T8** — Remove `mouseenter`/`mouseleave` play/pause handlers (no inline preview)
- [ ] **T9** — Update `openModal()` event detail: `playbackId` → `youtubeId`

## Phase 3: Modal Player

- [ ] **T10** — Replace `<mux-player>` in modal HTML with `<div id="modal-player-container">`
- [ ] **T11** — Rewrite `openModal()`: create YouTube IFrame, append to container
- [ ] **T12** — Rewrite `closeModal()`: remove IFrame from DOM to stop playback
- [ ] **T13** — Update event listener type: `playbackId` → `youtubeId` in CustomEvent detail
- [ ] **T14** — Remove Mux-specific player typing (`HTMLElement & { pause?: () => void }`)

## Phase 4: Verification

- [ ] **T15** — Run `pnpm install` to confirm clean dependency tree
- [ ] **T16** — Run `astro build` to verify no build errors
- [ ] **T17** — Run `astro dev` and manually verify:
  - Cards render with YouTube thumbnails
  - Click opens modal with YouTube IFrame
  - Modal close destroys IFrame
  - Keyboard navigation (Escape, Tab) works
  - No console errors
- [ ] **T18** — Verify accessibility: focus trap, screen reader labels, `title` on IFrame
