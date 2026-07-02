import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Devlog, Game, SiteConfig } from "@/types";

type HeroSectionProps = {
  site: SiteConfig;
  featuredGame?: Game;
  latestDevlog?: Devlog;
};

export function HeroSection({ site, featuredGame, latestDevlog }: HeroSectionProps) {
  const projectHref = featuredGame ? `/games/${featuredGame.slug}` : "/games";

  return (
    <section className="overflow-hidden bg-[var(--color-mist-light)]">
      <Container className="relative py-12 sm:py-16 lg:py-24">
        <div className="mb-10 flex items-center gap-4 lg:mb-16">
          <span className="h-[3px] w-12 bg-[var(--color-amber)]" aria-hidden="true" />
          <p className="studio-kicker mb-0 text-[var(--color-studio-green)]">
            Zennyx Interactive Studio · Indonesia
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="relative z-10 lg:col-span-6">
            <h1 className="mb-8 max-w-[10ch] text-[clamp(3.5rem,7.5vw,7.5rem)] leading-[0.82] tracking-[-0.075em]">
              <span className="block">Small games.</span>
              <span className="font-serif block py-2 font-normal italic text-[var(--color-studio-green)]">Big worlds.</span>
              <span className="block text-[0.58em] leading-[0.95] tracking-[-0.055em]">One release at a time.</span>
            </h1>

            <p className="mb-0 max-w-lg font-serif text-lg leading-relaxed text-[var(--color-dust)] sm:text-xl">
              {site.home.heroDescription}
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href={projectHref}>Enter the current project <span aria-hidden="true">↗</span></Button>
              <Button href="/devlog" variant="ghost">Read the build notes <span aria-hidden="true">→</span></Button>
            </div>

            {latestDevlog && (
              <Link href={`/devlog/${latestDevlog.slug}`} className="mt-12 block max-w-sm -rotate-1 border-2 border-[var(--color-ink)] bg-white p-4 shadow-[5px_5px_0_var(--color-studio-green)] transition-transform hover:rotate-0">
                <span className="studio-kicker text-[var(--color-brick)]">Pinned from the journal</span>
                <span className="mt-2 block text-sm font-bold leading-snug">{latestDevlog.title} →</span>
              </Link>
            )}
          </div>

          <div className="relative lg:col-span-6">
            <span className="absolute -left-4 -top-6 z-20 block -rotate-6 bg-[var(--color-amber)] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] sm:-left-8">
              Work in progress
            </span>

            <Link href={projectHref} className="group mx-1 block rotate-[1.2deg] border-[3px] border-[var(--color-ink)] bg-[var(--color-studio-green)] text-white shadow-[7px_7px_0_var(--color-ink)] transition-transform duration-200 hover:rotate-0 sm:mx-0 sm:shadow-[12px_12px_0_var(--color-ink)]">
              <div className="relative min-h-[30rem] overflow-hidden p-7 sm:min-h-[36rem] sm:p-10">
                <div className="absolute right-0 top-0 hidden border-b-2 border-l-2 border-white/40 px-4 py-3 text-right text-[0.625rem] uppercase tracking-[0.14em] text-white/65 sm:block">
                  Prototype<br />PC
                </div>

                <div className="flex h-full min-h-[26rem] flex-col justify-between sm:min-h-[31rem]">
                  <div>
                    <p className="mb-2 text-sm text-white/60">Current production</p>
                    <p className="mb-0 font-serif text-2xl italic text-[var(--color-amber)]">Untitled</p>
                  </div>

                  <div className="py-12">
                    <p className="mb-0 break-words text-[clamp(3.2rem,8vw,7.7rem)] font-black uppercase leading-[0.72] tracking-[-0.085em] text-[var(--color-amber)]">
                      Andara
                    </p>
                    <p className="mb-0 mt-6 max-w-[16ch] text-2xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-4xl">
                      Side-scrolling beat &apos;em up
                    </p>
                  </div>

                  <div className="border-t-2 border-white/45 pt-5">
                    <div className="flex items-end justify-between gap-8">
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-[0.12em] text-white/55">On the desk now</p>
                        <p className="mb-0 font-bold">{featuredGame?.developmentStage.current ?? "Early prototype"}</p>
                      </div>
                      <span className="text-3xl transition-transform group-hover:translate-x-2" aria-hidden="true">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </Container>

      <div className="overflow-hidden border-y-[3px] border-[var(--color-ink)] bg-[var(--color-amber)] py-3">
        <p className="mb-0 text-center text-xs font-black uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]">
          <span className="sm:hidden">Andara prototype — current build</span>
          <span className="hidden sm:inline">Current build — Andara prototype — One stage — PC — Real progress, no overpromises —</span>
        </p>
      </div>
    </section>
  );
}
