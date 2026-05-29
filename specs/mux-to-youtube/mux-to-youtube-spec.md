# Mux-to-YouTube Migration — Specification

## 1. Problem Statement

The portfolio currently uses **Mux** for video hosting and playback (`@mux/mux-player`). The client requires videos longer than **20 minutes**, but Mux's free/starter tier limits uploads to **10 minutes**. YouTube allows up to **12 hours** (or 256 GB) per video, making it a cost-effective, zero-infrastructure alternative.

## 2. Business Value

- **No duration limit**: YouTube supports up to 12 hours per video (256 GB).
- **Zero hosting cost**: YouTube is free for unlimited video hosting.
- **No API key required**: YouTube IFrame embeds work without authentication.
- **Global CDN**: YouTube handles adaptive streaming, transcoding, and worldwide delivery.
- **Unlisted privacy**: Videos can be set as "Unlisted" — embeddable but not publicly searchable.

## 3. Functional Requirements

### FR-1: Video Card Grid (Static Thumbnail)

- Each card SHALL display a **static thumbnail** from YouTube (`https://img.youtube.com/vi/{videoId}/hqdefault.jpg`).
- Hover preview (inline playback) is NOT supported natively by YouTube embeds. Cards SHALL show the **static thumbnail with a play icon overlay** on hover (consistent with current design language).
- Card info overlay (title, category, meta) SHALL remain unchanged.

### FR-2: Video Modal (Full Playback)

- Clicking a card SHALL open the existing FLIP-animated modal.
- The modal SHALL embed a **YouTube IFrame player** (`https://www.youtube.com/embed/{videoId}`) instead of `<mux-player>`.
- The IFrame SHALL enable: `autoplay`, `controls`, `modestbranding`, `rel=0` (no related videos from other channels).
- On modal close, the IFrame SHALL be **destroyed** (src cleared) to stop playback and free resources.

### FR-3: Video Data Model

- Each video entry SHALL use a `youtubeId` field (11-character YouTube video ID) instead of `playbackId`.
- Placeholder IDs SHALL be used initially; swapping real IDs is a data-only change.

### FR-4: Dependency Cleanup

- The `@mux/mux-player` npm package SHALL be removed.
- The `hls.js` package (if present) SHALL be removed.
- No new npm dependencies are required (YouTube IFrame API is loaded via script tag or plain `<iframe>`).

## 4. Non-Functional Requirements

### NFR-1: Performance

- YouTube IFrame SHALL use `loading="lazy"` to avoid blocking initial page load.
- The IFrame SHALL only be injected when the modal opens (not pre-rendered in DOM).

### NFR-2: Accessibility

- Modal focus trap and keyboard navigation SHALL be preserved.
- IFrame SHALL have `title` attribute for screen readers.
- Close button focus on modal open SHALL be preserved.

### NFR-3: SEO / Best Practices

- No third-party scripts loaded until user interaction (click to open modal).
- Content Security Policy: `frame-src` must allow `https://www.youtube.com`.

## 5. Acceptance Criteria

- [ ] All 10 video cards render with YouTube thumbnails.
- [ ] Hover shows play icon overlay (no inline video playback).
- [ ] Click opens modal with YouTube IFrame playing the correct video.
- [ ] Modal close destroys IFrame and stops playback.
- [ ] Escape key and backdrop click close the modal.
- [ ] Focus trap works correctly within modal.
- [ ] `@mux/mux-player` is removed from `package.json`.
- [ ] No console errors on page load or interaction.
- [ ] Build (`astro build`) succeeds without warnings.

## 6. Out of Scope

- YouTube Data API integration (no need for API keys).
- Video upload automation (client uploads manually).
- Analytics/watch-time tracking (can be added later).
