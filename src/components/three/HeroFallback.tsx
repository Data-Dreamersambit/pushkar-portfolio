// Static, dependency-free stand-in for the 3D scene. Used when WebGL is
// unavailable, or reduced-motion is requested (in which case only the ring
// opacity is fixed rather than animated — no motion at all).
export function HeroFallback({ allowMotion = true }: { allowMotion?: boolean }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className="w-full h-full"
      role="img"
      aria-label="Stylised illustration of a 5G cell tower radiating signal"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="38%" r="60%">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="600" height="600" fill="url(#glow)" />

      {/* concentric signal rings */}
      {[70, 115, 160, 205].map((r, i) => (
        <circle
          key={r}
          cx="300"
          cy="230"
          r={r}
          fill="none"
          stroke="var(--signal)"
          strokeWidth="1.5"
          opacity={allowMotion ? 0.5 - i * 0.1 : 0.22}
        />
      ))}

      {/* node mesh */}
      {[
        [180, 150],
        [420, 170],
        [150, 300],
        [450, 320],
        [300, 90],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="300" y1="230" x2={x} y2={y} stroke="var(--border-strong)" strokeWidth="1" />
          <circle cx={x} cy={y} r="4" fill="var(--signal)" opacity="0.8" />
        </g>
      ))}

      {/* mast */}
      <polygon points="292,420 308,420 320,560 280,560" fill="var(--surface-2)" stroke="var(--border-strong)" />
      <line x1="300" y1="230" x2="300" y2="420" stroke="var(--border-strong)" strokeWidth="3" />

      {/* antenna array */}
      <rect x="266" y="205" width="14" height="46" rx="2" fill="var(--surface-2)" stroke="var(--signal)" />
      <rect x="293" y="200" width="14" height="46" rx="2" fill="var(--surface-2)" stroke="var(--signal)" />
      <rect x="320" y="205" width="14" height="46" rx="2" fill="var(--surface-2)" stroke="var(--signal)" />
    </svg>
  );
}
