import Link from "next/link";
import type { ReactNode } from "react";
import { findDoc, findGroupTitle, findNeighbors } from "@/lib/v2/docs-nav";
import Toc from "./Toc";
import { getLocale, getT } from "@/i18n/v2/server";
import { translateDocNode, translateDocString } from "@/i18n/v2/docs-content";

type TocItem = { id: string; label: string };

type Props = {
  /** 当前页路径，用于面包屑与翻页；server component 拿不到 pathname，所以显式传 */
  path: string;
  title: string;
  lede?: ReactNode;
  /** 右侧目录，不传则正文占满 */
  toc?: TocItem[];
  children: ReactNode;
};

/**
 * 文档页外壳：面包屑 + 标题 + 引言 + 正文 + 上下页。
 * 所有文档页都用它，翻页顺序由 docs-nav.ts 的扁平序列决定。
 */
export default async function DocsPage({ path, title, lede, toc, children }: Props) {
  const [t, locale] = await Promise.all([getT(), getLocale()]);
  const localizedTitle = translateDocString(locale, title).trim();
  const localizedLede = lede ? translateDocNode(lede, locale) : undefined;
  const localizedToc = toc?.map((item) => ({ ...item, label: translateDocString(locale, item.label).trim() }));
  const localizedChildren = translateDocNode(children, locale);
  const group = findGroupTitle(path, t);
  const doc = findDoc(path, t);
  const { prev, next } = findNeighbors(path, t);
  const hasToc = Boolean(toc && toc.length);

  return (
    <>
      <div className={hasToc ? "docs-main" : "docs-main-wide"}>
        <div className="docs-crumb">
          <span className="label">{t.docsUi.crumb}</span>
          {group ? <span className="label">/ {group}</span> : null}
        </div>
        <h1 className="docs-title">{localizedTitle}</h1>
        {localizedLede ? <p className="docs-lede">{localizedLede}</p> : null}
        <div className="docs-rule" />

        {doc?.status === "draft" ? <DraftNotice title={localizedTitle} t={t} /> : null}

        <div className="prose">{localizedChildren}</div>

        {(prev || next) && (
          <div className="docs-pager">
            {prev ? (
              <Link href={prev.href}>
                <span className="k">{t.docsUi.previous}</span>
                <span className="t">{prev.label}</span>
              </Link>
            ) : null}
            {next ? (
              <Link href={next.href} className="next">
                <span className="k">{t.docsUi.next}</span>
                <span className="t">{next.label}</span>
              </Link>
            ) : null}
          </div>
        )}
      </div>

      {hasToc ? <Toc items={localizedToc!} /> : null}
    </>
  );
}

/** 骨架页提示：路由与导航已就位，内容待定稿。 */
function DraftNotice({ title, t }: { title: string; t: Awaited<ReturnType<typeof getT>> }) {
  return (
    <div className="docs-draft">
      <div className="k">{t.docsUi.draftLabel}</div>
      <h3>{t.docsUi.draftTitleBefore}{title}{t.docsUi.draftTitleAfter}</h3>
      <p>{t.docsUi.draftDescription}</p>
      <ul>
        <li>
          <a href="https://github.com/tbphp/gpt-load" target="_blank" rel="noopener noreferrer">
            {t.docsUi.readme}
          </a>
          {t.docsUi.readmeNote}
        </li>
        <li>
          <a href="/v1/docs">1.4.x</a>{t.docsUi.legacyNote}
        </li>
      </ul>
    </div>
  );
}
