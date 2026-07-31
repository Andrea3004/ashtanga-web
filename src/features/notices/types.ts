import type { Notice, NoticeType } from "@prisma/client";

export type NoticeStatus = "draft" | "scheduled" | "published" | "expired";
export type NoticeLanguage = "ko" | "en";
export type NoticeWithStatus = Notice & { status: NoticeStatus };

export const noticeTypes: NoticeType[] = [
  "GENERAL",
  "MOON_DAY",
  "HOLIDAY",
  "SUMMER_BREAK",
  "SCHEDULE_CHANGE",
  "WORKSHOP"
];

export const noticeTypeLabels: Record<NoticeType, { ko: string; en: string }> = {
  GENERAL: { ko: "일반 공지", en: "Notice" },
  MOON_DAY: { ko: "문데이", en: "Moon Day" },
  HOLIDAY: { ko: "휴무 안내", en: "Closure" },
  SUMMER_BREAK: { ko: "여름휴가", en: "Summer Break" },
  SCHEDULE_CHANGE: { ko: "시간 변경", en: "Schedule Change" },
  WORKSHOP: { ko: "워크숍", en: "Workshop" }
};

export const noticeStatusLabels: Record<NoticeStatus, string> = {
  draft: "비공개",
  scheduled: "예약",
  published: "게시 중",
  expired: "종료"
};
