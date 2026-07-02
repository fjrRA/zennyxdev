// components/home/HeroSection.tsx

import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import type { Devlog, Game, SiteConfig } from "@/types";

type HeroSectionProps = {
  site: SiteConfig;
  featuredGame?: Game;
  latestDevlog?: Devlog;
};

export function HeroSection({
  site,
  featuredGame,
  latestDevlog,
}: HeroSectionProps) {
  const currentProjectHref = featuredGame
    ? `/games/${featuredGame.slug}`
    : site.home.primaryCta.href;

  return (
    <section
      className="
        border-b
        border-[var(--surface-border)]
        bg-[var(--paper)]
        text-[var(--ink)]
      "
    >
      <Container
        className="
          grid
          min-h-[calc(100svh-5rem)]
          grid-rows-[auto_1fr_auto]
        "
      >
        <div
          className="
            grid
            gap-2
            border-b
            border-[var(--surface-border)]
            py-5
            sm:grid-cols-2
            sm:items-center
          "
        >
          <p className="editorial-label mb-0 text-[var(--accent)]">
            {site.home.heroLabel}
          </p>

          <p
            className="
              editorial-label
              mb-0
              text-[var(--ash)]
              sm:text-right
            "
          >
            {site.stage} — {site.country}
          </p>
        </div>

        <div
          className="
            flex
            flex-col
            justify-center
            py-12
            sm:py-16
            lg:py-24
          "
        >
          <h1
            className="
              max-w-[13ch]
              text-balance
              text-[clamp(3rem,9vw,8.75rem)]
              font-semibold
              uppercase
              leading-[0.86]
              tracking-[-0.065em]
              text-[var(--foreground)]
            "
          >
            <span className="block">
              Small playable worlds
            </span>

            <span className="block text-[var(--ash)]">
              before bigger dreams.
            </span>
          </h1>

          <div
            className="
              mt-10
              grid
              gap-8
              border-t
              border-[var(--surface-border)]
              pt-6
              md:grid-cols-12
              lg:mt-14
              lg:pt-8
            "
          >
            <p
              className="
                font-serif
                mb-0
                max-w-2xl
                text-lg
                leading-relaxed
                text-[var(--foreground)]
                sm:text-xl
                md:col-span-6
                lg:col-span-5
              "
            >
              {site.home.heroDescription}
            </p>

            <div
              className="
                flex
                flex-col
                items-start
                gap-5
                md:col-span-6
                md:items-end
                lg:col-span-5
                lg:col-start-8
              "
            >
              <Button
                href={currentProjectHref}
                className="
                  w-full
                  sm:w-auto
                "
              >
                {site.home.primaryCta.label}

                <span aria-hidden="true">
                  →
                </span>
              </Button>

              <Button
                href={site.home.secondaryCta.href}
                variant="ghost"
              >
                {site.home.secondaryCta.label}

                <span aria-hidden="true">
                  →
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="
            grid
            border-t
            border-[var(--surface-border)]
            md:grid-cols-3
          "
        >
          <div className="py-5 md:pr-6">
            <p className="editorial-label mb-0 text-[var(--ash)]">
              Studio
            </p>

            <p className="mb-0 mt-2 text-sm font-medium">
              {site.shortName} — {site.country}
            </p>
          </div>

          <div
            className="
              border-t
              border-[var(--surface-border)]
              py-5
              md:border-l
              md:border-t-0
              md:px-6
            "
          >
            <p className="editorial-label mb-0 text-[var(--ash)]">
              Current project
            </p>

            {featuredGame ? (
              <Link
                href={`/games/${featuredGame.slug}`}
                className="
                  group
                  mt-2
                  flex
                  items-start
                  justify-between
                  gap-4
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[var(--accent)]
                "
              >
                <span>
                  {featuredGame.title}
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
              </Link>
            ) : (
              <p className="mb-0 mt-2 text-sm text-[var(--ash)]">
                Project information coming soon.
              </p>
            )}
          </div>

          <div
            className="
              border-t
              border-[var(--surface-border)]
              py-5
              md:border-l
              md:border-t-0
              md:pl-6
            "
          >
            <p className="editorial-label mb-0 text-[var(--ash)]">
              Latest development note
            </p>

            {latestDevlog ? (
              <Link
                href={`/devlog/${latestDevlog.slug}`}
                className="
                  group
                  mt-2
                  flex
                  items-start
                  justify-between
                  gap-4
                  text-sm
                  font-medium
                  transition-colors
                  duration-200
                  hover:text-[var(--accent)]
                "
              >
                <span>
                  {latestDevlog.title}
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
              </Link>
            ) : (
              <p className="mb-0 mt-2 text-sm text-[var(--ash)]">
                Development notes coming soon.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}