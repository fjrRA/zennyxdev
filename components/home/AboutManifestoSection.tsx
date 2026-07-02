import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

type AboutManifestoSectionProps = { site: SiteConfig };

export function AboutManifestoSection({ site }: AboutManifestoSectionProps) {
  return (
    <section id="studio-approach" className="zine-cut bg-[var(--color-studio-green)] text-[var(--color-mist-light)]">
      <Container className="py-28 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-9">
            <p className="studio-kicker mb-6 text-[var(--color-amber)]">A note to ourselves</p>
            <h2 className="mb-0 max-w-[14ch] text-[clamp(3.3rem,7vw,7.8rem)] leading-[0.86] tracking-[-0.075em]">
              We don&apos;t need to look big. We need to <span className="font-serif font-normal italic text-[var(--color-amber)]">finish.</span>
            </h2>
          </div>

          <div className="lg:col-span-3 lg:self-end">
            <p className="mb-7 font-serif text-lg leading-relaxed text-white/70">{site.description.medium}</p>
            <Link href="/about" className="inline-flex items-center gap-3 border-b-2 border-white pb-1 text-sm font-bold hover:text-[var(--color-amber)]">Read our studio story →</Link>
          </div>
        </div>

        <div className="mt-20 border-t-2 border-white/45 pt-10">
          <p className="studio-kicker mb-8 text-white/55">Four rules on the wall</p>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {site.studioPrinciples.map((principle, index) => (
              <article key={principle.title} className={index % 2 ? "lg:translate-y-8" : ""}>
                <span className="font-serif text-4xl italic text-[var(--color-amber)]">{index + 1}.</span>
                <h3 className="mt-3 mb-3 text-2xl leading-[0.96] tracking-[-0.045em]">{principle.titleId}</h3>
                <p className="mb-0 font-serif text-sm leading-relaxed text-white/65">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
