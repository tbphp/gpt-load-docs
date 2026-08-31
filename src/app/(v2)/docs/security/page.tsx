import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/security");
}

const TOC = [
  { id: "keys", label: "两把密钥" },
  { id: "backup", label: "备份" },
  { id: "network", label: "网络边界" },
  { id: "proxy", label: "反向代理" },
  { id: "perm", label: "文件权限" },
  { id: "leak", label: "不要泄漏的东西" },
  { id: "checklist", label: "上生产清单" },
];

export default function Security() {
  return (
    <DocsPage
      path="/docs/security"
      title="安全与上生产"
      lede="正式用起来之前，把这一页从头到尾走一遍。多数事故来自两件事：密钥没备份，或者服务被暴露到了公网。"
      toc={TOC}
    >
      <Heading id="keys">两把密钥</Heading>
      <p>GPT-Load 有两把用途完全不同的密钥，别混淆：</p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>密钥</th>
              <th style={{ width: "30%" }}>作用</th>
              <th>丢了会怎样</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="m">AUTH_KEY</td>
              <td>登录管理台</td>
              <td>换一把即可，不影响数据</td>
            </tr>
            <tr>
              <td className="m">ENCRYPTION_KEY</td>
              <td>加密存储的上游凭据</td>
              <td><strong>已加密的凭据永久无法恢复</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        两把都可以在 <code>.env</code> 里显式指定；不指定时，
        首次启动会自动生成并存放在数据目录下的{" "}
        <code>auth.key</code> 与 <code>encryption.key</code>。
      </p>

      <Notice label="不支持主密钥轮换" tone="amber">
        本版本<b>没有提供更换 ENCRYPTION_KEY 的能力</b>。
        一旦更换或丢失，已经存进去的渠道凭据就解不开了，只能全部重新录入。
        换句话说：<b>这把密钥要和数据库同等对待</b>。
      </Notice>

      <Heading id="backup">备份</Heading>
      <p>
        <strong>数据库和加密密钥必须成套备份。</strong>
        自动生成的 <code>auth.key</code> 与 <code>encryption.key</code> 在数据目录中；
        显式设置的 <code>AUTH_KEY</code> 与 <code>ENCRYPTION_KEY</code> 则要从原来的
        环境变量或密钥管理服务单独备份。
      </p>
      <Notice label="Compose 必须停机备份" tone="amber">
        SQLite 使用 WAL，不能在服务运行时直接打包数据卷。
        Compose 的实际卷名还会随项目名变化，不能硬编码成 <code>gpt-load-data</code>。
        请使用 <Link href="/docs/database#backup">数据库与备份</Link> 中的完整命令。
      </Notice>
      <p>
        <strong>备份文件本身包含可解密的凭据</strong>，
        要按敏感数据对待——加密存放，不要丢进公开的网盘或仓库。
      </p>
      <p>
        换数据库驱动、迁移服务器时的注意事项见{" "}
        <Link href="/docs/database">数据库与备份</Link>。
      </p>

      <Heading id="network">网络边界</Heading>
      <p>
        服务<strong>默认只监听 127.0.0.1</strong>，也就是只有本机能访问。
        这是有意的默认值——管理台一旦暴露到公网，
        拿到 <code>AUTH_KEY</code> 就等于拿到了你所有的上游凭据。
      </p>

      <Notice label="不要图省事直接开放" tone="amber">
        把 <code>HOST</code> 改成 <code>0.0.0.0</code> 并把端口直接映射到公网 IP，
        是最常见也最危险的做法。<b>正确方式是通过反向代理，并加上 TLS 与访问控制。</b>
      </Notice>

      <p>需要远程访问时，按风险从低到高：</p>
      <ol>
        <li>
          <strong>SSH 端口转发</strong>——最安全，不需要改任何服务配置：
        </li>
      </ol>
      <CodeBlock caption="把远程服务映射到本机">
        ssh -L 3001:127.0.0.1:3001 user@your-server{"\n"}
        <span className="c"># 然后在本机浏览器打开 http://127.0.0.1:3001</span>
      </CodeBlock>
      <ol start={2}>
        <li>
          <strong>内网 / VPN</strong>——只在受控网络内暴露
        </li>
        <li>
          <strong>反向代理 + TLS + 访问控制</strong>——确实需要公网访问时，见下一节
        </li>
      </ol>

      <Heading id="proxy">反向代理</Heading>
      <p>
        用 Nginx、Caddy 一类在前面挡一层，至少要做到三件事：
        <strong>启用 HTTPS、限制来源、不要把管理台和数据面一起裸奔</strong>。
      </p>
      <CodeBlock caption="Nginx 示例：管理面限制来源">
        server {"{"}{"\n"}
        {"    "}listen 443 ssl;{"\n"}
        {"    "}server_name gateway.example.com;{"\n"}
        {"\n"}
        {"    "}<span className="c"># 证书配置略</span>{"\n"}
        {"\n"}
        {"    "}<span className="c"># 管理面：只允许可信来源</span>{"\n"}
        {"    "}location /api/ {"{"}{"\n"}
        {"        "}allow 203.0.113.0/24;{"\n"}
        {"        "}deny all;{"\n"}
        {"        "}proxy_pass http://127.0.0.1:3001;{"\n"}
        {"    "}{"}"}{"\n"}
        {"\n"}
        {"    "}<span className="c"># 数据面：按需开放，注意流式响应要关缓冲</span>{"\n"}
        {"    "}location / {"{"}{"\n"}
        {"        "}proxy_pass http://127.0.0.1:3001;{"\n"}
        {"        "}proxy_buffering off;{"\n"}
        {"        "}proxy_read_timeout 600s;{"\n"}
        {"    "}{"}"}{"\n"}
        {"}"}
      </CodeBlock>
      <p>
        <code>proxy_buffering off</code> 和较长的读超时是必要的——
        流式响应如果被代理缓冲住，客户端会一直等不到输出。
      </p>

      <Heading id="perm">文件权限</Heading>
      <p>
        受管的数据目录会被收紧到<strong>仅属主可访问</strong>，
        程序启动时自动处理，通常不需要你干预：
      </p>
      <ul>
        <li>
          数据目录：<code>0700</code>（仅属主可读写执行）
        </li>
        <li>
          数据库文件与两把密钥：<code>0600</code>（仅属主可读写）
        </li>
        <li>
          Windows 上使用当前用户专属的 ACL
        </li>
      </ul>
      <p>
        如果无法确认目录归属或链接类型，程序会<strong>拒绝启动</strong>
        而不是降级运行——这是有意的，避免在权限不明的位置写入凭据。
      </p>

      <Heading id="leak">不要泄漏的东西</Heading>
      <ul>
        <li>
          <strong>两把密钥</strong>——不要提交到仓库、贴进 issue、发在群里
        </li>
        <li>
          <strong>备份文件</strong>——它包含可解密的凭据
        </li>
        <li>
          <strong>截图</strong>——管理台截图里常带账号邮箱和密钥后缀，
          发出去之前先打码
        </li>
        <li>
          <strong>访问密钥</strong>——虽然可以吊销，但泄漏期间的用量是真金白银
        </li>
      </ul>
      <p>
        发现安全问题请按仓库 <code>SECURITY.md</code> 里的流程私下反馈，
        <strong>不要开公开 issue</strong>。
      </p>

      <Heading id="checklist">上生产清单</Heading>
      <p>逐条确认，再让真实流量进来：</p>
      <ul>
        <li>
          <strong>密钥</strong>——<code>AUTH_KEY</code> 与 <code>ENCRYPTION_KEY</code>{" "}
          已显式设置或已确认自动生成的值被备份
        </li>
        <li>
          <strong>备份</strong>——数据库和 <code>encryption.key</code>{" "}
          一起备过，并且<strong>验证过能恢复</strong>
        </li>
        <li>
          <strong>网络</strong>——没有把服务直接绑到 <code>0.0.0.0</code> 暴露公网；
          远程访问走 SSH 转发、内网或带 TLS 的反向代理
        </li>
        <li>
          <strong>管理面</strong>——<code>/api</code> 有来源限制，没有对公网开放
        </li>
        <li>
          <strong>访问密钥</strong>——按应用分别发放，设置了合理的限流与成本上限
        </li>
        <li>
          <strong>监控</strong>——知道去哪看健康状态与请求日志，见{" "}
          <Link href="/docs/monitor">监控与排障</Link>
        </li>
        <li>
          <strong>边界认知</strong>——理解成本是估算、2.0 面向单实例部署
        </li>
      </ul>

      <Notice label="单实例设计" tone="blue">
        2.0 只保证<b>单个应用实例</b>的正确性，实例之间不共享状态。
        不要在多个实例前面挂负载均衡——调度、冷却、限流的状态都会各算各的。
        需要更大规模时，按业务维度拆成多个独立部署。
      </Notice>
    </DocsPage>
  );
}
