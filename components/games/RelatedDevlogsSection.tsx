// components/games/RelatedDevlogsSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type RelatedDevlogsSectionProps = {
  relatedDevlogs: Devlog[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function RelatedDevlogsSection({
  relatedDevlogs,
}: RelatedDevlogsSectionProps) {
  return (
    <section id="devlogs" className="py-20 bg-[#0a0a0b]">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              Transmission_Logs
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Development Notes
            </h2>
          </div>

          <Button
            href="/devlog"
            variant="ghost"
            className="rounded-none border border-transparent hover:border-[var(--surface-border)] font-mono-accent text-xs uppercase text-[var(--muted)] hover:text-[var(--accent)]"
          >
            [ Open Master Log ]
          </Button>
        </div>

        {relatedDevlogs.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-3">
            {relatedDevlogs.map((devlog, index) => (
              <Link
                key={devlog.slug}
                href={`/devlog/${devlog.slug}`}
                className="group relative flex flex-col justify-between bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--surface)] hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />

                <div>
                  <div className="mb-4 flex items-center justify-between border-b border-dashed border-[var(--surface-border)] pb-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                    <span className="text-[var(--accent)]">
                      CAT_{devlog.category}
                    </span>
                    <span>LOG_00{index + 1}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase leading-snug tracking-tighter text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {devlog.title}
                  </h3>

                  <p className="mt-3 font-body text-sm leading-relaxed text-[var(--muted)] line-clamp-2">
                    {devlog.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 font-mono-accent text-[10px] text-[var(--muted-soft)]">
                  <span>{formatDate(devlog.date)}</span>
                  <span>{devlog.readingTime}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[var(--surface-border)] bg-[#101012] p-12 text-center font-mono-accent text-xs tracking-widest text-[var(--muted)]">
            [ ERR_404: NO_RELATED_TRANSMISSIONS_FOUND ]
          </div>
        )}
      </Container>
    </section>
  );
}