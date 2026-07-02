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
  primary: `
    min-h-11
    rounded-[var(--radius-small)]
    border
    border-[var(--accent)]
    bg-[var(--accent)]
    px-5
    py-3
    text-[var(--paper-soft)]
    hover:border-[var(--accent-hover)]
    hover:bg-[var(--accent-hover)]
  `,

  secondary: `
    min-h-11
    rounded-[var(--radius-small)]
    border
    border-[var(--foreground)]
    bg-transparent
    px-5
    py-3
    text-[var(--foreground)]
    hover:bg-[var(--foreground)]
    hover:text-[var(--paper-soft)]
  `,

  ghost: `
    min-h-0
    border-b
    border-current
    bg-transparent
    px-0
    py-1
    text-[var(--foreground)]
    hover:text-[var(--accent)]
  `,
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
      className={`
        inline-flex
        items-center
        justify-center
        gap-3
        text-xs
        font-semibold
        uppercase
        leading-none
        tracking-[0.12em]
        transition-colors
        duration-200
        ease-out
        ${buttonVariants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}