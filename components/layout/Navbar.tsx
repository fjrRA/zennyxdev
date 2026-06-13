// components/layout/Navbar.tsx
import Link from "next/link";
import { getSiteConfig } from "@/lib/site";
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

export function Navbar() {
  const site = getSiteConfig();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-border)] bg-[rgba(5,5,5,0.78)] backdrop-blur-xl">
      <Container>
        <nav className="flex min-h-16 items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-[var(--surface-border)] bg-[var(--surface)] font-display text-sm font-semibold text-[var(--foreground)] transition-colors group-hover:border-[var(--accent)]">
              Z
            </span>

            <div className="leading-none">
              <p className="font-display text-sm font-semibold tracking-[-0.03em]">
                {site.shortName}
              </p>
              <p className="mt-1 hidden font-mono-accent text-[0.62rem] uppercase tracking-[0.16em] text-[var(--muted-soft)] sm:block">
                Interactive Studio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/devlog" variant="secondary" className="px-4 py-2">
              Read Devlog
            </Button>
          </div>

          <Link
            href="/contact"
            className="inline-flex rounded-full border border-[var(--surface-border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--accent)] md:hidden"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}