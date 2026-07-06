import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteInfo } from "@/data/site";

const siteUrl = "https://ashtanga.or.kr";
const brandImage = "/assets/brand/reservation-icon-512.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteInfo.name} | 공식 홈페이지`,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.metaDescription,
  applicationName: siteInfo.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      {
        url: "/assets/brand/reservation-icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/assets/brand/reservation-icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    apple: [
      {
        url: "/assets/brand/reservation-apple-touch-icon-v2.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: siteInfo.name,
    title: `${siteInfo.name} | 공식 홈페이지`,
    description: siteInfo.metaDescription,
    images: [
      {
        url: brandImage,
        width: 512,
        height: 512,
        alt: siteInfo.name
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#081A20"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
