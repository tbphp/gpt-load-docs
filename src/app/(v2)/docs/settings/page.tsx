import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/settings");
}

const TOC = [
  { id: "two", label: "两层设置" },
  { id: "timeout", label: "三种超时" },
  { id: "concurrency", label: "并发上限" },
  { id: "retry", label: "重试与拉黑" },
  { id: "error-rules", label: "上游错误规则" },
  { id: "routing", label: "路由策略" },
  { id: "affinity", label: "会话亲和" },
  { id: "logs", label: "日志留存" },
  { id: "misc", label: "其他" },
  { id: "when", label: "什么时候该调" },
];

export default async function Settings() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/settings"
      title="运行时设置"
      lede="这些参数在管理台保存后即时生效，不需要重启。和环境变量是两回事——那些改完要重启。"
      toc={TOC}
    >
      <Heading id="two">两层设置</Heading>
      <p>
        超时、拉黑阈值等运行参数支持两层设置：
      </p>
      <ul>
        <li>
          <strong>系统级</strong>——在设置页配置，作为全局默认值
        </li>
        <li>
          <strong>分组级</strong>——在分组的设置标签页配置，
          <strong>启用覆盖后编辑，恢复默认则继承系统值；保存后生效</strong>
        </li>
      </ul>
      <p>
        这样设计是因为不同上游的特性差异很大：
        有的服务商响应慢但稳定，有的快但偶尔抽风，
        用同一套超时和拉黑阈值不合适。
      </p>

      <Figure
        src={docScreenshot(locale, "set-01-runtime.png")}
        alt="系统运行时设置页，展示路由策略及全局设置分区"
        width={2880}
        height={1440}
        caption="FIG. 1 — 系统级设置"
        note="全局默认值"
      >
        支持分组覆盖的参数，未覆盖时继承系统值。
      </Figure>

      <Notice label="怎么确认生效值" tone="blue">
        分组的设置标签页会标出哪些是<b>继承自系统</b>、哪些是<b>本分组单独覆盖</b>的。
        排查「为什么这个分组行为和别的不一样」时，先看这里。
      </Notice>

      <Heading id="timeout">三种超时</Heading>
      <p>
        三个超时管的是请求生命周期里的不同阶段，症状不同，别调错：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "28%" }}>参数</th>
              <th style={{ width: "34%" }}>管什么</th>
              <th>该调它的症状</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>首字节超时</td>
              <td>从发出请求到收到第一个字节</td>
              <td>上游排队久，请求还没开始响应就被判失败</td>
            </tr>
            <tr>
              <td>单次上游请求超时</td>
              <td>每次上游尝试的时长上限，不是跨重试的总时长</td>
              <td>长输出任务被中途掐断</td>
            </tr>
            <tr>
              <td>流空闲超时</td>
              <td>流式响应中，两个数据块之间的最大间隔</td>
              <td>流式输出中途卡住很久，但连接没断</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        <strong>推理模型要特别注意首字节超时</strong>——
        它们在开始输出前可能思考很久，默认值偏紧的话会误判为失败。
      </p>

      <Heading id="concurrency">并发上限</Heading>
      <p>在「设置 → 路由调度」配置全局并发上限、访问密钥默认并发上限和分组默认并发上限。默认均为 0，表示不限制；限制的是正在处理的请求数，不是每分钟请求数。</p>
      <p>访问密钥可单独覆盖，留空继承默认值；分组在运行参数中启用覆盖。显式设为 0 只取消该层限制，仍受其他层上限约束。</p>
      <p>达到上限时立即拒绝，不排队，HTTP 请求返回 429 和 concurrency_limit_exceeded。流式请求在处理期间持续占用名额；降低上限不会强行中断已放行的请求。</p>
      <p>并发计数只在当前 GPT-Load 进程内生效，不是多实例共享的总上限。JEV 决策调用也受分组并发限制，不能依赖护栏的异常放行绕过并发准入。</p>

      <Heading id="retry">重试与拉黑</Heading>
      <ul>
        <li>
          <strong>重试次数</strong>——全局额外重试预算，不支持分组覆盖。
          调大能提高成功率，但失败请求的耗时也会变长
        </li>
        <li>
          <strong>拉黑阈值</strong>——一个凭据连续失败多少次后被自动摘除。
          调小能更快隔离坏凭据，但偶发抖动也可能误伤
        </li>
      </ul>
      <p>
        两者的完整机制见 <Link href="/docs/internals/scheduling">调度是怎么做的</Link>。
      </p>
      <p>「空响应重试」默认关闭，分组可覆盖。开启后，流式对话在尚未向客户端交付、上游自然结束且没有产出时尝试下一个候选；用尽预算后交付原空响应。不适用于 WebSocket、非流式、预热或带历史资源引用的请求，也不重试拒答、内容过滤或输出预算耗尽等有明确原因的空结果。</p>
      <p>被重试的空响应可能已经在上游计费，但网关只记录最终交付尝试的用量与成本；开启前应接受这个估算边界。</p>

      <Heading id="error-rules">上游错误规则</Heading>
      <p>在「设置 → 路由调度 → 错误处理规则」添加全局规则；分组运行参数中可启用完整覆盖。未覆盖时继承全局，覆盖为空列表时只使用内置处理；未命中规则也按内置策略处理。Modern 和 Classic 均可配置。</p>
      <p>规则从上到下匹配，第一条命中生效。状态码为 200–599 的整数，多个状态码任一匹配即可；关键词在已识别错误的码、类型或消息中不区分大小写匹配子串，多个关键词任一命中即可。两类条件都填写时必须同时满足，至少填一类。</p>
      <p>每条规则独立选择是否重试，以及一个动作：不改变状态、冷却当前凭据的当前模型、冷却整份凭据、累计失败后拉黑、仅本次请求跳过分组。冷却填写正整数秒；拉黑仍按阈值累计，模型冷却仅对支持该动作的操作生效。</p>
      <p>保存后生效；列表最多 100 条，编码后不超过 65,535 字节。规则只使用已识别的上游错误，包括已识别的 HTTP 200 错误，不扫描正常回答文本；凭据探测与恢复方式不变。</p>
      <Notice label="仍遵守安全边界" tone="amber">
        规则不会绕过客户端请求错误、认证恢复和请求级限流的保护；已开始向客户端输出或执行结果未知时，不会强行重试。重试次数仍受全局预算限制。
      </Notice>

      <Heading id="routing">路由策略</Heading>
      <p>
        在「设置 → 路由调度」选择全局路由策略：默认「原生优先」，在同一优先级内优先使用原生路由；「混合权重」让同层的原生与转换候选按有效权重竞争。
        该项不支持分组覆盖，实际流量仍受可用凭据、请求亲和与协议能力限制。
      </p>

      <p>Responses WebSocket 默认开启，分组可继承或覆盖；关闭会中断受影响连接，普通 HTTP/SSE 不受影响。全局关闭不会覆盖分组的显式开启。</p>
      <Heading id="affinity">会话亲和</Heading>
      <p>
        开启后，网关会根据访问密钥、客户端协议以及请求中的指令或首个用户输入前缀
        生成软亲和键。在当前优先级和路由策略允许的候选中，具有相同稳定前缀的请求会尽量落在同一个凭据上。
        三个参数：
      </p>
      <ul>
        <li>
          <strong>开关</strong>——是否启用
        </li>
        <li>
          <strong>TTL</strong>——一条亲和记录保留多久
        </li>
        <li>
          <strong>容量</strong>——最多记住多少条会话（默认一万条）
        </li>
      </ul>
      <Notice label="它是软亲和，不是资源绑定" tone="blue">
        软亲和只尽量复用凭据，不保证资源归属。Responses 的 previous_response_id 使用独立的续接绑定，不受亲和开关影响；conversation 和其他资源引用不在该保证内。
      </Notice>

      <Heading id="logs">日志留存</Heading>
      <p>
        <strong>请求日志保留天数</strong>决定日志留多久，默认 7 天，过期自动清理。
      </p>
      <p>
        调大能查更久的历史，但数据库会持续增长——
        请求量大的话注意磁盘。用 SQLite 时尤其要留意。
      </p>

      <Heading id="misc">其他</Heading>
      <p>全局上游代理在设置页的「上游代理」中选择；代理地址统一在侧栏「代理」页新增、批量导入、编辑和测试，供全局、分组与凭据复用。测试由服务器经指定代理访问测试地址，不会自动启用或停用代理。</p>
      <p>请求脱敏在独立设置区配置；自动选模和 JEV 智能护栏在「实验功能」中配置。实时语音模式位于「连接与超时」，Codex 分组可单独覆盖。详细步骤见：</p>
      <ul>
        <li><Link href="/docs/advanced/redaction">请求脱敏：固定替换与可逆加密</Link></li>
        <li><Link href="/docs/advanced/guardrails">JEV 智能护栏：规则、告警与拦截</Link></li>
        <li><Link href="/docs/clients/codex-voice">Codex 实时语音接入</Link></li>
        <li><Link href="/docs/models#auto-model">自动选模配置</Link></li>
      </ul>
      <ul>
        <li>
          <strong>校验间隔</strong>——多久对凭据做一次可用性校验
        </li>
        <li>
          <strong>模型价格自动同步</strong>——是否从公开数据源同步价格，
          见 <Link href="/docs/models">模型管理</Link>。
          注意这一项可以被环境变量 <code>MODELS_DEV_AUTO_SYNC_ENABLED</code> 接管——
          一旦设了那个变量，这里就变成只读，见{" "}
          <Link href="/docs/reference/env">环境变量</Link>
        </li>
        <li>
          <strong>上游请求头、下游响应头与跨域</strong>——
          非标场景用，见 <Link href="/docs/advanced/proxy-and-headers">代理与请求头</Link>
        </li>
      </ul>

      <Heading id="when">什么时候该调</Heading>
      <p>
        <strong>默认值适用于大多数情况，没有明确症状就别动。</strong>
        盲目调大超时和重试，只会让失败的请求失败得更慢。
      </p>
      <p>按症状对号入座：</p>
      <ul>
        <li>
          <strong>推理模型频繁超时</strong> → 调大首字节超时（优先在该分组单独调）
        </li>
        <li>
          <strong>长文本任务被截断</strong> → 调大请求超时
        </li>
        <li>
          <strong>流式输出中途断开</strong> → 调大流空闲超时
        </li>
        <li>
          <strong>好凭据被频繁拉黑</strong> → 调大拉黑阈值
        </li>
        <li>
          <strong>坏凭据隔离太慢</strong> → 调小拉黑阈值
        </li>
        <li>
          <strong>有状态请求报找不到上下文</strong> → 检查响应 ID 是否已登记、原凭据是否可用；其他资源引用需单凭据或上游支持共享
        </li>
      </ul>
      <p>
        调整前先用 <Link href="/docs/monitor">监控与排障</Link> 确认症状，
        <strong>只改和症状相关的那一项</strong>，改完观察一段时间再动下一个。
      </p>
    </DocsPage>
  );
}
