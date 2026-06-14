// components/devlog/DevlogHeroSection.tsx
import { Container } from "@/components/ui/Container";

export function DevlogHeroSection() {
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

      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[rgba(15,15,16,0.8)] px-3 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-1.5 w-1.5 bg-[var(--accent)] shadow-[0_0_8px_var(--accent)] animate-pulse" />
            TRANSMISSION_ARCHIVE
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tighter text-[var(--foreground)] mb-6">
            Devlog_
            <br className="hidden sm:block" />
            Archive
          </h1>

          <p className="max-w-xl font-body text-base leading-relaxed text-[var(--muted)] border-l-2 border-[var(--surface-border)] pl-4">
            Small progress, real proof. Catatan development Zennyx berisi proses,
            keputusan scope, prototype, dan langkah kecil menuju game pertama
            yang playable.
          </p>
        </div>
      </Container>
    </section>
  );
}