// lib/games.ts
import type { Game } from "@/types";
import { readJsonFile } from "./content";

export function getAllGames(): Game[] {
  const games = readJsonFile<Game[]>("games.json");

  return games.sort((a, b) => a.order - b.order);
}

export function getPublicGames(): Game[] {
  return getAllGames().filter((game) => game.isPublic);
}

export function getFeaturedGame(): Game | undefined {
  return getPublicGames().find((game) => game.isFeatured);
}

export function getGameBySlug(slug: string): Game | undefined {
  return getPublicGames().find((game) => game.slug === slug);
}

export function getGameSlugs(): string[] {
  return getPublicGames().map((game) => game.slug);
}