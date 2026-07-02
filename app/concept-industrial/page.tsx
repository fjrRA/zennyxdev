import type { Metadata } from "next";
import Link from "next/link";
import { getLatestDevlogs } from "@/lib/devlogs";
import { getFeaturedGame } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import { getSocialsConfig } from "@/lib/socials";
import { getActiveTeamMembers } from "@/lib/team";
import styles from "./industrial.module.css";

export const metadata: Metadata = {
  title: "Modern Industrial Concept",
  description: "Private visual direction experiment for Zennyx Interactive Studio.",
  robots: { index: false, follow: false },
};

function formatDate(date: string) {
  const parsed = date.includes("T") ? new Date(date) : new Date(`${date}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export default function IndustrialConceptPage() {
  const site = getSiteConfig();
  const game = getFeaturedGame();
  const devlogs = getLatestDevlogs(3);
  const team = getActiveTeamMembers();
  const socials = getSocialsConfig();

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.frame}>
          <div className={styles.utilityBar}>
            <span>ZNYX / PLAYABLE WORKS</span>
            <span>INDEPENDENT · INDONESIA</span>
            <span>STUDIO BUILD 00.1</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Creative production, kept human</p>
              <h1>
                A game studio built around <em>playable work.</em>
              </h1>
              <p className={styles.heroIntro}>{site.home.heroDescription}</p>

              <div className={styles.actions}>
                <Link href={game ? `/games/${game.slug}` : "/games"} className={styles.primaryAction}>
                  Current project <span>↗</span>
                </Link>
                <Link href="/devlog" className={styles.textAction}>Development record →</Link>
              </div>
            </div>

            <div className={styles.projectAssembly}>
              <div className={styles.assemblyLabel}>ACTIVE PROJECT / 01</div>
              <Link href={game ? `/games/${game.slug}` : "/games"} className={styles.projectWindow}>
                <div className={styles.cornerA} />
                <div className={styles.cornerB} />
                <div className={styles.projectTopline}>
                  <span>Prototype in development</span>
                  <span>PC · Side-scrolling action</span>
                </div>
                <div className={styles.projectTitle}>
                  <span>Untitled</span>
                  <strong>ANDARA</strong>
                  <small>Beat &apos;em Up</small>
                </div>
                <div className={styles.mediaStatus}>
                  <span>MEDIA BAY</span>
                  <p>First gameplay capture will replace this production plate.</p>
                </div>
                <div className={styles.projectBottomline}>
                  <span>{game?.developmentStage.current ?? "Early prototype"}</span>
                  <span>OPEN PROJECT →</span>
                </div>
              </Link>
            </div>
          </div>

          {game && (
            <dl className={styles.projectRail}>
              <div><dt>Project</dt><dd>{game.title}</dd></div>
              <div><dt>World</dt><dd>{game.setting.name}</dd></div>
              <div><dt>Target</dt><dd>{game.targetBuild}</dd></div>
              <div><dt>Next</dt><dd>{game.developmentStage.nextMilestone}</dd></div>
            </dl>
          )}
        </div>
      </section>

      {game && (
        <section className={styles.production}>
          <div className={styles.frame}>
            <div className={styles.sectionMarker}>
              <span>PRODUCTION LOGIC</span>
              <span>01 — CURRENT BUILD</span>
            </div>

            <div className={styles.productionGrid}>
              <div className={styles.productionStatement}>
                <h2>Structure for the work. Space for the strange.</h2>
                <p>{game.description}</p>
              </div>

              <div className={styles.focusBoard}>
                <header>
                  <span>PLAYTEST PRIORITIES</span>
                  <strong>{game.developmentStage.current}</strong>
                </header>
                <ol>
                  {game.gameplayFocus.points.slice(0, 6).map((item, index) => (
                    <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
                  ))}
                </ol>
                <footer>
                  Next output: <strong>{game.developmentStage.nextMilestone}</strong>
                </footer>
              </div>
            </div>

            <div className={styles.creativeRail}>
              <article><span>PLAY</span><h3>Feel first</h3><p>Movement and combat must work before the world grows around them.</p></article>
              <article><span>WORLD</span><h3>Local texture</h3><p>Andara takes its character from the density and details of urban Indonesia.</p></article>
              <article><span>RELEASE</span><h3>Finish honestly</h3><p>A small public build matters more than a large promise that never ships.</p></article>
            </div>
          </div>
        </section>
      )}

      <section className={styles.journal}>
        <div className={styles.frame}>
          <div className={styles.journalHeading}>
            <div>
              <p className={styles.eyebrow}>Open studio record</p>
              <h2>Work notes from inside the build.</h2>
            </div>
            <Link href="/devlog">ALL DEVLOGS ↗</Link>
          </div>

          <div className={styles.noteTrack}>
            {devlogs.map((note, index) => (
              <Link href={`/devlog/${note.slug}`} key={note.slug} className={styles.notePanel}>
                <div className={styles.noteIndex}>LOG / {String(index + 1).padStart(2, "0")}</div>
                <div className={styles.noteMeta}><span>{note.category}</span><time>{formatDate(note.date)}</time></div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
                <span className={styles.noteArrow}>READ NOTE →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.frame}>
          <div className={styles.manifestoStamp}>Zennyx / working principle</div>
          <div className={styles.manifestoGrid}>
            <h2>Not a factory.<br />A framework for making <em>strange little worlds.</em></h2>
            <div>
              <p>{site.description.medium}</p>
              <Link href="/about">Studio story →</Link>
            </div>
          </div>

          <div className={styles.principleStrip}>
            {site.studioPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{principle.titleId}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.credits}>
        <div className={styles.frame}>
          <div className={styles.sectionMarker}>
            <span>STUDIO CREW</span>
            <span>TWO PEOPLE / SHARED RESPONSIBILITY</span>
          </div>
          <div className={styles.creditGrid}>
            <h2>Built together.</h2>
            <div className={styles.creditList}>
              {team.map((member) => (
                <article key={member.slug}>
                  <div><strong>{member.name}</strong><span>{member.displayRole}</span></div>
                  <p>{member.shortBio}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactBand}>
        <div className={styles.frame}>
          <p>FOLLOW THE NEXT BUILD</p>
          <Link href="/devlog">Development journal <span>→</span></Link>
          <a href={socials.primaryContact.href}>{socials.primaryContact.value}</a>
        </div>
      </section>
    </main>
  );
}
