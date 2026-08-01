import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import type { PracticeDetailPageData } from "@/data/practicePages";
import { siteName, siteUrl } from "@/lib/seo";

type PracticeDetailPageProps = {
  page: PracticeDetailPageData;
};

function DiagramCards({ page, className = "" }: PracticeDetailPageProps & { className?: string }) {
  const isThreeStepDiagram = page.diagramItems.length === 3;

  return (
    <div className={`rounded-[1.25rem] border border-gold/25 bg-charcoal p-6 text-text shadow-soft ${className}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{page.diagramTitle}</p>
      <div className={`mt-5 grid gap-3 ${isThreeStepDiagram ? "md:grid-cols-3" : ""}`}>
        {page.diagramItems.map((item, index) => (
          <div key={item} className="flex items-center gap-3 rounded-lg border border-gold/20 bg-surface px-4 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-black text-background">
              {index + 1}
            </span>
            <span className="text-base font-semibold tracking-[-0.02em] text-text">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RepresentativeImageFrame({ page }: PracticeDetailPageProps) {
  if (!page.representativeImage) {
    return null;
  }

  return (
    <section className="my-10 sm:my-12">
      <div className="mx-auto flex w-fit max-w-full justify-center rounded-2xl border border-gold/25 bg-[#0d2430] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:p-5">
        <Image
          src={page.representativeImage.src}
          alt={page.representativeImage.alt}
          width={page.representativeImage.width}
          height={page.representativeImage.height}
          sizes="(min-width: 1024px) 760px, calc(100vw - 2.5rem)"
          className="mx-auto h-auto w-auto max-w-full rounded-md object-contain md:max-h-[72vh] lg:max-h-[760px]"
          priority={false}
        />
      </div>
    </section>
  );
}

export function PracticeDetailPage({ page }: PracticeDetailPageProps) {
  const canonical = new URL(page.path, siteUrl).toString();
  const usesScheduleHero = page.slug === "mysore";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: page.metadata.title,
        description: page.metadata.description,
        isPartOf: {
          "@id": `${siteUrl}/#website`
        },
        inLanguage: "ko-KR"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Practice",
            item: `${siteUrl}/practice`
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.title,
            item: canonical
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background text-text">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-5 pt-8 sm:px-8 lg:px-20 lg:pt-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-soft">
          <Image
            src={page.heroImage}
            alt={page.heroImageAlt}
            fill
            priority
            sizes="(min-width: 1024px) calc(100vw - 10rem), (min-width: 640px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
            className="object-cover"
            style={{ objectPosition: page.slug === "meditation" ? "18% 50%" : "50% 45%" }}
          />
          <div
            className={
              usesScheduleHero
                ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,32,0.86),rgba(8,26,32,0.58)_54%,rgba(8,26,32,0.32)),linear-gradient(0deg,rgba(8,26,32,0.54),rgba(8,26,32,0.1)_52%)]"
                : "absolute inset-0 bg-[linear-gradient(90deg,rgba(8,26,32,0.88),rgba(8,26,32,0.6)_56%,rgba(8,26,32,0.34)),linear-gradient(0deg,rgba(8,26,32,0.58),rgba(8,26,32,0.12)_52%)]"
            }
          />
          <div
            className={`relative z-10 flex ${
              usesScheduleHero ? "min-h-[320px]" : "min-h-[340px]"
            } items-end px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12`}
          >
            <div className="max-w-3xl [text-shadow:0_2px_10px_rgba(8,26,32,0.38)]">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-gold/90">{page.eyebrow}</p>
              <h1 className="text-[2rem] font-semibold leading-[1.22] tracking-[-0.02em] sm:text-4xl lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.025em]">
                {page.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-text/85 sm:text-lg">{page.lead}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">Overview</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] text-text md:text-3xl">
              핵심 설명
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{page.description}</p>
          </div>
        </div>

        {page.representativeImage ? <RepresentativeImageFrame page={page} /> : <DiagramCards page={page} className="mx-auto mt-10 max-w-4xl" />}

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {page.features.map((feature) => (
            <article key={feature.title} className="rounded-[1.25rem] border border-line bg-surface p-6">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-gold">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="rounded-[1.25rem] border border-line bg-surface p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">Class Flow</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-text">수업 진행 방식</h2>
            <ol className="mt-6 grid gap-3">
              {page.flow.map((item, index) => (
                <li key={item} className="flex gap-3 border-t border-line/70 pt-3 first:border-t-0 first:pt-0">
                  <span className="text-sm font-black text-gold">0{index + 1}</span>
                  <span className="text-sm leading-6 text-text/85">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-[1.25rem] border border-line bg-surface p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">Recommended For</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-text">적합한 대상</h2>
            <ul className="mt-6 grid gap-3">
              {page.audience.map((item) => (
                <li key={item} className="rounded-lg border border-line/70 bg-background/70 px-4 py-3 text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mx-auto mt-12 max-w-2xl border-y border-line/70 py-8 text-center">
          <p className="text-base font-medium leading-7 tracking-[-0.02em] text-muted sm:text-lg">
            {page.finalMessage.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </p>
        </section>

        <section className="mt-12 rounded-[1.25rem] border border-gold/25 bg-charcoal p-6 text-text sm:p-8">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">{siteName}</p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em] text-text md:text-3xl">
            수련을 시작할 준비가 되셨나요?
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {page.ctas.map((cta) => (
              <CTAButton key={cta.label} href={cta.href} variant={cta.variant ?? "primary"}>
                {cta.label}
              </CTAButton>
            ))}
          </div>
          <Link
            href="/"
            prefetch
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
          >
            ← 홈으로 돌아가기
          </Link>
        </section>
      </section>
    </main>
  );
}
