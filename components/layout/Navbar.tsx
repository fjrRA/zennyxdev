// components/layout/Navbar.tsx
import { getSiteConfig } from "@/lib/site";
import { NavbarClient } from "./NavbarClient";

export function Navbar() {
  const site = getSiteConfig();

  return <NavbarClient shortName={site.shortName} />;
}