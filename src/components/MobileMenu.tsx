"use client";

import { useState } from "react";
import { TrackedLink } from "./TrackedLink";

type MobileMenuProps = {
  items: Array<{ href: string; label: string; description?: string }>;
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 shrink-0 place-items-center rounded-full border border-current text-current focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
      >
        <span className="sr-only">메뉴 열기</span>
        <span className="relative block h-0.5 w-5 bg-current before:absolute before:left-0 before:top-[-7px] before:h-0.5 before:w-5 before:bg-current before:content-[''] after:absolute after:left-0 after:top-[7px] after:h-0.5 after:w-5 after:bg-current after:content-['']" />
      </button>

      {isOpen ? (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="absolute left-5 right-5 top-20 rounded-lg border border-line bg-surface p-2 text-text shadow-soft"
        >
          <ul className="grid gap-2">
            {items.map((item) => (
              <li key={item.href}>
                <TrackedLink
                  href={item.href}
                  analytics={
                    item.href === "/schedule"
                      ? { event: "schedule_click", location: "navbar", label: item.label, destination: "internal" }
                      : undefined
                  }
                  onClick={() => setIsOpen(false)}
                  className="group block rounded-md px-4 py-4 hover:bg-background focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
                >
                  <span className="block text-base font-black text-text transition group-hover:text-gold">{item.label}</span>
                  {item.description ? (
                    <span className="mt-1 block text-sm font-medium leading-relaxed text-gold">{item.description}</span>
                  ) : null}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
