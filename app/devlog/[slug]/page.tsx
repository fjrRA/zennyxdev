import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getDevlogBySlug, getDevlogSlugs } from "@/lib/devlogs";
import { getSiteConfig } from "@/lib/site";
import styles from "../../concept-industrial/industrial.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return getDevlogSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getDevlogBySlug(slug);
  const site = getSiteConfig();
  if (!note) return { title: "Devlog Not Found" };
  return { title: note.title, description: note.summary, openGraph: { title: `${note.title} | ${site.siteName}`, description: note.summary } };
}

function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(parsed);
}

export default async function DevlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = getDevlogBySlug(slug);
  if (!note) notFound();
  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>{note.category} / DEVELOPMENT RECORD</span><span>{formatDate(note.date)} · {note.readingTime}</span></div>
          <Link href="/devlog" className={styles.backLink}>← JOURNAL INDEX</Link>
          <div className={`${styles.subHeroGrid} mt-12`}>
            <h1 className={styles.articleTitle}>{note.title}</h1>
            <p className={styles.subLead}>{note.summary}</p>
          </div>
        </div>
      </section>
      <section className={styles.proseWrap}>
        <div className={styles.frame}>
          <article className={styles.prose}><ReactMarkdown>{note.content}</ReactMarkdown></article>
        </div>
      </section>
    </main>
  );
}
