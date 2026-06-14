// components/layout/Footer.tsx
import Image from "next/image";
import logoIcon from "@/app/icon.png";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getSiteConfig } from "@/lib/site";
import { getActiveSocialLinks } from "@/lib/socials";

const footerLinks = [
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

export function Footer() {
  const site = getSiteConfig();
  const socialLinks = getActiveSocialLinks();

  return (
    <footer className="border-t border-[var(--surface-border)] bg-[rgba(5,5,5,0.55)]">
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
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

              <div>
                <p className="font-display text-base font-semibold">
                  {site.siteName}
                </p>
                <p className="mt-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.18em] text-[var(--muted-soft)]">
                  {site.type}
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              {site.footer.text}
            </p>
          </div>

          <div>
            <h2 className="font-mono-accent text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Explore
            </h2>

            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono-accent text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              Follow / Contact
            </h2>

            {socialLinks.length > 0 ? (
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                      target={link.type === "email" ? undefined : "_blank"}
                      rel={link.type === "email" ? undefined : "noreferrer"}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                Social links will be added later.
              </p>
            )}
          </div>
        </div>

        <div className="border-t border-[var(--surface-border)] py-5">
          <p className="text-xs text-[var(--muted-soft)]">
            {site.footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}