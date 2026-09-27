import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative w-11 h-6 rounded-full border border-border-strong bg-surface-2 transition-colors"
    >
      <span
        className="absolute top-[2px] h-4 w-4 rounded-full bg-signal transition-transform duration-200"
        style={{ transform: isDark ? "translateX(3px)" : "translateX(23px)" }}
      />
      <span className="sr-only">{isDark ? "Dark theme active" : "Light theme active"}</span>
    </button>
  );
}
