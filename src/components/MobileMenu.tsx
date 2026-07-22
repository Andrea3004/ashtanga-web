"use client";

import { useState } from "react";
import { TrackedLink } from "./TrackedLink";

type MobileMenuProps = {
  items: Array<{ href: string; label: string }>;
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
          {items.map((item) => (
            <TrackedLink
              key={item.href}
              href={item.href}
              analytics={
                item.href === "/schedule"
                  ? { event: "schedule_click", location: "mobile_menu", label: item.label, destination: "internal" }
                  : undefined
              }
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-4 py-4 text-base font-black hover:bg-background hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            >
              {item.label}
            </TrackedLink>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
