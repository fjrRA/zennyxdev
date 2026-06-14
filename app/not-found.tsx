// app/not-found.tsx
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getSiteConfig } from "@/lib/site";

export default function NotFound() {
  const site = getSiteConfig();

  return (
    <main className="bg-[var(--background)]">
      <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden border-b border-[var(--surface-border)] py-20">
        <div
          className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_45%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[rgba(15,15,16,0.8)] px-4 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted)]">
              <span className="h-1.5 w-1.5 animate-pulse bg-[var(--danger)] shadow-[0_0_8px_var(--danger)]" />
              ROUTE_NOT_FOUND
            </div>

            <p className="font-mono-accent text-xs uppercase tracking-[0.3em] text-[var(--danger)]">
              ERR_404 / LOST_TRANSMISSION
            </p>

            <h1 className="mt-6 font-display text-5xl font-black uppercase leading-tight tracking-tighter text-[var(--foreground)] sm:text-7xl">
              Signal Lost
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--muted)]">
              Halaman yang kamu cari tidak ditemukan di archive{" "}
              {site.shortName}. Mungkin route-nya belum dibuat, sudah dipindah,
              atau memang belum masuk ke build v0.1.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/" className="rounded-none">
                Back to Home
              </Button>

              <Button href="/games" variant="secondary" className="rounded-none">
                View Games
              </Button>

              <Button href="/devlog" variant="ghost" className="rounded-none">
                Read Devlog
              </Button>
            </div>

            <div className="mx-auto mt-14 max-w-md border border-dashed border-[var(--surface-border)] bg-[#101012] p-5 text-left">
              <p className="font-mono-accent text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[var(--muted-soft)]">
                ZNX_ROUTE_CHECK // STATUS: FAILED
                <br />
                ACTION: RETURN_TO_KNOWN_ENDPOINT
                <br />
                SAFE_ENDPOINTS: / /games /devlog /about /contact
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}