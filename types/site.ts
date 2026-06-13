// types/site.ts
import type { CtaLink, LanguageCode } from "./common";

export type SiteTagline = {
  primary: string;
  secondary: string;
  short: string;
};

export type SitePositioning = {
  en: string;
  id: string;
};

export type SiteDescription = {
  short: string;
  medium: string;
  long: string;
};

export type SiteCoreMessage = {
  en: string;
  id: string;
};

export type StudioPrinciple = {
  title: string;
  titleId: string;
  description: string;
};

export type HomeContent = {
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export type AboutContent = {
  pageTitle: string;
  pageDescription: string;
};

export type FooterContent = {
  text: string;
  copyright: string;
};

export type SiteSeo = {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  keywords: string[];
  ogImage: string;
};

export type SiteConfig = {
  siteName: string;
  shortName: string;
  type: string;
  stage: string;
  country: string;
  language: LanguageCode;
  siteUrl: string;

  tagline: SiteTagline;
  positioning: SitePositioning;
  description: SiteDescription;
  coreMessage: SiteCoreMessage;

  studioPrinciples: StudioPrinciple[];
  toneOfVoice: string[];

  home: HomeContent;
  about: AboutContent;
  footer: FooterContent;
  seo: SiteSeo;
};