// components/devlog/DevlogContentSection.tsx
import ReactMarkdown from "react-markdown";
import { Container } from "@/components/ui/Container";
import type { Devlog } from "@/types";

type DevlogContentSectionProps = {
  devlog: Devlog;
};

export function DevlogContentSection({ devlog }: DevlogContentSectionProps) {
  return (
    <section className="bg-[#0a0a0b] py-20">
      <Container>
        <article className="mx-auto max-w-3xl border border-[var(--surface-border)] bg-[#101012] p-6 sm:p-10">
          <div className="mb-8 border-b border-dashed border-[var(--surface-border)] pb-5">
            <p className="font-mono-accent text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)]">
              Transmission_Content
            </p>
          </div>

          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="mt-10 font-display text-3xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-10 font-display text-2xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 font-display text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mt-5 space-y-3 text-[var(--muted)]">
                  {children}
                </ul>
              ),
              li: ({ children }) => (
                <li className="flex gap-3 text-sm leading-7">
                  <span className="mt-0.5 font-mono-accent text-[var(--accent)]">
                    &gt;
                  </span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-[var(--foreground)]">
                  {children}
                </strong>
              ),
            }}
          >
            {devlog.content}
          </ReactMarkdown>
        </article>
      </Container>
    </section>
  );
}