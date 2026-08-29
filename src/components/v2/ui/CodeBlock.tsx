import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 左上说明，如 "Docker Compose" */
  caption?: string;
  /** 右上标注，如 "FIG. 2" 或 "推荐" */
  note?: string;
};

/**
 * 代码块。高亮用内联 span：
 *   .c 注释 / .s 字符串 / .k 关键字
 */
export default function CodeBlock({ children, caption, note }: Props) {
  return (
    <div>
      {(caption || note) && (
        <div className="code-cap">
          <span className="label">{caption}</span>
          {note ? <span className="label">{note}</span> : null}
        </div>
      )}
      <div className="code">{children}</div>
    </div>
  );
}
