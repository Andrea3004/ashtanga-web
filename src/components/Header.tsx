import Link from "next/link";
import { navItems, siteInfo } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex min-h-18 items-center justify-between border-b border-line bg-paper/95 px-5 py-3 text-ink backdrop-blur sm:px-8 lg:px-20">
      <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label={`${siteInfo.name} 홈`}>
        <span className="grid size-11 place-items-center rounded-full border border-current font-serif text-xl">A</span>
        <span>
          <strong className="block leading-tight">{siteInfo.name}</strong>
          <small className="block text-xs font-bold leading-tight text-muted">{siteInfo.nameKo}</small>
        </span>
      </Link>

      <nav className="hidden items-center gap-8 text-sm font-black lg:flex" aria-label="주요 메뉴">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="transition hover:text-clay">
            {item.label}
          </Link>
        ))}
      </nav>

      <MobileMenu items={navItems} />
    </header>
  );
}
