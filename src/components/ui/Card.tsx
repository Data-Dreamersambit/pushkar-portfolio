import type { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`bg-surface border border-border rounded-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}
