# Live-Check nach dem Deployment

Prüfe die veröffentlichte Produktionsversion des aktuell geöffneten Website-Projekts.

## Regeln

- Verändere zunächst keine Projektdateien.
- Führe kein Deployment aus.
- Erstelle keinen Commit.
- Führe keinen Push durch.
- Sende keine echten sensiblen Kundendaten.
- Löse keine echten Bewerbungen, Bestellungen oder kostenpflichtigen Vorgänge aus.
- Verwende nur ausdrücklich erlaubte Testdaten.
- Behaupte nicht, dass ein Formular funktioniert, wenn nur seine Darstellung geprüft wurde.
- Trenne tatsächliche Live-Prüfungen von manuellen offenen Punkten.

## 1. Produktionsadresse ermitteln

Ermittle die vorgesehene Live-Adresse aus:

- Projektdokumentation
- Konfiguration
- Deploymentinformationen
- README
- vorhandenen Umgebungsangaben
- aktuellem Gesprächskontext

Falls die Adresse nicht eindeutig ist, frage gezielt nach der Live-URL.

## 2. Deployment prüfen

Prüfe:

- Website ist erreichbar
- HTTPS funktioniert
- richtige Version ist veröffentlicht
- keine veraltete Vorschauversion
- keine Deployment-Fehlerseite
- keine Entwicklungshinweise
- keine ungewollten Demo-Hinweise
- keine sichtbaren Platzhalter
- öffentliche Domain verweist auf die richtige Website
- Favicon wird geladen
- wichtige Dateien werden geladen

## 3. Alle Seiten öffnen

Öffne alle vorgesehenen Seiten.

Prüfe:

- HTTP-Fehler
- leere Seiten
- Navigation
- mobile Navigation
- interne Links
- externe Links
- Ankerlinks
- Footer
- Impressum
- Datenschutz
- 404-Seite
- Browser-Zurück-Funktion
- Browser-Vorwärts-Funktion

## 4. Browser-Konsole und Netzwerk

Prüfe soweit möglich:

- JavaScript-Fehler
- React-Warnungen
- Hydration-Warnungen
- Theme-Warnungen
- Endlosschleifen
- fehlgeschlagene Netzwerkaufrufe
- 404-Ressourcen
- fehlende Bilder
- blockierte Ressourcen
- Schriftfehler
- Mixed Content
- auffällig wiederholte Anfragen
- unnötige Konsolenmeldungen

## 5. Tatsächliche visuelle Darstellung

Prüfe mindestens:

- 360 Pixel
- 390 Pixel
- 768 Pixel
- 1024 Pixel
- 1280 Pixel
- 1440 Pixel

Prüfe alle vorhandenen Themes.

Achte gezielt auf:

- unsichtbare Buttontexte
- zu geringe Kontraste
- falsche Hoverfarben
- Fehler nur im Hellmodus
- Fehler nur im Dunkelmodus
- abgeschnittene Inhalte
- überlappende Elemente
- horizontales Scrollen
- falsche Bildausschnitte
- ungleichmäßige Karten
- falsch ausgerichtete Linien
- versetzte Punkte
- nicht zentrierte Nummern
- Timeline-Fehler
- Navigation
- Formulare
- Footer
- Sticky- und Fixed-Elemente
- mobile Tastaturprobleme
- ungünstige Zeilenumbrüche

Bei jedem visuellen Fehler nennen:

- URL
- Seite
- Element
- Bildschirmbreite
- Theme
- beobachtetes Verhalten
- erwartetes Verhalten

## 6. Rechtschreibung in der Live-Version

Prüfe die tatsächlich sichtbaren Texte erneut auf:

- Tippfehler
- doppelte Wörter
- kaputte Sonderzeichen
- unvollständige Texte
- falsche Buttons
- uneinheitliche Schreibweisen
- falsche oder noch vorhandene Demodaten
- falsche Telefonnummern oder E-Mail-Adressen
- Platzhalter
- fehlerhafte Meta-Titel

Unternehmensdaten und Rechtstexte nicht eigenmächtig verändern.

## 7. Kontaktwege und Formulare

Prüfe:

- Telefonlinks
- E-Mail-Links
- Kontaktformular
- Bewerbungsformular
- Pflichtfelder
- Fehlermeldungen
- Erfolgsmeldungen
- Ladezustand
- Mehrfachabsendung
- Verhalten nach dem Absenden
- richtige Empfänger, soweit nachweisbar

Eine echte Testübermittlung nur durchführen, wenn:

- sie ausdrücklich erlaubt wurde
- eine sichere Testadresse vorhanden ist
- keine sensiblen Daten verwendet werden
- die Nachricht eindeutig als Test gekennzeichnet ist

Erlaubte Beispieldaten:

Name:
Live-Test Website

Betreff:
Technischer Test nach Veröffentlichung

Nachricht:
Dies ist eine ausdrücklich erlaubte technische Testnachricht nach dem Deployment.

Falls keine sichere Übermittlung möglich ist:

- nicht absenden
- als manuell offen kennzeichnen
- genaue Testanleitung für den Kunden oder Projektverantwortlichen erstellen

## 8. Metadaten und Indexierung

Prüfe in der Produktionsversion:

- Seitentitel
- Meta-Beschreibung
- Favicon
- Open-Graph-Daten
- Vorschaubild
- Canonical-Adresse
- robots
- Sitemap
- öffentliche Domain
- keine Vorschau-URL in öffentlichen Metadaten
- korrekter Indexierungsstatus
- Demo-Projekt korrekt auf noindex, sofern vorgesehen
- Kundenprojekt nicht versehentlich auf noindex

## 9. Live-Abschlussbericht

Erstelle:

### Kritische Live-Fehler

### Wichtige Live-Probleme

### Visuelle Fehler

### Rechtschreib- und Inhaltsfehler

### Kleinere Hinweise

### Nicht automatisch geprüfte Punkte

### Erfolgreich geprüfte Punkte

Schließe exakt mit:

Live-Check

- Website erreichbar: Ja / Nein
- HTTPS: Bestanden / Problem
- Richtige Version veröffentlicht: Ja / Unklar / Nein
- Seiten und Navigation: Bestanden / Probleme gefunden
- Browser-Konsole: Fehlerfrei / Probleme gefunden / Nicht prüfbar
- Responsive Darstellung: Bestanden / Probleme gefunden / Manuell offen
- Visuelle Designprüfung: Bestanden / Probleme gefunden / Manuell offen
- Farben und Kontraste: Bestanden / Probleme gefunden / Manuell offen
- Linien und Marker: Bestanden / Probleme gefunden / Nicht relevant / Manuell offen
- Rechtschreibung und sichtbare Inhalte: Bestanden / Probleme gefunden / Manuell offen
- Formulare: Bestanden / Probleme gefunden / Nicht vollständig getestet
- Metadaten: Bestanden / Probleme gefunden
- Indexierungsstatus: Korrekt / Problem / Nicht relevant
- Kritische Live-Fehler: Anzahl
- Veröffentlichung technisch erfolgreich: Ja / Nein / Mit offenen Punkten

Bei Problemen immer nennen:

- genaue URL
- betroffenes Element
- Bildschirmgröße
- Theme
- beobachtetes Verhalten
- erwartetes Verhalten
- mögliche Ursache
- empfohlener nächster Schritt
