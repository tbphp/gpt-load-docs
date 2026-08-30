import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "协议与转换边界",
  description: "四种客户端协议的入口、能力覆盖，以及网关能转换与不能转换的边界。",
  path: "/docs/internals/protocols",
});

const TOC = [
  { id: "four", label: "四种协议" },
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
      <Heading id="four">四种协议</Heading>
      <p>
        GPT-Load 接受四种客户端协议。它们是<strong>并列关系</strong>，
        一把访问密钥可以同时允许多个：
      </p>
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
          <strong>向量嵌入</strong>——<code>/v1/embeddings</code>
        </li>
        <li>
          <strong>图片生成与编辑</strong>——<code>/v1/images/generations</code>、
          <code>/v1/images/edits</code>
        </li>
        <li>
          <strong>token 计数</strong>——<code>/v1/messages/count_tokens</code>{" "}
          及 Gemini 的 <code>countTokens</code>
        </li>
      </ul>

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
      <Notice label="有状态请求依赖同一个凭据" tone="amber">
        上下文<b>存在上游那一侧</b>，且通常<b>绑定在创建它的那个凭据上</b>。
        换一个凭据请求，上游会找不到之前的会话。
        <br />
        所以用有状态接口时，<b>必须开启会话亲和</b>，见{" "}
        <Link href="/docs/settings">运行时设置</Link>；
        或者确保该分组只有一个凭据。
      </Notice>
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
          <strong>需要有状态接续</strong>——Responses，
          但记得开会话亲和
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
