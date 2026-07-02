import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary: "border-2 border-[var(--color-ink)] bg-[var(--color-amber)] px-5 py-3 text-[var(--color-ink)] shadow-[5px_5px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_var(--color-ink)]",
  secondary: "border-2 border-[var(--color-ink)] bg-[var(--color-mist-light)] px-5 py-3 text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white",
  ghost: "border-b-2 border-current py-1 text-current hover:text-[var(--color-brick)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-3 text-sm font-bold transition-all duration-150 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
