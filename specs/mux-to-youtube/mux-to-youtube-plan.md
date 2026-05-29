# Mux-to-YouTube Migration — Technical Plan

## 1. Architecture Overview

Replace the Mux-based video pipeline with YouTube IFrame embeds. The migration touches three layers:

```
┌─────────────────────────────────────────────────────────┐
│  Data Layer (index.astro frontmatter)                   │
│  playbackId → youtubeId                                 │
├─────────────────────────────────────────────────────────┤
│  Presentation Layer                                     │
│  ├─ VideoCard.astro  (thumbnail + hover overlay)        │
│  └─ index.astro      (modal with YouTube IFrame)        │
├─────────────────────────────────────────────────────────┤
│  Build / Dependencies                                   │
│  Remove @mux/mux-player, no new deps                    │
└─────────────────────────────────────────────────────────┘
```

## 2. Technology Decisions

| Decision | Choice | Rationale |
|---|---|---|
| YouTube embed method | Raw `<iframe>` | No npm dependency; YouTube IFrame Player API adds complexity without benefit for simple playback |
| Hover preview | Static thumbnail + play icon | YouTube doesn't support inline silent preview; Mux could because it used `<mux-player>` with `--controls: none` |
| Thumbnail source | `img.youtube.com/vi/{id}/hqdefault.jpg` | Free, no API key, automatic 480×360 quality |
| High-res thumbnail | `img.youtube.com/vi/{id}/maxresdefault.jpg` | 1280×720, available for most videos |
| IFrame lifecycle | Create on modal open, destroy on close | Prevents background playback, saves memory |

## 3. File-by-File Changes

### 3.1 `package.json` — Remove Mux dependency

```diff
  "dependencies": {
-   "@mux/mux-player": "^3.13.0",
    "@tailwindcss/vite": "^4.3.0",
    "astro": "^6.3.1",
    "better-sqlite3": "^12.10.0",
    "tailwindcss": "^4.3.0"
  }
```

### 3.2 `src/pages/index.astro` — Data + Modal

#### Data model change (frontmatter):
```diff
  const videos = [
    {
      id: 'v1',
      title: '8th Insignia',
      category: 'Art',
-     playbackId: 'Zuf93jaGQ00Wot7PQKK010202IgsOnLiNkFfDVlqYhIWOaw',
+     youtubeId: 'PLACEHOLDER_V1',
      meta: '1080p • ANAMORPHIC • 2026',
    },
    // ... same pattern for all 10 videos
  ];
```

#### Modal HTML — Replace `<mux-player>` with iframe container:
```diff
- <!-- Mux player (controls visible by default) -->
- <mux-player
-   id="modal-player"
-   class="w-full block"
-   stream-type="on-demand"
-   playsinline
-   preload="none"
-   style="aspect-ratio: 16/9; display: block; --media-object-fit: contain;"
- ></mux-player>
+ <!-- YouTube iframe container (iframe injected on open, destroyed on close) -->
+ <div
+   id="modal-player-container"
+   class="w-full block"
+   style="aspect-ratio: 16/9; background: #000;"
+ ></div>
```

#### Modal script — YouTube IFrame lifecycle:
- `openModal()`: Create `<iframe>` with `src="https://www.youtube.com/embed/{youtubeId}?autoplay=1&rel=0&modestbranding=1"`, append to container.
- `closeModal()`: Remove iframe from DOM (stops playback instantly).
- No HLS/Mux-specific code needed.

### 3.3 `src/components/VideoCard.astro` — Thumbnail + Hover

#### Props change:
```diff
  interface Props {
    id: string;
    title: string;
    category: string;
-   playbackId: string;
+   youtubeId: string;
    poster?: string;
    meta: string;
    hidden?: boolean;
  }
```

#### Thumbnail:
```diff
- const resolvedPoster =
-   poster ||
-   (playbackId ? `https://image.mux.com/${playbackId}/thumbnail.jpg` : '') ||
-   '/posters/placeholder.svg';
+ const resolvedPoster =
+   poster ||
+   (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : '') ||
+   '/posters/placeholder.svg';
```

#### Card body — Replace `<mux-player>` with `<img>`:
Since YouTube doesn't support inline silent preview, replace the `<mux-player>` element with a static `<img>` tag showing the thumbnail. The hover play icon overlay already exists and will serve as the visual cue.

#### Script — Remove Mux import and simplify:
```diff
- import '@mux/mux-player';
```
Remove `mouseenter`/`mouseleave` play/pause handlers (no inline playback). Keep click/keydown handlers for modal open. Change `data-playback-id` → `data-youtube-id`.

## 4. Clean Code Principles Applied

- **Single Responsibility**: Each component handles one concern (VideoCard = presentation, modal script = playback lifecycle).
- **Intention-Revealing Names**: `youtubeId` clearly communicates the video source (vs ambiguous `playbackId`).
- **No Dead Code**: All Mux-specific imports, HLS handling, and unused preview logic will be removed entirely.
- **Minimal Side Effects**: IFrame creation/destruction is contained within modal open/close functions.

## 5. Web Quality Considerations

### Performance
- **No third-party JS on page load**: YouTube IFrame is only created on user interaction.
- **Lazy thumbnail loading**: Card images use `loading="lazy"`.
- **Removed ~150 KB**: `@mux/mux-player` bundle is eliminated.

### Accessibility
- Modal focus trap preserved (iframe is focusable via Tab).
- IFrame gets `title` attribute for screen reader context.
- Keyboard navigation (Escape, Tab) unchanged.

### Security
- IFrame sandboxed with `allow="autoplay; encrypted-media"`.
- `frame-src` CSP should include `https://www.youtube.com`.

## 6. Risk Assessment

| Risk | Impact | Mitigation |
|---|---|---|
| No hover preview | Minor UX change | Play icon overlay provides visual affordance |
| YouTube downtime | Videos unavailable | Extremely rare; YouTube has >99.99% uptime |
| Unlisted video indexed | Privacy concern | YouTube "Unlisted" videos are not indexed |
| Thumbnail not available | Broken image | Fallback to `/posters/placeholder.svg` |
