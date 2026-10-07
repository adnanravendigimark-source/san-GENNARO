import { ImageResponse } from "next/og";

export const alt = "San Gennaro Catacombs Tickets — Naples";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #2A1418 0%, #4A1C24 100%)",
          color: "#F7F1E5",
          border: "14px solid #B8913F",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#CFAE62", display: "flex" }}>NAPLES · RIONE SANITÀ</div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, marginTop: 24, display: "flex" }}>
          San Gennaro Catacombs Tickets
        </div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#EFE6D2", display: "flex" }}>
          Compare tickets & guided visits · Reserve your time slot
        </div>
      </div>
    ),
    { ...size }
  );
}
