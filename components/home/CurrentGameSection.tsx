// components/home/CurrentGameSection.tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Game } from "@/types";

type CurrentGameSectionProps = {
  featuredGame?: Game;
};

export function CurrentGameSection({ featuredGame }: CurrentGameSectionProps) {
  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(249,115,22,0.03),transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--surface-border)] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-2 w-2 items-center justify-center bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
              <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                Active Production File
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Current_Target
            </h2>
          </div>
          <p className="font-mono-accent text-xs text-[var(--muted)] md:text-right max-w-xs">
            {"// "}Game pertama yang menjadi fokus produksi utama Zennyx saat ini.
          </p>
        </div>

        {featuredGame ? (
          <div className="relative border border-[var(--surface-border)] bg-[var(--surface)] group">
            <div className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-[var(--muted-soft)]" />
            <div className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-[var(--muted-soft)]" />
            <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-[var(--muted-soft)]" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-[var(--accent)] transition-colors duration-300" />

            <div className="grid lg:grid-cols-[1.3fr_0.7fr] divide-y lg:divide-y-0 lg:divide-x divide-[var(--surface-border)]">
              <div className="p-8 sm:p-10">
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <span className="border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    STATUS: {featuredGame.status}
                  </span>
                  <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                    ID: {featuredGame.slug.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tighter text-[var(--foreground)] mb-6">
                  {featuredGame.title}
                </h3>

                <p className="max-w-2xl font-body text-base leading-relaxed text-[var(--muted)] mb-8">
                  {featuredGame.summary}
                </p>

                <div className="mb-10 flex flex-wrap gap-3 font-mono-accent text-xs text-[var(--muted-soft)]">
                  {featuredGame.genre.map((item) => (
                    <span
                      key={item}
                      className="hover:text-[var(--cyan)] transition-colors cursor-default"
                    >
                      [ {item.toUpperCase()} ]
                    </span>
                  ))}
                </div>

                <div>
                  <Button
                    href={`/games/${featuredGame.slug}`}
                    className="group relative inline-flex overflow-hidden rounded-none border border-[var(--surface-border)] bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span className="absolute bottom-0 left-0 h-0 w-full bg-[var(--accent-soft)] transition-all duration-300 group-hover:h-full -z-10" />
                    Access Core Data{" "}
                    <span className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      -&gt;
                    </span>
                  </Button>
                </div>
              </div>

              <div className="bg-[#101012] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:100%_4px]" />

                <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--cyan)] mb-6 flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  >
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="14" y1="10" x2="21" y2="3" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  Prototype_Focus_Log
                </p>

                <ul className="space-y-4 font-mono-accent text-xs leading-relaxed text-[var(--muted)]">
                  {featuredGame.prototypeScope.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-3 group/item">
                      <span className="text-[var(--surface-border)] group-hover/item:text-[var(--accent)] transition-colors mt-0.5">
                        {">"}
                      </span>
                      <span className="group-hover/item:text-[var(--foreground)] transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-dashed border-[var(--surface-border)]">
                  <p className="font-mono-accent text-[10px] text-[var(--muted-soft)]">
                    {"// "}SYS_NOTE: Scope strictly controlled.
                    <br />
                    Expansion locked until core loop verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-[var(--surface-border)] p-10 text-center font-mono-accent text-sm text-[var(--muted)]">
            ERR_404: NO_ACTIVE_PRODUCTION_DATA_FOUND
          </div>
        )}
      </Container>
    </section>
  );
}