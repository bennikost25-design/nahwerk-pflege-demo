import { siteConfig, pageMeta } from "@/content/site-content";
import type { Metadata } from "next";

type PageKey = keyof typeof pageMeta;

export function createPageMetadata(key: PageKey): Metadata {
  const meta = pageMeta[key];
  const url = `${siteConfig.url}${key === "home" ? "" : `/${key}`}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
