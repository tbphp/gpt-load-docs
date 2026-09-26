import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/internals/protocols");
}

const TOC = [
  { id: "four", label: "四种对话协议" },
  { id: "entry", label: "接口入口" },
  { id: "convert", label: "转换是怎么发生的" },
  { id: "limit", label: "不能转换的情况" },
  { id: "stateful", label: "有状态请求" },
  { id: "pick", label: "该用哪个协议" },
];

export default function Protocols() {
  return (
    <DocsPage
      path="/docs/internals/protocols"
      title="协议与转换边界"
      lede="网关能在协议之间转换，但不是万能翻译器。这一页说明边界在哪，以及遇到不支持的组合时会怎样。"
      toc={TOC}
    >
      <Heading id="four">四种对话协议</Heading>
      <p>GPT-Load 接受四种对话协议。它们是并列关系，一把访问密钥可以同时允许多个；图片、向量、重排序、决策和实时语音另有独立协议权限。</p>
      <ul>
        <li>
          <strong>OpenAI Chat Completions</strong>——最通用，
          绝大多数兼容客户端和第三方服务都走这条
        </li>
        <li>
          <strong>OpenAI Responses</strong>——较新的接口形态，
          支持有状态的多轮接续
        </li>
        <li>
          <strong>Anthropic Messages</strong>——Claude 系客户端的原生入口
        </li>
        <li>
          <strong>Gemini</strong>——Gemini 系客户端的原生入口
        </li>
      </ul>

      <Notice label="OpenAI 是两个协议" tone="blue">
        Chat Completions 和 Responses 是<b>两个独立协议</b>，不是一个的新旧版本。
        管理台里选「OpenAI」预设时会同时勾上这两个，但它们各自有独立的入口和能力。
      </Notice>

      <Heading id="entry">接口入口</Heading>
      <p>客户端按各自协议的习惯访问，不需要在路径里带分组名：</p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>协议</th>
              <th>主要入口</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI Chat Completions</td>
              <td className="m">/v1/chat/completions</td>
            </tr>
            <tr>
              <td>OpenAI Responses</td>
              <td className="m">/v1/responses 及其资源路径</td>
            </tr>
            <tr>
              <td>Anthropic Messages</td>
              <td className="m">/v1/messages</td>
            </tr>
            <tr>
              <td>Gemini</td>
              <td className="m">/v1beta/models/…</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>除对话外，还提供这些接口（可用性取决于上游渠道）：</p>
      <ul>
        <li>
          <strong>模型列表</strong>——<code>/v1/models</code> 与{" "}
          <code>/v1beta/models</code>
        </li>
        <li>
          <strong>向量嵌入</strong>——<code>/v1/embeddings</code>；Gemini 原生使用 <code>/v1beta/models/…:embedContent</code> 或 <code>:batchEmbedContents</code>
        </li>
        <li>
          <strong>图片生成与编辑</strong>——<code>/v1/images/generations</code>、
          <code>/v1/images/edits</code>
        </li>
        <li>
          <strong>token 计数</strong>——<code>/v1/messages/count_tokens</code>{" "}
          及 Gemini 的 <code>countTokens</code>
        </li>
        <li>纯文本重排序：POST /v1/rerank，独立使用 rerank 协议，不支持流式或协议互转。</li>
        <li>JEV 决策：POST /v1/decisions，由 Jev 或 OpenRouter 渠道原生执行，独立使用 decisions 协议。</li>
        <li>Codex 实时语音：独立使用 codex-live 协议，不是 Responses WebSocket 的另一种文本模式。</li>
      </ul>
      <p>Gemini、New API 与 GPT-Load 支持原生 gemini-embeddings；Gemini 渠道还可将 OpenAI Embeddings 的文本请求转成 Gemini 原生批量嵌入，支持 dimensions 及 float／base64 输出，不支持 token ID 输入。</p>
      <p><Link href="/docs/clients/codex-voice">Codex 实时语音接入指南 →</Link></p>
      <p>GET /v1/models 携带非空 anthropic-version 请求头时返回 Anthropic 模型列表；否则返回 OpenAI Chat Completions 格式。直接调接口时按客户端协议带上对应请求头。</p>
      <p><Link href="/docs/reference/support-matrix">查看逐渠道协议与 Operation →</Link></p>

      <Heading id="convert">转换是怎么发生的</Heading>
      <p>
        客户端用的协议，和上游渠道支持的协议<strong>不一定相同</strong>。
        比如你用 Claude Code（Anthropic 协议）请求一个 OpenAI 渠道的模型——
        网关会把请求转成 OpenAI 格式发出去，再把响应转回 Anthropic 格式。
      </p>
      <p>
        这个转换对客户端是透明的。<strong>请求日志里能看到转换过程</strong>，
        排查响应格式异常时先看这里，见{" "}
        <Link href="/docs/monitor">监控与排障</Link>。
      </p>
      <p>
        <strong>协议相同时不发生转换</strong>，请求基本原样透传——
        这也是延迟最低、兼容性最好的路径。
      </p>

      <Heading id="limit">不能转换的情况</Heading>
      <Notice label="它不是万能翻译器" tone="amber">
        每个渠道<b>声明自己能执行哪些协议与能力</b>。网关只在这些声明的能力之间转换，
        不会尝试把任意协议、任意 JSON 强行翻译成另一种。
      </Notice>
      <p>常见的转换失败场景：</p>
      <ul>
        <li>
          <strong>目标渠道不支持该能力</strong>——
          比如向一个纯文本模型请求图片生成
        </li>
        <li>
          <strong>协议特有的参数没有对应物</strong>——
          某些参数只存在于一种协议里，转换时会被丢弃或报错
        </li>
        <li>
          <strong>模型本身不支持</strong>——
          比如对不支持视觉的模型发送图片输入
        </li>
      </ul>
      <p>
        遇到这类问题，<strong>最直接的解法是让客户端协议和渠道协议对齐</strong>：
        用 Claude 客户端就配 Anthropic 渠道，减少中间转换。
      </p>

      <Heading id="stateful">有状态请求</Heading>
      <p>
        OpenAI Responses 支持靠 <code>previous_response_id</code>、
        <code>conversation</code> 或已有资源 ID 接续上下文。
        这类请求有个前提：
      </p>
      <Notice label="响应续接使用原凭据" tone="amber">
        对支持上游存储的原生 HTTP/SSE Responses，网关记录返回的响应 ID。使用同一访问密钥携带 previous_response_id 时，只使用当前仍允许的原凭据，不受软亲和开关影响，也不会因失败换号。
      </Notice>
      <p>转换或无状态响应、明确 store:false 的新响应不会登记；未知、过期或淘汰的 ID 会在本地拒绝，包括网关外或升级前创建的 ID。仅正常停机成功保存后可恢复绑定，不保证崩溃恢复。</p>
      <p>conversation 和其他资源操作仍不保证回到原凭据；请使用单凭据分组，或确认上游支持跨凭据共享。中转渠道只保证回到原下一跳。</p>
      <p>GET /v1/responses 支持原生 WebSocket，当前适用于 OpenAI、Codex、xAI、GPT-Load、CLIProxyAPI、Sub2API。连接固定上游 Session，Codex 仅支持原连接内续接；不提供 WS→HTTP 转换，也不保证重连恢复上下文。开关见运行时设置。</p>
      <p>
        另一个选择是<strong>不用有状态接口</strong>——
        每次把完整上下文发过去。这样任何凭据都能处理，
        调度也更均衡，代价是每次请求的输入 token 更多。
      </p>

      <Heading id="pick">该用哪个协议</Heading>
      <p>没有绝对的优劣，按情况选：</p>
      <ul>
        <li>
          <strong>客户端已经定了</strong>——用它原生的那个，转换最少。
          Claude Code 就用 Anthropic，Gemini CLI 就用 Gemini
        </li>
        <li>
          <strong>自己写代码</strong>——Chat Completions 兼容性最广，
          换上游最省事
        </li>
        <li>
          <strong>需要有状态接续</strong>——Responses；
          注意响应 ID 续接与其他资源引用的不同边界
        </li>
      </ul>
      <p>
        访问密钥里<strong>可以同时勾选多个协议</strong>，
        不确定就都勾上，用不到的协议不会有副作用。
        配置见 <Link href="/docs/access-keys">访问密钥</Link>。
      </p>
    </DocsPage>
  );
}
