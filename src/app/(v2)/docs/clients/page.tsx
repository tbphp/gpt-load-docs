import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "客户端接入",
  description: "Claude Code、Codex CLI、Gemini CLI、Cherry Studio 等客户端的接入配置。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/clients" title="客户端接入" lede="一页覆盖全部客户端，左侧目录直接跳到你要的那个。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>通用规则：base URL 换成 <code>:3001/v1</code>，API Key 换成 AccessKey</li>
        <li>认证方式按客户端习惯：<code>Authorization: Bearer</code>、<code>x-api-key</code>、<code>x-goog-api-key</code>、Gemini 的 <code>key</code> 参数</li>
        <li>逐个给配置片段：Claude Code、Codex CLI、Gemini CLI、Cherry Studio、OpenCode</li>
        <li>OpenAI / Anthropic 官方 SDK 的最小改动示例</li>
        <li>管理台首页能一键生成接入参数，不用手抄</li>
      </ul>
    </DocsPage>
  );
}
