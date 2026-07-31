import type { Metadata } from "next";
import Link from "next/link";
import { formatSeoulDateTime } from "@/features/notices/date";
import { getPublicNotices } from "@/features/notices/queries";
import { noticeTypeLabels } from "@/features/notices/types";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "공지사항",
  description: "아쉬탕가 요가 스튜디오의 최신 공지사항을 확인하세요.",
  alternates: {
    canonical: "/notices"
  },
  openGraph: {
    title: "공지사항",
    description: "아쉬탕가 요가 스튜디오의 최신 공지사항을 확인하세요.",
    url: new URL("/notices", siteUrl).toString(),
    siteName,
    type: "website",
    locale: "ko_KR"
  }
};

export const dynamic = "force-dynamic";

export default async function NoticesPage() {
  const notices = await getPublicNotices("ko");

  return (
    <main className="bg-background px-5 py-16 text-text sm:px-8 lg:px-20">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-black uppercase text-gold">Notice</p>
        <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">공지사항</h1>
        <div className="mt-10 grid gap-4">
          {notices.length ? (
            notices.map((notice) => (
              <Link
                key={notice.id}
                href={`/notices/${notice.slug}`}
                className="rounded-lg border border-line bg-surface p-5 shadow-soft transition hover:border-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded border border-gold/40 px-2 py-1 text-xs font-black text-gold">
                    {noticeTypeLabels[notice.type].ko}
                  </span>
                  {notice.isPinned ? <span className="rounded bg-gold px-2 py-1 text-xs font-black text-background">중요</span> : null}
                </div>
                <h2 className="mt-3 text-xl font-black text-text">{notice.titleKo}</h2>
                <p className="mt-3 text-sm font-bold text-muted">{formatSeoulDateTime(notice.startsAt)}</p>
              </Link>
            ))
          ) : (
            <div className="rounded-lg border border-line bg-surface p-6 text-sm font-bold text-muted">현재 게시 중인 공지가 없습니다.</div>
          )}
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-gold px-4 py-3 text-sm font-black text-gold transition hover:bg-gold hover:text-background"
        >
          홈페이지로 돌아가기
        </Link>
      </section>
    </main>
  );
}
