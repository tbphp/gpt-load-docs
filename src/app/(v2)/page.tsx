import Image from "next/image";
import Link from "next/link";
import "@/styles/v2/home.css";
import RouteDiagram from "@/components/v2/RouteDiagram";
import { Section, Button, CodeBlock, Notice, Stat } from "@/components/v2/ui";

/* 四个数字讲的是一组对比：接得多、装得轻、改得少。
   给两端上色把这层对比点出来，中间两个留墨色，避免一排全彩失去重点。 */
const FACTS = [
  { value: "20", unit: "个", label: "内置渠道", tone: "blue" },
  { value: "4", unit: "种", label: "客户端协议" },
  { value: "1", unit: "个", label: "Go 二进制" },
  { value: "0", unit: "行", label: "客户端改动", tone: "green" },
];

const CAPS = [
  {
    n: "01",
    t: "一套调度，两种凭据",
    d: "API 密钥和订阅账号（Codex、Claude、Antigravity、Grok）进同一个池子，共用同一套调度、重试、冷却与健康隔离，不用为订阅账号单开一套运维。",
  },
  {
    n: "02",
    t: "客户端不改协议",
    d: "OpenAI Chat Completions、OpenAI Responses、Anthropic Messages、Gemini 原生，四种协议原样透传。已有的 SDK、CLI、桌面客户端一行不动。",
  },
  {
    n: "03",
    t: "坏了自己切走",
    d: "加权轮转、会话亲和、失败重试、过热冷却、连续报错自动拉黑。单个凭据限流或失效，不会拖垮整条链路，也不需要你半夜起来改配置。",
  },
  {
    n: "04",
    t: "每一次调用都看得见",
    d: "健康状态、路由检查、请求日志、用量汇总、按模型的成本估算。哪个凭据在扛量、哪个在冷却、钱花在哪个模型上，都能查到具体那一条。",
  },
  {
    n: "05",
    t: "一个二进制，数据在你手里",
    d: "管理台内嵌在同一个 Go 二进制里，SQLite 默认起步，也可以接 MySQL 或 PostgreSQL。渠道凭据在本地加密落盘，不经过任何第三方。",
  },
  {
    n: "06",
    t: "二十个渠道开箱可用",
    d: "官方 API、云平台、模型服务、订阅账号都已内置，再加一个自定义渠道兜住任意 OpenAI 兼容中转。添加渠道是填表，不是写适配器。",
  },
];

// 四组的颜色与首屏路由图的四条支线严格对应，不要单独改动
const CHANNELS = [
  { t: "官方 API", c: 4, cat: "var(--cat-1)", items: ["OpenAI", "Anthropic", "Gemini", "xAI"] },
  { t: "云平台", c: 3, cat: "var(--cat-2)", items: ["Azure OpenAI", "AWS Bedrock", "Google Vertex AI"] },
  {
    t: "模型服务",
    c: 8,
    cat: "var(--cat-3)",
    items: ["DeepSeek", "Moonshot AI", "SiliconFlow", "智谱 AI", "阿里云", "火山引擎", "OpenRouter", "Groq"],
  },
  { t: "订阅账号", c: 4, cat: "var(--cat-4)", items: ["Codex", "Claude", "Antigravity", "Grok"] },
];

const STEPS = [
  {
    n: "01",
    t: "添加渠道",
    d: "选一个上游服务，填入一个或多个 API 密钥。订阅渠道按提示完成 OAuth 授权，或直接导入已有凭据。",
    m: "CHANNEL → 凭据",
  },
  {
    n: "02",
    t: "创建分组",
    d: "挑一个渠道，配置这个分组可用的模型和运行策略：权重、重试次数、冷却时长、会话亲和。",
    m: "GROUP → 模型 + 策略",
  },
  {
    n: "03",
    t: "创建 AccessKey",
    d: "指定它能用哪些分组、哪些客户端协议，然后把生成的 AccessKey 交给你的应用。这是应用唯一需要知道的东西。",
    m: "ACCESSKEY → 分组 + 协议",
    hot: true,
  },
];

const PROTOCOLS = [
  { t: "OpenAI Chat Completions", p: "POST /v1/chat/completions", d: "最通用的入口，绝大多数兼容客户端走这条" },
  { t: "OpenAI Responses", p: "/v1/responses/**", d: "按命名空间边界透传，支持有状态请求" },
  { t: "Anthropic Messages", p: "POST /v1/messages", d: "Claude Code 等客户端的原生入口" },
  { t: "Gemini", p: "/v1beta/models/…", d: "含 generateContent 与流式变体" },
];

const SPONSORS = [
  {
    name: "APIMart",
    logo: "/v2/sponsor-apimart.png",
    url: "https://go.apimart.ai/gh-gpt-load",
    desc: "AI 图片与视频生成 API，GPT-Image-2 低至 $0.006 一张。图片视频共用一套异步接口，批量不超时，按量计费无月费。",
  },
];

const SUPPORTERS = [
  { name: "OpenAI", url: "https://openai.com/", logo: "/v2/sponsor-openai.svg", w: 88, h: 26 },
  { name: "LINUX DO", url: "https://linux.do" },
  {
    name: "DigitalOcean",
    url: "https://www.digitalocean.com/?refcode=3d52cff21342&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",
  },
];

const BOUNDS = [
  {
    k: "成本",
    tone: "label label-amber",
    t: "用量与成本是估算",
    d: "依据上游返回值推算，用于运营分析和容量规划，不等于服务商账单，也不能作为财务对账依据。价格变更不回算历史数据。",
  },
  {
    k: "规模",
    tone: "label label-blue",
    t: "面向单应用实例",
    d: "2.0 只保证单实例正确性。实例之间不共享状态，不支持水平扩展。需要更大规模时，按业务维度拆成多个独立部署。",
  },
  {
    k: "升级",
    tone: "label label-amber",
    t: "1.x 不能原地升级",
    d: "2.0 是完全重写，无法打开、导入或迁移 1.x 数据。请用独立的数据库、DATA_DIR、端口和卷部署，验证通过后再切流量。",
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- Hero：整页唯一保持纯黑白的部分 ---------- */}
      <section className="hero">
        <div className="shell">
          <div className="g12 hero-in">
            <div className="col-5">
              <div className="label">v2.0 / 自托管 AI 网关 / MIT</div>
              <h1 className="h1">
                一个入口，
                <br />
                接管所有
                <br />
                <em>渠道与凭据</em>
              </h1>
              <p className="hero-sub">
                二十个渠道、几十个凭据、四种客户端协议，全都收在一个 base URL 后面。
                调度、重试、冷却、用量核算在网关里做完，应用那头一行不改。
              </p>
              <div className="btns hero-btns">
                <Button href="/docs/quickstart">开始部署</Button>
                <Button href="/docs" variant="secondary">
                  阅读文档
                </Button>
              </div>
            </div>

            <div className="col-7 hero-fig">
              <RouteDiagram />
            </div>
          </div>

          <div className="hero-rule" />
          <div className="g12 hero-facts">
            {FACTS.map((f) => (
              <Stat key={f.label} className="col-3" value={f.value} unit={f.unit} label={f.label} tone={f.tone} />
            ))}
          </div>
          <div className="hero-foot">
            <span className="label">SQLite / MySQL / PostgreSQL</span>
            <span className="label">凭据本地加密落盘 · 数据不出机器</span>
          </div>
        </div>
      </section>

      {/* ---------- 01 支持：赞助方曝光位，紧跟首屏 ---------- */}
      <Section
        n="01"
        tint
        tag="支持"
        title="这个项目由他们支持"
        lede="GPT-Load 以 MIT 协议开源。服务器、模型额度和开发时间，来自下面这些赞助方。"
      >
        <div className="spon-grid">
          {SPONSORS.map((sp) => (
            <a className="spon" key={sp.name} href={sp.url} target="_blank" rel="noopener noreferrer">
              <span className="spon-logo">
                <Image src={sp.logo} alt={sp.name} width={900} height={300} />
              </span>
              <span className="spon-body">
                <h3>{sp.name}</h3>
                <p>{sp.desc}</p>
                <span className="spon-cta">了解详情 →</span>
              </span>
            </a>
          ))}
        </div>

        <div className="spon-more">
          <span className="label">同时感谢</span>
          <span className="who">
            {SUPPORTERS.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noopener noreferrer">
                {x.logo ? <Image src={x.logo} alt={x.name} width={x.w} height={x.h} /> : x.name}
              </a>
            ))}
          </span>
          <Link className="label label-blue join" href="/sponsor">
            成为赞助商 →
          </Link>
        </div>
      </Section>
      {/* ---------- 02 能力 ---------- */}
      <Section
        n="02"
        tag="能力"
        title="它替你处理的六件事"
        lede="这些事本来要在每个应用里各写一遍，或者干脆不写、出问题再说。放进网关之后，写一次，所有客户端都受益。"
      >
        <div className="g12 rows-38">
          {CAPS.map((c) => (
            <div className="col-4 note-item" key={c.n}>
              <div className="n">{c.n}</div>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 03 协议与渠道：先讲怎么进来，再讲发到哪去 ---------- */}
      <Section
        n="03"
        tint
        tag="渠道与协议"
        title="四种协议进来，二十个渠道出去"
        lede="客户端用什么协议进来、请求最终发到哪个上游，两件事都在网关里解决，应用不用关心。"
      >
        <span className="label">按这些协议进来</span>
        <div className="g12 rows-30" style={{ marginTop: 16 }}>
          {PROTOCOLS.map((x) => (
            <div className="col-3 proto" key={x.t}>
              <div className="t">{x.t}</div>
              <div className="p">{x.p}</div>
              <div className="d">{x.d}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 46 }}>
          <span className="label">发往这些上游</span>
          <div className="g12 rows-34" style={{ marginTop: 16 }}>
            {CHANNELS.map((g) => (
              <div className="col-3 chan" key={g.t} style={{ "--cat": g.cat } as React.CSSProperties}>
                <div className="chan-h">
                  <span className="t">{g.t}</span>
                  <span className="c">{g.c}</span>
                </div>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="chan-more">
          <span className="label">＋ 自定义渠道 — 任意 OpenAI 兼容中转</span>
          <Link className="label label-blue" href="/docs/channels">
            渠道与协议文档 →
          </Link>
        </div>
      </Section>

      {/* ---------- 04 接入 ---------- */}
      <Section
        n="04"
        tag="接入"
        title="三层配置，一次配完"
        lede="管理台里只有三个概念：渠道装凭据，分组定策略，AccessKey 交给应用。它们之间是层层收窄的关系。"
      >
        <div className="g12 rows-40">
          {STEPS.map((s) => (
            <div className={`col-4 step${s.hot ? " hot" : ""}`} key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="m">{s.m}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 05 起服务与接客户端 ---------- */}
      <Section
        n="05"
        tint
        tag="上手"
        title="一条命令起服务，客户端改两行"
        lede="不需要数据库、不需要单独部署前端。管理台内嵌在同一个二进制里。"
      >
        <div className="g12 rows-30">
          <div className="col-6">
            <CodeBlock caption="① 起服务" note="Docker Compose">
              git clone --depth 1 --branch v2 \{"\n"}
              {"  "}https://github.com/tbphp/gpt-load.git{"\n"}
              cd gpt-load && cp .env.example .env{"\n"}
              docker compose up -d{"\n"}
              {"\n"}
              <span className="c"># 取出首次生成的管理密钥</span>{"\n"}
              docker compose exec gpt-load \{"\n"}
              {"  "}sh -c <span className="s">&apos;cat /app/data/auth.key&apos;</span>
            </CodeBlock>
          </div>

          <div className="col-6">
            <CodeBlock caption="② 接客户端" note="Python — OpenAI SDK">
              client = OpenAI({"\n"}
              {"    "}base_url=<span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>,{"   "}
              <span className="c"># 改这行</span>{"\n"}
              {"    "}api_key=<span className="s">&quot;sk-gl-••••a5df&quot;</span>,{"               "}
              <span className="c"># 改这行</span>{"\n"}
              ){"\n"}
              {"\n"}
              <span className="c"># Anthropic 客户端走 /v1/messages</span>{"\n"}
              <span className="c"># Gemini 客户端走 /v1beta/models/…</span>
            </CodeBlock>
            <p className="run-note">
              认证方式按各客户端原本的习惯来：<span className="mono">Authorization: Bearer</span>、
              <span className="mono">x-api-key</span>、<span className="mono">x-goog-api-key</span>，
              或 Gemini 的 <span className="mono">key</span> 查询参数都支持。
            </p>
          </div>
        </div>

        <div className="g12 rows-30" style={{ marginTop: 40 }}>
          <div className="col-4 item">
            <span className="label label-blue">原生二进制</span>
            <h3>五个构建目标</h3>
            <p>Linux、macOS（amd64 / arm64）、Windows。下载后先用随附的 SHA256SUMS 校验，再直接运行。</p>
          </div>
          <div className="col-4 item">
            <span className="label label-green">数据库</span>
            <h3>SQLite 起步，随时可换</h3>
            <p>
              留空 <span className="mono">DATABASE_DSN</span> 使用受管 SQLite；填入 DSN
              即可切到外部 SQLite、MySQL 或 PostgreSQL。
            </p>
          </div>
          <div className="col-4 item">
            <span className="label label-amber">备份</span>
            <h3>密钥和数据库要一起备</h3>
            <p>
              <span className="mono">encryption.key</span>{" "}
              用于解密渠道凭据。密钥丢失或被替换后，已加密的凭据无法恢复，本版本不支持主密钥轮换。
            </p>
          </div>
        </div>

        <div className="chan-more">
          <span className="label">完整步骤与更多客户端配置</span>
          <Link className="label label-blue" href="/docs/quickstart">
            快速开始 →
          </Link>
        </div>
      </Section>

      {/* ---------- 06 管理台 ---------- */}
      <Section
        n="06"
        tag="管理台"
        title="配置和观测在同一个地方"
        lede="管理台随二进制一起分发，不需要另外部署前端。打开浏览器就能配渠道、看健康、查日志、算成本。"
      >
        <div className="g12 rows-44">
          <figure className="col-6 fig">
            <figcaption>
              <span className="label">FIG. 2 — 订阅账号</span>
              <span className="label">额度窗口 · 状态 · 诊断</span>
            </figcaption>
            <Image
              src="/v2/subscription-accounts.png"
              alt="GPT-Load 管理台订阅账号页：额度窗口、可用与冷却状态、用量窗口与运行时诊断"
              width={2880}
              height={1440}
            />
            <p className="d">
              订阅账号的额度窗口、重置时间、可用与冷却状态一屏看完。额度信息只作展示，
              真正触发切换的是上游的限流响应。
            </p>
          </figure>
          <figure className="col-6 fig">
            <figcaption>
              <span className="label">FIG. 3 — 用量与成本</span>
              <span className="label">请求 · Token · 估算</span>
            </figcaption>
            <Image
              src="/v2/usage-cost.png"
              alt="GPT-Load 管理台用量与成本页：请求数、缓存命中率、Token 分类、成本估算与用量质量"
              width={2880}
              height={1440}
            />
            <p className="d">
              请求量与成败趋势、缓存命中、Token 分类明细、成本估算，以及用量数据本身的完整度——
              缺了多少条、哪些模型还没有价格。
            </p>
          </figure>
        </div>
      </Section>

      {/* ---------- 07 边界 ---------- */}
      <Section n="07" tag="边界" tint title="上生产之前，先看这三条">
        <div className="g12 rows-34">
          {BOUNDS.map((b) => (
            <div className="col-4 item" key={b.k}>
              <span className={b.tone}>{b.k}</span>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </div>
          ))}
        </div>

        <Notice label="网络边界" tone="amber" className="notice-spaced">
          服务默认<b>只监听 127.0.0.1</b>，不对公网开放。需要远程访问时，请通过受控网络或 TLS
          反向代理暴露，并配置好 ACL 与防火墙规则。<b>AUTH_KEY</b> 与 <b>ENCRYPTION_KEY</b>{" "}
          请妥善保管，不要提交到仓库、日志、截图或公开 issue 中。
        </Notice>
      </Section>

    </main>
  );
}
