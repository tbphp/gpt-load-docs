import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* eslint-disable @next/next/no-img-element -- ImageResponse 由 satori 渲染，不支持 next/image。 */

export const dynamic = "force-static";

const SIZE = { width: 1200, height: 630 };

/** 全站共用的稳定社交分享图，由 Metadata API 显式引用。 */
export async function GET() {
  // 与页面共用品牌素材，内联为 data URI，避免生成分享图时请求外部资源。
  const [icon, logo] = await Promise.all(
    ["icon.svg", "logo-light.svg"].map(async (name) => {
      const svg = await readFile(join(process.cwd(), "public/v2/brand", name));
      return `data:image/svg+xml;base64,${svg.toString("base64")}`;
    })
  );

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
          <img src={icon} width={88} height={88} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={logo} width={760} height={190} alt="GPT-Load" />
          <div style={{ display: "flex", fontSize: 44, color: "#ff4f1f", marginTop: 14, letterSpacing: "-0.02em" }}>
            Self-hosted AI Gateway
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 2, background: "#0a0a0a", marginBottom: 22 }} />
          <div style={{ display: "flex", gap: 52, fontSize: 25, color: "#6a6a6a", letterSpacing: "0.06em" }}>
            <div style={{ display: "flex" }}>35 CHANNELS</div>
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
