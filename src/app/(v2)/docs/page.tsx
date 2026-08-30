import type { Metadata } from "next";
import Link from "next/link";
import { getLocalizedDocGroups } from "@/lib/v2/docs-nav";
import { getLocale, getT } from "@/i18n/v2/server";
import { DocsSearch } from "@/components/v2/docs";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return dictionaryPageMeta({ locale, path: "/docs", select: (dict) => dict.pages.docs });
}

/** 首屏的三条快捷路径，覆盖绝大多数人来文档的目的 */
const FAST = [
  { href: "/docs/quickstart", n: "01" },
  { href: "/docs/concepts", n: "02" },
  { href: "/docs/clients", n: "03", hot: true },
];

export default async function DocsIndex() {
  const t = await getT();
  // 文档首页自身不在索引里重复出现
  const groups = getLocalizedDocGroups(t).map((g) => ({
    ...g,
    items: g.items.filter((d) => d.href !== "/docs"),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="docs-main-wide">
      <div className="docs-crumb">
        <span className="label">{t.docsUi.crumb}</span>
      </div>
      <h1 className="docs-title">{t.docsUi.indexTitle}</h1>
      <p className="docs-lede">
        {t.docsUi.indexLedeBefore}
        <Link className="link" href="/">
          {t.docsUi.indexHome}
        </Link>
        {t.docsUi.indexLedeAfter}
      </p>
      <div className="docs-rule" />

      <DocsSearch />

      <div className="g12 rows-30" style={{ marginTop: 34 }}>
        {FAST.map((f, i) => (
          <Link className={`col-4 step${f.hot ? " hot" : ""}`} key={f.href} href={f.href}>
            <div className="n">{f.n}</div>
            <h3>{t.docsUi.fast[i].title}</h3>
            <p>{t.docsUi.fast[i].description}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 62 }}>
        {groups.map((g, gi) => (
          <div className="idx-g" key={g.title}>
            <div className="h">
              <span className="n">{String(gi + 1).padStart(2, "0")}</span>
              <span className="t">{g.title}</span>
            </div>
            <div className="idx-list">
              {g.items.map((d) => (
                <Link className="idx-item" key={d.href} href={d.href}>
                  <span className="r">
                    <span className="t">{d.label}</span>
                    {d.status === "draft" ? <span className="tag">待完善</span> : null}
                  </span>
                  {d.desc ? <span className="d">{d.desc}</span> : null}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="notice" style={{ marginTop: 56 }}>
        <span className="t">{t.docsUi.legacyLabel}</span>
        <p>
          {t.docsUi.legacyBefore}<a className="link" href="/v1/docs">{t.docsUi.legacyLink}</a>
          {t.docsUi.legacyMiddle}{" "}
          <Link className="link" href="/docs/migrate-from-1x">
            {t.docsUi.migration}
          </Link>
          {t.docsUi.legacyAfter}
        </p>
      </div>
    </div>
  );
}
