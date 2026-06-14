// components/home/InfoRow.tsx
type InfoRowProps = {
  label: string;
  value: string;
};

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-t border-[var(--surface-border)] py-3 text-sm">
      <dt className="font-mono-accent text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted-soft)]">
        {label}
      </dt>
      <dd className="text-[var(--foreground)]">{value}</dd>
    </div>
  );
}