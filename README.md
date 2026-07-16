# Nahwerk Pflege – Website-Demo

Fiktive Website für einen ambulanten Pflegedienst in Erfurt. Das Projekt dient als Portfolio- und Demonstrationsbeispiel für eine ruhige, barrierearme Pflege-Website.

**Dies ist kein echter Pflegedienst.** Es gibt keine echten Kontaktangebote, Stellenausschreibungen oder Datenübertragungen. Alle Unternehmensangaben sind beispielhaft.

## Live-Demo

https://nahwerk-pflege-demo.vercel.app

## Funktionen

- Responsive Gestaltung für Mobil, Tablet und Desktop
- Light-, System- und Dark-Mode mit lokaler Speicherung
- Leistungsdarstellung mit verständlichen Erläuterungen
- Karrierebereich mit Beispielstellen und Kurzbewerbung
- Kontaktformular als reine Demo ohne Backend
- Barrierearme Navigation inkl. Skip-Link und Tastaturbedienung
- Zentrale Inhaltskonfiguration in einer Datei
- SEO- und Indexierungssteuerung über `allowIndexing`
- Social-Media-Vorschaubild, Favicons und Web-App-Manifest

## Technologien

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

## Lokale Entwicklung

### Voraussetzungen

- Node.js (aktuelles LTS empfohlen)
- npm

### Befehle

```bash
npm install
npm run dev
```

Anschließend unter [http://localhost:3000](http://localhost:3000) öffnen.

```bash
npm run lint
npm run build
```

Produktion lokal starten:

```bash
npm run build
npm start
```

## Projektstruktur

| Pfad | Inhalt |
|------|--------|
| `src/app/` | Routen, Layout, Metadata, Icons, Manifest, OG-Bild, 404 |
| `src/components/` | Layout, Sections, Formulare, Theme, UI |
| `src/content/site-content.ts` | Zentrale Texte, Navigation, Kontakt, FAQ, Meta |
| `src/lib/` | Metadata-Helfer, Theme-Logik, Utilities |
| `src/hooks/` | Wiederverwendbare Hooks |
| `public/images/` | Statische Bilder (z. B. Hero) |
| `docs/` | Anpassungsleitfaden für Kundenprojekte |

## Inhalte anpassen

Die wichtigsten Inhalte liegen in:

`src/content/site-content.ts`

Dort anpassen:

- Unternehmensname und Tagline
- Kontaktangaben und Versorgungsgebiet
- Navigation und CTAs
- Leistungen, Karrieretexte und FAQ
- Demo-Hinweise und Disclaimer
- Seitentitel und Beschreibungen (`pageMeta`)
- `allowIndexing` für Suchmaschinen

Farben, Schriften und Abstände: `src/app/globals.css`

## Theme

- Standard: Systemeinstellung des Geräts
- Manuelle Auswahl: Hell / System / Dunkel im Header
- Speicherung in `localStorage` unter `nahwerk-theme`
- Darstellung über zentrale CSS-Variablen und `data-theme`

## Demo und Datenschutz

- Formulare versenden und speichern keine personenbezogenen Daten
- Erfolgsmeldungen sind lokale Demo-Zustände
- Impressum und Datenschutz sind Platzhalter und keine geprüften Rechtstexte
- Bei einem echten Kundeneinsatz sind Datenschutz, Impressum, Hosting, Formularversand und Tracking individuell zu prüfen

## Deployment

- Empfohlenes Hosting: Vercel
- Kanonische URL in `siteConfig.url` setzen
- Eigene Domain optional hinterlegen
- `allowIndexing` erst aktivieren, wenn echte Unternehmensdaten, geprüfte Rechtstexte und korrekte Canonicals vorliegen

Siehe auch: [docs/KUNDEN-ANPASSUNG.md](docs/KUNDEN-ANPASSUNG.md)
