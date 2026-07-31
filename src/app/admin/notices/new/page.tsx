import Link from "next/link";
import { AdminShell } from "@/features/notices/components/AdminShell";
import { NoticeForm } from "@/features/notices/components/NoticeForm";
import { requireAdmin } from "@/lib/adminAuth";

export default async function NewNoticePage() {
  await requireAdmin();

  return (
    <AdminShell>
      <div className="mb-6 flex items-center justify-between gap-3">
        <h2 className="text-xl font-black">새 공지 작성</h2>
        <Link className="admin-button-secondary" href="/admin/notices">
          목록으로
        </Link>
      </div>
      <NoticeForm />
    </AdminShell>
  );
}
