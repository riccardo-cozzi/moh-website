// Gradiente condiviso del brand: verde → teal
// Usato su testi (gradientTitle) e icone SVG (gradientIconSx + <GradientSvgDef />)

const GRADIENT_START = '#2e7d32';
const GRADIENT_END   = '#0094ae';
export const GRADIENT = `linear-gradient(135deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)`;
export const GRADIENT_ID = 'appBrandGradient';

// ── testo ──────────────────────────────────────────────────────────────────
export const gradientTitle = {
  fontFamily: 'Neogen',
  backgroundImage: `linear-gradient(135deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  display: 'block',
};

// ── icone SVG ───────────────────────────────────────────────────────────────
export const gradientIconSx = {
  fill: `url(#${GRADIENT_ID})`,
};

// ── bottone ────────────────────────────────────────────────────────────────
export const gradientButtonSx = {
  background: `linear-gradient(135deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)`,
  borderRadius: '20px',
  color: 'white',
  fontWeight: 'bold',
  boxShadow: 'none',
  '&:hover': {
    background: `linear-gradient(135deg, ${GRADIENT_START} 0%, ${GRADIENT_END} 100%)`,
    filter: 'brightness(1.08)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
};

// Monta questo componente UNA SOLA VOLTA nell'albero (es. App.js)
export const GradientSvgDef = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor={GRADIENT_START} />
        <stop offset="100%" stopColor={GRADIENT_END}   />
      </linearGradient>
    </defs>
  </svg>
);
