import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "从 1.x 迁移",
  description: "GPT-Load 2.0 无法原地升级，本页说明并行部署与切流量的步骤。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/migrate-from-1x" title="从 1.x 迁移" lede="2.0 是完全重写，无法打开、导入或迁移 1.x 的数据。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>开头一条警示：<strong>不能原地升级，也没有数据导入工具</strong></li>
        <li>并行部署：独立的数据库、<code>DATA_DIR</code>、端口与 Docker 卷</li>
        <li>概念对照表：1.x 的分组 vs 2.0 的渠道 / 分组 / AccessKey 三层</li>
        <li>URL 变化：Group 不再作为路径段传入</li>
        <li>切流量的验证清单，以及回滚窗口内保留 1.x 部署</li>
      </ul>
    </DocsPage>
  );
}
