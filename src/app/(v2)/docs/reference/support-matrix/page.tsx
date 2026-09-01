import type { Metadata } from "next";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/reference/support-matrix");
}

const TOC = [
  { id: "scope", label: "口径与版本" },
  { id: "core", label: "凭据与核心协议" },
  { id: "operations", label: "附加 Operation" },
  { id: "validation", label: "验证等级" },
  { id: "limits", label: "已知限制" },
];

type Mode = "N" | "C" | "N/C" | "N*" | "—";

type CoreRoute = {
  channel: string;
  credential: string;
  chat: Mode;
  responses: Mode;
  anthropic: Mode;
  gemini: Mode;
};

const CORE_ROUTES: CoreRoute[] = [
  { channel: "OpenAI", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Codex", credential: "OAuth / OAuth JSON", chat: "C", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Claude", credential: "OAuth / OAuth JSON", chat: "C", responses: "C", anthropic: "N", gemini: "C" },
  { channel: "Antigravity", credential: "OAuth / OAuth JSON", chat: "C", responses: "C", anthropic: "C", gemini: "N" },
  { channel: "Grok", credential: "设备码 / OAuth JSON", chat: "C", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Anthropic", credential: "API 密钥", chat: "C", responses: "C", anthropic: "N", gemini: "C" },
  { channel: "Google Gemini", credential: "API 密钥", chat: "C", responses: "C", anthropic: "C", gemini: "N" },
  { channel: "Azure OpenAI", credential: "API 密钥 / Entra", chat: "C", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "AWS Bedrock", credential: "Bedrock API Key / AWS 凭据", chat: "C", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Google Vertex AI", credential: "服务账号 JSON", chat: "C", responses: "C", anthropic: "C", gemini: "N/C" },
  { channel: "DeepSeek", credential: "API 密钥", chat: "N", responses: "N", anthropic: "N", gemini: "C" },
  { channel: "Moonshot AI", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "SiliconFlow", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Zhipu AI", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Alibaba Cloud Bailian", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Volcengine Ark", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "OpenRouter", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Groq", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "xAI", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "GPT-Load", credential: "AccessKey + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "New API", credential: "API 密钥 + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "CLIProxyAPI", credential: "API 密钥 + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "OpenAI Compatible", credential: "API 密钥 + 自填地址", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
];

type OperationRoute = {
  channel: string;
  images: Mode;
  embeddings: Mode;
  anthropicCount: Mode;
  geminiCount: Mode;
  responsesCount: Mode;
  responsesResources: Mode;
  discovery: boolean;
  proxy: boolean;
};

const OPERATIONS: OperationRoute[] = [
  { channel: "OpenAI", images: "N", embeddings: "N", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "N", discovery: true, proxy: true },
  { channel: "Codex", images: "N", embeddings: "—", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Claude", images: "—", embeddings: "—", anthropicCount: "N", geminiCount: "C", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Antigravity", images: "—", embeddings: "—", anthropicCount: "C", geminiCount: "N", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Grok", images: "—", embeddings: "—", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Anthropic", images: "—", embeddings: "—", anthropicCount: "N", geminiCount: "C", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Google Gemini", images: "—", embeddings: "—", anthropicCount: "C", geminiCount: "N", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Azure OpenAI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "AWS Bedrock", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "Google Vertex AI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "DeepSeek", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Moonshot AI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "SiliconFlow", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Zhipu AI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Alibaba Cloud Bailian", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Volcengine Ark", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "OpenRouter", images: "—", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Groq", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "xAI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "GPT-Load", images: "N", embeddings: "N", anthropicCount: "N", geminiCount: "N", responsesCount: "N", responsesResources: "N", discovery: true, proxy: true },
  { channel: "New API", images: "N", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "N*", discovery: true, proxy: true },
  { channel: "CLIProxyAPI", images: "N", embeddings: "—", anthropicCount: "N", geminiCount: "N", responsesCount: "—", responsesResources: "N*", discovery: true, proxy: true },
  { channel: "OpenAI Compatible", images: "N", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
];

function ModeCell({ value }: { value: Mode }) {
  return <td className="m">{value}</td>;
}

function FlagCell({ value }: { value: boolean }) {
  return <td className="m">{value ? "✓" : "—"}</td>;
}

export default function SupportMatrix() {
  return (
    <DocsPage
      path="/docs/reference/support-matrix"
      title="渠道与能力支持矩阵"
      lede="逐渠道核对凭据类型、客户端协议、Operation、路由模式、模型发现与托管代理。"
      toc={TOC}
    >
      <Heading id="scope">口径与版本</Heading>
      <p>本页描述 GPT-Load 已声明的路由能力，不代表任意模型或上游都支持该能力。</p>
      <p>矩阵来源于 GPT-Load v2.0.0-rc.3 的渠道描述符，核对日期为 2026-09-02。后续版本以对应版本的渠道描述符为准。</p>
      <Notice label="读表方式" tone="blue">
        N 表示 Native，按目标协议原生执行；C 表示 Converted，由网关转换；N/C 表示按模型决定；N* 表示仅原生支持 Compact；— 表示当前没有声明该路由。
      </Notice>

      <Heading id="core">凭据与核心协议</Heading>
      <div className="tbl-wrap">
        <table className="tbl" style={{ minWidth: 940 }}>
          <thead>
            <tr>
              <th>渠道</th>
              <th>凭据</th>
              <th>Chat Completions</th>
              <th>Responses Create</th>
              <th>Anthropic Messages</th>
              <th>Gemini Generate</th>
            </tr>
          </thead>
          <tbody>
            {CORE_ROUTES.map((row) => (
              <tr key={row.channel}>
                <td>{row.channel}</td>
                <td>{row.credential}</td>
                <ModeCell value={row.chat} />
                <ModeCell value={row.responses} />
                <ModeCell value={row.anthropic} />
                <ModeCell value={row.gemini} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>路由模式按协议和 Operation 分别声明；同一个渠道可以同时包含 Native 与 Converted。</p>

      <Heading id="operations">附加 Operation</Heading>
      <div className="tbl-wrap">
        <table className="tbl" style={{ minWidth: 1180 }}>
          <thead>
            <tr>
              <th>渠道</th>
              <th>Images 生成/编辑</th>
              <th>Embeddings</th>
              <th>Anthropic CountTokens</th>
              <th>Gemini CountTokens</th>
              <th>Responses Input Tokens</th>
              <th>Responses 资源接口</th>
              <th>模型发现</th>
              <th>托管代理</th>
            </tr>
          </thead>
          <tbody>
            {OPERATIONS.map((row) => (
              <tr key={row.channel}>
                <td>{row.channel}</td>
                <ModeCell value={row.images} />
                <ModeCell value={row.embeddings} />
                <ModeCell value={row.anthropicCount} />
                <ModeCell value={row.geminiCount} />
                <ModeCell value={row.responsesCount} />
                <ModeCell value={row.responsesResources} />
                <FlagCell value={row.discovery} />
                <FlagCell value={row.proxy} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Images 同时表示生成与编辑；Responses 资源接口包括查询、删除、取消、输入项、压缩及命名空间透传。</p>
      <p>模型发现指管理端使用凭据发现上游模型；数据面的模型列表返回当前 AccessKey 可见的已配置模型，不会实时查询上游。</p>
      <p>托管代理指 GPT-Load 在凭据、分组或全局层注入的代理；Provider SDK 自行读取环境变量不属于这个合同。</p>

      <Heading id="validation">验证等级</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>等级</th>
              <th>含义</th>
              <th>当前公开证据</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Automated contract</td>
              <td>渠道声明、RouteMode、适配器能力与自动化测试一致</td>
              <td>覆盖本页列出的 23 个渠道路由合同</td>
            </tr>
            <tr>
              <td>Artifact smoke</td>
              <td>真实发布二进制或镜像走完整产品路径，但上游可以是受控替身</td>
              <td>发布镜像覆盖 OpenAI Compatible Chat 到 fake upstream</td>
            </tr>
            <tr>
              <td>Live upstream verified</td>
              <td>指定版本、渠道、Operation 和模型使用真实凭据完成验证</td>
              <td>当前没有集中发布、可逐项追溯的 23 渠道 Live E2E 记录</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Notice label="实现支持不等于真实上游已验证" tone="amber">
        上游会改变接口、模型与账号政策。没有版本、日期、Operation、模型和证据链接的验证记录，不标记为 Live upstream verified。
      </Notice>

      <Heading id="limits">已知限制</Heading>
      <ul>
        <li>OpenAI Compatible 的真实能力取决于你填写的中转服务；矩阵只说明 GPT-Load 能构造和接收哪些请求。</li>
        <li>Google Vertex AI 的 Gemini 路由按模型决定 Native 或 Converted。</li>
        <li>协议路由不代表模型一定支持 tools、reasoning、视觉或其他模型级特性。</li>
        <li>Azure OpenAI、AWS Bedrock 与 Google Vertex AI 不支持 GPT-Load 托管代理。</li>
      </ul>
    </DocsPage>
  );
}
