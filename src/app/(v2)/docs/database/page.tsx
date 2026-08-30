import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "数据库",
  description: "SQLite、MySQL、PostgreSQL 三种驱动的选择、DSN 格式、迁移与备份。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/database" title="数据库" lede="默认 SQLite 起步，需要时可以换成 MySQL 或 PostgreSQL。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>留空 <code>DATABASE_DSN</code> 使用受管 SQLite；非空一律视为 operator-managed</li>
        <li>统一 URL 合同：三种驱动的 DSN 写法</li>
        <li>迁移机制：一条有序增量链，新库与旧库走同一套注册表</li>
        <li>备份：数据库与 <code>encryption.key</code> 必须一起备</li>
        <li>换驱动时的数据处理方式</li>
      </ul>
    </DocsPage>
  );
}
