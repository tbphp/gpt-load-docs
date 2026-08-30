import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "调度是怎么做的",
  description: "一个请求进来之后，网关如何选出分组与凭据，以及失败后的重试、冷却与拉黑机制。",
  path: "/docs/internals/scheduling",
});

const TOC = [
  { id: "flow", label: "一次请求的完整路径" },
  { id: "group", label: "先选分组" },
  { id: "cred", label: "再选凭据" },
  { id: "weight", label: "权重" },
  { id: "affinity", label: "会话亲和" },
  { id: "retry", label: "失败之后" },
  { id: "cooldown", label: "冷却与拉黑" },
  { id: "reasons", label: "选不中时的原因码" },
];

const REASONS = [
  ["access_key_disabled", "访问密钥被停用", "去访问密钥页启用它"],
  ["access_key_expired", "访问密钥已过期", "新建一把或延长有效期"],
  ["protocol_filtered", "这把密钥没勾选该协议", "在密钥里补勾对应协议"],
  ["model_filtered", "请求的模型不在允许范围", "检查密钥的模型限制"],
  ["no_route_target", "找不到可路由的目标", "确认密钥授权了至少一个分组"],
  ["group_disabled", "分组被停用", "启用该分组"],
  ["group_filtered", "分组不在这把密钥的授权范围", "在密钥里补上该分组"],
  ["no_available_group", "没有分组能提供这个模型", "确认模型已在某个分组里开放"],
  ["no_credentials", "分组里一个凭据都没有", "往分组里添加凭据"],
  ["group_weight_zero", "分组权重为 0", "权重设为 0 等于不参与调度，调回正数"],
  ["credential_disabled", "凭据被停用", "启用它，或依赖其他凭据"],
  ["credential_auth_unavailable", "订阅账号授权失效", "重新授权，见订阅账号页"],
  ["credential_blacklisted", "凭据已被拉黑", "确认凭据本身有效后恢复它"],
  ["credential_cooldown", "凭据正在冷却", "等待自动恢复，或加更多凭据分担"],
  ["no_available_credential", "所有凭据都不可用", "看健康页，多半是集体限流或密钥失效"],
];

export default function Scheduling() {
  return (
    <DocsPage
      path="/docs/internals/scheduling"
      title="调度是怎么做的"
      lede="这一页讲内部机制。不了解也能正常使用，但排查「为什么走了这个凭据」时会很有用。"
      toc={TOC}
    >
      <Heading id="flow">一次请求的完整路径</Heading>
      <p>请求进来之后，网关依次做这几件事：</p>
      <ol>
        <li>
          <strong>认证</strong>——校验访问密钥是否有效、是否被停用
        </li>
        <li>
          <strong>协议检查</strong>——这把密钥允许用当前协议吗
        </li>
        <li>
          <strong>选分组</strong>——在密钥授权的分组里，找出能提供该模型的
        </li>
        <li>
          <strong>选凭据</strong>——在分组的凭据池里，挑一个可用的
        </li>
        <li>
          <strong>转发</strong>——必要时做协议转换，发往上游
        </li>
        <li>
          <strong>失败则重试</strong>——换一个凭据再来，直到成功或用完次数
        </li>
      </ol>
      <p>
        任何一步选不出目标，请求就会失败并给出<strong>原因码</strong>——
        这些码在路由检查和请求日志里都能看到，见本页最后一节。
      </p>

      <Heading id="group">先选分组</Heading>
      <p>候选分组要同时满足：</p>
      <ul>
        <li>在这把访问密钥的授权范围内</li>
        <li>处于启用状态</li>
        <li>已开放请求里的那个模型</li>
        <li>权重不为 0</li>
      </ul>
      <p>
        满足条件的分组不止一个时，按权重挑。
        这就是<strong>同一个模型配多个来源</strong>能自动容灾的原理：
        一个分组的凭据全挂了，另一个还能接住。
      </p>

      <Heading id="cred">再选凭据</Heading>
      <p>选定分组后，在它的凭据池里筛：</p>
      <ul>
        <li>状态为可用（不是停用、冷却中、已拉黑）</li>
        <li>订阅账号还需授权状态正常</li>
        <li>权重不为 0</li>
      </ul>
      <p>
        剩下的候选里按权重随机选一个。<strong>不是简单轮询</strong>——
        轮询在有凭据反复失败时会一直撞上它，加权随机配合冷却机制更稳。
      </p>

      <Heading id="weight">权重</Heading>
      <p>权重决定分到多少流量，分组和凭据两级都有：</p>
      <ul>
        <li>
          <strong>不设</strong>——参与均衡分配
        </li>
        <li>
          <strong>设为正数</strong>——数值越大分到越多
        </li>
        <li>
          <strong>设为 0</strong>——<strong>完全不参与调度</strong>，
          等于临时下线但保留配置
        </li>
      </ul>
      <Notice label="权重 0 是个实用技巧" tone="blue">
        想让某个凭据暂时不承载流量、又不想删掉它，把权重设成 0 即可。
        比停用更轻——配置、统计都还在，随时调回来。
      </Notice>

      <Heading id="affinity">会话亲和</Heading>
      <p>
        开启后，网关会记住<strong>某个会话上次用的是哪个凭据</strong>，
        后续请求优先落回同一个。
      </p>
      <p>
        这对<strong>有状态接口是必需的</strong>——
        比如 OpenAI Responses 靠 <code>previous_response_id</code> 接续上下文，
        换个凭据上游就找不到之前的会话了。
      </p>
      <p>
        亲和记录有 TTL 和容量上限（默认记一万条），超出后按老旧程度淘汰。
        <strong>亲和不是绝对的</strong>：如果记住的那个凭据已经冷却或拉黑，
        网关仍会换一个可用的，保证请求能发出去。
      </p>
      <p>参数配置见 <Link href="/docs/settings">运行时设置</Link>。</p>

      <Heading id="retry">失败之后</Heading>
      <p>
        请求失败时，网关<strong>换一个凭据重试</strong>，直到成功或达到重试次数上限。
      </p>
      <p>关键在于「什么算失败」：</p>
      <ul>
        <li>
          <strong>会重试</strong>——上游限流、服务端错误、网络超时这类
          <strong>换个凭据可能就好</strong>的问题
        </li>
        <li>
          <strong>不重试</strong>——请求本身有问题（参数错误、模型不存在），
          换凭据也一样失败，重试只是浪费时间
        </li>
      </ul>

      <Notice label="流式响应的特殊处理" tone="blue">
        流式请求一旦开始输出，就<b>不能再重试了</b>——
        客户端已经收到前半段内容，换凭据重发会导致内容错乱。
        所以网关只在<b>第一个数据块到达之前</b>做安全切换，
        之后出错只能如实返回给客户端。
      </Notice>

      <Heading id="cooldown">冷却与拉黑</Heading>
      <p>两级保护机制，避免坏凭据反复拖慢请求：</p>
      <ul>
        <li>
          <strong>冷却</strong>——凭据出错后<strong>暂时跳过</strong>，
          到点自动恢复。上游限流时最常见，属于正常现象
        </li>
        <li>
          <strong>拉黑</strong>——<strong>连续</strong>失败次数超过阈值后自动摘除，
          不再自动恢复，需要人工确认
        </li>
      </ul>
      <p>
        区别在于：冷却是<strong>临时避让</strong>，假设问题会自己好；
        拉黑是<strong>判定这个凭据坏了</strong>，比如密钥被吊销、账号欠费。
      </p>
      <p>
        <strong>成功一次就会重置连续失败计数</strong>——
        偶发抖动不会累积到拉黑。
      </p>
      <p>
        阈值配置见 <Link href="/docs/settings">运行时设置</Link>，
        当前状态在 <Link href="/docs/monitor">监控与排障</Link> 的健康页看。
      </p>

      <Heading id="reasons">选不中时的原因码</Heading>
      <p>
        路由检查和请求日志会给出具体原因码。对照表：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>原因码</th>
              <th style={{ width: "32%" }}>含义</th>
              <th>怎么处理</th>
            </tr>
          </thead>
          <tbody>
            {REASONS.map(([code, mean, fix]) => (
              <tr key={code}>
                <td className="m">{code}</td>
                <td>{mean}</td>
                <td>{fix}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        看到原因码后，用 <Link href="/docs/monitor">路由检查</Link>{" "}
        改条件再试一次，能快速确认修改是否生效——
        不需要真的发一个请求。
      </p>
    </DocsPage>
  );
}
