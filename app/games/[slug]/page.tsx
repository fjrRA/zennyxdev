// app/games/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GameCoreSection } from "@/components/games/GameCoreSection";
import { GameDetailHeroSection } from "@/components/games/GameDetailHeroSection";
import { GameScopeSection } from "@/components/games/GameScopeSection";
import { RelatedDevlogsSection } from "@/components/games/RelatedDevlogsSection";
import { getDevlogsByGameSlug } from "@/lib/devlogs";
import { getGameBySlug, getGameSlugs } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";

type GameDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getGameSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: GameDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const site = getSiteConfig();

  if (!game) {
    return {
      title: "Game Not Found",
    };
  }

  return {
    title: game.seo.title,
    description: game.seo.description,
    openGraph: {
      title: `${game.seo.title} | ${site.siteName}`,
      description: game.seo.description,
      images: [
        {
          url: game.seo.ogImage || site.seo.ogImage,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
    },
  };
}

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedDevlogs = getDevlogsByGameSlug(game.slug);

  return (
    <main className="bg-[var(--background)]">
      <GameDetailHeroSection game={game} />

      <GameCoreSection game={game} />

      <GameScopeSection game={game} />

      <RelatedDevlogsSection relatedDevlogs={relatedDevlogs} />
    </main>
  );
}