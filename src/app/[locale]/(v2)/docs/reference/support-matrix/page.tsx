import { initLocale, type LocalizedPageProps } from "@/i18n/static-locale";
import type { Metadata } from "next";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  await initLocale(params);
  return docPageMetadata("/docs/reference/support-matrix");
}

const TOC = [
  { id: "scope", label: "能力口径" },
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
  { channel: "Jev", credential: "API 密钥", chat: "—", responses: "—", anthropic: "—", gemini: "—" },
  { channel: "Cerebras", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Mistral", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Nebius", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Parasail", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Wafer", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Hugging Face", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Cohere", credential: "API 密钥", chat: "—", responses: "—", anthropic: "—", gemini: "—" },
  { channel: "OpenAI", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Codex", credential: "OAuth / OAuth JSON", chat: "C", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Claude", credential: "OAuth / OAuth JSON", chat: "C", responses: "C", anthropic: "N", gemini: "C" },
  { channel: "Antigravity", credential: "OAuth / OAuth JSON", chat: "C", responses: "C", anthropic: "C", gemini: "N" },
  { channel: "Grok", credential: "设备码 / OAuth JSON", chat: "C", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Muse Code", credential: "设备码 / CPA 凭据 JSON", chat: "C", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Devin", credential: "浏览器授权 / CPA 凭据 JSON", chat: "C", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Anthropic", credential: "API 密钥", chat: "C", responses: "C", anthropic: "N", gemini: "C" },
  { channel: "Google Gemini", credential: "API 密钥", chat: "C", responses: "C", anthropic: "C", gemini: "N" },
  { channel: "Azure OpenAI", credential: "API 密钥 / Entra", chat: "C", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "AWS Bedrock", credential: "Bedrock API Key / AWS 凭据", chat: "C", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Google Vertex AI", credential: "服务账号 JSON", chat: "C", responses: "C", anthropic: "C", gemini: "N/C" },
  { channel: "DeepSeek", credential: "API 密钥", chat: "N", responses: "N", anthropic: "N", gemini: "C" },
  { channel: "Moonshot AI", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "SiliconFlow", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Zhipu AI", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Alibaba Cloud Bailian", credential: "API 密钥", chat: "N", responses: "N", anthropic: "N", gemini: "C" },
  { channel: "Volcengine Ark", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "OpenRouter", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "Cline", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "Groq", credential: "API 密钥", chat: "N", responses: "C", anthropic: "C", gemini: "C" },
  { channel: "xAI", credential: "API 密钥", chat: "N", responses: "N", anthropic: "C", gemini: "C" },
  { channel: "OpenCode Go", credential: "API 密钥", chat: "N", responses: "N", anthropic: "N", gemini: "—" },
  { channel: "OpenCode Zen", credential: "API 密钥", chat: "N", responses: "N", anthropic: "N", gemini: "—" },
  { channel: "GPT-Load", credential: "AccessKey + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "New API", credential: "API 密钥 + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "CLIProxyAPI", credential: "API 密钥 + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
  { channel: "Sub2API", credential: "API 密钥 + 根地址", chat: "N", responses: "N", anthropic: "N", gemini: "N" },
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
  { channel: "Jev", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Cerebras", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Mistral", images: "—", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Nebius", images: "—", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Parasail", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Wafer", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Hugging Face", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Cohere", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: false, proxy: true },
  { channel: "OpenAI", images: "N", embeddings: "N", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "N", discovery: true, proxy: true },
  { channel: "Codex", images: "N", embeddings: "—", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Claude", images: "—", embeddings: "—", anthropicCount: "N", geminiCount: "C", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Antigravity", images: "C", embeddings: "—", anthropicCount: "C", geminiCount: "N", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Grok", images: "—", embeddings: "—", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Muse Code", images: "—", embeddings: "—", anthropicCount: "C", geminiCount: "C", responsesCount: "N", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Devin", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Anthropic", images: "—", embeddings: "—", anthropicCount: "N", geminiCount: "C", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Google Gemini", images: "C", embeddings: "C", anthropicCount: "C", geminiCount: "N", responsesCount: "C", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Azure OpenAI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "AWS Bedrock", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "Google Vertex AI", images: "—", embeddings: "C", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: false },
  { channel: "DeepSeek", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Moonshot AI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "SiliconFlow", images: "—", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Zhipu AI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Alibaba Cloud Bailian", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Volcengine Ark", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "OpenRouter", images: "—", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Cline", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "Groq", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "xAI", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "OpenCode Go", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "OpenCode Zen", images: "—", embeddings: "—", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
  { channel: "GPT-Load", images: "N", embeddings: "N", anthropicCount: "N", geminiCount: "N", responsesCount: "N", responsesResources: "N", discovery: true, proxy: true },
  { channel: "New API", images: "N", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "N*", discovery: true, proxy: true },
  { channel: "CLIProxyAPI", images: "N", embeddings: "—", anthropicCount: "N", geminiCount: "N", responsesCount: "—", responsesResources: "N*", discovery: true, proxy: true },
  { channel: "Sub2API", images: "N", embeddings: "—", anthropicCount: "N", geminiCount: "N", responsesCount: "—", responsesResources: "N*", discovery: true, proxy: true },
  { channel: "OpenAI Compatible", images: "N", embeddings: "N", anthropicCount: "—", geminiCount: "—", responsesCount: "—", responsesResources: "—", discovery: true, proxy: true },
];

function ModeCell({ value }: { value: Mode }) {
  return <td className="m">{value}</td>;
}

function FlagCell({ value }: { value: boolean }) {
  return <td className="m">{value ? "✓" : "—"}</td>;
}

export default async function SupportMatrix({ params }: LocalizedPageProps) {
  await initLocale(params);
  return (
    <DocsPage
      path="/docs/reference/support-matrix"
      title="渠道与能力支持矩阵"
      lede="逐渠道核对凭据类型、客户端协议、Operation、路由模式、模型发现与托管代理。"
      toc={TOC}
    >
      <Heading id="scope">能力口径</Heading>
      <p>本页描述 GPT-Load 已声明的路由能力，不代表任意模型或上游都支持该能力。</p>
      <Notice label="读表方式" tone="blue">
        N 表示 Native，按目标协议原生执行；C 表示 Converted，由网关转换；N/C 表示按模型决定；N* 表示仅支持部分原生资源操作，范围见表后说明；— 表示当前没有声明该路由。
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
      <p>百炼的 Chat Completions、Responses Create 和 Anthropic Messages 原生执行，Gemini Generate 仍转换为 Chat Completions。Responses 仅支持无状态创建，不支持资源操作或原生 WebSocket。</p>
      <p>百炼 Base URL 继续填写 OpenAI 兼容根地址，默认 https://dashscope.aliyuncs.com/compatible-mode/v1。Responses 在此地址后追加 /responses；Anthropic 则将末尾的 /compatible-mode/v1（或 /v1）替换为 /apps/anthropic，无上述后缀时直接追加 /apps/anthropic，再追加 /v1/messages，保留原主机与前置路径。</p>
      <p>百炼 Anthropic 请求直接调用上游；模型不支持 Messages 时返回上游错误，不再回退到 Chat Completions 转换。模型发现仍读取 OpenAI 兼容 /models，列出模型不代表它支持 Messages；tools、cache_control、thinking 等能力以该模型和账号实际支持范围为准。</p>
      <p>Devin 的四种对话入口均转换为其私有上游调用，不新增公开协议，也不提供原生 Responses WebSocket、独立 Token 计数或 Responses 资源操作。</p>

      <Heading id="operations">附加 Operation</Heading>
      <div className="tbl-wrap">
        <table className="tbl" style={{ minWidth: 1180 }}>
          <thead>
            <tr>
              <th>渠道</th>
              <th>Images 生成/编辑</th>
              <th>OpenAI Embeddings</th>
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
      <p>Images 的 N 表示原生生成与编辑；C 表示 Gemini 与 Antigravity 仅支持单张、非流式、Base64 图片生成转换，不含编辑。Responses 资源接口包括查询、删除、取消、输入项、压缩及命名空间透传。</p>
      <p>Responses 资源列的 N*：CLIProxyAPI 与 New API 支持 Compact 及 Responses 命名空间扩展透传，Sub2API 仅支持 Compact。三者均不支持响应查询、删除、取消、输入项或 Responses Input Tokens；GPT-Load 渠道支持这些操作。资源或扩展子路径的首段须为本网关记录、属于当前访问密钥的响应 ID；POST 创建、compact 与 input_tokens 不受此资源归属检查影响。扩展透传不保证上游实现该接口，上游的错误状态仍会原样返回。</p>
      <p>CLIProxyAPI、New API 与 GPT-Load 原生支持 POST /v1/alpha/search，访问密钥需允许 openai-responses 协议。模型映射与搜索载荷会传给上游，响应内容和状态保留；搜索不计作模型 token 用量。上游账号和服务是否允许搜索仍需自行确认。</p>
      <p>纯文本 Rerank 由 Cohere、SiliconFlow、OpenAI Compatible、New API、GPT-Load 原生支持，入口为 POST /v1/rerank；不支持流式或协议互转，访问密钥需允许 rerank 协议。</p>
      <p>Gemini 原生嵌入（embedContent／batchEmbedContents）由 Google Gemini、Google Vertex AI、New API、GPT-Load 支持，使用 gemini-embeddings 协议。表中的 Google Gemini 与 Google Vertex AI OpenAI Embeddings 为文本转换，不接受 token ID 输入；Vertex 不支持数字自定义端点或旧式 :predict 向量模型。</p>
      <p>Jev 与 OpenRouter 原生支持 decisions；Codex 订阅渠道支持独立的 codex-live 实时语音。Jev 与 Cohere 没有对话路由，不应作为普通聊天渠道使用。</p>
      <p>OpenAI、OpenRouter 与 Mistral 原生支持 POST /v1/audio/speech，访问密钥需允许独立的 audio-speech 协议。OpenAI 的 stream_format=sse 与 Mistral 的 stream=true 支持原生 SSE，OpenRouter 仅支持普通响应；不做协议互转，也不提供语音凭据探测。其他渠道当前未声明该路由。</p>
      <p>Mistral 渠道原生支持 OCR、FIM 补全、音频转写、文本与聊天审核、分类、音色管理和 WebSocket 实时转写，访问密钥需允许独立的 mistral 协议。Chat Completions 与 Embeddings 仍使用 OpenAI 兼容协议。</p>
      <p>模型发现指管理端使用凭据发现上游模型；数据面的模型列表返回当前 AccessKey 可见的已配置模型，不会实时查询上游。</p>
      <p>Muse Code 的 Token 计数仅对 muse- 模型提供本地估算，返回 X-GPT-Load-Token-Count: local-estimate，不代表上游精确计数。Devin 的模型发现先核实账号，再读取随版本发布的目录，具体可用性仍取决于上游账号。</p>
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
              <td>覆盖本页列出的 37 个渠道路由合同</td>
            </tr>
            <tr>
              <td>Artifact smoke</td>
              <td>真实发布二进制或镜像走完整产品路径，但上游可以是受控替身</td>
              <td>发布镜像覆盖 OpenAI Compatible Chat 到 fake upstream</td>
            </tr>
            <tr>
              <td>Live upstream verified</td>
              <td>指定版本、渠道、Operation 和模型使用真实凭据完成验证</td>
              <td>当前没有集中发布、可逐项追溯的 37 渠道 Live E2E 记录</td>
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
        <li>OpenCode Go 与 OpenCode Zen 仅支持上游模型可用的原生协议；Responses 为无状态创建，不支持 Gemini 或 Responses 资源接口。</li>
        <li>Mistral 原生接口不包含 files、batch、agents、conversations 或浏览器临时令牌会话。</li>
        <li>Devin 仅接受文本、内联图片与客户端工具；拒绝远程图片、音频、视频、文档、服务端工具及对话中途的 system 指令。</li>
        <li>Devin 不支持上游响应续接标识、非空 stop、强制或禁用工具、强制串行工具调用或受约束的输出格式。Chat Completions 只接受 function 工具；Responses 可使用 custom 与 namespace 工具。</li>
        <li>协议路由不代表模型一定支持 tools、reasoning、视觉或其他模型级特性。</li>
        <li>Azure OpenAI、AWS Bedrock 与 Google Vertex AI 不支持 GPT-Load 托管代理。</li>
      </ul>
    </DocsPage>
  );
}
