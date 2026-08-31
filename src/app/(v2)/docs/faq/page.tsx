import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/faq");
}

const TOC = [
  { id: "start", label: "装不起来" },
  { id: "connect", label: "连不上" },
  { id: "model", label: "模型相关" },
  { id: "fail", label: "请求失败" },
  { id: "sub", label: "订阅账号" },
  { id: "cost", label: "用量与成本" },
  { id: "ops", label: "运维" },
];

export default function Faq() {
  return (
    <DocsPage
      path="/docs/faq"
      title="常见问题"
      lede="按现象归类。找不到答案时，先用监控页的路由检查——多数问题它能直接给出原因。"
      toc={TOC}
    >
      <Heading id="start">装不起来</Heading>

      <h3>端口被占用</h3>
      <p>
        默认端口 3001。改 <code>.env</code> 里的 <code>PORT</code> 即可。
        注意订阅账号还会用到 1455、54545、51121 三个回调端口，
        它们<strong>由上游固定、不能改</strong>——所以
        <strong>一台机器上只能跑一个使用订阅账号的实例</strong>。
      </p>

      <h3>改了 HOST 但容器里不生效</h3>
      <p>
        容器内的 <code>HOST</code> 和 <code>DATA_DIR</code> 是被固定的。
        在 Compose 部署里，<code>HOST</code> 实际控制的是
        <strong>发布到宿主机的哪个地址</strong>。详见{" "}
        <Link href="/docs/reference/env">环境变量</Link>。
      </p>

      <h3>启动报权限错误</h3>
      <p>
        受管数据目录会被收紧到仅属主可访问。
        如果目录归属或链接类型无法确认，程序会<strong>拒绝启动</strong>而不是降级——
        这是有意的，避免把凭据写到权限不明的位置。检查 <code>DATA_DIR</code> 的属主。
      </p>

      <Heading id="connect">连不上</Heading>

      <h3>客户端报连接失败</h3>
      <p>先用 curl 排除客户端配置问题：</p>
      <CodeBlock caption="最小验证">
        curl --fail http://127.0.0.1:3001/health
      </CodeBlock>
      <p>
        这个通了说明服务正常，问题在客户端配置——
        最常见的是地址末尾 <code>/v1</code> 多了或少了，见{" "}
        <Link href="/docs/clients">客户端接入</Link>。
      </p>

      <h3>提示未授权 / 401</h3>
      <p>
        确认用的是<strong>访问密钥</strong>而不是 <code>AUTH_KEY</code>，
        也不是上游服务商的密钥。三者用途完全不同。
      </p>

      <h3>远程访问不了</h3>
      <p>
        服务<strong>默认只监听 127.0.0.1</strong>，这是有意的安全默认值。
        正确做法是 SSH 端口转发或反向代理，
        <strong>不要直接改成 0.0.0.0 暴露公网</strong>——
        管理台泄漏等于所有上游凭据泄漏。见{" "}
        <Link href="/docs/security">安全与上生产</Link>。
      </p>

      <Heading id="model">模型相关</Heading>

      <h3>提示模型不存在</h3>
      <p>用路由检查最快，它会直接告诉你是哪一环的问题：</p>
      <ul>
        <li>
          <code>no_available_group</code>——没有分组开放这个模型，
          去分组的模型标签页添加
        </li>
        <li>
          <code>model_filtered</code>——访问密钥限制了模型范围
        </li>
        <li>
          <code>group_filtered</code>——密钥没有授权到那个分组
        </li>
      </ul>
      <p>
        原因码全表见 <Link href="/docs/internals/scheduling">调度是怎么做的</Link>。
      </p>

      <h3>想让客户端用别的模型名</h3>
      <p>
        用<strong>模型别名</strong>：客户端请求 A，网关转发时换成上游的 B。
        换供应商时应用不用改代码，见 <Link href="/docs/models">模型管理</Link>。
      </p>

      <Heading id="fail">请求失败</Heading>

      <h3>偶尔失败，重试就好</h3>
      <p>
        多半是上游限流。网关会自动让该凭据冷却并换用其他凭据——
        <strong>加更多凭据是最直接的缓解</strong>。
        频繁发生的话看健康页，确认是不是可用凭据太少。
      </p>

      <h3>凭据被拉黑了</h3>
      <p>
        连续失败超过阈值会自动拉黑。<strong>先确认凭据本身是否还有效</strong>
        （余额、是否被吊销），确认没问题再恢复它。
        阈值可调，见 <Link href="/docs/settings">运行时设置</Link>。
      </p>

      <h3>推理模型总是超时</h3>
      <p>
        这类模型在开始输出前可能思考很久，
        需要调大<strong>首字节超时</strong>——注意不是请求超时。
        三种超时分别管什么，见 <Link href="/docs/settings">运行时设置</Link>。
      </p>

      <h3>流式输出中途断开</h3>
      <p>
        调大<strong>流空闲超时</strong>。如果前面挂了反向代理，
        还要确认代理没有缓冲流式响应——Nginx 需要{" "}
        <code>proxy_buffering off</code>。
      </p>

      <Heading id="sub">订阅账号</Heading>

      <h3>远程部署完不成 OAuth 授权</h3>
      <p>
        因为浏览器里的 <code>localhost</code> 指向你自己的电脑，不是服务器。
        两种解法：<strong>把跳转失败后地址栏里的完整回调 URL 粘回管理台</strong>，
        或者用 SSH 端口转发。详见{" "}
        <Link href="/docs/groups/subscription">订阅账号</Link>。
      </p>

      <h3>账号显示需要重新授权</h3>
      <p>
        自动刷新失败了，通常是上游撤销了授权或改了密码。
        重新走一次授权流程即可。四种授权状态的含义见订阅账号页。
      </p>

      <h3>额度还有很多，为什么切换了账号</h3>
      <p>
        <strong>额度信息只作展示，不参与调度决策。</strong>
        真正触发切换的是上游返回的限流响应——
        被限流就立即冷却换人，不管显示的额度是多少。
      </p>

      <Heading id="cost">用量与成本</Heading>

      <h3>成本和服务商账单对不上</h3>
      <p>
        <strong>这是预期的。</strong>成本是根据上游返回的 token 用量
        乘以模型价格估算出来的，用于运营分析，
        <strong>不等于账单</strong>。已知偏差来源：
        上游没返回用量的请求不计入、没有价格数据的模型不计价、
        价格变更不回算历史。
      </p>

      <h3>成本估算明显偏低</h3>
      <p>
        看监控页的数据完整度那一块。
        <strong>「成本未定价」数字大</strong>说明有模型缺价格，补上即可；
        <strong>「用量缺失」数字大</strong>说明上游没返回用量，
        试试开启用量选项注入，见{" "}
        <Link href="/docs/advanced/proxy-and-headers">代理与请求头</Link>。
      </p>

      <Heading id="ops">运维</Heading>

      <h3>能不能多实例部署</h3>
      <Notice label="不能" tone="amber">
        2.0 是<b>单实例设计</b>，实例之间不共享状态。
        在多个实例前面挂负载均衡会导致调度、冷却、限流各算各的。
        需要更大规模时，<b>按业务维度拆成多个独立部署</b>。
      </Notice>

      <h3>能从 1.x 升级上来吗</h3>
      <p>
        <strong>不能原地升级，也没有数据导入工具。</strong>
        2.0 是完全重写的版本。正确做法是并行部署、验证后切流量，见{" "}
        <Link href="/docs/migrate-from-1x">从 1.x 迁移</Link>。
      </p>

      <h3>备份要备哪些</h3>
      <p>
        <strong>数据库和 <code>encryption.key</code> 必须一起备。</strong>
        只备数据库的话，恢复出来的凭据是解不开的密文，
        而且本版本不支持更换主密钥。见{" "}
        <Link href="/docs/database">数据库与备份</Link>。
      </p>

      <h3>日志占用磁盘太多</h3>
      <p>
        调小请求日志的保留天数（默认 7 天）。
        请求量大时这个值对磁盘影响明显，尤其是用 SQLite 的部署。
      </p>

      <Notice label="没找到答案" tone="blue">
        先用 <Link href="/docs/monitor">监控与排障</Link> 里的
        <b>路由检查</b>和<b>请求日志</b>定位——多数问题能直接看出原因。
        仍无法解决的话，欢迎到{" "}
        <a href="https://github.com/tbphp/gpt-load/issues" target="_blank" rel="noopener noreferrer">
          GitHub Issues
        </a>{" "}
        提问，附上请求日志里的错误信息会快很多。
        <b>安全问题请按 SECURITY.md 的流程私下反馈。</b>
      </Notice>
    </DocsPage>
  );
}
