// components/ui/Container.tsx

import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-[var(--max-width)]
        px-[var(--page-padding-mobile)]
        sm:px-[var(--page-padding-tablet)]
        lg:px-[var(--page-padding-desktop)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}