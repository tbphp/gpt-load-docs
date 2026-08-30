import type { Metadata } from "next";
import Link from "next/link";
import { DOC_GROUPS } from "@/lib/v2/docs-nav";

export const metadata: Metadata = {
  title: "文档",
  description: "GPT-Load 2.0 文档：部署、渠道配置、分组与 AccessKey、调度与监控、客户端接入。",
};

/** 首屏的三条快捷路径，覆盖绝大多数人来文档的目的 */
const FAST: { href: string; n: string; t: string; d: string; hot?: boolean }[] = [
  { href: "/docs/quickstart", n: "01", t: "装起来", d: "一条 compose 命令，五分钟拿到管理密钥" },
  { href: "/docs/concepts", n: "02", t: "配好它", d: "分组朝上游，访问密钥朝应用，只有这两层" },
  { href: "/docs/clients", n: "03", t: "接上去", d: "改 base URL 和 API Key 两行，客户端照旧", hot: true },
];

export default function DocsIndex() {
  // 文档首页自身不在索引里重复出现
  const groups = DOC_GROUPS.map((g) => ({
    ...g,
    items: g.items.filter((d) => d.href !== "/docs"),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="docs-main-wide">
      <div className="docs-crumb">
        <span className="label">文档</span>
      </div>
      <h1 className="docs-title">GPT-Load 2.0 文档</h1>
      <p className="docs-lede">
        按任务组织，不是目录树的翻版。想了解这个项目是什么，回
        <Link className="link" href="/">
          首页
        </Link>
        ；来这里的人是要动手的。
      </p>
      <div className="docs-rule" />

      <div className="g12 rows-30" style={{ marginTop: 34 }}>
        {FAST.map((f) => (
          <Link className={`col-4 step${f.hot ? " hot" : ""}`} key={f.href} href={f.href}>
            <div className="n">{f.n}</div>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 62 }}>
        {groups.map((g, gi) => (
          <div className="idx-g" key={g.title}>
            <div className="h">
              <span className="n">{String(gi + 1).padStart(2, "0")}</span>
              <span className="t">{g.title}</span>
            </div>
            <div className="idx-list">
              {g.items.map((d) => (
                <Link className="idx-item" key={d.href} href={d.href}>
                  <span className="r">
                    <span className="t">{d.label}</span>
                    {d.status === "draft" ? <span className="tag">待完善</span> : null}
                  </span>
                  {d.desc ? <span className="d">{d.desc}</span> : null}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="notice" style={{ marginTop: 56 }}>
        <span className="t">1.4.x</span>
        <p>
          仍在使用 1.4.x？它的文档完整保留在 <a className="link" href="/v1/docs">1.4.x 文档</a>。
          注意 <b>2.0 无法原地升级</b>，也不能导入 1.x 数据，迁移方式见{" "}
          <Link className="link" href="/docs/migrate-from-1x">
            从 1.x 迁移
          </Link>
          。
        </p>
      </div>
    </div>
  );
}
