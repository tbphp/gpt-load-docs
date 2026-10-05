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
        <span className="k">export</span> ANTHROPIC_MODEL=<span className="s">&quot;YOUR_MODEL&quot;</span>{"\n"}
        <span className="k">export</span> ANTHROPIC_CUSTOM_MODEL_OPTION=<span className="s">&quot;$ANTHROPIC_MODEL&quot;</span>{"\n"}
        <span className="k">export</span> CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY=<span className="s">&quot;1&quot;</span>{"\n"}
        {"\n"}
        claude
      </CodeBlock>
      <p>
        将 YOUR_MODEL 替换为这把访问密钥可用的模型 ID，并在同一 Shell 中启动或重启 Claude Code。
        该模型会用于启动，也会加入 /model 的自定义选项；
        自动发现仅额外列出 ID 含 claude 或 anthropic 的模型（不区分大小写）。
      </p>
      <p>
        要长期生效就写进 shell 配置文件。这把访问密钥需要勾选
        {" "}
        <strong>Anthropic Messages</strong> 协议。
      </p>

      <Heading id="codex">Codex CLI</Heading>
      <p>
        管理台首页选择 Codex 后会生成配置文件和环境变量。模型发现只返回当前访问密钥可用、且具有 Responses 生成路由的模型；下面是文本接入示例。
      </p>
      <CodeBlock caption="~/.codex/config.toml">{`model = "YOUR_MODEL"
model_provider = "gpt-load"

[model_providers.gpt-load]
name = "OpenAI"
base_url = "http://127.0.0.1:3001/v1"
model_catalog_url = "http://127.0.0.1:3001/v1/models"
env_key = "GPT_LOAD_API_KEY"
wire_api = "responses"
supports_websockets = true

[features]
api_key_model_discovery = true`}</CodeBlock>
      <CodeBlock caption="在启动客户端的环境中设置">{`export GPT_LOAD_API_KEY="YOUR_ACCESS_KEY"`}</CodeBlock>
      <p>将 YOUR_MODEL 替换为已开放的模型，合并配置后重新启动客户端。模型发现参数需客户端支持；以当前管理台生成的配置为准。</p>
      <p>可在模型页选择 Codex 展示的模型并排序，操作见 <Link href="/docs/models#client-catalog">Codex 模型目录</Link>。</p>
      <Notice label="会话内切换思考等级" tone="blue">
        使用支持该功能的 Codex CLI 时，可用以下命令启用会话内思考等级更新。所选模型也需支持 configuration_update；GPT-Load 会保留更新及原有缓存语义，能否命中缓存仍由上游决定。
      </Notice>
      <CodeBlock caption="启用客户端实验功能">{`codex --enable reasoning_effort_override`}</CodeBlock>
      <p>此开关由客户端版本决定；模型目录中的等级展示不代表模型支持会话内更新。</p>
      <p><Link href="/docs/clients/codex-voice">Codex 实时语音：客户端配置、直连与中继部署 →</Link></p>
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

      <p>CC Switch 的余额查询可使用通用模板和访问密钥，Base URL 填网关根地址或 /v1 均可。返回的是访问密钥总成本限额的美元估算余额，不是上游账户余额；周期限额不参与，没有总限额时 total 和 balance 均为 0。</p>

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
