import Link from "next/link";
import { navItems, siteInfo } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex min-h-18 items-center justify-between border-b border-line bg-background/95 px-5 py-3 text-text backdrop-blur sm:px-8 lg:px-20">
      <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label={`${siteInfo.name} 홈`}>
        <span className="grid size-11 place-items-center rounded-full border border-gold font-serif text-xl text-gold">A</span>
        <span className="min-w-0">
          <strong className="block truncate leading-tight">{siteInfo.name}</strong>
          <small className="block truncate text-xs font-bold leading-tight text-muted">{siteInfo.brandLabel}</small>
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-black lg:flex" aria-label="주요 메뉴">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-gold">
            {item.label}
          </Link>
        ))}
      </nav>

      <MobileMenu items={navItems} />
    </header>
  );
}
