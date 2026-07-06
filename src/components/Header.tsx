import Image from "next/image";
import Link from "next/link";
import { navItems, siteInfo } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex min-h-18 items-center justify-between border-b border-line bg-background/95 px-5 py-3 text-text backdrop-blur sm:px-8 lg:px-20">
      <Link href="/" className="inline-flex min-w-0 items-center gap-3" aria-label={`${siteInfo.name} 홈`}>
        <span className="flex shrink-0 items-center rounded-2xl bg-[#F6F2EA]/95 px-3 py-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-gold/25">
          <Image
            src="/assets/brand/reservation-logo.png"
            alt={siteInfo.name}
            width={516}
            height={158}
            priority
            className="h-8 w-auto min-w-[120px] max-w-[150px] object-contain sm:h-9 sm:min-w-[150px] sm:max-w-[190px]"
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
