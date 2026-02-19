import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#4F46E5",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
          {/* Chat bubble */}
          <path
            d="M2 0C0.9 0 0 0.9 0 2v10c0 1.1 0.9 2 2 2h3v4l5-4h10c1.1 0 2-0.9 2-2V2c0-1.1-0.9-2-2-2H2z"
            fill="white"
          />
          {/* Checkmark */}
          <path
            d="M6 8l3.5 3.5L16 5"
            stroke="#4F46E5"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
