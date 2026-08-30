import Link from "next/link";
import "@/styles/v2/tokens.css";
import "@/styles/v2/base.css";
import "@/styles/v2/layout.css";
import "@/styles/v2/components.css";
import "@/styles/v2/pages.css";
import Mark from "@/components/v2/Mark";

export const metadata = {
  title: "页面不存在 - GPT-Load",
  robots: { index: false, follow: true },
};

/**
 * 全站 404。
 *
 * 必须放在 app 根级：路由组里的 not-found 只对显式调用 notFound() 的情况生效，
 * 地址不匹配任何路由时 Next.js 只会找根级这一个。
 *
 * 因此它不在 (v2) 布局内，样式与头尾要自己带——这里只放最小的品牌标识与出口，
 * 不重复整套顶栏页脚。
 */
const WAYS = [
  { href: "/docs/quickstart", t: "快速开始", d: "十分钟跑通第一个请求" },
  { href: "/docs", t: "文档首页", d: "按任务找到该看哪一页" },
  { href: "/v1/docs", t: "1.4.x 文档", d: "旧版本的内容在归档站" },
];

export default function NotFound() {
  return (
    <div className="v2">
      <header className="top">
        <div className="shell top-in">
          <Link className="brand" href="/">
            <Mark size={20} />
            GPT-Load
          </Link>
        </div>
      </header>

      <main id="main" className="page">
        <div className="shell">
          <div className="page-head">
            <span className="label">404</span>
            <h1 className="page-title">这个页面不在了</h1>
            <p className="page-lede">
              可能是地址输错了，也可能它在 2.0 改版时换了位置。
              如果你是从 1.4.x 的链接过来的，内容多半还在归档站里。
            </p>
          </div>

          <div className="page-body">
            <div className="g12 rows-30">
              {WAYS.map((w) => (
                <Link className="col-4 item" key={w.href} href={w.href}>
                  <h3 style={{ marginTop: 0 }}>{w.t}</h3>
                  <p>{w.d}</p>
                </Link>
              ))}
            </div>

            <div className="btns" style={{ marginTop: 40 }}>
              <Link className="btn btn-p" href="/">
                回首页
              </Link>
              <a
                className="btn btn-s"
                href="https://github.com/tbphp/gpt-load/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                报告失效链接
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
