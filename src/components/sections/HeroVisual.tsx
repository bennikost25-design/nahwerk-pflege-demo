/**
 * Redaktionelle Hero-Illustration: ambulante Pflege zu Hause.
 * Lokale SVG – keine externen Bilder oder Marken.
 */
export function HeroVisual() {
  return (
    <figure className="relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-none">
      <svg
        viewBox="0 0 480 460"
        className="relative z-[1] h-auto w-full"
        role="img"
        aria-labelledby="hero-visual-title hero-visual-desc"
      >
        <title id="hero-visual-title">
          Stilisiertes Zuhause mit älterer Person und Pflegekraft
        </title>
        <desc id="hero-visual-desc">
          Eine ruhige Editorial-Illustration: Wohnraum mit Fensterlicht,
          eine ältere Person und eine Pflegekraft im gemeinsamen Alltag –
          symbolisch, ohne fotorealistische Gesichter.
        </desc>

        <defs>
          <linearGradient id="heroWall" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbf8f2" />
            <stop offset="100%" stopColor="#ebe4d6" />
          </linearGradient>
          <linearGradient id="heroLight" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#fffcf7" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#e4ebe4" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="heroFloor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#e4ebe4" />
            <stop offset="100%" stopColor="#d5ddd5" />
          </linearGradient>
          <radialGradient id="heroGlow" cx="55%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#fffcf7" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#e4ebe4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e4ebe4" stopOpacity="0" />
          </radialGradient>
          <clipPath id="heroSceneClip">
            <rect x="28" y="28" width="424" height="404" rx="28" />
          </clipPath>
        </defs>

        {/* Soft outer depth plate */}
        <ellipse
          cx="250"
          cy="430"
          rx="170"
          ry="18"
          fill="#163a42"
          opacity="0.06"
        />

        {/* Scene frame */}
        <rect
          x="28"
          y="28"
          width="424"
          height="404"
          rx="28"
          fill="url(#heroWall)"
        />
        <rect
          x="28"
          y="28"
          width="424"
          height="404"
          rx="28"
          fill="none"
          stroke="#d9d0c3"
          strokeWidth="1.25"
        />

        <g clipPath="url(#heroSceneClip)">
          {/* Ambient light wash from window */}
          <ellipse cx="318" cy="150" rx="140" ry="160" fill="url(#heroGlow)" />

          {/* Floor plane */}
          <path
            d="M28 318 C120 292, 360 292, 452 318 L452 432 L28 432 Z"
            fill="url(#heroFloor)"
          />
          <path
            d="M28 318 C120 292, 360 292, 452 318"
            fill="none"
            stroke="#cfc6b8"
            strokeWidth="1"
            opacity="0.55"
          />

          {/* Window */}
          <g transform="translate(268, 72)">
            <rect
              x="0"
              y="0"
              width="148"
              height="168"
              rx="10"
              fill="#fffcf7"
              stroke="#2a5560"
              strokeWidth="3"
            />
            <rect x="10" y="10" width="128" height="148" rx="6" fill="url(#heroLight)" />
            <line
              x1="74"
              y1="10"
              x2="74"
              y2="158"
              stroke="#2a5560"
              strokeWidth="2"
              opacity="0.35"
            />
            <line
              x1="10"
              y1="84"
              x2="138"
              y2="84"
              stroke="#2a5560"
              strokeWidth="2"
              opacity="0.35"
            />
            {/* Soft landscape outside */}
            <path
              d="M10 128 C40 112, 70 118, 74 126 C90 108, 118 112, 138 126 L138 158 L10 158 Z"
              fill="#6f8574"
              opacity="0.45"
            />
            <circle cx="112" cy="42" r="16" fill="#b86a4b" opacity="0.22" />
          </g>

          {/* Curtain fold – organic */}
          <path
            d="M256 72 C248 110, 262 150, 252 188 C268 176, 274 130, 270 72 Z"
            fill="#6f8574"
            opacity="0.28"
          />

          {/* Wall clock – hint of day structure */}
          <g transform="translate(92, 86)">
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="#fffcf7"
              stroke="#163a42"
              strokeWidth="2.5"
            />
            <circle cx="28" cy="28" r="2.5" fill="#163a42" />
            <line
              x1="28"
              y1="28"
              x2="28"
              y2="14"
              stroke="#163a42"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="28"
              y1="28"
              x2="40"
              y2="34"
              stroke="#b86a4b"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="28" cy="8" r="1.5" fill="#6f8574" />
            <circle cx="48" cy="28" r="1.5" fill="#6f8574" />
            <circle cx="28" cy="48" r="1.5" fill="#6f8574" />
            <circle cx="8" cy="28" r="1.5" fill="#6f8574" />
          </g>

          {/* Sideboard / shelf */}
          <rect
            x="78"
            y="248"
            width="78"
            height="12"
            rx="3"
            fill="#2a5560"
            opacity="0.55"
          />
          <rect
            x="86"
            y="260"
            width="62"
            height="40"
            rx="4"
            fill="#163a42"
            opacity="0.2"
          />
          {/* Small plant */}
          <ellipse cx="117" cy="242" rx="14" ry="6" fill="#6f8574" opacity="0.35" />
          <path
            d="M117 242 C108 220, 96 208, 104 196 C112 208, 114 218, 117 230 C120 214, 128 204, 134 196 C128 212, 126 226, 117 242 Z"
            fill="#6f8574"
            opacity="0.75"
          />

          {/* Armchair – older person sits here */}
          <g transform="translate(148, 236)">
            {/* Chair back – soft organic */}
            <path
              d="M18 28 C22 4, 58 -6, 92 10 C108 20, 112 48, 100 72 L24 78 C12 56, 12 40, 18 28 Z"
              fill="#2a5560"
            />
            <path
              d="M28 34 C34 16, 62 8, 84 22 C94 30, 96 48, 88 64 L34 68 C26 52, 24 42, 28 34 Z"
              fill="#163a42"
              opacity="0.35"
            />
            {/* Seat */}
            <ellipse cx="72" cy="96" rx="68" ry="28" fill="#163a42" />
            <ellipse cx="72" cy="90" rx="62" ry="22" fill="#2a5560" />
            {/* Armrests */}
            <ellipse cx="18" cy="88" rx="16" ry="12" fill="#0f2a30" />
            <ellipse cx="126" cy="86" rx="18" ry="13" fill="#0f2a30" />
            {/* Legs hint */}
            <rect x="28" y="112" width="8" height="26" rx="3" fill="#163a42" opacity="0.5" />
            <rect x="108" y="110" width="8" height="28" rx="3" fill="#163a42" opacity="0.5" />
          </g>

          {/* Elderly person – seated, abstract, no facial features */}
          <g transform="translate(190, 198)">
            {/* Torso / cardigan */}
            <path
              d="M18 52 C22 28, 48 18, 72 28 C92 36, 98 58, 94 84 L22 90 C14 72, 14 60, 18 52 Z"
              fill="#b86a4b"
              opacity="0.88"
            />
            {/* Soft collar / shirt peek */}
            <path
              d="M44 40 C52 34, 66 36, 70 46 L52 52 Z"
              fill="#f4efe6"
              opacity="0.85"
            />
            {/* Arms resting */}
            <path
              d="M10 70 C0 78, -4 92, 8 98 C22 92, 28 82, 24 72 Z"
              fill="#b86a4b"
              opacity="0.75"
            />
            <path
              d="M96 68 C108 72, 118 86, 108 98 C94 94, 86 84, 90 72 Z"
              fill="#b86a4b"
              opacity="0.75"
            />
            {/* Lap / lower body */}
            <ellipse cx="56" cy="102" rx="42" ry="18" fill="#163a42" opacity="0.45" />
            {/* Head – featureless oval */}
            <ellipse cx="56" cy="22" rx="22" ry="26" fill="#e8d7cc" />
            {/* Hair suggestion */}
            <path
              d="M34 22 C36 2, 56 -4, 76 10 C78 22, 74 18, 70 12 C58 2, 42 8, 38 22 Z"
              fill="#4a453f"
              opacity="0.55"
            />
            {/* Shoulder softness */}
            <ellipse cx="56" cy="48" rx="28" ry="10" fill="#a55c41" opacity="0.35" />
          </g>

          {/* Caregiver – seated nearby, conversational posture */}
          <g transform="translate(300, 248)">
            {/* Stool / seat */}
            <ellipse cx="40" cy="92" rx="36" ry="12" fill="#163a42" opacity="0.28" />
            <rect x="34" y="92" width="10" height="34" rx="3" fill="#163a42" opacity="0.35" />

            {/* Torso – petrol tunic */}
            <path
              d="M16 40 C22 16, 48 8, 68 22 C78 30, 80 52, 72 78 L20 84 C10 64, 10 50, 16 40 Z"
              fill="#163a42"
            />
            <path
              d="M28 36 C36 24, 56 22, 64 36 L46 44 Z"
              fill="#2a5560"
            />

            {/* Arm extended gently toward companion */}
            <path
              d="M8 58 C-10 66, -18 82, -4 90 C12 84, 22 72, 18 60 Z"
              fill="#163a42"
            />
            {/* Hand suggestion – soft oval */}
            <ellipse cx="-6" cy="88" rx="10" ry="7" fill="#e8d7cc" />

            {/* Other arm resting */}
            <path
              d="M70 56 C86 60, 94 76, 84 88 C70 82, 64 70, 66 58 Z"
              fill="#0f2a30"
            />

            {/* Head – featureless */}
            <ellipse cx="46" cy="12" rx="18" ry="22" fill="#e8d7cc" />
            {/* Hair / bun suggestion */}
            <path
              d="M30 10 C32 -4, 48 -8, 62 4 C64 14, 58 10, 54 4 C46 -2, 36 2, 32 12 Z"
              fill="#2a5560"
              opacity="0.85"
            />
            <circle cx="58" cy="16" r="7" fill="#2a5560" opacity="0.85" />
          </g>

          {/* Shared tea cups – everyday domestic ritual */}
          <g transform="translate(248, 308)">
            <ellipse cx="0" cy="8" rx="22" ry="5" fill="#163a42" opacity="0.12" />
            <path
              d="M-16 0 C-16 12, -8 18, 0 18 C8 18, 16 12, 16 0 Z"
              fill="#fffcf7"
              stroke="#6f8574"
              strokeWidth="1.5"
            />
            <ellipse cx="0" cy="0" rx="16" ry="5" fill="#f3e4dc" />
            <path
              d="M16 2 C24 2, 26 10, 20 12"
              fill="none"
              stroke="#6f8574"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <g transform="translate(42, -2)">
              <path
                d="M-14 0 C-14 11, -7 16, 0 16 C7 16, 14 11, 14 0 Z"
                fill="#fffcf7"
                stroke="#6f8574"
                strokeWidth="1.5"
              />
              <ellipse cx="0" cy="0" rx="14" ry="4.5" fill="#e4ebe4" />
              <path
                d="M14 2 C21 2, 23 9, 18 11"
                fill="none"
                stroke="#6f8574"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          </g>

          {/* Floor plant – large organic leaves */}
          <g transform="translate(52, 300)">
            <ellipse cx="28" cy="78" rx="30" ry="10" fill="#163a42" opacity="0.1" />
            <path
              d="M18 78 L18 48 C10 48, 6 58, 12 64 Z"
              fill="#b86a4b"
              opacity="0.55"
            />
            <path
              d="M28 78 C16 50, 4 28, 18 8 C28 28, 30 48, 28 78 Z"
              fill="#6f8574"
            />
            <path
              d="M30 78 C34 46, 48 24, 58 12 C52 36, 42 58, 30 78 Z"
              fill="#2a5560"
              opacity="0.85"
            />
            <path
              d="M26 78 C20 54, 8 40, 2 34 C14 44, 22 58, 26 78 Z"
              fill="#6f8574"
              opacity="0.7"
            />
          </g>
        </g>

        {/* Decorative floating organic accents – motion only here */}
        <g className="hero-float" aria-hidden="true">
          <ellipse
            cx="412"
            cy="58"
            rx="34"
            ry="22"
            fill="#6f8574"
            opacity="0.22"
          />
          <ellipse
            cx="430"
            cy="78"
            rx="18"
            ry="14"
            fill="#b86a4b"
            opacity="0.2"
          />
        </g>
        <g className="hero-float-delayed" aria-hidden="true">
          <path
            d="M48 400 C28 384, 22 360, 40 348 C52 362, 58 380, 48 400 Z"
            fill="#2a5560"
            opacity="0.14"
          />
        </g>
      </svg>
    </figure>
  );
}
