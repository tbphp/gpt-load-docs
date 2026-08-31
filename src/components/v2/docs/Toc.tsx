"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";

type TocItem = { id: string; label: string };

/**
 * 右侧目录，跟随滚动高亮当前小节。
 *
 * 用 IntersectionObserver 而不是监听 scroll 计算位置：不需要在滚动时反复读取
 * offsetTop，也就不会触发强制重排。
 */
export default function Toc({ items }: { items: TocItem[] }) {
  const { t } = useLocale();
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const targets = items
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    // 顶部一条窄带作为判定区：标题进入这条带子就算当前小节
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-88px 0px -70% 0px", threshold: 0 }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <aside className="docs-toc">
      <div className="h">{t.docsUi.toc}</div>
      <ul>
        {items.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className={t.id === active ? "on" : undefined}
              onClick={(e) => {
                e.preventDefault();
                const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
                document.getElementById(t.id)?.scrollIntoView({ behavior, block: "start" });
                window.history.replaceState(null, "", `#${t.id}`);
              }}
            >
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
