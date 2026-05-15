# CLAUDE.md — Heures Miroir v2

## Project overview

Mobile app (iPhone mockup) showing esoteric meanings for the 24 mirror hours (0:00, 1:01 … 23:23). Style: **linocut / artisan print** — black ink on cream paper, hand-carved feel, no gradients, no drop shadows, no smooth modern shapes.

## Stack

- **React 18** + **Vite 6** (ESM, no CJS)
- No TypeScript, no component library — plain JSX + inline styles
- Google Fonts loaded in `src/index.css` via `@import`

## File structure

```
src/
  main.jsx            — entry point, renders <App />
  index.css           — global reset + Google Fonts import + @keyframes
  App.jsx             — root component: layout, state, tweaks panel, iPhone frame
  LinoCard.jsx        — card grid item (back / front / StampFrame)
  LinoHourSelector.jsx — hour picker (drag / wheel / arrow buttons)
  LinocutIcons.jsx    — 24 SVG icons (one per mirror hour), pure silhouettes
  hours-data.js       — MIRROR_HOURS array: { hour, title, glyph, message }
  lino-paths.js       — pure-JS path helpers: roughRectPath, roughLinePath,
                        roughCirclePath, carvingMarks  (seeded, no React)
public/
  favicon.svg
index.html            — Vite entry (single <div id="root">)
vite.config.js
package.json
```

## Dev commands

```bash
npm install      # first time
npm run dev      # Vite dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview dist/
```

## Key design rules (DO NOT break)

1. **No blur/displacement filters on card edges or typography.** Irregularity comes from jittered SVG path geometry (`roughRectPath` etc.), not CSS/SVG filters. Filters are only allowed on the paper-grain background overlay.
2. **No gradients, no box-shadow, no border-radius on design elements** — only on the phone frame shell.
3. **Text must be 100% crisp.** No `filter` applied to any text element.
4. **Card aspect ratio is always `2/3`** (portrait).
5. **Grid is always 6 columns × 4 rows** (24 cards total).
6. **Seeded randomness** — `roughRectPath(…, { seed: N })` must always use a consistent, deterministic seed per element so the layout is stable across renders.

## State model (App.jsx)

| State | Type | Purpose |
|---|---|---|
| `palette` | `'parchemin' \| 'kraft' \| 'riziere'` | paper/ink color set |
| `fontSet` | `'carved' \| 'sketch' \| 'marker'` | font stack CSS vars |
| `backStyle` | `'sigil' \| 'eye' \| 'mandala'` | card-back emblem |
| `selectedHour` | `0–23` | currently dialled hour |
| `revealedSet` | `Set<number>` | which cards are flipped |
| `focusedHour` | `number \| null` | full-screen overlay |

## CSS custom properties (set on the phone container)

```
--paper       background color
--paperDeep   slightly darker variant (currently unused in grid, reserved)
--ink         foreground / stroke color
--font-display  chunky carved heading font
--font-stamp    smaller label / uppercase font
--font-body     handwritten body text
--font-numeric  hour digits font
```

## Adding / editing mirror-hour content

Edit `src/hours-data.js`. Each entry:
```js
{ hour: N, title: "…", glyph: "…", message: "…" }
```
`glyph` is a Unicode symbol shown on the focused-card overlay (currently not rendered separately, but kept for future use). `message` is the body text shown in the focused overlay.

## Adding a new card-back style

1. Add a new `backStyle` value to the `RadioGroup` in `App.jsx`.
2. Add a matching `{backStyle === 'yourValue' && (…)}` branch inside `CardBackLino` in `LinoCard.jsx`.

## Tweaks panel

The tweaks panel (`TweaksPanel` in `App.jsx`) is a self-contained floating overlay with no external dependencies. It lives outside the iPhone frame so it is always reachable. State is lifted into `App`.
