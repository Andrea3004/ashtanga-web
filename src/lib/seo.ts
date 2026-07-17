import type { Metadata } from "next";
import { siteInfo } from "@/data/site";

export const siteUrl = "https://ashtanga.or.kr";
export const siteName = "ASHTANGA YOGA STUDIO";
export const defaultDescription =
  "서울 서초구 아쉬탕가 요가 스튜디오의 수업, 마이솔 클래스, 명상, 회원 전용 Practice App 안내를 확인하세요.";
export const ogImage = {
  url: "/images/og/og-home.jpg",
  width: 1200,
  height: 630,
  alt: `${siteName} 수련 공간`
};

export const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about/studio", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/teachers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/philosophy", priority: 0.7, changeFrequency: "monthly" },
  { path: "/practice", priority: 0.9, changeFrequency: "monthly" },
  { path: "/schedule", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" }
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path: (typeof publicRoutes)[number]["path"];
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: path,
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

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation"],
    name: siteName,
    alternateName: siteInfo.name,
    description: defaultDescription,
    url: siteUrl,
    telephone: siteInfo.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteInfo.address,
      addressCountry: "KR"
    }
  };
}
