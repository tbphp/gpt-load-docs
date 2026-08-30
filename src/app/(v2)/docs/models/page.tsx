import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "模型管理",
  description: "模型发现、别名映射、价格来源与成本估算的关系。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/models" title="模型管理" lede="让客户端用自己习惯的模型名，并知道成本估算的价格从哪来。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>模型发现：从上游拉取列表、手工补充</li>\n        <li><strong>模型别名</strong>：客户端传 A，实际请求上游的 B</li>\n        <li>价格来源，以及 <code>models.dev</code> 自动同步开关</li>\n        <li>未定价的模型会怎样——只影响成本估算，不影响请求本身</li>\n        <li>模型规格：上下文长度、能力标记怎么读</li>
      </ul>
    </DocsPage>
  );
}
