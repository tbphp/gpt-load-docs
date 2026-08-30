import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "管理 API",
  description: "GPT-Load 管理接口，用于脚本化管理分组、凭据与访问密钥。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/reference/api" title="管理 API" lede="用脚本管理分组和密钥，不必每次都开管理台。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>认证方式与统一的响应约定</li>\n        <li>按资源列出端点，每个给 curl 示例</li>\n        <li>批量操作：导入凭据、批量启停</li>\n        <li>注意：管理接口面向自动化，<strong>不要暴露到公网</strong></li>
      </ul>
    </DocsPage>
  );
}
