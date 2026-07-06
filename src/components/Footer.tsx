import { externalLinks, siteInfo } from "@/data/site";

export function Footer() {
  const socialLinks = [
    { href: externalLinks.naverMap, label: "지도" },
    { href: externalLinks.naverBlog, label: "블로그" },
    { href: externalLinks.naverCafe, label: "카페" },
    { href: externalLinks.instagram, label: "인스타그램" }
  ];

  return (
    <footer className="flex flex-wrap justify-between gap-3 border-t border-line bg-background px-5 py-7 text-sm text-muted sm:px-8 lg:px-20">
      <p>
        {siteInfo.name} · {siteInfo.address}
      </p>
      <div className="flex flex-wrap gap-3">
        <p>{siteInfo.businessHours}</p>
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-gold">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
