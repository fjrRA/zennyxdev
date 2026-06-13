// types/devlog.ts
import type { PublishableItem } from "./common";

export type DevlogCategory =
  | "Studio"
  | "Development"
  | "Production"
  | "Design"
  | "Prototype"
  | "Milestone"
  | "Reflection"
  | "Technical";

export type DevlogFrontmatter = PublishableItem & {
  title: string;
  slug: string;
  date: string;
  category: DevlogCategory;
  summary: string;
  relatedGame: string;
  isFeatured: boolean;
};

export type Devlog = DevlogFrontmatter & {
  content: string;
  readingTime?: string;
};