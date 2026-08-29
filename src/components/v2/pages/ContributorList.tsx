"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchContributors, REPO_URL, type Contributor } from "@/lib/v2/github";

type State = { status: "loading" } | { status: "ok"; data: Contributor[] } | { status: "fail" };

export default function ContributorList() {
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
        <span className="t">暂时取不到</span>
        <p>
          GitHub 接口没有返回数据，可能是限流或网络问题。完整名单见{" "}
          <a className="link" href={`${REPO_URL}/graphs/contributors`} target="_blank" rel="noopener noreferrer">
            GitHub 贡献者页面
          </a>
          。
        </p>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 18 }}>
        <span className="label">共 {state.data.length} 位</span>
        <a
          className="label label-blue"
          href={`${REPO_URL}/graphs/contributors`}
          target="_blank"
          rel="noopener noreferrer"
        >
          在 GitHub 查看 →
        </a>
      </div>
      <div className="contrib-grid">
        {state.data.map((p) => (
          <a className="contrib" key={p.login} href={p.url} target="_blank" rel="noopener noreferrer">
            <Image src={p.avatar} alt={p.login} width={44} height={44} unoptimized />
            <span className="n">{p.login}</span>
            <span className="c">{p.contributions} commits</span>
          </a>
        ))}
      </div>
    </>
  );
}
