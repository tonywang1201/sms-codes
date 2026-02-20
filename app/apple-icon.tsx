import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          position: "relative",
          display: "flex",
          background: "#4F46E5",
          borderRadius: 40,
        }}
      >
        {/* Same bubble path scaled via viewBox */}
        <svg
          width="180"
          height="180"
          viewBox="0 0 32 32"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            fill="white"
            d="M8 7 L24 7 Q28 7 28 11 L28 17 Q28 21 24 21 L14 21 L5 26 L7 21 Q4 21 4 17 L4 11 Q4 7 8 7 Z"
          />
        </svg>
        {/* Number centered in bubble body */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#4F46E5",
            fontSize: 46,
            fontWeight: 800,
            letterSpacing: 4,
          }}
        >
          6547
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
