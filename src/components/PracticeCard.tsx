import Link from "next/link";

type PracticeCardProps = {
  title: string;
  summary: string;
  meta?: string;
  href?: string;
};

function PracticeCardContent({ title, summary, meta }: Omit<PracticeCardProps, "href">) {
  return (
    <>
      {meta ? <p className="mb-3 text-xs font-black uppercase text-clay">{meta}</p> : null}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em] text-ink">{title}</h3>
        <span
          aria-hidden="true"
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/35 text-sm text-gold transition group-hover:border-gold group-hover:bg-gold group-hover:text-background"
        >
          →
        </span>
      </div>
      <p className="mt-4 text-muted">{summary}</p>
    </>
  );
}

export function PracticeCard({ title, summary, meta, href }: PracticeCardProps) {
  const className =
    "group block min-h-48 rounded-lg border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-gold/80 focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30";

  if (href) {
    return (
      <Link href={href} aria-label={`${title} 상세 페이지로 이동`} className={className}>
        <PracticeCardContent title={title} summary={summary} meta={meta} />
      </Link>
    );
  }

  return (
    <article className={className}>
      <PracticeCardContent title={title} summary={summary} meta={meta} />
    </article>
  );
}
