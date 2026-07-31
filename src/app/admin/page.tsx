import Link from "next/link";
import { AdminShell } from "@/features/notices/components/AdminShell";
import { formatSeoulDateTime } from "@/features/notices/date";
import { getNoticeDashboardStats } from "@/features/notices/queries";
import { noticeStatusLabels, type NoticeStatus } from "@/features/notices/types";
import { requireAdmin } from "@/lib/adminAuth";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const stats = await getNoticeDashboardStats();
  const cards: { label: string; status: NoticeStatus }[] = [
    { label: "게시 중", status: "published" },
    { label: "예약", status: "scheduled" },
    { label: "종료", status: "expired" },
    { label: "비공개", status: "draft" }
  ];

  return (
    <AdminShell>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <section key={card.status} className="admin-panel">
            <p className="text-sm font-black text-[#6b7774]">{card.label}</p>
            <strong className="mt-3 block text-4xl font-black">{stats.counts[card.status]}</strong>
          </section>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="admin-button-primary min-h-12" href="/admin/notices/new">
          새 공지 작성
        </Link>
        <Link className="admin-button-secondary min-h-12" href="/admin/notices">
          공지 관리
        </Link>
      </div>

      <section className="admin-panel mt-8">
        <h2 className="text-xl font-black">최근 수정한 공지</h2>
        <div className="mt-5 grid gap-3">
          {stats.recent.length ? (
            stats.recent.map((notice) => {
              const status = notice.status;

              return (
                <Link
                  key={notice.id}
                  href={`/admin/notices/${notice.id}/edit`}
                  className="flex flex-col gap-1 rounded-md border border-[#d8cab5] bg-[#f9f5ee] p-4 transition hover:border-[#b8873a] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-black">{notice.titleKo || notice.titleEn}</span>
                  <span className="text-sm font-bold text-[#5e6a67]">
                    {noticeStatusLabels[status]} · {formatSeoulDateTime(notice.updatedAt)}
                  </span>
                </Link>
              );
            })
          ) : (
            <p className="text-sm font-semibold text-[#5e6a67]">아직 등록된 공지가 없습니다.</p>
          )}
        </div>
      </section>
    </AdminShell>
  );
}
