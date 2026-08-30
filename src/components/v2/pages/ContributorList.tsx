"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchContributors, REPO_URL, type Contributor } from "@/lib/v2/github";
import { useLocale } from "@/i18n/v2/LocaleProvider";

type State = { status: "loading" } | { status: "ok"; data: Contributor[] } | { status: "fail" };

export default function ContributorList() {
  const { t } = useLocale();
  const copy = t.pages.contributors;
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let alive = true;
    fetchContributors().then((data) => {
      if (!alive) return;
      setState(data ? { status: "ok", data } : { status: "fail" });
    });
    return () => {
      alive = false;
    };
  }, []);

  if (state.status === "loading") {
    return (
      <div className="contrib-grid" aria-busy="true">
        {Array.from({ length: 12 }, (_, i) => (
          <div className="contrib" key={i}>
            <span className="skel" style={{ width: 44, height: 44 }} />
            <span className="skel" style={{ width: "72%", height: 13 }} />
            <span className="skel" style={{ width: "48%", height: 10 }} />
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
          <a className="link" href={`${REPO_URL}/graphs/contributors`} target="_blank" rel="noopener noreferrer">
            {copy.contributorsPage}
          </a>
          {copy.unavailableAfter}
        </p>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
        <span className="label">{copy.totalBefore}{state.data.length}{copy.totalAfter}</span>
        <a
          className="label label-blue"
          href={`${REPO_URL}/graphs/contributors`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.viewGitHub}
        </a>
      </div>
      <div className="contrib-grid">
        {state.data.map((p) => (
          <a className="contrib" key={p.login} href={p.url} target="_blank" rel="noopener noreferrer">
            <Image src={p.avatar} alt={p.login} width={44} height={44} unoptimized />
            <span className="n">{p.login}</span>
            <span className="c">{copy.contributionCount.replace("{count}", String(p.contributions))}</span>
          </a>
        ))}
      </div>
    </>
  );
}
