type SignalBarsProps = {
  level: 1 | 2 | 3 | 4 | 5;
  label?: string;
};

const LEVEL_NAMES: Record<number, string> = {
  1: "basic",
  2: "working",
  3: "proficient",
  4: "advanced",
  5: "expert",
};

// Renders like a signal-strength indicator: ascending bars, filled up to `level`.
export function SignalBars({ level, label }: SignalBarsProps) {
  const bars = [1, 2, 3, 4, 5];
  return (
    <div
      className="flex items-end gap-[3px] h-4"
      role="img"
      aria-label={`${label ? label + ": " : ""}${LEVEL_NAMES[level]} (${level} of 5)`}
    >
      {bars.map((bar) => (
        <span
          key={bar}
          aria-hidden="true"
          className="w-[4px] rounded-[1px] transition-colors duration-300"
          style={{
            height: `${30 + bar * 14}%`,
            background: bar <= level ? "var(--signal)" : "var(--border-strong)",
          }}
        />
      ))}
    </div>
  );
}
