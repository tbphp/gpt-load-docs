import type { Metadata } from "next";
import "@/styles/v2/pages.css";
import ContributorList from "@/components/v2/pages/ContributorList";
import { Button } from "@/components/v2/ui";
import { getLocale, getT } from "@/i18n/v2/server";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return dictionaryPageMeta({ locale, path: "/contributors", select: (dict) => dict.pages.contributors });
}

export default async function Contributors() {
  const t = await getT();
  const copy = t.pages.contributors;
  return (
    <main id="main" className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">{copy.label}</span>
          <h1 className="page-title">{copy.headline}</h1>
          <p className="page-lede">{copy.lede}</p>
        </div>

        <div className="page-body">
          <ContributorList />

          <div className="notice" style={{ marginTop: 48 }}>
            <span className="t">{copy.joinLabel}</span>
            <p>{copy.joinDescription}</p>
          </div>

          <div className="btns" style={{ marginTop: 26 }}>
            <Button href="https://github.com/tbphp/gpt-load/issues">{copy.issue}</Button>
            <Button href="https://github.com/tbphp/gpt-load/pulls" variant="secondary">
              {copy.pullRequest}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
