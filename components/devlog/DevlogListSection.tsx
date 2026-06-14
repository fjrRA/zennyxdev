// components/devlog/DevlogListSection.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type DevlogListSectionProps = {
  devlogs: Devlog[];
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function DevlogListSection({ devlogs }: DevlogListSectionProps) {
  return (
    <section className="relative border-b border-[var(--surface-border)] bg-[#0a0a0b] py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              {"// "}Development Feed
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Transmission_Logs
            </h2>
          </div>

          <p className="max-w-sm font-mono-accent text-[10px] uppercase leading-relaxed tracking-widest text-[var(--muted)] md:text-right">
            Devlog tidak harus besar. Yang penting jujur, konsisten, dan
            menunjukkan progress nyata.
          </p>
        </div>

        {devlogs.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devlogs.map((devlog, index) => (
              <Link
                key={devlog.slug}
                href={`/devlog/${devlog.slug}`}
                className="group relative flex min-h-[320px] flex-col justify-between bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--surface)]"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />

                <div>
                  <div className="mb-6 flex items-center justify-between border-b border-dashed border-[var(--surface-border)] pb-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                    <span className="text-[var(--accent)]">
                      CAT_{devlog.category}
                    </span>
                    <span>LOG_{String(index + 1).padStart(3, "0")}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tighter text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {devlog.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-relaxed text-[var(--muted)] line-clamp-4">
                    {devlog.summary}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-dashed border-[var(--surface-border)] pt-4 font-mono-accent text-[10px] text-[var(--muted-soft)]">
                  <span>{formatDate(devlog.date)}</span>
                  <span>{devlog.readingTime}</span>
                </div>

                <div className="absolute bottom-0 right-0 h-2 w-2 bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-[var(--surface-border)] bg-[#101012] p-12 text-center font-mono-accent text-xs tracking-widest text-[var(--muted)]">
            [ ERR_404: NO_DEVLOG_TRANSMISSIONS_FOUND ]
          </div>
        )}
      </Container>
    </section>
  );
}