import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "订阅账号",
  description: "Codex、Claude、Antigravity、Grok 订阅账号的 OAuth 授权、回调端口约束与额度观察。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/groups/subscription" title="订阅账号" lede="订阅账号和 API 密钥共用同一套调度，但接入方式是 OAuth 授权而非填密钥。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>四个订阅渠道：Codex、Claude、Antigravity、Grok</li>
        <li>完整 OAuth 授权流程，<strong>授权入口常驻展开</strong>，不做折叠</li>
        <li>回调端口由上游客户端写死：<strong>一台主机同时只能跑一个默认 Compose 实例</strong></li>
        <li>SSH 或远程浏览器场景：<code>localhost</code> 回调不通时，把完整回调 URL 粘进授权对话框</li>
        <li>被动额度信号：额度窗口怎么读，快用完时管理台如何提示</li>
        <li>额度信息只作展示，真正触发切换的是上游的限流响应</li>
        <li>合规提醒：只接自己有权使用的账号，遵守各服务商条款</li>
      </ul>
    </DocsPage>
  );
}
