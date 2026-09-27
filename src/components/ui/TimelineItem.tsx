import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Role } from "../../content/experience";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function TimelineItem({ role, isLast }: { role: Role; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const panelId = `role-panel-${role.title.replace(/\s+/g, "-")}`;

  return (
    <li className="relative pl-10 pb-10">
      {!isLast && (
        <span
          className="absolute left-[7px] top-4 bottom-0 w-px"
          style={{ backgroundColor: "var(--border-strong)" }}
          aria-hidden="true"
        />
      )}
      <span
        className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2"
        style={{ borderColor: "var(--signal)", backgroundColor: "var(--bg)" }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full text-left group"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-text group-hover:text-signal transition-colors">
            {role.title}
          </h3>
          <span className="font-mono text-xs text-text-faint">
            {role.start} – {role.end}
          </span>
        </div>
        <p className="text-text-muted text-sm mt-0.5">
          {role.company} · {role.location}
        </p>
        <p className="text-text-muted text-sm mt-2 max-w-2xl">{role.summary}</p>
        <span className="inline-block mt-2 text-xs font-mono text-signal">
          {open ? "Hide details" : "Show details"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={reduced ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2 max-w-2xl">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="text-text-muted text-sm leading-relaxed flex gap-2">
                  <span className="text-signal shrink-0" aria-hidden="true">
                    ·
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
