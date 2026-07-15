import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { siteConfig } from "@/content/site-content";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline} (Demo)`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Demo-Website für einen fiktiven ambulanten Pflegedienst in Erfurt: Erstgespräch anfragen oder unkompliziert bewerben.",
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
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
