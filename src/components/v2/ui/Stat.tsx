type Props = {
  /** 主数值 */
  value: string;
  /** 数值后缀，如 "个" "种" */
  unit?: string;
  label: string;
  /** 语义色。只在这个数字本身承载重点时才给，不要一排全上。 */
  tone?: "blue" | "green" | "amber" | "rust" | string;
  className?: string;
};

export default function Stat({ value, unit, label, tone, className }: Props) {
  const cls = ["stat", tone ? `stat-${tone}` : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <div className="n">
        {value}
        {unit ? <small>{unit}</small> : null}
      </div>
      <div className="l label">{label}</div>
    </div>
  );
}
