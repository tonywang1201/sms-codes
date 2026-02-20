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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
          borderRadius: 40,
        }}
      >
        <div style={{ position: "relative", width: 124, height: 106, display: "flex" }}>
          {/* Bubble tail */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 16,
              width: 30,
              height: 30,
              background: "white",
              transform: "rotate(45deg)",
            }}
          />
          {/* Bubble body */}
          <div
            style={{
              position: "absolute",
              top: 0,
              width: 124,
              height: 80,
              background: "white",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#6366F1" }} />
          </div>
        </div>
      </div>
    ),
    { width: 180, height: 180 }
  );
}
