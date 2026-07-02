import type { Metadata } from "next";
import Link from "next/link";
import { getAllDevlogs } from "@/lib/devlogs";
import styles from "../concept-industrial/industrial.module.css";

export const metadata: Metadata = { title: "Devlog", description: "Development records from Zennyx Interactive Studio." };

function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(parsed);
}

export default function DevlogPage() {
  const devlogs = getAllDevlogs();
  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>OPEN STUDIO RECORD</span><span>{devlogs.length} PUBLIC NOTES</span></div>
          <div className={styles.subHeroGrid}>
            <h1 className={styles.subTitle}>Build <em>notes.</em></h1>
            <p className={styles.subLead}>Progress, keputusan scope, kesalahan, dan hal kecil yang akhirnya bekerja. Devlog adalah bukti proses—bukan feed pengumuman.</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}><span>JOURNAL INDEX</span><span>NEWEST FIRST</span></div>
          <div className={styles.logList}>
            {devlogs.map((note) => (
              <Link key={note.slug} href={`/devlog/${note.slug}`} className={styles.logRow}>
                <div className={styles.logMeta}><span>{note.category}</span><time>{formatDate(note.date)}</time><span>{note.readingTime}</span></div>
                <div><h2 className={styles.logTitle}>{note.title}</h2><p>{note.summary}</p></div>
                <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
