import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          background: "#2A1418",
          borderRadius: "38px",
          border: "6px solid #B8913F",
          boxSizing: "border-box",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none"><path d="M12 54V30C12 19 20 11 32 11s20 8 20 19v24H12Z" fill="#F7F1E5"/><path d="M19 54V32c0-6 5-10 13-10s13 4 13 10v22H19Z" fill="#2A1418"/><rect x="22" y="35" width="8" height="4.5" rx="2.25" fill="#F7F1E5"/><rect x="34" y="35" width="8" height="4.5" rx="2.25" fill="#F7F1E5"/><rect x="22" y="43" width="8" height="4.5" rx="2.25" fill="#F7F1E5"/><rect x="34" y="43" width="8" height="4.5" rx="2.25" fill="#F7F1E5"/><path d="M30.6 17h2.8v7h-2.8z M28 19.4h8v2.6h-8z" fill="#B8913F"/></svg>
      </div>
    ),
    { ...size }
  );
}
