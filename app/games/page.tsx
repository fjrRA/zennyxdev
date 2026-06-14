// app/games/page.tsx
import type { Metadata } from "next";
import { ActiveProductionSection } from "@/components/games/ActiveProductionSection";
import { GamesHeroSection } from "@/components/games/GamesHeroSection";
import { ProjectPolicySection } from "@/components/games/ProjectPolicySection";
import { getPublicGames } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: "Games",
  description:
    "Games and active projects from Zennyx Interactive Studio, starting with the first playable-focused indie game project.",
};

export default function GamesPage() {
  const games = getPublicGames();
  const featuredGame = games.find((game) => game.isFeatured);

  return (
    <main>
      <GamesHeroSection />

      <ActiveProductionSection featuredGame={featuredGame} />

      <ProjectPolicySection site={site} />
    </main>
  );
}