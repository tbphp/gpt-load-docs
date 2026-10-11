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
  { id: "group", label: "候选分组" },
  { id: "cred", label: "可用凭据" },
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
          <strong>筛选分组</strong>——在密钥授权的分组里，找出能提供该模型的
        </li>
        <li>
          <strong>选凭据</strong>——先按分组优先级选层，再按路由策略和权重选择可用凭据
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

      <Heading id="group">候选分组</Heading>
      <p>候选分组要同时满足：</p>
      <ul>
        <li>在这把访问密钥的授权范围内</li>
        <li>处于启用状态</li>
        <li>已开放请求里的那个模型</li>
        <li>有效权重大于 0</li>
      </ul>
      <p>分组优先级默认 0，可为负数，数值越大越优先。满足上述条件且有可用凭据时，先选最高优先级层；高层不可用时直接使用较低的可用层。</p>

      <Heading id="cred">可用凭据</Heading>
      <p>继续筛选这些分组中的凭据：</p>
      <ul>
        <li>状态为可用（不是停用、冷却中、已拉黑）</li>
        <li>订阅账号还需授权状态正常</li>
        <li>有效权重大于 0</li>
      </ul>
      <p>同一优先级内，先按路由策略筛选，再按「分组权重 × 凭据权重」加权轮询。软亲和只在该层允许的候选中复用，实际流量不保证严格按权重分配。</p>

      <Heading id="weight">权重</Heading>
      <p>分组和凭据权重默认均为 50，可设置为 1–100；在同层候选中，数值越大，相对获得的流量越多，不再根据成功率自动计算。</p>
      <Notice label="暂停流量请使用停用" tone="blue">
        当前管理台和管理 API 都不接受手动权重 0。
        需要暂时停止流量时，请停用对应分组或凭据；配置和历史统计仍会保留。
      </Notice>

      <Heading id="affinity">会话亲和</Heading>
      <p>
        开启后，网关会根据访问密钥、客户端协议以及请求中的指令或首个用户输入前缀
        生成软亲和键。在当前优先级和路由策略允许的候选中，具有相同稳定前缀的后续请求会优先复用之前成功的凭据。
      </p>
      <p>
        Chat Completions 与 Responses 也可通过有效的 prompt_cache_key 形成软亲和，但亲和命中不代表上游缓存必然命中。
        Responses 的响应 ID 续接独立于软亲和，边界见协议页。
      </p>
      <p><Link href="/docs/internals/protocols#stateful">查看 Responses 续接边界 →</Link></p>
      <p>
        亲和记录有 TTL 和容量上限（默认记一万条），超出后按老旧程度淘汰。
        <strong>亲和不是绝对的</strong>：如果记住的那个凭据已经冷却或拉黑，
        网关仍会换一个可用的，保证请求能发出去。
      </p>
      <p>参数配置见 <Link href="/docs/settings">运行时设置</Link>。</p>

      <Heading id="retry">失败之后</Heading>
      <p>安全允许换目标重试时，优先降到下一个更低的可用层，不先耗尽同层凭据；没有更低层时才继续当前层的其他凭据。降层后，本次请求不再回到更高层。跨组和跨层切换仍共用全局重试预算。</p>
      <p>以下为内置默认行为；自定义处理见 <Link href="/docs/settings#error-rules">上游错误规则</Link>：</p>
      <ul>
        <li>
          <strong>会重试</strong>——上游限流、服务端错误、网络超时这类
          <strong>换个凭据可能就好</strong>的问题
        </li>
        <li>
          <strong>不重试</strong>——明确的参数错误、上下文超限或内容政策拒绝，
          换凭据也一样失败，重试只是浪费时间
        </li>
      </ul>

      <p>明确的模型或能力拒绝可在安全边界内切换候选；已经输出或执行结果未知时，不盲目重放。响应 ID 续接不会换用其他凭据。</p>
      <Notice label="流式响应的特殊处理" tone="blue">
        流式响应一旦提交给客户端，就不能再切换候选。开启空响应重试时，网关可短暂保留尚未产出内容的前导事件，因此收到上游数据块不等于已经向客户端输出。具体适用范围与计费限制见运行时设置。
      </Notice>

      <Heading id="cooldown">冷却与拉黑</Heading>
      <p>两级保护机制，避免坏凭据反复拖慢请求：</p>
      <ul>
        <li>
          <strong>冷却</strong>——凭据出错后<strong>暂时跳过</strong>，
          到点自动恢复。上游限流时最常见，属于正常现象
        </li>
        <li>
          <strong>拉黑</strong>——连续失败次数超过阈值后自动摘除；API Key 验活成功后可自动恢复，订阅凭据需人工处理
        </li>
      </ul>
      <p>模型级限流只冷却该凭据的对应模型，其他模型仍可参与调度；明确的凭据级限制仍影响整份凭据。恢复凭据会清除其模型冷却。</p>
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
