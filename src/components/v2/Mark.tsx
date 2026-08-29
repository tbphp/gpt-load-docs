type Props = {
  size?: number;
  /**
   * badge — 品牌完整形态：墨蓝圆角底 + 白色符号，与 favicon 一致。**默认用这个**。
   * glyph — 只有符号本身的单色版，用于深色底或需要跟随文字色的场合。
   */
  variant?: "badge" | "glyph";
  /** 仅 glyph 变体生效 */
  color?: string;
};

/**
 * GPT-Load 品牌符号：旋转 45° 的一对 L，一进一出。
 *
 * 注意：整站色调是黑白，但**品牌资产不受这个约束**——
 * badge 变体保持墨蓝底色，不要为了配合页面把它改成黑白。
 */
export default function Mark({ size = 20, variant = "badge", color = "currentColor" }: Props) {
  if (variant === "glyph") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <g transform="rotate(45 12 12)" fill={color}>
          <path d="M4 6.6H8V16H14.4V20H4Z" />
          <path d="M20 17.4H16V8H9.6V4H20Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1c4f6e" d="M5 0H19A5 5 0 0 1 24 5V19A5 5 0 0 1 19 24H5A5 5 0 0 1 0 19V5A5 5 0 0 1 5 0Z" />
      <g fill="#ffffff" transform="translate(12 12) scale(0.8) translate(-12 -12)">
        <g transform="rotate(45 12 12)">
          <path d="M4 6.6H8V16H14.4V20H4Z" />
          <path d="M20 17.4H16V8H9.6V4H20Z" />
        </g>
      </g>
    </svg>
  );
}
