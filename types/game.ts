// types/game.ts
import type { OrderedItem, SeoBase } from "./common";

export type GameSetting = {
  name: string;
  description: string;
  inspiration: string[];
};

export type GameDevelopmentStage = {
  current: string;
  nextMilestone: string;
  notes: string;
};

export type GameGameplayFocus = {
  title: string;
  description: string;
  points: string[];
};

export type GameGalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type GameMedia = {
  coverImage: string;
  thumbnail: string;
  heroImage: string;
  gallery: GameGalleryItem[];
};

export type GameLinks = {
  devlog: string;
  itch: string;
  steam: string;
  trailer: string;
  demo: string;
};

export type Game = OrderedItem & {
  title: string;
  slug: string;
  status: string;
  productionType: string;

  isFeatured: boolean;
  isPublic: boolean;

  summary: string;
  shortDescription: string;
  description: string;

  genre: string[];
  theme: string[];

  setting: GameSetting;
  platforms: string[];

  targetBuild: string;
  targetRelease: string;

  developmentStage: GameDevelopmentStage;
  gameplayFocus: GameGameplayFocus;

  prototypeScope: string[];
  deferredFeatures: string[];

  media: GameMedia;
  links: GameLinks;

  relatedDevlogs: string[];

  seo: SeoBase;
};