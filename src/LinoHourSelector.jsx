import React, { useRef, useEffect } from 'react';
import { roughRectPath } from './lino-paths.js';

// Une tuile carrée inversée (fond encre, chiffre papier), style linocut
function DigitTile({ digits, seed }) {
  const outer = roughRectPath(1.5, 1.5, 97, 97, { perSide: 20, amp: 1.8, seed: seed });
  const inner = roughRectPath(5,   5,   90, 90, { perSide: 20, amp: 1.4, seed: seed + 1 });

  return (
    <div style={{ position: 'relative', width: 88, height: 88 }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none"
        width="100%" height="100%"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
        shapeRendering="geometricPrecision"
      >
        <path d={outer} fill="var(--ink)" />
        <path d={outer + ' ' + inner} fillRule="evenodd" fill="var(--ink)" opacity="0.5" />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-numeric)',
          fontSize: 38,
          fontWeight: 900,
          color: 'var(--paper)',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}>{digits}</span>
      </div>
    </div>
  );
}

export function LinoHourSelector({ value, onChange }) {
  const containerRef = useRef(null);
  const dragState = useRef({ dragging: false, startY: 0, startVal: 0 });
  const wheelAccum = useRef(0);
  const wrap = (n) => ((n % 24) + 24) % 24;

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = { dragging: true, startY: e.clientY, startVal: value };
  };
  const onPointerMove = (e) => {
    if (!dragState.current.dragging) return;
    const dy = e.clientY - dragState.current.startY;
    const steps = Math.round(-dy / 36);
    const nv = wrap(dragState.current.startVal + steps);
    if (nv !== value) onChange(nv);
  };
  const onPointerUp = () => { dragState.current.dragging = false; };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e) => {
      e.preventDefault();
      wheelAccum.current += e.deltaY;
      const steps = Math.trunc(wheelAccum.current / 60);
      if (steps !== 0) {
        wheelAccum.current -= steps * 60;
        onChange(wrap(value + steps));
      }
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [value, onChange]);

  const padded = String(value).padStart(2, '0');

  const ArrowBtn = ({ dir }) => (
    <button
      onClick={(e) => { e.stopPropagation(); onChange(wrap(value + (dir === 'up' ? -1 : 1))); }}
      aria-label={dir === 'up' ? 'Heure précédente' : 'Heure suivante'}
      style={{
        background: 'transparent', border: 'none', padding: '4px 8px',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <svg viewBox="0 0 30 18" width="20" height="13">
        {dir === 'up'
          ? <path d="M15 3 L27 15 L3 15 Z" fill="var(--ink)" />
          : <path d="M3 3 L27 3 L15 15 Z" fill="var(--ink)" />
        }
      </svg>
    </button>
  );

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      width: '100%', userSelect: 'none', touchAction: 'none',
    }}>
      <div style={{
        fontFamily: 'var(--font-stamp)',
        fontSize: 13, letterSpacing: '0.18em',
        textTransform: 'uppercase', color: 'var(--ink)',
        marginBottom: 10, transform: 'rotate(-0.8deg)',
      }}>Choisissez Votre Heure</div>

      {/* Zone interactive : flèches + tuiles ensemble */}
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          cursor: 'grab',
        }}
      >
        <ArrowBtn dir="up" />

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <DigitTile digits={padded} seed={11} />

          {/* Séparateur : deux blocs carved */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
            <svg viewBox="0 0 12 12" width="10" height="10">
              <path d={roughRectPath(1, 1, 10, 10, { perSide: 8, amp: 0.9, seed: 77 })} fill="var(--ink)" />
            </svg>
            <svg viewBox="0 0 12 12" width="10" height="10">
              <path d={roughRectPath(1, 1, 10, 10, { perSide: 8, amp: 0.9, seed: 78 })} fill="var(--ink)" />
            </svg>
          </div>

          <DigitTile digits={padded} seed={22} />
        </div>

        <ArrowBtn dir="down" />
      </div>
    </div>
  );
}
