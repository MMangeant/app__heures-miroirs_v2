// Helpers for hand-carved-but-crisp SVG paths.
// Edges stay SHARP (no blur, no halo) but IRREGULAR — like a real linocut.
// All randomness is seeded so the same input always returns the same path.

function _seededRand(seed) {
  let s = (seed * 9301 + 49297) % 233280 || 1;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function roughRectPath(x, y, w, h, opts = {}) {
  const { perSide = 14, amp = 1.4, seed = 1 } = opts;
  const r = _seededRand(seed);
  const pts = [];
  const push = (px, py) => pts.push([px, py]);
  for (let i = 0; i <= perSide; i++) {
    const t = i / perSide;
    push(x + t * w + (r() - 0.5) * amp, y + (r() - 0.5) * amp);
  }
  for (let i = 1; i <= perSide; i++) {
    const t = i / perSide;
    push(x + w + (r() - 0.5) * amp, y + t * h + (r() - 0.5) * amp);
  }
  for (let i = 1; i <= perSide; i++) {
    const t = i / perSide;
    push(x + w - t * w + (r() - 0.5) * amp, y + h + (r() - 0.5) * amp);
  }
  for (let i = 1; i < perSide; i++) {
    const t = i / perSide;
    push(x + (r() - 0.5) * amp, y + h - t * h + (r() - 0.5) * amp);
  }
  return 'M ' + pts.map(p => p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' L ') + ' Z';
}

export function roughCirclePath(cx, cy, radius, opts = {}) {
  const { points = 40, amp = 1.2, seed = 1 } = opts;
  const r = _seededRand(seed);
  const pts = [];
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const rr = radius + (r() - 0.5) * amp;
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  return 'M ' + pts.map(p => p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' L ') + ' Z';
}

export function roughLinePath(x1, y1, x2, y2, opts = {}) {
  const { points = 10, amp = 0.9, seed = 1 } = opts;
  const r = _seededRand(seed);
  const pts = [[x1, y1]];
  for (let i = 1; i < points; i++) {
    const t = i / points;
    pts.push([
      x1 + (x2 - x1) * t + (r() - 0.5) * amp,
      y1 + (y2 - y1) * t + (r() - 0.5) * amp,
    ]);
  }
  pts.push([x2, y2]);
  return 'M ' + pts[0][0].toFixed(2) + ' ' + pts[0][1].toFixed(2) +
    ' ' + pts.slice(1).map(p => 'L ' + p[0].toFixed(2) + ' ' + p[1].toFixed(2)).join(' ');
}

export function carvingMarks(bounds, opts = {}) {
  const { count = 8, seed = 1, lenMin = 1.4, lenMax = 4 } = opts;
  const r = _seededRand(seed);
  const [x, y, w, h] = bounds;
  const out = [];
  for (let i = 0; i < count; i++) {
    const cx = x + r() * w;
    const cy = y + r() * h;
    const len = lenMin + r() * (lenMax - lenMin);
    const ang = r() * Math.PI;
    const dx = Math.cos(ang) * len;
    const dy = Math.sin(ang) * len;
    out.push(`M ${(cx - dx / 2).toFixed(2)} ${(cy - dy / 2).toFixed(2)} L ${(cx + dx / 2).toFixed(2)} ${(cy + dy / 2).toFixed(2)}`);
  }
  return out;
}
