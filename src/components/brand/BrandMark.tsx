import { useId } from "react";

type BrandMarkProps = {
  className?: string;
  /** Wenn true, erhält das SVG einen zugänglichen Titel (alleinstehend). */
  titled?: boolean;
  title?: string;
};

/**
 * Abstrakte Markenkennung für Nahwerk Pflege.
 * Andeutet Verbindung / Nähe durch zwei verschränkte Bogenformen.
 */
export function BrandMark({
  className,
  titled = false,
  title = "Nahwerk Pflege",
}: BrandMarkProps) {
  const titleId = useId();

  if (titled) {
    return (
      <svg
        viewBox="0 0 32 32"
        className={className}
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>{title}</title>
        <BrandPaths />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <BrandPaths />
    </svg>
  );
}

function BrandPaths() {
  return (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M7 22c0-6.2 3.4-11 8-12.5"
        strokeWidth="2.4"
        opacity="0.95"
      />
      <path
        d="M25 10c0 6.2-3.4 11-8 12.5"
        strokeWidth="2.4"
        opacity="0.95"
      />
      <circle cx="16" cy="16" r="2.2" fill="currentColor" stroke="none" />
      <path
        d="M10.5 11.5c2.2-1.8 4.8-2.7 7.5-2.4"
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M21.5 20.5c-2.2 1.8-4.8 2.7-7.5 2.4"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </g>
  );
}
