import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/site";
import { getActiveTeamMembers } from "@/lib/team";
import styles from "../concept-industrial/industrial.module.css";

export const metadata: Metadata = { title: "Studio", description: "About Zennyx Interactive Studio." };

export default function AboutPage() {
  const site = getSiteConfig();
  const team = getActiveTeamMembers();
  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>STUDIO FILE / ZENNYX</span><span>FOUNDED BY FAJAR + FAIZ</span></div>
          <div className={styles.subHeroGrid}>
            <h1 className={styles.subTitle}>Small studio. <em>Wide imagination.</em></h1>
            <p className={styles.subLead}>{site.description.medium}</p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.frame}>
          <div className={styles.storyGrid}>
            <h2>Why Zennyx exists.</h2>
            <div><p className={styles.bodyCopy}>{site.description.long}</p><p className={styles.bodyCopy}>Nama Zennyx membawa gagasan tentang tetap hadir menghadapi kenyataan, mencampur berbagai bentuk ekspresi, dan terus mengubah ide menjadi karya nyata.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.production}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}><span>WORKING PRINCIPLES</span><span>SCOPE / PLAY / RELEASE</span></div>
          <div className={styles.policyGridFour}>
            {site.studioPrinciples.map((principle, index) => <article key={principle.title} className={styles.policyItem}><span>0{index + 1}</span><h3>{principle.titleId}</h3><p>{principle.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.frame}>
          <div className={styles.sectionHeading}><h2>Two people, shared responsibility.</h2><p>Zennyx masih kecil; keputusan kreatif dan teknis dibangun bersama.</p></div>
          <div className={styles.teamRows}>
            {team.map((member) => <article key={member.slug}><div><h3>{member.name}</h3><span>{member.displayRole}</span></div><p>{member.bio}</p></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
