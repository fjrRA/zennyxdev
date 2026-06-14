// components/home/HeroSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Devlog, Game, SiteConfig } from "@/types";
import { InfoRow } from "./InfoRow";

type HeroSectionProps = {
  site: SiteConfig;
  featuredGame?: Game;
  latestDevlog?: Devlog;
};

export function HeroSection({
  site,
  featuredGame,
  latestDevlog,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-[var(--surface-border)] bg-[var(--background)] py-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.06)_0%,transparent_50%)]" />
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)",
        }}
      />

      <div className="absolute top-6 left-6 hidden sm:flex flex-col gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
          <span className="text-[var(--accent)]">SYS.BOOT_SEQ</span>
        </div>
        <p>ZNX.OS // DISPATCH 001</p>
      </div>

      <div className="absolute top-6 right-6 hidden sm:flex flex-col items-end gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)] text-right">
        <p className="text-[var(--cyan)]">UPLINK_SECURE</p>
        <p>ENV: STATIC_V0.1</p>
      </div>

      <div className="absolute bottom-6 left-6 hidden sm:flex flex-col gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
        <p>TGT_PRJ: {featuredGame?.title || "ANDARA"}</p>
        <p>STATUS: {featuredGame?.status || "PROTOTYPING"}</p>
      </div>

      <div className="absolute bottom-6 right-6 hidden sm:flex items-end gap-2 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
        <div className="flex gap-[2px] items-end h-4">
          {[40, 80, 50, 100, 60].map((height, i) => (
            <div
              key={i}
              className="w-1 bg-[var(--muted-soft)] animate-pulse"
              style={{ height: `${height}%`, animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <span className="text-[var(--muted-soft)] leading-none">
          FREQ.MATCH
        </span>
      </div>

      <Container className="relative z-20 flex flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[rgba(15,15,16,0.6)] backdrop-blur-md px-4 py-1.5 text-[0.65rem] font-mono-accent uppercase tracking-[0.25em] text-[var(--muted)] shadow-xl">
          <span className="text-[var(--cyan)] font-bold animate-pulse">
            &gt;_
          </span>
          {site.home.heroLabel || "INITIALIZING ZENNYX"}
        </div>

        <h1 className="group relative font-display text-4xl sm:text-6xl md:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tighter text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[#050505]">
          <span className="absolute inset-0 blur-2xl opacity-0 bg-gradient-to-r from-[var(--accent)] to-[var(--cyan)] bg-clip-text text-transparent transition-opacity duration-700 group-hover:opacity-40">
            Small playable worlds
            <br />
            before bigger dreams.
          </span>

          <span className="relative">
            Small playable worlds
            <br />
            <span className="text-[var(--muted-soft)] transition-colors duration-500 group-hover:text-[var(--foreground)]">
              before bigger dreams.
            </span>
          </span>
        </h1>

        <p className="mt-8 max-w-2xl font-mono-accent text-sm sm:text-base leading-relaxed text-[var(--muted)] lowercase">
          {"// "}{" "}
          {site.home.heroDescription ||
            "Membangun semesta fiksi, satu baris kode dan satu aset pada satu waktu."}
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          <Button
            href={site.home.primaryCta.href}
            className="group relative overflow-hidden rounded-none border border-[var(--accent)] bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#050505] hover:shadow-[0_0_20px_var(--accent-soft)]"
          >
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--cyan)] transition-all duration-300 group-hover:w-full" />
            Explore Projects
          </Button>

          <Button
            href={site.home.secondaryCta.href}
            variant="ghost"
            className="rounded-none border-b border-transparent px-6 py-4 text-xs font-mono-accent uppercase tracking-[0.1em] text-[var(--muted)] transition-all duration-300 hover:border-[var(--foreground)] hover:text-[var(--foreground)]"
          >
            [ Read Devlogs ]
          </Button>
        </div>
      </Container>

      {featuredGame ? (
        <div className="sr-only">
          <dl>
            <InfoRow label="Project" value={featuredGame.title} />
          </dl>
        </div>
      ) : null}

      {latestDevlog ? (
        <Link href={`/devlog/${latestDevlog.slug}`} className="sr-only">
          {latestDevlog.title}
        </Link>
      ) : null}
    </section>
  );
}