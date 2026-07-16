# Finaler Website-Projektcheck – Prüfmodus

Führe eine vollständige Abschlussprüfung des aktuell geöffneten Website-Projekts durch.

Ziel ist eine systematische Prüfung von:

- Technik
- Funktionen
- tatsächlicher Browserdarstellung
- responsivem Design
- Themes
- Texten und Rechtschreibung
- Barrierearmut
- Metadaten
- Datenschutz- und Sicherheitsaspekten
- Git- und Veröffentlichungsbereitschaft

## Unveränderbare Regeln

- Verändere in diesem Prüfmodus keine Dateien.
- Erstelle keine neuen Dateien.
- Installiere keine Pakete.
- Aktualisiere keine Abhängigkeiten.
- Führe keine automatischen Reparaturbefehle aus.
- Erstelle keinen Commit.
- Führe keinen Git-Push durch.
- Löse kein Deployment aus.
- Verändere weder Gestaltung noch Inhalte.
- Behebe keine Fehler automatisch.
- Unterdrücke keine Warnungen.
- Gib Unsicherheiten offen an.
- Behaupte keine bestandene Prüfung, wenn sie nicht tatsächlich durchgeführt werden konnte.
- Unterscheide klar zwischen:
  - automatisch geprüft
  - visuell geprüft
  - nur anhand des Codes eingeschätzt
  - manuell offen

## 1. Projekt und Technik erkennen

Untersuche zunächst:

- Projektstamm
- verwendetes Framework
- Programmiersprache
- Paketmanager anhand der Lockdatei
- package.json
- vorhandene Skripte
- vorhandene Build-Konfiguration
- Lint-Konfiguration
- TypeScript-Konfiguration
- vorhandene Testsysteme
- CSS- beziehungsweise UI-System
- vorhandene Browser- oder End-to-End-Tests
- Theme-System
- Formularsystem
- Routing
- Metadaten- und SEO-System
- Umgebungsvariablen
- Dokumentation
- Git-Status

Fasse anschließend kurz zusammen:

- welche Technik erkannt wurde
- welche automatischen Prüfungen vorhanden sind
- welche visuellen Prüfwerkzeuge verfügbar sind
- welche Prüfungen nicht automatisch möglich sind

## 2. Bestehende Prüfskripte ausführen

Verwende den zum Projekt gehörenden Paketmanager.

Führe alle vorhandenen und sinnvoll nutzbaren Prüfungen aus, beispielsweise:

- Lint
- Typecheck
- Unit-Tests
- Integrationstests
- End-to-End-Tests
- Produktions-Build

Verwende nur tatsächlich vorhandene Skripte oder sichere, nicht verändernde Standardbefehle.

Nicht durchführen:

- automatische Lint-Reparatur
- Formatierung mit Schreibzugriff
- Dependency-Updates
- Installationen
- Deployment
- Commit
- Push

Dokumentiere für jeden ausgeführten Befehl:

- genauen Befehl
- Ergebnis
- relevante Warnungen
- relevante Fehlermeldungen
- betroffene Dateien
- mögliche Ursache

Falls eine wichtige Prüfung nicht vorhanden ist:

- nicht eigenmächtig hinzufügen
- als „nicht vorhanden“ melden
- erklären, welche Prüfung dadurch fehlt

## 3. Sichtbare Seiten und Routen ermitteln

Ermittle alle vorgesehenen Seiten, Routen und wichtigen Zustände.

Prüfe:

- alle vorgesehenen Routen existieren
- keine wichtige Seite ist versehentlich nicht erreichbar
- Navigation verweist auf richtige Ziele
- mobile und Desktop-Navigation enthalten die vorgesehenen Hauptziele
- Logo führt sinnvoll zur Startseite
- interne Links führen nicht auf Fehlerseiten
- externe Links sind richtig aufgebaut
- Ankerlinks führen zum richtigen Abschnitt
- Buttons besitzen ein sinnvolles Ziel
- keine leeren href-Werte
- keine provisorischen href="#"
- Footer enthält die vorgesehenen Links
- Impressum und Datenschutz sind erreichbar
- 404-Seite funktioniert, sofern das Framework dies unterstützt
- Browser-Zurück- und Vorwärtsnavigation verursachen keine offensichtlichen Probleme
- es gibt keine widersprüchlichen oder versehentlich doppelten Hauptaktionen

Erstelle eine Liste aller geprüften Seiten.

## 4. Tatsächliche visuelle Browserprüfung

Prüfe nicht nur den Code, sondern die tatsächlich gerenderte Website.

Nutze vorhandene Browser-, Vorschau-, DevTools- oder Screenshot-Funktionen, sofern verfügbar.

Starte bei Bedarf den vorhandenen lokalen Entwicklungsserver. Verändere dabei keine Dateien.

Prüfe mindestens diese Breiten:

- 360 Pixel
- 390 Pixel
- 768 Pixel
- 1024 Pixel
- 1280 Pixel
- 1440 Pixel

Prüfe mindestens:

- Startseite
- jede Hauptseite
- Kontaktseite
- Karriereseite, sofern vorhanden
- Leistungsseite
- rechtliche Seiten
- 404-Seite
- geöffnete mobile Navigation
- Formulare
- Erfolgszustände und Fehlerzustände, soweit sicher möglich

Falls Themes vorhanden sind, prüfe:

- heller Modus
- dunkler Modus
- Systemmodus

Falls Animationen vorhanden sind, prüfe:

- normale Bewegung
- prefers-reduced-motion beziehungsweise reduzierte Bewegung

Falls eine echte Browser- oder Screenshotprüfung nicht möglich ist:

- behaupte nicht, dass die Darstellung fehlerfrei ist
- kennzeichne die visuelle Prüfung als manuell offen
- liste exakt auf, welche Seiten, Breiten, Zustände und Themes manuell geprüft werden müssen

## 5. Kontraste, Farben und unsichtbare Elemente

Suche gezielt nach Fehlern wie:

- Textfarbe und Hintergrundfarbe haben zu wenig Kontrast
- Buttonbeschriftungen verschwinden auf dunklen oder hellen Flächen
- Text ist nur in einem Theme sichtbar
- Text wirkt wie leerer Buttoninhalt
- Hoverzustand macht die Beschriftung unsichtbar
- Fokuszustand hat zu wenig Kontrast
- Active-Zustand ist nicht erkennbar
- Rahmen verschwindet auf dem Hintergrund
- Icons besitzen eine falsche Farbe
- Platzhaltertext ist kaum lesbar
- Fehlermeldungen sind nicht sichtbar
- Erfolgsmeldungen sind nicht sichtbar

Untersuche bei Tailwind oder vergleichbaren Systemen insbesondere:

- gleichzeitig vorhandene widersprüchliche Textfarben
- gleichzeitig vorhandene widersprüchliche Hintergrundfarben
- gleichzeitig vorhandene widersprüchliche Randfarben
- globale Varianten, die durch lokale className-Angaben widersprüchlich überschrieben werden
- className-Helfer, die Konflikte nur aneinanderhängen und nicht auflösen
- Theme-Tokens, die je nach Modus eine unerwartete Farbe annehmen

Vergleiche:

- primäre Buttons
- sekundäre Buttons
- Buttons auf hellen Flächen
- Buttons auf dunklen Markenflächen
- Ghost-Buttons
- Formularbuttons
- mobile und Desktopzustände

Ein technisch gültiger CSS- oder Tailwind-Klassenname bedeutet nicht automatisch, dass das Ergebnis visuell korrekt ist.

## 6. Linien, Marker und geometrische Ausrichtung

Prüfe gezielt Komponenten wie:

- Timelines
- Prozessdarstellungen
- Schrittanzeigen
- Linien mit Punkten
- nummerierte Kreise
- Verbindungslinien
- Fortschrittsanzeigen
- Kartenraster
- Icon-Reihen

Achte insbesondere darauf:

- Linien verlaufen exakt durch die Mitte der zugehörigen Punkte oder Kreise
- Marker liegen auf derselben horizontalen oder vertikalen Achse
- Zahlen sind innerhalb ihrer Kreise zentriert
- Linien liegen optisch hinter den Markern
- Abstände zwischen gleichartigen Elementen sind gleichmäßig
- erste und letzte Marker sind korrekt mit der Linie verbunden
- keine Linie beginnt oder endet unbeabsichtigt versetzt
- mobile und Desktopversion verwenden passende Ausrichtungen
- absolute Positionierungen reagieren korrekt auf unterschiedliche Bildschirmbreiten
- gleichartige Karten sind ordentlich ausgerichtet
- Überschriften und Inhalte beginnen auf nachvollziehbaren Achsen

Melde beispielsweise ausdrücklich:

- Linie zu hoch
- Linie zu niedrig
- Marker versetzt
- Zahlen nicht zentriert
- Linie vor statt hinter dem Kreis
- ungleichmäßige Abstände
- Grid und Linie verwenden unterschiedliche Breiten

## 7. Allgemeine Layout- und Designqualität

Prüfe:

- horizontales Scrollen
- abgeschnittene Texte
- überlappende Elemente
- verdeckte Buttons
- unerreichbare Bedienelemente
- zu kleine Bedienflächen
- ungünstige Zeilenumbrüche
- isolierte einzelne Wörter in Überschriften
- übermäßig große Leerflächen
- zu geringe Abstände
- inkonsistente Abstände
- inkonsistente Rundungen
- inkonsistente Rahmen
- inkonsistente Schatten
- unterschiedliche Größen eigentlich gleicher Komponenten
- falsch zugeschnittene Bilder
- gestreckte oder verzerrte Bilder
- sichtbare Layoutsprünge
- problematische feste Höhen
- problematische feste Breiten
- ungünstige absolute Positionierungen
- Sticky- oder Fixed-Elemente, die Inhalte verdecken
- mobile Bildschirmtastatur, die wichtige Felder oder Buttons blockiert
- Navigation, die bei langen Texten nicht mehr passt
- Footer-Probleme
- Tabellen oder Formulare, die mobil nicht bedienbar sind

Vergleiche gleichartige Bereiche projektweit miteinander.

Melde objektive Designfehler getrennt von subjektiven Gestaltungsvorschlägen.

Objektive Fehler sind beispielsweise:

- unsichtbarer Text
- schiefe Linie
- abgeschnittener Inhalt
- überlappendes Element
- falsch zentrierter Marker
- inkonsistente Komponentenvariante
- nicht erreichbarer Button

Subjektive Vorschläge sind beispielsweise:

- andere Farbe wäre schöner
- Abschnitt könnte moderner sein
- Schriftart könnte eleganter sein

Subjektive Vorschläge sind keine Blocker.

## 8. Rechtschreibung und Textqualität

Prüfe sämtliche sichtbaren deutschen Texte auf:

- Rechtschreibung
- Grammatik
- Zeichensetzung
- Groß- und Kleinschreibung
- Tippfehler
- doppelte Wörter
- fehlende Wörter
- unvollständige Sätze
- fehlerhafte Leerzeichen
- falsche Anführungszeichen
- falsche Bindestriche
- unerwünschte weiche Trennzeichen
- kaputte Sonderzeichen
- uneinheitliche Schreibweisen
- uneinheitliche Anrede
- unnötige englische Begriffe
- Platzhaltertexte
- Demotexte
- Lorem ipsum
- wiederholte Inhalte
- widersprüchliche Aussagen zwischen Seiten

Prüfe besonders:

- Navigation
- Überschriften
- Buttons
- Leistungsbezeichnungen
- FAQ
- Stellenangebote
- Formularbeschriftungen
- Hilfetexte
- Fehlermeldungen
- Erfolgsmeldungen
- Kontaktinformationen
- Footer
- Seitentitel
- Meta-Beschreibungen
- Open-Graph-Texte
- Alternativtexte
- 404-Seite

Prüfe Unternehmensangaben auf Konsistenz:

- Unternehmensname
- sichtbarer Markenname
- Anschrift
- Ort
- Telefonnummer
- E-Mail-Adresse
- Öffnungszeiten
- Versorgungsgebiet
- Ansprechpartner
- Preise, sofern vorhanden

Wichtige Einschränkungen:

- Unternehmensdaten nicht eigenmächtig verändern.
- Preise nicht eigenmächtig verändern.
- Leistungsversprechen nicht eigenmächtig verändern.
- fachliche Aussagen nicht ohne sichere Grundlage korrigieren.
- Rechtstexte nicht sprachlich oder inhaltlich bearbeiten.
- Bei möglichen fachlichen Fehlern eine manuelle Prüfung verlangen.
- Bei offensichtlichen Tippfehlern genaue Fundstelle und Korrektur nennen.

## 9. Formulare

Prüfe jedes Formular einzeln:

- eindeutige Beschriftungen
- Labels sind richtig zugeordnet
- Pflichtfelder sind erkennbar
- Pflichtfeldlogik funktioniert
- verständliche deutsche Fehlermeldungen
- Fehler stehen am richtigen Feld
- Fokus springt sinnvoll zum ersten Fehler
- Erfolgsmeldung ist erreichbar und sichtbar
- Fokusverhalten nach erfolgreichem Absenden
- passende Eingabetypen
- sinnvolle Autocomplete-Werte
- Radiogruppen
- Checkboxen
- Fieldset und Legend, sofern passend
- Datei-Uploads
- Datenschutzbestätigung
- Mehrfachabsendung
- Ladezustand
- Fehler bei fehlgeschlagener Übermittlung
- Formulardaten werden nicht unbeabsichtigt gelöscht
- mobile Bedienbarkeit
- sichtbarer Fokus
- Tastaturbedienung
- keine unnötige Abfrage vertraulicher Daten
- keine Passwortabfrage in ungeeigneten Formularen
- richtiger Ziel- oder Empfängerweg, soweit aus dem Code erkennbar

Sende keine echten Kontaktanfragen, Bewerbungen oder Kundendaten, sofern keine ausdrücklich sichere Testumgebung und Erlaubnis vorhanden ist.

Kennzeichne eine nicht wirklich getestete Übermittlung als manuell offen.

## 10. Themes

Nur prüfen, wenn Themes vorhanden sind:

- Hellmodus
- Dunkelmodus
- Systemmodus
- Theme-Auswahl wird gespeichert
- Theme bleibt nach Neuladen erhalten
- Systemmodus reagiert auf die Betriebssystemeinstellung
- keine Hydration-Warnung
- kein getServerSnapshot-Fehler
- keine Endlosschleife
- kein Flackern mit falschem Theme
- keine unlesbaren Komponenten
- keine widersprüchlichen Theme-Klassen
- keine Elemente, die nur in einem Modus sichtbar sind
- Markenflächen behalten ihren vorgesehenen Kontrast
- Modusauswahl ist per Tastatur bedienbar

## 11. Animationen und reduzierte Bewegung

Prüfe:

- Inhalte bleiben auch ohne JavaScript beziehungsweise vor der Animation sichtbar, sofern dies das Projekt vorsieht
- Reveal-Komponenten verstecken Inhalte nicht dauerhaft
- reduzierte Bewegung wird berücksichtigt
- Animationen verursachen keine Layoutsprünge
- Akkordeons öffnen und schließen ordentlich
- keine hektischen oder wiederholt störenden Bewegungen
- keine Animation blockiert die Bedienung
- Fokus wird nicht durch Animationen verschoben

## 12. Barrierearme Bedienung

Prüfe soweit technisch und visuell möglich:

- sinnvolle HTML-Struktur
- Sprache des Dokuments
- genau ein sinnvoller Hauptinhalt
- Skip-Link
- Überschriftenhierarchie
- Navigation
- Tastaturbedienung
- sichtbarer Fokus
- Fokusfalle in geöffneten Menüs oder Dialogen
- Escape schließt geeignete Elemente
- Fokus kehrt sinnvoll zurück
- ausreichende Bedienflächengröße
- Formularbeschriftungen
- verständliche Linktexte
- alternative Bildtexte
- dekorative Bilder korrekt behandelt
- ARIA nur dort verwendet, wo erforderlich
- Statusmeldungen sinnvoll angekündigt
- reduzierte Bewegung
- ausreichende Kontraste
- Zoom beziehungsweise große Schrift verursacht keine offensichtlichen Layoutprobleme

Behaupte keine vollständige Barrierefreiheit, wenn keine geeignete manuelle und automatische Prüfung stattgefunden hat.

## 13. Bilder und Medien

Prüfe:

- fehlende Dateien
- falsche Pfade
- kaputte Bilder
- sinnvolle Alternativtexte
- dekorative Bilder
- Größenattribute
- responsive sizes-Angaben
- Priorisierung wichtiger Bilder
- unnötig große Dateien
- auffällige Komprimierungsprobleme
- Seitenverhältnis
- Bildausschnitt
- Layoutverschiebungen
- doppelte oder nicht mehr verwendete Dateien
- Social-Media-Vorschaubilder
- Icons
- Favicon
- Apple-Touch-Icon

Bildrechte und Einwilligungen können nicht technisch bestätigt werden und müssen als manuelle Freigabe markiert werden.

## 14. Metadaten und Suchmaschinen

Prüfe projektabhängig:

- individuelle Seitentitel
- Meta-Beschreibungen
- Canonical-Angaben
- Favicon
- Apple-Touch-Icon
- Manifest
- Open-Graph-Daten
- Social-Media-Vorschaubild
- robots-Konfiguration
- Sitemap
- Indexierungsstatus
- Demo-Websites sind nicht versehentlich öffentlich indexierbar
- echte Kundenwebsites sind nicht versehentlich auf noindex gesetzt
- keine Vorschauadresse in öffentlichen Metadaten
- korrekte Domain
- korrekte Unternehmensdaten
- strukturierte Daten nur, wenn inhaltlich richtig
- keine falschen Standorte oder Leistungen

## 15. Code- und Restesuche

Suche projektweit nach:

- TODO
- FIXME
- debugger
- console.log
- localhost
- 127.0.0.1
- Lorem ipsum
- Beispiel
- Platzhalter
- Demo
- Testdaten
- Test-E-Mail-Adressen
- provisorischen Telefonnummern
- href="#"
- leeren Links
- deaktiviertem Code
- großen auskommentierten Codeblöcken
- Konfliktmarkern
- nicht verwendeten Imports
- offensichtlich nicht verwendeten Komponenten
- doppelten Komponenten
- hart codierten Produktionsdaten an unerwarteten Stellen
- versehentlich eingebundenen Zugangsdaten
- Tokens
- privaten Schlüsseln
- eingecheckten .env-Dateien

Bewerte jede Fundstelle im Zusammenhang.

Das Wort „Demo“ ist bei einer ausdrücklich gekennzeichneten Demowebsite nicht automatisch ein Fehler.

## 16. Datenschutz und technische Sicherheit

Führe keine Rechtsberatung und keine rechtliche Prüfung durch.

Prüfe technisch:

- keine Zugangsdaten im Repository
- keine geheimen API-Schlüssel
- keine privaten Schlüssel
- keine sensiblen .env-Dateien
- keine ungeschützten administrativen Bereiche
- keine offensichtlich unsichere Ausgabe von Nutzereingaben
- kein unnötiges dangerouslySetInnerHTML
- externe Skripte und Dienste sind nachvollziehbar
- Trackingdienste sind nicht versehentlich eingebunden
- Formulare übertragen Daten nur an vorgesehene Dienste
- externe Links mit neuem Fenster besitzen geeignete Sicherheitsattribute
- Impressum ist erreichbar
- Datenschutz ist erreichbar

Markiere Rechtstexte, Cookie-Fragen und Einwilligungen als manuell beziehungsweise rechtlich zu prüfen.

## 17. Git- und Veröffentlichungsstatus

Prüfe:

- Git-Status
- noch nicht gespeicherte Änderungen
- uncommittete Änderungen
- nicht verfolgte Dateien
- sensible Dateien
- passende .gitignore
- keine offenen Merge-Konflikte
- keine Konfliktmarker
- keine versehentlichen Build-Ausgaben
- keine unnötigen großen Dateien
- letzter relevanter Commit ist nachvollziehbar
- lokale Version und vorgesehener Veröffentlichungsstand sind nachvollziehbar

Nichts committen, pushen oder deployen.

## 18. Manuelle Prüfliste erstellen

Erstelle eine konkrete manuelle Prüfliste für alles, was nicht zuverlässig geprüft werden konnte.

Nicht nur allgemein „Design prüfen“ schreiben.

Beispiel:

- Karriereseite bei 390 Pixeln im Hellmodus prüfen
- Text des sekundären Buttons im unteren CTA kontrollieren
- Timeline auf der Karriereseite bei 1280 Pixeln kontrollieren
- Testnachricht des Kontaktformulars in der Produktionsumgebung bestätigen
- Spam-Ordner des vorgesehenen Empfängers prüfen

## 19. Abschlussbericht

Ordne alle Ergebnisse diesen Kategorien zu:

### Blocker

Fehler, die vor der Veröffentlichung zwingend behoben werden müssen.

### Wichtige Probleme

Fehler, die Bedienung, Darstellung, Glaubwürdigkeit, Sicherheit oder wesentliche Inhalte beeinträchtigen.

### Kleinere Hinweise

Nicht kritische Verbesserungen.

### Subjektive Gestaltungsvorschläge

Optionale Designideen, die keine Fehler darstellen.

### Manuelle Prüfungen

Nicht zuverlässig automatisch geprüfte Punkte.

### Bestandene Prüfungen

Tatsächlich erfolgreich durchgeführte Prüfungen.

Nenne bei jedem Fehler:

- genaue Seite
- genaue Komponente oder Datei
- Bildschirmbreite, falls relevant
- Theme, falls relevant
- beobachtetes Verhalten
- erwartetes Verhalten
- wahrscheinliche Ursache
- empfohlene Korrekturrichtung

Schließe exakt mit:

Projektabschlussprüfung

- Lint: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Typecheck: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Tests: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Build: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Seiten und Navigation: Bestanden / Probleme gefunden / Manuell zu prüfen
- Formulare: Bestanden / Probleme gefunden / Manuell zu prüfen
- Responsive Darstellung: Bestanden / Probleme gefunden / Manuell zu prüfen
- Visuelle Designprüfung: Bestanden / Probleme gefunden / Manuell zu prüfen
- Farben und Kontraste: Bestanden / Probleme gefunden / Manuell zu prüfen
- Linien und Ausrichtungen: Bestanden / Probleme gefunden / Nicht relevant / Manuell zu prüfen
- Rechtschreibung und Textqualität: Bestanden / Fundstellen vorhanden / Manuell zu prüfen
- Barrierearme Bedienung: Bestanden / Hinweise vorhanden / Manuell zu prüfen
- Themes: Bestanden / Probleme gefunden / Nicht vorhanden
- Metadaten und Indexierung: Bestanden / Probleme gefunden / Nicht relevant
- Datenschutz und Sicherheit: Keine technischen Probleme gefunden / Probleme gefunden / Manuell zu prüfen
- Platzhalter und Testdaten: Keine gefunden / Fundstellen vorhanden
- Git-Status: Sauber / Offene Änderungen / Probleme gefunden
- Offene Blocker: Anzahl
- Offene wichtige Probleme: Anzahl
- Offene manuelle Prüfungen: Anzahl
- Veröffentlichung empfohlen: Ja / Nein / Erst nach genannten Korrekturen

Begründe die Veröffentlichungsempfehlung in höchstens fünf klaren Sätzen.
