import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "数据库与备份",
  description: "SQLite、MySQL、PostgreSQL 三种驱动的选择、DSN 写法、迁移机制与备份恢复。",
  path: "/docs/database",
});

const TOC = [
  { id: "pick", label: "该用哪个" },
  { id: "dsn", label: "DSN 写法" },
  { id: "migrate", label: "结构迁移" },
  { id: "backup", label: "备份" },
  { id: "restore", label: "恢复" },
  { id: "switch", label: "换驱动" },
];

export default function Database() {
  return (
    <DocsPage
      path="/docs/database"
      title="数据库与备份"
      lede="默认的 SQLite 对绝大多数场景够用。这一页讲什么时候需要换，以及怎么备份才能真的恢复得回来。"
      toc={TOC}
    >
      <Heading id="pick">该用哪个</Heading>
      <p>
        三种驱动是<strong>同等受支持</strong>的，功能没有阉割，区别在运维：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "22%" }}>驱动</th>
              <th style={{ width: "34%" }}>适合</th>
              <th>代价</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SQLite</td>
              <td><strong>默认，不用装任何东西</strong>。单机部署的首选</td>
              <td>数据在本机文件里，跟着机器走</td>
            </tr>
            <tr>
              <td>MySQL</td>
              <td>已有 MySQL 运维体系，想统一备份和监控</td>
              <td>多一个要维护的服务</td>
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>同上，偏好 PG 生态</td>
              <td>同上</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Notice label="不用为了性能换" tone="blue">
        2.0 是<b>单实例设计</b>，换成外部数据库<b>不会带来横向扩展能力</b>，
        也很少是性能瓶颈所在。
        换的理由通常是运维统一——比如你希望数据库备份走公司现有的那套流程。
      </Notice>

      <Heading id="dsn">DSN 写法</Heading>
      <p>
        用 <code>DATABASE_DSN</code> 这一个变量决定连哪里。
        <strong>留空即使用受管的 SQLite</strong>，存在{" "}
        <code>DATA_DIR/gpt-load.db</code>。
      </p>
      <CodeBlock caption="三种驱动的 DSN">
        <span className="c"># 留空：受管 SQLite（默认）</span>{"\n"}
        DATABASE_DSN={"\n"}
        {"\n"}
        <span className="c"># 外部 SQLite：指定文件路径</span>{"\n"}
        DATABASE_DSN=<span className="s">sqlite:///var/lib/gpt-load/data.db</span>{"\n"}
        {"\n"}
        <span className="c"># MySQL</span>{"\n"}
        DATABASE_DSN=<span className="s">mysql://user:password@db.example:3306/gpt_load</span>{"\n"}
        {"\n"}
        <span className="c"># PostgreSQL</span>{"\n"}
        DATABASE_DSN=<span className="s">postgres://user:password@db.example:5432/gpt_load</span>
      </CodeBlock>
      <p>连接参数按各自的惯例追加在查询串里：</p>
      <CodeBlock caption="带参数">
        <span className="c"># MySQL 走 TLS</span>{"\n"}
        mysql://user:pass@db.example:3306/gpt_load?tls=true{"\n"}
        {"\n"}
        <span className="c"># PostgreSQL 要求 SSL</span>{"\n"}
        postgres://user:pass@db.example:5432/gpt_load?sslmode=require
      </CodeBlock>

      <Notice label="非空 DSN 一律视为你自己管理" tone="amber">
        只要 <code>DATABASE_DSN</code> 非空，网关就<b>不再接管这个数据库的目录与文件权限</b>——
        即使你填的 SQLite 路径恰好等于默认位置。
        权限、备份、磁盘都由你负责。
      </Notice>

      <p>连接池大小可以调，见 <Link href="/docs/reference/env">环境变量</Link>。</p>

      <Heading id="migrate">结构迁移</Heading>
      <p>
        版本升级时如果数据库结构有变化，<strong>启动时会自动完成迁移</strong>，
        不需要你执行任何命令。三种驱动走同一条有序的迁移链，
        已完成的跳过、未完成的按顺序执行。
      </p>
      <Notice label="升级前先备份" tone="amber">
        迁移是<b>单向的</b>——新版本执行过的结构变更，旧版本未必认得。
        跨版本升级前务必备份，否则回滚时会卡住。
      </Notice>
      <p>
        如果数据库处于无法安全恢复的中断状态，程序会<strong>拒绝启动</strong>
        并说明原因，而不是带着损坏的结构继续跑。
        这时候用备份恢复是最快的路径。
      </p>

      <Heading id="backup">备份</Heading>
      <Notice label="只备数据库是不够的" tone="amber">
        <b>必须同时备份 <code>encryption.key</code></b>。
        没有它，恢复出来的渠道凭据全是解不开的密文，
        而且本版本<b>不支持更换主密钥</b>——只能全部重新录入。
      </Notice>

      <p>
        <strong>SQLite（默认部署）</strong>——整个数据目录一起打包最省事：
      </p>
      <CodeBlock caption="备份 Compose 的数据卷">
        docker run --rm \{"\n"}
        {"  "}-v gpt-load-data:/data \{"\n"}
        {"  "}-v <span className="s">&quot;$(pwd)&quot;</span>:/backup \{"\n"}
        {"  "}alpine tar czf /backup/gpt-load-$(date +%F).tar.gz -C /data .
      </CodeBlock>

      <p>
        <strong>外部数据库</strong>——数据库用它自己的工具备份，
        但<strong>别忘了单独备份密钥文件</strong>：
      </p>
      <CodeBlock caption="两部分都要">
        <span className="c"># 1. 数据库</span>{"\n"}
        mysqldump -h db.example -u user -p gpt_load {">"} gpt_load.sql{"\n"}
        <span className="c"># 或 pg_dump -h db.example -U user gpt_load {">"} gpt_load.sql</span>{"\n"}
        {"\n"}
        <span className="c"># 2. 密钥文件（在 DATA_DIR 里）</span>{"\n"}
        cp /path/to/data/encryption.key ./encryption.key.bak
      </CodeBlock>

      <p>
        备份文件<strong>本身包含可解密的凭据</strong>，
        按敏感数据对待——加密存放，别丢进公开网盘或仓库。
      </p>

      <Heading id="restore">恢复</Heading>
      <p>
        恢复的关键是<strong>数据库和密钥必须来自同一次备份</strong>。
        新旧混用会导致部分凭据解不开。
      </p>
      <ol>
        <li>停掉服务</li>
        <li>还原数据库（或整个数据目录）</li>
        <li>确认 <code>encryption.key</code> 是配套的那一份</li>
        <li>启动，到管理台确认渠道凭据能正常查看</li>
      </ol>
      <p>
        <strong>验证过能恢复，备份才算数。</strong>
        建议在非生产环境实际走一遍这个流程，别等出事才发现备份不完整。
      </p>

      <Heading id="switch">换驱动</Heading>
      <p>
        <strong>没有自动的数据搬迁工具。</strong>换驱动等于换一套新数据库，
        原有配置需要重新录入。
      </p>
      <p>
        如果配置量大，比较务实的做法是：<strong>并行跑一段时间</strong>——
        新起一个实例连新数据库、配好、验证，再把流量切过去，
        和 <Link href="/docs/migrate-from-1x">从 1.x 迁移</Link> 的思路一致。
      </p>
      <p>
        换驱动后 <code>encryption.key</code> <strong>不要换</strong>——
        沿用原来那把，重新录入的凭据才能和旧备份保持一致的加密方式。
        当然，如果是全新录入，用新密钥也可以，但要记得更新备份。
      </p>
    </DocsPage>
  );
}
