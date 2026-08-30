import type { Metadata } from "next";
import { pageMeta } from "@/lib/v2/site";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";

export const metadata: Metadata = pageMeta({
  title: "分组与渠道",
  description: "GPT-Load 的二十个内置渠道、分组的创建与配置、凭据池的管理方式。",
  path: "/docs/groups",
});

const TOC = [
  { id: "what", label: "分组是什么" },
  { id: "channels", label: "二十个内置渠道" },
  { id: "create", label: "建一个分组" },
  { id: "params", label: "渠道参数" },
  { id: "creds", label: "管理凭据池" },
  { id: "models", label: "开放哪些模型" },
  { id: "policy", label: "运行策略" },
  { id: "custom", label: "自定义渠道" },
  { id: "split", label: "什么时候该拆分组" },
];

const CHANNELS = [
  { g: "官方 API", c: "var(--cat-1)", items: "OpenAI · Anthropic · Gemini · xAI", cred: "API 密钥" },
  { g: "云平台", c: "var(--cat-2)", items: "Azure OpenAI · AWS Bedrock · Google Vertex AI", cred: "平台凭据（AK/SK 或服务账号）" },
  {
    g: "模型服务",
    c: "var(--cat-3)",
    items: "DeepSeek · Moonshot AI · SiliconFlow · 智谱 AI · 阿里云 · 火山引擎 · OpenRouter · Groq",
    cred: "API 密钥",
  },
  { g: "订阅账号", c: "var(--cat-4)", items: "Codex · Claude · Antigravity · Grok", cred: "OAuth 授权" },
];

export default function Groups() {
  return (
    <DocsPage
      path="/docs/groups"
      title="分组与渠道"
      lede="分组是对接上游的全部配置：用哪个服务、拿哪些凭据、开放哪些模型、按什么策略跑。"
      toc={TOC}
    >
      <Heading id="what">分组是什么</Heading>
      <p>
        一个分组对应<strong>一个上游服务</strong>，里面装着一池凭据。
        网关收到请求后，在这池凭据里挑一个可用的发出去；某个凭据限流或失效，
        会自动避开它用别的，不需要你介入。
      </p>
      <p>
        分组和访问密钥的分工见 <Link href="/docs/concepts">核心概念</Link>。
        简单说：<strong>分组朝上游，访问密钥朝应用</strong>。
      </p>

      <Heading id="channels">二十个内置渠道</Heading>
      <p>建分组时从这些里选一个。不同类别的凭据形态不一样：</p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>类别</th>
              <th style={{ width: "50%" }}>渠道</th>
              <th>凭据形态</th>
            </tr>
          </thead>
          <tbody>
            {CHANNELS.map((row) => (
              <tr key={row.g}>
                <td style={{ color: row.c }}>{row.g}</td>
                <td>{row.items}</td>
                <td>{row.cred}</td>
              </tr>
            ))}
            <tr>
              <td>自定义</td>
              <td>OpenAI Compatible</td>
              <td>API 密钥 + 自填地址</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        每个渠道会声明自己<strong>能执行哪些协议和能力</strong>。
        网关在支持的能力之间做转换，但它不是万能翻译器——边界见{" "}
        <Link href="/docs/internals/protocols">协议与转换边界</Link>。
      </p>

      <Heading id="create">建一个分组</Heading>
      <p>
        点<strong>分组 → 新建</strong>。要填的核心只有三样：渠道、凭据、模型。
      </p>

      <Figure
        src="/v2/docs/grp-01-list.png"
        caption="FIG. 1 — 分组列表"
        note="每个分组一个上游"
        shot={{
          id: "GRP-01",
          where: "管理台 → 分组，列表页",
          include: [
            "至少 2–3 个分组，最好对应不同渠道",
            "能看到每个分组的渠道、凭据数量、状态",
            "「新建」按钮",
          ],
          hint: "分组名如果带了公司或项目信息，改成通用名称再截。",
        }}
      >
        接几个上游就建几个分组。同一个服务商的多把密钥不用拆，放同一个分组里即可。
      </Figure>

      <Heading id="params">渠道参数</Heading>
      <p>选定渠道后，表单会出现这个渠道特有的参数。常见的几种：</p>
      <ul>
        <li>
          <strong>接口地址</strong>——官方渠道有默认值，用中转或自建服务时才需要改
        </li>
        <li>
          <strong>区域</strong>——AWS Bedrock、Google Vertex AI 这类云平台要指定区域
        </li>
        <li>
          <strong>部署名</strong>——Azure OpenAI 的模型部署标识
        </li>
      </ul>
      <p>
        填错这些通常表现为请求全部失败。遇到时用{" "}
        <Link href="/docs/monitor">监控与排障</Link> 里的路由检查，能直接看出网关实际发到了哪。
      </p>

      <Heading id="creds">管理凭据池</Heading>
      <p>
        凭据池是分组的核心。<strong>放几把密钥，网关就在几把之间轮转</strong>，
        单把出问题不会影响整体。
      </p>

      <Figure
        src="/v2/docs/grp-02-credentials.png"
        caption="FIG. 2 — 凭据池"
        note="多条凭据 · 不同状态"
        shot={{
          id: "GRP-02",
          where: "管理台 → 分组 → 某个分组 → 凭据 tab",
          include: [
            "多条凭据（4 条以上最好）",
            "状态尽量不一样：有可用的，最好也有冷却中或已停用的",
            "顶部的状态统计（全部 / 可用 / 冷却 / 拉黑 / 停用）",
            "批量操作栏",
          ],
          hint: "这是本页最重要的一张。密钥一律脱敏，只留后四位。如果环境里没有异常状态的凭据，截正常状态也可以。",
        }}
      >
        顶部按状态分类统计。可用的参与轮转，冷却中的暂时跳过，拉黑的已被自动摘除。
      </Figure>

      <p>凭据可以做这些操作：</p>
      <ul>
        <li>
          <strong>批量导入</strong>——一次粘贴多把密钥，每行一个
        </li>
        <li>
          <strong>启用／停用</strong>——停用后不参与轮转，但保留在池子里
        </li>
        <li>
          <strong>单条权重</strong>——让某把密钥承担更多或更少流量
        </li>
        <li>
          <strong>查看真实值</strong>——凭据加密存储，需要时可以显式查看
        </li>
        <li>
          <strong>单独设代理</strong>——某把密钥需要走不同出口时用，见{" "}
          <Link href="/docs/advanced/proxy-and-headers">代理与请求头</Link>
        </li>
      </ul>

      <Figure
        src="/v2/docs/grp-05-import.png"
        caption="FIG. 3 — 批量导入"
        note="一行一个密钥"
        shot={{
          id: "GRP-05",
          where: "管理台 → 分组 → 某个分组 → 凭据 tab → 批量导入",
          include: ["导入弹窗或面板", "多行密钥的粘贴区域（脱敏）", "导入按钮与数量提示"],
          hint: "示例密钥用 sk-xxxx-••••1234 这种形式，保证一眼看出是占位。",
        }}
      >
        重复的密钥会被自动识别并跳过，可以放心整段粘贴。
      </Figure>

      <Heading id="models">开放哪些模型</Heading>
      <p>
        分组要声明它对外提供哪些模型。可以从上游<strong>自动发现</strong>，
        也可以手工添加。
      </p>

      <Figure
        src="/v2/docs/grp-03-models.png"
        caption="FIG. 4 — 可用模型"
        note="发现 · 勾选"
        shot={{
          id: "GRP-03",
          where: "管理台 → 分组 → 某个分组 → 模型 tab",
          include: ["已选中的模型列表", "模型发现的入口按钮"],
        }}
      >
        只有列在这里的模型，才能通过这个分组被请求到。
      </Figure>

      <p>
        模型别名、价格与成本估算是独立的一块，见{" "}
        <Link href="/docs/models">模型管理</Link>。
      </p>

      <Heading id="policy">运行策略</Heading>
      <p>
        设置 tab 里是这个分组的运行参数：权重、超时、重试次数、冷却阈值、
        会话亲和、出站代理。
      </p>

      <Figure
        src="/v2/docs/grp-04-settings.png"
        caption="FIG. 5 — 分组设置"
        note="覆盖系统级默认值"
        shot={{
          id: "GRP-04",
          where: "管理台 → 分组 → 某个分组 → 设置 tab",
          include: ["权重、超时、重试等可配项", "能看出哪些是继承系统默认、哪些被单独覆盖"],
        }}
      >
        这些参数<strong>系统级也有一份</strong>，分组这里填了就覆盖系统值，没填则继承。
      </Figure>

      <p>
        各参数分别调什么、什么场景下该改，见{" "}
        <Link href="/docs/settings">运行时设置</Link>。
      </p>

      <Heading id="custom">自定义渠道</Heading>
      <p>
        要接的服务不在内置列表里，但兼容 OpenAI 接口？选 <strong>OpenAI Compatible</strong>，
        自己填接口地址和密钥即可。各类中转服务、自建的推理服务都走这个。
      </p>

      <Heading id="split">什么时候该拆分组</Heading>
      <p>
        <strong>该拆的情况：</strong>
      </p>
      <ul>
        <li>对接不同的上游服务——这是硬性的，一个分组只能选一个渠道</li>
        <li>同一服务商，但两批密钥要用不同策略（比如一批主用、一批兜底）</li>
        <li>同一服务商，但要开放给不同应用的模型范围不同</li>
      </ul>
      <p>
        <strong>不用拆的情况：</strong>同一个服务商的多把密钥。
        直接放进一个池子，网关自己会轮转和避让，拆开反而失去了互为备份的效果。
      </p>

      <Notice label="订阅账号" tone="blue">
        Codex、Claude、Antigravity、Grok 这类账号走的是 OAuth 授权而不是填密钥，
        配置方式有额外的注意事项（尤其是回调端口和远程部署），见{" "}
        <Link href="/docs/groups/subscription">订阅账号</Link>。
      </Notice>
    </DocsPage>
  );
}
