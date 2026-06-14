// components/contact/ContactNoteSection.tsx
import { Container } from "@/components/ui/Container";
import type { SocialsConfig } from "@/types";

type ContactNoteSectionProps = {
  socials: SocialsConfig;
};

export function ContactNoteSection({ socials }: ContactNoteSectionProps) {
  return (
    <section className="bg-[var(--background)] py-24">
      <Container>
        <div className="relative overflow-hidden border border-[var(--accent)] bg-[#101012] p-8 sm:p-12">
          <div className="absolute left-0 top-0 h-1 w-full bg-[repeating-linear-gradient(45deg,var(--accent),var(--accent)_10px,transparent_10px,transparent_20px)] opacity-50" />

          <div className="relative z-10 max-w-3xl">
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] mb-3">
              Transmission_Note
            </p>

            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-5">
              {socials.contactMessage.title}
            </h2>

            <p className="text-sm leading-8 text-[var(--muted)]">
              {socials.contactMessage.note}
            </p>

            <div className="mt-8 border-t border-dashed border-[var(--surface-border)] pt-5">
              <p className="font-mono-accent text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[var(--muted-soft)]">
                ZNX_CONTACT_PROTOCOL // EARLY_STAGE_STUDIO // RESPONSE_TIME_NOT_GUARANTEED
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}