"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";
import { getLocalizedDocFlat } from "@/lib/v2/docs-nav";

export default function DocsSearch() {
  const { t } = useLocale();
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLocaleLowerCase();
  const results = useMemo(() => {
    if (!normalized) return [];
    return getLocalizedDocFlat(t).filter((item) =>
      `${item.label} ${item.desc ?? ""} ${item.href.replaceAll("/", " ")}`.toLocaleLowerCase().includes(normalized)
    );
  }, [normalized, t]);

  return (
    <search className="docs-search">
      <label htmlFor="docs-search">{t.docsUi.searchLabel}</label>
      <input
        id="docs-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t.docsUi.searchPlaceholder}
        autoComplete="off"
      />

      {normalized ? (
        <div className="docs-search-results" aria-live="polite">
          <div className="docs-search-count">
            {results.length > 0 ? `${results.length} ${t.docsUi.searchCount}` : t.docsUi.searchEmpty}
          </div>
          {results.length > 0 ? (
            <div className="idx-list">
              {results.map((item) => (
                <Link className="idx-item" href={item.href} key={item.href}>
                  <span className="r"><span className="t">{item.label}</span></span>
                  {item.desc ? <span className="d">{item.desc}</span> : null}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </search>
  );
}
