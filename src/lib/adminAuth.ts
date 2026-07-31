import "server-only";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./auth";

function hasAuthSecret() {
  return Boolean(process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET);
}

export async function isAdminAuthenticated() {
  if (!hasAuthSecret()) {
    return false;
  }

  try {
    const session = await getServerSession(authOptions);
    return session?.user?.role === "admin";
  } catch (error) {
    console.error("Failed to read admin session.", error);
    return false;
  }
}

export async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}
