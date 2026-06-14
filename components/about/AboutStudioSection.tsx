// components/about/AboutStudioSection.tsx
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

type AboutStudioSectionProps = {
  site: SiteConfig;
};

export function AboutStudioSection({ site }: AboutStudioSectionProps) {
  return (
    <section className="border-b border-[var(--surface-border)] bg-[#0a0a0b] py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              {"// "}Studio Overview
            </p>

            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tighter text-[var(--foreground)]">
              Small team.
              <br />
              Controlled scope.
              <br />
              Real progress.
            </h2>
          </div>

          <div className="border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-10">
            <div className="mb-8 border-b border-dashed border-[var(--surface-border)] pb-5">
              <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                ZNX_STUDIO_PROFILE
              </p>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--muted)]">
              <p>{site.description.long}</p>

              <p>
                Zennyx tidak sedang mencoba terlihat seperti studio besar sejak
                hari pertama. Website ini dibuat sebagai fondasi identitas resmi,
                tempat menampilkan game pertama, devlog, dan arah perkembangan
                studio secara bertahap.
              </p>

              <p>
                Fokus utama kami untuk tahap awal adalah membangun karya kecil
                yang playable, menjaga scope tetap masuk akal, dan menunjukkan
                progress development secara terbuka.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border border-[var(--surface-border)] bg-[var(--background)] p-4">
                <p className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                  Studio Type
                </p>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  {site.type}
                </p>
              </div>

              <div className="border border-[var(--surface-border)] bg-[var(--background)] p-4">
                <p className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                  Stage
                </p>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  {site.stage}
                </p>
              </div>

              <div className="border border-[var(--surface-border)] bg-[var(--background)] p-4">
                <p className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                  Country
                </p>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  {site.country}
                </p>
              </div>

              <div className="border border-[var(--surface-border)] bg-[var(--background)] p-4">
                <p className="font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                  Core Message
                </p>
                <p className="mt-2 text-sm text-[var(--foreground)]">
                  {site.coreMessage.en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}