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
  { id: "write-contract", label: "写入前提" },
  { id: "res", label: "主要资源" },
  { id: "example", label: "几个例子" },
  { id: "warn", label: "注意事项" },
];

const RESOURCES = [
  ["/api/auth/session", "确认当前 Bearer 身份类型"],
  ["/api/home", "首页摘要、统计与订阅账号概览"],
  ["/api/health", "运行态健康状态"],
  ["/api/logs", "请求日志列表与详情"],
  ["/api/usage", "用量与成本统计"],
  ["/api/settings", "全局运行时设置"],
  ["/api/system", "部署信息与版本更新检查"],
  ["/api/route/inspect", "只读路由检查"],
  ["/api/channels", "渠道描述符、字段与能力"],
  ["/api/models", "项目模型列表与上游模型发现"],
  ["/api/model-prices", "模型价格查询、同步、修改、重置与删除"],
  ["/api/groups", "分组列表、创建、详情、设置、模型与删除"],
  ["/api/groups/{group_id}/credentials", "凭据管理，含批量导入、查看真实值、下载"],
  ["/api/credential-stages", "订阅凭据的授权、导入、轮询与暂存状态"],
  ["/api/access-keys", "访问密钥，含限额与查看真实值"],
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
      <p>
        访问密钥当前只允许读取 <code>/api/auth/session</code>、<code>/api/home</code>、
        <code>/api/home/statistics</code>、<code>/api/models</code>、<code>/api/usage</code>、
        <code>/api/logs</code> 和 <code>/api/logs/{`{request_id}`}</code>；其他管理路由返回 403。
      </p>

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
      <p>
        <code>data</code> 在成功和失败响应中都是可选字段；没有返回数据时会直接省略，
        不要假设它始终存在或始终是对象。<code>message</code> 会随
        <code>Accept-Language</code> 本地化。
      </p>
      <p>
        程序应判断 <code>code</code> 和结构化 <code>data</code>，不要解析本地化的
        <code>message</code>。完整错误码与恢复方式见{" "}
        <Link href="/docs/reference/errors#management">错误与恢复参考</Link>。
      </p>

      <Heading id="write-contract">写入前提</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "24%" }}>请求头</th>
              <th style={{ width: "42%" }}>哪些接口要求</th>
              <th>合同</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">Idempotency-Key</td>
              <td>
                <code>POST /api/groups</code><br />
                <code>POST /api/groups/{`{group_id}`}/credentials/import</code><br />
                <code>POST /api/groups/{`{group_id}`}/credentials/connect</code><br />
                <code>POST /api/groups/{`{group_id}`}/credentials/{`{credential_id}`}/reset-credits/consume</code><br />
                <code>POST /api/access-keys</code><br />
                <code>POST /api/access-keys/{`{id}`}/rotate</code>
              </td>
              <td>必须且只能有一个值，格式为规范的小写 UUID v4；同一逻辑操作重试时复用原值</td>
            </tr>
            <tr>
              <td className="m">If-Match</td>
              <td><code>PUT /api/settings</code></td>
              <td>先读取设置响应中的 <code>ETag</code>，再原样带回；冲突时重新读取并合并</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Notice label="JSON 请求体使用严格合同" tone="blue">
        声明 JSON 请求体的端点只接受单个对象；未知字段、重复字段、尾随的第二个 JSON 值都会被拒绝。
        采用空对象合同的无参数操作只接受空请求体或 <code>{`{}`}</code>。
      </Notice>

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

      <Notice label="自动化脚本要固定版本" tone="blue">
        本表记录稳定资源边界，不复制仍在演进的全部端点字段。
        当前版本的完整路由合同由代码中的 <code>internal/control/http_routes.go</code> 定义；
        自动化脚本应固定 GPT-Load 的精确版本，并在升级后回归实际调用。
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
      <CodeBlock caption="导入凭据：带幂等键">
        curl -X POST http://127.0.0.1:3001/api/groups/1/credentials/import \{"\n"}
        {"  "}-H <span className="s">&quot;Authorization: Bearer $AUTH_KEY&quot;</span> \{"\n"}
        {"  "}-H <span className="s">&quot;Idempotency-Key: 7f6a7f86-3f58-4ae3-a1a1-46d3b8d17b71&quot;</span> \{"\n"}
        {"  "}-H <span className="s">&quot;Content-Type: application/json&quot;</span> \{"\n"}
        {"  "}-d <span className="s">&apos;{"{"}&quot;credentials&quot;:&quot;sk-example&quot;{"}"}&apos;</span>
      </CodeBlock>

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
          <strong>不要自行改变幂等键</strong>——结果不明时复用原值；新的逻辑操作再生成新值
        </li>
      </ul>
    </DocsPage>
  );
}
