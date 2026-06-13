// components/ui/Button.tsx
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--accent)] text-black hover:bg-orange-400 border border-[var(--accent)]",
  secondary:
    "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--surface-soft)] border border-[var(--surface-border)]",
  ghost:
    "bg-transparent text-[var(--muted)] hover:text-[var(--foreground)] border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${buttonVariants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}