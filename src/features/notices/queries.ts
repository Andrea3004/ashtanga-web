import type { Notice } from "@prisma/client";
import { getPrisma } from "@/lib/prisma";
import type { NoticeLanguage, NoticeStatus, NoticeWithStatus } from "./types";

const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);

type NoticeStatusInput = Pick<Notice, "isPublished" | "startsAt" | "endsAt">;

export function getNoticeStatus(notice: NoticeStatusInput, now = new Date()): NoticeStatus {
  if (!notice.isPublished) {
    return "draft";
  }

  if (notice.startsAt > now) {
    return "scheduled";
  }

  if (notice.endsAt && notice.endsAt < now) {
    return "expired";
  }

  return "published";
}

function withNoticeStatus(notice: Notice): NoticeWithStatus {
  return {
    ...notice,
    status: getNoticeStatus(notice)
  };
}

export async function getActiveNotice(language: NoticeLanguage): Promise<Notice | null> {
  if (!hasDatabaseUrl) {
    return null;
  }

  const now = new Date();
  const prisma = getPrisma();

  return prisma.notice.findFirst({
    where: {
      isPublished: true,
      showOnTop: true,
      startsAt: { lte: now },
      OR: [{ endsAt: null }, { endsAt: { gte: now } }],
      ...(language === "ko" ? { showOnKo: true } : { showOnEn: true })
    },
    orderBy: [{ isPinned: "desc" }, { startsAt: "desc" }]
  });
}

export async function getPublicNoticeBySlug(slug: string, language: NoticeLanguage): Promise<Notice | null> {
  if (!hasDatabaseUrl) {
    return null;
  }

  const now = new Date();
  const prisma = getPrisma();

  return prisma.notice.findFirst({
    where: {
      slug,
      isPublished: true,
      startsAt: { lte: now },
      OR: [{ endsAt: null }, { endsAt: { gte: now } }],
      ...(language === "ko" ? { showOnKo: true } : { showOnEn: true })
    }
  });
}

export async function getPublicNotices(language: NoticeLanguage): Promise<Notice[]> {
  if (!hasDatabaseUrl) {
    return [];
  }

  const now = new Date();

  return getPrisma().notice.findMany({
    where: {
      isPublished: true,
      startsAt: { lte: now },
      OR: [{ endsAt: null }, { endsAt: { gte: now } }],
      ...(language === "ko" ? { showOnKo: true } : { showOnEn: true })
    },
    orderBy: [{ isPinned: "desc" }, { startsAt: "desc" }]
  });
}

export async function getAdminNotices(status?: NoticeStatus): Promise<NoticeWithStatus[]> {
  if (!hasDatabaseUrl) {
    return [];
  }

  const prisma = getPrisma();
  const notices = await prisma.notice.findMany({
    orderBy: [{ isPinned: "desc" }, { updatedAt: "desc" }]
  });
  const noticesWithStatus: NoticeWithStatus[] = notices.map(withNoticeStatus);

  return status ? noticesWithStatus.filter((notice) => notice.status === status) : noticesWithStatus;
}

export async function getAdminNotice(id: string): Promise<Notice | null> {
  if (!hasDatabaseUrl) {
    return null;
  }

  return getPrisma().notice.findUnique({ where: { id } });
}

export async function getNoticeDashboardStats(): Promise<{
  counts: Record<NoticeStatus, number>;
  recent: NoticeWithStatus[];
}> {
  const emptyCounts: Record<NoticeStatus, number> = {
    draft: 0,
    scheduled: 0,
    published: 0,
    expired: 0
  };

  if (!hasDatabaseUrl) {
    return {
      counts: emptyCounts,
      recent: []
    };
  }

  const notices = await getPrisma().notice.findMany({ orderBy: { updatedAt: "desc" } });
  const counts: Record<NoticeStatus, number> = { ...emptyCounts };

  for (const notice of notices) {
    const status = getNoticeStatus(notice);
    counts[status] += 1;
  }

  return {
    counts,
    recent: notices.slice(0, 5).map(withNoticeStatus)
  };
}
