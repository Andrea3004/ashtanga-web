type PracticeCardProps = {
  title: string;
  summary: string;
  meta?: string;
};

export function PracticeCard({ title, summary, meta }: PracticeCardProps) {
  return (
    <article className="min-h-48 rounded-lg border border-line bg-white p-6">
      {meta ? <p className="mb-3 text-xs font-black uppercase text-clay">{meta}</p> : null}
      <h3 className="text-xl font-black leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-muted">{summary}</p>
    </article>
  );
}
