import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/reference/api");
}

const TOC = [
  { id: "auth", label: "认证" },
  { id: "lockout", label: "认证失败锁定" },
  { id: "shape", label: "响应约定" },
  { id: "res", label: "主要资源" },
  { id: "example", label: "几个例子" },
  { id: "warn", label: "注意事项" },
];

const RESOURCES = [
  ["/api/groups", "分组的增删改查"],
  ["/api/groups/{id}/credentials", "凭据管理，含批量导入、查看真实值、下载"],
  ["/api/access-keys", "访问密钥，含限额与查看真实值"],
  ["/api/models", "模型信息"],
  ["/api/model-prices", "模型价格，含同步与重置"],
  ["/api/logs", "请求日志查询"],
  ["/api/usage", "用量与成本统计"],
  ["/api/health", "健康状态"],
  ["/api/settings", "运行时设置"],
  ["/api/route/inspect", "路由检查"],
];

export default function Api() {
  return (
    <DocsPage
      path="/docs/reference/api"
      title="管理 API"
      lede="管理台本身就是调用这套接口的。需要脚本化管理分组和密钥时可以直接用。"
      toc={TOC}
    >
      <Heading id="auth">认证</Heading>
      <p>
        <code>/api</code> 下的受保护接口都使用 Bearer 认证：
      </p>
      <CodeBlock caption="请求头">
        Authorization: Bearer <span className="s">你的 AUTH_KEY 或访问密钥</span>
      </CodeBlock>
      <ul>
        <li>
          <strong><code>AUTH_KEY</code></strong>——管理权限，可读写配置，也能执行 Reveal 等敏感操作
        </li>
        <li>
          <strong>访问密钥</strong>——只允许读取自身范围内的首页、模型、用量和脱敏请求日志，
          不能修改配置，也不能查看上游凭据
        </li>
      </ul>
      <p>需要写入或调用路由检查时必须使用 <code>AUTH_KEY</code>。</p>

      <Heading id="lockout">认证失败锁定</Heading>
      <Notice label="避免脚本反复重试错误密钥" tone="amber">
        同一个直接对端地址在 30 分钟内连续 5 次管理认证失败，会被锁定 30 分钟。锁定期间返回 429 和 Retry-After；使用正确的 AUTH_KEY 成功认证会清除失败计数。
      </Notice>

      <Heading id="shape">响应约定</Heading>
      <p>统一的返回结构，成功与失败靠 <code>code</code> 区分：</p>
      <CodeBlock caption="成功">
        {"{"}{"\n"}
        {"  "}<span className="s">&quot;code&quot;</span>: 0,{"\n"}
        {"  "}<span className="s">&quot;message&quot;</span>: <span className="s">&quot;success&quot;</span>,{"\n"}
        {"  "}<span className="s">&quot;data&quot;</span>: {"{"} ... {"}"}{"\n"}
        {"}"}
      </CodeBlock>
      <CodeBlock caption="失败">
        {"{"}{"\n"}
        {"  "}<span className="s">&quot;code&quot;</span>: <span className="s">&quot;错误标识&quot;</span>,{"\n"}
        {"  "}<span className="s">&quot;message&quot;</span>: <span className="s">&quot;人类可读的说明&quot;</span>{"\n"}
        {"}"}
      </CodeBlock>
      <p>
        <strong>成功时 <code>code</code> 是数字 0</strong>，失败时是字符串标识——
        判断时注意类型。
      </p>

      <Heading id="res">主要资源</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "44%" }}>路径</th>
              <th>用途</th>
            </tr>
          </thead>
          <tbody>
            {RESOURCES.map(([path, use]) => (
              <tr key={path}>
                <td className="m">{path}</td>
                <td>{use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Notice label="以管理台的实际请求为准" tone="blue">
        每个端点的具体参数没有在这里逐一列出——
        接口仍在演进，写死在文档里容易过时。
        <b>最可靠的做法是打开浏览器开发者工具</b>，
        在管理台做一次对应操作，直接看它发了什么请求。
        这样拿到的参数一定是当前版本准确的。
      </Notice>

      <Heading id="example">几个例子</Heading>
      <CodeBlock caption="列出所有分组">
        curl http://127.0.0.1:3001/api/groups \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer $AUTH_KEY&quot;</span>
      </CodeBlock>
      <CodeBlock caption="查看健康状态">
        curl http://127.0.0.1:3001/api/health \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer $AUTH_KEY&quot;</span>
      </CodeBlock>
      <CodeBlock caption="路由检查：这个请求会走哪">
        curl -X POST http://127.0.0.1:3001/api/route/inspect \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer $AUTH_KEY&quot;</span> \{"\n"}
        {"  "}-H <span className="s">&quot;Content-Type: application/json&quot;</span> \{"\n"}
        {"  "}-d <span className="s">&apos;{"{"}&quot;protocol&quot;:&quot;openai-completions&quot;,&quot;external_model&quot;:&quot;gpt-4o&quot;,&quot;access_key_id&quot;:1{"}"}&apos;</span>
      </CodeBlock>
      <p>
        <code>access_key_id</code> 是管理台中访问密钥的数字 ID。
        路由检查只计算当前配置下的候选结果，不会向上游发送真实请求。
      </p>

      <Heading id="warn">注意事项</Heading>
      <Notice label="不要暴露到公网" tone="amber">
        管理接口能读取<b>所有渠道凭据的真实值</b>
        （<code>/reveal</code> 一类的端点就是干这个的）。
        <code>AUTH_KEY</code> 泄漏等于全部上游密钥泄漏。
        <br />
        必须限制来源，配置方式见 <Link href="/docs/security">安全与上生产</Link>。
      </Notice>
      <ul>
        <li>
          <strong>脚本里别硬编码 AUTH_KEY</strong>——用环境变量或密钥管理工具
        </li>
        <li>
          <strong>接口会随版本调整</strong>——自动化脚本升级后要回归验证
        </li>
        <li>
          <strong>批量操作注意幂等</strong>——
          比如重复导入同一批凭据，重复的会被自动跳过，但仍建议先查后写
        </li>
      </ul>
    </DocsPage>
  );
}
