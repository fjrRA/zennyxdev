import { AboutManifestoSection } from "@/components/home/AboutManifestoSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CurrentGameSection } from "@/components/home/CurrentGameSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestDevlogsSection } from "@/components/home/LatestDevlogsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { getLatestDevlogs } from "@/lib/devlogs";
import { getFeaturedGame } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";
import { getSocialsConfig } from "@/lib/socials";
import { getActiveTeamMembers } from "@/lib/team";

export default function HomePage() {
  const site = getSiteConfig();
  const featuredGame = getFeaturedGame();
  const latestDevlogs = getLatestDevlogs(3);
  const latestDevlog = latestDevlogs[0];
  const teamMembers = getActiveTeamMembers();
  const socials = getSocialsConfig();

  return (
    <main>
      <HeroSection
        site={site}
        featuredGame={featuredGame}
        latestDevlog={latestDevlog}
      />

      <CurrentGameSection featuredGame={featuredGame} />

      <LatestDevlogsSection latestDevlogs={latestDevlogs} />

      <AboutManifestoSection site={site} />

      <TeamSection teamMembers={teamMembers} />

      <ContactSection socials={socials} />
    </main>
  );
}