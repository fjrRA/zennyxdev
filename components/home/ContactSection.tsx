// components/home/ContactSection.tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SocialsConfig } from "@/types";

type ContactSectionProps = {
  socials: SocialsConfig;
};

export function ContactSection({ socials }: ContactSectionProps) {
  return (
    <section className="relative border-t border-[var(--surface-border)] bg-[#0a0a0b] py-24">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1)_1px, transparent 1px)",
          backgroundSize: "100% 8px",
        }}
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-3 border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-1.5">
            <span className="h-2 w-2 bg-[var(--cyan)] animate-pulse shadow-[0_0_8px_var(--cyan)]" />
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--cyan)]">
              UPLINK_ENDPOINT_READY
            </p>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-6">
            {socials.cta.title}
          </h2>

          <p className="max-w-xl font-body text-base leading-relaxed text-[var(--muted)] mb-12">
            {socials.cta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href={socials.cta.primaryButton.href}
              className="rounded-none border border-[var(--accent)] bg-[var(--accent)] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#050505] hover:bg-transparent hover:text-[var(--accent)] transition-all"
            >
              {socials.cta.primaryButton.label}
            </Button>

            <Button
              href={socials.cta.secondaryButton.href}
              variant="secondary"
              className="rounded-none border border-[var(--surface-border)] bg-transparent px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-all"
            >
              {socials.cta.secondaryButton.label}
            </Button>
          </div>

          <div className="mt-20 font-mono-accent text-[0.6rem] uppercase tracking-[0.3em] text-[var(--surface-border)]">
            ZNX_OS // SYSTEM_VERSION_0.1_STABLE // 2026
          </div>
        </div>
      </Container>
    </section>
  );
}