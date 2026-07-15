import type { MetadataRoute } from "next";
import { publicRoutes, siteUrl } from "@/lib/seo";

const lastModified = new Date("2026-07-15T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
