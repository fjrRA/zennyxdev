import type { MetadataRoute } from "next";
import { getAllDevlogs } from "@/lib/devlogs";
import { getPublicGames } from "@/lib/games";
import { getSiteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteConfig();
  const baseUrl = site.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/devlog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const gameRoutes: MetadataRoute.Sitemap = getPublicGames().map((game) => ({
    url: `${baseUrl}/games/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: game.isFeatured ? 0.9 : 0.7,
  }));

  const devlogRoutes: MetadataRoute.Sitemap = getAllDevlogs().map((devlog) => ({
    url: `${baseUrl}/devlog/${devlog.slug}`,
    lastModified: new Date(devlog.date),
    changeFrequency: "monthly",
    priority: devlog.isFeatured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...gameRoutes, ...devlogRoutes];
}