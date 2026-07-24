"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { MobileMenu } from "./MobileMenu";
import { TrackedLink } from "./TrackedLink";

function getEnglishNavItems(isEnglishPage: boolean) {
  return [
    { href: "/", label: "KR", description: "Korean site" },
    { href: "/schedule", label: "Schedule", description: "Class times" },
    { href: isEnglishPage ? "#contact" : "/en#contact", label: "Contact", description: "Ask before visiting" }
  ];
}

export function HeaderNavigation() {
  const pathname = usePathname();
  const isEnglishPage = pathname === "/en";
  const englishNavItems = getEnglishNavItems(isEnglishPage);
  const desktopItems = isEnglishPage ? englishNavItems : navItems;
  const mobileItems = isEnglishPage
    ? englishNavItems
    : [...navItems, { href: "/en", label: "EN", description: "English visitor guide" }];

  return (
    <div className="flex items-center gap-3 lg:gap-6">
      <nav className="hidden items-center gap-6 text-sm font-black lg:flex" aria-label="Primary navigation">
        {desktopItems.map((item) => {
          const analytics =
            item.href === "/schedule"
              ? { event: "schedule_click" as const, location: "navbar" as const, label: item.label, destination: "internal" as const }
              : undefined;

          return (
            <TrackedLink
              key={item.href}
              href={item.href}
              analytics={analytics}
              className="rounded-sm transition hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              {item.label}
            </TrackedLink>
          );
        })}
      </nav>

      {!isEnglishPage ? (
        <Link
          href="/en"
          className="hidden min-h-11 items-center rounded-md border border-line px-3 text-xs font-black text-gold transition hover:border-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30 lg:inline-flex"
        >
          EN
        </Link>
      ) : null}

      <MobileMenu items={mobileItems} />
    </div>
  );
}
