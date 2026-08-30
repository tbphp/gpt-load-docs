import type { Metadata } from "next";
import { pageMeta } from "@/lib/v2/site";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Figure, Notice } from "@/components/v2/ui";

export const metadata: Metadata = pageMeta({
  title: "快速开始",
  description: "十分钟跑通 GPT-Load：启动服务、登录管理台、建一个分组、发出第一个请求。",
  path: "/docs/quickstart",
});

const TOC = [
  { id: "need", label: "开始之前" },
  { id: "run", label: "一 · 启动服务" },
  { id: "login", label: "二 · 登录管理台" },
  { id: "group", label: "三 · 建一个分组" },
  { id: "key", label: "四 · 创建访问密钥" },
  { id: "call", label: "五 · 发第一个请求" },
  { id: "next", label: "接下来" },
];

export default function Quickstart() {
  return (
    <DocsPage
      path="/docs/quickstart"
      title="快速开始"
      lede="从一台空机器到第一个请求返回结果，大约十分钟。不需要先理解任何概念，跟着做就行。"
      toc={TOC}
    >
      <Heading id="need">开始之前</Heading>
      <p>准备两样东西：</p>
      <ul>
        <li>装好 <strong>Docker</strong> 和 <strong>Docker Compose</strong> 的机器</li>
        <li>
          <strong>一个上游服务的 API 密钥</strong>——OpenAI、Anthropic、Gemini、DeepSeek
          都行，有哪个用哪个
        </li>
      </ul>
      <p>
        不需要准备数据库，默认用内置的 SQLite。也不需要单独部署前端，
        管理台就在同一个程序里。
      </p>

      <Heading id="run">一 · 启动服务</Heading>
      <CodeBlock caption="拉起服务">
        git clone --depth 1 --branch v2 \{"\n"}
        {"  "}https://github.com/tbphp/gpt-load.git{"\n"}
        cd gpt-load{"\n"}
        {"\n"}
        cp .env.example .env{"\n"}
        docker compose up -d
      </CodeBlock>
      <p>确认服务起来了：</p>
      <CodeBlock>curl --fail http://127.0.0.1:3001/health</CodeBlock>
      <p>
        返回正常就说明服务在跑。它默认<strong>只监听本机</strong>，外网访问不到——
        这是有意的，远程访问的正确做法见 <Link href="/docs/security">安全与上生产</Link>。
      </p>

      <Heading id="login">二 · 登录管理台</Heading>
      <p>首次启动会自动生成一把管理密钥，读出来：</p>
      <CodeBlock>
        docker compose exec gpt-load \{"\n"}
        {"  "}sh -c <span className="s">&apos;cat /app/data/auth.key&apos;</span>
      </CodeBlock>
      <p>
        打开{" "}
        <a href="http://127.0.0.1:3001" target="_blank" rel="noopener noreferrer">
          http://127.0.0.1:3001
        </a>
        ，把这串密钥填进去。
      </p>

      <Figure
        src="/v2/docs/qs-01-login.png"
        caption="FIG. 1 — 登录"
        note="填入管理密钥"
        shot={{
          id: "QS-01",
          where: "浏览器打开 http://127.0.0.1:3001，停在登录页",
          include: ["密钥输入框（可以是填了一半的状态）", "登录按钮", "页面上的产品标识"],
          hint: "输入框里不要出现真实密钥，填几个星号或示例字符即可。",
        }}
      />

      <Notice label="也可以" tone="blue">
        不想用自动生成的密钥，就在启动前于 <code>.env</code> 里设 <b>AUTH_KEY</b>。
        另有一把 <b>ENCRYPTION_KEY</b> 用来加密你填进去的上游凭据，
        它和数据库必须一起备份——丢了就解不开了。
      </Notice>

      <Heading id="group">三 · 建一个分组</Heading>
      <p>
        分组是「对接哪个上游、用哪些密钥」的集合。点<strong>分组 → 新建</strong>，
        第一步是选渠道：
      </p>

      <Figure
        src="/v2/docs/qs-02-group-new.png"
        caption="FIG. 2 — 选择渠道"
        note="渠道是建分组时选的"
        shot={{
          id: "QS-02",
          where: "管理台 → 分组 → 新建分组，把渠道下拉展开",
          include: [
            "展开的渠道列表，尽量多露出几个（OpenAI、Anthropic、Gemini…）",
            "能看出这是「新建分组」表单的一部分",
          ],
          hint: "这张图很关键——新用户最常问「渠道在哪加」，这张图直接回答了它是分组里的一个选项。",
        }}
      >
        管理台里没有独立的「渠道」菜单，渠道是新建分组时的一个选项。
      </Figure>

      <p>选好渠道后，把 API 密钥粘进凭据框，再勾选这个分组要开放的模型：</p>

      <Figure
        src="/v2/docs/qs-03-group-filled.png"
        caption="FIG. 3 — 填好的分组"
        note="渠道 · 凭据 · 模型"
        shot={{
          id: "QS-03",
          where: "管理台 → 分组 → 新建分组，表单填写完成、即将提交的状态",
          include: [
            "分组名称已填",
            "渠道已选定（建议用 OpenAI，认知门槛最低）",
            "凭据框里有 key（脱敏）",
            "已勾选至少一个模型",
          ],
          hint: "key 只留前缀和后四位，中间用星号，例如 sk-proj-••••a5df。",
        }}
      >
        一个分组可以放多把密钥，网关会在它们之间轮转；某把失效会自动避开，不影响其他。
      </Figure>

      <p>
        保存之后这个分组就可用了。想了解每个选项的含义，见{" "}
        <Link href="/docs/groups">分组与渠道</Link>。
      </p>

      <Heading id="key">四 · 创建访问密钥</Heading>
      <p>
        分组管的是上游，访问密钥管的是「哪个应用能用什么」。
        点<strong>访问密钥 → 新建</strong>，勾上刚建的分组，选好允许的协议，保存。
      </p>
      <p>
        生成的这串 key 就是<strong>交给应用的东西</strong>——应用不需要知道背后有几个分组、
        几把上游密钥。
      </p>

      <Heading id="call">五 · 发第一个请求</Heading>
      <p>把下面的密钥和模型名换成你自己的：</p>
      <CodeBlock caption="cURL">
        <span className="k">export</span> GPT_LOAD_KEY=<span className="s">&quot;你的访问密钥&quot;</span>{"\n"}
        {"\n"}
        curl http://127.0.0.1:3001/v1/chat/completions \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer ${"${GPT_LOAD_KEY}"}&quot;</span> \{"\n"}
        {"  "}-H <span className="s">&quot;Content-Type: application/json&quot;</span> \{"\n"}
        {"  "}-d <span className="s">
          &apos;{"{"}&quot;model&quot;: &quot;你的模型名&quot;, &quot;messages&quot;: [{"{"}&quot;role&quot;:
          &quot;user&quot;, &quot;content&quot;: &quot;你好&quot;{"}"}]{"}"}&apos;
        </span>
      </CodeBlock>
      <p>拿到回复，整条链路就通了。换成已有的客户端也一样，通常只改两处：</p>
      <CodeBlock caption="Python — OpenAI SDK">
        client = OpenAI({"\n"}
        {"    "}base_url=<span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>,{"   "}
        <span className="c"># 改这行</span>{"\n"}
        {"    "}api_key=<span className="s">&quot;你的访问密钥&quot;</span>,{"          "}
        <span className="c"># 改这行</span>{"\n"}
        )
      </CodeBlock>

      <p>
        管理台首页能<strong>直接生成各客户端的接入参数</strong>，不用自己拼：
      </p>

      <Figure
        src="/v2/docs/qs-04-connect.png"
        caption="FIG. 4 — 一键接入"
        note="选密钥与客户端，自动生成参数"
        shot={{
          id: "QS-04",
          where: "管理台 → 首页 → 「连接到网关」区域",
          include: [
            "访问密钥下拉（已选中一个）",
            "客户端下拉（选 Claude Code 或 Cherry Studio 一类）",
            "下方自动生成的接入参数或配置片段",
          ],
          hint: "密钥同样脱敏，只留后四位。",
        }}
      >
        选好访问密钥和目标客户端，参数直接生成，复制即可。
      </Figure>

      <Heading id="next">接下来</Heading>
      <ul>
        <li>
          想搞清分组和访问密钥的关系 → <Link href="/docs/concepts">核心概念</Link>
        </li>
        <li>
          想接 Codex、Claude 这类订阅账号 → <Link href="/docs/groups/subscription">订阅账号</Link>
        </li>
        <li>
          想在自己的客户端里配好 → <Link href="/docs/clients">客户端接入</Link>
        </li>
        <li>
          准备正式用起来 → <Link href="/docs/security">安全与上生产</Link>
        </li>
        <li>
          从 1.4.x 过来 → <Link href="/docs/migrate-from-1x">从 1.x 迁移</Link>，
          注意<strong>不能原地升级</strong>
        </li>
      </ul>
    </DocsPage>
  );
}
