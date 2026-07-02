// components/home/AboutManifestoSection.tsx

import Link from "next/link";

import { Container } from "@/components/ui/Container";

import type { SiteConfig } from "@/types";

type AboutManifestoSectionProps = {
  site: SiteConfig;
};

export function AboutManifestoSection({
  site,
}: AboutManifestoSectionProps) {
  return (
    <section
      id="studio-approach"
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
              03 / Studio approach
            </p>

            <h2
              className="
                mb-0
                max-w-[10ch]
                text-balance
                text-[clamp(2.75rem,6vw,6.5rem)]
                font-semibold
                uppercase
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              How we choose to build
            </h2>
          </div>

          <div
            className="
              flex
              flex-col
              items-start
              gap-6
              md:col-span-4
              md:col-start-9
              md:items-end
            "
          >
            <p
              className="
                mb-0
                max-w-sm
                text-sm
                leading-relaxed
                text-[var(--concrete)]
                md:text-right
              "
            >
              Kami tidak mencoba terlihat besar sejak awal. Kami
              membangun fondasi melalui karya kecil yang benar-benar
              dapat dimainkan dan diselesaikan.
            </p>

            <Link
              href="/about"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-current
                pb-1
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                transition-colors
                duration-200
                hover:text-[var(--oxide)]
              "
            >
              Read about the studio

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

        <div
          className="
            grid
            gap-16
            py-12
            sm:py-16
            lg:grid-cols-12
            lg:gap-10
            lg:py-20
          "
        >
          <div
            className="
              lg:col-span-5
              lg:pr-10
              xl:pr-16
            "
          >
            <p
              className="
                editorial-label
                mb-6
                text-[var(--concrete)]
              "
            >
              Studio statement
            </p>

            <p
              className="
                mb-0
                max-w-[12ch]
                text-balance
                text-[clamp(2.5rem,5vw,5.5rem)]
                font-semibold
                uppercase
                leading-[0.92]
                tracking-[-0.055em]
              "
            >
              <span className="text-[var(--paper)]">
                Small playable worlds
              </span>{" "}

              <span className="text-[var(--concrete)]">
                before bigger dreams.
              </span>
            </p>

            <div
              className="
                mt-10
                border-l-2
                border-[var(--oxide)]
                pl-5
                sm:mt-12
                sm:pl-6
              "
            >
              <p
                className="
                  font-serif
                  mb-0
                  max-w-xl
                  text-lg
                  leading-relaxed
                  text-[var(--paper)]
                  sm:text-xl
                "
              >
                {site.description.medium}
              </p>
            </div>

            <p
              className="
                font-serif
                mb-0
                mt-8
                max-w-lg
                text-base
                italic
                leading-relaxed
                text-[var(--concrete)]
              "
            >
              “{site.coreMessage.id}”
            </p>
          </div>

          <div
            className="
              lg:col-span-7
              lg:border-l
              lg:border-[rgba(241,236,226,0.22)]
              lg:pl-10
              xl:pl-16
            "
          >
            <p
              className="
                editorial-label
                mb-6
                text-[var(--concrete)]
              "
            >
              Working principles
            </p>

            <ol
              className="
                border-b
                border-[rgba(241,236,226,0.22)]
              "
            >
              {site.studioPrinciples.map((principle, index) => {
                const itemNumber = String(index + 1).padStart(2, "0");

                return (
                  <li
                    key={principle.title}
                    className="
                      grid
                      gap-5
                      border-t
                      border-[rgba(241,236,226,0.22)]
                      py-7
                      sm:grid-cols-[3.5rem_1fr]
                      sm:gap-6
                      sm:py-8
                    "
                  >
                    <span
                      className="
                        font-mono-accent
                        text-xs
                        tracking-[0.12em]
                        text-[var(--oxide)]
                      "
                    >
                      {itemNumber}
                    </span>

                    <div
                      className="
                        grid
                        gap-4
                        md:grid-cols-2
                        md:gap-8
                      "
                    >
                      <div>
                        <h3
                          className="
                            mb-0
                            text-xl
                            font-semibold
                            uppercase
                            leading-tight
                            tracking-[-0.035em]
                            text-[var(--paper)]
                            sm:text-2xl
                          "
                        >
                          {principle.titleId}
                        </h3>

                        <p
                          className="
                            editorial-label
                            mb-0
                            mt-2
                            text-[var(--concrete)]
                          "
                        >
                          {principle.title}
                        </p>
                      </div>

                      <p
                        className="
                          font-serif
                          mb-0
                          text-base
                          leading-relaxed
                          text-[var(--concrete)]
                        "
                      >
                        {principle.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div
          className="
            grid
            gap-6
            border-t
            border-[rgba(241,236,226,0.22)]
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
              Studio
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
              {site.siteName}
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
              Direction
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
              Experimental games, realistic scope, documented progress.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}