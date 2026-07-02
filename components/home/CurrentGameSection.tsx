import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Game } from "@/types";

type CurrentGameSectionProps = { featuredGame?: Game };

export function CurrentGameSection({ featuredGame }: CurrentGameSectionProps) {
  if (!featuredGame) return null;

  return (
    <section id="featured-game" className="bg-[var(--color-mist)]">
      <Container className="py-24 sm:py-28 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="studio-kicker mb-5 text-[var(--color-brick)]">From the production desk</p>
            <h2 className="mb-7 max-w-[9ch] text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.87] tracking-[-0.07em]">
              Inside <span className="font-serif font-normal italic text-[var(--color-studio-green)]">Andara.</span>
            </h2>
            <p className="mb-0 max-w-lg font-serif text-xl leading-relaxed text-[var(--color-dust)]">
              {featuredGame.summary}
            </p>

            <blockquote className="my-10 border-l-[5px] border-[var(--color-amber)] pl-6 text-xl font-semibold leading-snug tracking-[-0.035em] sm:text-2xl">
              A fictional city built from narrow alleys, crowded streets, local details, and human conflict.
            </blockquote>

            <Link href={`/games/${featuredGame.slug}`} className="inline-flex items-center gap-3 border-b-2 border-current pb-1 text-sm font-bold hover:text-[var(--color-brick)]">
              Read the complete project file <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative lg:col-span-6 lg:col-start-7 lg:pt-12">
            <div className="relative border-[3px] border-[var(--color-ink)] bg-[var(--color-mist-light)] p-6 shadow-[10px_10px_0_var(--color-studio-green)] sm:p-9">
              <div className="absolute right-3 -top-8 rotate-2 border-2 border-[var(--color-ink)] bg-[var(--color-amber)] px-4 py-3 shadow-[4px_4px_0_var(--color-ink)] sm:-right-8 sm:px-5 sm:py-4">
                <p className="studio-kicker mb-1">Next milestone</p>
                <p className="mb-0 text-lg font-black">{featuredGame.developmentStage.nextMilestone}</p>
              </div>

              <div className="border-b-[3px] border-[var(--color-ink)] pb-6 pt-7 sm:pt-3">
                <p className="studio-kicker mb-3 text-[var(--color-brick)]">Production sheet / current</p>
                <h3 className="mb-3 text-3xl font-black tracking-[-0.05em] sm:text-4xl">{featuredGame.developmentStage.current}</h3>
                <p className="mb-0 max-w-xl font-serif leading-relaxed text-[var(--color-dust)]">{featuredGame.developmentStage.notes}</p>
              </div>

              <div className="pt-7">
                <p className="studio-kicker mb-3 text-[var(--color-studio-green)]">Things that must feel good first</p>
                <ol>
                  {featuredGame.gameplayFocus.points.slice(0, 6).map((item, index) => (
                    <li key={item} className="grid grid-cols-[2.5rem_1fr] items-center border-b border-black/25 py-3 text-sm font-semibold">
                      <span className="font-serif text-lg italic text-[var(--color-brick)]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:ml-8">
              {[
                ["World", featuredGame.setting.name],
                ["Platform", featuredGame.platforms.join(" / ")],
                ["Release", featuredGame.targetRelease],
              ].map(([label, value]) => (
                <div key={label} className="border-t-2 border-[var(--color-ink)] pt-3">
                  <dt className="studio-kicker text-[var(--color-dust)]">{label}</dt>
                  <dd className="mt-2 text-sm font-bold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
