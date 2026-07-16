import { pageMeta, publicRoutes, siteConfig } from "@/content/site-content";
import type { Metadata } from "next";

type PageKey = keyof typeof pageMeta;

export function getRobotsMetadata(): NonNullable<Metadata["robots"]> {
  if (siteConfig.allowIndexing) {
    return {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    };
  }

  return {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  };
}

export function createPageMetadata(key: PageKey): Metadata {
  const meta = pageMeta[key];
  const path = key === "home" ? "/" : `/${key}`;
  const url = absoluteUrl(path);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
    },
    robots: getRobotsMetadata(),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPublicSitemapEntries() {
  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
