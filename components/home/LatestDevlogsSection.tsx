// components/home/LatestDevlogsSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type LatestDevlogsSectionProps = {
  latestDevlogs: Devlog[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function LatestDevlogsSection({
  latestDevlogs,
}: LatestDevlogsSectionProps) {
  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-[var(--surface-border)] pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted-soft)]">
                {"// "}System_Feed
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Transmission_Logs
            </h2>
          </div>

          <Button
            href="/devlog"
            variant="ghost"
            className="group rounded-none border border-transparent px-4 py-2 font-mono-accent text-xs uppercase tracking-[0.1em] text-[var(--muted)] transition-all hover:border-[var(--surface-border)] hover:bg-[var(--surface)] hover:text-[var(--accent)]"
          >
            [ View All Archives ]
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latestDevlogs.map((devlog, index) => (
            <Link
              key={devlog.slug}
              href={`/devlog/${devlog.slug}`}
              className="group relative flex flex-col justify-between bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--surface)] hover:-translate-y-1"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />

              <div>
                <div className="mb-6 flex items-center justify-between border-b border-dashed border-[var(--surface-border)] pb-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                  <span className="text-[var(--accent)]">
                    CAT_{devlog.category}
                  </span>
                  <span>LOG_00{index + 1}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tighter text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                  {devlog.title}
                </h3>

                <p className="mt-4 font-body text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                  {devlog.summary}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between pt-4 font-mono-accent text-[10px] text-[var(--muted-soft)]">
                <span>{formatDate(devlog.date)}</span>
                <span className="flex items-center gap-1 group-hover:text-[var(--cyan)] transition-colors">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {devlog.readingTime}
                </span>
              </div>

              <div className="absolute bottom-0 right-0 h-2 w-2 bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--cyan)]" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}