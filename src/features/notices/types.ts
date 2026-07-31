export type NoticeStatus = "draft" | "scheduled" | "published" | "expired";
export type NoticeLanguage = "ko" | "en";
export type NoticeType = "GENERAL" | "MOON_DAY" | "HOLIDAY" | "SUMMER_BREAK" | "SCHEDULE_CHANGE" | "WORKSHOP";
export type NoticeRecord = {
  id: string;
  slug: string;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
  type: NoticeType;
  startsAt: Date;
  endsAt: Date | null;
  isPinned: boolean;
  isPublished: boolean;
  showOnTop: boolean;
  showPopup: boolean;
  popupPriority: number;
  popupButtonLabelKo: string | null;
  popupButtonLabelEn: string | null;
  popupButtonUrl: string | null;
  popupImageUrl: string | null;
  showOnKo: boolean;
  showOnEn: boolean;
  createdAt: Date;
  updatedAt: Date;
};
export type NoticeWithStatus = NoticeRecord & { status: NoticeStatus };

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
