import Link from "next/link";
import "@/styles/v2/tokens.css";
import "@/styles/v2/base.css";
import "@/styles/v2/layout.css";
import "@/styles/v2/components.css";
import "@/styles/v2/pages.css";
import Mark from "@/components/v2/Mark";
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

/**
 * 全站 404。
 *
 * 必须放在 app 根级：路由组里的 not-found 只对显式调用 notFound() 的情况生效，
 * 地址不匹配任何路由时 Next.js 只会找根级这一个。
 *
 * 因此它不在 (v2) 布局内，样式与头尾要自己带——这里只放最小的品牌标识与出口，
 * 不重复整套顶栏页脚。
 */
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
            <Mark size={20} />
            GPT-Load
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
