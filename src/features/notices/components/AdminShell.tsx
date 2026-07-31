import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f4f0e8] px-5 py-8 text-[#10252c] sm:px-8 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#d8cab5] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-[#9a6a2f]">Admin</p>
            <h1 className="mt-1 text-2xl font-black">공지 관리</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link className="admin-button-secondary" href="/admin">
              대시보드
            </Link>
            <Link className="admin-button-secondary" href="/admin/notices">
              공지 관리
            </Link>
            <LogoutButton />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
