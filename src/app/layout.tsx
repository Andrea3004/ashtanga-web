import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultDescription, getLocalBusinessJsonLd, ogImage, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | 공식 홈페이지`,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  creator: siteName,
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
    title: `${siteName} | 공식 홈페이지`,
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
    title: `${siteName} | 공식 홈페이지`,
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
  }
};

export const viewport: Viewport = {
  themeColor: "#081A20"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const localBusinessJsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
