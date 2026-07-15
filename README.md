# Nahwerk Pflege – Demo-Website

Fiktive Demo-Website für einen ambulanten Pflegedienst in Erfurt. Zeigt, wie eine moderne, zugängliche Website für einen kleinen privaten Pflegedienst aussehen kann – inklusive Erstgespräch-Anfrage und Kurzbewerbung (ohne echtes Backend).

**Demo-Projekt – fiktiver Pflegedienst.** Alle Unternehmensdaten, Stellen und Kontaktdaten sind erfunden.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
- React Server Components wo möglich

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

Anschließend im Browser unter [http://localhost:3000](http://localhost:3000) öffnen.

## Produktiv-Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Zentrale Anpassungen

Die meisten Inhalte liegen in einer Datei:

- `src/content/site-content.ts` – Name, Navigation, Leistungen, Stellen, FAQ, Kontakt, CTAs, Meta-Texte

Weitere Einstellungen:

- `siteConfig.url` in `src/content/site-content.ts` – kanonische Demo-URL (SEO, Open Graph, Sitemap)
- `src/app/globals.css` – Design-Tokens (Farben, Schriften, Abstände)
- `src/components/` – Layout, Sections, UI, Formulare

Formulare speichern und senden **keine** Daten; sie simulieren nur einen lokalen Demo-Erfolg.

## Seiten

| Pfad | Inhalt |
|------|--------|
| `/` | Startseite mit Hero, Leistungen, Ablauf, Karriere-Teaser, FAQ |
| `/leistungen` | Ausführliche Leistungsdarstellung |
| `/karriere` | Arbeitgeberversprechen, Demostellen, Kurzbewerbung |
| `/kontakt` | Kontaktdaten, Demo-Formular, Kartenplatzhalter |
| `/impressum` | Platzhalter – keine rechtliche Vorlage |
| `/datenschutz` | Platzhalter – keine rechtliche Vorlage |

## Hinweise

- Keine externen Schriftarten, keine Stockfotos, kein CMS, keine Datenbank
- Impressum und Datenschutz sind bewusst unvollständig und als Demo gekennzeichnet
- Keine echten Zertifikate, Bewertungen oder Kennzahlen
