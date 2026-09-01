import { ImageResponse } from "next/og";

/* eslint-disable @next/next/no-img-element -- ImageResponse 由 satori 渲染，不支持 next/image。 */

export const dynamic = "force-static";

const SIZE = { width: 1200, height: 630 };

// 品牌符号：旋转 45° 的一对 L。以 data URI 内联，避免运行时再取一次文件。
const MARK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96">' +
      '<path fill="#1c4f6e" d="M5 0H19A5 5 0 0 1 24 5V19A5 5 0 0 1 19 24H5A5 5 0 0 1 0 19V5A5 5 0 0 1 5 0Z"/>' +
      '<g fill="#ffffff" transform="translate(12 12) scale(0.8) translate(-12 -12)">' +
      '<g transform="rotate(45 12 12)">' +
      '<path d="M4 6.6H8V16H14.4V20H4Z"/><path d="M20 17.4H16V8H9.6V4H20Z"/>' +
      "</g></g></svg>"
  );

/** 全站共用的稳定社交分享图，由 Metadata API 显式引用。 */
export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.14em",
              color: "#6a6a6a",
              textTransform: "uppercase",
            }}
          >
            v2.0 / MIT License
          </div>
          {/* ImageResponse 由 satori 渲染成位图，不使用 next/image。 */}
          <img src={MARK} width={88} height={88} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700, letterSpacing: "-0.04em", color: "#0a0a0a" }}>
            GPT-Load
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#1c4f6e", marginTop: 14, letterSpacing: "-0.02em" }}>
            Self-hosted AI Gateway
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, background: "#0a0a0a", marginBottom: 22 }} />
          <div style={{ display: "flex", gap: 52, fontSize: 25, color: "#6a6a6a", letterSpacing: "0.06em" }}>
            <div style={{ display: "flex" }}>23 CHANNELS</div>
            <div style={{ display: "flex" }}>4 PROTOCOLS</div>
            <div style={{ display: "flex" }}>1 BINARY</div>
            <div style={{ display: "flex" }}>2 CLIENT SETTINGS</div>
          </div>
        </div>
      </div>
    ),
    SIZE
  );
}
