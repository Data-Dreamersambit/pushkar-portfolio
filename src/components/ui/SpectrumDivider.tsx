// A single deliberate motif reused as a section break: looks like a spectrum-analyzer
// trace rather than a plain rule. Kept static (no motion) so it doesn't compete
// with the hero's animation.
export function SpectrumDivider() {
  return (
    <svg
      className="spectrum-rule"
      viewBox="0 0 400 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points="0,14 20,14 26,4 32,24 38,14 60,14 66,9 72,19 78,14 140,14 146,2 152,26 158,14 220,14 226,10 232,18 238,14 300,14 306,5 312,23 318,14 400,14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
