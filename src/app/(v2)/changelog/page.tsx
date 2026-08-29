import type { Metadata } from "next";
import "@/styles/v2/pages.css";
import ReleaseList from "@/components/v2/pages/ReleaseList";

export const metadata: Metadata = {
  title: "更新日志",
  description: "GPT-Load 各版本的发布记录，来自 GitHub Releases。",
};

export default function Changelog() {
  return (
    <main className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">更新日志</span>
          <h1 className="page-title">版本记录</h1>
          <p className="page-lede">
            直接取自 GitHub Releases。完整的变更说明与产物下载都在对应的 release 页面。
          </p>
        </div>
        <div className="page-body">
          <ReleaseList />
        </div>
      </div>
    </main>
  );
}
