"use client";

import { useActionState, useRef, useState } from "react";
import { createNoticeAction, updateNoticeAction } from "../actions";
import { toSeoulDateTimeInput } from "../date";
import { noticeTypeLabels, noticeTypes, type NoticeLanguage, type NoticeRecord, type NoticeType } from "../types";
import { NoticePopup } from "./NoticePopup";

type NoticeFormProps = {
  notice?: NoticeRecord;
};

const defaultStart = toSeoulDateTimeInput(new Date());

function readFormString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function readFormBoolean(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function readFormInteger(formData: FormData, key: string) {
  const parsed = Number.parseInt(readFormString(formData, key), 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function readNoticeType(formData: FormData): NoticeType {
  const value = readFormString(formData, "type") as NoticeType;
  return noticeTypes.includes(value) ? value : "GENERAL";
}

export function NoticeForm({ notice }: NoticeFormProps) {
  const action = notice ? updateNoticeAction.bind(null, notice.id) : createNoticeAction;
  const [state, formAction, isPending] = useActionState(action, undefined);
  const [showPopup, setShowPopup] = useState(notice?.showPopup ?? false);
  const [preview, setPreview] = useState<{ language: NoticeLanguage; notice: NoticeRecord } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function openPreview(language: NoticeLanguage) {
    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);
    const now = new Date();

    setPreview({
      language,
      notice: {
        id: notice?.id ?? "preview",
        slug: notice?.slug ?? "preview",
        type: readNoticeType(formData),
        titleKo: readFormString(formData, "titleKo") || "한국어 팝업 제목",
        titleEn: readFormString(formData, "titleEn") || "English popup title",
        contentKo: readFormString(formData, "contentKo") || "한국어 팝업 내용이 여기에 표시됩니다.",
        contentEn: readFormString(formData, "contentEn") || "English popup content will appear here.",
        startsAt: now,
        endsAt: null,
        isPinned: readFormBoolean(formData, "isPinned"),
        isPublished: readFormBoolean(formData, "isPublished"),
        showOnTop: readFormBoolean(formData, "showOnTop"),
        showPopup: readFormBoolean(formData, "showPopup"),
        popupPriority: readFormInteger(formData, "popupPriority"),
        popupButtonLabelKo: readFormString(formData, "popupButtonLabelKo") || null,
        popupButtonLabelEn: readFormString(formData, "popupButtonLabelEn") || null,
        popupButtonUrl: readFormString(formData, "popupButtonUrl") || null,
        popupImageUrl: readFormString(formData, "popupImageUrl") || null,
        showOnKo: readFormBoolean(formData, "showOnKo"),
        showOnEn: readFormBoolean(formData, "showOnEn"),
        createdAt: notice?.createdAt ?? now,
        updatedAt: now
      }
    });
  }

  return (
    <>
      <form ref={formRef} action={formAction} className="grid gap-6">
        {state?.errors?.length ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">
            {state.errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}

        <section className="admin-panel grid gap-5">
          <label className="grid gap-2 text-sm font-bold">
            공지 유형
            <select className="admin-input" name="type" defaultValue={notice?.type ?? "GENERAL"}>
              {noticeTypes.map((type) => (
                <option key={type} value={type}>
                  {noticeTypeLabels[type].ko} / {noticeTypeLabels[type].en}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-5 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              한국어 제목
              <input className="admin-input" name="titleKo" maxLength={120} defaultValue={notice?.titleKo ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              영어 제목
              <input className="admin-input" name="titleEn" maxLength={120} defaultValue={notice?.titleEn ?? ""} />
            </label>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              한국어 내용
              <textarea className="admin-input min-h-56 resize-y" name="contentKo" maxLength={5000} defaultValue={notice?.contentKo ?? ""} />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              영어 내용
              <textarea className="admin-input min-h-56 resize-y" name="contentEn" maxLength={5000} defaultValue={notice?.contentEn ?? ""} />
            </label>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              게시 시작
              <input
                className="admin-input"
                name="startsAt"
                type="datetime-local"
                required
                defaultValue={notice ? toSeoulDateTimeInput(notice.startsAt) : defaultStart}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              게시 종료
              <input className="admin-input" name="endsAt" type="datetime-local" defaultValue={toSeoulDateTimeInput(notice?.endsAt)} />
            </label>
          </div>
        </section>

        <section className="admin-panel grid gap-4">
          <h3 className="text-lg font-black text-[#10252c]">노출 설정</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <label className="admin-checkbox">
              <input name="showOnTop" type="checkbox" defaultChecked={notice?.showOnTop ?? true} />
              상단 공지바 노출
            </label>
            <label className="admin-checkbox">
              <input name="showPopup" type="checkbox" checked={showPopup} onChange={(event) => setShowPopup(event.target.checked)} />
              팝업 노출
            </label>
            <label className="admin-checkbox">
              <input name="showOnKo" type="checkbox" defaultChecked={notice?.showOnKo ?? true} />
              한국어 노출
            </label>
            <label className="admin-checkbox">
              <input name="showOnEn" type="checkbox" defaultChecked={notice?.showOnEn ?? false} />
              영어 노출
            </label>
            <label className="admin-checkbox">
              <input name="isPublished" type="checkbox" defaultChecked={notice?.isPublished ?? true} />
              공개 여부
            </label>
            <label className="admin-checkbox">
              <input name="isPinned" type="checkbox" defaultChecked={notice?.isPinned ?? false} />
              중요 공지
            </label>
          </div>
        </section>

        <section className={`admin-panel grid gap-5 ${showPopup ? "" : "opacity-60"}`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-black text-[#10252c]">팝업 설정</h3>
              <p className="mt-1 text-sm font-semibold text-[#5e6a67]">
                팝업 노출이 꺼져 있으면 아래 설정은 저장되지만 홈페이지에는 표시되지 않습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button type="button" className="admin-button-secondary" onClick={() => openPreview("ko")}>
                한국어 Preview
              </button>
              <button type="button" className="admin-button-secondary" onClick={() => openPreview("en")}>
                English Preview
              </button>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              팝업 우선순위
              <input
                className="admin-input"
                name="popupPriority"
                type="number"
                min={0}
                max={9999}
                step={1}
                defaultValue={notice?.popupPriority ?? 0}
                readOnly={!showPopup}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              버튼 URL
              <input
                className="admin-input"
                name="popupButtonUrl"
                maxLength={2048}
                placeholder="/notices/example 또는 https://..."
                defaultValue={notice?.popupButtonUrl ?? ""}
                readOnly={!showPopup}
              />
            </label>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold">
              한국어 버튼 문구
              <input
                className="admin-input"
                name="popupButtonLabelKo"
                maxLength={80}
                placeholder="기본값: 자세히 보기"
                defaultValue={notice?.popupButtonLabelKo ?? ""}
                readOnly={!showPopup}
              />
            </label>
            <label className="grid gap-2 text-sm font-bold">
              영어 버튼 문구
              <input
                className="admin-input"
                name="popupButtonLabelEn"
                maxLength={80}
                placeholder="Default: Learn More"
                defaultValue={notice?.popupButtonLabelEn ?? ""}
                readOnly={!showPopup}
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-bold">
            팝업 이미지 URL
            <input
              className="admin-input"
              name="popupImageUrl"
              maxLength={2048}
              placeholder="/images/example.jpg 또는 https://..."
              defaultValue={notice?.popupImageUrl ?? ""}
              readOnly={!showPopup}
            />
          </label>
        </section>

        <div className="flex flex-wrap gap-3">
          <button className="admin-button-primary min-h-12" type="submit" disabled={isPending}>
            {isPending ? "저장 중..." : "저장"}
          </button>
          <a className="admin-button-secondary min-h-12" href="/admin/notices">
            목록으로
          </a>
        </div>
      </form>

      {preview ? (
        <NoticePopup
          key={`${preview.language}-${preview.notice.updatedAt.toISOString()}`}
          language={preview.language}
          notice={preview.notice}
          previewMode
          onPreviewClose={() => setPreview(null)}
        />
      ) : null}
    </>
  );
}
