// components/games/GameScopeSection.tsx
import { Container } from "@/components/ui/Container";
import type { Game } from "@/types";

type GameScopeSectionProps = {
  game: Game;
};

export function GameScopeSection({ game }: GameScopeSectionProps) {
  return (
    <section className="border-b border-[var(--surface-border)] py-20 bg-[var(--background)]">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="border border-[var(--surface-border)] bg-[#101012] p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--cyan)] shadow-[0_0_10px_var(--cyan)]" />

            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--cyan)] mb-4">
              Active_Production_Scope
            </p>

            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-8">
              What We Build First
            </h2>

            <ul className="space-y-4">
              {game.prototypeScope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-mono-accent text-xs leading-relaxed text-[var(--muted)]"
                >
                  <span className="text-[var(--cyan)] mt-0.5">[+]</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-red-900/30 bg-[#1a0f0f] p-8 sm:p-10 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #ef4444, #ef4444 10px, transparent 10px, transparent 20px)",
              }}
            />

            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--danger)]" />

            <div className="relative z-10">
              <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--danger)] mb-4 flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Deferred_Features
              </p>

              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-[var(--muted)] mb-8">
                Strictly Locked
              </h2>

              <ul className="space-y-4 opacity-70">
                {game.deferredFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-mono-accent text-xs leading-relaxed text-[var(--muted-soft)]"
                  >
                    <span className="text-[var(--danger)] mt-0.5">[X]</span>
                    <span className="line-through decoration-[var(--surface-border)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}