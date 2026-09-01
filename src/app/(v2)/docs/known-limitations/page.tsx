import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/known-limitations");
}

const TOC = [
  { id: "runtime", label: "部署与数据" },
  { id: "cost", label: "成本与软限制" },
  { id: "responses", label: "Responses 有状态资源" },
  { id: "encryption", label: "加密密钥" },
  { id: "tags", label: "版本与镜像标签" },
  { id: "maintenance", label: "维护政策" },
];

export default function KnownLimitations() {
  return (
    <DocsPage
      path="/docs/known-limitations"
      title="2.0 已知限制与版本策略"
      lede="部署、升级或切换生产流量前，一次确认 2.0 的运行边界、兼容性和版本通道。"
      toc={TOC}
    >
      <Heading id="runtime">部署与数据</Heading>
      <Notice label="只支持单实例" tone="amber">
        2.0 只保证单个应用实例的正确性。调度、冷却、限流与亲和等状态不会在实例之间共享；换用外部数据库也不会获得横向扩展能力。
      </Notice>
      <p>需要隔离业务或扩大容量时，按业务维度拆成多个独立部署，不要在同一套配置前直接增加负载均衡实例。</p>
      <p><Link href="/docs/security">查看安全与上生产 →</Link></p>

      <Notice label="1.x 不能原地升级" tone="amber">
        2.0 不能打开、导入或转换 1.x 的数据。两套版本必须使用不同的数据库、数据目录、端口与 Docker 卷。
      </Notice>
      <p>正确方式是并行部署 2.0，重新配置并验证，再切换流量；回滚窗口结束前保留原来的 1.x 实例。</p>
      <p><Link href="/docs/migrate-from-1x">查看从 1.x 迁移 →</Link></p>

      <Notice label="不自动跨数据库驱动搬迁数据" tone="blue">
        版本升级需要的 Schema 迁移会在启动时自动执行；但在 SQLite、MySQL 与 PostgreSQL 之间切换时，GPT-Load 不会复制原有配置和数据。
      </Notice>
      <p>换驱动时请使用新数据库重新配置、验证并切流量。不要把它和自动 Schema 迁移混为一谈。</p>
      <p><Link href="/docs/database">查看数据库与备份 →</Link></p>

      <Heading id="cost">成本与软限制</Heading>
      <Notice label="成本是估算，不是账单" tone="amber">
        成本根据上游返回的 token 用量和模型价格计算。缺少用量或价格的请求不能完整计价，价格变化也不会回算历史。
      </Notice>
      <p>这些数据适合运营分析与异常保护，不适合财务对账。</p>
      <Notice label="成本限制是软保护" tone="amber">
        网关在请求完成后才把本次估算成本计入额度。单次大请求和已经放行的并发请求可能让累计金额超过阈值；未定价或缺少用量的请求也不会计入。
      </Notice>
      <p>需要严格预算时，还应使用服务商提供的账单告警、预算或硬额度。</p>
      <p><Link href="/docs/access-keys">查看访问密钥成本限制 →</Link></p>

      <Heading id="responses">Responses 有状态资源</Heading>
      <Notice label="不提供资源到凭据的强绑定" tone="amber">
        previous_response_id、conversation 和其他资源 ID 通常依赖创建资源的上游凭据。当前亲和机制不读取这些 ID，不能保证后续请求回到原凭据。
      </Notice>
      <p>可靠使用有状态资源时，让分组只保留一个凭据，或确认上游允许不同凭据共享同一资源。</p>
      <p><Link href="/docs/internals/protocols">查看协议与转换边界 →</Link></p>

      <Heading id="encryption">加密密钥</Heading>
      <Notice label="不支持 ENCRYPTION_KEY 轮换" tone="amber">
        更换或丢失 ENCRYPTION_KEY 后，已有渠道凭据无法解密。当前没有使用新旧两把主密钥重加密现有数据的流程。
      </Notice>
      <p>数据库与加密密钥必须成套备份；恢复时先使用与备份匹配的程序版本和密钥。</p>
      <p><Link href="/docs/security">查看密钥与备份要求 →</Link></p>

      <Heading id="tags">版本与镜像标签</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>标签</th>
              <th>含义</th>
              <th>适用场景</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">2.0.0-rc.2</td>
              <td>精确版本标签，不带 Git tag 的 v 前缀</td>
              <td>需要固定版本时使用；生产环境也可以固定镜像摘要</td>
            </tr>
            <tr>
              <td className="m">2</td>
              <td>2.x 浮动通道；GA 前可跟随已验证的 2.0 Beta 与 RC，GA 后只跟随稳定 2.x</td>
              <td>接受经过发布门禁的新版本时使用</td>
            </tr>
            <tr>
              <td className="m">2.0-beta</td>
              <td>只跟随格式严格的 2.0 Beta，不跟随 RC</td>
              <td>只想停留在 Beta 通道时使用</td>
            </tr>
            <tr>
              <td className="m">2.0-rc</td>
              <td>不存在这个浮动标签；RC 使用精确标签，GA 前也可能推进 2</td>
              <td>不要配置</td>
            </tr>
            <tr>
              <td className="m">latest</td>
              <td>继续保留在 1.x，不代表 2.x</td>
              <td>部署 2.x 时不要使用</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>数据库迁移是单向的。回滚不能只改镜像标签，还要恢复升级前的数据库和配套密钥。</p>
      <p><Link href="/docs/install">查看部署与升级流程 →</Link></p>

      <Heading id="maintenance">维护政策</Heading>
      <ul>
        <li>2.0 GA 前属于预发布安全支持候选；发布就绪状态以实际 Release 与制品为准。</li>
        <li>1.4.x 处于维护状态，只接受安全与严重缺陷修复，不再增加新功能。</li>
        <li>当前没有公开的 1.4.x EOL 日期或 2.0.x 固定支持周期；后续以正式发布说明为准。</li>
      </ul>
      <p><Link href="/changelog">查看发布记录与当前版本 →</Link></p>
    </DocsPage>
  );
}
