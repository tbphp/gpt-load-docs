/**
 * 文档导航的唯一来源。
 * 左侧导航、上下页翻页、文档首页索引全部由它生成——新增文档页只改这一处。
 *
 * status:
 *   "ready"   已完成内容
 *   "draft"   路由与导航已就位，内容待补
 */
export type DocStatus = "ready" | "draft";

export type DocItem = {
  href: string;
  label: string;
  /** 一句话说明，用于文档首页索引 */
  desc?: string;
  status: DocStatus;
};

export type DocGroup = {
  title: string;
  items: DocItem[];
};

export const DOC_GROUPS: DocGroup[] = [
  {
    title: "开始",
    items: [
      { href: "/docs", label: "文档首页", desc: "按任务找到该看哪一页", status: "ready" },
      { href: "/docs/quickstart", label: "快速开始", desc: "从零到第一个请求成功，约五分钟", status: "ready" },
      { href: "/docs/concepts", label: "核心概念", desc: "渠道、分组、AccessKey 的三层模型", status: "draft" },
      { href: "/docs/install", label: "部署", desc: "Docker Compose、原生二进制、源码构建", status: "draft" },
    ],
  },
  {
    title: "配置",
    items: [
      { href: "/docs/channels", label: "渠道", desc: "二十个内置渠道的配置方式", status: "draft" },
      { href: "/docs/channels/subscription", label: "订阅账号", desc: "Codex、Claude、Antigravity、Grok 的 OAuth 授权", status: "draft" },
      { href: "/docs/groups", label: "分组与模型", desc: "模型发现、模型路由与分组策略", status: "draft" },
      { href: "/docs/access-keys", label: "AccessKey", desc: "协议选择、分组授权与限流", status: "draft" },
      { href: "/docs/config", label: "配置参考", desc: "环境变量全表", status: "draft" },
    ],
  },
  {
    title: "运行",
    items: [
      { href: "/docs/scheduling", label: "调度与容错", desc: "权重、亲和、重试、冷却、拉黑", status: "draft" },
      { href: "/docs/monitoring", label: "监控与用量", desc: "健康、路由检查、日志、成本估算", status: "draft" },
      { href: "/docs/database", label: "数据库", desc: "三种驱动、DSN、迁移与备份", status: "draft" },
      { href: "/docs/security", label: "安全", desc: "两把密钥、网络边界、上生产清单", status: "draft" },
    ],
  },
  {
    title: "接入",
    items: [
      { href: "/docs/clients", label: "客户端接入", desc: "Claude Code、Codex、Cherry Studio 等", status: "draft" },
    ],
  },
  {
    title: "其他",
    items: [
      { href: "/docs/migrate-from-1x", label: "从 1.x 迁移", desc: "2.0 无法原地升级，需并行部署", status: "draft" },
      { href: "/docs/faq", label: "常见问题", desc: "部署、接入与排障的高频问题", status: "draft" },
    ],
  },
];

/** 扁平顺序，用于上下页翻页 */
export const DOC_FLAT: DocItem[] = DOC_GROUPS.flatMap((g) => g.items);

export function findDoc(href: string): DocItem | undefined {
  return DOC_FLAT.find((d) => d.href === href);
}

/** 取相邻页，用于页脚翻页 */
export function findNeighbors(href: string): { prev?: DocItem; next?: DocItem } {
  const i = DOC_FLAT.findIndex((d) => d.href === href);
  if (i < 0) return {};
  return { prev: DOC_FLAT[i - 1], next: DOC_FLAT[i + 1] };
}

/** 当前页所属分组名，用于面包屑 */
export function findGroupTitle(href: string): string | undefined {
  return DOC_GROUPS.find((g) => g.items.some((d) => d.href === href))?.title;
}
