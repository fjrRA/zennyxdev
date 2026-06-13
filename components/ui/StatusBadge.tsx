import type { ReactNode } from "react";

type StatusBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function StatusBadge({ children, className = "" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 font-mono-accent text-xs uppercase tracking-[0.16em] text-[var(--accent)] ${className}`}
    >
      {children}
    </span>
  );
}
