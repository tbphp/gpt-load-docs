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
  { id: "windows", label: "Windows 安装包" },
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
          <strong>原生二进制</strong>——不想装 Docker
        </li>
        <li>
          <strong>Windows 安装包</strong>——Windows 上想装成开机自启的服务
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
        下载对应平台的构建。共五个目标：Linux 与 macOS 各有 amd64、arm64 两个，
        Windows 为 amd64。
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
      <p>
        Windows 上的 <code>gpt-load-windows-amd64.exe</code> 是<strong>前台运行</strong>的，
        关掉窗口服务就停了。想让它常驻，用下面的安装包。
      </p>

      <Heading id="windows">Windows 安装包</Heading>
      <p>
        发布页另有 <code>gpt-load-windows-setup.exe</code>，
        这是 Windows 上更省事的装法：双击、确认管理员权限，它会自动完成这些事：
      </p>
      <ul>
        <li>
          <strong>注册成 Windows 服务</strong>——以低权限账户运行，并设置开机自启
        </li>
        <li>
          <strong>建好快捷方式</strong>——桌面和开始菜单里都有管理页面入口
        </li>
        <li>
          <strong>启动服务</strong>——装完即可用，不需要再敲命令
        </li>
      </ul>

      <Notice label="安装过程中会显示管理密钥" tone="amber">
        首次生成的管理密钥<b>只在安装界面上显示这一次</b>，关掉页面前请先保存。
        错过了也能找回——它就存在{" "}
        <code>%ProgramData%\GPT-Load\data\auth.key</code>。
      </Notice>

      <p>装完之后，两个目录需要知道：</p>
      <ul>
        <li>
          <strong>配置目录</strong>——<code>%ProgramData%\GPT-Load</code>，
          服务从这里读 <code>.env</code>
        </li>
        <li>
          <strong>数据目录</strong>——<code>%ProgramData%\GPT-Load\data</code>，
          数据库与两把密钥都在这里
        </li>
      </ul>

      <p>需要手动管服务时，用程序自带的子命令：</p>
      <CodeBlock caption="管理已安装的服务">
        &quot;%ProgramFiles%\GPT-Load\gpt-load.exe&quot; service status{"\n"}
        &quot;%ProgramFiles%\GPT-Load\gpt-load.exe&quot; service stop{"\n"}
        &quot;%ProgramFiles%\GPT-Load\gpt-load.exe&quot; service start{"\n"}
        &quot;%ProgramFiles%\GPT-Load\gpt-load.exe&quot; service restart
      </CodeBlock>

      <p>
        <strong>升级</strong>直接用新版安装包覆盖安装即可，它会先优雅停止服务再更新。
        <strong>卸载</strong>会移除程序和服务，但<strong>保留数据目录</strong>——
        这意味着重装后配置还在，也意味着确实要清干净时得手动删。
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
        默认 SQLite 部署的状态都在 <code>DATA_DIR</code> 里。Compose 配置中的逻辑卷名是
        <code>gpt-load-data</code>，实际 Docker 卷名由 Compose 项目名决定，不一定与它相同：
      </p>
      <ul>
        <li>
          <code>gpt-load.db</code>——数据库（默认 SQLite）
        </li>
        <li>
          <code>auth.key</code>——未显式设置 <code>AUTH_KEY</code> 时自动生成
        </li>
        <li>
          <code>encryption.key</code>——未显式设置 <code>ENCRYPTION_KEY</code> 时自动生成
        </li>
      </ul>

      <Notice label="备份要一起备" tone="amber">
        加密密钥必须和数据库成套备份。使用显式 <code>AUTH_KEY</code> 或
        <code>ENCRYPTION_KEY</code> 时，还要从原来的安全来源单独备份；
        它们不会自动写入数据卷。详见{" "}
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
      <p>不用盯着 GitHub。管理台的设置页里有系统信息，会显示当前版本，出现新版本时给出提示和发布说明链接，也可以手动检查更新。</p>
      <CodeBlock caption="升级到最新的 2.x">
        docker compose pull{"\n"}
        docker compose up -d
      </CodeBlock>
      <p>
        数据在具名卷里，升级不会丢。数据库结构变更会在启动时自动完成，不需要手工操作。
      </p>
      <p>
        官方 Compose 使用 <code>2</code> 更新通道。GA 前，它跟随已验证的 2.0 Beta 和 RC；GA
        后只跟随稳定的 2.x。镜像精确标签会去掉 Git tag 的 <code>v</code> 前缀（例如
        <code>2.0.0-beta.25</code>），<code>2.0-beta</code> 是 2.0 Beta 通道，且不会使用
        <code>latest</code>。需要固定版本时，请改用精确版本标签或镜像摘要。
      </p>
      <p><Link href="/docs/known-limitations#tags">升级前查看已知限制与版本策略 →</Link></p>
      <p>
        数据库迁移是单向的，<strong>回滚不能只把镜像标签改回去</strong>。
        应在升级前停机备份；需要回滚时，恢复升级前的数据库和配套密钥，
        再用备份对应的旧版本启动。
      </p>

      <p>
        装完之后：<Link href="/docs/quickstart">快速开始</Link> 教你建第一个分组，
        <Link href="/docs/security">安全与上生产</Link> 是正式使用前该走一遍的清单。
      </p>
    </DocsPage>
  );
}
