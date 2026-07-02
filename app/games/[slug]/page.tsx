import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDevlogsByGameSlug } from "@/lib/devlogs";
import { getGameBySlug, getGameSlugs } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import styles from "../../concept-industrial/industrial.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getGameSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const site = getSiteConfig();
  if (!game) return { title: "Game Not Found" };
  return { title: game.seo.title, description: game.seo.description, openGraph: { title: `${game.seo.title} | ${site.siteName}`, description: game.seo.description } };
}

export default async function GameDetailPage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();
  const related = getDevlogsByGameSlug(game.slug);

  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>PROJECT FILE / 01</span><span>{game.status} · {game.targetBuild}</span></div>
          <Link href="/games" className={styles.backLink}>← PROJECT DIRECTORY</Link>
          <article className={`${styles.featureProject} mt-10`}>
            <div className={styles.featureTop}><span>{game.productionType}</span><span>{game.developmentStage.current}</span></div>
            <div className={styles.featureBody}>
              <div className={styles.featureName}><span>Untitled</span><h1>ANDARA</h1><p>{game.summary}</p></div>
              <div className={styles.featureMeta}>
                <dl>
                  <div><dt>Genre</dt><dd>{game.genre.join(" / ")}</dd></div>
                  <div><dt>World</dt><dd>{game.setting.name}</dd></div>
                  <div><dt>Platform</dt><dd>{game.platforms.join(" / ")}</dd></div>
                  <div><dt>Release</dt><dd>{game.targetRelease}</dd></div>
                </dl>
                <Link href="/devlog" className={styles.featureLink}>OPEN DEVLOG <span>↗</span></Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.frame}>
          <div className={styles.detailGrid}>
            <div><p className={styles.eyebrow}>Game direction</p><h2>Street conflict inside a fictional Indonesian city.</h2><p className={styles.bodyCopy}>{game.description}</p></div>
            <aside className={styles.dataPanel}>
              <header>WORLD / {game.setting.name.toUpperCase()}</header>
              <div><p className={styles.bodyCopy}>{game.setting.description}</p><dl>{game.setting.inspiration.map((item, index) => <div key={item} className={styles.dataRow}><dt>REFERENCE / {String(index + 1).padStart(2, "0")}</dt><dd>{item}</dd></div>)}</dl></div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.production}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}><span>SCOPE CONTROL</span><span>PROTOTYPE BOUNDARY</span></div>
          <div className={styles.sectionHeading}><h2>Build what matters now.</h2><p>Fitur besar disimpan sampai fondasi permainan benar-benar bekerja.</p></div>
          <div className={styles.scopeColumns}>
            <div><h3>Inside prototype</h3><ol className={styles.scopeList}>{game.prototypeScope.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div>
            <div><h3>Deferred for later</h3><ol className={styles.scopeList}>{game.deferredFeatures.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={styles.contentSection}>
          <div className={styles.frame}>
            <div className={styles.sectionHeading}><h2>Notes attached to this build.</h2><p>Keputusan, pembelajaran, dan perubahan yang membentuk proyek.</p></div>
            <div className={styles.relatedGridTwo}>{related.map((note, index) => <Link key={note.slug} href={`/devlog/${note.slug}`} className={styles.policyItem}><span>LOG / 0{index + 1}</span><h3>{note.title}</h3><p>{note.summary}</p></Link>)}</div>
          </div>
        </section>
      )}
    </main>
  );
}
