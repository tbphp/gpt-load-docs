import type { Metadata } from "next";
import { docPageMetadata } from "@/lib/v2/doc-meta";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/groups");
}

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

export default async function Groups() {
  const locale = await getLocale();

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
      <p>
        建分组时从这些里选一个。常用渠道直接显示为按钮，其余渠道收在「其他渠道」中。
        不同类别的凭据形态不一样：
      </p>

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
        点<strong>分组 → 导入渠道凭据 → 新建分组</strong>。
        要填的核心只有三样：渠道、凭据、模型。
      </p>

      <Figure
        src={docScreenshot(locale, "grp-01-list.png")}
        alt="分组列表，展示多个分组的状态、渠道、模型数量和凭据状态"
        width={2880}
        height={1440}
        caption="FIG. 1 — 分组列表"
        note="每个分组一个上游"
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
        <Link href="/docs/monitor">监控与排障</Link> 里的路由检查，
        能看出哪些分组进入候选，以及当前有多少可用凭据。
      </p>

      <Heading id="creds">管理凭据池</Heading>
      <p>
        凭据池是分组的核心。<strong>放几把密钥，网关就在几把之间轮转</strong>，
        单把出问题不会影响整体。
      </p>

      <Figure
        src={docScreenshot(locale, "grp-02-credentials.png")}
        alt="分组凭据页，展示多条凭据及可用、冷却和停用等状态统计"
        width={2880}
        height={1440}
        caption="FIG. 2 — 凭据池"
        note="多条凭据 · 不同状态"
      >
        顶部按状态分类统计。可用的参与轮转，冷却中的暂时跳过，拉黑的已被自动摘除。
      </Figure>

      <p>凭据可以做这些操作：</p>
      <ul>
        <li>
          <strong>批量导入</strong>——从分组列表进入独立的「导入渠道凭据」页面，
          一次粘贴多把密钥，每行一个
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
        src={docScreenshot(locale, "grp-05-import.png")}
        alt="导入渠道凭据的已有分组页，显示目标分组和多行 API 密钥输入区"
        width={2880}
        height={1440}
        caption="FIG. 3 — 批量导入"
        note="一行一个密钥"
      >
        重复的密钥会被自动识别并跳过，可以放心整段粘贴。
      </Figure>

      <Heading id="models">开放哪些模型</Heading>
      <p>
        分组要声明它对外提供哪些模型。可以从上游<strong>自动发现</strong>，
        也可以手工添加。
      </p>

      <Figure
        src={docScreenshot(locale, "grp-03-models.png")}
        alt="分组的模型与别名表格，展示模型 ID、对外别名和定价状态"
        width={2880}
        height={1440}
        caption="FIG. 4 — 模型与别名"
        note="发现 · 手工添加 · 别名"
      >
        只有列在这里的模型，才能通过这个分组被请求到。
      </Figure>

      <p>
        模型别名就在同一张表里配置；价格与成本估算见{" "}
        <Link href="/docs/models">模型管理</Link>。
      </p>

      <Heading id="policy">运行策略</Heading>
      <p>
        设置标签页里是这个分组的运行参数：权重、超时、重试次数、冷却阈值、
        会话亲和、出站代理。
      </p>

      <Figure
        src={docScreenshot(locale, "grp-04-settings.png")}
        alt="分组设置页，展示权重、超时、重试及继承系统默认值的配置项"
        width={2880}
        height={1440}
        caption="FIG. 5 — 分组设置"
        note="覆盖系统级默认值"
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
