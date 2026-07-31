import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminShell } from "@/features/notices/components/AdminShell";
import { NoticeForm } from "@/features/notices/components/NoticeForm";
import { getAdminNotice } from "@/features/notices/queries";
import { requireAdmin } from "@/lib/adminAuth";

type EditNoticePageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditNoticePage({ params }: EditNoticePageProps) {
  await requireAdmin();
  const { id } = await params;
  const notice = await getAdminNotice(id);

  if (!notice) {
    notFound();
  }

  return (
    <AdminShell>
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-xl font-black">공지 수정</h2>
        <Link className="admin-button-secondary" href="/admin/notices">
          목록으로
        </Link>
      </div>
      <NoticeForm notice={notice} />
    </AdminShell>
  );
}
