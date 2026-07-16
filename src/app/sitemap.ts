import { siteConfig } from "@/content/site-content";
import { getPublicSitemapEntries } from "@/lib/metadata";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.allowIndexing) {
    return [];
  }

  return getPublicSitemapEntries();
}
