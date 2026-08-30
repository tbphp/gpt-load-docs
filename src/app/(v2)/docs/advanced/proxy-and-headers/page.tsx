import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "代理、请求头与覆盖",
  description: "出站代理、请求头规则与参数覆盖，用于网络受限或非标上游。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/advanced/proxy-and-headers" title="代理、请求头与覆盖" lede="应付网络受限、要改请求头、要强制某些参数这类非标场景。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>出站代理：全局 / 分组 / <strong>单个凭据</strong>三级，谁覆盖谁</li>\n        <li>请求头规则：全局与分组两层，增加、删除、改写</li>\n        <li>参数覆盖：强制某些参数，或补上游要求的默认值</li>\n        <li><code>inject_usage_options</code>：为什么有些上游要注入才能拿到 usage</li>\n        <li>常见场景：内网代理、上游要求特定 UA、强制关闭流式</li>
      </ul>
    </DocsPage>
  );
}
