// components/home/AboutManifestoSection.tsx
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

type AboutManifestoSectionProps = {
  site: SiteConfig;
};

export function AboutManifestoSection({ site }: AboutManifestoSectionProps) {
  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[#0a0a0b] py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)] animate-pulse" />
              Studio_Manifesto
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-[var(--foreground)]">
              Small playable worlds <br className="hidden lg:block" />
              <span className="text-[var(--muted-soft)]">
                before bigger dreams.
              </span>
            </h2>

            <div className="mt-8 border-l-2 border-[var(--accent)] pl-6">
              <p className="font-body text-base leading-relaxed text-[var(--muted)]">
                {site.description.medium}
              </p>
            </div>

            <div className="mt-12 hidden md:block font-mono-accent text-[10px] text-[var(--surface-border)] leading-tight select-none">
              {`+-----------------------+`} <br />
              {`|  Z E N N Y X          |`} <br />
              {`|  S T U D I O          |`} <br />
              {`|  V 0 . 1 // A C T I V E `} <br />
              {`+-----------------------+`}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {site.studioPrinciples.map((principle, index) => (
              <article
                key={principle.title}
                className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--surface)] hover:border-[var(--muted-soft)]"
              >
                <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[var(--accent)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[var(--cyan)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1" />

                <p className="mb-5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                  [ DRCT_0{index + 1} ]
                </p>

                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[var(--foreground)]">
                  {principle.titleId}
                </h3>

                <p className="mt-4 font-body text-sm leading-relaxed text-[var(--muted)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}