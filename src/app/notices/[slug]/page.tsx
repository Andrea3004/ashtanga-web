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
  const notice = await getPublicNoticeBySlug(slug, "ko");

  if (!notice) {
    return { title: "공지" };
  }

  const description = notice.contentKo.replace(/\s+/g, " ").slice(0, 150);
  const canonical = `/notices/${notice.slug}`;

  return {
    title: notice.titleKo,
    description,
    alternates: {
      canonical,
      languages: notice.showOnEn ? { "en-US": `/en/notices/${notice.slug}`, "ko-KR": canonical } : { "ko-KR": canonical }
    },
    openGraph: {
      title: notice.titleKo,
      description,
      url: new URL(canonical, siteUrl).toString(),
      siteName,
      type: "article",
      locale: "ko_KR"
    }
  };
}

export default async function KoreanNoticePage({ params }: NoticePageProps) {
  const { slug } = await params;
  const notice = await getPublicNoticeBySlug(slug, "ko");

  if (!notice) {
    notFound();
  }

  return (
    <main className="bg-background px-5 py-16 text-text sm:px-8 lg:px-20">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-black uppercase text-gold">{noticeTypeLabels[notice.type].ko}</p>
        <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">{notice.titleKo}</h1>
        <p className="mt-4 text-sm font-bold text-muted">게시일 {formatSeoulDateTime(notice.startsAt)}</p>
        <div className="mt-10 whitespace-pre-wrap rounded-lg border border-line bg-surface p-6 text-base leading-8 text-text shadow-soft">
          {notice.contentKo}
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-gold px-4 py-3 text-sm font-black text-gold transition hover:bg-gold hover:text-background"
        >
          홈페이지로 돌아가기
        </Link>
      </article>
    </main>
  );
}
