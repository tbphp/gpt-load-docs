"use client";

import { useEffect, useState } from "react";
import { fetchReleases, formatDate, REPO_URL, type Release } from "@/lib/v2/github";
import { useLocale } from "@/i18n/v2/LocaleProvider";

type State = { status: "loading" } | { status: "ok"; data: Release[] } | { status: "fail" };

export default function ReleaseList() {
  const { t } = useLocale();
  const copy = t.pages.changelog;
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let alive = true;
    fetchReleases(20).then((data) => {
      if (!alive) return;
      setState(data ? { status: "ok", data } : { status: "fail" });
    });
    return () => {
      alive = false;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div aria-busy="true">
        {[0, 1, 2].map((i) => (
          <div className="rel" key={i}>
            <div className="rel-meta">
              <span className="skel" style={{ width: 120, height: 19 }} />
              <span className="skel" style={{ width: 84, height: 12 }} />
            </div>
            <div className="rel-body">
              <span className="skel" style={{ width: "42%", height: 16 }} />
              <span className="skel" style={{ width: "100%", height: 12, marginTop: 12 }} />
              <span className="skel" style={{ width: "76%", height: 12, marginTop: 8 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (state.status === "fail" || state.data.length === 0) {
    return (
      <div className="notice">
        <span className="t">{copy.unavailable}</span>
        <p>
          {copy.unavailableDescription}{" "}
          <a className="link" href={`${REPO_URL}/releases`} target="_blank" rel="noopener noreferrer">
            {copy.releases}
          </a>{copy.unavailableAfter}
        </p>
      </div>
    );
  }

  return (
    <>
      {state.data.map((r, i) => (
        <article className="rel" key={r.tag || r.url}>
          <div className="rel-meta">
            <span className="rel-tag">{r.tag}</span>
            <span className="rel-date">{formatDate(r.publishedAt)}</span>
            {i === 0 && !r.prerelease ? <span className="rel-flag latest">{copy.latest}</span> : null}
            {r.prerelease ? <span className="rel-flag pre">{copy.prerelease}</span> : null}
          </div>
          <div className="rel-body">
            <h3>{r.name}</h3>
            {r.summary ? <p>{r.summary}</p> : null}
            <a href={r.url} target="_blank" rel="noopener noreferrer">
              {copy.viewFull}
            </a>
          </div>
        </article>
      ))}
    </>
  );
}
