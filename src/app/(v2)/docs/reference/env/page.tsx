import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/reference/env");
}

const TOC = [
  { id: "diff", label: "和运行时设置的区别" },
  { id: "net", label: "进程与网络" },
  { id: "data", label: "数据与存储" },
  { id: "secret", label: "密钥" },
  { id: "log", label: "日志" },
  { id: "docker", label: "容器里的覆写" },
];

const NET = [
  ["HOST", "127.0.0.1", "监听地址。改成 0.0.0.0 等于对外开放，务必先读安全页"],
  ["PORT", "3001", "监听端口，必须在 1–65535 之间"],
  ["READ_TIMEOUT", "60", "读取请求的超时，单位秒"],
  ["IDLE_TIMEOUT", "120", "连接空闲超时，单位秒"],
  ["GRACEFUL_SHUTDOWN_TIMEOUT", "10", "优雅关闭的等待时长，单位秒"],
];

const DATA = [
  ["DATA_DIR", "./data", "数据目录，存数据库与两把密钥"],
  ["DATABASE_DSN", "（空）", "留空用受管 SQLite；填入则连接外部数据库"],
  ["DATABASE_MAX_OPEN_CONNECTIONS", "10", "数据库最大连接数"],
  ["DATABASE_MAX_IDLE_CONNECTIONS", "5", "最大空闲连接数，不得大于上一项"],
];

export default function Env() {
  return (
    <DocsPage
      path="/docs/reference/env"
      title="环境变量"
      lede="进程级配置，写在 .env 里，改完需要重启。这是一张查表用的页面，不用通读。"
      toc={TOC}
    >
      <Heading id="diff">和运行时设置的区别</Heading>
      <p>GPT-Load 有两套配置，容易混淆：</p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>类型</th>
              <th style={{ width: "26%" }}>改在哪</th>
              <th>生效方式</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>环境变量</td>
              <td><code>.env</code> 文件</td>
              <td><strong>需要重启</strong>。管进程本身：监听地址、数据库、密钥</td>
            </tr>
            <tr>
              <td>运行时设置</td>
              <td>管理台</td>
              <td><strong>即时生效</strong>。管调度行为：超时、重试、亲和</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        本页只讲前者。调度相关的参数见{" "}
        <Link href="/docs/settings">运行时设置</Link>。
      </p>

      <Heading id="net">进程与网络</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>变量</th>
              <th style={{ width: "16%" }}>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {NET.map(([k, d, desc]) => (
              <tr key={k}>
                <td className="m">{k}</td>
                <td className="m">{d}</td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Notice label="所有超时项的单位都是秒" tone="blue">
        不是毫秒。这是最容易配错的一处——
        写成 <code>60000</code> 会得到一个 16 小时的超时。
      </Notice>

      <Heading id="data">数据与存储</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>变量</th>
              <th style={{ width: "16%" }}>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map(([k, d, desc]) => (
              <tr key={k}>
                <td className="m">{k}</td>
                <td className="m">{d}</td>
                <td>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        <code>DATABASE_DSN</code> 的写法与三种驱动的取舍见{" "}
        <Link href="/docs/database">数据库与备份</Link>。
      </p>

      <Heading id="secret">密钥</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>变量</th>
              <th style={{ width: "16%" }}>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">AUTH_KEY</td>
              <td className="m">（自动生成）</td>
              <td>管理台登录密钥。留空则生成到 <code>DATA_DIR/auth.key</code></td>
            </tr>
            <tr>
              <td className="m">ENCRYPTION_KEY</td>
              <td className="m">（自动生成）</td>
              <td>
                加密渠道凭据。留空则生成到 <code>DATA_DIR/encryption.key</code>。
                <strong>不支持轮换，必须与数据库一起备份</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        两把密钥的完整说明见 <Link href="/docs/security">安全与上生产</Link>。
      </p>

      <Heading id="log">日志</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>变量</th>
              <th style={{ width: "16%" }}>默认值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">LOG_LEVEL</td>
              <td className="m">info</td>
              <td>日志级别</td>
            </tr>
            <tr>
              <td className="m">LOG_FORMAT</td>
              <td className="m">text</td>
              <td>只接受 <code>text</code> 或 <code>json</code>，接日志系统时用后者</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        这里说的是<strong>进程日志</strong>（程序运行状况），
        不是请求日志。请求日志的留存天数在管理台配置。
      </p>

      <Heading id="docker">容器里的覆写</Heading>
      <Notice label="容器内这两项改了也没用" tone="amber">
        Compose 部署时，容器内的 <code>HOST</code> 被固定为 <code>0.0.0.0</code>、
        <code>DATA_DIR</code> 被固定为 <code>/app/data</code>。
        在 <code>.env</code> 里改这两个<b>不会生效</b>。
      </Notice>
      <p>
        真正决定外部能否访问的是<strong>端口发布配置</strong>——
        默认只发布到宿主机的 <code>127.0.0.1</code>：
      </p>
      <CodeBlock caption="docker-compose.yml">
        ports:{"\n"}
        {"  "}- <span className="s">&quot;${"${HOST:-127.0.0.1}"}:${"${PORT:-3001}"}:${"${PORT:-3001}"}&quot;</span>
      </CodeBlock>
      <p>
        也就是说：<strong>在容器部署里，<code>HOST</code> 控制的是发布到宿主机的哪个地址</strong>，
        而不是容器内的监听地址。要对外提供服务，
        正确做法是加反向代理，见 <Link href="/docs/security">安全与上生产</Link>。
      </p>
      <p>
        订阅账号的 OAuth 回调端口还有一个独立变量{" "}
        <code>OAUTH_CALLBACK_BIND_ADDRESS</code>，见{" "}
        <Link href="/docs/groups/subscription">订阅账号</Link>。
      </p>
    </DocsPage>
  );
}
