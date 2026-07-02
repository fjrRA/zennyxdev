import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { SocialsConfig } from "@/types";

type ContactSectionProps = { socials: SocialsConfig };

export function ContactSection({ socials }: ContactSectionProps) {
  return (
    <section id="contact-cta" className="border-y-[3px] border-[var(--color-ink)] bg-[var(--color-amber)]">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="studio-kicker mb-5">The build keeps moving</p>
            <h2 className="mb-7 max-w-[13ch] text-[clamp(3.2rem,6vw,6.5rem)] leading-[0.86] tracking-[-0.07em]">
              Come back for the next <span className="font-serif font-normal italic text-[var(--color-studio-green)]">playable thing.</span>
            </h2>
            <Link href={socials.cta.primaryButton.href} className="inline-flex items-center gap-4 border-b-[4px] border-[var(--color-ink)] pb-2 text-2xl font-black tracking-[-0.04em] hover:text-[var(--color-studio-green)] sm:text-3xl">
              Read the development journal <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="border-l-[3px] border-[var(--color-ink)] pl-6 lg:col-span-3 lg:col-start-10">
            <p className="font-serif mb-6 text-lg leading-relaxed text-black/65">{socials.contactMessage.note}</p>
            <p className="studio-kicker mb-2">Write to us</p>
            <a href={socials.primaryContact.href} className="break-all text-sm font-black underline decoration-2 underline-offset-4 hover:text-[var(--color-studio-green)]">{socials.primaryContact.value}</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
