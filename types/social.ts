// types/socials.ts
import type { CtaLink, OrderedItem } from "./common";

export type PrimaryContact = {
  type: "email";
  label: string;
  value: string;
  href: string;
  description: string;
};

export type ContactMessage = {
  title: string;
  description: string;
  note: string;
};

export type SocialLinkType = "email" | "social" | "platform";

export type SocialLink = OrderedItem & {
  name: string;
  type: SocialLinkType;
  label: string;
  href: string;
  isActive: boolean;
  isPrimary: boolean;
};

export type ContactCta = {
  title: string;
  description: string;
  primaryButton: CtaLink;
  secondaryButton: CtaLink;
};

export type SocialsConfig = {
  primaryContact: PrimaryContact;
  contactMessage: ContactMessage;
  links: SocialLink[];
  cta: ContactCta;
};