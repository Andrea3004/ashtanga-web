import { contactLinks, externalLinks, siteInfo } from "@/data/site";
import { siteName } from "@/lib/seo";
import { TrackedLink } from "./TrackedLink";

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
        {siteName} · {siteInfo.address} ·{" "}
        <TrackedLink
          href={contactLinks.phone}
          analytics={{ event: "phone_click", location: "footer", label: "전화번호", destination: "tel" }}
          className="rounded-sm hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
        >
          {siteInfo.phone}
        </TrackedLink>
      </p>
      <div className="flex flex-wrap gap-3">
        <p>{siteInfo.businessHours}</p>
        {socialLinks.map((link) => (
          <TrackedLink
            key={link.label}
            href={link.href}
            analytics={
              link.href === externalLinks.naverMap
                ? { event: "map_click", location: "footer", label: link.label, destination: "map" }
                : undefined
            }
            className="rounded-sm hover:text-gold focus-visible:outline focus-visible:outline-4 focus-visible:outline-gold/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </TrackedLink>
        ))}
      </div>
    </footer>
  );
}
