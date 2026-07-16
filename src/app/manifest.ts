import { siteConfig } from "@/content/site-content";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} – Website-Demo`,
    short_name: "Nahwerk",
    description:
      "Fiktive Website-Demo für einen ambulanten Pflegedienst in Erfurt. Kein realer Pflegedienst und keine echte App.",
    start_url: "/",
    display: "browser",
    background_color: "#f4efe6",
    theme_color: "#163a42",
    lang: siteConfig.language,
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
        purpose: "any",
      },
    ],
  };
}
