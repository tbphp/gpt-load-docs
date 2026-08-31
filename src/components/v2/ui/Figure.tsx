import Image from "next/image";
import type { ReactNode } from "react";
import { getT } from "@/i18n/v2/server";

type Props = {
  /** 图片路径 */
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  /** 图注左侧，如 "FIG. 2 — 新建分组" */
  caption: string;
  /** 图注右侧的补充 */
  note?: string;
  /** 图片下方的说明段落 */
  children?: ReactNode;
  className?: string;
};

/**
 * 全站统一的图片展示。
 *
 * 正文里的图必然是缩小的，所以每张图都可点开看原图——
 * `data-lb-*` 由全局 <Lightbox> 接管，这里不需要客户端逻辑，组件保持 server component。
 *
 * **所有展示型图片都要用它**，不要直接写 <Image>，否则交互不一致。
 */
export default async function Figure({
  src,
  alt,
  width,
  height,
  caption,
  note,
  children,
  className,
}: Props) {
  const t = await getT();
  return (
    <figure className={["fig", className].filter(Boolean).join(" ")}>
      <figcaption>
        <span className="label">{caption}</span>
        {note ? <span className="label">{note}</span> : null}
      </figcaption>

      <button
        type="button"
        className="fig-btn"
        data-lb-src={src}
        data-lb-alt={alt ?? caption}
        data-lb-caption={caption}
        data-lb-note={note ?? ""}
        aria-label={`${t.common.viewLarge}: ${caption}`}
      >
        <Image src={src} alt={alt ?? caption} width={width ?? 2880} height={height ?? 1440} />
        <span className="fig-hint" aria-hidden="true">
          {t.common.clickToView}
        </span>
      </button>

      {children ? <p className="d">{children}</p> : null}
    </figure>
  );
}
