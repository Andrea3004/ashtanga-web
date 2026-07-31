"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/adminAuth";
import { getPrisma } from "@/lib/prisma";
import { createSlugSource, slugify, validateNoticeForm } from "./validation";

function hasPrismaErrorCode(error: unknown, code: string) {
  return typeof error === "object" && error !== null && "code" in error && (error as { code?: unknown }).code === code;
}

async function createUniqueSlug(source: string, currentId?: string) {
  const prisma = getPrisma();
  const base = slugify(source);
  let slug = base;
  let index = 2;

  while (true) {
    const existing = await prisma.notice.findUnique({ where: { slug } });

    if (!existing || existing.id === currentId) {
      return slug;
    }

    slug = `${base}-${index}`;
    index += 1;
  }
}

function revalidateNoticePaths(slug?: string) {
  revalidatePath("/");
  revalidatePath("/en");
  revalidatePath("/notices");
  revalidatePath("/admin");
  revalidatePath("/admin/notices");

  if (slug) {
    revalidatePath(`/notices/${slug}`);
    revalidatePath(`/en/notices/${slug}`);
  }
}

export async function createNoticeAction(_: { errors?: string[] } | undefined, formData: FormData) {
  await requireAdmin();

  const result = validateNoticeForm(formData);

  if (!result.values) {
    return { errors: result.errors };
  }

  try {
    const prisma = getPrisma();
    const slug = await createUniqueSlug(createSlugSource(result.values));
    await prisma.notice.create({
      data: {
        ...result.values,
        slug
      }
    });
    revalidateNoticePaths(slug);
  } catch (error) {
    if (hasPrismaErrorCode(error, "P2002")) {
      return { errors: ["같은 slug의 공지가 이미 있습니다. 제목을 조금 다르게 입력해 주세요."] };
    }

    return { errors: ["공지 저장 중 오류가 발생했습니다."] };
  }

  redirect("/admin/notices?saved=created");
}

export async function updateNoticeAction(id: string, _: { errors?: string[] } | undefined, formData: FormData) {
  await requireAdmin();

  const result = validateNoticeForm(formData);

  if (!result.values) {
    return { errors: result.errors };
  }

  try {
    const prisma = getPrisma();
    const existing = await prisma.notice.findUnique({ where: { id } });

    if (!existing) {
      return { errors: ["수정할 공지를 찾을 수 없습니다."] };
    }

    await prisma.notice.update({
      where: { id },
      data: result.values
    });
    revalidateNoticePaths(existing.slug);
  } catch {
    return { errors: ["공지 수정 중 오류가 발생했습니다."] };
  }

  redirect("/admin/notices?saved=updated");
}

export async function deleteNoticeAction(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");

  if (!id) {
    redirect("/admin/notices");
  }

  const prisma = getPrisma();
  const existing = await prisma.notice.findUnique({ where: { id } });

  if (existing) {
    await prisma.notice.delete({ where: { id } });
    revalidateNoticePaths(existing.slug);
  }

  redirect("/admin/notices?saved=deleted");
}
