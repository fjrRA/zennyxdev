// components/contact/ContactLinksSection.tsx
import { Container } from "@/components/ui/Container";
import type { SocialLink, SocialsConfig } from "@/types";

type ContactLinksSectionProps = {
  socials: SocialsConfig;
};

function getLinkStatus(link: SocialLink) {
  if (link.isActive && link.href.trim() !== "") {
    return "ACTIVE";
  }

  return "LOCKED";
}

export function ContactLinksSection({ socials }: ContactLinksSectionProps) {
  const sortedLinks = [...socials.links].sort((a, b) => a.order - b.order);

  return (
    <section className="border-b border-[var(--surface-border)] bg-[#0a0a0b] py-24">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[var(--surface-border)] pb-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              {"// "}Contact Channels
            </p>

            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
              Official_Links
            </h2>
          </div>

          <p className="max-w-sm font-mono-accent text-[10px] uppercase leading-relaxed tracking-widest text-[var(--muted)] md:text-right">
            Beberapa channel masih dikunci sampai akun resmi Zennyx siap
            digunakan.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {sortedLinks.map((link) => {
            const isActive = link.isActive && link.href.trim() !== "";

            const cardClassName =
              "group relative border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-8 transition-colors hover:border-[var(--muted-soft)]";

            const content = (
              <>
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-dashed border-[var(--surface-border)] pb-4">
                  <div>
                    <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.2em] text-[var(--accent)]">
                      {link.type}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                      {link.name}
                    </h3>
                  </div>

                  <span
                    className={`font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] ${isActive ? "text-[var(--cyan)]" : "text-[var(--muted-soft)]"
                      }`}
                  >
                    {getLinkStatus(link)}
                  </span>
                </div>

                <p className="font-mono-accent text-xs text-[var(--muted)]">
                  {isActive ? link.label : "Channel belum tersedia"}
                </p>

                <div className="mt-6 font-mono-accent text-[10px] uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                  {isActive ? "Open channel ->" : "Awaiting official setup"}
                </div>
              </>
            );

            if (isActive) {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cardClassName}
                  target={link.type === "email" ? undefined : "_blank"}
                  rel={link.type === "email" ? undefined : "noreferrer"}
                >
                  {content}
                </a>
              );
            }

            return (
              <article key={link.name} className={cardClassName}>
                {content}
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}