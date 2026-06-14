// app/devlog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DevlogContentSection } from "@/components/devlog/DevlogContentSection";
import { DevlogDetailHeroSection } from "@/components/devlog/DevlogDetailHeroSection";
import { getDevlogBySlug, getDevlogSlugs } from "@/lib/devlogs";
import { getSiteConfig } from "@/lib/site";

type DevlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getDevlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: DevlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const devlog = getDevlogBySlug(slug);
  const site = getSiteConfig();

  if (!devlog) {
    return {
      title: "Devlog Not Found",
    };
  }

  return {
    title: devlog.title,
    description: devlog.summary,
    openGraph: {
      title: `${devlog.title} | ${site.siteName}`,
      description: devlog.summary,
      images: [
        {
          url: site.seo.ogImage,
          width: 1200,
          height: 630,
          alt: devlog.title,
        },
      ],
    },
  };
}

export default async function DevlogDetailPage({
  params,
}: DevlogDetailPageProps) {
  const { slug } = await params;
  const devlog = getDevlogBySlug(slug);

  if (!devlog) {
    notFound();
  }

  return (
    <main>
      <DevlogDetailHeroSection devlog={devlog} />

      <DevlogContentSection devlog={devlog} />
    </main>
  );
}