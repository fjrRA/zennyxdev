// components/home/TeamSection.tsx

import { Container } from "@/components/ui/Container";

import type { TeamMember } from "@/types";

type TeamSectionProps = {
  teamMembers: TeamMember[];
};

export function TeamSection({
  teamMembers,
}: TeamSectionProps) {
  return (
    <section
      id="founders"
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
            gap-8
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
              04 / Founders
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
              Founded by
            </h2>
          </div>

          <p
            className="
              mb-0
              max-w-sm
              text-sm
              leading-relaxed
              text-[var(--ash)]
              md:col-span-4
              md:col-start-9
              md:text-right
            "
          >
            Zennyx saat ini dibangun oleh tim kecil yang berbagi
            tanggung jawab dalam fondasi teknis, arah kreatif,
            dokumentasi, dan pengembangan game.
          </p>
        </div>

        {teamMembers.length > 0 ? (
          <div
            className="
              grid
              divide-y
              divide-[var(--surface-border)]
              border-b
              border-[var(--surface-border)]
              md:grid-cols-2
              md:divide-x
              md:divide-y-0
            "
          >
            {teamMembers.map((member, index) => {
              const memberNumber = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={member.slug}
                  className="
                    py-10
                    sm:py-12
                    md:px-10
                    md:first:pl-0
                    md:last:pr-0
                    lg:px-14
                    lg:py-16
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-6
                    "
                  >
                    <div>
                      <p
                        className="
                          editorial-label
                          mb-0
                          text-[var(--accent)]
                        "
                      >
                        Founder {memberNumber}
                      </p>

                      <p
                        className="
                          editorial-label
                          mb-0
                          mt-2
                          text-[var(--ash)]
                        "
                      >
                        {member.location}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="
                        font-mono-accent
                        text-xs
                        tracking-[0.12em]
                        text-[var(--concrete)]
                      "
                    >
                      {memberNumber}
                    </span>
                  </div>

                  <div className="mt-12 sm:mt-16">
                    <h3
                      className="
                        mb-0
                        break-words
                        text-[clamp(3.75rem,8vw,8rem)]
                        font-semibold
                        uppercase
                        leading-[0.82]
                        tracking-[-0.07em]
                      "
                    >
                      {member.name}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-sm
                        font-semibold
                        uppercase
                        leading-relaxed
                        tracking-[0.08em]
                        text-[var(--accent)]
                      "
                    >
                      {member.displayRole}
                    </p>
                  </div>

                  <p
                    className="
                      font-serif
                      mb-0
                      mt-10
                      max-w-xl
                      text-lg
                      leading-relaxed
                      text-[var(--foreground)]
                      sm:text-xl
                    "
                  >
                    {member.shortBio}
                  </p>

                  {member.responsibilities.length > 0 && (
                    <div
                      className="
                        mt-10
                        border-t
                        border-[var(--surface-border)]
                        pt-6
                      "
                    >
                      <p
                        className="
                          editorial-label
                          mb-4
                          text-[var(--ash)]
                        "
                      >
                        Current focus
                      </p>

                      <ol>
                        {member.responsibilities
                          .slice(0, 4)
                          .map((responsibility, responsibilityIndex) => {
                            const responsibilityNumber = String(
                              responsibilityIndex + 1,
                            ).padStart(2, "0");

                            return (
                              <li
                                key={responsibility}
                                className="
                                  grid
                                  grid-cols-[2.5rem_1fr]
                                  gap-3
                                  border-t
                                  border-[var(--surface-border)]
                                  py-4
                                "
                              >
                                <span
                                  className="
                                    font-mono-accent
                                    text-[0.6875rem]
                                    text-[var(--ash)]
                                  "
                                >
                                  {responsibilityNumber}
                                </span>

                                <span
                                  className="
                                    text-sm
                                    font-medium
                                    leading-relaxed
                                  "
                                >
                                  {responsibility}
                                </span>
                              </li>
                            );
                          })}
                      </ol>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
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
              Informasi founder belum dipublikasikan.
            </p>
          </div>
        )}

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
                text-[var(--ash)]
              "
            >
              Team structure
            </p>

            <p
              className="
                mb-0
                mt-2
                text-sm
                font-medium
              "
            >
              Independent two-person studio
            </p>
          </div>

          <div className="sm:text-right">
            <p
              className="
                editorial-label
                mb-0
                text-[var(--ash)]
              "
            >
              Current priority
            </p>

            <p
              className="
                mb-0
                mt-2
                text-sm
                font-medium
              "
            >
              One active game, realistic production scope
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}