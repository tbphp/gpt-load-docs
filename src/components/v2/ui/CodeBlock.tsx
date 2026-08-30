import type { ReactNode } from "react";
import CopyButton from "./CopyButton";

type Props = {
  children: ReactNode;
  /** 左上说明，如 "Docker Compose" */
  caption?: string;
  /** 右上标注，如 "推荐" */
  note?: string;
  /** 关掉复制按钮。仅用于「这段不是给人抄的」的场合 */
  noCopy?: boolean;
};

/**
 * 代码块。高亮用内联 span：
 *   .c 注释 / .s 字符串 / .k 关键字
 */
export default function CodeBlock({ children, caption, note, noCopy }: Props) {
  return (
    <div className="code-wrap">
      {(caption || note) && (
        <div className="code-cap">
          <span className="label">{caption}</span>
          {note ? <span className="label">{note}</span> : null}
        </div>
      )}
      <div className="code-box">
        <pre className="code">{children}</pre>
        {noCopy ? null : <CopyButton />}
      </div>
    </div>
  );
}
