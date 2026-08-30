"use client";

import { useState } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
  level?: 2 | 3;
};

/**
 * 文档正文的小节标题。
 *
 * 悬停时右侧出现 §，点击把带锚点的完整链接复制到剪贴板——
 * 读者要把「文档的某一段」发给同事时，这比让他手动拼 URL 靠谱。
 */
export default function Heading({ id, children, level = 2 }: Props) {
  const [copied, setCopied] = useState(false);
  const Tag = level === 2 ? "h2" : "h3";

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* 剪贴板不可用时降级为普通跳转，下面的 href 仍然生效 */
    }
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <Tag id={id} className="prose-h">
      {children}
      <a
        href={`#${id}`}
        className="anchor"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          void copyLink();
        }}
        aria-label={`复制本节链接`}
      >
        {copied ? "已复制链接" : "§"}
      </a>
    </Tag>
  );
}
