import Image from "next/image";
import type { ReactNode } from "react";

/**
 * 待截图时填这个：占位块会把要求原样显示出来，也是给截图人的说明。
 *
 * 命名规范：`<页面前缀>-<两位序号>-<描述>.png`，统一放 `public/v2/screenshots/{en,zh,ja}/`。
 *   qs   快速开始    cpt  核心概念
 *   ins  部署        grp  分组与渠道
 * 例：`grp-02-credentials.png`
 */
type ShotSpec = {
  /** 截图编号，如 "GRP-02"。给截图的人对号入座用 */
  id: string;
  /** 在哪个界面截，例如「分组 → 新建分组，展开渠道下拉」 */
  where: string;
  /** 画面里必须出现的内容 */
  include: string[];
  /** 补充提醒，例如脱敏要求 */
  hint?: string;
};

type Props = {
  /** 图片路径。待截图时也要填，作为约定好的目标文件名 */
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  /** 图注左侧，如 "FIG. 2 — 新建分组" */
  caption: string;
  /** 图注右侧的补充 */
  note?: string;
  /**
   * 填了就渲染成待截图占位块。
   * 拿到真图后删掉这个属性、补上 alt/width/height 即可，其余不用动。
   */
  shot?: ShotSpec;
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
export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  note,
  shot,
  children,
  className,
}: Props) {
  return (
    <figure className={["fig", className].filter(Boolean).join(" ")}>
      <figcaption>
        <span className="label">{caption}</span>
        {note ? <span className="label">{note}</span> : null}
      </figcaption>

      {shot ? (
        <div className="fig-todo">
          <div className="fig-todo-h">
            <span className="k">待截图</span>
            <span className="id">{shot.id}</span>
          </div>

          <dl className="fig-todo-spec">
            <dt>文件名</dt>
            <dd>
              <code>{src.replace(/^\//, "public/")}</code>
            </dd>

            <dt>截这里</dt>
            <dd>{shot.where}</dd>

            <dt>需包含</dt>
            <dd>
              <ul>
                {shot.include.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </dd>

            {shot.hint ? (
              <>
                <dt>注意</dt>
                <dd className="hint">{shot.hint}</dd>
              </>
            ) : null}
          </dl>
        </div>
      ) : (
        <button
          type="button"
          className="fig-btn"
          data-lb-src={src}
          data-lb-alt={alt ?? caption}
          data-lb-caption={caption}
          data-lb-note={note ?? ""}
          aria-label={`查看大图：${caption}`}
        >
          <Image src={src} alt={alt ?? caption} width={width ?? 2880} height={height ?? 1440} />
          <span className="fig-hint" aria-hidden="true">
            点击查看
          </span>
        </button>
      )}

      {children ? <p className="d">{children}</p> : null}
    </figure>
  );
}
