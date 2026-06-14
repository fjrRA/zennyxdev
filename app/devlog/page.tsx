// app/devlog/page.tsx
import type { Metadata } from "next";
import { DevlogHeroSection } from "@/components/devlog/DevlogHeroSection";
import { DevlogListSection } from "@/components/devlog/DevlogListSection";
import { getAllDevlogs } from "@/lib/devlogs";

export const metadata: Metadata = {
  title: "Devlog",
  description:
    "Development logs from Zennyx Interactive Studio: progress notes, prototype updates, production decisions, and small proof of real development.",
};

export default function DevlogPage() {
  const devlogs = getAllDevlogs();

  return (
    <main>
      <DevlogHeroSection />

      <DevlogListSection devlogs={devlogs} />
    </main>
  );
}