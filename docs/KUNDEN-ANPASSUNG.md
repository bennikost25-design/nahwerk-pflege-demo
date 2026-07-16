# Kundenanpassung – Nahwerk Pflege Demo

Dieser Leitfaden hilft dabei, die fiktive Website-Demo für einen realen Kunden vorzubereiten.

Er ersetzt keine Rechtsberatung. Impressum, Datenschutz, Vertragstexte und Tracking müssen fachlich geprüft werden.

## Checkliste

### 1. Unternehmensdaten

- [ ] Name, Tagline und Kurzbeschreibung in `src/content/site-content.ts`
- [ ] Demo-Hinweise entfernen oder klar durch echte Formulierungen ersetzen
- [ ] Footer- und Impressumstexte anpassen

### 2. Logo und Markenfarben

- [ ] BrandMark oder Kundenlogo ersetzen
- [ ] Favicon, Apple-Touch-Icon und Open-Graph-Bild aktualisieren
- [ ] Farben in `src/app/globals.css` an die Marke anpassen
- [ ] Kontraste in Light und Dark Mode prüfen

### 3. Leistungen

- [ ] Leistungstitel, Beschreibungen und Hinweise aktualisieren
- [ ] Nur angebotene Leistungen belassen
- [ ] Anker-IDs und Verlinkungen prüfen

### 4. Versorgungsgebiet

- [ ] Stadt / Region korrekt benennen
- [ ] Servicegebiet in Kontakt und Texten konsistent halten

### 5. Telefonnummer und E-Mail

- [ ] `contact.phone`, `phoneHref`, `email`, `emailHref` setzen
- [ ] Sichtbare Links und `tel:` / `mailto:` testen

### 6. Öffnungszeiten

- [ ] `contact.hours` mit realen Zeiten befüllen
- [ ] Sonderregelungen klar kennzeichnen

### 7. Stellenangebote

- [ ] Beispielstellen durch echte Rollen ersetzen oder entfernen
- [ ] Keine erfundenen Gehälter, Zertifikate oder Personalzahlen
- [ ] Bewerbungsformular an den realen Prozess anbinden

### 8. Bilder und Bildrechte

- [ ] Hero- und weitere Bilder nur mit Nutzungsrecht verwenden
- [ ] Alt-Texte aktualisieren
- [ ] `sizes`, `priority` und Layout Shift prüfen

### 9. Impressum

- [ ] Pflichtangaben nach aktueller Rechtslage eintragen
- [ ] Demo-Platzhalter vollständig entfernen
- [ ] Fachliche Prüfung einholen

### 10. Datenschutz

- [ ] Datenschutzerklärung für Hosting, Formulare und ggf. Analytics erstellen
- [ ] Demo-Formulierungen entfernen
- [ ] Fachliche Prüfung einholen

### 11. Formulare und tatsächlicher Versand

- [ ] Kontakt- und Bewerbungsformular an einen realen Endpoint anbinden
- [ ] Erfolgs- und Fehlerzustände für echten Versand anpassen
- [ ] Spam-Schutz und Aufbewahrung klären
- [ ] Keine Demo-Erfolgsmeldung mehr, die „keine Datenübertragung“ behauptet

### 12. Hosting und Domain

- [ ] Produktionsdomain festlegen
- [ ] `siteConfig.url` auf die kanonische Domain setzen
- [ ] HTTPS und Weiterleitungen prüfen

### 13. Cookie- beziehungsweise Tracking-Prüfung

- [ ] Prüfen, ob Cookies / Analytics benötigt werden
- [ ] Einwilligung und Datenschutzhinweise bei Bedarf ergänzen
- [ ] Unnötiges Tracking vermeiden

### 14. Suchmaschinenindexierung

`siteConfig.allowIndexing` steuert zentral:

- Metadata `robots` / Googlebot
- `robots.txt`
- Sitemap-Inhalt

**`allowIndexing` erst auf `true` setzen, wenn:**

- [ ] echte Unternehmensdaten eingetragen sind
- [ ] Impressum und Datenschutz geprüft wurden
- [ ] Domain und Canonicals stimmen
- [ ] Demo-Hinweise entfernt oder klar angepasst sind
- [ ] kein fiktiver Inhalt mehr wie eine echte Aussage wirkt

### 15. Finale mobile und barrierearme Prüfung

- [ ] 320–430 px, Tablet und Desktop
- [ ] Light, Dark und System Mode
- [ ] Tastaturbedienung, Skip-Link, Fokusfallen
- [ ] Formulare inkl. Fehlermeldungen und Fokus
- [ ] `npm run lint` und `npm run build` ohne Fehler

## Wichtiger Hinweis

Solange die Website als Portfolio-Demo genutzt wird, sollte `allowIndexing` auf `false` bleiben. So erscheint das Projekt nicht versehentlich als realer lokaler Pflegedienst in Suchmaschinen.
