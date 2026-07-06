import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteInfo } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${siteInfo.name} | ${siteInfo.nameKo}`,
    template: `%s | ${siteInfo.name}`
  },
  description: siteInfo.metaDescription
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
