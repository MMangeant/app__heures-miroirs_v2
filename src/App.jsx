import React, { useState, useCallback } from 'react';
import { MIRROR_HOURS } from './hours-data.js';
import { roughRectPath } from './lino-paths.js';
import { LinoCard } from './LinoCard.jsx';
import { LinoHourSelector } from './LinoHourSelector.jsx';

// ── Palettes ─────────────────────────────────────────────────────────────────
const PALETTES = {
  parchemin: { paper: '#ece1c8', ink: '#0e0c0a', paperDeep: '#d9cca8' },
  kraft:     { paper: '#d8c39a', ink: '#161310', paperDeep: '#c2a978' },
  riziere:   { paper: '#efe9d8', ink: '#0a0a0a', paperDeep: '#e1d9c1' },
};

const FONT_SETS = {
  carved: {
    '--font-display': '"Londrina Solid", "Bungee", "Cabin Sketch", system-ui, sans-serif',
    '--font-stamp':   '"Bungee", "Londrina Solid", system-ui, sans-serif',
    '--font-body':    '"Caveat", "Permanent Marker", cursive',
    '--font-numeric': '"Bungee", "Londrina Solid", system-ui, sans-serif',
  },
  sketch: {
    '--font-display': '"Cabin Sketch", "Londrina Sketch", system-ui, sans-serif',
    '--font-stamp':   '"Cabin Sketch", system-ui, sans-serif',
    '--font-body':    '"Caveat", cursive',
    '--font-numeric': '"Cabin Sketch", system-ui, sans-serif',
  },
  marker: {
    '--font-display': '"Permanent Marker", "Rubik Mono One", system-ui, sans-serif',
    '--font-stamp':   '"Permanent Marker", system-ui, sans-serif',
    '--font-body':    '"Caveat", cursive',
    '--font-numeric': '"Rubik Mono One", system-ui, sans-serif',
  },
};

// ── Paper grain backdrop ──────────────────────────────────────────────────────
function PaperGrain() {
  return (
    <svg style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      pointerEvents: 'none', zIndex: 0, mixBlendMode: 'multiply', opacity: 0.45,
    }}>
      <filter id="paperNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" />
        <feColorMatrix type="matrix" values="
          0 0 0 0 0.55
          0 0 0 0 0.42
          0 0 0 0 0.28
          0 0 0 0.20 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paperNoise)" />
    </svg>
  );
}

// ── Corner ornament ────────────────────────────────────────────────────────────
function CornerFleuron({ rotate = 0 }) {
  return (
    <svg viewBox="0 0 40 40" width="36" height="36" style={{ transform: `rotate(${rotate}deg)` }}>
      <g fill="var(--ink)">
        <circle cx="6" cy="6" r="3" />
        <path d="M6 6 L20 6 L20 8 L6 8 Z" />
        <path d="M6 6 L6 20 L8 20 L8 6 Z" />
        <path d="M14 14 L20 14 L17 8 Z" />
        <path d="M14 14 L14 20 L8 17 Z" />
      </g>
    </svg>
  );
}

// ── Heavy carved button ───────────────────────────────────────────────────────
function StampButton({ onClick, children, inverted = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'relative',
        background: 'transparent',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: 22,
        fontWeight: 900,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: inverted ? 'var(--paper)' : 'var(--ink)',
        height: 64,
        minWidth: 240,
        display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center',
        transform: 'rotate(-1deg)',
      }}
    >
      <svg viewBox="0 0 240 64" preserveAspectRatio="none"
        width="100%" height="100%"
        style={{ position: 'absolute', inset: 0, display: 'block' }}
        shapeRendering="geometricPrecision">
        {inverted ? (
          <path d={roughRectPath(2.5, 2.5, 235, 59, { perSide: 22, amp: 1.6, seed: 51 })}
            fill="var(--ink)" />
        ) : (
          <path
            d={
              roughRectPath(2.5, 2.5, 235, 59, { perSide: 22, amp: 1.6, seed: 51 }) + ' ' +
              roughRectPath(7, 7, 226, 50, { perSide: 22, amp: 1.2, seed: 52 })
            }
            fillRule="evenodd" fill="var(--ink)" />
        )}
      </svg>
      <span style={{ position: 'relative', lineHeight: 1 }}>{children}</span>
    </button>
  );
}

// ── Page divider ──────────────────────────────────────────────────────────────
function PrintDivider() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 12, margin: '20px auto 16px', width: 240,
    }}>
      <svg width="80" height="14" viewBox="0 0 80 14" shapeRendering="geometricPrecision">
        <path d={roughRectPath(2, 4, 76, 5, { perSide: 18, amp: 0.7, seed: 71 })} fill="var(--ink)" />
      </svg>
      <svg viewBox="0 0 20 20" width="22" height="22">
        <path d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" fill="var(--ink)" />
      </svg>
      <svg width="80" height="14" viewBox="0 0 80 14" shapeRendering="geometricPrecision">
        <path d={roughRectPath(2, 4, 76, 5, { perSide: 18, amp: 0.7, seed: 72 })} fill="var(--ink)" />
      </svg>
    </div>
  );
}

// ── Focused card overlay ──────────────────────────────────────────────────────
function FocusedCardOverlay({ data, backStyle, onClose }) {
  const [stage, setStage] = useState('rising');

  React.useEffect(() => {
    const t1 = setTimeout(() => setStage('flipping'), 260);
    const t2 = setTimeout(() => setStage('shown'), 260 + 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [data.hour]);

  const revealed = stage !== 'rising';
  const shown    = stage === 'shown';

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 90,
        background: 'var(--paper)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflowY: 'auto',
        animation: 'fadeIn 280ms ease',
        padding: '56px 20px 48px',
        boxSizing: 'border-box',
      }}
    >
      <PaperGrain />
      <div style={{ position: 'absolute', top: 70, left: 18,  opacity: 0.7, zIndex: 91 }}><CornerFleuron rotate={0}   /></div>
      <div style={{ position: 'absolute', top: 70, right: 18, opacity: 0.7, zIndex: 91 }}><CornerFleuron rotate={90}  /></div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* Carte carrée + flip 3D */}
        <div onClick={(e) => e.stopPropagation()} style={{ width: 240, flexShrink: 0 }}>
          <LinoCard data={data} revealed={revealed} focused={true} backStyle={backStyle} />
        </div>

        {/* Texte sous la carte */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: 240, flexShrink: 0,
            marginTop: 20,
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 400ms ease, transform 400ms ease',
          }}
        >
        {[
          { label: 'Numérologie', text: data.numerologie },
          { label: 'Symbolique',  text: data.symbolique  },
          { label: 'Intuition',   text: data.intuitive   },
        ].map(({ label, text }, i) => (
          <div key={label} style={{ marginTop: i > 0 ? 14 : 0 }}>
            <div style={{
              fontFamily: 'var(--font-stamp)', fontSize: 8,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--ink)', opacity: 0.55, marginBottom: 3,
            }}>{label}</div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.3,
              color: 'var(--ink)',
            }}>{text}</div>
          </div>
        ))}

        <button
          onClick={onClose}
          style={{
            display: 'block', margin: '28px auto 0',
            background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-stamp)', fontSize: 11,
            letterSpacing: '0.3em', color: 'var(--ink)',
            textTransform: 'uppercase',
            borderBottom: '1.5px solid var(--ink)', paddingBottom: 3,
          }}>Refermer</span>
        </button>
        </div>
      </div>
    </div>
  );
}

// ── Tweaks panel (simple, standalone) ────────────────────────────────────────
function TweaksPanel({ fontSet, setFontSet, onRevealAll, onReset }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: 16, right: 16,
          zIndex: 200,
          background: 'rgba(250,249,247,.9)',
          border: '1px solid rgba(0,0,0,0.15)',
          borderRadius: 10,
          padding: '6px 14px',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 12, fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(0,0,0,0.14)',
        }}
      >
        {open ? '✕ Tweaks' : '⚙ Tweaks'}
      </button>

      {open && (
        <div style={{
          position: 'fixed', bottom: 54, right: 16, zIndex: 200,
          width: 260,
          background: 'rgba(250,249,247,.93)',
          backdropFilter: 'blur(20px)',
          border: '0.5px solid rgba(255,255,255,.6)',
          borderRadius: 14,
          padding: '14px 16px',
          boxShadow: '0 12px 40px rgba(0,0,0,.18)',
          fontFamily: 'system-ui, sans-serif',
          fontSize: 12,
          display: 'flex', flexDirection: 'column', gap: 14,
        }}>
          <Section label="Lettrage">
            <RadioGroup
              value={fontSet}
              options={[
                { value: 'carved', label: 'Bloc carved' },
                { value: 'sketch', label: 'Esquisse' },
                { value: 'marker', label: 'Marker' },
              ]}
              onChange={setFontSet}
            />
          </Section>

          <Section label="Cartes">
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={onRevealAll} style={tweakBtnStyle}>Tout révéler</button>
              <button onClick={onReset}     style={{ ...tweakBtnStyle, background: 'rgba(0,0,0,.06)', color: '#333' }}>Réinitialiser</button>
            </div>
          </Section>
        </div>
      )}
    </>
  );
}

const tweakBtnStyle = {
  flex: 1,
  height: 26, border: 'none', borderRadius: 7,
  background: 'rgba(0,0,0,.78)', color: '#fff',
  fontFamily: 'system-ui', fontSize: 11, fontWeight: 500,
  cursor: 'pointer',
};

function Section({ label, children }) {
  return (
    <div>
      <div style={{
        fontSize: 10, fontWeight: 600, letterSpacing: '0.06em',
        textTransform: 'uppercase', color: 'rgba(41,38,27,.45)',
        marginBottom: 8,
      }}>{label}</div>
      {children}
    </div>
  );
}

function RadioGroup({ value, options, onChange }) {
  return (
    <div style={{
      display: 'flex', padding: 2, borderRadius: 8,
      background: 'rgba(0,0,0,.06)',
    }}>
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          style={{
            flex: 1, border: 'none', borderRadius: 6,
            background: value === opt.value ? 'rgba(255,255,255,.9)' : 'transparent',
            boxShadow: value === opt.value ? '0 1px 2px rgba(0,0,0,.12)' : 'none',
            padding: '4px 6px', minHeight: 22,
            fontFamily: 'system-ui', fontSize: 11, fontWeight: 500,
            cursor: 'pointer', color: 'inherit',
            transition: 'background 0.15s',
          }}
        >{opt.label}</button>
      ))}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [palette]   = useState('parchemin');
  const [fontSet,   setFontSet]   = useState('carved');
  const [backStyle] = useState('eye');
  const [selectedHour, setSelectedHour] = useState(11);
  const [revealedSet,  setRevealedSet]  = useState(() => new Set(MIRROR_HOURS.map(h => h.hour)));
  const [focusedHour,  setFocusedHour]  = useState(null);

  const validate  = useCallback(() => {
    setRevealedSet(prev => new Set([...prev, selectedHour]));
    setFocusedHour(selectedHour);
  }, [selectedHour]);

  const closeFocus = useCallback(() => setFocusedHour(null), []);
  const revealAll  = useCallback(() => setRevealedSet(new Set(MIRROR_HOURS.map(h => h.hour))), []);
  const reset      = useCallback(() => { setRevealedSet(new Set()); setFocusedHour(null); }, []);

  const pal  = PALETTES[palette]  || PALETTES.parchemin;
  const font = FONT_SETS[fontSet] || FONT_SETS.carved;

  const cssVars = {
    '--paper':     pal.paper,
    '--paperDeep': pal.paperDeep,
    '--ink':       pal.ink,
    ...font,
  };

  return (
    <div style={{
      minHeight: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#1c1a14',
      padding: '20px 0', boxSizing: 'border-box',
    }}>
      {/* iPhone mockup frame */}
      <div style={{
        width: 390, height: 844,
        borderRadius: 48, overflow: 'hidden',
        position: 'relative',
        background: pal.paper,
        boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.18)',
        ...cssVars,
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)',
          width: 126, height: 37, borderRadius: 24, background: '#000', zIndex: 50,
        }} />

        {/* App content */}
        <div style={{
          position: 'absolute', inset: 0,
          background: pal.paper,
          color: pal.ink,
          overflow: 'hidden',
          ...cssVars,
        }}>
          <PaperGrain />

          <div style={{
            position: 'relative', zIndex: 1,
            height: '100%',
            display: 'flex', flexDirection: 'column',
            padding: '52px 14px 32px',
            boxSizing: 'border-box',
          }}>
            {/* Masthead */}
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <div style={{
                fontFamily: 'var(--font-stamp)',
                fontSize: 10,
                letterSpacing: '0.3em',
                color: 'var(--ink)',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}>★ Cabinet des Heures ★</div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 42,
                fontWeight: 900,
                color: 'var(--ink)',
                letterSpacing: '0.01em',
                lineHeight: 0.95,
                textTransform: 'uppercase',
              }}>Heures<br />Miroir</div>

              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: 19,
                color: 'var(--ink)',
                marginTop: 4,
                letterSpacing: '0.02em',
                transform: 'rotate(-1.5deg)',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}>tarot du temps</div>
            </div>

            {/* Hour selector */}
            <div style={{ marginTop: 16 }}>
              <LinoHourSelector value={selectedHour} onChange={setSelectedHour} />
            </div>

            {/* Validate button */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <StampButton onClick={validate}>Révéler la Carte</StampButton>
            </div>

            <PrintDivider />

            {/* 6×4 grid */}
            <div style={{
              flex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
              gap: 6,
              alignContent: 'start',
              width: '100%',
              boxSizing: 'border-box',
              padding: '4px 2px',
            }}>
              {MIRROR_HOURS.map(h => (
                <LinoCard
                  key={h.hour}
                  data={h}
                  revealed={revealedSet.has(h.hour)}
                  focused={false}
                  backStyle={backStyle}
                  onClick={() => {
                    if (revealedSet.has(h.hour)) setFocusedHour(h.hour);
                  }}
                />
              ))}
            </div>
          </div>

          {focusedHour !== null && (
            <FocusedCardOverlay
              data={MIRROR_HOURS[focusedHour]}
              backStyle={backStyle}
              onClose={closeFocus}
            />
          )}
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 60,
          height: 34, display: 'flex', justifyContent: 'center', alignItems: 'flex-end',
          paddingBottom: 8, pointerEvents: 'none',
        }}>
          <div style={{
            width: 139, height: 5, borderRadius: 100,
            background: 'rgba(0,0,0,0.25)',
          }} />
        </div>
      </div>

      {/* Tweaks panel (outside the phone frame so it's always accessible) */}
      <TweaksPanel
        fontSet={fontSet} setFontSet={setFontSet}
        onRevealAll={revealAll}
        onReset={reset}
      />
    </div>
  );
}
