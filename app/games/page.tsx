import type { Metadata } from "next";
import Link from "next/link";
import { getPublicGames } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import styles from "../concept-industrial/industrial.module.css";

export const metadata: Metadata = {
  title: "Games",
  description: "Playable projects from Zennyx Interactive Studio.",
};

export default function GamesPage() {
  const game = getPublicGames().find((item) => item.isFeatured);
  const site = getSiteConfig();

  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>PROJECT DIRECTORY / PUBLIC</span><span>ONE ACTIVE BUILD</span></div>
          <div className={styles.subHeroGrid}>
            <h1 className={styles.subTitle}>Playable <em>work.</em></h1>
            <p className={styles.subLead}>Kami memulai dari satu game yang cukup kecil untuk diselesaikan, cukup jelas untuk dimainkan, dan cukup jujur untuk dibagikan prosesnya.</p>
          </div>
        </div>
      </section>

      {game && (
        <section className={styles.contentSection}>
          <div className={styles.frame}>
            <div className={styles.sectionHeading}><h2>Current production.</h2><p>Satu proyek aktif lebih penting daripada banyak dunia yang berhenti sebagai konsep.</p></div>
            <article className={styles.featureProject}>
              <div className={styles.featureTop}><span>ACTIVE / PROTOTYPE</span><span>{game.developmentStage.current}</span></div>
              <div className={styles.featureBody}>
                <div className={styles.featureName}>
                  <span>Untitled</span><h2>ANDARA</h2><p>{game.summary}</p>
                </div>
                <div className={styles.featureMeta}>
                  <dl>
                    <div><dt>Format</dt><dd>{game.genre[0]}</dd></div>
                    <div><dt>World</dt><dd>{game.setting.name}</dd></div>
                    <div><dt>Platform</dt><dd>{game.platforms.join(" / ")}</dd></div>
                    <div><dt>Next output</dt><dd>{game.developmentStage.nextMilestone}</dd></div>
                  </dl>
                  <Link href={`/games/${game.slug}`} className={styles.featureLink}>OPEN PROJECT <span>↗</span></Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className={styles.production}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}><span>PROJECT POLICY</span><span>CREATIVE RANGE / CONTROLLED SCOPE</span></div>
          <div className={styles.sectionHeading}><h2>How projects enter production.</h2><p>{site.positioning.id}</p></div>
          <div className={styles.policyGrid}>
            {site.studioPrinciples.slice(0, 3).map((principle, index) => (
              <article key={principle.title} className={styles.policyItem}><span>RULE / 0{index + 1}</span><h3>{principle.titleId}</h3><p>{principle.description}</p></article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
