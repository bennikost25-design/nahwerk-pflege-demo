import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#163a42",
        }}
      >
        <svg
          width="108"
          height="108"
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
    ),
    {
      ...size,
    },
  );
}
