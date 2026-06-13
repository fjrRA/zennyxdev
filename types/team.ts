// types/team.ts
import type { OrderedItem } from "./common";

export type TeamSocials = {
  website: string;
  github: string;
  linkedin: string;
  instagram: string;
  x: string;
};

export type TeamMember = OrderedItem & {
  name: string;
  slug: string;
  role: string;
  displayRole: string;
  location: string;
  avatar: string;

  shortBio: string;
  bio: string;
  responsibilities: string[];

  socials: TeamSocials;

  isFounder: boolean;
  isActive: boolean;
};