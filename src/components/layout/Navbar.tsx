import { NavLink } from "react-router-dom";
import { useState } from "react";
import { nav, owner } from "../../content/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/80 border-b border-border">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-text hover:text-signal transition-colors"
          onClick={() => setOpen(false)}
        >
          {owner.name === "[Pushkar Kumar]" ? "Pushkar Kumar" : owner.name}
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-signal" : "text-text-muted hover:text-text"
                  }`
                }
                style={({ isActive }) => (isActive ? { backgroundColor: "var(--signal-dim)" } : undefined)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col justify-center gap-[5px] w-9 h-9 items-end"
          >
            <span
              className="h-[2px] bg-text rounded transition-all"
              style={{ width: open ? "22px" : "22px", transform: open ? "translateY(7px) rotate(45deg)" : "none" }}
            />
            <span
              className="h-[2px] bg-text rounded transition-all"
              style={{ width: "16px", opacity: open ? 0 : 1 }}
            />
            <span
              className="h-[2px] bg-text rounded transition-all"
              style={{ width: "22px", transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="md:hidden border-t border-border bg-bg px-5 py-3 flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive ? "text-signal" : "text-text-muted hover:text-text"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
