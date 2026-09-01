import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/v2/pages.css";
import { Button } from "@/components/v2/ui";
import { getLocale, getT } from "@/i18n/v2/server";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return dictionaryPageMeta({ locale, path: "/sponsor", select: (dict) => dict.pages.sponsor });
}

const SPONSORS = [
  { key: "axisnow", name: "AxisNow", logo: "/v2/sponsor-axisnow.jpg", url: "https://www.axisnow.io/zh", width: 340, height: 112 },
  { key: "apimart", name: "APIMart", logo: "/v2/sponsor-apimart.png", url: "https://go.apimart.ai/gh-gpt-load", width: 900, height: 300 },
] as const;

const SUPPORTERS = [
  { name: "OpenAI", url: "https://openai.com/", logo: "/v2/sponsor-openai.svg", w: 120, h: 35 },
  { name: "LINUX DO", url: "https://linux.do" },
  {
    name: "DigitalOcean",
    url: "https://www.digitalocean.com/?refcode=3d52cff21342&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",
  },
];

export default async function Sponsor() {
  const t = await getT();
  const copy = t.pages.sponsor;
  return (
    <main id="main" className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">{copy.label}</span>
          <h1 className="page-title">{copy.headline}</h1>
          <p className="page-lede">{copy.lede}</p>
        </div>

        <div className="page-body">
          <div className="sec-head" style={{ borderTop: "none", paddingTop: 0 }}>
            <span className="n">01</span>
            <span className="t">{copy.primary}</span>
          </div>
          <div className="spon-grid" style={{ marginTop: 20 }}>
            {SPONSORS.map((sponsor) => (
              <a className="spon" key={sponsor.key} href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <span className="spon-logo">
                  <Image src={sponsor.logo} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
                </span>
                <span className="spon-body">
                  <h3>{sponsor.name}</h3>
                  <p>{copy[`${sponsor.key}Description`]}</p>
                  <span className="spon-cta">{sponsor.key === "apimart" ? copy.register : copy.visit}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">02</span>
            <span className="t">{copy.supporters}</span>
          </div>
          <div className="g12 rows-30" style={{ marginTop: 22 }}>
            {SUPPORTERS.map((s, i) => (
              <div className="col-4 item" key={s.name}>
                <span className="label">{s.name}</span>
                {s.logo ? (
                  <div style={{ marginTop: 14, marginBottom: 4 }}>
                    <Image src={s.logo} alt={s.name} width={s.w} height={s.h} />
                  </div>
                ) : null}
                <p style={{ marginTop: s.logo ? 8 : 12 }}>{copy.supporterNotes[i]}</p>
                <a className="spon-cta" href={s.url} target="_blank" rel="noopener noreferrer">
                  {copy.visit}
                </a>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">03</span>
            <span className="t">{copy.personal}</span>
          </div>
          <p className="sec-lede" style={{ marginBottom: 22 }}>
            {copy.personalLede}
          </p>
          <div className="pay">
            <div>
              <Image src="/sk-wx.jpg" alt={copy.wechatAlt} width={176} height={176} />
              <span className="n">{copy.wechat}</span>
            </div>
            <div>
              <Image src="/sk-zfb.jpg" alt={copy.alipayAlt} width={176} height={176} />
              <span className="n">{copy.alipay}</span>
            </div>
            <div style={{ justifyContent: "center" }}>
              <span className="label">{copy.afdian}</span>
              <p style={{ fontSize: 13, color: "var(--dim)", textAlign: "center", lineHeight: 1.6 }}>
                {copy.afdianDescription}
              </p>
              <Button href="https://afdian.com/a/gpt-load" variant="secondary">
                {copy.afdianAction}
              </Button>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">04</span>
            <span className="t">{copy.free}</span>
          </div>
          <div className="ways" style={{ marginTop: 22 }}>
            <div className="item">
              <span className="label">{copy.ways[0].label}</span>
              <h3>{copy.ways[0].title}</h3>
              <p>{copy.ways[0].description}</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load" target="_blank" rel="noopener noreferrer">
                {copy.ways[0].action}
              </a>
            </div>
            <div className="item">
              <span className="label">{copy.ways[1].label}</span>
              <h3>{copy.ways[1].title}</h3>
              <p>{copy.ways[1].description}</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load/issues" target="_blank" rel="noopener noreferrer">
                {copy.ways[1].action}
              </a>
            </div>
            <div className="item">
              <span className="label">{copy.ways[2].label}</span>
              <h3>{copy.ways[2].title}</h3>
              <p>{copy.ways[2].description}</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load/pulls" target="_blank" rel="noopener noreferrer">
                {copy.ways[2].action}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
