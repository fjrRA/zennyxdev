// app/about/page.tsx
import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutPrinciplesSection } from "@/components/about/AboutPrinciplesSection";
import { AboutStudioSection } from "@/components/about/AboutStudioSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { getSiteConfig } from "@/lib/site";
import { getActiveTeamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Zennyx Interactive Studio, an early-stage indie game studio from Indonesia building small playable worlds before chasing bigger dreams.",
};

export default function AboutPage() {
  const site = getSiteConfig();
  const teamMembers = getActiveTeamMembers();

  return (
    <main>
      <AboutHeroSection site={site} />

      <AboutStudioSection site={site} />

      <AboutPrinciplesSection site={site} />

      <AboutTeamSection teamMembers={teamMembers} />
    </main>
  );
}