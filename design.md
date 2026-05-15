# Design — Heures Miroir Linogravure

## Aesthetic direction

**Linocut / artisan print** — the visual language of hand-carved relief printing: heavy black ink on warm cream paper, imperfect but bold edges, chunky silhouette icons, type that feels stamped rather than set. No digital smoothness: no gradients, no soft shadows, no rounded-corner modernity.

References: woodcut posters, lino-print zines, folk-art stamps, screen-printed gig posters.

## Color system

| Token | Parchemin | Kraft | Rizière |
|---|---|---|---|
| `--paper` | `#ece1c8` | `#d8c39a` | `#efe9d8` |
| `--paperDeep` | `#d9cca8` | `#c2a978` | `#e1d9c1` |
| `--ink` | `#0e0c0a` | `#161310` | `#0a0a0a` |

Shell background (outside phone): `#1c1a14` (near-black charcoal).

## Typography

Three switchable font stacks (CSS vars: `--font-display`, `--font-stamp`, `--font-body`, `--font-numeric`):

| Stack | Display | Stamp | Body | Numeric |
|---|---|---|---|---|
| **Carved** (default) | Londrina Solid, Bungee | Bungee | Caveat | Bungee |
| **Sketch** | Cabin Sketch, Londrina Sketch | Cabin Sketch | Caveat | Cabin Sketch |
| **Marker** | Permanent Marker, Rubik Mono One | Permanent Marker | Caveat | Rubik Mono One |

All fonts loaded from Google Fonts via `src/index.css`.

## Layout (390 × 844 iPhone frame)

```
┌──────────────────────────────┐
│  ★ Cabinet des Heures ★      │  10px stamp lettering, uppercase, 0.3em tracking
│  HEURES                      │  42px display, 900 weight, uppercase, lh 0.95
│  MIROIR                      │
│  tarot du temps              │  19px body, italic-feel, −1.5° rotation
│                              │
│  ┌────────────────────────┐  │  Hour selector plate — 260×110
│  │  ▲  11:11  ▼           │  │    outer+inner frame rings (roughRectPath)
│  └────────────────────────┘  │    corner ornament squares
│                              │
│  [ RÉVÉLER LA CARTE ]        │  StampButton — 240×64, double-frame evenodd fill
│                              │
│  ──── ✦ ────                 │  PrintDivider — jittered ink bars + star
│                              │
│  ┌──┬──┬──┬──┬──┬──┐        │  6 × 4 grid, gap 10px
│  │  │  │  │  │  │  │        │  each cell: aspect-ratio 2/3
│  ├──┼──┼──┼──┼──┼──┤        │  slight per-card rotation (±1.8°) + translation
│  │  │  │  │  │  │  │        │
│  ├──┼──┼──┼──┼──┼──┤        │
│  │  │  │  │  │  │  │        │
│  ├──┼──┼──┼──┼──┼──┤        │
│  │  │  │  │  │  │  │        │
│  └──┴──┴──┴──┴──┴──┘        │
└──────────────────────────────┘
```

## Card anatomy

### Card back (face-down)
- Full black inked block (`roughRectPath`, seed-unique per card)
- Thin inner line carved in white
- ~18 white carving nicks scattered across the block
- Central emblem carved in white: **Sigil** (Star of David), **Eye** (vesica piscis with pupil), or **Mandala** (concentric circles + cross-lines)

### Card front (face-up, grid)
- Paper background
- Double-ring jittered frame (outer ring + inner thin ring, `fillRule="evenodd"`)
- Carving nicks along all four frame sides
- Inside: hour label (8px, monospace feel) + carved icon (38px)
- Slight per-card rotation + translation for hand-placed feel

### Card front (focused / full-screen overlay)
Same structure but larger (260px wide, centered):
- Hour label 15px → title in display font 28px → jittered SVG divider line → body text 19px Caveat

## Icons

24 pure SVG silhouettes (100×100 viewBox), one per mirror hour. All chunky, hand-carved style. No stroke unless simulating a cut-out (e.g. infinite loop icon uses `stroke` on `fill="none"`). Color is always `fill="black"` (hardcoded, not `var(--ink)`) except for cut-out reveals which use `fill="var(--paper)"`.

| Hour | Name | Visual |
|---|---|---|
| 0 | Le Seuil | Closed eye / portal |
| 1 | L'Étincelle | 8-point starburst |
| 2 | La Dualité | Two facing crescents |
| 3 | Le Triangle | Filled triangle |
| 4 | La Pierre | Block / monolith |
| 5 | L'Étoile Cachée | 5-point star |
| 6 | L'Hexagramme | Star of David |
| 7 | Les Sept Voies | 7-rayed sun |
| 8 | L'Infini | Lying-eight lemniscate |
| 9 | L'Achèvement | Circle with arrow notch |
| 10 | La Roue | Spoked wheel |
| 11 | Le Portail | Archway / door |
| 12 | Le Zénith | 12-rayed sun |
| 13 | La Transformation | Butterfly wings |
| 14 | La Tempérance | Double wave |
| 15 | L'Épreuve | Cross |
| 16 | La Foudre | Lightning bolt |
| 17 | L'Étoile Reflétée | 4-point star + reflection dots |
| 18 | La Lune | Crescent moon |
| 19 | Le Soleil | Sun face |
| 20 | Le Jugement | Balance/scale |
| 21 | Le Monde | Globe / cosmic egg |
| 22 | Le Maître | Crown |
| 23 | Le Voile | 8-petal flower / rose |

## Edge technique

All "imperfect" borders use **jittered SVG polylines** from `lino-paths.js`, not CSS filters. This keeps edges pixel-crisp (no halo, no blur) while looking hand-cut.

- `roughRectPath(x, y, w, h, { perSide, amp, seed })` — irregular rectangle
- `roughLinePath(x1, y1, x2, y2, { points, amp, seed })` — wobbly line
- `roughCirclePath(cx, cy, radius, { points, amp, seed })` — irregular circle
- `carvingMarks(bounds, { count, seed })` — short random slash marks

All functions are seeded (LCG PRNG) → deterministic, no hydration mismatch.

## Animation

- **Card reveal**: crossfade (opacity transition 600ms) + scale `0.94 → 1` (700ms cubic-bezier). No 3D flip — SVG displacement filters break `backface-visibility`.
- **Focused overlay**: `fadeIn` 280ms → card rises from `translateY(40px) scale(0.85)` to identity (700ms).
- **Hour selector**: pointer drag (24px per step) + mouse wheel. Arrow buttons for +/−1.
- **Card placement jitter**: deterministic per-card `rotate(N deg) translate(Xpx, Ypx)` — static, no animation.

## Paper grain

A single `<svg>` overlay (opacity 0.45, `mix-blend-mode: multiply`) with an SVG `feTurbulence` filter. Applied only to the paper-area background — **never** to card frames or text.
