"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { NoticeLanguage, NoticeRecord } from "../types";

type NoticePopupProps = {
  language: NoticeLanguage;
  notice: NoticeRecord | null;
  previewMode?: boolean;
  onPreviewClose?: () => void;
};

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isInternalUrl(url: string) {
  return url.startsWith("/") && !url.startsWith("//");
}

function isSafeHttpUrl(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function isSafeActionUrl(url: string | null) {
  return Boolean(url && (isInternalUrl(url) || isSafeHttpUrl(url)));
}

export function NoticePopup({ language, notice, previewMode = false, onPreviewClose }: NoticePopupProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(previewMode);
  const [imageFailed, setImageFailed] = useState(false);

  const storageKey = notice ? `notice-popup-dismissed-${notice.id}` : "";
  const title = language === "ko" ? notice?.titleKo : notice?.titleEn;
  const content = language === "ko" ? notice?.contentKo : notice?.contentEn;
  const buttonLabel =
    language === "ko"
      ? notice?.popupButtonLabelKo || "자세히 보기"
      : notice?.popupButtonLabelEn || "Learn More";
  const buttonUrl = notice?.popupButtonUrl ?? null;
  const imageUrl = notice?.popupImageUrl ?? null;

  const closePopup = useCallback(() => {
    setIsVisible(false);
    onPreviewClose?.();
    previouslyFocusedRef.current?.focus();
  }, [onPreviewClose]);

  useEffect(() => {
    if (previewMode) {
      return;
    }

    if (!notice || !title || !content) {
      return;
    }

    const dismissedDate = window.localStorage.getItem(storageKey);

    if (dismissedDate !== getLocalDateKey()) {
      previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [content, notice, previewMode, storageKey, title]);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopup, isVisible]);

  if (!notice || !title || !content || !isVisible) {
    return null;
  }

  function dismissToday() {
    if (previewMode) {
      closePopup();
      return;
    }

    window.localStorage.setItem(storageKey, getLocalDateKey());
    closePopup();
  }

  function renderActionButton() {
    if (!isSafeActionUrl(buttonUrl)) {
      return null;
    }

    if (buttonUrl && isInternalUrl(buttonUrl)) {
      return (
        <Link
          href={buttonUrl}
          onClick={closePopup}
          className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold bg-gold px-5 py-3 text-sm font-black text-background transition hover:border-text hover:bg-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
        >
          {buttonLabel}
        </Link>
      );
    }

    return (
      <a
        href={buttonUrl ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={closePopup}
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold bg-gold px-5 py-3 text-sm font-black text-background transition hover:border-text hover:bg-text focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
      >
        {buttonLabel}
      </a>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6" role="presentation">
      <button
        type="button"
        aria-label={language === "ko" ? "팝업 닫기" : "Close popup"}
        className="absolute inset-0 cursor-default bg-[#081a20]/75 backdrop-blur-sm"
        onClick={closePopup}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[calc(100svh-48px)] w-full max-w-2xl flex-col overflow-hidden rounded-lg border border-gold/40 bg-[#10252c] text-text shadow-2xl"
        lang={language === "ko" ? "ko" : "en"}
      >
        {imageUrl && !imageFailed ? (
          <div className="max-h-64 overflow-hidden border-b border-gold/25 bg-[#081a20]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt=""
              className="h-full max-h-64 w-full object-cover"
              loading="eager"
              onError={() => setImageFailed(true)}
            />
          </div>
        ) : null}
        <div className="min-h-0 overflow-y-auto px-5 py-6 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <h2 id={titleId} className="text-2xl font-black leading-tight text-gold sm:text-3xl">
              {title}
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label={language === "ko" ? "팝업 닫기" : "Close popup"}
              onClick={closePopup}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-text/25 text-xl font-black text-text transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              ×
            </button>
          </div>
          <div className="mt-5 whitespace-pre-wrap text-sm leading-7 text-text/90 sm:text-base">{content}</div>
        </div>
        <div className="flex flex-col gap-3 border-t border-gold/25 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex flex-wrap gap-2">{renderActionButton()}</div>
          <button
            type="button"
            onClick={dismissToday}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-text/30 px-4 py-2 text-sm font-black text-text transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
          >
            {language === "ko" ? "오늘 하루 보지 않기" : "Do not show again today"}
          </button>
        </div>
      </section>
    </div>
  );
}
