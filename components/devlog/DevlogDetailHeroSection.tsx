// components/devlog/DevlogDetailHeroSection.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type DevlogDetailHeroSectionProps = {
  devlog: Devlog;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function DevlogDetailHeroSection({
  devlog,
}: DevlogDetailHeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--surface-border)] bg-[var(--background)] pt-24 pb-16">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.1),transparent_38%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="mb-10">
          <Link
            href="/devlog"
            className="group inline-flex items-center gap-2 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
          >
            <span className="text-[var(--accent)] opacity-50 group-hover:opacity-100">
              &gt; cd ..
            </span>
            <span>/devlog/archive</span>
          </Link>
        </div>

        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.18em]">
            <span className="border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 text-[var(--accent)]">
              CAT_{devlog.category}
            </span>

            <span className="text-[var(--muted-soft)]">
              {formatDate(devlog.date)}
            </span>

            <span className="text-[var(--muted-soft)]">
              {devlog.readingTime}
            </span>
          </div>

          <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-tighter text-[var(--foreground)] sm:text-6xl">
            {devlog.title}
          </h1>

          <p className="mt-6 max-w-2xl border-l-2 border-[var(--surface-border)] pl-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            {devlog.summary}
          </p>
        </div>
      </Container>
    </section>
  );
}