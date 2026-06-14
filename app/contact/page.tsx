// app/contact/page.tsx
import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactLinksSection } from "@/components/contact/ContactLinksSection";
import { ContactNoteSection } from "@/components/contact/ContactNoteSection";
import { getSocialsConfig } from "@/lib/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact and follow Zennyx Interactive Studio for devlogs, progress updates, collaboration, and general inquiries.",
};

export default function ContactPage() {
  const socials = getSocialsConfig();

  return (
    <main>
      <ContactHeroSection socials={socials} />

      <ContactLinksSection socials={socials} />

      <ContactNoteSection socials={socials} />
    </main>
  );
}