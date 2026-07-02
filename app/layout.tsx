// app/layout.tsx

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { getSiteConfig } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const site = getSiteConfig();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),

  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },

  description: site.seo.defaultDescription,
  keywords: site.seo.keywords,

  openGraph: {
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    url: site.siteUrl,
    siteName: site.siteName,
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: site.siteName,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    images: [site.seo.ogImage],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#E5E5DF",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={site.language} data-scroll-behavior="smooth">
      <body className={`${archivo.variable} ${sourceSerif.variable}`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
