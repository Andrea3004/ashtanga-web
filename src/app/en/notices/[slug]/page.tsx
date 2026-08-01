import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatSeoulDateTime } from "@/features/notices/date";
import { getPublicNoticeBySlug } from "@/features/notices/queries";
import { noticeTypeLabels } from "@/features/notices/types";
import { siteName, siteUrl } from "@/lib/seo";

type NoticePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: NoticePageProps): Promise<Metadata> {
  const { slug } = await params;
  const notice = await getPublicNoticeBySlug(slug, "en");

  if (!notice) {
    return { title: "Notice" };
  }

  const description = notice.contentEn.replace(/\s+/g, " ").slice(0, 150);
  const canonical = `/en/notices/${notice.slug}`;

  return {
    title: notice.titleEn,
    description,
    alternates: {
      canonical,
      languages: notice.showOnKo ? { "ko-KR": `/notices/${notice.slug}`, "en-US": canonical } : { "en-US": canonical }
    },
    openGraph: {
      title: notice.titleEn,
      description,
      url: new URL(canonical, siteUrl).toString(),
      siteName,
      type: "article",
      locale: "en_US"
    }
  };
}

export default async function EnglishNoticePage({ params }: NoticePageProps) {
  const { slug } = await params;
  const notice = await getPublicNoticeBySlug(slug, "en");

  if (!notice) {
    notFound();
  }

  return (
    <main className="bg-background px-5 py-16 text-text sm:px-8 lg:px-20" lang="en">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase text-gold">{noticeTypeLabels[notice.type].en}</p>
        <h1 className="mt-4 text-[2rem] font-semibold leading-[1.22] tracking-[-0.02em] sm:text-4xl lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.025em]">
          {notice.titleEn}
        </h1>
        <p className="mt-4 text-sm font-bold text-muted">Published {formatSeoulDateTime(notice.startsAt)}</p>
        <div className="mt-10 whitespace-pre-wrap rounded-lg border border-line bg-surface p-6 text-base leading-8 text-text shadow-soft">
          {notice.contentEn}
        </div>
        <Link
          href="/en"
          className="mt-8 inline-flex rounded-md border border-gold px-4 py-3 text-sm font-black text-gold transition hover:bg-gold hover:text-background"
        >
          Back to homepage
        </Link>
      </article>
    </main>
  );
}
