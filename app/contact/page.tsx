import type { Metadata } from "next";
import { getSocialsConfig } from "@/lib/socials";
import styles from "../concept-industrial/industrial.module.css";

export const metadata: Metadata = { title: "Contact", description: "Contact Zennyx Interactive Studio." };

export default function ContactPage() {
  const socials = getSocialsConfig();
  const activeLinks = socials.links.filter((link) => link.isActive && link.href);
  return (
    <main className={`${styles.page} ${styles.subpage}`}>
      <section className={styles.subHero}>
        <div className={styles.frame}>
          <div className={styles.subHeroMeta}><span>DIRECT LINE / STUDIO</span><span>INDONESIA</span></div>
          <div className={styles.contactGrid}>
            <div><h1 className={styles.subTitle}>Talk to the <em>studio.</em></h1><a href={socials.primaryContact.href} className={styles.contactAddress}>{socials.primaryContact.value}</a></div>
            <p className={styles.subLead}>{socials.contactMessage.note}</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}><span>ACTIVE CHANNELS</span><span>NO AUTOMATED FORMS</span></div>
          <div className={styles.channelGridTwo}>
            {activeLinks.map((link, index) => <a key={link.name} href={link.href} className={styles.channelItem}><span>CHANNEL / 0{index + 1}</span><h3>{link.name} ↗</h3><p>{link.label}</p></a>)}
            <article className={styles.channelItem}><span>RESPONSE</span><h3>Human, when available.</h3><p>Kami tim kecil. Balasan mungkin tidak instan, tetapi datang langsung dari orang yang membangun studionya.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
