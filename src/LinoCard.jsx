import React, { useMemo } from 'react';
import { roughRectPath, roughLinePath, carvingMarks } from './lino-paths.js';
import { CarvedIcon } from './LinocutIcons.jsx';

// Square viewBox: 100×100
function StampFrame({ children, thick = 4, inner = 2, seed = 1 }) {
  const outerOut = roughRectPath(0.5, 0.5, 99, 99,   { perSide: 18, amp: 1.6, seed: seed * 11 + 1 });
  const outerIn  = roughRectPath(thick, thick, 100 - thick * 2, 100 - thick * 2, { perSide: 18, amp: 1.4, seed: seed * 11 + 2 });
  const innerOut = roughRectPath(thick + 2.6, thick + 2.6, 100 - (thick + 2.6) * 2, 100 - (thick + 2.6) * 2, { perSide: 18, amp: 1.2, seed: seed * 11 + 3 });
  const innerIn  = roughRectPath(thick + 2.6 + inner, thick + 2.6 + inner, 100 - (thick + 2.6 + inner) * 2, 100 - (thick + 2.6 + inner) * 2, { perSide: 18, amp: 1.0, seed: seed * 11 + 4 });

  const nicks = useMemo(() => [
    ...carvingMarks([1, 1, 98, 4],  { count: 3, seed: seed * 7 + 1, lenMin: 1, lenMax: 2.6 }),
    ...carvingMarks([1, 95, 98, 4], { count: 3, seed: seed * 7 + 2, lenMin: 1, lenMax: 2.6 }),
    ...carvingMarks([1, 1, 4, 98],  { count: 4, seed: seed * 7 + 3, lenMin: 1, lenMax: 2.6 }),
    ...carvingMarks([95, 1, 4, 98], { count: 4, seed: seed * 7 + 4, lenMin: 1, lenMax: 2.6 }),
  ], [seed]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none"
        width="100%" height="100%"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'block' }}
        shapeRendering="geometricPrecision"
      >
        <path d={outerOut + ' ' + outerIn} fillRule="evenodd" fill="var(--ink)" />
        <path d={innerOut + ' ' + innerIn} fillRule="evenodd" fill="var(--ink)" />
        <g stroke="var(--paper)" strokeWidth="0.7" strokeLinecap="round" fill="none">
          {nicks.map((d, i) => <path key={i} d={d} />)}
        </g>
      </svg>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {children}
      </div>
    </div>
  );
}

function CardBackLino({ backStyle, seed = 1 }) {
  const blockPath     = roughRectPath(2, 2, 96, 96,   { perSide: 22, amp: 1.5, seed: seed * 13 });
  const innerLinePath = roughRectPath(5.5, 5.5, 89, 89, { perSide: 22, amp: 1.0, seed: seed * 13 + 7 });

  const blockNicks = useMemo(() => [
    ...carvingMarks([6, 6, 88, 88], { count: 18, seed: seed * 19, lenMin: 0.8, lenMax: 2.4 }),
  ], [seed]);

  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--paper)', overflow: 'hidden' }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none"
        width="100%" height="100%"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
        shapeRendering="geometricPrecision"
      >
        <path d={blockPath} fill="var(--ink)" />
        <path d={innerLinePath} fill="none" stroke="var(--paper)" strokeWidth="0.6" />
        <g stroke="var(--paper)" strokeWidth="0.6" strokeLinecap="round" fill="none">
          {blockNicks.map((d, i) => <path key={i} d={d} />)}
        </g>
        <g transform="translate(50 50)" fill="var(--paper)" stroke="none">
          {backStyle === 'eye' && (
            <g>
              <path d="M -36 0 Q 0 -28 36 0 Q 0 28 -36 0 Z" />
              <circle cx="0" cy="0" r="11" fill="var(--ink)" />
              <circle cx="0" cy="0" r="5"  fill="var(--paper)" />
              <path d="M -2 -42 L 2 -42 L 2 -30 L -2 -30 Z M -2 30 L 2 30 L 2 42 L -2 42 Z M -42 -2 L -30 -2 L -30 2 L -42 2 Z M 30 -2 L 42 -2 L 42 2 L 30 2 Z" />
            </g>
          )}
          {backStyle === 'sigil' && (
            <g>
              <path d="M 0 -38 L 32 22 L -32 22 Z" />
              <path d="M -32 -22 L 32 -22 L 0 38 Z" />
              <circle cx="0" cy="0" r="5"   fill="var(--ink)" />
              <circle cx="0" cy="0" r="2.4" fill="var(--paper)" />
            </g>
          )}
          {backStyle === 'mandala' && (
            <g>
              <circle cx="0" cy="0" r="34" fill="none" stroke="var(--paper)" strokeWidth="2.4" />
              <circle cx="0" cy="0" r="22" />
              <circle cx="0" cy="0" r="11" fill="var(--ink)" />
              <circle cx="0" cy="0" r="3.5" fill="var(--paper)" />
              {[0, 45, 90, 135].map(a => {
                const rad = (a * Math.PI) / 180;
                const x = Math.cos(rad) * 36, y = Math.sin(rad) * 36;
                return <path key={a} d={`M ${-x} ${-y} L ${x} ${y}`} stroke="var(--paper)" strokeWidth="2.2" />;
              })}
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}

function CardFrontLino({ data, focused, seed = 1 }) {
  const fmt = `${String(data.hour).padStart(2, '0')}:${String(data.hour).padStart(2, '0')}`;
  const numSize = focused ? 13 : 5.5;

  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--paper)', color: 'var(--ink)' }}>
      {/* Cadre crayonné + illustration — remplit toute la carte */}
      <StampFrame thick={focused ? 4.5 : 3} inner={focused ? 1.2 : 0.7} seed={seed}>
        <div style={{
          position: 'absolute', inset: focused ? '12%' : '11%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <CarvedIcon hour={data.hour} size="100%" />
        </div>
      </StampFrame>
    </div>
  );
}

function HourLabel({ data, focused }) {
  const fmt = `${String(data.hour).padStart(2, '0')}:${String(data.hour).padStart(2, '0')}`;
  const numSize = focused ? 13 : 5.5;
  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'var(--font-numeric)',
      fontSize: numSize,
      fontWeight: 700, letterSpacing: '0.08em',
      color: 'var(--ink)', lineHeight: 1,
      paddingBottom: focused ? 4 : 2,
    }}>{fmt}</div>
  );
}

export function LinoCard({ data, revealed, focused, backStyle, onClick }) {
  const jitter  = focused ? 0 : (((data.hour * 37) % 7) - 3) * 0.25;
  const jitterX = focused ? 0 : (((data.hour * 53) % 5) - 2) * 0.4 + (data.hour === 0 ? 1.5 : 0);
  const jitterY = focused ? 0 : (((data.hour * 71) % 5) - 2) * 0.4;
  const seed = (data.hour + 1) * 3 + 7;

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1/1',
        cursor: onClick ? 'pointer' : 'default',
        transform: `rotate(${jitter}deg) translate(${jitterX}px, ${jitterY}px)`,
        transition: 'transform 250ms ease',
        overflow: 'visible',
      }}
    >
      {/* Heure hors flux, au-dessus de la carte — uniquement en mode focused */}
      {revealed && focused && (
        <div style={{ position: 'absolute', bottom: '100%', left: 0, right: 0 }}>
          <HourLabel data={data} focused={focused} />
        </div>
      )}

      {/* Carte carrée */}
      <div style={{
        position: 'absolute', inset: 0,
        perspective: '600px',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          transformStyle: 'preserve-3d',
          transform: revealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 700ms cubic-bezier(.4,0,.2,1)',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          }}>
            <CardBackLino backStyle={backStyle} seed={seed} />
          </div>
          <div style={{
            position: 'absolute', inset: 0,
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}>
            <CardFrontLino data={data} focused={focused} seed={seed} />
          </div>
        </div>
      </div>
    </div>
  );
}
