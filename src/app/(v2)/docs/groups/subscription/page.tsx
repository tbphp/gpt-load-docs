import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/groups/subscription");
}

const TOC = [
  { id: "what", label: "和 API 密钥的区别" },
  { id: "add", label: "接入一个账号" },
  { id: "ports", label: "回调端口" },
  { id: "remote", label: "远程部署怎么授权" },
  { id: "state", label: "四种授权状态" },
  { id: "quota", label: "额度信息怎么读" },
  { id: "rule", label: "使用前提" },
];

export default async function Subscription() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/groups/subscription"
      title="订阅账号"
      lede="Codex、Claude、Antigravity、Grok 这类按订阅计费的账号，可完成 OAuth 授权，也可导入已有 OAuth JSON。接进来之后，它们和 API 密钥共用同一套调度。"
      toc={TOC}
    >
      <Heading id="what">和 API 密钥的区别</Heading>
      <p>
        对网关来说，订阅账号和 API 密钥都只是「一池凭据」——
        <strong>轮转、重试、冷却、健康隔离完全共用一套机制</strong>，
        你不需要为订阅账号单独维护一套运维逻辑。
      </p>
      <p>差别只在三处：</p>
      <ul>
        <li>
          <strong>接入方式</strong>——完成一次 OAuth 授权，或导入已有 OAuth JSON
        </li>
        <li>
          <strong>凭据会过期</strong>——网关自动刷新；刷新失败时该账号会进入需要重新授权的状态
        </li>
        <li>
          <strong>有额度窗口</strong>——订阅按周期计量，管理台会展示剩余额度与重置时间
        </li>
      </ul>

      <Heading id="add">接入一个账号</Heading>
      <p>
        订阅账号也是<strong>建在分组里</strong>的。进入
        <strong>分组 → 导入渠道凭据 → 新建分组</strong>，把接入方式选成订阅账号，
        再选具体渠道（Codex / Claude / Antigravity / Grok），然后完成授权。
      </p>

      <Figure
        src={docScreenshot(locale, "sub-01-connect.png")}
        alt="Codex 订阅分组的连接账号面板，显示 OAuth 授权链接和回调地址输入框"
        width={2880}
        height={1440}
        caption="FIG. 1 — 连接账号"
        note="授权入口"
      >
        授权入口常驻展开，不折叠——远程部署时需要手动复制链接与回调地址，是高频路径而非兜底方案。
      </Figure>

      <p>
        接入方式分三类，取决于渠道和你是否已有授权凭据：
      </p>
      <ul>
        <li>
          <strong>本地回调</strong>（Codex、Claude、Antigravity）——浏览器完成授权后，
          上游会跳回本机的一个固定端口，网关在那里接住授权码
        </li>
        <li>
          <strong>设备码</strong>（Grok）——页面给出一个验证码，你在上游网站输入它完成授权，
          <strong>不需要任何回调端口</strong>
        </li>
        <li>
          <strong>OAuth JSON 导入</strong>（全部四个订阅渠道）——上传或粘贴已有的 OAuth JSON，
          不需要在这台机器上完成本地回调
        </li>
      </ul>

      <Heading id="ports">回调端口</Heading>
      <p>
        走本地回调的三个渠道，端口是<strong>上游客户端写死的</strong>，不能自定义：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>渠道</th>
              <th style={{ width: "24%" }}>回调端口</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Codex</td>
              <td className="m">1455</td>
              <td>回调地址 http://localhost:1455/auth/callback</td>
            </tr>
            <tr>
              <td>Claude</td>
              <td className="m">54545</td>
              <td>由上游客户端固定</td>
            </tr>
            <tr>
              <td>Antigravity</td>
              <td className="m">51121</td>
              <td>由上游客户端固定</td>
            </tr>
            <tr>
              <td>Grok</td>
              <td className="m">不需要</td>
              <td>设备码授权，不占用本机端口</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Docker Compose 默认会把这三个端口发布出来，和主服务一样<strong>只绑定到 127.0.0.1</strong>：
      </p>
      <CodeBlock caption="docker-compose.yml 中的端口发布">
        ports:{"\n"}
        {"  "}- <span className="s">&quot;${"${BIND_ADDRESS:-${HOST:-127.0.0.1}}"}:${"${PORT:-3001}"}:${"${PORT:-3001}"}&quot;</span>{"\n"}
        {"  "}- <span className="s">&quot;${"${OAUTH_CALLBACK_BIND_ADDRESS:-...}"}:1455:1455&quot;</span>{"   "}
        <span className="c"># Codex</span>{"\n"}
        {"  "}- <span className="s">&quot;${"${OAUTH_CALLBACK_BIND_ADDRESS:-...}"}:54545:54545&quot;</span>{" "}
        <span className="c"># Claude</span>{"\n"}
        {"  "}- <span className="s">&quot;${"${OAUTH_CALLBACK_BIND_ADDRESS:-...}"}:51121:51121&quot;</span>{" "}
        <span className="c"># Antigravity</span>
      </CodeBlock>

      <Notice label="回调端口只限制本地授权" tone="amber">
        因为端口由上游固定、无法更改，一台主机上同一时刻只能有一个默认 Compose 实例使用本地回调授权。其他实例可导入已有 OAuth JSON；Grok 也可使用设备码。
      </Notice>

      <Heading id="remote">远程部署怎么授权</Heading>
      <p>
        这是最容易卡住的一步。服务跑在远程服务器上时，
        <strong>你浏览器里的 <code>localhost</code> 指向的是你自己的电脑，不是服务器</strong>，
        授权完成后跳转会失败。
      </p>
      <p>解决办法有三种，任选其一：</p>
      <ol>
        <li>
          <strong>手动粘贴回调地址</strong>——授权页面跳转失败后，
          把浏览器地址栏里那串完整的回调 URL 复制出来，粘贴回管理台的回调输入框。
          网关会从中取出授权码完成流程。<strong>这是最通用的做法</strong>，
          不需要改任何网络配置。
        </li>
        <li>
          <strong>SSH 端口转发</strong>——把服务器的回调端口映射到本机，
          让 <code>localhost</code> 真的能通到服务器：
        </li>
      </ol>
      <CodeBlock caption="SSH 端口转发（以 Codex 为例）">
        ssh -L 1455:127.0.0.1:1455 user@your-server{"\n"}
        {"\n"}
        <span className="c"># Claude 用 54545，Antigravity 用 51121</span>{"\n"}
        <span className="c"># 转发保持连接期间完成授权即可</span>
      </CodeBlock>

      <p>已有 OAuth JSON 时，直接上传或粘贴导入即可，不需要回调端口。</p>

      <Notice label="不要为了授权开放公网" tone="amber">
        回调端口不应该暴露到公网。可以手动粘贴回调、使用 SSH 转发，或导入已有 OAuth JSON；无需把 OAUTH_CALLBACK_BIND_ADDRESS 改为 0.0.0.0。
      </Notice>

      <Heading id="state">四种授权状态</Heading>
      <p>
        每个订阅账号都有一个授权状态，排障时先看它：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "24%" }}>状态</th>
              <th style={{ width: "34%" }}>含义</th>
              <th>该怎么做</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>就绪</td>
              <td>凭据有效，正常参与调度</td>
              <td>无需处理</td>
            </tr>
            <tr>
              <td>刷新中</td>
              <td>凭据即将过期，网关正在自动续期</td>
              <td>等待即可，通常几秒完成</td>
            </tr>
            <tr>
              <td>需重新授权</td>
              <td>自动刷新失败，多为上游撤销了授权或密码变更</td>
              <td><strong>重新走一次授权流程</strong></td>
            </tr>
            <tr>
              <td>结果未知</td>
              <td>刷新请求没拿到明确结果，可能是网络问题</td>
              <td>先观察，持续未恢复再重新授权</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Figure
        src={docScreenshot(locale, "sub-02-accounts.png")}
        alt="订阅账号凭据列表，展示账号状态、额度窗口和重置时间"
        width={2880}
        height={1440}
        caption="FIG. 2 — 账号列表"
        note="状态 · 额度 · 重置时间"
      >
        额度窗口、重置时间、授权状态在同一屏内可见。
      </Figure>

      <Heading id="quota">额度信息怎么读</Heading>
      <p>
        管理台会展示订阅账号的剩余额度和重置时间。但要理解一点：
      </p>
      <Notice label="额度只作展示" tone="blue">
        <b>额度信息不参与调度决策。</b>它是从上游响应里被动观察到的，
        存在延迟，也不一定覆盖所有计费维度。
        <b>真正触发账号切换的是上游返回的限流响应</b>——
        当某个账号被限流，网关会立即让它冷却并换用其他账号，
        不管此时显示的额度是多少。
      </Notice>
      <p>
        所以额度那栏的用途是<strong>让你判断要不要再加账号</strong>，
        而不是用来预测网关下一次会选谁。想确认是否有候选分组和可用凭据，用{" "}
        <Link href="/docs/monitor">监控与排障</Link> 里的路由检查。
      </p>
      <Notice label="Codex 的重置额度" tone="blue">
        仅 Codex 账号可能显示可用的重置额度。它需要在管理台手动消费，不参与自动调度；操作后等待额度信息刷新确认结果。
      </Notice>

      <Heading id="rule">使用前提</Heading>
      <ul>
        <li>
          <strong>只接你有权使用的账号</strong>，并遵守各服务商的订阅条款。
          共享或转售订阅额度通常是违规的。
        </li>
        <li>
          订阅渠道依赖上游的 OAuth 与兼容协议，
          <strong>上游改动时可能需要跟随更新</strong>，这类变化不在网关的控制范围内。
        </li>
        <li>
          凭据在本地加密存储，但<strong>能解密它的密钥和数据库必须一起备份</strong>，
          见 <Link href="/docs/security">安全与上生产</Link>。
        </li>
      </ul>
    </DocsPage>
  );
}
