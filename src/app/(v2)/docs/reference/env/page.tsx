import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "配置参考",
  description: "GPT-Load 的环境变量全表：默认值、取值范围与单位。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/reference/env" title="配置参考" lede="所有环境变量的完整清单，与 `.env.example` 保持一致。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>一张表：变量名 / 默认值 / 取值范围 / 说明</li>
        <li>按组分节：进程与网络、数据与存储、密钥、日志</li>
        <li>标注单位——所有超时项一律是秒</li>
        <li>硬约束：<code>PORT</code> 必须落在 1–65535，<code>LOG_FORMAT</code> 只接受 <code>text</code> 或 <code>json</code></li>
        <li>改完配置后怎么确认生效</li>
      </ul>
    </DocsPage>
  );
}
