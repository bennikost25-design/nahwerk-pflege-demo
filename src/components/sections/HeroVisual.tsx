/**
 * Abstrakte Hero-Komposition: stilisierter Tagesplan / Pflegealltag.
 * Keine externe Bildquelle.
 */
export function HeroVisual() {
  return (
    <figure
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      aria-label="Abstrakte Darstellung eines ruhigen Pflegetagesplans"
    >
      <svg
        viewBox="0 0 420 460"
        className="h-auto w-full"
        role="img"
        aria-labelledby="hero-visual-title hero-visual-desc"
      >
        <title id="hero-visual-title">Stilisiertes Tagesfenster der ambulanten Pflege</title>
        <desc id="hero-visual-desc">
          Geometrische Formen und eine ruhige Tagesübersicht symbolisieren
          planbare Unterstützung zu Hause – ohne reale Personen oder Marken.
        </desc>

        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a5560" />
            <stop offset="100%" stopColor="#163a42" />
          </linearGradient>
          <linearGradient id="softGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e4ebe4" />
            <stop offset="100%" stopColor="#f4efe6" />
          </linearGradient>
        </defs>

        <rect x="24" y="36" width="372" height="400" rx="8" fill="url(#softGrad)" />
        <rect x="24" y="36" width="372" height="400" rx="8" fill="none" stroke="#d9d0c3" strokeWidth="1.5" />

        <g className="hero-float">
          <circle cx="340" cy="88" r="42" fill="#6f8574" opacity="0.35" />
          <circle cx="360" cy="110" r="28" fill="#b86a4b" opacity="0.28" />
        </g>

        <rect x="48" y="64" width="190" height="14" rx="3" fill="#163a42" opacity="0.9" />
        <rect x="48" y="90" width="120" height="8" rx="2" fill="#6f8574" opacity="0.7" />

        {/* Tagesplan-Blöcke */}
        <g transform="translate(48, 130)">
          <DayBlock y={0} label="Vormittag" width={280} accent="#2a5560" />
          <DayBlock y={78} label="Mittag" width={220} accent="#6f8574" />
          <DayBlock y={156} label="Nachmittag" width={250} accent="#b86a4b" muted />
        </g>

        <g transform="translate(48, 390)">
          <circle cx="10" cy="10" r="6" fill="#6f8574" />
          <rect x="28" y="5" width="140" height="10" rx="2" fill="#4a453f" opacity="0.45" />
          <circle cx="200" cy="10" r="6" fill="#b86a4b" opacity="0.7" />
          <rect x="218" y="5" width="100" height="10" rx="2" fill="#4a453f" opacity="0.35" />
        </g>

        {/* Dekorative Kurve */}
        <path
          d="M300 200 C340 220, 360 280, 310 340"
          fill="none"
          stroke="url(#heroGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </figure>
  );
}

function DayBlock({
  y,
  label,
  width,
  accent,
  muted = false,
}: {
  y: number;
  label: string;
  width: number;
  accent: string;
  muted?: boolean;
}) {
  return (
    <g transform={`translate(0, ${y})`}>
      <rect
        width={324}
        height={64}
        rx="6"
        fill="#fffcf7"
        stroke="#d9d0c3"
        strokeWidth="1"
      />
      <rect x="12" y="14" width="6" height="36" rx="2" fill={accent} />
      <text
        x="32"
        y="28"
        fill="#163a42"
        fontSize="13"
        fontFamily="Georgia, serif"
        fontWeight="600"
      >
        {label}
      </text>
      <rect
        x="32"
        y="38"
        width={width * 0.45}
        height="8"
        rx="2"
        fill={muted ? "#d9d0c3" : accent}
        opacity={muted ? 1 : 0.35}
      />
      <rect
        x="32"
        y="50"
        width={width * 0.28}
        height="6"
        rx="2"
        fill="#d9d0c3"
      />
    </g>
  );
}
