// Brookside Party Warehouse — Logo set
// Refined balloons + cleaner type. SVG primitives.

const Balloon = ({ x, y, color, tilt = 0, size = 1, highlight = "rgba(255,255,255,0.55)", stroke = "#1B1A1F" }) => (
  <g transform={`translate(${x} ${y}) rotate(${tilt}) scale(${size})`}>
    {/* String */}
    <path d="M0 32 C -2 44, 3 56, 0 72" stroke={stroke} strokeWidth="1.4" fill="none" strokeLinecap="round" />
    {/* Tie */}
    <path d="M-3 30 L 0 36 L 3 30 Z" fill={color} stroke={stroke} strokeWidth="1" strokeLinejoin="round" />
    {/* Body */}
    <ellipse cx="0" cy="14" rx="18" ry="22" fill={color} stroke={stroke} strokeWidth="1.6" />
    {/* Highlight */}
    <ellipse cx="-6" cy="6" rx="4" ry="7" fill={highlight} opacity="0.9" />
  </g>
);

// Bouquet of 5 balloons — cleaner than original, better arrangement
const BalloonBouquet = ({ size = 120 }) => (
  <svg viewBox="0 0 160 160" width={size} height={size} style={{ overflow: "visible" }}>
    <Balloon x={42} y={56} color="var(--blue)" tilt={-12} size={0.95} />
    <Balloon x={118} y={52} color="var(--yellow)" tilt={14} size={0.95} />
    <Balloon x={56} y={78} color="var(--green)" tilt={-6} size={0.9} />
    <Balloon x={104} y={80} color="var(--orange)" tilt={8} size={0.9} />
    <Balloon x={80} y={66} color="var(--red)" tilt={0} size={1.05} />
    {/* Knotted strings */}
    <path d="M80 110 C 78 120, 82 124, 80 134" stroke="#1B1A1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
  </svg>
);

// Primary lockup — circular type around balloons (refined)
const LogoCircular = ({ size = 280, color = "#1B1A1F", bgTransparent = true }) => {
  const id = React.useId();
  return (
    <svg viewBox="0 0 320 360" width={size} height={size * 360 / 320}>
      {!bgTransparent && <circle cx="160" cy="160" r="158" fill="var(--paper)" />}
      <defs>
        {/* Top arc: text rides above, reading left-to-right across the top of the circle */}
        <path id={`${id}-top`} d="M 50 160 A 110 110 0 0 1 270 160" fill="none" />
        {/* Bottom arc: a wide, shallow downward-curving arc near the bottom of the circle.
            sweep=0 + start-left/end-right means the arc curves UPWARD between endpoints,
            and text on this path reads right-side-up across the bottom of the lockup. */}
        <path id={`${id}-bot`} d="M 30 220 A 160 160 0 0 0 290 220" fill="none" />
      </defs>
      <text fill={color} fontFamily="var(--display)" fontWeight="800" fontSize="38" letterSpacing="6">
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">BROOKSIDE</textPath>
      </text>
      <text fill={color} fontFamily="var(--body)" fontWeight="600" fontSize="17" letterSpacing="7">
        <textPath href={`#${id}-bot`} startOffset="50%" textAnchor="middle">PARTY · WAREHOUSE</textPath>
      </text>
      {/* Balloons — bigger, higher in the circle, sit between BROOKSIDE and PARTY · WAREHOUSE */}
      <g transform="translate(160 138)">
        <Balloon x={-42} y={-12} color="var(--blue)"   tilt={-12} size={1.20} stroke={color} />
        <Balloon x={ 46} y={-16} color="var(--yellow)" tilt={ 14} size={1.20} stroke={color} />
        <Balloon x={-22} y={ 16} color="var(--green)"  tilt={ -6} size={1.12} stroke={color} />
        <Balloon x={ 28} y={ 20} color="var(--orange)" tilt={  8} size={1.12} stroke={color} />
        <Balloon x={  4} y={  2} color="var(--red)"    tilt={  0} size={1.35} stroke={color} />
        <path d="M4 70 C 0 82, 8 88, 4 102" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
};

// Horizontal lockup — for nav and footer
const LogoHorizontal = ({ height = 44, color = "#1B1A1F" }) => {
  const w = height * 5.5;
  return (
    <svg viewBox="0 0 220 64" width={w} height={height * 64 / 44} style={{ overflow: "visible" }}>
      <g transform="translate(0 4) scale(0.7)">
        <Balloon x={14} y={20} color="var(--blue)" tilt={-12} size={0.7} stroke={color} />
        <Balloon x={36} y={18} color="var(--yellow)" tilt={14} size={0.7} stroke={color} />
        <Balloon x={22} y={32} color="var(--green)" tilt={-6} size={0.65} stroke={color} />
        <Balloon x={42} y={32} color="var(--orange)" tilt={8} size={0.65} stroke={color} />
        <Balloon x={28} y={26} color="var(--red)" tilt={0} size={0.78} stroke={color} />
        {/* Tied strings extending below the bouquet */}
        <path d="M28 76 C 26 84, 32 88, 28 96" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>
      <text x="56" y="28" fontFamily="var(--display)" fontWeight="800" fontSize="18" fill={color} letterSpacing="0.5">BROOKSIDE</text>
      <text x="56" y="42" fontFamily="var(--body)" fontWeight="600" fontSize="9" fill={color} letterSpacing="2.4">PARTY · WAREHOUSE</text>
    </svg>
  );
};

// Wordmark — type only
const LogoWordmark = ({ size = 200, color = "#1B1A1F" }) => (
  <svg viewBox="0 0 400 120" width={size} height={size * 0.3}>
    <text x="200" y="62" textAnchor="middle" fontFamily="var(--display)" fontWeight="800" fontSize="56" fill={color} letterSpacing="-1">BROOKSIDE</text>
    <line x1="80" y1="76" x2="320" y2="76" stroke={color} strokeWidth="1.5" />
    <text x="200" y="98" textAnchor="middle" fontFamily="var(--body)" fontWeight="600" fontSize="14" fill={color} letterSpacing="6">PARTY  ·  WAREHOUSE</text>
  </svg>
);

// Mini badge — square stamp
const LogoBadge = ({ size = 120, dark = false }) => (
  <svg viewBox="0 0 120 120" width={size} height={size}>
    <rect x="2" y="2" width="116" height="116" rx="22" fill={dark ? "#1B1A1F" : "var(--cream)"} stroke={dark ? "var(--cream)" : "#1B1A1F"} strokeWidth="2" />
    <g transform="translate(60 50) scale(0.7)">
      <Balloon x={-22} y={-6} color="var(--blue)" tilt={-12} size={0.85} />
      <Balloon x={24} y={-8} color="var(--yellow)" tilt={14} size={0.85} />
      <Balloon x={-12} y={10} color="var(--green)" tilt={-6} size={0.78} />
      <Balloon x={14} y={12} color="var(--orange)" tilt={8} size={0.78} />
      <Balloon x={2} y={2} color="var(--red)" tilt={0} size={0.95} />
    </g>
    <text x="60" y="100" textAnchor="middle" fontFamily="var(--display)" fontWeight="800" fontSize="13" fill={dark ? "var(--cream)" : "#1B1A1F"} letterSpacing="2.4">BROOKSIDE</text>
  </svg>
);

// Spookier mode logo — same balloons but black/blood
const LogoSpookier = ({ size = 280 }) => {
  const id = React.useId();
  return (
    <svg viewBox="0 0 320 320" width={size} height={size}>
      <defs>
        <path id={`${id}-top-s`} d="M 50 160 A 110 110 0 0 1 270 160" fill="none" />
        <path id={`${id}-bot-s`} d="M 60 175 A 100 100 0 0 0 260 175" fill="none" />
      </defs>
      <text fill="var(--blood)" fontFamily="Creepster, serif" fontWeight="400" fontSize="44" letterSpacing="6" y="0">
        <textPath href={`#${id}-top-s`} startOffset="50%" textAnchor="middle">SPOOKIER</textPath>
      </text>
      <text fill="var(--bone)" fontFamily="var(--body)" fontWeight="600" fontSize="18" letterSpacing="9">
        <textPath href={`#${id}-bot-s`} startOffset="50%" textAnchor="middle">UPSTAIRS · ALL SEASON</textPath>
      </text>
      <g transform="translate(160 160)">
        {/* Black balloons */}
        <Balloon x={-32} y={-10} color="#1B1A1F" tilt={-12} size={0.95} highlight="rgba(200,16,46,0.7)" />
        <Balloon x={36} y={-14} color="var(--blood)" tilt={14} size={0.95} highlight="rgba(255,255,255,0.4)" />
        <Balloon x={-18} y={14} color="#1B1A1F" tilt={-6} size={0.9} highlight="rgba(200,16,46,0.7)" />
        <Balloon x={22} y={16} color="#1B1A1F" tilt={8} size={0.9} highlight="rgba(200,16,46,0.7)" />
        <Balloon x={2} y={2} color="var(--blood)" tilt={0} size={1.1} highlight="rgba(255,255,255,0.4)" />
      </g>
    </svg>
  );
};

Object.assign(window, { Balloon, BalloonBouquet, LogoCircular, LogoHorizontal, LogoWordmark, LogoBadge, LogoSpookier });
