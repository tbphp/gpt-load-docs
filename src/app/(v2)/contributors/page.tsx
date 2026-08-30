import type { Metadata } from "next";
import "@/styles/v2/pages.css";
import ContributorList from "@/components/v2/pages/ContributorList";
import { Button } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "贡献者",
  description: "感谢每一位为 GPT-Load 提交代码、报告问题与完善文档的贡献者。",
};

export default function Contributors() {
  return (
    <main id="main" className="page">
      <div className="shell">
        <div className="page-head">
          <span className="label">贡献者</span>
          <h1 className="page-title">这个项目由他们写成</h1>
          <p className="page-lede">
            名单取自 GitHub，按提交数排序。
            报告问题、完善文档、参与讨论同样是贡献，只是不都会出现在这张表里。
          </p>
        </div>

        <div className="page-body">
          <ContributorList />

          <div className="notice" style={{ marginTop: 48 }}>
            <span className="t">参与进来</span>
            <p>
              发现问题、想要新功能，或者只是文档里有个错别字，都欢迎提 issue 和 PR。
              安全类问题请按 <b>SECURITY.md</b> 里的流程私下反馈，不要开公开 issue。
            </p>
          </div>

          <div className="btns" style={{ marginTop: 26 }}>
            <Button href="https://github.com/tbphp/gpt-load/issues">提交 Issue</Button>
            <Button href="https://github.com/tbphp/gpt-load/pulls" variant="secondary">
              发起 Pull Request
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
