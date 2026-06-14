// components/home/TeamSection.tsx
import { Container } from "@/components/ui/Container";
import type { TeamMember } from "@/types";

type TeamSectionProps = {
  teamMembers: TeamMember[];
};

export function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24">
      <Container className="relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--surface-border)] pb-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                {"// "}Personnel_Roster
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Core_Operators
            </h2>
          </div>
          <p className="max-w-xs font-mono-accent text-xs text-[var(--muted)] md:text-right">
            Tim kecil. Scope terjaga. <br /> Fokus pada eksekusi.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article
              key={member.slug}
              className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-colors hover:border-[var(--muted-soft)]"
            >
              <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[var(--cyan)] opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-[var(--surface-border)] pb-5">
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

                <div className="flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)] shadow-[0_0_5px_var(--cyan)]" />
                  <span className="font-mono-accent text-[10px] uppercase tracking-widest text-[var(--cyan)]">
                    Active
                  </span>
                </div>
              </div>

              <div className="mb-5 inline-block border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                CLASS: {member.displayRole}
              </div>

              <p className="font-body text-sm leading-relaxed text-[var(--muted)]">
                <span className="font-mono-accent text-[var(--surface-border)] group-hover:text-[var(--accent)] transition-colors mr-2">
                  {">"}
                </span>
                {member.shortBio}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}