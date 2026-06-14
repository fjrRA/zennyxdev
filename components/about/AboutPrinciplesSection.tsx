// components/about/AboutPrinciplesSection.tsx
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

type AboutPrinciplesSectionProps = {
  site: SiteConfig;
};

export function AboutPrinciplesSection({ site }: AboutPrinciplesSectionProps) {
  return (
    <section className="border-b border-[var(--surface-border)] bg-[var(--background)] py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              {"// "}Core Directives
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Studio_Principles
            </h2>
          </div>

          <p className="max-w-sm font-mono-accent text-[10px] uppercase leading-relaxed tracking-widest text-[var(--muted)] md:text-right">
            Prinsip ini menjaga Zennyx tetap realistis sebagai studio kecil tahap
            awal.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.studioPrinciples.map((principle, index) => (
            <article
              key={principle.title}
              className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--muted-soft)] hover:bg-[var(--surface)]"
            >
              <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[var(--accent)] opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />

              <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[var(--cyan)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:opacity-100" />

              <p className="mb-5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                [ DRCT_{String(index + 1).padStart(2, "0")} ]
              </p>

              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                {principle.titleId}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}