// components/games/ProjectPolicySection.tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { SiteConfig } from "@/types";

type ProjectPolicySectionProps = {
  site: SiteConfig;
};

export function ProjectPolicySection({ site }: ProjectPolicySectionProps) {
  return (
    <section className="py-24 bg-[var(--background)]">
      <Container>
        <div className="relative border border-[var(--accent)] bg-[#101012] p-8 sm:p-12 overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,var(--accent),var(--accent)_10px,transparent_10px,transparent_20px)] opacity-50" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--accent)] animate-pulse" />
                Directive: Project Policy
              </p>

              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[var(--foreground)] mb-4">
                One active project at a time
              </h2>

              <p className="font-body text-sm leading-relaxed text-[var(--muted)]">
                {site.shortName} keeps the website focused on the active
                production first. Long-term ideas and bigger projects can be
                introduced later, after the first playable foundation is
                clearer.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                href="/devlog"
                className="rounded-none border-2 border-[var(--accent)] bg-[var(--accent)] px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] hover:bg-transparent hover:text-[var(--accent)] transition-all"
              >
                Verify Devlogs
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}