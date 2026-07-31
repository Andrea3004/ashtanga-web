"use client";

import type { Notice } from "@prisma/client";
import { useActionState } from "react";
import { createNoticeAction, updateNoticeAction } from "../actions";
import { toSeoulDateTimeInput } from "../date";
import { noticeTypeLabels, noticeTypes } from "../types";

type NoticeFormProps = {
  notice?: Notice;
};

const defaultStart = toSeoulDateTimeInput(new Date());

export function NoticeForm({ notice }: NoticeFormProps) {
  const action = notice ? updateNoticeAction.bind(null, notice.id) : createNoticeAction;
  const [state, formAction, isPending] = useActionState(action, undefined);

  return (
    <form action={formAction} className="grid gap-6">
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
            한글 제목
            <input className="admin-input" name="titleKo" maxLength={120} defaultValue={notice?.titleKo ?? ""} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            영문 제목
            <input className="admin-input" name="titleEn" maxLength={120} defaultValue={notice?.titleEn ?? ""} />
          </label>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">
            한글 내용
            <textarea className="admin-input min-h-56 resize-y" name="contentKo" maxLength={5000} defaultValue={notice?.contentKo ?? ""} />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            영문 내용
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <label className="admin-checkbox">
            <input name="isPinned" type="checkbox" defaultChecked={notice?.isPinned ?? false} />
            중요 공지
          </label>
          <label className="admin-checkbox">
            <input name="isPublished" type="checkbox" defaultChecked={notice?.isPublished ?? true} />
            공개
          </label>
          <label className="admin-checkbox">
            <input name="showOnTop" type="checkbox" defaultChecked={notice?.showOnTop ?? true} />
            상단 공지 바
          </label>
          <label className="admin-checkbox">
            <input name="showOnKo" type="checkbox" defaultChecked={notice?.showOnKo ?? true} />
            한국어 노출
          </label>
          <label className="admin-checkbox">
            <input name="showOnEn" type="checkbox" defaultChecked={notice?.showOnEn ?? false} />
            영문 노출
          </label>
        </div>
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
  );
}
