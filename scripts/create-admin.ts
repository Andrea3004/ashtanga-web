import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import bcrypt from "bcryptjs";
import { getPrisma } from "../src/lib/prisma";

function loadEnvFile(fileName: string) {
  const filePath = resolve(process.cwd(), fileName);

  if (!existsSync(filePath)) {
    return;
  }

  const lines = readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const match = /^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(trimmed);

    if (!match) {
      continue;
    }

    const [, key, rawValue] = match;

    if (process.env[key] === undefined) {
      process.env[key] = rawValue.replace(/^["']|["']$/g, "");
    }
  }
}

async function main() {
  loadEnvFile(".env");
  loadEnvFile(".env.local");

  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD ?? "";

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required.");
  }

  if (!email) {
    throw new Error("ADMIN_EMAIL is required.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("ADMIN_EMAIL must be a valid email address.");
  }

  if (password.length < 12) {
    throw new Error("ADMIN_PASSWORD must be at least 12 characters.");
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const prisma = getPrisma();

  await prisma.adminUser.upsert({
    where: { email },
    update: {
      passwordHash,
      isActive: true
    },
    create: {
      email,
      passwordHash,
      isActive: true
    }
  });

  await prisma.$disconnect();
  console.log("Admin user bootstrap completed.");
}

main().catch(async (error: unknown) => {
  try {
    await getPrisma().$disconnect();
  } catch {
    // Ignore disconnect failures during error handling.
  }

  const message = error instanceof Error ? error.message : "Admin bootstrap failed.";
  console.error(message);
  process.exit(1);
});
