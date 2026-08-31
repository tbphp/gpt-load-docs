import type { Metadata } from "next";
import "@/styles/v2/pages.css";
import ReleaseList from "@/components/v2/pages/ReleaseList";
import { getLocale, getT } from "@/i18n/v2/server";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return dictionaryPageMeta({ locale, path: "/changelog", select: (dict) => dict.pages.changelog });
}

export default async function Changelog() {
  const t = await getT();
  const copy = t.pages.changelog;
  return (
    <main id="main" className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">{copy.label}</span>
          <h1 className="page-title">{copy.headline}</h1>
          <p className="page-lede">{copy.lede}</p>
        </div>
        <div className="page-body">
          <ReleaseList />
        </div>
      </div>
    </main>
  );
}
