// components/games/ActiveProductionSection.tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Game } from "@/types";

type ActiveProductionSectionProps = {
  featuredGame?: Game;
};

export function ActiveProductionSection({
  featuredGame,
}: ActiveProductionSectionProps) {
  return (
    <section className="border-b border-[var(--surface-border)] py-24 bg-[#0a0a0b]">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] flex items-center gap-2 mb-2">
              <span className="text-[var(--muted-soft)]">{"// "}</span> Active
              Production
            </p>

            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Current_Main_Project
            </h2>
          </div>

          <p className="max-w-sm font-mono-accent text-[10px] uppercase leading-relaxed tracking-widest text-[var(--muted)] md:text-right">
            Game pertama menjadi fokus utama v0.1. Project vault lain dikunci
            sementara.
          </p>
        </div>

        {featuredGame ? (
          <div className="relative group border border-[var(--surface-border)] bg-[#101012] transition-colors hover:border-[var(--muted-soft)]">
            <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[var(--accent)] opacity-50 transition-opacity group-hover:opacity-100" />
            <div className="absolute -right-1 -bottom-1 h-3 w-3 border-r-2 border-b-2 border-[var(--cyan)] opacity-50 transition-opacity group-hover:opacity-100" />

            <div className="grid divide-y divide-[var(--surface-border)] lg:grid-cols-[1.2fr_0.8fr] lg:divide-x lg:divide-y-0">
              <div className="p-6 sm:p-10 flex flex-col h-full">
                <div className="mb-8 w-full h-48 sm:h-64 border border-dashed border-[var(--surface-border)] bg-[rgba(255,255,255,0.01)] flex items-center justify-center relative overflow-hidden group/img">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,var(--surface-border)_45%,var(--surface-border)_55%,transparent_55%)] bg-[length:10px_10px] opacity-10" />

                  <p className="font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted-soft)] flex flex-col items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      opacity="0.5"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    IMG_CORE_ART_PENDING
                  </p>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.18em]">
                  <span className="border border-[var(--accent)] bg-[var(--accent-soft)] px-2 py-1 text-[var(--accent)]">
                    {featuredGame.status}
                  </span>

                  <span className="text-[var(--muted)]">
                    TYPE: {featuredGame.productionType}
                  </span>
                </div>

                <h3 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-[var(--foreground)] mb-6">
                  {featuredGame.title}
                </h3>

                <p className="max-w-2xl text-sm leading-relaxed text-[var(--muted)] mb-8 flex-grow">
                  {featuredGame.summary}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
                  <div className="flex flex-wrap gap-2 font-mono-accent text-[10px] text-[var(--muted-soft)]">
                    {featuredGame.genre.map((genre) => (
                      <span key={genre}>[ {genre.toUpperCase()} ]</span>
                    ))}
                  </div>

                  <Button
                    href={`/games/${featuredGame.slug}`}
                    className="rounded-none border border-[var(--accent)] bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#050505] transition-all"
                  >
                    Access Detail Logs -&gt;
                  </Button>
                </div>
              </div>

              <div className="bg-[var(--surface)] p-6 sm:p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:100%_4px]" />

                <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--cyan)] mb-8 flex items-center gap-2">
                  <span className="w-2 h-2 border border-[var(--cyan)]" />
                  Sys.Specs // Build_Facts
                </p>

                <dl className="space-y-6">
                  <div className="border-b border-dashed border-[var(--surface-border)] pb-4">
                    <dt className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)] mb-1">
                      Target Build
                    </dt>
                    <dd className="font-body text-sm font-medium text-[var(--foreground)]">
                      {featuredGame.targetBuild}
                    </dd>
                  </div>

                  <div className="border-b border-dashed border-[var(--surface-border)] pb-4">
                    <dt className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)] mb-1">
                      World Setting
                    </dt>
                    <dd className="font-body text-sm font-medium text-[var(--foreground)]">
                      {featuredGame.setting.name}
                    </dd>
                  </div>

                  <div className="border-b border-dashed border-[var(--surface-border)] pb-4">
                    <dt className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)] mb-1">
                      Target Platform
                    </dt>
                    <dd className="font-body text-sm font-medium text-[var(--foreground)]">
                      {featuredGame.platforms.join(", ")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-12 bg-[#101012] border border-[var(--surface-border)] p-4">
                  <p className="font-mono-accent text-[9px] uppercase tracking-[0.2em] text-[var(--muted)] leading-relaxed">
                    {"// "}SYS_NOTE:
                    <br />
                    Scope locked. Prototype first. Expansion later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-[var(--surface-border)] p-12 text-center font-mono-accent text-sm tracking-widest text-[var(--muted)]">
            [ ERR_404: NO_PUBLIC_GAMES_FOUND ]
          </div>
        )}
      </Container>
    </section>
  );
}