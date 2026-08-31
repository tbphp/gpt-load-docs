import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/clients");
}

const TOC = [
  { id: "rule", label: "通用规则" },
  { id: "auto", label: "让管理台生成配置" },
  { id: "sdk", label: "OpenAI SDK" },
  { id: "anthropic", label: "Anthropic SDK" },
  { id: "claude-code", label: "Claude Code" },
  { id: "codex", label: "Codex CLI" },
  { id: "gemini-cli", label: "Gemini CLI" },
  { id: "gui", label: "桌面客户端" },
  { id: "trouble", label: "接不上时" },
];

export default async function Clients() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/clients"
      title="客户端接入"
      lede="绝大多数客户端只要改两处：把地址指向 GPT-Load，把密钥换成访问密钥。"
      toc={TOC}
    >
      <Heading id="rule">通用规则</Heading>
      <p>不管什么客户端，要改的都是这两样：</p>
      <ul>
        <li>
          <strong>接口地址</strong>——改成 <code>http://127.0.0.1:3001</code>
          （加不加 <code>/v1</code> 取决于客户端的习惯，见下面各例）
        </li>
        <li>
          <strong>密钥</strong>——换成管理台里创建的<strong>访问密钥</strong>，
          不是上游服务商的密钥
        </li>
      </ul>
      <p>
        认证方式<strong>按客户端原本的习惯来</strong>，网关都认：
        <code>Authorization: Bearer</code>、<code>x-api-key</code>、
        <code>x-goog-api-key</code>，以及 Gemini 的 <code>key</code> 查询参数。
      </p>

      <Notice label="模型名要对得上" tone="blue">
        请求里的模型名，必须在这把访问密钥能用的某个分组里<b>已经开放</b>。
        提示模型不存在时，先去分组的模型标签页确认，见{" "}
        <Link href="/docs/groups">分组与渠道</Link>。
      </Notice>

      <Heading id="auto">让管理台生成配置</Heading>
      <p>
        不用自己拼——管理台首页可以<strong>直接生成各客户端的接入参数</strong>：
        选一把访问密钥，选目标客户端，配置片段就出来了，复制即可。
      </p>

      <Figure
        src={docScreenshot(locale, "cli-01-connect.png")}
        alt="管理台首页的一键生成配置区域，显示访问密钥、客户端列表和配置片段"
        width={2880}
        height={1440}
        caption="FIG. 1 — 一键生成配置"
        note="选密钥与客户端"
      >
        支持 Claude Code、Codex、Gemini CLI、Cherry Studio、Cline、NextChat、Open WebUI、CC Switch、New API 与 curl。
        生成的配置里会标出这个客户端需要哪个协议，照着勾就不会错。
      </Figure>

      <Heading id="sdk">OpenAI SDK</Heading>
      <p>官方 SDK 只改两行：</p>
      <CodeBlock caption="Python">
        <span className="k">from</span> openai <span className="k">import</span> OpenAI{"\n"}
        {"\n"}
        client = OpenAI({"\n"}
        {"    "}base_url=<span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>,{"   "}
        <span className="c"># 改这行</span>{"\n"}
        {"    "}api_key=<span className="s">&quot;你的访问密钥&quot;</span>,{"          "}
        <span className="c"># 改这行</span>{"\n"}
        ){"\n"}
        {"\n"}
        resp = client.chat.completions.create({"\n"}
        {"    "}model=<span className="s">&quot;你的模型名&quot;</span>,{"\n"}
        {"    "}messages=[{"{"}<span className="s">&quot;role&quot;</span>: <span className="s">&quot;user&quot;</span>, <span className="s">&quot;content&quot;</span>: <span className="s">&quot;你好&quot;</span>{"}"}],{"\n"}
        )
      </CodeBlock>
      <CodeBlock caption="Node.js">
        <span className="k">import</span> OpenAI <span className="k">from</span> <span className="s">&quot;openai&quot;</span>;{"\n"}
        {"\n"}
        <span className="k">const</span> client = <span className="k">new</span> OpenAI({"{"}{"\n"}
        {"  "}baseURL: <span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>,{"\n"}
        {"  "}apiKey: <span className="s">&quot;你的访问密钥&quot;</span>,{"\n"}
        {"}"});
      </CodeBlock>
      <p>
        环境变量方式同样可行：设置 <code>OPENAI_BASE_URL</code> 与{" "}
        <code>OPENAI_API_KEY</code>，代码就完全不用动。
      </p>

      <Heading id="anthropic">Anthropic SDK</Heading>
      <CodeBlock caption="Python">
        <span className="k">from</span> anthropic <span className="k">import</span> Anthropic{"\n"}
        {"\n"}
        client = Anthropic({"\n"}
        {"    "}base_url=<span className="s">&quot;http://127.0.0.1:3001&quot;</span>,{"   "}
        <span className="c"># 注意：不带 /v1</span>{"\n"}
        {"    "}api_key=<span className="s">&quot;你的访问密钥&quot;</span>,{"\n"}
        )
      </CodeBlock>
      <p>
        Anthropic 客户端走 <code>/v1/messages</code>，SDK 会自己拼上这段路径，
        所以 <code>base_url</code> 填到根即可。
      </p>

      <Heading id="claude-code">Claude Code</Heading>
      <p>用环境变量指向网关：</p>
      <CodeBlock caption="终端里设置后再启动">
        <span className="k">export</span> ANTHROPIC_BASE_URL=<span className="s">&quot;http://127.0.0.1:3001&quot;</span>{"\n"}
        <span className="k">export</span> ANTHROPIC_AUTH_TOKEN=<span className="s">&quot;你的访问密钥&quot;</span>{"\n"}
        {"\n"}
        claude
      </CodeBlock>
      <p>
        要长期生效就写进 shell 配置文件。这把访问密钥需要勾选
        {" "}
        <strong>Anthropic Messages</strong> 协议。
      </p>

      <Heading id="codex">Codex CLI</Heading>
      <p>
        Codex 走 OpenAI 协议，把它的接口地址和密钥指向网关即可。
        管理台的一键生成里有 Codex 选项，直接复制那段配置最稳妥。
      </p>
      <CodeBlock caption="环境变量方式">
        <span className="k">export</span> OPENAI_BASE_URL=<span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>{"\n"}
        <span className="k">export</span> OPENAI_API_KEY=<span className="s">&quot;你的访问密钥&quot;</span>
      </CodeBlock>
      <Notice label="Codex 要的是 Responses，不是 Chat Completions" tone="amber">
        这把访问密钥必须勾选 <b>OpenAI Responses</b> 协议。
        Codex 用的是 Responses 接口，只勾了 Chat Completions 会被直接拒绝——
        路由检查里会看到 <code>protocol_filtered</code>。
      </Notice>
      <Notice label="别和订阅账号搞混" tone="blue">
        这里说的是<b>把 Codex 客户端接到网关</b>。
        如果你想接的是「Codex 订阅账号作为上游」，那是另一件事，见{" "}
        <Link href="/docs/groups/subscription">订阅账号</Link>。
      </Notice>

      <Heading id="gemini-cli">Gemini CLI</Heading>
      <CodeBlock caption="环境变量方式">
        <span className="k">export</span> GOOGLE_GEMINI_BASE_URL=<span className="s">&quot;http://127.0.0.1:3001&quot;</span>{"\n"}
        <span className="k">export</span> GEMINI_API_KEY=<span className="s">&quot;你的访问密钥&quot;</span>
      </CodeBlock>
      <p>
        Gemini 客户端走 <code>/v1beta/models/…</code>，
        访问密钥需要勾选 <strong>Gemini</strong> 协议。
      </p>

      <Heading id="gui">桌面客户端</Heading>
      <p>
        Cherry Studio、NextChat、Open WebUI、Cline 这类图形客户端，
        通常在设置里有「自定义 API 地址」和「API Key」两个输入框，填法一致：
      </p>
      <ul>
        <li>
          <strong>API 地址</strong>：<code>http://127.0.0.1:3001/v1</code>
        </li>
        <li>
          <strong>API Key</strong>：你的访问密钥
        </li>
        <li>
          <strong>模型</strong>：填分组里开放的模型名；
          有些客户端支持点「获取模型列表」自动拉取
        </li>
      </ul>
      <p>
        具体到某个客户端的截图步骤，用管理台的一键生成更快——
        它会给出那个客户端对应的准确字段。
      </p>

      <Heading id="trouble">接不上时</Heading>
      <p>按这个顺序排查，多数问题在前两步就能定位：</p>
      <ol>
        <li>
          <strong>先用 curl 验证网关本身</strong>——排除客户端配置问题：
        </li>
      </ol>
      <CodeBlock caption="最小验证">
        curl http://127.0.0.1:3001/v1/chat/completions \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer 你的访问密钥&quot;</span> \{"\n"}
        {"  "}-H <span className="s">&quot;Content-Type: application/json&quot;</span> \{"\n"}
        {"  "}-d <span className="s">&apos;{"{"}&quot;model&quot;:&quot;你的模型名&quot;,&quot;messages&quot;:[{"{"}&quot;role&quot;:&quot;user&quot;,&quot;content&quot;:&quot;hi&quot;{"}"}]{"}"}&apos;</span>
      </CodeBlock>
      <ol start={2}>
        <li>
          <strong>curl 通了但客户端不通</strong>——多半是地址末尾的{" "}
          <code>/v1</code> 多了或少了，或者协议没在访问密钥里勾选
        </li>
        <li>
          <strong>提示模型不存在</strong>——去分组的模型标签页确认该模型已开放
        </li>
        <li>
          <strong>请求发出去但失败</strong>——用{" "}
          <Link href="/docs/monitor">监控与排障</Link> 里的请求日志看具体原因，
          路由检查能展示候选分组和当前可用凭据数量
        </li>
      </ol>
    </DocsPage>
  );
}
