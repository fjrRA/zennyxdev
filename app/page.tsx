import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getLatestDevlogs } from "@/lib/devlogs";
import { getFeaturedGame } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import { getSocialsConfig } from "@/lib/socials";
import { getActiveTeamMembers } from "@/lib/team";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-[var(--surface-border)] py-3 text-sm">
      <dt className="font-mono-accent text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-soft)]">
        {label}
      </dt>
      <dd className="text-[var(--foreground)]">{value}</dd>
    </div>
  );
}

export default function HomePage() {
  const site = getSiteConfig();
  const featuredGame = getFeaturedGame();
  const latestDevlogs = getLatestDevlogs(3);
  const latestDevlog = latestDevlogs[0];
  const teamMembers = getActiveTeamMembers();
  const socials = getSocialsConfig();

  return (
    <main>
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden border-b border-[var(--surface-border)] bg-[var(--background)] py-20">

        {/* BACKGROUND EFFECTS: Cyber Grid & Ambient Glow */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.06)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 10%, transparent 100%)'
          }}
        />

        {/* ---------------------------------------------------- */}
        {/* HUD CORNERS: Menggantikan Card (Hanya muncul di Layar Menengah ke atas) */}

        {/* HUD Kiri Atas: System Boot */}
        <div className="absolute top-6 left-6 hidden sm:flex flex-col gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            <span className="text-[var(--accent)]">SYS.BOOT_SEQ</span>
          </div>
          <p>ZNX.OS // DISPATCH 001</p>
        </div>

        {/* HUD Kanan Atas: Environment */}
        <div className="absolute top-6 right-6 hidden sm:flex flex-col items-end gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)] text-right">
          <p className="text-[var(--cyan)]">UPLINK_SECURE</p>
          <p>ENV: STATIC_V0.1</p>
        </div>

        {/* HUD Kiri Bawah: Current Target */}
        <div className="absolute bottom-6 left-6 hidden sm:flex flex-col gap-1 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
          <p>TGT_PRJ: {featuredGame?.title || "ANDARA"}</p>
          <p>STATUS: {featuredGame?.status || "PROTOTYPING"}</p>
        </div>

        {/* HUD Kanan Bawah: Audio/Frequency Visualizer Statis */}
        {/* HUD Kanan Bawah: Audio/Frequency Visualizer Statis */}
        <div className="absolute bottom-6 right-6 hidden sm:flex items-end gap-2 z-10 font-mono-accent text-[10px] uppercase tracking-widest text-[var(--muted)]">
          <div className="flex gap-[2px] items-end h-4">
            {/* Menggunakan nilai tinggi statis [40, 80, 50, 100, 60] sebagai pengganti Math.random() */}
            {[40, 80, 50, 100, 60].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-[var(--muted-soft)] animate-pulse"
                style={{ height: `${height}%`, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <span className="text-[var(--muted-soft)] leading-none">FREQ.MATCH</span>
        </div>
        {/* ---------------------------------------------------- */}

        {/* CENTER CONTENT: Pesan Utama & CTA */}
        <Container className="relative z-20 flex flex-col items-center text-center">

          {/* Terminal Command Line Label */}
          <div className="mb-8 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[rgba(15,15,16,0.6)] backdrop-blur-md px-4 py-1.5 text-[0.65rem] font-mono-accent uppercase tracking-[0.25em] text-[var(--muted)] shadow-xl">
            <span className="text-[var(--cyan)] font-bold animate-pulse">&gt;_</span>
            {site.home.heroLabel || "INITIALIZING ZENNYX"}
          </div>

          {/* Massive Glitch/Shader Title */}
          <h1 className="group relative font-display text-4xl sm:text-6xl md:text-[5.5rem] font-black uppercase leading-[0.95] tracking-tighter text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-[#050505]">
            {/* Glow Layer (Muncul perlahan saat di-hover) */}
            <span className="absolute inset-0 blur-2xl opacity-0 bg-gradient-to-r from-[var(--accent)] to-[var(--cyan)] bg-clip-text text-transparent transition-opacity duration-700 group-hover:opacity-40">
              Small playable worlds<br />before bigger dreams.
            </span>

            {/* Main Text Layer */}
            <span className="relative">
              Small playable worlds<br />
              <span className="text-[var(--muted-soft)] transition-colors duration-500 group-hover:text-[var(--foreground)]">
                before bigger dreams.
              </span>
            </span>
          </h1>

          {/* Description / Output Log */}
          <p className="mt-8 max-w-2xl font-mono-accent text-sm sm:text-base leading-relaxed text-[var(--muted)] lowercase">
            {"// "} {site.home.heroDescription || "Membangun semesta fiksi, satu baris kode dan satu aset pada satu waktu."}
          </p>

          {/* Edgy Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            <Button
              href={site.home.primaryCta.href}
              className="group relative overflow-hidden rounded-none border border-[var(--accent)] bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#050505] hover:shadow-[0_0_20px_var(--accent-soft)]"
            >
              {/* Garis Glitch Biru di Atas Tombol saat Hover */}
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
      </section>

      {/* CURRENT GAME SECTION - THE PROJECT DOSSIER */}
      <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24">
        {/* Subtle Background Accent */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(ellipse_at_right,rgba(249,115,22,0.03),transparent_70%)] pointer-events-none" />

        <Container className="relative z-10">

          {/* Dossier Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--surface-border)] pb-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-2 w-2 items-center justify-center bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
                <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                  Active Production File
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                Current_Target
              </h2>
            </div>
            <p className="font-mono-accent text-xs text-[var(--muted)] md:text-right max-w-xs">
              {"// "}Game pertama yang menjadi fokus produksi utama Zennyx saat ini.
            </p>
          </div>

          {featuredGame ? (
            <div className="relative border border-[var(--surface-border)] bg-[var(--surface)] group">

              {/* UI Corner Markers (Dekorasi Blueprint) */}
              <div className="absolute -top-1 -left-1 h-2 w-2 border-t-2 border-l-2 border-[var(--muted-soft)]" />
              <div className="absolute -top-1 -right-1 h-2 w-2 border-t-2 border-r-2 border-[var(--muted-soft)]" />
              <div className="absolute -bottom-1 -left-1 h-2 w-2 border-b-2 border-l-2 border-[var(--muted-soft)]" />
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-[var(--accent)] transition-colors duration-300" />

              <div className="grid lg:grid-cols-[1.3fr_0.7fr] divide-y lg:divide-y-0 lg:divide-x divide-[var(--surface-border)]">

                {/* KIRI: Informasi Utama Proyek */}
                <div className="p-8 sm:p-10">
                  <div className="mb-6 flex flex-wrap items-center gap-4">
                    <span className="border border-[var(--accent)] bg-[var(--accent-soft)] px-3 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                      STATUS: {featuredGame.status}
                    </span>
                    <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                      ID: {featuredGame.slug.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tighter text-[var(--foreground)] mb-6">
                    {featuredGame.title}
                  </h3>

                  <p className="max-w-2xl font-body text-base leading-relaxed text-[var(--muted)] mb-8">
                    {featuredGame.summary}
                  </p>

                  {/* Terminal Style Genre Tags */}
                  <div className="mb-10 flex flex-wrap gap-3 font-mono-accent text-xs text-[var(--muted-soft)]">
                    {featuredGame.genre.map((item) => (
                      <span key={item} className="hover:text-[var(--cyan)] transition-colors cursor-default">
                        [ {item.toUpperCase()} ]
                      </span>
                    ))}
                  </div>

                  <div>
                    <Button
                      href={`/games/${featuredGame.slug}`}
                      className="group relative inline-flex overflow-hidden rounded-none border border-[var(--surface-border)] bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      <span className="absolute bottom-0 left-0 h-0 w-full bg-[var(--accent-soft)] transition-all duration-300 group-hover:h-full -z-10" />
                      Access Core Data <span className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">-&gt;</span>
                    </Button>
                  </div>
                </div>

                {/* KANAN: Prototype Focus / Debug Log */}
                <div className="bg-[#101012] p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:100%_4px]" />

                  <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--cyan)] mb-6 flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <polyline points="4 14 10 14 10 20"></polyline>
                      <polyline points="20 10 14 10 14 4"></polyline>
                      <line x1="14" y1="10" x2="21" y2="3"></line>
                      <line x1="3" y1="21" x2="10" y2="14"></line>
                    </svg>
                    Prototype_Focus_Log
                  </p>

                  <ul className="space-y-4 font-mono-accent text-xs leading-relaxed text-[var(--muted)]">
                    {featuredGame.prototypeScope.slice(0, 5).map((item, index) => (
                      <li key={item} className="flex items-start gap-3 group/item">
                        <span className="text-[var(--surface-border)] group-hover/item:text-[var(--accent)] transition-colors mt-0.5">
                          {">"}
                        </span>
                        <span className="group-hover/item:text-[var(--foreground)] transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-dashed border-[var(--surface-border)]">
                    <p className="font-mono-accent text-[10px] text-[var(--muted-soft)]">
                      {"// "}SYS_NOTE: Scope strictly controlled.
                      <br />Expansion locked until core loop verified.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="border border-dashed border-[var(--surface-border)] p-10 text-center font-mono-accent text-sm text-[var(--muted)]">
              ERR_404: NO_ACTIVE_PRODUCTION_DATA_FOUND
            </div>
          )}
        </Container>
      </section>

      {/* DEVELOPMENT NOTES SECTION - TRANSMISSION LOGS */}
      <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24 overflow-hidden">

        {/* Subtle Background Noise/Texture */}
        <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <Container className="relative z-10">

          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-[var(--surface-border)] pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted-soft)]">
                  {"// "}System_Feed
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                Transmission_Logs
              </h2>
            </div>

            <Button
              href="/devlog"
              variant="ghost"
              className="group rounded-none border border-transparent px-4 py-2 font-mono-accent text-xs uppercase tracking-[0.1em] text-[var(--muted)] transition-all hover:border-[var(--surface-border)] hover:bg-[var(--surface)] hover:text-[var(--accent)]"
            >
              [ View All Archives ]
            </Button>
          </div>

          {/* Logs Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {latestDevlogs.map((devlog, index) => (
              <Link
                key={devlog.slug}
                href={`/devlog/${devlog.slug}`}
                className="group relative flex flex-col justify-between bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--surface)] hover:-translate-y-1"
              >
                {/* Hover Accent Lines */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--accent)]" />
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />

                <div>
                  {/* Meta Data Terminal Style */}
                  <div className="mb-6 flex items-center justify-between border-b border-dashed border-[var(--surface-border)] pb-3 font-mono-accent text-[0.65rem] uppercase tracking-[0.15em] text-[var(--muted)]">
                    <span className="text-[var(--accent)]">
                      CAT_{devlog.category}
                    </span>
                    <span>LOG_00{index + 1}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase leading-snug tracking-tighter text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]">
                    {devlog.title}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-relaxed text-[var(--muted)] line-clamp-3">
                    {devlog.summary}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 flex items-center justify-between pt-4 font-mono-accent text-[10px] text-[var(--muted-soft)]">
                  <span>{formatDate(devlog.date)}</span>
                  <span className="flex items-center gap-1 group-hover:text-[var(--cyan)] transition-colors">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {devlog.readingTime}
                  </span>
                </div>

                {/* Glitch Square bottom right */}
                <div className="absolute bottom-0 right-0 h-2 w-2 bg-[var(--surface-border)] transition-colors duration-300 group-hover:bg-[var(--cyan)]" />
              </Link>
            ))}
          </div>

        </Container>
      </section>

      {/* ABOUT ZENNYX SECTION - SYSTEM MANIFESTO */}
      <section className="relative border-b border-[var(--surface-border)] bg-[#0a0a0b] py-24 overflow-hidden">

        {/* Decorative Cyber Grid Background (Lebih besar dan renggang) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

        <Container className="relative z-10">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            {/* KIRI: Title & Mission (Sticky saat di-scroll di desktop) */}
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 inline-flex items-center gap-3 border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1.5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                <span className="h-1.5 w-1.5 bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)] animate-pulse" />
                Studio_Manifesto
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase leading-[1.05] tracking-tighter text-[var(--foreground)]">
                Small playable worlds <br className="hidden lg:block" />
                <span className="text-[var(--muted-soft)]">before bigger dreams.</span>
              </h2>

              <div className="mt-8 border-l-2 border-[var(--accent)] pl-6">
                <p className="font-body text-base leading-relaxed text-[var(--muted)]">
                  {site.description.medium}
                </p>
              </div>

              {/* Decorative ASCII Box */}
              <div className="mt-12 hidden md:block font-mono-accent text-[10px] text-[var(--surface-border)] leading-tight select-none">
                {`+-----------------------+`} <br />
                {`|  Z E N N Y X          |`} <br />
                {`|  S T U D I O          |`} <br />
                {`|  V 0 . 1 // A C T I V E `} <br />
                {`+-----------------------+`}
              </div>
            </div>

            {/* KANAN: Studio Principles (Core Directives) */}
            <div className="grid gap-4 sm:grid-cols-2">
              {site.studioPrinciples.map((principle, index) => (
                <article
                  key={principle.title}
                  className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-all duration-300 hover:bg-[var(--surface)] hover:border-[var(--muted-soft)]"
                >
                  {/* Hover HUD Corners */}
                  <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[var(--accent)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[var(--cyan)] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-1" />

                  <p className="mb-5 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                    [ DRCT_0{index + 1} ]
                  </p>

                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[var(--foreground)]">
                    {principle.titleId}
                  </h3>

                  <p className="mt-4 font-body text-sm leading-relaxed text-[var(--muted)]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ACTIVE PERSONNEL SECTION - OPERATOR DOSSIERS */}
      <section className="relative border-b border-[var(--surface-border)] bg-[var(--background)] py-24">
        <Container className="relative z-10">

          {/* Section Header ala Terminal */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--surface-border)] pb-6">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
                  {"// "}Personnel_Roster
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                Core_Operators
              </h2>
            </div>
            <p className="max-w-xs font-mono-accent text-xs text-[var(--muted)] md:text-right">
              Tim kecil. Scope terjaga. <br /> Fokus pada eksekusi.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.slug}
                className="group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-colors hover:border-[var(--muted-soft)]"
              >
                {/* Terminal Corner Accents (Muncul saat hover) */}
                <div className="absolute left-0 top-0 h-2 w-2 border-l border-t border-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-[var(--cyan)] opacity-0 transition-opacity group-hover:opacity-100" />

                {/* ID Badge Header */}
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-[var(--surface-border)] pb-5">
                  <div className="flex items-center gap-4">

                    {/* Pseudo-Avatar */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[var(--surface-border)] bg-[var(--surface)] font-display text-xl font-bold text-[var(--muted)] transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                        OP_ID: {member.slug.toUpperCase()}
                      </p>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--cyan)] shadow-[0_0_5px_var(--cyan)]" />
                    <span className="font-mono-accent text-[10px] uppercase tracking-widest text-[var(--cyan)]">
                      Active
                    </span>
                  </div>
                </div>

                {/* Role & Bio */}
                <div className="mb-5 inline-block border border-[var(--surface-border)] bg-[var(--surface)] px-3 py-1 font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                  CLASS: {member.displayRole}
                </div>

                <p className="font-body text-sm leading-relaxed text-[var(--muted)]">
                  <span className="font-mono-accent text-[var(--surface-border)] group-hover:text-[var(--accent)] transition-colors mr-2">{">"}</span>
                  {member.shortBio}
                </p>

              </article>
            ))}
          </div>

        </Container>
      </section>

      {/* CONTACT / FOLLOW SECTION - UPLINK_ENDPOINT */}
      <section className="relative border-t border-[var(--surface-border)] bg-[#0a0a0b] py-24">

        {/* Subtle Scanline Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1)_1px, transparent 1px)', backgroundSize: '100% 8px' }} />

        <Container>
          <div className="flex flex-col items-center text-center">

            {/* Connection Status */}
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

            {/* Terminal Style Actions */}
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

            {/* Footer Terminal Footer Credit */}
            <div className="mt-20 font-mono-accent text-[0.6rem] uppercase tracking-[0.3em] text-[var(--surface-border)]">
              ZNX_OS // SYSTEM_VERSION_0.1_STABLE // 2026
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}