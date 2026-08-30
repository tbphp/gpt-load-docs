import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "监控与用量",
  description: "健康状态、路由检查、请求日志、用量汇总与成本估算。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/monitor" title="监控与用量" lede="问题出在哪、钱花在哪，都能查到具体那一条。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>健康状态：离散状态的判定依据</li>
        <li>路由检查：给定条件，看网关会怎么选</li>
        <li>请求日志：字段含义、留存策略与查询</li>
        <li>用量汇总：Token 分类、缓存读写的口径</li>
        <li>成本估算：价格规则从哪来，<strong>估算不等于账单</strong></li>
        <li>用量质量指标：缺失、部分缺失、未定价分别意味着什么</li>
      </ul>
    </DocsPage>
  );
}
