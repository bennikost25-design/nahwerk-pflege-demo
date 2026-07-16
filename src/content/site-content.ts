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
  /**
   * Zentrale Indexierungssteuerung.
   * false = Demo nicht wie ein realer Pflegedienst indexieren.
   * true erst setzen, wenn echte Kundendaten und rechtliche Seiten stehen.
   */
  allowIndexing: false,
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
    note: "Den konkreten Umfang stimmen wir im Erstgespräch individuell mit Ihnen ab.",
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
      "Ärztliche Behandlung und Diagnostik bleiben beim Ärzteteam",
    ],
    note: "Welche Maßnahmen möglich sind, richtet sich nach der ärztlichen Verordnung und der jeweiligen Zuständigkeit.",
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
    note: "Welche Aufgaben sinnvoll sind, stimmen wir realistisch auf Ihre Kräfte und Prioritäten ab.",
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
      "Orientierung statt verbindlicher Kosten- oder Rechtsauskunft",
    ],
    note: "Die Beratung ersetzt keine individuelle sozialrechtliche oder ärztliche Auskunft.",
  },
] as const;

export const servicesPage = {
  hero: {
    eyebrow: "Unsere Leistungen",
    title: "Unterstützung, die sich am Alltag orientiert.",
    description:
      "Unterstützung wird individuell abgestimmt. Gewohnheiten und der tatsächliche Bedarf stehen im Mittelpunkt – im persönlichen Gespräch klären wir den konkreten Umfang.",
    asideNote: "Was tatsächlich sinnvoll und möglich ist, klären wir gemeinsam.",
  },
  clarify: {
    eyebrow: "Was wir gemeinsam klären",
    title: "Nicht jede Unterstützung passt zu jeder Situation.",
    description:
      "Bevor wir starten, besprechen wir die wichtigsten Rahmenbedingungen – ruhig, nachvollziehbar und ohne voreilige Zusagen.",
    points: [
      "Aktueller Unterstützungsbedarf",
      "Persönliche Gewohnheiten und Prioritäten",
      "Ärztliche Verordnungen, sofern erforderlich",
      "Mögliche Zeiten und Versorgungsgebiet",
      "Einbeziehung von Angehörigen, wenn gewünscht",
    ],
  },
  counseling: {
    eyebrow: "Beratung",
    title: "Orientierung beginnt mit den richtigen Fragen.",
    description:
      "Im Beratungsgespräch geht es um Alltag, Kräfte und mögliche Unterstützung – ruhig und verständlich. Offene Fragen sind willkommen.",
    topics: [
      "Was wird im Alltag gebraucht?",
      "Welche Unterstützung ist grundsätzlich denkbar?",
      "Welche Ansprechpartner oder nächsten Schritte sind relevant?",
    ],
    note: "Beratung ersetzt keine ärztliche oder verbindliche sozialrechtliche Auskunft.",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Wichtige Antworten zu unseren Leistungen",
    description:
      "Eine erste Orientierung zu Möglichkeiten, Grenzen und dem persönlichen Gespräch.",
  },
  cta: {
    eyebrow: "Persönlich klären",
    title: "Welche Unterstützung passt zu Ihrer Situation?",
    description:
      "Im unverbindlichen Erstgespräch geht es um Ihren Alltag, offene Fragen und mögliche nächste Schritte.",
    phoneNote: "Unverbindlich und ohne Verpflichtung.",
  },
} as const;

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
  eyebrow: "Für Angehörige",
  statement:
    "Gut informiert zu sein, nimmt nicht jede Sorge – aber viel Unsicherheit.",
  title: "Für Angehörige mitgedacht",
  text: "Angehörige brauchen klare Ansprechpartner, nachvollziehbare Absprachen und verständliche Informationen. Wir nehmen uns Zeit für Fragen und halten wichtige Punkte so fest, dass alle Beteiligten den Überblick behalten.",
  points: [
    {
      title: "Klare Ansprechpartner",
      description:
        "Sie wissen, wer erreichbar ist – bei Rückfragen zur Versorgung und im Alltag.",
    },
    {
      title: "Nachvollziehbare Absprachen",
      description:
        "Termine, Zuständigkeiten und nächste Schritte werden verständlich festgehalten.",
    },
    {
      title: "Verständliche Informationen",
      description:
        "Wir erklären, was möglich ist und was als Nächstes ansteht – in ruhiger Sprache.",
    },
  ],
} as const;

export const employerPromises = [
  {
    title: "Planbare Dienstzeiten",
    description:
      "Dienstpläne mit Vorlauf und nachvollziehbaren Absprachen im Team.",
  },
  {
    title: "Strukturierte Einarbeitung",
    description:
      "Einführung in Touren, Dokumentation und Teamabläufe – Schritt für Schritt.",
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

export const homeCopy = {
  trust: {
    eyebrow: "Darauf können Sie sich verlassen",
    title: "Persönlich begleitet. Klar abgestimmt.",
    description:
      "Was uns im Alltag der ambulanten Pflege wichtig ist – für Sie und Ihre Angehörigen.",
  },
  services: {
    eyebrow: "Leistungen",
    title: "Unterstützung, die zum Alltag passt",
    description:
      "Unterstützung wird dann hilfreich, wenn sie zum persönlichen Alltag, zu Gewohnheiten und zum tatsächlichen Bedarf passt.",
  },
  process: {
    title: "Von der ersten Frage bis zur passenden Unterstützung",
    description:
      "Drei nachvollziehbare Schritte – in Ruhe, verständlich und ohne Druck.",
  },
  career: {
    eyebrow: "Arbeiten bei Nahwerk",
    title: "Gute Pflege braucht gute Bedingungen.",
    description:
      "Verlässliche Absprachen, klare Einarbeitung und erreichbare Leitung – damit Teamarbeit im Alltag trägt.",
    highlight: "Kurzbewerbung ohne Lebenslauf",
  },
  contact: {
    eyebrow: "Nächster Schritt",
    title: "Lassen Sie uns in Ruhe über Ihre Situation sprechen.",
    description:
      "Schildern Sie, worum es geht – wir hören zu und klären gemeinsam die nächsten Schritte.",
    phoneNote: "Unverbindlich und ohne Verpflichtung.",
  },
  faq: {
    eyebrow: "Orientierung",
    title: "Häufige Fragen",
    description:
      "Kurze Antworten für Pflegebedürftige und Angehörige – in ruhiger Sprache.",
  },
} as const;

export const careersNote =
  "Orientierung für Bewerberinnen und Bewerber – keine geprüften realen Arbeitsbedingungen." as const;

export const jobs = [
  {
    id: "pflegefachkraft",
    title: "Pflegefachkraft",
    roleKey: "Pflegefachkraft",
    description:
      "Sie begleiten Menschen zu Hause, stimmen Versorgung ab und sind fester Ansprechpartner im Team.",
    workModels: ["Teilzeit", "Vollzeit", "flexible Tagdienste"],
    requirements: [
      "Abgeschlossene Ausbildung in der Pflege oder vergleichbare Qualifikation",
      "Sicheres, ruhiges Auftreten im Umgang mit Menschen",
      "Bereitschaft zu Touren im Versorgungsgebiet",
      "Führerschein von Vorteil",
    ],
  },
  {
    id: "pflegehilfskraft",
    title: "Pflegehilfskraft",
    roleKey: "Pflegehilfskraft",
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
    roleKey: "Hauswirtschaft",
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

export const careerValues = [
  {
    title: "Respektvoller Umgang",
    description: "Mit Pflegebedürftigen, Angehörigen und im Team.",
  },
  {
    title: "Zuverlässigkeit",
    description: "Pünktliche Absprachen und verlässliche Touren.",
  },
  {
    title: "Verständliche Kommunikation",
    description: "Klare Worte statt Fachchinesisch im Alltag.",
  },
  {
    title: "Zusammenarbeit",
    description: "Abstimmung im Team und kurze Wege zu Kolleginnen und Kollegen.",
  },
] as const;

export const workdayHighlights = [
  {
    marker: "Tourenstart",
    title: "Morgenrunde und Tourenstart",
    description:
      "Kurze Abstimmung im Team, dann planbare Einsätze bei vertrauten Menschen.",
  },
  {
    marker: "Im Einsatz",
    title: "Zeit für Gespräche",
    description:
      "Neben praktischen Aufgaben bleibt Raum für Fragen von Pflegebedürftigen und Angehörigen.",
  },
  {
    marker: "Abschluss und Übergabe",
    title: "Dokumentation ohne Chaos",
    description:
      "Klare Abläufe helfen, das Wichtige festzuhalten – ohne unnötigen Papierkram.",
  },
] as const;

export const applicationSteps = [
  {
    step: "01",
    title: "Kurzbewerbung senden",
    description:
      "Mit wenigen Angaben melden Sie Interesse – ohne Lebenslauf-Upload.",
  },
  {
    step: "02",
    title: "Rückmeldung erhalten",
    description:
      "Sie erhalten eine Rückmeldung zu Ihrem Interesse und den nächsten Schritten.",
  },
  {
    step: "03",
    title: "Kennenlerngespräch",
    description:
      "Offenes Gespräch zu Erfahrungen, Wünschen und möglichen Einsatzzeiten.",
  },
] as const;

export const careerPage = {
  hero: {
    eyebrow: "Arbeiten bei Nahwerk",
    title: "Pflege soll nicht nur für andere funktionieren.",
    description:
      "Ein gutes Team braucht verlässliche Absprachen, ehrliche Kommunikation und Arbeitsbedingungen, die zum Leben passen.",
    highlightTitle: "Kurzbewerbung ohne Lebenslauf",
    highlightPoints: [
      "Wenige persönliche Angaben",
      "Gewünschte Tätigkeit und Stundenumfang auswählen",
      "Bevorzugte Kontaktart selbst bestimmen",
    ],
  },
  promises: {
    eyebrow: "Was gute Arbeit erleichtert",
    title: "Verlässlichkeit beginnt im eigenen Team.",
    description:
      "Gute Pflege braucht klare Organisation und erreichbare Ansprechpartner – auch damit der eigene Arbeitstag planbar bleibt.",
  },
  values: {
    eyebrow: "Was uns wichtig ist",
    title: "Fachlichkeit zählt. Haltung ebenso.",
  },
  jobs: {
    title: "Offene Stellen",
    note: "Demostellen einer fiktiven Website – ohne reale Ausschreibung und ohne Verpflichtung.",
  },
  workday: {
    title: "Arbeitsalltag",
    description:
      "Ein Arbeitstag besteht aus guter Vorbereitung, persönlicher Begleitung und klarer Dokumentation.",
  },
  process: {
    title: "Ablauf der Bewerbung",
    description:
      "Vom ersten Interesse bis zum Gespräch – in drei unkomplizierten Schritten.",
  },
  apply: {
    eyebrow: "Kurzbewerbung",
    title: "Der erste Schritt braucht keinen perfekten Lebenslauf.",
    description:
      "Mit wenigen Angaben zeigen Sie Interesse. Wir melden uns auf dem von Ihnen gewünschten Weg.",
    benefits: [
      "In wenigen Minuten ausgefüllt",
      "Kein Lebenslauf-Upload",
      "Kontakt per Telefon oder E-Mail wählbar",
    ],
    demoNote:
      "Demoformular: Es werden keine Angaben gespeichert oder versendet.",
  },
  faq: {
    eyebrow: "Noch Fragen?",
    title: "Wichtige Antworten vor dem ersten Gespräch",
    description:
      "Kurze Orientierung zu Kurzbewerbung, Daten und möglichen Arbeitszeiten.",
  },
} as const;

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
      "Nein. Die Seiten erklären typische Themen in verständlicher Sprache. Verbindliche Absprachen entstehen im persönlichen Gespräch.",
  },
] as const;

export const pageMeta = {
  home: {
    title: "Ambulante Pflege in Erfurt",
    description:
      "Fiktive Website-Demo für einen ambulanten Pflegedienst in Erfurt: Erstgespräch anfragen oder unkompliziert bewerben. Kein realer Pflegedienst.",
  },
  leistungen: {
    title: "Leistungen",
    description:
      "Grundpflege, Behandlungspflege, Haushaltshilfe sowie Beratung und Entlastung – Beispielleistungen einer fiktiven Website-Demo.",
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

/** Öffentliche Routen für Sitemap und Canonicals */
export const publicRoutes = [
  "/",
  "/leistungen",
  "/karriere",
  "/kontakt",
  "/impressum",
  "/datenschutz",
] as const;
