// components/layout/NavbarClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logoIcon from "@/app/icon.png";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Games",
    href: "/games",
  },
  {
    label: "Devlog",
    href: "/devlog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

type NavbarClientProps = {
  shortName: string;
};

export function NavbarClient({ shortName }: NavbarClientProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isActiveLink(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-border)] bg-[rgba(5,5,5,0.78)] backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <span className="flex size-10 items-center justify-center overflow-hidden rounded-full border border-[var(--surface-border)] bg-white transition-colors group-hover:border-[var(--accent)]">
              <Image
                src={logoIcon}
                alt="Zennyx Interactive Studio logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
                priority
              />
            </span>

            <div className="leading-none">
              <p className="font-display text-sm font-semibold tracking-[-0.03em]">
                {shortName}
              </p>

              <p className="mt-1 hidden font-mono-accent text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-soft)] sm:block">
                Interactive Studio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--foreground)] ${isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)]"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button href="/devlog" variant="secondary" className="px-4 py-2">
              Read Devlog
            </Button>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:border-[var(--accent)] md:hidden"
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-current transition-transform ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
              />

              <span
                className={`block h-[2px] w-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
              />

              <span
                className={`block h-[2px] w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </nav>

        <div
          id="mobile-navigation"
          className={`overflow-hidden border-t border-[var(--surface-border)] transition-[max-height,opacity] duration-300 md:hidden ${isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="space-y-2 py-4">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3 font-mono-accent text-xs uppercase tracking-[0.16em] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${isActive
                    ? "border-[var(--accent)] text-[var(--accent)]"
                    : "text-[var(--muted)]"
                    }`}
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--muted-soft)]">-&gt;</span>
                </Link>
              );
            })}

            <Link
              href="/devlog"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 font-mono-accent text-xs font-bold uppercase tracking-[0.16em] text-[#050505] transition-colors hover:bg-transparent hover:text-[var(--accent)]"
            >
              Read Devlog
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}