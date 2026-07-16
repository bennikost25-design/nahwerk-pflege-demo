import { siteConfig } from "@/content/site-content";
import { ImageResponse } from "next/og";

export const alt = `${siteConfig.name} – Fiktive Website-Demo`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#163a42",
          color: "#fffcf7",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 18,
              background: "#0f2a30",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 22c0-6.2 3.4-11 8-12.5"
                stroke="#f4efe6"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
              <path
                d="M25 10c0 6.2-3.4 11-8 12.5"
                stroke="#f4efe6"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
              <circle cx="16" cy="16" r="2.2" fill="#f4efe6" />
              <path
                d="M10.5 11.5c2.2-1.8 4.8-2.7 7.5-2.4"
                stroke="#f4efe6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              />
              <path
                d="M21.5 20.5c-2.2 1.8-4.8 2.7-7.5 2.4"
                stroke="#f4efe6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.55"
              />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 28,
                color: "#c8ddd8",
                fontFamily:
                  "Segoe UI, Helvetica Neue, Arial, sans-serif",
              }}
            >
              {siteConfig.tagline}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "14px 22px",
              borderRadius: 999,
              background: "rgba(184, 106, 75, 0.22)",
              border: "1px solid rgba(212, 134, 100, 0.45)",
              color: "#f3e4dc",
              fontSize: 26,
              fontFamily: "Segoe UI, Helvetica Neue, Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Fiktive Website-Demo
          </div>
          <div
            style={{
              width: 120,
              height: 4,
              borderRadius: 999,
              background: "#6f8574",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
