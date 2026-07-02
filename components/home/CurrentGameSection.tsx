// components/home/CurrentGameSection.tsx

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

import type { Game } from "@/types";

type CurrentGameSectionProps = {
  featuredGame?: Game;
};

export function CurrentGameSection({
  featuredGame,
}: CurrentGameSectionProps) {
  return (
    <section
      id="featured-game"
      className="
        border-b
        border-[var(--surface-border)]
        bg-[var(--paper-soft)]
        text-[var(--ink)]
      "
    >
      <Container className="py-20 sm:py-24 lg:py-32">
        <div
          className="
            grid
            gap-6
            border-b
            border-[var(--surface-border)]
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
                text-[var(--accent)]
              "
            >
              01 / Active production
            </p>

            <h2
              className="
                mb-0
                text-[clamp(2.5rem,5vw,5.5rem)]
                font-semibold
                uppercase
                leading-[0.9]
                tracking-[-0.055em]
              "
            >
              Current game
            </h2>
          </div>

          <p
            className="
              mb-0
              max-w-md
              text-sm
              leading-relaxed
              text-[var(--ash)]
              md:col-span-4
              md:col-start-9
              md:text-right
            "
          >
            Satu proyek aktif menjadi fokus produksi utama sebelum
            kami bergerak menuju dunia yang lebih besar.
          </p>
        </div>

        {featuredGame ? (
          <>
            <div
              className="
                grid
                border-b
                border-[var(--surface-border)]
                lg:grid-cols-12
              "
            >
              <article
                className="
                  py-10
                  sm:py-14
                  lg:col-span-8
                  lg:border-r
                  lg:border-[var(--surface-border)]
                  lg:pr-12
                  xl:pr-16
                "
              >
                <div
                  className="
                    mb-8
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-2
                  "
                >
                  <p
                    className="
                      editorial-label
                      mb-0
                      text-[var(--accent)]
                    "
                  >
                    {featuredGame.status}
                  </p>

                  <span
                    aria-hidden="true"
                    className="
                      hidden
                      h-px
                      w-8
                      bg-[var(--surface-border)]
                      sm:block
                    "
                  />

                  <p
                    className="
                      editorial-label
                      mb-0
                      text-[var(--ash)]
                    "
                  >
                    {featuredGame.targetBuild}
                  </p>
                </div>

                <h3
                  className="
                    mb-8
                    max-w-[11ch]
                    text-balance
                    text-[clamp(3rem,7vw,7rem)]
                    font-semibold
                    uppercase
                    leading-[0.88]
                    tracking-[-0.065em]
                  "
                >
                  {featuredGame.title}
                </h3>

                <p
                  className="
                    font-serif
                    mb-0
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-[var(--foreground)]
                    sm:text-xl
                  "
                >
                  {featuredGame.summary}
                </p>

                <div className="mt-10 sm:mt-12">
                  <Button
                    href={`/games/${featuredGame.slug}`}
                  >
                    View project

                    <span aria-hidden="true">
                      →
                    </span>
                  </Button>
                </div>
              </article>

              <aside
                className="
                  bg-[var(--asphalt)]
                  px-6
                  py-10
                  text-[var(--paper)]
                  sm:px-8
                  sm:py-12
                  lg:col-span-4
                  lg:px-10
                  lg:py-14
                "
              >
                <div
                  className="
                    border-b
                    border-[rgba(241,236,226,0.22)]
                    pb-8
                  "
                >
                  <p
                    className="
                      editorial-label
                      mb-3
                      text-[var(--concrete)]
                    "
                  >
                    Current stage
                  </p>

                  <p
                    className="
                      mb-0
                      text-xl
                      font-semibold
                      leading-snug
                      sm:text-2xl
                    "
                  >
                    {featuredGame.developmentStage.current}
                  </p>
                </div>

                <div
                  className="
                    border-b
                    border-[rgba(241,236,226,0.22)]
                    py-8
                  "
                >
                  <p
                    className="
                      editorial-label
                      mb-3
                      text-[var(--concrete)]
                    "
                  >
                    Next milestone
                  </p>

                  <p
                    className="
                      mb-0
                      text-xl
                      font-semibold
                      leading-snug
                      sm:text-2xl
                    "
                  >
                    {featuredGame.developmentStage.nextMilestone}
                  </p>
                </div>

                <div className="pt-8">
                  <p
                    className="
                      editorial-label
                      mb-5
                      text-[var(--concrete)]
                    "
                  >
                    Current gameplay focus
                  </p>

                  <ol>
                    {featuredGame.gameplayFocus.points
                      .slice(0, 5)
                      .map((item, index) => {
                        const itemNumber = String(index + 1).padStart(
                          2,
                          "0",
                        );

                        return (
                          <li
                            key={item}
                            className="
                              grid
                              grid-cols-[2.5rem_1fr]
                              gap-3
                              border-t
                              border-[rgba(241,236,226,0.22)]
                              py-4
                            "
                          >
                            <span
                              className="
                                font-mono-accent
                                text-[0.6875rem]
                                text-[var(--concrete)]
                              "
                            >
                              {itemNumber}
                            </span>

                            <span
                              className="
                                text-sm
                                font-medium
                                leading-relaxed
                              "
                            >
                              {item}
                            </span>
                          </li>
                        );
                      })}
                  </ol>
                </div>
              </aside>
            </div>

            <dl
              className="
                grid
                border-b
                border-[var(--surface-border)]
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              <div
                className="
                  py-5
                  sm:pr-6
                  lg:py-6
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Genre
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {featuredGame.genre.join(" / ")}
                </dd>
              </div>

              <div
                className="
                  border-t
                  border-[var(--surface-border)]
                  py-5
                  sm:border-l
                  sm:border-t-0
                  sm:pl-6
                  lg:py-6
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Setting
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {featuredGame.setting.name}
                </dd>
              </div>

              <div
                className="
                  border-t
                  border-[var(--surface-border)]
                  py-5
                  sm:pr-6
                  lg:border-l
                  lg:border-t-0
                  lg:pl-6
                  lg:py-6
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Platform
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {featuredGame.platforms.join(" / ")}
                </dd>
              </div>

              <div
                className="
                  border-t
                  border-[var(--surface-border)]
                  py-5
                  sm:border-l
                  sm:pl-6
                  lg:border-t-0
                  lg:py-6
                "
              >
                <dt
                  className="
                    editorial-label
                    text-[var(--ash)]
                  "
                >
                  Production
                </dt>

                <dd
                  className="
                    mt-2
                    text-sm
                    font-medium
                    leading-relaxed
                  "
                >
                  {featuredGame.productionType}
                </dd>
              </div>
            </dl>
          </>
        ) : (
          <div
            className="
              border-b
              border-[var(--surface-border)]
              py-16
            "
          >
            <p
              className="
                font-serif
                mb-0
                max-w-2xl
                text-xl
                leading-relaxed
                text-[var(--ash)]
              "
            >
              Belum ada proyek aktif yang dipublikasikan.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}