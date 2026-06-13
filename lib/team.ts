// team.ts
import type { TeamMember } from "@/types";
import { readJsonFile } from "./content";

export function getAllTeamMembers(): TeamMember[] {
  const members = readJsonFile<TeamMember[]>("team.json");

  return members.sort((a, b) => a.order - b.order);
}

export function getActiveTeamMembers(): TeamMember[] {
  return getAllTeamMembers().filter((member) => member.isActive);
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return getAllTeamMembers().find((member) => member.slug === slug);
}