# Finaler Website-Projektcheck – Korrekturmodus

Behebe die objektiven Fehler aus dem unmittelbar vorherigen Bericht von /final-audit.

## Grundregeln

- Arbeite ausschließlich anhand konkreter Fundstellen.
- Behebe zuerst Blocker.
- Behebe danach wichtige Probleme.
- Verändere funktionierende Bereiche nicht ohne Grund.
- Führe kein allgemeines Redesign durch.
- Ändere keine freigegebenen Unternehmensinformationen.
- Ändere keine Preise.
- Ändere keine fachlichen Leistungsangaben ohne sichere Grundlage.
- Ändere keine Rechtstexte.
- Entferne keine Funktionen nur, damit ein Test besteht.
- Unterdrücke keine Warnungen anstelle einer echten Fehlerbehebung.
- Verwende kein pauschales eslint-disable.
- Verwende kein pauschales suppressHydrationWarning.
- Verwende kein !important als erste Standardlösung.
- Installiere keine neuen Pakete, sofern der Fehler mit vorhandenen Mitteln sauber behoben werden kann.
- Erstelle keinen Commit.
- Führe keinen Git-Push durch.
- Löse kein Deployment aus.

## Vor Beginn

Erstelle zunächst eine kurze Liste:

- zu behebende Blocker
- zu behebende wichtige Probleme
- objektive kleinere Fehler, die sicher korrigiert werden können
- Punkte, die vor einer Änderung eine Rückfrage benötigen

Bei subjektiven Designwünschen oder unklaren Unternehmensformulierungen:

- nicht eigenmächtig ändern
- konkrete Rückfrage stellen

## Automatisch korrigierbare objektive Fehler

Objektive Fehler dürfen gezielt korrigiert werden, beispielsweise:

- unlesbare Buttonbeschriftungen
- falsche Textfarbe
- fehlender Kontrast
- widersprüchliche Theme- oder Tailwind-Klassen
- Linien, die nicht durch Marker oder Zahlen verlaufen
- versetzte Punkte
- nicht zentrierte Nummern
- überlappende Elemente
- abgeschnittene Inhalte
- horizontales Scrollen
- kaputte Links
- falsche Dateipfade
- nicht erreichbare Seiten
- technische Formularfehler
- falsche Fokussteuerung
- Hydration-Warnungen
- instabile Store-Snapshots
- offensichtliche Rechtschreibfehler
- doppelte Wörter
- kaputte Sonderzeichen
- eindeutige Zeichensetzungsfehler
- inkonsistente Schreibweise desselben sichtbaren Begriffs

## Nicht ohne Rückfrage ändern

- grundlegende Gestaltung
- Branding und Farbkonzept
- Unternehmensname
- Telefonnummern
- E-Mail-Adressen
- Anschriften
- Preise
- Leistungen
- fachliche Aussagen
- Kundenversprechen
- Stellenbedingungen
- rechtliche Texte
- Inhalte, bei denen ein Tippfehler nicht eindeutig von einer beabsichtigten Formulierung unterschieden werden kann

## Vorgehensweise

1. Ordne jedes Problem einer Datei, Komponente oder Route zu.
2. Ermittle die tatsächliche Ursache.
3. Behebe die Ursache mit möglichst kleinen Änderungen.
4. Vermeide redundante lokale Klassen, wenn eine saubere Komponentenvariante sinnvoller ist.
5. Verändere globale Komponenten nur, wenn die Änderung für alle Verwendungen korrekt ist.
6. Verwende bei besonderen Hintergründen eine klar benannte Komponentenvariante, statt widersprüchliche Klassen anzuhängen.
7. Prüfe nach jeder zusammengehörigen Änderung auf Regressionen.
8. Prüfe die betroffene Seite in allen relevanten Bildschirmgrößen.
9. Prüfe bei Farbfehlern alle vorhandenen Themes.
10. Prüfe bei Linien- oder Markerfehlern mobile und Desktopdarstellung.
11. Prüfe bei Textkorrekturen alle weiteren Vorkommen desselben Begriffs.
12. Führe anschließend alle vorhandenen Prüfskripte aus.
13. Führe den Produktions-Build erneut aus.
14. Wiederhole die relevanten visuellen Prüfungen.
15. Prüfe, ob durch die Änderungen neue Fehler entstanden sind.

## Besondere Regeln für Farb- und Buttonfehler

Bei einem unsichtbaren oder schlecht lesbaren Button:

- genaue Buttoninstanz identifizieren
- Hintergrund und Theme berücksichtigen
- globale und lokale Klassen prüfen
- Klassenreihenfolge nicht blind als sichere Überschreibung behandeln
- vorhandene className-Helfer berücksichtigen
- bei Bedarf eine semantische Variante wie secondaryOnBrand verwenden
- normale Buttons auf hellen Flächen nicht verschlechtern
- Normal-, Hover-, Fokus- und Active-Zustand prüfen

## Besondere Regeln für Linien und Marker

Bei Timelines oder Prozessdarstellungen:

- Linie und Marker auf dieselbe Achse setzen
- Linie hinter den Markern platzieren
- Marker mit geeignetem z-index darüber platzieren
- Zahlen horizontal und vertikal zentrieren
- gleiche Gridbreite für Linie, Marker und Inhalte verwenden
- keine unabhängig verschobenen Liniensegmente verwenden, wenn eine gemeinsame Rail stabiler ist
- mobile Sonderdarstellung erhalten
- Desktop- und Tabletbreiten prüfen

## Besondere Regeln für Rechtschreibung

Offensichtliche Tippfehler dürfen korrigiert werden.

Bei jeder Korrektur:

- vorherigen Text dokumentieren
- neuen Text dokumentieren
- Fundstelle nennen

Keine automatische Bearbeitung von:

- Impressum
- Datenschutzerklärung
- AGB
- fachlich sensiblen Unternehmensangaben
- Zitaten oder Kundenstimmen ohne Freigabe

## Abschlussprüfung

Führe erneut aus, soweit vorhanden:

- Lint
- Typecheck
- Tests
- Produktions-Build

Wiederhole anschließend die relevanten Teile des visuellen Audits.

## Abschlussbericht

Liste:

- behobene Blocker
- behobene wichtige Probleme
- behobene objektive kleinere Fehler
- bewusst nicht geänderte Punkte
- offene Rückfragen
- geänderte Dateien
- ausgeführte Befehle
- Ergebnisse
- verbleibende manuelle Prüfungen
- mögliche Regressionen oder Risiken

Schließe exakt mit:

Projektkorrektur abgeschlossen

- Blocker behoben: Ja / Nein
- Wichtige Probleme behoben: Ja / Nein
- Visuelle Fehler behoben: Ja / Nein / Nicht vorhanden
- Rechtschreibfehler behoben: Ja / Nein / Nicht vorhanden
- Lint: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Typecheck: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Tests: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Build: Bestanden / Fehlgeschlagen / Nicht vorhanden
- Neue Fehler gefunden: Ja / Nein
- Manuelle Prüfungen offen: Anzahl
- Bereit für eigenes Review: Ja / Nein
- Bereit für Live-Deployment: Ja / Nein

Nichts committen, pushen oder deployen, solange dies nicht ausdrücklich angefordert wurde.
