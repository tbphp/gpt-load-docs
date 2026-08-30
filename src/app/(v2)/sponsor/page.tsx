import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/v2/pages.css";
import { Button } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "赞助支持",
  description: "GPT-Load 以 MIT 协议开源，由赞助方与社区支持持续开发。",
};

const SPONSOR = {
  name: "APIMart",
  logo: "/v2/sponsor-apimart.png",
  url: "https://go.apimart.ai/gh-gpt-load",
  desc: "专注 AI 图片与视频生成的低价 API 平台。GPT-Image-2 低至 $0.006 一张，一美元能出 160 张以上。图片和视频共用一套异步接口：提交任务拿 ID，轮询或回调取结果，批量几万张不超时，换模型不用改代码。按量计费，没有月费。",
};

const SUPPORTERS = [
  { name: "OpenAI", url: "https://openai.com/", logo: "/v2/sponsor-openai.svg", w: 120, h: 35, note: "感谢 OpenAI 对本项目的赞助" },
  { name: "LINUX DO", url: "https://linux.do", note: "感谢 LINUX DO 社区的支持" },
  {
    name: "DigitalOcean",
    url: "https://www.digitalocean.com/?refcode=3d52cff21342&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge",
    note: "本项目由 DigitalOcean 提供支持",
  },
];

export default function Sponsor() {
  return (
    <main id="main" className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">赞助支持</span>
          <h1 className="page-title">让它继续做下去</h1>
          <p className="page-lede">
            GPT-Load 以 MIT 协议开源，永远免费。服务器、模型额度和开发时间由下面这些赞助方和社区支撑。
          </p>
        </div>

        <div className="page-body">
          <div className="sec-head" style={{ borderTop: "none", paddingTop: 0 }}>
            <span className="n">01</span>
            <span className="t">主赞助</span>
          </div>
          <div className="spon-grid" style={{ marginTop: 20 }}>
            <a className="spon" href={SPONSOR.url} target="_blank" rel="noopener noreferrer">
              <span className="spon-logo">
                <Image src={SPONSOR.logo} alt={SPONSOR.name} width={900} height={300} />
              </span>
              <span className="spon-body">
                <h3>{SPONSOR.name}</h3>
                <p>{SPONSOR.desc}</p>
                <span className="spon-cta">注册使用 →</span>
              </span>
            </a>
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">02</span>
            <span className="t">支持方</span>
          </div>
          <div className="g12 rows-30" style={{ marginTop: 22 }}>
            {SUPPORTERS.map((s) => (
              <div className="col-4 item" key={s.name}>
                <span className="label">{s.name}</span>
                {s.logo ? (
                  <div style={{ marginTop: 14, marginBottom: 4 }}>
                    <Image src={s.logo} alt={s.name} width={s.w} height={s.h} />
                  </div>
                ) : null}
                <p style={{ marginTop: s.logo ? 8 : 12 }}>{s.note}</p>
                <a className="spon-cta" href={s.url} target="_blank" rel="noopener noreferrer">
                  访问 →
                </a>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">03</span>
            <span className="t">个人赞助</span>
          </div>
          <p className="sec-lede" style={{ marginBottom: 22 }}>
            如果这个项目帮你省下了时间或成本，可以请作者喝杯咖啡。金额不重要，一句反馈同样有用。
          </p>
          <div className="pay">
            <div>
              <Image src="/sk-wx.jpg" alt="微信赞赏码" width={176} height={176} />
              <span className="n">微信</span>
            </div>
            <div>
              <Image src="/sk-zfb.jpg" alt="支付宝收款码" width={176} height={176} />
              <span className="n">支付宝</span>
            </div>
            <div style={{ justifyContent: "center" }}>
              <span className="label">爱发电</span>
              <p style={{ fontSize: 13, color: "var(--dim)", textAlign: "center", lineHeight: 1.6 }}>
                支持持续性赞助，可留言说明想看到的功能。
              </p>
              <Button href="https://afdian.com/a/gpt-load" variant="secondary">
                前往爱发电
              </Button>
            </div>
          </div>

          <div className="sec-head" style={{ marginTop: 56 }}>
            <span className="n">04</span>
            <span className="t">不花钱的支持</span>
          </div>
          <div className="ways" style={{ marginTop: 22 }}>
            <div className="item">
              <span className="label">Star</span>
              <h3>给仓库点个星</h3>
              <p>这是让更多人发现它最直接的方式，也是唯一的推广渠道。</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load" target="_blank" rel="noopener noreferrer">
                前往仓库 →
              </a>
            </div>
            <div className="item">
              <span className="label">Issue</span>
              <h3>报告问题或提需求</h3>
              <p>踩到的坑、想要的能力，写清楚复现步骤比什么都有价值。</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load/issues" target="_blank" rel="noopener noreferrer">
                提交 Issue →
              </a>
            </div>
            <div className="item">
              <span className="label">Pull Request</span>
              <h3>直接动手改</h3>
              <p>代码、文档、翻译都欢迎。改一个错别字也是贡献。</p>
              <a className="spon-cta" href="https://github.com/tbphp/gpt-load/pulls" target="_blank" rel="noopener noreferrer">
                发起 PR →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
