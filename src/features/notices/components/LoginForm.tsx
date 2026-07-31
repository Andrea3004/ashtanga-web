"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="grid gap-5 rounded-lg border border-[#d8cab5] bg-white p-6 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
          const result = await signIn("credentials", {
            email: String(formData.get("email") ?? ""),
            password: String(formData.get("password") ?? ""),
            redirect: false
          });

          if (result?.ok) {
            router.push(searchParams.get("callbackUrl") ?? "/admin");
            router.refresh();
            return;
          }

          setError("이메일 또는 비밀번호를 확인해 주세요.");
        });
      }}
    >
      <label className="grid gap-2 text-sm font-bold">
        이메일
        <input className="admin-input" name="email" type="email" autoComplete="username" required />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        비밀번호
        <input className="admin-input" name="password" type="password" autoComplete="current-password" required />
      </label>
      {error ? <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-bold text-red-700">{error}</p> : null}
      <button className="admin-button-primary min-h-12" type="submit" disabled={isPending}>
        {isPending ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
