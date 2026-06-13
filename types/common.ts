// types/common.ts
export type LanguageCode = "id" | "en";

export type CtaLink = {
  label: string;
  href: string;
};

export type SeoBase = {
  title: string;
  description: string;
  ogImage: string;
};

export type OrderedItem = {
  order: number;
};

export type PublishableItem = {
  isPublished: boolean;
};