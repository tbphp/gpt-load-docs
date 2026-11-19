import type { CSSProperties } from "react";
import Image from "next/image";
import ClampText from "@/components/v2/ClampText";
import type { Dict } from "@/i18n/v2/dict/zh";

const SPONSORS = [
  {
    id: "qiniu",
    name: "Qiniu Cloud",
    logo: "/v2/sponsor-qiniu.png",
    url: "https://www.qiniu.com/ai/free-models/conatus-2026?utm_source=gpt_load&utm_medium=oss&utm_campaign=comatus_202611&utm_content=readme",
    width: 800,
    height: 800,
  },
  {
    id: "fenno",
    name: "Fenno.ai",
    logo: "/v2/sponsor-fenno.jpg",
    url: "https://api.fenno.ai/?utm_source=gpt_load&utm_medium=oss&utm_campaign=fenno_202611&utm_content=readme",
    width: 640,
    height: 266,
  },
  {
    id: "ofoxai",
    name: "OfoxAI",
    logo: "/v2/sponsor-ofoxai.svg",
    url: "https://ofox.ai/?utm_source=github&utm_medium=sponsorship&utm_content=gpt_load",
    width: 620,
    height: 240,
  },
  {
    id: "apimart",
    name: "APIMart",
    logo: "/v2/sponsor-apimart.png",
    url: "https://go.apimart.ai/gh-gpt-load",
    width: 900,
    height: 300,
  },
] as const;

type Props = {
  copy: Dict["pages"]["sponsor"];
  apimartDescription: string;
  apimartAction: string;
  style?: CSSProperties;
};

export default function SponsorGrid({ copy, apimartDescription, apimartAction, style }: Props) {
  const sponsorCopy = {
    qiniu: { title: copy.qiniuTitle, description: copy.qiniuDescription, action: copy.qiniuAction },
    fenno: { title: copy.fennoTitle, description: copy.fennoDescription, action: copy.fennoAction },
    ofoxai: { title: copy.ofoxaiTitle, description: copy.ofoxaiDescription, action: copy.ofoxaiAction },
    apimart: { title: "APIMart", description: apimartDescription, action: apimartAction },
  };

  return (
    <div className="spon-grid" style={style}>
      {SPONSORS.map((sponsor) => {
        const content = sponsorCopy[sponsor.id];
        const fullCopy = sponsor.id === "qiniu" || sponsor.id === "fenno";
        return (
          <a
            className={fullCopy ? "spon spon-full-copy" : "spon"}
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel={sponsor.id === "ofoxai" ? "noopener noreferrer" : "sponsored noopener noreferrer"}
          >
            <span className="spon-logo">
              <Image src={sponsor.logo} alt={sponsor.name} width={sponsor.width} height={sponsor.height} />
            </span>
            <span className="spon-body">
              <span className="spon-head">
                {fullCopy ? <h3>{content.title}</h3> : <ClampText as="h3" text={content.title} />}
              </span>
              {fullCopy ? <p>{content.description}</p> : <ClampText as="p" text={content.description} />}
              {fullCopy ? <strong className="spon-cta">{content.action}</strong> : <span className="spon-cta">{content.action}</span>}
            </span>
          </a>
        );
      })}
    </div>
  );
}
