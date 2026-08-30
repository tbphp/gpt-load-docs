import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "协议与转换边界",
  description: "四种客户端协议的入口，以及网关能转换与不能转换的边界。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/internals/protocols" title="协议与转换边界" lede="知道什么能转、什么不能转，遇到不支持的组合能提前判断。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>四种协议的入口与各自适合的客户端</li>\n        <li>渠道声明自己能执行哪些协议与能力</li>\n        <li><strong>它不是任意协议、任意 JSON 的万能翻译器</strong>——边界在哪</li>\n        <li>Responses 的有状态请求限制：<code>previous_response_id</code> 跨凭据不可靠</li>\n        <li>协议转换在请求日志里怎么体现</li>
      </ul>
    </DocsPage>
  );
}
