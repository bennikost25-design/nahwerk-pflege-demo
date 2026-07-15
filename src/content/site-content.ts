/**
 * Zentrale Inhaltskonfiguration für die Demo-Website.
 * Alle Unternehmensdaten, Texte und Navigation hier anpassen –
 * Komponenten bleiben unverändert.
 */

export const siteConfig = {
  name: "Nahwerk Pflege",
  tagline: "Ambulante Pflege in Erfurt",
  demoNotice: "Demo-Projekt – fiktiver Pflegedienst",
  demoDisclaimer:
    "Alle Angaben auf dieser Website sind fiktiv und dienen ausschließlich Demonstrationszwecken.",
  /** Kanonische Demo-URL */
  url: "https://nahwerk-pflege-demo.vercel.app",
  locale: "de_DE",
  language: "de",
} as const;

export const contact = {
  isDemo: true as const,
  phone: "0361 000000",
  phoneHref: "tel:+49361000000",
  email: "hallo@nahwerk-demo.de",
  emailHref: "mailto:hallo@nahwerk-demo.de",
  address: {
    street: "Musterstraße 12",
    zip: "99084",
    city: "Erfurt",
    full: "Musterstraße 12, 99084 Erfurt",
  },
  serviceArea: "Erfurt und nähere Umgebung",
  hours: [
    { days: "Montag – Freitag", time: "8:00 – 16:00 Uhr" },
    { days: "Samstag", time: "nach Vereinbarung" },
    { days: "Sonntag", time: "geschlossen" },
  ],
  note: "Demo-Angaben – kein realer Pflegedienst.",
} as const;

export const navigation = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const footerNav = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/karriere", label: "Karriere" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;

export const cta = {
  primary: {
    label: "Unverbindliches Erstgespräch",
    shortLabel: "Erstgespräch",
    href: "/kontakt",
  },
  secondary: {
    label: "In 60 Sekunden bewerben",
    shortLabel: "Bewerben",
    href: "/karriere#bewerbung",
  },
  career: {
    label: "Zur Karriereseite",
    href: "/karriere",
  },
} as const;

export const principles = [
  {
    title: "Feste Ansprechpartner",
    description:
      "Sie wissen, wer für Sie zuständig ist – bei Fragen zur Versorgung und bei Absprachen im Alltag.",
  },
  {
    title: "Verständliche Beratung",
    description:
      "Wir erklären Leistungen, Abläufe und Möglichkeiten in ruhiger Sprache, ohne Fachjargon.",
  },
  {
    title: "Verlässliche Planung",
    description:
      "Termine und Touren werden nachvollziehbar abgestimmt, damit Ihr Alltag planbar bleibt.",
  },
] as const;

export const services = [
  {
    id: "grundpflege",
    title: "Grundpflege",
    short:
      "Unterstützung bei Körperpflege, Mobilität und Alltagsroutine – abgestimmt auf Ihren Tagesrhythmus.",
    featured: true,
    details: [
      "Hilfe bei der Körperpflege und beim Ankleiden",
      "Unterstützung beim Aufstehen, Gehen und Lagern",
      "Begleitung bei Mahlzeiten, soweit sinnvoll und gewünscht",
      "Achtung der Privatsphäre und Gewohnheiten",
    ],
    note: "Der konkrete Umfang wird im Erstgespräch individuell geklärt.",
  },
  {
    id: "behandlungspflege",
    title: "Behandlungspflege",
    short:
      "Durchführung ärztlich verordneter Maßnahmen im häuslichen Umfeld – in enger Abstimmung mit Ihrem Ärzteteam.",
    featured: false,
    details: [
      "Umsetzung ärztlicher Verordnungen im Alltag",
      "Sorgfältige Dokumentation und Rückmeldung",
      "Absprachen mit Angehörigen und behandelnden Fachpersonen",
      "Kein Ersatz für ärztliche Behandlung oder Diagnosen",
    ],
    note: "Nur nach ärztlicher Verordnung und im Rahmen der jeweiligen Zuständigkeit.",
  },
  {
    id: "haushalt",
    title: "Unterstützung im Haushalt",
    short:
      "Praktische Hilfe im Haushalt, damit Wohnung und Tagesablauf überschaubar bleiben.",
    featured: false,
    details: [
      "Unterstützung bei Einkauf und einfacher Haushaltsführung",
      "Hilfe beim Wäschewaschen und Aufräumen",
      "Entlastung bei wiederkehrenden Alltagstätigkeiten",
      "Abstimmung auf Ihre Prioritäten und Kräfte",
    ],
    note: "Nicht jede Aufgabe ist immer möglich – wir klären realistische Unterstützung.",
  },
  {
    id: "beratung",
    title: "Beratung und Entlastung",
    short:
      "Orientierung für Pflegebedürftige und Angehörige: Was ist möglich, was kommt als Nächstes, wer hilft weiter?",
    featured: false,
    details: [
      "Erste Orientierung zu Pflegebedarf und Versorgungsformen",
      "Gespräche zu Entlastungsmöglichkeiten für Angehörige",
      "Hinweise zu Abläufen und Ansprechpartnern",
      "Keine Rechts- oder Kostenberatung mit verbindlicher Wirkung",
    ],
    note: "Beratung ersetzt keine individuelle sozialrechtliche Auskunft.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Kontakt aufnehmen",
    description:
      "Per Telefon, E-Mail oder Formular melden Sie sich unverbindlich – wir finden einen passenden Gesprächstermin.",
  },
  {
    step: "02",
    title: "Persönlichen Bedarf besprechen",
    description:
      "Im Erstgespräch geht es um Alltag, Unterstützungswünsche und Rahmenbedingungen – ohne Druck.",
  },
  {
    step: "03",
    title: "Versorgung gemeinsam planen",
    description:
      "Wenn es passt, stimmen wir Leistungen, Zeiten und Ansprechpartner nachvollziehbar ab.",
  },
] as const;

export const relativesContent = {
  title: "Für Angehörige mitgedacht",
  text: "Angehörige brauchen klare Ansprechpartner, nachvollziehbare Absprachen und verständliche Informationen. Wir nehmen uns Zeit für Fragen und halten wichtige Punkte so fest, dass alle Beteiligten den Überblick behalten – ohne medizinische Versprechen und ohne leere Zusicherungen.",
} as const;

export const employerPromises = [
  {
    title: "Planbare Dienstzeiten",
    description:
      "Dienstpläne mit Vorlauf und nachvollziehbaren Absprachen – als Beispiel für gute Arbeitsorganisation.",
  },
  {
    title: "Strukturierte Einarbeitung",
    description:
      "Einführung in Touren, Dokumentation und Teamabläufe, statt „einfach loslaufen“.",
  },
  {
    title: "Erreichbare Leitung",
    description:
      "Offene Türen für Rückfragen und Schwierigkeiten – nicht nur auf dem Papier.",
  },
  {
    title: "Bezahlte Fortbildungen",
    description:
      "Zeit und Raum für Lernen im Arbeitsalltag – damit Weiterentwicklung planbar bleibt.",
  },
] as const;

export const careersNote =
  "Orientierung für Bewerberinnen und Bewerber – keine geprüften realen Arbeitsbedingungen." as const;

export const jobs = [
  {
    id: "pflegefachkraft",
    title: "Pflegefachkraft",
    description:
      "Sie begleiten Menschen zu Hause, stimmen Versorgung ab und sind fester Ansprechpartner im Team.",
    workModels: ["Teilzeit", "Vollzeit", "flexible Tagdienste"],
    requirements: [
      "Abgeschlossene Ausbildung in der Pflege oder vergleichbare Qualifikation",
      "Sicheres, ruhiges Auftreten im Umgang mit Menschen",
      "Bereitschaft zu Touren im Versorgungsgebiet",
      "Führerschein von Vorteil (Beispielanforderung)",
    ],
  },
  {
    id: "pflegehilfskraft",
    title: "Pflegehilfskraft",
    description:
      "Sie unterstützen bei der Grundpflege und im Alltag – mit klarer Einarbeitung und erreichbaren Kolleginnen und Kollegen.",
    workModels: ["Teilzeit", "Minijob möglich", "Vormittagsdienste"],
    requirements: [
      "Erfahrung oder Interesse an Pflege und Unterstützung",
      "Zuverlässigkeit und Respekt im Umgang",
      "Teamfähigkeit und pünktliche Absprachen",
      "Deutschkenntnisse für Alltagsgespräche",
    ],
  },
  {
    id: "hauswirtschaft",
    title: "Mitarbeiter im Bereich Hauswirtschaft",
    description:
      "Sie entlasten Haushalte bei praktischen Aufgaben und arbeiten eng mit dem Pflegeteam zusammen.",
    workModels: ["Teilzeit", "stundenweise Einsätze", "Vormittag/Nachmittag"],
    requirements: [
      "Sicherheit bei hauswirtschaftlichen Tätigkeiten",
      "Freundlicher, diskreter Umgang in fremden Wohnungen",
      "Selbstständige Arbeitsweise nach Absprache",
      "Gute Erreichbarkeit im Stadtgebiet Erfurt",
    ],
  },
] as const;

export const applicationRoles = [
  "Pflegefachkraft",
  "Pflegehilfskraft",
  "Hauswirtschaft",
  "Sonstiges / noch offen",
] as const;

export const hoursOptions = [
  "Weniger als 20 Stunden",
  "20–30 Stunden",
  "30–35 Stunden",
  "Vollzeit",
  "Noch unklar",
] as const;

export const contactPreferences = [
  "Telefon",
  "E-Mail",
  "Beides ist in Ordnung",
] as const;

export const workdayHighlights = [
  {
    title: "Morgenrunde und Tourenstart",
    description:
      "Kurze Abstimmung im Team, dann planbare Einsätze bei vertrauten Menschen.",
  },
  {
    title: "Zeit für Gespräche",
    description:
      "Neben praktischen Aufgaben bleibt Raum für Fragen von Pflegebedürftigen und Angehörigen.",
  },
  {
    title: "Dokumentation ohne Chaos",
    description:
      "Klare Abläufe helfen, das Wichtige festzuhalten – ohne unnötigen Papierkram zur Schau zu stellen.",
  },
] as const;

export const applicationSteps = [
  {
    step: "01",
    title: "Kurzbewerbung senden",
    description:
      "Mit wenigen Angaben melden Sie Interesse – ohne Lebenslauf-Upload in dieser Demo.",
  },
  {
    step: "02",
    title: "Rückmeldung erhalten",
    description:
      "In einem realen Betrieb würde sich die Leitung melden. Hier wird der Ablauf nur simuliert.",
  },
  {
    step: "03",
    title: "Kennenlerngespräch",
    description:
      "Offenes Gespräch zu Erfahrungen, Wünschen und möglichen Einsatzzeiten.",
  },
] as const;

export const faqHome = [
  {
    question: "Was bedeutet ambulante Pflege zu Hause?",
    answer:
      "Ambulante Pflege unterstützt Menschen in der eigenen Wohnung – zum Beispiel bei der Körperpflege, bei ärztlich verordneten Maßnahmen oder im Haushalt. Ziel ist, den Alltag so lange wie möglich zu Hause zu gestalten.",
  },
  {
    question: "Wie läuft ein unverbindliches Erstgespräch ab?",
    answer:
      "Sie schildern Ihre Situation, wir hören zu und erklären mögliche Unterstützungsformen. Es entsteht noch keine Verpflichtung – weder zu einem Vertrag noch zu bestimmten Leistungen.",
  },
  {
    question: "Wer übernimmt die Kosten?",
    answer:
      "Das hängt von Pflegegrad, ärztlichen Verordnungen und individuellen Ansprüchen ab. In einem echten Beratungsgespräch würde man Ori­en­tie­rung geben; verbindliche Auskünfte zu Kosten oder Ansprüchen ersetzen wir hier bewusst nicht.",
  },
  {
    question: "Können Angehörige mit einbezogen werden?",
    answer:
      "Ja. Viele Gespräche finden gemeinsam statt. Angehörige erhalten nachvollziehbare Informationen und wissen, an wen sie sich bei Fragen wenden können.",
  },
  {
    question: "In welchem Gebiet wird versorgt?",
    answer:
      "In dieser Demo: Erfurt und nähere Umgebung. Ein realer Dienst würde das Versorgungsgebiet klar benennen und Grenzen transparent machen.",
  },
  {
    question: "Ist diese Website ein echter Pflegedienst?",
    answer:
      "Nein. Nahwerk Pflege ist ein fiktives Demo-Projekt. Alle Kontaktdaten, Stellen und Aussagen dienen der Illustration einer modernen Pflegedienst-Website.",
  },
] as const;

export const faqCareer = [
  {
    question: "Muss ich einen Lebenslauf hochladen?",
    answer:
      "In dieser Demo nicht. Das Kurzformular reicht für den ersten Kontakt. Ein realer Arbeitgeber würde später ggf. weitere Unterlagen anfordern.",
  },
  {
    question: "Werden meine Daten wirklich übermittelt?",
    answer:
      "Nein. In dieser Demo werden keine Formulardaten gespeichert oder versendet. Nach dem Absenden sehen Sie nur eine lokale Erfolgsmeldung.",
  },
  {
    question: "Gibt es feste Schichten?",
    answer:
      "Die Beispielstellen nennen mögliche Arbeitszeitmodelle. Konkrete Dienstzeiten würden in einem realen Gespräch geklärt – hier sind es Demonstrationstexte.",
  },
  {
    question: "Kann ich mich initiativ bewerben?",
    answer:
      "Ja. Wählen Sie im Formular „Sonstiges / noch offen“ und beschreiben Sie kurz, was Sie suchen.",
  },
] as const;

export const faqServices = [
  {
    question: "Welche Leistungen sind möglich?",
    answer:
      "Grundpflege, Behandlungspflege nach Verordnung, Unterstützung im Haushalt sowie Beratung und Entlastung. Der tatsächliche Umfang wird individuell geklärt.",
  },
  {
    question: "Wird jede Anfrage übernommen?",
    answer:
      "Nicht automatisch. Kapazitäten, Versorgungsgebiet und fachliche Passung spielen eine Rolle. Ein ehrlich geführtes Erstgespräch schafft Klarheit.",
  },
  {
    question: "Ersetzt die Website eine Beratung?",
    answer:
      "Nein. Die Seiten erklären typische Themen in verständlicher Sprache. Verbindliche Absprachen entstehen nur im persönlichen Kontakt – und in dieser Demo überhaupt nicht.",
  },
] as const;

export const pageMeta = {
  home: {
    title: "Ambulante Pflege in Erfurt (Demo)",
    description:
      "Demo-Website für einen fiktiven ambulanten Pflegedienst in Erfurt: Erstgespräch anfragen oder unkompliziert bewerben.",
  },
  leistungen: {
    title: "Leistungen",
    description:
      "Grundpflege, Behandlungspflege, Haushaltshilfe sowie Beratung und Entlastung – erläuterte Beispielleistungen einer Demo-Website.",
  },
  karriere: {
    title: "Karriere",
    description:
      "Beispielstellen und Kurzbewerbung für einen fiktiven ambulanten Pflegedienst. Keine echte Datenübertragung.",
  },
  kontakt: {
    title: "Kontakt",
    description:
      "Demo-Kontaktdaten und Formular ohne Datenübertragung. Unverbindliches Erstgespräch exemplarisch anfragen.",
  },
  impressum: {
    title: "Impressum",
    description:
      "Platzhalter-Impressum einer fiktiven Demo-Website. Keine rechtlich geprüfte Vorlage.",
  },
  datenschutz: {
    title: "Datenschutz",
    description:
      "Platzhalter-Datenschutzhinweise einer fiktiven Demo-Website. Keine rechtlich geprüfte Vorlage.",
  },
} as const;
