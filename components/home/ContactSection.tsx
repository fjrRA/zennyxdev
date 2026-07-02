// components/home/ContactSection.tsx

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import type { SocialsConfig } from "@/types";

type ContactSectionProps = {
  socials: SocialsConfig;
};

export function ContactSection({
  socials,
}: ContactSectionProps) {
  const additionalLinks = socials.links
    .filter(
      (link) =>
        link.isActive &&
        Boolean(link.href) &&
        link.href !== socials.primaryContact.href,
    )
    .sort((firstLink, secondLink) => {
      return firstLink.order - secondLink.order;
    });

  return (
    <section
      id="contact-cta"
      className="
        border-b
        border-[rgba(241,236,226,0.22)]
        bg-[var(--asphalt)]
        text-[var(--paper)]
      "
    >
      <Container className="py-20 sm:py-24 lg:py-32">
        <div
          className="
            grid
            gap-8
            border-b
            border-[rgba(241,236,226,0.22)]
            pb-8
            md:grid-cols-12
            md:items-end
            lg:pb-10
          "
        >
          <div className="md:col-span-7">
            <p
              className="
                editorial-label
                mb-3
                text-[var(--oxide)]
              "
            >
              05 / Contact &amp; follow
            </p>

            <h2
              className="
                mb-0
                max-w-[10ch]
                text-balance
                text-[clamp(3rem,7vw,7.5rem)]
                font-semibold
                uppercase
                leading-[0.86]
                tracking-[-0.065em]
              "
            >
              {socials.cta.title}
            </h2>
          </div>

          <p
            className="
              mb-0
              max-w-sm
              text-sm
              leading-relaxed
              text-[var(--concrete)]
              md:col-span-4
              md:col-start-9
              md:text-right
            "
          >
            {socials.contactMessage.note}
          </p>
        </div>

        <div
          className="
            grid
            gap-12
            border-b
            border-[rgba(241,236,226,0.22)]
            py-12
            sm:py-16
            lg:grid-cols-12
            lg:gap-10
            lg:py-20
          "
        >
          <div className="lg:col-span-7">
            <p
              className="
                font-serif
                mb-0
                max-w-3xl
                text-[clamp(1.75rem,3.5vw,3.75rem)]
                leading-[1.08]
                tracking-[-0.025em]
                text-[var(--paper)]
              "
            >
              See what we built, what broke, and what we learned
              while making our first game.
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              items-start
              gap-8
              lg:col-span-4
              lg:col-start-9
            "
          >
            <p
              className="
                font-serif
                mb-0
                max-w-md
                text-lg
                leading-relaxed
                text-[var(--concrete)]
              "
            >
              {socials.cta.description}
            </p>

            <div
              className="
                flex
                w-full
                flex-col
                items-start
                gap-5
                sm:w-auto
                sm:flex-row
                sm:items-center
              "
            >
              <Button
                href={socials.cta.primaryButton.href}
                className="w-full sm:w-auto"
              >
                {socials.cta.primaryButton.label}

                <span aria-hidden="true">
                  →
                </span>
              </Button>

              <Link
                href={socials.cta.secondaryButton.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[var(--paper)]
                  pb-1
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[var(--paper)]
                  transition-colors
                  duration-200
                  hover:border-[var(--oxide)]
                  hover:text-[var(--oxide)]
                "
              >
                {socials.cta.secondaryButton.label}

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
            </div>
          </div>
        </div>

        <div
          className="
            grid
            border-b
            border-[rgba(241,236,226,0.22)]
            md:grid-cols-12
          "
        >
          <div
            className="
              py-8
              md:col-span-8
              md:pr-10
              lg:py-10
            "
          >
            <p
              className="
                editorial-label
                mb-4
                text-[var(--concrete)]
              "
            >
              Direct contact
            </p>

            <a
              href={socials.primaryContact.href}
              className="
                inline-block
                max-w-full
                break-all
                text-[clamp(1.5rem,4vw,4rem)]
                font-semibold
                leading-tight
                tracking-[-0.045em]
                text-[var(--paper)]
                transition-colors
                duration-200
                hover:text-[var(--oxide)]
              "
            >
              {socials.primaryContact.value}
            </a>

            <p
              className="
                mb-0
                mt-5
                max-w-xl
                text-sm
                leading-relaxed
                text-[var(--concrete)]
              "
            >
              {socials.primaryContact.description}
            </p>
          </div>

          <div
            className="
              border-t
              border-[rgba(241,236,226,0.22)]
              py-8
              md:col-span-4
              md:border-l
              md:border-t-0
              md:pl-10
              lg:py-10
            "
          >
            <p
              className="
                editorial-label
                mb-5
                text-[var(--concrete)]
              "
            >
              Active channels
            </p>

            {additionalLinks.length > 0 ? (
              <ul
                className="
                  border-b
                  border-[rgba(241,236,226,0.22)]
                "
              >
                {additionalLinks.map((link) => {
                  const isExternal = link.href.startsWith("http");

                  return (
                    <li
                      key={link.name}
                      className="
                        border-t
                        border-[rgba(241,236,226,0.22)]
                      "
                    >
                      <a
                        href={link.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-4
                          py-4
                          text-sm
                          font-semibold
                          uppercase
                          tracking-[0.08em]
                          transition-colors
                          duration-200
                          hover:text-[var(--oxide)]
                        "
                      >
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
                  text-[var(--concrete)]
                "
              >
                Kanal sosial resmi akan ditambahkan ketika sudah siap
                digunakan secara konsisten.
              </p>
            )}
          </div>
        </div>

        <div
          className="
            grid
            gap-6
            pt-6
            sm:grid-cols-2
            sm:items-end
          "
        >
          <div>
            <p
              className="
                editorial-label
                mb-0
                text-[var(--concrete)]
              "
            >
              Studio status
            </p>

            <p
              className="
                mb-0
                mt-2
                text-sm
                font-medium
                text-[var(--paper)]
              "
            >
              Early-stage independent game studio
            </p>
          </div>

          <div className="sm:text-right">
            <p
              className="
                editorial-label
                mb-0
                text-[var(--concrete)]
              "
            >
              Based in
            </p>

            <p
              className="
                mb-0
                mt-2
                text-sm
                font-medium
                text-[var(--paper)]
              "
            >
              Indonesia
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}