import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/internals/scheduling");
}

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
        路由检查会说明访问密钥、分组或凭据为什么不能成为候选。
        它的 <code>reason_code</code> 与客户端响应 <code>code</code>、
        请求日志 <code>error_code</code> 是不同的信息，见本页最后一节。
      </p>

      <Heading id="group">先选分组</Heading>
      <p>候选分组要同时满足：</p>
      <ul>
        <li>在这把访问密钥的授权范围内</li>
        <li>处于启用状态</li>
        <li>已开放请求里的那个模型</li>
        <li>有效权重大于 0</li>
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
        <li>有效权重大于 0</li>
      </ul>
      <p>
        剩下的候选里按权重随机选一个。<strong>不是简单轮询</strong>——
        轮询在有凭据反复失败时会一直撞上它，加权随机配合冷却机制更稳。
      </p>

      <Heading id="weight">权重</Heading>
      <p>权重决定相对分到多少流量，分组和凭据两级都支持自动与手动模式：</p>
      <ul>
        <li>
          <strong>分组自动</strong>——使用默认权重
        </li>
        <li>
          <strong>凭据自动</strong>——根据近期成功与失败情况动态计算
        </li>
        <li>
          <strong>手动</strong>——范围为 1–100，数值越大，相对获得的流量越多
        </li>
      </ul>
      <Notice label="暂停流量请使用停用" tone="blue">
        当前管理台和管理 API 都不接受手动权重 0。
        需要暂时停止流量时，请停用对应分组或凭据；配置和历史统计仍会保留。
      </Notice>

      <Heading id="affinity">会话亲和</Heading>
      <p>
        开启后，网关会根据访问密钥、客户端协议以及请求中的指令或首个用户输入前缀
        生成软亲和键。具有相同稳定前缀的后续请求，会优先复用之前成功的凭据。
      </p>
      <p>
        亲和机制<strong>不会读取</strong> <code>previous_response_id</code>、
        <code>conversation</code> 或其他上游资源 ID，也不保证有状态资源一定回到原凭据。
        可靠使用这类资源时，请让分组只保留一个凭据，
        或确认上游允许不同凭据共享同一资源。
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
        路由检查按访问密钥、分组和凭据返回分层 <code>reason_code</code>。
        完整原因、所属层级和处理方式统一收录在错误参考页。
      </p>
      <p>
        <Link href="/docs/reference/errors#route-reasons">查看路由检查原因码及处理方式 →</Link>
      </p>
    </DocsPage>
  );
}
