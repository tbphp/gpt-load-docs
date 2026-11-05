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
  { id: "muse", label: "Muse Code" },
  { id: "devin", label: "Devin" },
  { id: "ports", label: "回调端口" },
  { id: "remote", label: "远程部署怎么授权" },
  { id: "state", label: "四种授权状态" },
  { id: "quota", label: "额度信息怎么读" },
  { id: "subscription-info", label: "Codex 订阅信息" },
  { id: "rule", label: "使用前提" },
];

export default async function Subscription() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/groups/subscription"
      title="订阅账号"
      lede="Codex、Claude、Antigravity、Grok、Muse Code、Devin 这类订阅账号，可完成渠道对应的授权，也可导入已有凭据 JSON。接进来之后，它们和 API 密钥共用同一套调度。"
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
          <strong>接入方式</strong>——完成渠道对应的授权，或导入已有凭据 JSON
        </li>
        <li>
          <strong>凭据需维护</strong>——网关按渠道刷新凭据或核实账号状态；遇到授权异常时，可手动刷新或重新连接
        </li>
        <li>
          <strong>额度能力因渠道而异</strong>——上游提供额度查询时，管理台展示剩余额度与重置时间；未提供不代表额度为零
        </li>
      </ul>

      <Heading id="add">接入一个账号</Heading>
      <p>
        订阅账号也是建在分组里的。进入「分组 → 新建分组」，选择 Codex、Claude、Antigravity、Grok、Muse Code 或 Devin，然后连接账号或导入凭据。
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
          <strong>本地回调</strong>（Codex、Claude、Antigravity、Devin）——浏览器完成授权后，
          上游会跳回本机的一个固定端口，网关在那里接住授权码
        </li>
        <li>
          <strong>设备码</strong>（Grok、Muse Code）——页面给出一个验证码，你在上游网站输入它完成授权，
          <strong>不需要任何回调端口</strong>
        </li>
        <li>
          <strong>凭据 JSON 导入</strong>（全部六个订阅渠道）——上传或粘贴对应渠道的凭据 JSON，
          不需要在这台机器上完成本地回调
        </li>
      </ul>

      <p>导入支持 CPA 兼容凭据（包括 Meta/Muse 与 Devin）、官方 Codex、官方 Claude Code 及 sub2api OAuth JSON，可上传多文件或账号数组；不支持 PAT，各渠道所需的授权字段必须完整。</p>
      <p>订阅分组可设置自定义 HTTPS 上游根地址或路径前缀，代理需承接对应渠道的调用、模型发现与额度查询，不会隐式回退官方业务地址。OAuth 授权与 Token 刷新仍使用官方端点。</p>

      <Heading id="muse">Muse Code</Heading>
      <p>Muse Code 使用设备码授权，不需要回调端口；导入 CPA Meta/Muse 凭据时必须带有 DCA 令牌。授权或导入时会向官方端点兑换请求密钥并确认订阅有效，仅有 API Key 的文件不能代替该流程。</p>
      <p>模型发现读取账号实际返回的模型列表。当前不提供主动额度查询；额度未显示不代表已经耗尽。Contributor Mode 固定关闭。</p>

      <Heading id="devin">Devin</Heading>
      <p>Devin 使用浏览器授权，固定回调地址为 http://127.0.0.1:17326/callback；也可导入带 session_token 或 api_key 字段的 CPA Devin 凭据。授权和导入都会核实上游账号身份。</p>
      <p>手动粘贴 Devin 回调 URL 时，必须保留 127.0.0.1、17326 和 /callback，主机不能改成 localhost；主机、端口或路径不匹配都会被拒绝。</p>
      <p>Devin 使用长期会话令牌。「刷新凭据」只核实身份与账号状态，不轮换令牌，也不推算令牌到期时间。额度同步可展示每日、每周剩余比例及重置时间；上游缺少的字段保持未知，不按零处理。</p>
      <p>Devin 的模型发现先核实账号，再返回随版本发布的模型目录；列出某个模型不代表当前账号一定可用。四种对话协议均通过转换接入，具体边界见支持矩阵。</p>

      <Heading id="ports">回调端口</Heading>
      <p>
        走本地回调的四个渠道，端口是<strong>上游客户端写死的</strong>，不能自定义：
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
              <td>Devin</td>
              <td className="m">17326</td>
              <td>回调地址 http://127.0.0.1:17326/callback</td>
            </tr>
            <tr>
              <td>Grok · Muse Code</td>
              <td className="m">不需要</td>
              <td>设备码授权，不占用本机端口</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Docker Compose 默认发布 Codex、Claude、Antigravity 的三个回调端口，和主服务一样<strong>只绑定到 127.0.0.1</strong>：
      </p>
      <CodeBlock caption="docker-compose.yml 中的端口发布">
        ports:{"\n"}
        {"  "}- <span className="s">&quot;{"${BIND_ADDRESS:-${HOST:-127.0.0.1}}:${PORT:-3001}:${PORT:-3001}"}&quot;</span>{"\n"}
        {"  "}- <span className="s">&quot;{"${OAUTH_CALLBACK_BIND_ADDRESS:-${HOST:-127.0.0.1}}:1455:1455"}&quot;</span>{"   "}
        <span className="c"># Codex</span>{"\n"}
        {"  "}- <span className="s">&quot;{"${OAUTH_CALLBACK_BIND_ADDRESS:-${HOST:-127.0.0.1}}:54545:54545"}&quot;</span>{" "}
        <span className="c"># Claude</span>{"\n"}
        {"  "}- <span className="s">&quot;{"${OAUTH_CALLBACK_BIND_ADDRESS:-${HOST:-127.0.0.1}}:51121:51121"}&quot;</span>{" "}
        <span className="c"># Antigravity</span>
      </CodeBlock>
      <p>默认 Compose 未发布 Devin 的 17326 端口。可直接手动粘贴完整回调地址或导入凭据；需要自动接收本地回调时，在 ports 中增加 &quot;127.0.0.1:17326:17326&quot;，远程部署再配合 SSH 转发。</p>

      <Notice label="回调端口只限制本地授权" tone="amber">
        同一个固定回调端口同一时刻只能由一个实例占用。其他实例可导入已有凭据 JSON；Grok 与 Muse Code 也可使用设备码。
      </Notice>

      <Heading id="remote">远程部署怎么授权</Heading>
      <p>
        这是最容易卡住的一步。服务跑在远程服务器上时，
        <strong>你浏览器里的 <code>localhost / 127.0.0.1</code> 指向的是你自己的电脑，不是服务器</strong>，
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
        <span className="c"># Claude 用 54545，Antigravity 用 51121，Devin 用 17326</span>{"\n"}
        <span className="c"># 转发保持连接期间完成授权即可</span>
      </CodeBlock>

      <p>已有对应渠道的凭据 JSON 时，直接上传或粘贴导入即可，不需要回调端口。</p>

      <Notice label="不要为了授权开放公网" tone="amber">
        回调端口不应该暴露到公网。可以手动粘贴回调、使用 SSH 转发，或导入已有凭据 JSON；无需把 OAUTH_CALLBACK_BIND_ADDRESS 改为 0.0.0.0。
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
              <td>网关正在刷新凭据</td>
              <td>等待即可，通常几秒完成</td>
            </tr>
            <tr>
              <td>需重新授权</td>
              <td>上游拒绝刷新，或现有授权已失效</td>
              <td>尝试刷新凭据；仍失败时重新连接或导入</td>
            </tr>
            <tr>
              <td>结果未知</td>
              <td>刷新请求没拿到明确结果，可能是网络问题</td>
              <td>尝试刷新凭据；仍失败时重新连接或导入</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        「刷新凭据」在账号卡片的更多菜单中，用于恢复授权；「刷新额度」更新额度信息，满足恢复条件时也会解除额度冷却。
        手动停用的账号需先启用，才能刷新凭据。
      </p>

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
        首次导入后同步额度，获取当前额度和重置时间；
        升级后额度未更新或显示异常，也可主动刷新一次。
      </p>
      <Notice label="额度与冷却恢复" tone="blue">
        额度数值不决定轮转顺序；上游限流响应仍会触发冷却与切换。额度通过主动同步和上游响应更新，可能存在延迟。
      </Notice>
      <p>当新额度观测中唯一匹配的窗口已用比例下降至少 5 个百分点时，会解除该账号及其模型的额度冷却；主动同步与被动更新均适用。不会解除其他原因或自定义规则的冷却，也不会恢复授权、启用账号、解除拉黑或清空失败计数。</p>
      <p>
        所以额度那栏的用途是<strong>让你判断要不要再加账号</strong>，
        而不是用来预测网关下一次会选谁。想确认是否有候选分组和可用凭据，用{" "}
        <Link href="/docs/monitor">监控与排障</Link> 里的路由检查。
      </p>
      <Notice label="Codex 点数余额" tone="blue">
        进入 Codex 分组，点击 Modern 的「同步额度」或 Classic 的「同步」。上游返回正余额或不限量状态时，账号卡片显示「点数」；未显示不代表余额为零。
      </Notice>
      <p>点数与周期额度、重置额度分别展示，不累加，也不参与调度。</p>
      <Notice label="Codex 与 Claude 的重置额度" tone="blue">
        Codex 和 Claude 账号可能提供重置额度，卡片展示可用次数及到期时间。需在管理台手动确认消费，不会自动使用；完成后刷新额度确认结果。若结果未知，等待并核对原操作，不要重复发起新的重置。
      </Notice>

      <Heading id="subscription-info">Codex 订阅信息</Heading>
      <p>在 Codex 分组点击「同步额度」（Classic 为「同步」），会并发获取额度、重置额度与订阅信息。Modern 账号卡片与 Classic 账号详情可显示订阅周期截止日期和续费状态；订阅截止与 OAuth 凭据到期是两项不同信息。</p>
      <p>上游未返回续费标记时显示「续费未知」。订阅查询失败时，有旧值则保留并提示，无旧值则显示暂不可用；上游返回 404 时清除旧订阅信息。</p>
      <p>最近观测时间不是独立的订阅确认时间；额度同步成功也不代表订阅信息已在本次查询中确认，应同时查看订阅信息的失败或旧值提示。</p>

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
