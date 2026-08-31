import type { ReactNode } from "react";

type Props = {
  /** 章节编号，如 "01" */
  n: string;
  /** 章节标签，如 "能力" */
  tag: string;
  title?: ReactNode;
  lede?: ReactNode;
  /** 浅底变体，用于制造阅读节奏 */
  tint?: boolean;
  children?: ReactNode;
};

/**
 * 全站章节骨架：上边线 + mono 编号标签 + 标题 + 引言 + 内容。
 * 新页面一律用它，不要手写 .sec / .sec-head 结构。
 */
export default function Section({ n, tag, title, lede, tint, children }: Props) {
  return (
    <section className={tint ? "sec sec-tint" : "sec"}>
      <div className="shell">
        <div className="sec-head">
          <span className="n">{n}</span>
          <span className="t">{tag}</span>
        </div>
        {title ? <h2 className="sec-title">{title}</h2> : null}
        {lede ? <p className="sec-lede">{lede}</p> : null}
        {children ? <div className="sec-body">{children}</div> : null}
      </div>
    </section>
  );
}
