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
  showOnKo: boolean;
  showOnEn: boolean;
};

const titleMaxLength = 120;
const contentMaxLength = 5000;
const htmlPattern = /<[^>]*>/;

function readString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function hasCheckbox(formData: FormData, key: string) {
  return formData.get(key) === "on";
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
    errors.push("한국어 노출을 켜려면 한글 제목과 내용을 입력해 주세요.");
  }

  if (values.showOnEn && (!values.titleEn || !values.contentEn)) {
    errors.push("영문 노출을 켜려면 영문 제목과 내용을 입력해 주세요.");
  }

  if (!values.showOnKo && !values.showOnEn) {
    errors.push("최소 하나 이상의 표시 언어를 선택해 주세요.");
  }

  for (const [label, value, max] of [
    ["한글 제목", values.titleKo, titleMaxLength],
    ["영문 제목", values.titleEn, titleMaxLength],
    ["한글 내용", values.contentKo, contentMaxLength],
    ["영문 내용", values.contentEn, contentMaxLength]
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
