import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type LatestDevlogsSectionProps = { latestDevlogs: Devlog[] };

function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", year: "numeric" }).format(parsed);
}

export function LatestDevlogsSection({ latestDevlogs }: LatestDevlogsSectionProps) {
  const [leadNote, ...otherNotes] = latestDevlogs;

  return (
    <section id="latest-devlogs" className="border-y-[3px] border-[var(--color-ink)] bg-[var(--color-mist-light)]">
      <Container className="py-24 sm:py-28 lg:py-36">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="studio-kicker mb-4 text-[var(--color-brick)]">Development journal</p>
            <h2 className="mb-0 text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.86] tracking-[-0.075em]">
              Notes, mistakes,<br />and things that <span className="font-serif font-normal italic text-[var(--color-studio-green)]">worked.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="mb-5 font-serif text-base leading-relaxed text-[var(--color-dust)]">
              A public record of learning how to finish our first game—not a polished press feed.
            </p>
            <Link href="/devlog" className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-[var(--color-brick)]">Open the full journal →</Link>
          </div>
        </div>

        {leadNote ? (
          <div className="grid gap-10 lg:grid-cols-12">
            <Link href={`/devlog/${leadNote.slug}`} className="group relative block border-[3px] border-[var(--color-ink)] bg-[var(--color-amber)] p-7 shadow-[9px_9px_0_var(--color-ink)] sm:p-10 lg:col-span-7">
              <span className="absolute right-5 top-5 font-serif text-5xl italic text-black/20">01</span>
              <div className="flex min-h-[26rem] flex-col justify-between">
                <div>
                  <p className="studio-kicker mb-2">{leadNote.category}</p>
                  <time dateTime={leadNote.date} className="text-xs font-semibold">{formatDate(leadNote.date)}</time>
                </div>
                <div>
                  <h3 className="mb-5 max-w-[13ch] text-[clamp(2.4rem,5vw,5rem)] leading-[0.9] tracking-[-0.065em] transition-transform group-hover:-translate-y-1">
                    {leadNote.title}
                  </h3>
                  <p className="mb-0 max-w-xl font-serif text-lg leading-relaxed text-black/65">{leadNote.summary}</p>
                </div>
                <span className="mt-8 text-sm font-black">Read this note →</span>
              </div>
            </Link>

            <div className="lg:col-span-4 lg:col-start-9">
              {otherNotes.map((note, index) => (
                <Link key={note.slug} href={`/devlog/${note.slug}`} className={`group block py-7 ${index === 0 ? "border-y-[3px]" : "border-b-[3px]"} border-[var(--color-ink)]`}>
                  <div className="mb-8 flex items-start justify-between gap-5">
                    <div>
                      <p className="studio-kicker mb-1 text-[var(--color-studio-green)]">{note.category}</p>
                      <time dateTime={note.date} className="text-xs text-[var(--color-dust)]">{formatDate(note.date)}</time>
                    </div>
                    <span className="font-serif text-3xl italic text-[var(--color-brick)]">0{index + 2}</span>
                  </div>
                  <h3 className="mb-4 max-w-[17ch] text-3xl leading-[0.96] tracking-[-0.055em] group-hover:text-[var(--color-brick)] sm:text-4xl">{note.title}</h3>
                  <p className="mb-0 font-serif text-sm leading-relaxed text-[var(--color-dust)]">{note.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <p className="font-serif text-lg">The first development note is still being written.</p>
        )}
      </Container>
    </section>
  );
}
