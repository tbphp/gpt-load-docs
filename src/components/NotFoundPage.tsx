import Link from "@/components/LocalizedLink";
import "@/styles/v2/tokens.css";
import "@/styles/v2/base.css";
import "@/styles/v2/layout.css";
import "@/styles/v2/components.css";
import "@/styles/v2/pages.css";
import BrandLogo from "@/components/v2/BrandLogo";
import type { Metadata } from "next";
import { getLocale, getT } from "@/i18n/v2/server";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const metadata = dictionaryPageMeta({
    locale,
    path: "/404",
    select: (dict) => ({ title: dict.pages.notFound.title, description: dict.pages.notFound.lede }),
  });
  return { ...metadata, robots: { index: false, follow: true } };
}

/** 全局与各语言静态 404 共用的内容与品牌样式。 */
const WAYS = [
  { href: "/docs/quickstart" },
  { href: "/docs" },
  { href: "/v1/docs" },
];

export default async function NotFound() {
  const t = await getT();
  const copy = t.pages.notFound;
  return (
    <div className="v2">
      <header className="top">
        <div className="shell top-in">
          <Link className="brand" href="/">
            <BrandLogo />
          </Link>
        </div>
      </header>

      <main id="main" className="page">
        <div className="shell">
          <div className="page-head">
            <span className="label">{copy.label}</span>
            <h1 className="page-title">{copy.headline}</h1>
            <p className="page-lede">{copy.lede}</p>
          </div>

          <div className="page-body">
            <div className="g12 rows-30">
              {WAYS.map((w, i) => (
                <Link className="col-4 item" key={w.href} href={w.href}>
                  <h3 style={{ marginTop: 0 }}>{copy.ways[i].title}</h3>
                  <p>{copy.ways[i].description}</p>
                </Link>
              ))}
            </div>

            <div className="btns" style={{ marginTop: 40 }}>
              <Link className="btn btn-p" href="/">
                {copy.home}
              </Link>
              <a
                className="btn btn-s"
                href="https://github.com/tbphp/gpt-load/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.report}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
