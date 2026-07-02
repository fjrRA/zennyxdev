// components/layout/NavbarClient.tsx

"use client";

import logoIcon from "@/app/icon.png";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    label: "Games",
    href: "/games",
  },
  {
    label: "Devlog",
    href: "/devlog",
  },
  {
    label: "Studio",
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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function isActiveLink(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className="
    site-header
    sticky
    top-0
    z-[999]
    isolate
    border-b
    border-[var(--surface-border)]
  "
    >
      <Container>
        <div
          className="
            flex
            min-h-20
            items-center
            justify-between
            gap-6
          "
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="
              inline-flex
              min-w-0
              items-center
              gap-3
              focus-visible:outline-offset-4
            "
            aria-label={`${shortName} homepage`}
          >
            <Image
              src={logoIcon}
              alt=""
              width={40}
              height={40}
              priority
              className="
                size-10
                shrink-0
                object-contain
              "
            />

            <span className="min-w-0">
              <span
                className="
                  block
                  text-sm
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[-0.02em]
                "
              >
                {shortName}
              </span>

              <span
                className="
                  mt-1
                  block
                  truncate
                  text-[0.625rem]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[0.16em]
                  text-[var(--ash)]
                "
              >
                Interactive Studio
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="
              hidden
              min-h-20
              items-stretch
              md:flex
            "
          >
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    inline-flex
                    min-h-20
                    items-center
                    border-b-2
                    px-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.1em]
                    transition-colors
                    duration-200
                    ${isActive
                      ? `
                          border-[var(--accent)]
                          text-[var(--foreground)]
                        `
                      : `
                          border-transparent
                          text-[var(--ash)]
                          hover:text-[var(--foreground)]
                        `
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="
              inline-flex
              min-h-11
              items-center
              justify-center
              border-l
              border-[var(--surface-border)]
              bg-transparent
              pl-5
              text-[0.6875rem]
              font-semibold
              uppercase
              tracking-[0.14em]
              transition-colors
              duration-200
              hover:text-[var(--accent)]
              md:hidden
            "
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="
      site-mobile-navigation
      absolute
      left-0
      top-full
      z-[110]
      w-full
      max-h-[calc(100dvh-5rem)]
      overflow-y-auto
      border-t
      border-[var(--surface-border)]
      md:hidden
    "
        >
          <Container>
            <nav
              aria-label="Mobile navigation"
              className="py-3"
            >
              {navLinks.map((link, index) => {
                const isActive = isActiveLink(link.href);
                const itemNumber = String(index + 1).padStart(2, "0");

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                grid
                min-h-20
                grid-cols-[3rem_1fr_auto]
                items-center
                gap-3
                border-b
                border-[var(--surface-border)]
                text-sm
                font-semibold
                uppercase
                tracking-[0.08em]
                transition-colors
                duration-200
                ${isActive
                        ? "text-[var(--accent)]"
                        : `
                      text-[var(--foreground)]
                      hover:text-[var(--accent)]
                    `
                      }
              `}
                  >
                    <span
                      className="
                  font-mono-accent
                  text-[0.6875rem]
                  font-normal
                  tracking-[0.08em]
                  text-[var(--ash)]
                "
                    >
                      {itemNumber}
                    </span>

                    <span>{link.label}</span>

                    <span aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}