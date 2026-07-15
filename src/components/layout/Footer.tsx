import { BrandMark } from "@/components/brand/BrandMark";
import { contact, footerNav, siteConfig } from "@/content/site-content";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-brand text-on-brand">
      <div className="container-site grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="size-8 text-on-brand" />
            <p className="font-display text-2xl">{siteConfig.name}</p>
          </div>
          <p className="mt-2 text-on-brand/75">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-brand/70">
            {siteConfig.demoDisclaimer}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-on-brand/60">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-on-brand/90 hover:text-on-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide uppercase text-on-brand/60">
            Kontakt (Demo)
          </p>
          <ul className="mt-4 space-y-2 text-on-brand/90">
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-11 items-center hover:text-on-brand"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={contact.emailHref}
                className="inline-flex min-h-11 items-center break-all hover:text-on-brand"
              >
                {contact.email}
              </a>
            </li>
            <li className="pt-1 text-on-brand/75">{contact.address.full}</li>
          </ul>
          <p className="mt-3 text-sm text-on-brand/55">{contact.note}</p>
        </div>
      </div>

      <div className="border-t border-on-brand/10">
        <div className="container-site flex flex-col gap-2 py-4 text-sm text-on-brand/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} – Demo
          </p>
          <p>{siteConfig.demoNotice}</p>
        </div>
      </div>
    </footer>
  );
}
