// components/games/GamesHeroSection.tsx
import { Container } from "@/components/ui/Container";

export function GamesHeroSection() {
  return (
    <section className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden border-b border-[var(--surface-border)] bg-[var(--background)] py-20">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,204,0.05),transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[rgba(15,15,16,0.8)] px-3 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-1.5 w-1.5 bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)] animate-pulse" />
            SECURE_ARCHIVE_ACCESS
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter text-[var(--foreground)] mb-6">
            Project_
            <br className="hidden sm:block" />
            Database
          </h1>

          <p className="max-w-xl font-body text-base leading-relaxed text-[var(--muted)] border-l-2 border-[var(--surface-border)] pl-4">
            Our current focus is simple: build a small playable game first,
            document the process, and expand only after the foundation is
            strong.
          </p>
        </div>
      </Container>
    </section>
  );
}