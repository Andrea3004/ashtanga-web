CREATE TYPE "NoticeType" AS ENUM (
  'GENERAL',
  'MOON_DAY',
  'HOLIDAY',
  'SUMMER_BREAK',
  'SCHEDULE_CHANGE',
  'WORKSHOP'
);

CREATE TABLE "Notice" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "titleKo" TEXT NOT NULL,
  "titleEn" TEXT NOT NULL,
  "contentKo" TEXT NOT NULL,
  "contentEn" TEXT NOT NULL,
  "type" "NoticeType" NOT NULL DEFAULT 'GENERAL',
  "startsAt" TIMESTAMP(3) NOT NULL,
  "endsAt" TIMESTAMP(3),
  "isPinned" BOOLEAN NOT NULL DEFAULT false,
  "isPublished" BOOLEAN NOT NULL DEFAULT false,
  "showOnTop" BOOLEAN NOT NULL DEFAULT true,
  "showOnKo" BOOLEAN NOT NULL DEFAULT true,
  "showOnEn" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Notice_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AdminUser" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "name" TEXT,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Notice_slug_key" ON "Notice"("slug");
CREATE INDEX "Notice_isPublished_startsAt_endsAt_idx" ON "Notice"("isPublished", "startsAt", "endsAt");
CREATE INDEX "Notice_showOnTop_idx" ON "Notice"("showOnTop");
CREATE INDEX "Notice_showOnKo_idx" ON "Notice"("showOnKo");
CREATE INDEX "Notice_showOnEn_idx" ON "Notice"("showOnEn");
CREATE INDEX "Notice_isPinned_updatedAt_idx" ON "Notice"("isPinned", "updatedAt");
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");
CREATE INDEX "AdminUser_isActive_idx" ON "AdminUser"("isActive");
