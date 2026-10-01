import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/clients/codex-voice");
}

const TOC = [
  { id: "prepare", label: "接入前准备" },
  { id: "mode", label: "选择语音模式" },
  { id: "client", label: "配置 Codex 客户端" },
  { id: "relay", label: "部署网关中继" },
  { id: "lifecycle", label: "会话与费用" },
  { id: "trouble", label: "接通验证与排障" },
];

export default function CodexVoice() {
  return (
    <DocsPage path="/docs/clients/codex-voice" title="Codex 实时语音" lede="通过 GPT-Load 接入 Codex 语音：先配置账号与客户端，再按网络条件选择音频直连或网关中继。" toc={TOC}>
      <Heading id="prepare">接入前准备</Heading>
      <ol>
        <li>准备支持实时语音的 Codex 客户端，允许麦克风访问。功能入口和实验参数是否可用，取决于客户端版本。</li>
        <li>在 GPT-Load 创建 Codex 订阅分组，完成 OAuth 授权或导入订阅凭据。上游账号必须实际具有语音权限；文本请求成功不代表语音也已获授权。</li>
        <li>创建访问密钥并允许该 Codex 分组。若设置了协议过滤，需要同时允许 codex-live（语音）和 openai-responses（文本）；若设置了模型过滤，也要放行客户端请求的语音模型。</li>
      </ol>
      <p>语音模型不必加入分组的模型列表，客户端指定的模型会原样交给上游；未指定时使用 gpt-live-1-codex。这里使用 Codex 订阅渠道，不是把普通 OpenAI API Key 当作订阅凭据。</p>
      <p><Link href="/docs/groups/subscription">订阅账号授权与导入 →</Link></p>

      <Heading id="mode">选择语音模式</Heading>
      <p>在「系统设置 → 连接与超时 → 实时语音」设置默认模式。Codex 分组的「高级配置／运行参数」可以继承或覆盖；不同分组可以使用不同模式。</p>
      <div className="tbl-wrap"><table className="tbl">
        <thead><tr><th>模式</th><th>音频与数据通道</th><th>网络要求</th></tr></thead>
        <tbody>
          <tr><td>直连上游（默认）</td><td>客户端直接连接上游媒体端点</td><td>客户端能访问上游；服务器无需额外映射媒体 UDP</td></tr>
          <tr><td>网关中继</td><td>经过 GPT-Load，可使用其出站代理</td><td>客户端能访问服务器媒体 IP 与 UDP 端口</td></tr>
          <tr><td>关闭</td><td>该分组不参与语音调度</td><td>不影响文本请求；会结束受影响的现有语音会话</td></tr>
        </tbody>
      </table></div>
      <p>两种启用模式都由 GPT-Load 鉴权、选择账号、创建会话并代理控制 WebSocket。上游账号令牌不会交给客户端。区别只在媒体路径：直连模式下，服务器的出站代理无法替客户端代理音频。</p>
      <Notice label="从早期语音版本升级" tone="amber">早期实现始终使用中继；当前未设置模式时默认直连。依赖服务器传输音频的部署，升级后请显式选择「网关中继」。</Notice>

      <Heading id="client">配置 Codex 客户端</Heading>
      <p>优先在 GPT-Load 首页选择访问密钥和 Codex，复制生成的配置。下面给出完整示例：将地址替换为客户端可访问的网关地址，将 YOUR_TEXT_MODEL 替换为已开放的文本模型。</p>
      <CodeBlock caption="~/.codex/config.toml">{`model = "YOUR_TEXT_MODEL"
model_provider = "gpt-load"

experimental_realtime_webrtc_call_base_url = "http://127.0.0.1:3001/v1"
experimental_realtime_ws_base_url = "http://127.0.0.1:3001/v1"

[model_providers.gpt-load]
name = "OpenAI"
base_url = "http://127.0.0.1:3001/v1"
model_catalog_url = "http://127.0.0.1:3001/v1/models"
env_key = "GPT_LOAD_API_KEY"
wire_api = "responses"
supports_websockets = true

[features]
api_key_model_discovery = true
realtime_conversation = true`}</CodeBlock>
      <CodeBlock caption="在启动客户端的环境中设置">{`export GPT_LOAD_API_KEY="YOUR_ACCESS_KEY"
codex`}</CodeBlock>
      <p>合并到已有配置时不要重复创建同名 TOML 节；两个 experimental_realtime_* 参数属于顶层，要放在任何 [section] 之前。远程部署请使用 HTTPS 地址，并让客户端进程继承 GPT_LOAD_API_KEY。</p>
      <p>这些语音参数属于实验配置，以当前管理台生成内容为准。保存后重新启动客户端，从其语音入口开始会话。supports_websockets 控制文本 Responses WebSocket，不等于打开语音；语音还需要独立的实时连接配置和 realtime_conversation。</p>
      <p><a href="https://learn.chatgpt.com/docs/config-file/config-reference" target="_blank" rel="noopener noreferrer">Codex 官方配置参考 →</a></p>

      <Heading id="relay">部署网关中继</Heading>
      <p>仅选择「网关中继」时需要这一节。所有中继分组共用服务端媒体地址和 UDP 范围，不必逐个分组开端口。</p>
      <ol>
        <li>下载与所运行版本一致的 docker-compose.voice.yml，放在主 docker-compose.yml 旁边。</li>
        <li>在 .env 设置客户端可达的服务器媒体 IP。不要填写域名、容器内网地址或示例 IP。</li>
      </ol>
      <CodeBlock caption=".env">{`CODEX_LIVE_PUBLIC_IP=YOUR_PUBLIC_IP
CODEX_LIVE_UDP_PORT_MIN=50000
CODEX_LIVE_UDP_PORT_MAX=50127`}</CodeBlock>
      <p><a href="https://github.com/tbphp/gpt-load/blob/main/docker-compose.voice.yml" target="_blank" rel="noopener noreferrer">查看语音 Compose 配置（下载时切换到部署版本）→</a></p>
      <ol start={3}>
        <li>在云安全组、系统防火墙及 NAT 映射中放行同一 UDP 范围，然后使用两个 Compose 文件启动。</li>
      </ol>
      <CodeBlock caption="启动或更新中继部署">{`docker compose -f docker-compose.yml -f docker-compose.voice.yml up -d`}</CodeBlock>
      <ol start={4}>
        <li>在系统或 Codex 分组设置中选择「网关中继」，保存后新建语音会话。以后更新容器也要带上这两个 Compose 文件。</li>
      </ol>
      <p>原生进程使用相同环境变量，并放行相同 UDP 端口；修改媒体环境变量后需要重启。复杂 NAT 场景可通过 CODEX_LIVE_ICE_SERVERS 配置 STUN/TURN，格式见环境变量参考。</p>
      <p>HTTP 反向代理负责建连和控制连接，必须转发 WebSocket Upgrade；它不会自动代理媒体 UDP。已有 Nginx 代理中可加入以下设置，保留原来的 TLS 和访问控制。</p>
      <CodeBlock caption="Nginx：网关代理 location 内">{`proxy_pass http://127.0.0.1:3001;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_buffering off;
proxy_read_timeout 3600s;`}</CodeBlock>
      <p><Link href="/docs/reference/env#voice">语音环境变量 →</Link></p>

      <Heading id="lifecycle">会话与费用</Heading>
      <p>创建会话时使用全局加权调度和重试预算。明确的 403／429 拒绝可以换候选，401 可刷新凭据后重试；结果不明的超时或成功建连后的断线，不会自动换账号重建通话。语音准入失败不会拉黑该账号的文本能力。</p>
      <p>建立后，会话固定账号和媒体路径。直连与中继都必须在创建后 30 秒内接入控制 WebSocket；控制断线后 30 秒未重连也会清理会话。更换或停用访问密钥、撤销权限也会终止受影响的通话。</p>
      <p>每通会话结束后记录一条日志。语音目前不估算音频费用，不扣减访问密钥的音频成本；已有成本限额仍会影响新通话准入。未计价不代表上游免费。</p>
      <p>上游挂断首次失败时记录「未完成」，主动挂断接口返回 502。服务器最多尝试挂断 3 次，重试期间占用并发名额且不能重新接入；重试耗尽后释放本地名额，但不代表已确认上游媒体停止。</p>

      <Heading id="trouble">接通验证与排障</Heading>
      <p>先确认文本请求正常，再开始一次短语音会话，检查双向音频，主动挂断后查看请求日志。仅模型列表可读或建连接口成功，不能证明媒体链路已通。</p>
      <div className="tbl-wrap"><table className="tbl">
        <thead><tr><th>现象</th><th>优先检查</th></tr></thead>
        <tbody>
          <tr><td>没有语音入口</td><td>客户端版本、实验功能开关、是否重启及麦克风权限</td></tr>
          <tr><td>无可用候选或权限错误</td><td>Codex 分组、语音模式、访问密钥的分组／协议／模型过滤，以及账号语音权限</td></tr>
          <tr><td>建连成功但没有声音</td><td>直连查客户端到上游的网络；中继查媒体 IP、UDP 映射和防火墙</td></tr>
          <tr><td>约 30 秒后断开</td><td>控制 WebSocket 是否建立，反向代理是否转发 Upgrade</td></tr>
          <tr><td>中继通过代理仍连接失败</td><td>所选出站代理及网络是否支持实际使用的媒体传输</td></tr>
        </tbody>
      </table></div>
    </DocsPage>
  );
}
