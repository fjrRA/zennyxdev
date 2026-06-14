// components/about/AboutTeamSection.tsx
import { Container } from "@/components/ui/Container";
import type { TeamMember } from "@/types";

type AboutTeamSectionProps = {
  teamMembers: TeamMember[];
};

export function AboutTeamSection({ teamMembers }: AboutTeamSectionProps) {
  return (
    <section className="bg-[#0a0a0b] py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              {"// "}Personnel File
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Founding_Team
            </h2>
          </div>

          <p className="max-w-sm font-mono-accent text-[10px] uppercase leading-relaxed tracking-widest text-[var(--muted)] md:text-right">
            Built by a small indie team. Progress first, expansion later.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-colors hover:border-[var(--muted-soft)]"
            >
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-dashed border-[var(--surface-border)] pb-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--surface-border)] bg-[var(--surface)] font-display text-xl font-bold text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                    {member.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                      OP_ID: {member.slug.toUpperCase()}
                    </p>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                      {member.name}
                    </h3>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 sm:flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)] shadow-[0_0_5px_var(--cyan)]" />
                  <span className="font-mono-accent text-[10px] uppercase tracking-widest text-[var(--cyan)]">
                    Active
                  </span>
                </div>
              </div>

              <div className="mb-5 inline-block border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                CLASS: {member.displayRole}
              </div>

              <p className="text-sm leading-7 text-[var(--muted)]">
                {member.bio}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {member.responsibilities.slice(0, 6).map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--surface-border)] px-2 py-1 font-mono-accent text-[0.58rem] uppercase tracking-[0.16em] text-[var(--muted-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}