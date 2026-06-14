// components/games/GameCoreSection.tsx
import { Container } from "@/components/ui/Container";
import type { Game } from "@/types";

type GameCoreSectionProps = {
  game: Game;
};

export function GameCoreSection({ game }: GameCoreSectionProps) {
  return (
    <section className="border-b border-[var(--surface-border)] py-20 bg-[#0a0a0b]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
              Env_Variables
            </p>

            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
              {game.setting.name}
            </h2>

            <p className="text-sm leading-8 text-[var(--muted)] mb-8">
              {game.setting.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {game.setting.inspiration.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--surface-border)] bg-[#101012] px-3 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]"
                >
                  REF: {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] mb-4">
              System_Routines
            </p>

            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
              {game.gameplayFocus.title}
            </h2>

            <p className="text-sm leading-8 text-[var(--muted)] mb-8">
              {game.gameplayFocus.description}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {game.gameplayFocus.points.map((point, index) => (
                <article
                  key={point}
                  className="border border-[var(--surface-border)] bg-[#101012] p-4 flex items-start gap-3 group"
                >
                  <span className="font-mono-accent text-[0.65rem] text-[var(--surface-border)] group-hover:text-[var(--cyan)] transition-colors mt-0.5">
                    {">"}
                  </span>

                  <div>
                    <p className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)] mb-1">
                      NODE_0{index + 1}
                    </p>

                    <h3 className="font-display text-sm font-bold uppercase tracking-tight text-[var(--foreground)] group-hover:text-[var(--cyan)] transition-colors">
                      {point}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}