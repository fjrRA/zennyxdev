import { Container } from "@/components/ui/Container";
import type { TeamMember } from "@/types";

type TeamSectionProps = { teamMembers: TeamMember[] };

export function TeamSection({ teamMembers }: TeamSectionProps) {
  if (teamMembers.length === 0) return null;

  return (
    <section id="founders" className="bg-[var(--color-mist)]">
      <Container className="py-24 sm:py-28 lg:py-36">
        <p className="studio-kicker mb-8 text-[var(--color-brick)]">Studio credits</p>
        <h2 className="mb-14 text-[clamp(3.3rem,7vw,7.5rem)] leading-[0.82] tracking-[-0.075em]">
          Made by <span className="font-serif font-normal italic text-[var(--color-studio-green)]">Fajar</span><br className="sm:hidden" /> <span className="font-serif font-normal italic">&amp;</span> <span className="font-serif font-normal italic text-[var(--color-studio-green)]">Faiz.</span>
        </h2>

        <div className="border-y-[3px] border-[var(--color-ink)]">
          {teamMembers.map((member, index) => (
            <article key={member.slug} className={`grid gap-6 py-8 sm:grid-cols-12 sm:items-start ${index > 0 ? "border-t-2 border-[var(--color-ink)]" : ""}`}>
              <p className="font-serif mb-0 text-5xl italic text-[var(--color-amber-dark)] sm:col-span-1">{index + 1}</p>
              <div className="sm:col-span-3">
                <h3 className="mb-2 text-4xl tracking-[-0.055em]">{member.name}</h3>
                <p className="studio-kicker mb-0 text-[var(--color-studio-green)]">{member.displayRole}</p>
              </div>
              <p className="font-serif mb-0 max-w-2xl text-lg leading-relaxed text-[var(--color-dust)] sm:col-span-6 sm:col-start-6">{member.shortBio}</p>
              <span className="hidden text-right text-3xl sm:col-span-1 sm:block" aria-hidden="true">✦</span>
            </article>
          ))}
        </div>

        <p className="mt-7 mb-0 max-w-xl text-sm leading-relaxed text-[var(--color-dust)]">
          No departments, no inflated titles—just two people sharing creative, technical, and production responsibility while the studio takes shape.
        </p>
      </Container>
    </section>
  );
}
