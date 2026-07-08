import Image from "next/image";
import Link from "next/link";
import { navItems, siteInfo } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex min-h-18 items-center justify-between border-b border-line bg-background/95 px-5 py-3 text-text backdrop-blur sm:px-8 lg:px-20">
      <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label={`${siteInfo.name} 홈`}>
        <span className="flex shrink-0 items-center">
          <Image
            src="/assets/brand/home-logo.png"
            alt={siteInfo.name}
           src="/assets/brand/home-logo.png"
alt={siteInfo.name}
width={1024}
height={1024}
priority
className="h-12 w-12 object-contain sm:h-14 sm:w-14"
          />
        </span>
        <span className="min-w-0">
          <strong className="block truncate text-sm leading-tight text-gold sm:text-base">{siteInfo.name}</strong>
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
