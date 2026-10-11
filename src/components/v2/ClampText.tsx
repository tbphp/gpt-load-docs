"use client";

import { useRef, useState } from "react";

type Props = {
  as: "h3" | "p";
  text: string;
};

/**
 * 被 CSS 截断的文本。只有内容确实被截断时，悬停才即时浮出完整内容；
 * 浮层复用同一标签，字号与颜色跟随原文，盖在原位上像是原地展开。
 */
export default function ClampText({ as: Tag, text }: Props) {
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);

  const reveal = () => {
    const el = ref.current;
    setOpen(!!el && (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1));
  };

  return (
    <span className="clamp" onMouseEnter={reveal} onMouseLeave={() => setOpen(false)}>
      <Tag ref={ref}>{text}</Tag>
      {open ? (
        <Tag className="clamp-tip" aria-hidden="true">
          {text}
        </Tag>
      ) : null}
    </span>
  );
}
