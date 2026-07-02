// components/layout/Footer.tsx

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
    label: "Studio",
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
    <footer
      className="
        border-t
        border-[var(--surface-border)]
        bg-[var(--paper)]
        text-[var(--ink)]
      "
    >
      <Container className="pt-16 sm:pt-20 lg:pt-24">
        <div
          className="
            grid
            gap-8
            border-b
            border-[var(--surface-border)]
            pb-10
            md:grid-cols-12
            md:items-end
            lg:pb-12
          "
        >
          <div className="md:col-span-5">
            <p
              className="
                editorial-label
                mb-3
                text-[var(--accent)]
              "
            >
              Independent game studio
            </p>

            <p
              className="
                font-serif
                mb-0
                max-w-xl
                text-lg
                leading-relaxed
                text-[var(--foreground)]
                sm:text-xl
              "
            >
              {site.footer.text}
            </p>
          </div>

          <div
            className="
              md:col-span-4
              md:col-start-9
              md:text-right
            "
          >
            <p
              className="
                editorial-label
                mb-3
                text-[var(--ash)]
              "
            >
              Studio direction
            </p>

            <p
              className="
                mb-0
                text-sm
                font-medium
                leading-relaxed
              "
            >
              {site.tagline.short}
            </p>
          </div>
        </div>

        <Link
          href="/"
          aria-label={`${site.siteName} homepage`}
          className="
            group
            block
            border-b
            border-[var(--surface-border)]
            py-10
            sm:py-14
            lg:py-16
          "
        >
          <span
            className="
              block
              text-[clamp(4rem,15vw,13rem)]
              font-semibold
              uppercase
              leading-[0.76]
              tracking-[-0.075em]
              transition-colors
              duration-200
              group-hover:text-[var(--accent)]
            "
          >
            {site.shortName}
          </span>

          <span
            className="
              mt-7
              flex
              flex-col
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[var(--ash)]
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <span>Interactive Studio</span>

            <span>
              {site.country} — {site.stage}
            </span>
          </span>
        </Link>

        <div
          className="
            grid
            border-b
            border-[var(--surface-border)]
            md:grid-cols-12
          "
        >
          <nav
            aria-label="Footer navigation"
            className="
              py-10
              md:col-span-5
              md:pr-10
              lg:py-12
            "
          >
            <p
              className="
                editorial-label
                mb-5
                text-[var(--ash)]
              "
            >
              Explore
            </p>

            <ul
              className="
                border-b
                border-[var(--surface-border)]
              "
            >
              {footerLinks.map((link, index) => {
                const itemNumber = String(index + 1).padStart(2, "0");

                return (
                  <li
                    key={link.href}
                    className="
                      border-t
                      border-[var(--surface-border)]
                    "
                  >
                    <Link
                      href={link.href}
                      className="
                        group
                        grid
                        min-h-14
                        grid-cols-[2.5rem_1fr_auto]
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        transition-colors
                        duration-200
                        hover:text-[var(--accent)]
                      "
                    >
                      <span
                        className="
                          font-mono-accent
                          text-[0.6875rem]
                          font-normal
                          text-[var(--ash)]
                        "
                      >
                        {itemNumber}
                      </span>

                      <span>{link.label}</span>

                      <span
                        aria-hidden="true"
                        className="
                          transition-transform
                          duration-200
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div
            className="
              border-t
              border-[var(--surface-border)]
              py-10
              md:col-span-4
              md:border-l
              md:border-t-0
              md:px-10
              lg:py-12
            "
          >
            <p
              className="
                editorial-label
                mb-5
                text-[var(--ash)]
              "
            >
              Follow &amp; contact
            </p>

            {socialLinks.length > 0 ? (
              <ul
                className="
                  border-b
                  border-[var(--surface-border)]
                "
              >
                {socialLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li
                      key={link.name}
                      className="
                        border-t
                        border-[var(--surface-border)]
                      "
                    >
                      <a
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="
                          group
                          flex
                          min-h-14
                          items-center
                          justify-between
                          gap-4
                          text-sm
                          font-semibold
                          transition-colors
                          duration-200
                          hover:text-[var(--accent)]
                        "
                      >
                        <span className="break-all">
                          {link.label}
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            shrink-0
                            transition-transform
                            duration-200
                            group-hover:translate-x-1
                          "
                        >
                          →
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p
                className="
                  font-serif
                  mb-0
                  max-w-sm
                  text-base
                  leading-relaxed
                  text-[var(--ash)]
                "
              >
                Kanal resmi akan ditambahkan ketika sudah siap
                digunakan secara konsisten.
              </p>
            )}
          </div>

          <div
            className="
              border-t
              border-[var(--surface-border)]
              py-10
              md:col-span-3
              md:border-l
              md:border-t-0
              md:pl-10
              lg:py-12
            "
          >
            <p
              className="
                editorial-label
                mb-5
                text-[var(--ash)]
              "
            >
              Studio information
            </p>

            <dl>
              <div
                className="
                  border-t
                  border-[var(--surface-border)]
                  py-4
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Type
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {site.type}
                </dd>
              </div>

              <div
                className="
                  border-t
                  border-[var(--surface-border)]
                  py-4
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Based in
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {site.country}
                </dd>
              </div>

              <div
                className="
                  border-y
                  border-[var(--surface-border)]
                  py-4
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Current stage
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {site.stage}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            gap-5
            py-6
            text-xs
            leading-relaxed
            text-[var(--ash)]
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              mb-0
              whitespace-pre-line
            "
          >
            {site.footer.copyright}
          </p>

          <p
            className="
              mb-0
              sm:text-right
            "
          >
            Built in public from Indonesia.
          </p>
        </div>
      </Container>
    </footer>
  );
}