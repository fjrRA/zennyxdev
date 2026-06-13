// lib/content.ts
import type { SiteConfig } from "@/types";
import { readJsonFile } from "./content";

export function getSiteConfig(): SiteConfig {
  return readJsonFile<SiteConfig>("site.json");
}