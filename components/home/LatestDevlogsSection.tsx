// components/home/LatestDevlogsSection.tsx

import Link from "next/link";

import { Container } from "@/components/ui/Container";

import type { Devlog } from "@/types";

type LatestDevlogsSectionProps = {
  latestDevlogs: Devlog[];
};

function formatDate(date: string) {
  const parsedDate = date.includes("T")
    ? new Date(date)
    : new Date(`${date}T00:00:00`);

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

export function LatestDevlogsSection({
  latestDevlogs,
}: LatestDevlogsSectionProps) {
  return (
    <section
      id="latest-devlogs"
      className="
        border-b
        border-[var(--surface-border)]
        bg-[var(--paper)]
        text-[var(--ink)]
      "
    >
      <Container className="py-20 sm:py-24 lg:py-32">
        <div
          className="
            grid
            gap-8
            border-b
            border-[var(--surface-border)]
            pb-8
            md:grid-cols-12
            md:items-end
            lg:pb-10
          "
        >
          <div className="md:col-span-7">
            <p
              className="
                editorial-label
                mb-3
                text-[var(--accent)]
              "
            >
              02 / Development notes
            </p>

            <h2
              className="
                mb-0
                max-w-[11ch]
                text-balance
                text-[clamp(2.75rem,6vw,6.5rem)]
                font-semibold
                uppercase
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              Latest development notes
            </h2>
          </div>

          <div
            className="
              flex
              flex-col
              items-start
              gap-6
              md:col-span-4
              md:col-start-9
              md:items-end
            "
          >
            <p
              className="
                mb-0
                max-w-sm
                text-sm
                leading-relaxed
                text-[var(--ash)]
                md:text-right
              "
            >
              Catatan tentang proses development, keputusan scope,
              eksperimen, kesalahan, dan pelajaran dari studio kecil
              kami.
            </p>

            <Link
              href="/devlog"
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-current
                pb-1
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                transition-colors
                duration-200
                hover:text-[var(--accent)]
              "
            >
              View all notes

              <span
                aria-hidden="true"
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {latestDevlogs.length > 0 ? (
          <ol className="border-b border-[var(--surface-border)]">
            {latestDevlogs.map((devlog, index) => {
              const itemNumber = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={devlog.slug}
                  className="
                    border-t
                    border-[var(--surface-border)]
                    first:border-t-0
                  "
                >
                  <Link
                    href={`/devlog/${devlog.slug}`}
                    className="
                      group
                      grid
                      gap-5
                      py-8
                      transition-colors
                      duration-200
                      hover:bg-[var(--paper-soft)]
                      sm:-mx-4
                      sm:px-4
                      sm:py-10
                      md:grid-cols-12
                      md:gap-6
                      lg:py-12
                    "
                  >
                    <span
                      className="
                        font-mono-accent
                        text-xs
                        tracking-[0.12em]
                        text-[var(--accent)]
                        md:col-span-1
                      "
                    >
                      {itemNumber}
                    </span>

                    <div className="md:col-span-2">
                      <p
                        className="
                          editorial-label
                          mb-0
                          text-[var(--foreground)]
                        "
                      >
                        {devlog.category}
                      </p>

                      <time
                        dateTime={devlog.date}
                        className="
                          editorial-label
                          mt-2
                          block
                          text-[var(--ash)]
                        "
                      >
                        {formatDate(devlog.date)}
                      </time>
                    </div>

                    <div className="md:col-span-7">
                      <h3
                        className="
                          mb-0
                          max-w-[18ch]
                          text-balance
                          text-[clamp(1.75rem,3vw,3.5rem)]
                          font-semibold
                          uppercase
                          leading-[0.95]
                          tracking-[-0.045em]
                          transition-colors
                          duration-200
                          group-hover:text-[var(--accent)]
                        "
                      >
                        {devlog.title}
                      </h3>

                      <p
                        className="
                          font-serif
                          mb-0
                          mt-5
                          max-w-2xl
                          text-base
                          leading-relaxed
                          text-[var(--ash)]
                          sm:text-lg
                        "
                      >
                        {devlog.summary}
                      </p>
                    </div>

                    <div
                      className="
                        flex
                        items-end
                        justify-between
                        gap-5
                        border-t
                        border-[var(--surface-border)]
                        pt-5
                        md:col-span-2
                        md:flex-col
                        md:items-end
                        md:justify-between
                        md:border-t-0
                        md:pt-0
                        md:text-right
                      "
                    >
                      <span
                        className="
                          editorial-label
                          text-[var(--ash)]
                        "
                      >
                        {devlog.readingTime ?? "1 min read"}
                      </span>

                      <span
                        aria-hidden="true"
                        className="
                          text-2xl
                          leading-none
                          transition-transform
                          duration-200
                          group-hover:translate-x-2
                        "
                      >
                        →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        ) : (
          <div
            className="
              border-b
              border-[var(--surface-border)]
              py-16
            "
          >
            <p
              className="
                font-serif
                mb-0
                max-w-2xl
                text-xl
                leading-relaxed
                text-[var(--ash)]
              "
            >
              Belum ada development note yang dipublikasikan.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}