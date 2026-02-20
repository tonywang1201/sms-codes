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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
          borderRadius: 7,
        }}
      >
        <div style={{ position: "relative", width: 22, height: 19, display: "flex" }}>
          {/* Bubble tail */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 3,
              width: 6,
              height: 6,
              background: "white",
              transform: "rotate(45deg)",
            }}
          />
          {/* Bubble body */}
          <div
            style={{
              position: "absolute",
              top: 0,
              width: 22,
              height: 14,
              background: "white",
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <div style={{ width: 3, height: 3, borderRadius: 2, background: "#6366F1" }} />
            <div style={{ width: 3, height: 3, borderRadius: 2, background: "#6366F1" }} />
            <div style={{ width: 3, height: 3, borderRadius: 2, background: "#6366F1" }} />
            <div style={{ width: 3, height: 3, borderRadius: 2, background: "#6366F1" }} />
          </div>
        </div>
      </div>
    ),
    { width: 32, height: 32 }
  );
}
