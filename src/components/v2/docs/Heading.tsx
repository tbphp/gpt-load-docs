"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";

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
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const Tag = level === 2 ? "h2" : "h3";

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${window.location.search}#${id}`;
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
          const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
          document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
          void copyLink();
        }}
        aria-label={t.common.copyLink}
      >
        {copied ? t.common.copiedLink : "§"}
      </a>
    </Tag>
  );
}
