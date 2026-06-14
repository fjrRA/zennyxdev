// components/games/GameDetailHeroSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import type { Game } from "@/types";

type GameDetailHeroSectionProps = {
  game: Game;
};

export function GameDetailHeroSection({ game }: GameDetailHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--surface-border)] pt-24 pb-16">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,204,0.05),transparent_40%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-10">
          <Link
            href="/games"
            className="group inline-flex items-center gap-2 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--cyan)]"
          >
            <span className="text-[var(--cyan)] opacity-50 group-hover:opacity-100">
              &gt; cd ..
            </span>
            <span>/games/archives</span>
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <StatusBadge>{game.status}</StatusBadge>

              <span className="border border-[var(--surface-border)] px-2 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                {game.productionType}
              </span>

              <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                ID: {game.slug.toUpperCase()}
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl font-black uppercase leading-[0.95] tracking-tighter text-[var(--foreground)] mb-8">
              {game.title}
            </h1>

            <div className="border-l-2 border-[var(--accent)] pl-6 mb-10">
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
                {game.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-auto">
              {game.links.demo ? (
                <Button
                  href={game.links.demo}
                  className="rounded-none border border-[var(--cyan)] bg-[var(--cyan)] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#050505] transition-all hover:bg-transparent hover:text-[var(--cyan)] hover:shadow-[0_0_15px_rgba(0,255,204,0.2)]"
                >
                  Execute Demo Build
                </Button>
              ) : null}

              <Button
                href="#devlogs"
                variant="ghost"
                className="rounded-none border border-[var(--surface-border)] bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)] transition-all hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
              >
                Access Devlogs
              </Button>
            </div>
          </div>

          <div className="flex flex-col border border-[var(--surface-border)] bg-[#101012]">
            <div className="relative h-64 sm:h-80 w-full bg-[var(--surface)] flex items-center justify-center border-b border-[var(--surface-border)] overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,var(--surface-border)_45%,var(--surface-border)_55%,transparent_55%)] bg-[length:8px_8px] opacity-20" />

              <p className="font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted-soft)] flex flex-col items-center gap-3 relative z-10">
                <span className="animate-pulse h-2 w-2 bg-[var(--muted-soft)]" />
                AWAITING_VISUAL_ASSET
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] mb-6 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                Target_Parameters
              </p>

              <dl className="space-y-4 font-mono-accent text-xs">
                <div className="flex justify-between border-b border-dashed border-[var(--surface-border)] pb-2">
                  <dt className="text-[var(--muted-soft)] uppercase tracking-[0.1em]">
                    Genre
                  </dt>
                  <dd className="text-[var(--foreground)] text-right">
                    {game.genre.join(" / ")}
                  </dd>
                </div>

                <div className="flex justify-between border-b border-dashed border-[var(--surface-border)] pb-2">
                  <dt className="text-[var(--muted-soft)] uppercase tracking-[0.1em]">
                    Setting
                  </dt>
                  <dd className="text-[var(--foreground)] text-right">
                    {game.setting.name}
                  </dd>
                </div>

                <div className="flex justify-between border-b border-dashed border-[var(--surface-border)] pb-2">
                  <dt className="text-[var(--muted-soft)] uppercase tracking-[0.1em]">
                    Platform
                  </dt>
                  <dd className="text-[var(--foreground)] text-right">
                    {game.platforms.join(" / ")}
                  </dd>
                </div>

                <div className="flex justify-between border-b border-dashed border-[var(--surface-border)] pb-2">
                  <dt className="text-[var(--muted-soft)] uppercase tracking-[0.1em]">
                    Build
                  </dt>
                  <dd className="text-[var(--cyan)] text-right">
                    {game.targetBuild}
                  </dd>
                </div>

                <div className="flex justify-between border-b border-dashed border-[var(--surface-border)] pb-2">
                  <dt className="text-[var(--muted-soft)] uppercase tracking-[0.1em]">
                    Release
                  </dt>
                  <dd className="text-[var(--foreground)] text-right">
                    {game.targetRelease}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}