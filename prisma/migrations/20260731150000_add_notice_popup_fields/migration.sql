ALTER TABLE "Notice"
ADD COLUMN "showPopup" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN "popupPriority" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN "popupButtonLabelKo" TEXT,
ADD COLUMN "popupButtonLabelEn" TEXT,
ADD COLUMN "popupButtonUrl" TEXT,
ADD COLUMN "popupImageUrl" TEXT;

CREATE INDEX "Notice_showPopup_popupPriority_startsAt_idx" ON "Notice"("showPopup", "popupPriority", "startsAt");
