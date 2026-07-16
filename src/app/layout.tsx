import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/content/site-content";
import { getRobotsMetadata } from "@/lib/metadata";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.tagline} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Fiktive Website-Demo für einen ambulanten Pflegedienst in Erfurt: Erstgespräch anfragen oder unkompliziert bewerben. Kein realer Pflegedienst.",
  applicationName: `${siteConfig.name} – Website-Demo`,
  openGraph: {
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description:
      "Fiktive Website-Demo für einen ambulanten Pflegedienst in Erfurt. Kein realer Pflegedienst.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description:
      "Fiktive Website-Demo für einen ambulanten Pflegedienst in Erfurt. Kein realer Pflegedienst.",
  },
  robots: getRobotsMetadata(),
};

export const viewport: Viewport = {
  themeColor: "#163a42",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <Script id="nahwerk-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Script id="nahwerk-theme-ready" strategy="afterInteractive">
          {
            "requestAnimationFrame(function(){document.documentElement.classList.add('theme-ready');});"
          }
        </Script>
        <ThemeProvider>
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
