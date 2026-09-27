import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full border border-border-strong text-xs font-mono text-text-muted">
      {children}
    </span>
  );
}
