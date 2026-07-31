import Link from "next/link";
import { getActiveNotice } from "../queries";
import { noticeTypeLabels, type NoticeLanguage } from "../types";

type NoticeBarProps = {
  language: NoticeLanguage;
};

export async function NoticeBar({ language }: NoticeBarProps) {
  const notice = await getActiveNotice(language);

  if (!notice) {
    return null;
  }

  const title = language === "ko" ? notice.titleKo : notice.titleEn;
  const href = language === "ko" ? `/notices/${notice.slug}` : `/en/notices/${notice.slug}`;
  const label = noticeTypeLabels[notice.type][language];
  const buttonText = language === "ko" ? "자세히 보기" : "View details";

  return (
    <aside className="border-b border-gold/30 bg-[#10252c] px-5 py-3 text-text sm:px-8 lg:px-20" lang={language === "ko" ? "ko" : "en"}>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <span className="mr-2 inline-flex rounded border border-gold/40 px-2 py-1 text-[11px] font-black uppercase text-gold">
            {label}
          </span>
          <span className="align-middle text-sm font-bold leading-6 text-text sm:text-base">{title}</span>
        </div>
        <Link
          href={href}
          className="inline-flex w-fit shrink-0 items-center rounded-md border border-text/40 px-3 py-2 text-xs font-black text-gold transition hover:border-gold hover:bg-gold hover:text-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
        >
          {buttonText}
        </Link>
      </div>
    </aside>
  );
}
