// lib/socials.ts
import type { SocialLink, SocialsConfig } from "@/types";
import { readJsonFile } from "./content";

export function getSocialsConfig(): SocialsConfig {
  return readJsonFile<SocialsConfig>("socials.json");
}

export function getActiveSocialLinks(): SocialLink[] {
  const socials = getSocialsConfig();

  return socials.links
    .filter((link) => link.isActive && link.href.trim() !== "")
    .sort((a, b) => a.order - b.order);
}

export function getPrimarySocialLinks(): SocialLink[] {
  return getActiveSocialLinks().filter((link) => link.isPrimary);
}