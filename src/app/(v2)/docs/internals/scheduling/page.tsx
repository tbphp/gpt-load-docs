import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "调度与容错",
  description: "多凭据之间的权重轮转、会话亲和、失败重试、冷却与拉黑机制。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/internals/scheduling" title="调度与容错" lede="一个凭据出问题不该拖垮整条链路，这页讲网关怎么做到。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>加权轮转：权重怎么定，动态调整的依据是什么</li>
        <li>会话亲和：什么请求需要粘住同一个凭据</li>
        <li>重试：哪些错误会重试、重试几次、换不换凭据</li>
        <li>冷却：触发条件与时长，冷却期间流量怎么走</li>
        <li>拉黑：连续失败阈值，以及怎么手工恢复</li>
        <li>首个流错误的安全切换行为</li>
      </ul>
    </DocsPage>
  );
}
