import { parseSeoulDateTimeInput } from "./date";
import { noticeTypes, type NoticeType } from "./types";

export type NoticeFormValues = {
  type: NoticeType;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
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
};

const titleMaxLength = 120;
const contentMaxLength = 5000;
const popupLabelMaxLength = 80;
const popupUrlMaxLength = 2048;
const htmlPattern = /<[^>]*>/;

function readString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function readOptionalString(formData: FormData, key: string) {
  const value = readString(formData, key);
  return value || null;
}

function hasCheckbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function readInteger(formData: FormData, key: string) {
  const parsed = Number.parseInt(readString(formData, key), 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function isSafeUrl(value: string) {
  if (value.startsWith("/")) {
    return !value.startsWith("//");
  }

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function createSlugSource(values: Pick<NoticeFormValues, "titleEn" | "titleKo">) {
  return values.titleEn || values.titleKo || "notice";
}

export function slugify(value: string) {
  const slug = value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return slug || "notice";
}

export function validateNoticeForm(formData: FormData): { values?: NoticeFormValues; errors: string[] } {
  const typeValue = readString(formData, "type") as NoticeType;
  const type = noticeTypes.includes(typeValue) ? typeValue : "GENERAL";
  const startsAtValue = readString(formData, "startsAt");
  const endsAtValue = readString(formData, "endsAt");
  const values = {
    type,
    titleKo: readString(formData, "titleKo"),
    titleEn: readString(formData, "titleEn"),
    contentKo: readString(formData, "contentKo"),
    contentEn: readString(formData, "contentEn"),
    startsAt: parseSeoulDateTimeInput(startsAtValue),
    endsAt: endsAtValue ? parseSeoulDateTimeInput(endsAtValue) : null,
    isPinned: hasCheckbox(formData, "isPinned"),
    isPublished: hasCheckbox(formData, "isPublished"),
    showOnTop: hasCheckbox(formData, "showOnTop"),
    showPopup: hasCheckbox(formData, "showPopup"),
    popupPriority: readInteger(formData, "popupPriority"),
    popupButtonLabelKo: readOptionalString(formData, "popupButtonLabelKo"),
    popupButtonLabelEn: readOptionalString(formData, "popupButtonLabelEn"),
    popupButtonUrl: readOptionalString(formData, "popupButtonUrl"),
    popupImageUrl: readOptionalString(formData, "popupImageUrl"),
    showOnKo: hasCheckbox(formData, "showOnKo"),
    showOnEn: hasCheckbox(formData, "showOnEn")
  };
  const errors: string[] = [];

  if (!values.startsAt) {
    errors.push("게시 시작 날짜와 시간을 입력해 주세요.");
  }

  if (values.endsAt && values.startsAt && values.endsAt <= values.startsAt) {
    errors.push("게시 종료일은 게시 시작일보다 뒤여야 합니다.");
  }

  if (values.showOnKo && (!values.titleKo || !values.contentKo)) {
    errors.push("한국어 노출을 켜려면 한국어 제목과 내용을 입력해 주세요.");
  }

  if (values.showOnEn && (!values.titleEn || !values.contentEn)) {
    errors.push("영어 노출을 켜려면 영어 제목과 내용을 입력해 주세요.");
  }

  if (!values.showOnKo && !values.showOnEn) {
    errors.push("최소 하나 이상의 표시 언어를 선택해 주세요.");
  }

  if (values.popupPriority < 0 || values.popupPriority > 9999) {
    errors.push("팝업 우선순위는 0부터 9999 사이의 숫자로 입력해 주세요.");
  }

  if (values.popupButtonUrl && !isSafeUrl(values.popupButtonUrl)) {
    errors.push("팝업 버튼 URL은 /로 시작하는 내부 경로 또는 http(s) URL만 사용할 수 있습니다.");
  }

  if (values.popupImageUrl && !isSafeUrl(values.popupImageUrl)) {
    errors.push("팝업 이미지 URL은 /로 시작하는 내부 경로 또는 http(s) URL만 사용할 수 있습니다.");
  }

  for (const [label, value, max] of [
    ["한국어 제목", values.titleKo, titleMaxLength],
    ["영어 제목", values.titleEn, titleMaxLength],
    ["한국어 내용", values.contentKo, contentMaxLength],
    ["영어 내용", values.contentEn, contentMaxLength],
    ["팝업 한국어 버튼 문구", values.popupButtonLabelKo ?? "", popupLabelMaxLength],
    ["팝업 영어 버튼 문구", values.popupButtonLabelEn ?? "", popupLabelMaxLength],
    ["팝업 버튼 URL", values.popupButtonUrl ?? "", popupUrlMaxLength],
    ["팝업 이미지 URL", values.popupImageUrl ?? "", popupUrlMaxLength]
  ] as const) {
    if (value.length > max) {
      errors.push(`${label}은 ${max}자 이내로 입력해 주세요.`);
    }

    if (htmlPattern.test(value)) {
      errors.push(`${label}에는 HTML 태그를 사용할 수 없습니다.`);
    }
  }

  if (errors.length || !values.startsAt) {
    return { errors };
  }

  return {
    values: {
      ...values,
      startsAt: values.startsAt
    },
    errors: []
  };
}
