import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "@/styles/v2/home.css";
import RouteDiagram from "@/components/v2/RouteDiagram";
import StructuredData from "@/components/v2/StructuredData";
import { Section, Button, CodeBlock, Notice, Stat, Figure } from "@/components/v2/ui";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/v2/config";
import { getLocale, getT } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { localeUrl } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getT();
  const url = localeUrl("/", locale);

  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    keywords: t.meta.keywords,
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      type: "website",
      url,
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.ogDescription,
    },
  };
}

/* 四个数字讲的是一组对比：接得多、装得轻、改得少。
   给两端上色把这层对比点出来，中间两个留墨色，避免一排全彩失去重点。 */
const FACTS = [
  { value: "20", tone: "blue" },
  { value: "4" },
  { value: "1" },
  { value: "0", tone: "green" },
];

const CAP_NUMBERS = ["01", "02", "03", "04", "05", "06"];

// 四组的颜色与首屏路由图的四条支线严格对应，不要单独改动
const CHANNELS = [
  { c: 4, cat: "var(--cat-1)", providers: [0, 1, 2, 3] },
  { c: 3, cat: "var(--cat-2)", providers: [4, 5, 6] },
  { c: 8, cat: "var(--cat-3)", providers: [7, 8, 9, 10, 11, 12, 13, 14] },
  { c: 4, cat: "var(--cat-4)", providers: [15, 16, 17, 18] },
];

/* 只有分组和访问密钥两层：分组朝上游，访问密钥朝应用。
   渠道不是独立对象，它是建分组时的一个选项——这点要在文案里说清楚，
   否则用户会在管理台里找不到「添加渠道」的入口。 */
const STEPS = [{ n: "01" }, { n: "02" }, { n: "03", hot: true }];

const PROTOCOLS = [
  { t: "OpenAI Chat Completions", p: "POST /v1/chat/completions" },
  { t: "OpenAI Responses", p: "/v1/responses/**" },
  { t: "Anthropic Messages", p: "POST /v1/messages" },
  { t: "Gemini", p: "/v1beta/models/…" },
];

const SPONSORS = [
  {
    name: "APIMart",
    logo: "/v2/sponsor-apimart.png",
    url: "https://go.apimart.ai/gh-gpt-load",
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

const BOUND_TONES = ["label label-amber", "label label-blue", "label label-amber"];

export default async function Home() {
  const t = await getT();
  const h = t.home;
  const locale = await getLocale();
  return (
    // tint-end：页面以浅色板块（07 边界）收尾，footer 的默认外边距要据此收起
    <main id="main" className="tint-end">
      {/* Next 15 会丢弃根路径 alternate URL 的查询参数；React 19 会把这些 link 提升到 head。 */}
      <link rel="canonical" href={localeUrl("/", locale)} />
      {LOCALES.map((code) => (
        <link key={code} rel="alternate" hrefLang={code} href={localeUrl("/", code)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localeUrl("/", DEFAULT_LOCALE)} />
      <StructuredData />
      {/* ---------- Hero：整页唯一保持纯黑白的部分 ---------- */}
      <section className="hero">
        <div className="shell">
          <div className="g12 hero-in">
            <div className="col-5">
              <div className="label">{h.eyebrow}</div>
              <h1 className="h1" aria-label={`${h.hero.line1} ${h.hero.line2} ${h.hero.emphasis}`}>
                {h.hero.line1}
                <br />
                {h.hero.line2}
                <br />
                <em>{h.hero.emphasis}</em>
              </h1>
              <p className="hero-sub">{h.hero.lede}</p>
              <div className="btns hero-btns">
                <Button href="/docs/quickstart">{h.hero.primary}</Button>
                <Button href="/docs" variant="secondary">
                  {h.hero.secondary}
                </Button>
              </div>
            </div>

            <div className="col-7 hero-fig">
              <RouteDiagram />
            </div>
          </div>

          <div className="hero-rule" />
          <div className="g12 hero-facts">
            {FACTS.map((f, i) => (
              <Stat key={h.facts[i].label} className="col-3" value={f.value} unit={h.facts[i].unit} label={h.facts[i].label} tone={f.tone} />
            ))}
          </div>
          <div className="hero-foot">
            <span className="label">{h.dataStores}</span>
            <span className="label">{h.localData}</span>
          </div>
        </div>
      </section>

      {/* ---------- 01 支持：赞助方曝光位，紧跟首屏 ---------- */}
      <Section
        n="01"
        tint
        tag={h.sponsors.tag}
        title={h.sponsors.title}
        lede={h.sponsors.lede}
      >
        <div className="spon-grid">
          {SPONSORS.map((sp) => (
            <a className="spon" key={sp.name} href={sp.url} target="_blank" rel="noopener noreferrer">
              <span className="spon-logo">
                <Image src={sp.logo} alt={sp.name} width={900} height={300} />
              </span>
              <span className="spon-body">
                <h3>{sp.name}</h3>
                <p>{h.sponsors.apimart}</p>
                <span className="spon-cta">{h.sponsors.detail}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="spon-more">
          <span className="label">{h.sponsors.thanks}</span>
          <span className="who">
            {SUPPORTERS.map((x) => (
              <a key={x.name} href={x.url} target="_blank" rel="noopener noreferrer">
                {x.logo ? <Image src={x.logo} alt={x.name} width={x.w} height={x.h} /> : x.name}
              </a>
            ))}
          </span>
          <Link className="label label-blue join" href="/sponsor">
            {h.sponsors.join}
          </Link>
        </div>
      </Section>
      {/* ---------- 02 能力 ---------- */}
      <Section
        n="02"
        tag={h.capabilities.tag}
        title={h.capabilities.title}
        lede={h.capabilities.lede}
      >
        <div className="g12 rows-38">
          {CAP_NUMBERS.map((n, i) => (
            <div className="col-4 note-item" key={n}>
              <div className="n">{n}</div>
              <h3>{h.capabilities.items[i].title}</h3>
              <p>{h.capabilities.items[i].description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 03 协议与渠道：先讲怎么进来，再讲发到哪去 ---------- */}
      <Section
        n="03"
        tint
        tag={h.protocols.tag}
        title={h.protocols.title}
        lede={h.protocols.lede}
      >
        <span className="label">{h.protocols.incoming}</span>
        <div className="g12 rows-30" style={{ marginTop: 16 }}>
          {PROTOCOLS.map((x, i) => (
            <div className="col-3 proto" key={x.t}>
              <div className="t">{x.t}</div>
              <div className="p">{x.p}</div>
              <div className="d">{h.protocols.descriptions[i]}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 46 }}>
          <span className="label">{h.protocols.outgoing}</span>
          <div className="g12 rows-34" style={{ marginTop: 16 }}>
            {CHANNELS.map((g, i) => (
              <div className="col-3 chan" key={h.protocols.groups[i]} style={{ "--cat": g.cat } as React.CSSProperties}>
                <div className="chan-h">
                  <span className="t">{h.protocols.groups[i]}</span>
                  <span className="c">{g.c}</span>
                </div>
                <ul>
                  {g.providers.map((provider) => (
                    <li key={provider}>{h.protocols.providerNames[provider]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="chan-more">
          <span className="label">{h.protocols.custom}</span>
          <Link className="label label-blue" href="/docs/groups">
            {h.protocols.docs}
          </Link>
        </div>
      </Section>

      {/* ---------- 04 接入 ---------- */}
      <Section
        n="04"
        tag={h.setup.tag}
        title={h.setup.title}
        lede={h.setup.lede}
      >
        <div className="g12 rows-40">
          {STEPS.map((s, i) => (
            <div className={`col-4 step${s.hot ? " hot" : ""}`} key={s.n}>
              <div className="n">{s.n}</div>
              <h3>{h.setup.items[i].title}</h3>
              <p>{h.setup.items[i].description}</p>
              <div className="m">{h.setup.items[i].meta}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- 05 起服务与接客户端 ---------- */}
      <Section
        n="05"
        tint
        tag={h.start.tag}
        title={h.start.title}
        lede={h.start.lede}
      >
        <div className="g12 rows-30">
          <div className="col-6">
            <CodeBlock caption={h.start.startCaption} note="Docker Compose">
              git clone --depth 1 --branch v2 \{"\n"}
              {"  "}https://github.com/tbphp/gpt-load.git{"\n"}
              cd gpt-load && cp .env.example .env{"\n"}
              docker compose up -d{"\n"}
              {"\n"}
              <span className="c">{h.start.adminKeyComment}</span>{"\n"}
              docker compose exec gpt-load \{"\n"}
              {"  "}sh -c <span className="s">&apos;cat /app/data/auth.key&apos;</span>
            </CodeBlock>
          </div>

          <div className="col-6">
            <CodeBlock caption={h.start.clientCaption} note="Python — OpenAI SDK">
              client = OpenAI({"\n"}
              {"    "}base_url=<span className="s">&quot;http://127.0.0.1:3001/v1&quot;</span>,{"   "}
              <span className="c">{h.start.changeLine}</span>{"\n"}
              {"    "}api_key=<span className="s">&quot;sk-gl-••••a5df&quot;</span>,{"               "}
              <span className="c">{h.start.changeLine}</span>{"\n"}
              ){"\n"}
              {"\n"}
              <span className="c">{h.start.anthropicComment}</span>{"\n"}
              <span className="c">{h.start.geminiComment}</span>
            </CodeBlock>
            <p className="run-note">
              {h.start.authPrefix}<span className="mono">Authorization: Bearer</span> ·{" "}
              <span className="mono">x-api-key</span> · <span className="mono">x-goog-api-key</span> · Gemini{" "}
              <span className="mono">key</span>{h.start.authSuffix}
            </p>
          </div>
        </div>

        <div className="g12 rows-30" style={{ marginTop: 40 }}>
          <div className="col-4 item">
            <span className="label label-blue">{h.start.cards[0].label}</span>
            <h3>{h.start.cards[0].title}</h3>
            <p>{h.start.cards[0].description}</p>
          </div>
          <div className="col-4 item">
            <span className="label label-green">{h.start.cards[1].label}</span>
            <h3>{h.start.cards[1].title}</h3>
            <p>{h.start.cards[1].description}</p>
          </div>
          <div className="col-4 item">
            <span className="label label-amber">{h.start.cards[2].label}</span>
            <h3>{h.start.cards[2].title}</h3>
            <p>{h.start.cards[2].description}</p>
          </div>
        </div>

        <div className="chan-more">
          <span className="label">{h.start.more}</span>
          <Link className="label label-blue" href="/docs/quickstart">
            {h.start.quickstart}
          </Link>
        </div>
      </Section>

      {/* ---------- 06 管理台 ---------- */}
      <Section
        n="06"
        tag={h.console.tag}
        title={h.console.title}
        lede={h.console.lede}
      >
        <div className="g12 rows-44">
          <Figure
            className="col-6"
            src={docScreenshot(locale, "sub-02-accounts.png")}
            alt={h.console.subscriptionAlt}
            width={2880}
            height={1440}
            caption={h.console.subscriptionCaption}
            note={h.console.subscriptionNote}
          >
            {h.console.subscriptionDescription}
          </Figure>

          <Figure
            className="col-6"
            src="/v2/usage-cost.png"
            alt={h.console.usageAlt}
            width={2880}
            height={1440}
            caption={h.console.usageCaption}
            note={h.console.usageNote}
          >
            {h.console.usageDescription}
          </Figure>
        </div>
      </Section>

      {/* ---------- 07 边界 ---------- */}
      <Section n="07" tag={h.boundaries.tag} tint title={h.boundaries.title}>
        <div className="g12 rows-34">
          {h.boundaries.items.map((b, i) => (
            <div className="col-4 item" key={b.label}>
              <span className={BOUND_TONES[i]}>{b.label}</span>
              <h3>{b.title}</h3>
              <p>{b.description}</p>
            </div>
          ))}
        </div>

        <Notice label={h.boundaries.networkLabel} tone="amber" className="notice-spaced">
          {h.boundaries.networkDescription}
        </Notice>
      </Section>

    </main>
  );
}
