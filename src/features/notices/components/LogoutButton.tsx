"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="admin-button-dark"
      type="button"
      onClick={() => {
        void signOut({ callbackUrl: "/admin/login" });
      }}
    >
      로그아웃
    </button>
  );
}
