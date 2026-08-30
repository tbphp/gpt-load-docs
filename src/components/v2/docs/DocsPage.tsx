import Link from "next/link";
import type { ReactNode } from "react";
import { findDoc, findGroupTitle, findNeighbors } from "@/lib/v2/docs-nav";
import Toc from "./Toc";

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
export default function DocsPage({ path, title, lede, toc, children }: Props) {
  const group = findGroupTitle(path);
  const doc = findDoc(path);
  const { prev, next } = findNeighbors(path);
  const hasToc = Boolean(toc && toc.length);

  return (
    <>
      <div className={hasToc ? "docs-main" : "docs-main-wide"}>
        <div className="docs-crumb">
          <span className="label">文档</span>
          {group ? <span className="label">/ {group}</span> : null}
        </div>
        <h1 className="docs-title">{title}</h1>
        {lede ? <p className="docs-lede">{lede}</p> : null}
        <div className="docs-rule" />

        {doc?.status === "draft" ? <DraftNotice title={title} /> : null}

        <div className="prose">{children}</div>

        {(prev || next) && (
          <div className="docs-pager">
            {prev ? (
              <Link href={prev.href}>
                <span className="k">← 上一页</span>
                <span className="t">{prev.label}</span>
              </Link>
            ) : null}
            {next ? (
              <Link href={next.href} className="next">
                <span className="k">下一页 →</span>
                <span className="t">{next.label}</span>
              </Link>
            ) : null}
          </div>
        )}
      </div>

      {hasToc ? <Toc items={toc!} /> : null}
    </>
  );
}

/** 骨架页提示：路由与导航已就位，内容待定稿。 */
function DraftNotice({ title }: { title: string }) {
  return (
    <div className="docs-draft">
      <div className="k">内容待完善</div>
      <h3>「{title}」的正文还没有定稿</h3>
      <p>
        这一页的路由、导航位置和翻页顺序都已经就绪，正文内容需要先确认覆盖范围和写法再补。
        在此之前，对应内容可以先参考仓库 README 或 1.4.x 文档。
      </p>
      <ul>
        <li>
          <a href="https://github.com/tbphp/gpt-load" target="_blank" rel="noopener noreferrer">
            GitHub 仓库 README
          </a>
          ——目前最完整的中文说明
        </li>
        <li>
          <a href="/v1/docs">1.4.x 文档</a>——注意 2.0 的概念模型已经改变，仅供参考
        </li>
      </ul>
    </div>
  );
}
