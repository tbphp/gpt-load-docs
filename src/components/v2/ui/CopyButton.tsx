"use client";

import { useRef, useState } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";

/**
 * 代码块的复制按钮。
 *
 * 不接收代码文本作为 prop——那样调用方要把同一段内容写两遍（一遍给高亮、一遍给复制），
 * 迟早不同步。这里向上找到 .code 节点直接取 textContent，永远和显示的内容一致。
 */
export default function CopyButton() {
  const { t } = useLocale();
  const ref = useRef<HTMLButtonElement>(null);
  const [state, setState] = useState<"idle" | "done" | "fail">("idle");

  const copy = async () => {
    const code = ref.current?.closest(".code-wrap")?.querySelector(".code");
    const text = code?.textContent;
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setState("done");
    } catch {
      // 非 HTTPS 或权限被拒时 clipboard 不可用
      setState("fail");
    }
    window.setTimeout(() => setState("idle"), 1800);
  };

  return (
    <button
      ref={ref}
      type="button"
      className="code-copy"
      onClick={copy}
      data-state={state}
      aria-label={t.common.copyCode}
    >
      {state === "done" ? t.common.copied : state === "fail" ? t.common.copyFailed : t.common.copy}
    </button>
  );
}
