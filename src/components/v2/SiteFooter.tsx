import Link from "next/link";
import Mark from "./Mark";
import type { Dict } from "@/i18n/v2/dict";

const COL_DEFS = [
  {
    title: "colResources",
    links: [
      { href: "/docs", key: "resourcesDocs" },
      { href: "/docs/quickstart", key: "resourcesQuickstart" },
      { href: "/docs/install", key: "resourcesDeploy" },
      { href: "/v1", key: "resourcesLegacy" },
    ],
  },
  {
    title: "colProject",
    links: [
      { href: "https://github.com/tbphp/gpt-load", key: "projGithub", external: true },
      { href: "/changelog", key: "projChangelog" },
      { href: "/sponsor", key: "projSponsor" },
      { href: "/contributors", key: "projContributors" },
    ],
  },
  {
    title: "colFriends",
    links: [
      { href: "https://www.newapi.ai/", key: "friendNewApi", external: true },
    ],
  },
] as const;

export default function SiteFooter({ t }: { t: Dict }) {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="g12 foot-top">
          <div className="foot-brand">
            <div className="brand" style={{ color: "#fff" }}>
              {/* 页脚是纯黑底，墨蓝对比度不够，改用白色符号版 */}
              <Mark size={20} variant="glyph" color="#ffffff" />
              GPT-Load
            </div>
            <div className="m">
              {t.footer.tagline}
              <br />
              {t.footer.license}
            </div>
          </div>

          {COL_DEFS.map((col) => (
            <div className="foot-col" key={col.title}>
              <div className="h">{t.footer[col.title]}</div>
              <ul>
                {col.links.map((link) => (
                  <li key={link.key}>
                    {"external" in link && link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {t.footer[link.key]}
                      </a>
                    ) : (
                      <Link href={link.href}>{t.footer[link.key]}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bot">
          <span>{t.footer.copyright}</span>
          <span>
            {t.footer.thanks}{" "}
            <a href="https://github.com/maximhq/bifrost" target="_blank" rel="noopener noreferrer">
              BIFROST CORE
            </a>{" "}
            ·{" "}
            <a href="https://github.com/router-for-me/CLIProxyAPI" target="_blank" rel="noopener noreferrer">
              CLIPROXYAPI
            </a>{" "}
            ·{" "}
            <a href="https://github.com/lobehub/lobe-icons" target="_blank" rel="noopener noreferrer">
              LOBE ICONS
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
