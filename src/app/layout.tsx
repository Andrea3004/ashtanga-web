import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { StructuredData } from "@/components/StructuredData";
import { defaultDescription, defaultTitle, ogImage, siteKeywords, siteName, siteUrl } from "@/lib/seo";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: siteUrl
  },
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
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImage.url]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification
        }
      }
    : {})
};

export const viewport: Viewport = {
  themeColor: "#081A20"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <StructuredData />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
