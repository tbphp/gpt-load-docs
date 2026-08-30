import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "运行时设置",
  description: "超时、重试、会话亲和等十三项运行参数，以及系统级与分组级的覆盖关系。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/settings" title="运行时设置" lede="知道十三项参数各自调什么，以及什么时候该在分组里单独覆盖。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>三种超时：首字节、整体请求、流空闲——分别对应什么症状</li>\n        <li>重试次数与拉黑阈值怎么配合</li>\n        <li>会话亲和三项：开关、TTL、容量</li>\n        <li>校验间隔、请求日志留存天数</li>\n        <li><strong>系统级 → 分组级的覆盖关系</strong>，以及怎么看当前生效值</li>\n        <li>改完之后什么时候生效</li>
      </ul>
    </DocsPage>
  );
}
