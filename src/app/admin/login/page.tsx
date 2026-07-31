import { redirect } from "next/navigation";
import { LoginForm } from "@/features/notices/components/LoginForm";
import { isAdminAuthenticated } from "@/lib/adminAuth";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen bg-[#f4f0e8] px-5 py-16 text-[#10252c] sm:px-8">
      <div className="mx-auto max-w-md">
        <p className="text-xs font-black uppercase tracking-wide text-[#9a6a2f]">Admin</p>
        <h1 className="mt-2 text-3xl font-black">관리자 로그인</h1>
        <p className="mt-3 text-sm font-semibold text-[#5e6a67]">공지 관리를 위해 로그인해 주세요.</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
