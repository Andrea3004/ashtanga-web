import Link from "next/link";
import { AdminShell } from "@/features/notices/components/AdminShell";
import { DeleteNoticeButton } from "@/features/notices/components/DeleteNoticeButton";
import { formatSeoulDateTime } from "@/features/notices/date";
import { getAdminNotices, getNoticeStatus } from "@/features/notices/queries";
import { noticeStatusLabels, noticeTypeLabels, type NoticeStatus } from "@/features/notices/types";
import { requireAdmin } from "@/lib/adminAuth";

type AdminNoticesPageProps = {
  searchParams: Promise<{ status?: string; saved?: string }>;
};

const filters: { label: string; value?: NoticeStatus }[] = [
  { label: "전체" },
  { label: "게시 중", value: "published" },
  { label: "예약", value: "scheduled" },
  { label: "종료", value: "expired" },
  { label: "비공개", value: "draft" }
];

const savedMessages: Record<string, string> = {
  created: "공지를 등록했습니다.",
  updated: "공지를 수정했습니다.",
  deleted: "공지를 삭제했습니다."
};

function parseNoticeStatus(value: string | undefined): NoticeStatus | undefined {
  return filters.find((filter) => filter.value === value)?.value;
}

export default async function AdminNoticesPage({ searchParams }: AdminNoticesPageProps) {
  await requireAdmin();
  const params = await searchParams;
  const status = parseNoticeStatus(params.status);
  const notices = await getAdminNotices(status);

  return (
    <AdminShell>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = filter.value === status || (!filter.value && !status);
            return (
              <Link
                key={filter.label}
                href={filter.value ? `/admin/notices?status=${filter.value}` : "/admin/notices"}
                className={active ? "admin-button-primary" : "admin-button-secondary"}
              >
                {filter.label}
              </Link>
            );
          })}
        </div>
        <Link className="admin-button-primary min-h-12" href="/admin/notices/new">
          새 공지 작성
        </Link>
      </div>

      {params.saved && savedMessages[params.saved] ? (
        <p className="mb-5 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-black text-green-700">
          {savedMessages[params.saved]}
        </p>
      ) : null}

      <div className="grid gap-4">
        {notices.length ? (
          notices.map((notice) => {
            const status: NoticeStatus = getNoticeStatus(notice);

            return (
              <article key={notice.id} className="admin-panel">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded border border-[#d8cab5] px-2 py-1 text-xs font-black text-[#9a6a2f]">
                        {noticeTypeLabels[notice.type].ko}
                      </span>
                      <span className="rounded border border-[#d8cab5] px-2 py-1 text-xs font-black">
                        {noticeStatusLabels[status]}
                      </span>
                      {notice.isPinned ? <span className="rounded bg-[#10252c] px-2 py-1 text-xs font-black text-white">중요</span> : null}
                      {notice.showOnTop ? (
                        <span className="rounded bg-[#b8873a] px-2 py-1 text-xs font-black text-[#081a20]">상단 노출</span>
                      ) : null}
                    </div>
                    {notice.showPopup ? (
                      <span className="mt-2 inline-flex rounded bg-[#10252c] px-2 py-1 text-xs font-black text-white">팝업 노출</span>
                    ) : null}
                    <h2 className="mt-3 text-xl font-black">{notice.titleKo || notice.titleEn}</h2>
                    <dl className="mt-4 grid gap-2 text-sm font-semibold text-[#5e6a67] sm:grid-cols-2 lg:grid-cols-4">
                      <div>
                        <dt className="font-black text-[#10252c]">노출 언어</dt>
                        <dd>{[notice.showOnKo ? "한국어" : "", notice.showOnEn ? "영문" : ""].filter(Boolean).join(", ") || "-"}</dd>
                      </div>
                      <div>
                        <dt className="font-black text-[#10252c]">시작일</dt>
                        <dd>{formatSeoulDateTime(notice.startsAt)}</dd>
                      </div>
                      <div>
                        <dt className="font-black text-[#10252c]">종료일</dt>
                        <dd>{formatSeoulDateTime(notice.endsAt)}</dd>
                      </div>
                      <div>
                        <dt className="font-black text-[#10252c]">수정일</dt>
                        <dd>{formatSeoulDateTime(notice.updatedAt)}</dd>
                      </div>
                    </dl>
                  </div>
                  <div className="flex gap-2 lg:justify-end">
                    <Link className="admin-button-secondary" href={`/admin/notices/${notice.id}/edit`}>
                      수정
                    </Link>
                    <DeleteNoticeButton id={notice.id} title={notice.titleKo || notice.titleEn} />
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <section className="admin-panel">
            <p className="text-sm font-semibold text-[#5e6a67]">조건에 맞는 공지가 없습니다.</p>
          </section>
        )}
      </div>
    </AdminShell>
  );
}
