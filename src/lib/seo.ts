import type { Metadata } from "next";
import { externalLinks, siteInfo } from "@/data/site";

export const siteUrl = "https://ashtanga.or.kr";
export const siteName = "ASHTANGA YOGA STUDIO";
export const defaultTitle = "아쉬탕가 요가 스튜디오 | 서울 아쉬탕가 요가·마이솔 전문";
export const defaultDescription =
  "서울 서초구의 아쉬탕가 요가 전문 스튜디오입니다. 초보자 수업부터 마이솔, 레드 클래스, 명상까지 체계적인 수련을 안내합니다.";
export const siteKeywords = [
  "아쉬탕가 요가",
  "서울 요가",
  "서초 요가",
  "마이솔 클래스",
  "레드 클래스",
  "요가 명상",
  "아쉬탕가 요가 스튜디오"
];
export const ogImage = {
  url: "/images/og/og-home.jpg",
  width: 1200,
  height: 628,
  alt: `${siteName} 수련 공간`
};

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/studio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/teachers", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/philosophy", priority: 0.6, changeFrequency: "monthly" },
  { path: "/practice", priority: 0.8, changeFrequency: "monthly" },
  { path: "/schedule", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" }
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: (typeof publicRoutes)[number]["path"];
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      locale: "ko_KR",
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url]
    }
  };
}

export function getStructuredDataJsonLd() {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const studioId = `${siteUrl}/#studio`;
  const logoUrl = new URL("/assets/brand/home-logo.png", siteUrl).toString();
  const imageUrl = new URL(ogImage.url, siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteName,
        alternateName: siteInfo.name,
        url: siteUrl,
        logo: logoUrl,
        image: imageUrl,
        sameAs: [externalLinks.instagram, externalLinks.naverBlog, externalLinks.naverCafe]
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        publisher: {
          "@id": organizationId
        },
        inLanguage: "ko-KR"
      },
      {
        "@type": "SportsActivityLocation",
        "@id": studioId,
        name: siteName,
        alternateName: siteInfo.name,
        description: defaultDescription,
        url: siteUrl,
        telephone: siteInfo.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteInfo.address,
          addressCountry: "KR"
        },
        image: imageUrl,
        logo: logoUrl,
        sameAs: [externalLinks.instagram, externalLinks.naverBlog, externalLinks.naverCafe],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "06:00",
            closes: "21:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday", "Sunday"],
            opens: "06:30",
            closes: "12:00"
          }
        ],
        parentOrganization: {
          "@id": organizationId
        }
      }
    ]
  };
}
