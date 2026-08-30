import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "AccessKey",
  description: "AccessKey 的协议选择、分组授权与限流配置。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/access-keys" title="AccessKey" lede="AccessKey 是应用唯一需要知道的东西。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>创建 AccessKey：选择可用分组与客户端协议</li>
        <li>四种协议的勾选含义，以及 OpenAI 预设为什么同时选中两个协议</li>
        <li>RPM 限流配置</li>
        <li>轮换与吊销：泄漏之后怎么办</li>
        <li>给不同应用发不同 key 的实践建议</li>
      </ul>
    </DocsPage>
  );
}
