import type { Metadata } from "next";
import Link from "next/link";
import { getLatestDevlogs } from "@/lib/devlogs";
import { getFeaturedGame } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import { getSocialsConfig } from "@/lib/socials";
import { getActiveTeamMembers } from "@/lib/team";
import styles from "./urban-swiss.module.css";

export const metadata: Metadata = {
  title: "Urban Swiss Concept",
  robots: { index: false, follow: false },
};

function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(parsed);
}

export default function UrbanSwissPage() {
  const site = getSiteConfig();
  const game = getFeaturedGame();
  const notes = getLatestDevlogs(3);
  const team = getActiveTeamMembers();
  const socials = getSocialsConfig();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.routeBar}>
          <span>Z/01</span><span>Independent game studio</span><span>Indonesia</span><span>2026—ongoing</span>
        </div>
        <div className={styles.heroStage}>
          <div className={styles.giantIndex}>01</div>
          <div className={styles.heroCopy}>
            <p>Small team / playable ideas</p>
            <h1>Games for people who still like <em>strange little worlds.</em></h1>
            <div className={styles.heroActions}>
              <Link href={game ? `/games/${game.slug}` : "/games"}>Current game ↗</Link>
              <Link href="/devlog">Build notes →</Link>
            </div>
          </div>

          <Link href={game ? `/games/${game.slug}` : "/games"} className={styles.heroPoster}>
            <span className={styles.posterRoute}>CURRENT / 01</span>
            <div><small>Untitled</small><strong>ANDARA</strong><p>beat &apos;em up</p></div>
            <footer><span>{game?.developmentStage.current ?? "Prototype"}</span><span>PC</span></footer>
          </Link>
        </div>
        <div className={styles.movingLine}>PLAYABLE FIRST · LOCAL TEXTURE · CONTROLLED SCOPE · PROGRESS OVER PROMISES ·</div>
      </section>

      {game && (
        <section className={styles.currentProject}>
          <div className={styles.frame}>
            <header className={styles.sectionIntro}>
              <span>02 / CURRENT PROJECT</span>
              <h2>One city.<br />One build.<br /><em>Start here.</em></h2>
              <p>{game.summary}</p>
            </header>
            <div className={styles.projectComposition}>
              <div className={styles.projectNumber}>A—01</div>
              <div className={styles.projectPlate}>
                <p>{game.setting.name}</p>
                <h3>Street conflict,<br />local details,<br />playable first.</h3>
                <Link href={`/games/${game.slug}`}>Open project file →</Link>
              </div>
              <dl className={styles.projectFacts}>
                <div><dt>Stage</dt><dd>{game.developmentStage.current}</dd></div>
                <div><dt>Next</dt><dd>{game.developmentStage.nextMilestone}</dd></div>
                <div><dt>Format</dt><dd>{game.genre[0]}</dd></div>
                <div><dt>Release</dt><dd>{game.targetRelease}</dd></div>
              </dl>
            </div>
          </div>
        </section>
      )}

      <section className={styles.journal}>
        <div className={styles.frame}>
          <header className={styles.journalHeading}>
            <span>03 / DEVELOPMENT JOURNAL</span>
            <h2>Notes from the messy middle.</h2>
            <Link href="/devlog">All notes ↗</Link>
          </header>
          <div className={styles.posterWall}>
            {notes.map((note, index) => (
              <Link key={note.slug} href={`/devlog/${note.slug}`} className={styles.notePoster}>
                <span>LOG—0{index + 1}</span>
                <time>{formatDate(note.date)}</time>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
                <b>READ →</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.manifestoIndex}>04</div>
        <div className={styles.frame}>
          <p>Zennyx / studio rule</p>
          <h2>Make the game.<br />Show the work.<br /><em>Keep the world strange.</em></h2>
          <div className={styles.manifestoFooter}>
            <p>{site.description.medium}</p>
            <Link href="/about">About the studio →</Link>
          </div>
        </div>
      </section>

      <section className={styles.crew}>
        <div className={styles.frame}>
          <header><span>05 / TWO-PERSON STUDIO</span><h2>Fajar <i>+</i> Faiz</h2></header>
          <div className={styles.crewRows}>
            {team.map((member, index) => (
              <article key={member.slug}><span>0{index + 1}</span><h3>{member.name}</h3><b>{member.displayRole}</b><p>{member.shortBio}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.follow}>
        <div className={styles.frame}>
          <span>06 / NEXT</span><Link href="/devlog">Follow the next build →</Link><a href={socials.primaryContact.href}>{socials.primaryContact.value}</a>
        </div>
      </section>
    </main>
  );
}
