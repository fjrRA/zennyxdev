"use client";

import logoIcon from "@/app/icon.png";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Games", href: "/games" },
  { label: "Devlog", href: "/devlog" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

type NavbarClientProps = { shortName: string };

export function NavbarClient({ shortName }: NavbarClientProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header sticky top-0 z-[999] border-b-[3px] border-[#141816] bg-[#ecece6]/95 text-[#141816] backdrop-blur-md">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-6">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3" aria-label={`${shortName} homepage`}>
            <Image src={logoIcon} alt="" width={34} height={34} priority className="size-[34px] border-[0.25px] rounded-lg border-[#e0e0e0] object-contain" />
            <span>
              <strong className="block text-base leading-none tracking-[-0.035em]">{shortName}</strong>
              <span className="mt-1 block font-mono text-[0.55rem] uppercase tracking-[0.14em] text-[#59615d]">Interactive game studio</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.13em] text-[#6f7873]">Indonesia / Build 00.1</span>
            <nav aria-label="Primary navigation" className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active(link.href) ? "page" : undefined}
                  className={`border-b-[3px] py-1 text-xs font-bold transition-colors ${active(link.href) ? "border-[#e0a72e] text-[#141816]" : "border-transparent text-[#59615d] hover:border-[#141816] hover:text-[#141816]"}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" className="font-mono text-xs font-bold uppercase tracking-[0.1em] md:hidden">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-navigation" className="site-mobile-navigation absolute left-0 top-full w-full border-b-[3px] border-[#141816] bg-[#ecece6] md:hidden">
          <Container>
            <nav aria-label="Mobile navigation" className="py-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`flex min-h-16 items-center justify-between border-b border-[#8f9792] text-xl font-bold ${active(link.href) ? "text-[#365a6a]" : ""}`}>
                  <span>{link.label}</span><span>↗</span>
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
