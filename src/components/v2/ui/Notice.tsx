import type { ReactNode } from "react";

type Props = {
  /** 左侧 mono 标签 */
  label: string;
  children: ReactNode;
  /** 语义色。颜色在这里承担信息，不做装饰用途。 */
  tone?: "neutral" | "amber" | "blue";
  className?: string;
};

export default function Notice({ label, children, tone = "neutral", className }: Props) {
  const cls = ["notice", tone === "amber" ? "notice-amber" : tone === "blue" ? "notice-blue" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <span className="t">{label}</span>
      <p>{children}</p>
    </div>
  );
}
