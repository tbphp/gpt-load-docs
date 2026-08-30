import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "常见问题",
  description: "GPT-Load 部署、接入与排障的高频问题。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/faq" title="常见问题" lede="从 issue 和交流群里捞出来的真实问题。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>端口被占用 / 回调端口冲突怎么办</li>
        <li>为什么远程浏览器完不成 OAuth 授权</li>
        <li>为什么某个模型请求一直失败</li>
        <li>成本估算和服务商账单对不上</li>
        <li>能不能多实例部署（不能，2.0 面向单实例）</li>
      </ul>
    </DocsPage>
  );
}
