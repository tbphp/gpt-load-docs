import type { Metadata } from "next";
import { docPageMetadata } from "@/lib/v2/doc-meta";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/install");
}

const TOC = [
  { id: "pick", label: "选哪种" },
  { id: "compose", label: "Docker Compose" },
  { id: "binary", label: "原生二进制" },
  { id: "source", label: "源码构建" },
  { id: "data", label: "数据放在哪" },
  { id: "ops", label: "日常运维" },
  { id: "upgrade", label: "升级与回滚" },
];

export default function Install() {
  return (
    <DocsPage
      path="/docs/install"
      title="部署"
      lede="三种装法，选一种就行。装完知道数据在哪、怎么升级，这页就算读完了。"
      toc={TOC}
    >
      <Heading id="pick">选哪种</Heading>
      <ul>
        <li>
          <strong>Docker Compose</strong>——推荐。一条命令起服务，升级也是一条命令
        </li>
        <li>
          <strong>原生二进制</strong>——不想装 Docker，或者要跑在 Windows 上
        </li>
        <li>
          <strong>源码构建</strong>——要改代码，或者需要特定平台的构建
        </li>
      </ul>
      <p>拿不准就用第一种。</p>

      <Heading id="compose">Docker Compose</Heading>
      <CodeBlock caption="① 起服务">
        git clone --depth 1 --branch v2 \{"\n"}
        {"  "}https://github.com/tbphp/gpt-load.git{"\n"}
        cd gpt-load{"\n"}
        {"\n"}
        cp .env.example .env{"\n"}
        docker compose up -d
      </CodeBlock>
      <CodeBlock caption="② 确认在跑">curl --fail http://127.0.0.1:3001/health</CodeBlock>
      <CodeBlock caption="③ 取管理密钥">
        docker compose exec gpt-load \{"\n"}
        {"  "}sh -c <span className="s">&apos;cat /app/data/auth.key&apos;</span>
      </CodeBlock>

      <Notice label="容器内会覆写两个值" tone="amber">
        <b>这是最容易踩的坑。</b>容器里 <code>HOST</code> 被固定为 <code>0.0.0.0</code>、
        <code>DATA_DIR</code> 被固定为 <code>/app/data</code>，在 <code>.env</code>
        里改这两个不会生效。真正决定外部能否访问的是 Compose 的端口发布配置——
        默认只发布到宿主机的 <code>127.0.0.1:3001</code>。
      </Notice>

      <Heading id="binary">原生二进制</Heading>
      <p>
        从{" "}
        <a href="https://github.com/tbphp/gpt-load/releases" target="_blank" rel="noopener noreferrer">
          GitHub Releases
        </a>{" "}
        下载对应平台的构建。提供 Linux、macOS（Intel / Apple 芯片）、Windows 五个目标。
      </p>
      <p>
        <strong>下载后先校验</strong>，发布页附有 <code>SHA256SUMS</code>：
      </p>
      <CodeBlock caption="校验并运行">
        <span className="c"># 核对校验和</span>{"\n"}
        sha256sum -c SHA256SUMS --ignore-missing{"\n"}
        {"\n"}
        chmod +x ./gpt-load-linux-amd64{"\n"}
        HOST=127.0.0.1 DATA_DIR=./data ./gpt-load-linux-amd64
      </CodeBlock>
      <p>
        然后打开 <code>http://127.0.0.1:3001</code>。管理密钥在 <code>./data/auth.key</code>。
      </p>

      <Heading id="source">源码构建</Heading>
      <p>
        需要 Go 和 Node。管理台前端会被编译进二进制，所以要先构建前端：
      </p>
      <CodeBlock caption="从源码构建">
        git clone --branch v2 https://github.com/tbphp/gpt-load.git{"\n"}
        cd gpt-load{"\n"}
        {"\n"}
        <span className="c"># 构建管理台，产物会嵌入二进制</span>{"\n"}
        make build{"\n"}
        {"\n"}
        ./gpt-load
      </CodeBlock>
      <p>
        具体的 Go 与 Node 版本要求以仓库根目录的 <code>go.mod</code> 和{" "}
        <code>web/package.json</code> 为准。
      </p>

      <Heading id="data">数据放在哪</Heading>
      <p>
        所有状态都在 <code>DATA_DIR</code> 里，Compose 部署时是名为{" "}
        <code>gpt-load-data</code> 的 Docker 卷：
      </p>
      <ul>
        <li>
          <code>gpt-load.db</code>——数据库（默认 SQLite）
        </li>
        <li>
          <code>auth.key</code>——管理台登录密钥
        </li>
        <li>
          <code>encryption.key</code>——加密上游凭据用的密钥
        </li>
      </ul>

      <Notice label="备份要一起备" tone="amber">
        <code>encryption.key</code> 用来解密你填进去的上游凭据。
        <b>备份时必须和数据库一起备</b>，只备数据库的话，恢复出来的凭据是解不开的，
        而且本版本不支持主密钥轮换。详见{" "}
        <Link href="/docs/database">数据库与备份</Link>。
      </Notice>

      <p>
        想换成 MySQL 或 PostgreSQL，填 <code>DATABASE_DSN</code> 即可，
        留空则用内置 SQLite。
      </p>

      <Heading id="ops">日常运维</Heading>
      <CodeBlock caption="常用命令">
        <span className="c"># 看日志</span>{"\n"}
        docker compose logs -f{"\n"}
        {"\n"}
        <span className="c"># 停服务</span>{"\n"}
        docker compose stop{"\n"}
        {"\n"}
        <span className="c"># 重启</span>{"\n"}
        docker compose restart
      </CodeBlock>

      <Heading id="upgrade">升级与回滚</Heading>
      <CodeBlock caption="升级到最新的 2.x">
        docker compose pull{"\n"}
        docker compose up -d
      </CodeBlock>
      <p>
        数据在具名卷里，升级不会丢。数据库结构变更会在启动时自动完成，不需要手工操作。
      </p>
      <p>
        官方 Compose 用的是固定的版本标签，<strong>不依赖 <code>latest</code></strong>，
        所以拉取不会意外跨到不兼容的大版本。
      </p>
      <p>
        要回滚就把镜像标签改回旧版本再 <code>up -d</code>。
        <strong>但跨版本回滚前先备份数据库</strong>——新版本执行过的结构变更，旧版本未必认得。
      </p>

      <p>
        装完之后：<Link href="/docs/quickstart">快速开始</Link> 教你建第一个分组，
        <Link href="/docs/security">安全与上生产</Link> 是正式使用前该走一遍的清单。
      </p>
    </DocsPage>
  );
}
