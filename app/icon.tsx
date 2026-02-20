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
          position: "relative",
          display: "flex",
          background: "#4F46E5",
          borderRadius: 7,
        }}
      >
        {/* Chat bubble shape via SVG fill (no stroke) */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            fill="white"
            d="M8 7 L24 7 Q28 7 28 11 L28 17 Q28 21 24 21 L14 21 L5 26 L7 21 Q4 21 4 17 L4 11 Q4 7 8 7 Z"
          />
        </svg>
        {/* Number centered in bubble body (excluding tail space) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4F46E5",
            fontSize: 8,
            fontWeight: 800,
            letterSpacing: 0.5,
          }}
        >
          6547
        </div>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
