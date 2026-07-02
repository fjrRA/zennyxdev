import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getSiteConfig } from "@/lib/site";
import { getActiveSocialLinks } from "@/lib/socials";

const footerLinks = [
  { label: "Games", href: "/games" },
  { label: "Devlog", href: "/devlog" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const site = getSiteConfig();
  const socials = getActiveSocialLinks();

  return (
    <footer className="border-t-[8px] border-[#e0a72e] bg-[#141816] text-[#ecece6]">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 border-b border-white/25 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-2xl font-bold tracking-[-0.04em]">{site.siteName}</p>
            <p className="mb-0 max-w-xl font-serif text-base leading-relaxed text-[#aeb4af]">{site.footer.text}</p>
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-2 lg:col-start-9">
            <p className="mb-4 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#e0a72e]">Explore</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-[#aeb4af] hover:text-white">{link.label}</Link></li>)}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="mb-4 font-mono text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#e0a72e]">Find us</p>
            <ul className="space-y-2">
              {socials.map((link) => <li key={link.name}><a href={link.href} className="break-all text-sm text-[#aeb4af] hover:text-white">{link.label}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[#7d8681] sm:flex-row sm:justify-between">
          <span>{site.footer.copyright}</span><span>Playable work / Indonesia / Studio build 00.1</span>
        </div>
      </Container>
    </footer>
  );
}
