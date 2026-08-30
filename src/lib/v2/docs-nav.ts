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
    title: "开始使用",
    items: [
      { href: "/docs", label: "文档首页", desc: "按任务找到该看哪一页", status: "ready" },
      { href: "/docs/quickstart", label: "快速开始", desc: "从零到第一个请求成功，约十分钟", status: "ready" },
      { href: "/docs/concepts", label: "核心概念", desc: "分组与访问密钥两层模型", status: "ready" },
      { href: "/docs/install", label: "部署", desc: "Docker Compose、原生二进制、源码构建", status: "ready" },
    ],
  },
  {
    title: "配置",
    items: [
      { href: "/docs/groups", label: "分组与渠道", desc: "二十个内置渠道、分组配置与凭据池", status: "ready" },
      { href: "/docs/groups/subscription", label: "订阅账号", desc: "Codex、Claude、Antigravity、Grok 的 OAuth 授权", status: "ready" },
      { href: "/docs/models", label: "模型管理", desc: "模型发现、别名与价格", status: "ready" },
      { href: "/docs/access-keys", label: "访问密钥", desc: "授权范围、限流与成本上限", status: "ready" },
      { href: "/docs/clients", label: "客户端接入", desc: "Claude Code、Codex、Cherry Studio 等", status: "ready" },
    ],
  },
  {
    title: "运维",
    items: [
      { href: "/docs/monitor", label: "监控与排障", desc: "健康、请求日志、路由检查、用量成本", status: "ready" },
      { href: "/docs/settings", label: "运行时设置", desc: "超时、重试、亲和等运行参数", status: "ready" },
      { href: "/docs/database", label: "数据库与备份", desc: "三种驱动、DSN、迁移与备份", status: "draft" },
      { href: "/docs/security", label: "安全与上生产", desc: "两把密钥、网络边界、上线清单", status: "ready" },
    ],
  },
  {
    title: "深入",
    items: [
      { href: "/docs/internals/scheduling", label: "调度是怎么做的", desc: "权重、亲和、重试、冷却、拉黑", status: "draft" },
      { href: "/docs/internals/protocols", label: "协议与转换边界", desc: "四种协议，什么能转什么不能", status: "draft" },
      { href: "/docs/advanced/proxy-and-headers", label: "代理、请求头与覆盖", desc: "非标场景的处理方式", status: "draft" },
    ],
  },
  {
    title: "参考",
    items: [
      { href: "/docs/reference/env", label: "环境变量", desc: "进程配置全表", status: "draft" },
      { href: "/docs/reference/api", label: "管理 API", desc: "脚本化管理分组与密钥", status: "draft" },
      { href: "/docs/faq", label: "常见问题", desc: "部署、接入与排障的高频问题", status: "draft" },
      { href: "/docs/migrate-from-1x", label: "从 1.x 迁移", desc: "2.0 无法原地升级，需并行部署", status: "ready" },
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
