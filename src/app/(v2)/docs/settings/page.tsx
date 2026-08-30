import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "运行时设置",
  description: "超时、重试、会话亲和、日志留存等运行参数，以及系统级与分组级的覆盖关系。",
  path: "/docs/settings",
});

const TOC = [
  { id: "two", label: "两层设置" },
  { id: "timeout", label: "三种超时" },
  { id: "retry", label: "重试与拉黑" },
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
      lede="这些参数在管理台里改，即时生效，不需要重启。和环境变量是两回事——那些改完要重启。"
      toc={TOC}
    >
      <Heading id="two">两层设置</Heading>
      <p>
        同一批参数存在于两个层级：
      </p>
      <ul>
        <li>
          <strong>系统级</strong>——在设置页配置，作为全局默认值
        </li>
        <li>
          <strong>分组级</strong>——在分组的设置 tab 配置，
          <strong>填了就覆盖系统值，留空则继承</strong>
        </li>
      </ul>
      <p>
        这样设计是因为不同上游的特性差异很大：
        有的服务商响应慢但稳定，有的快但偶尔抽风，
        用同一套超时和重试参数不合适。
      </p>

      <Figure
        src={docScreenshot(locale, "set-01-runtime.png")}
        alt="系统运行时设置页，展示出站代理、超时、检测间隔、重试和拉黑阈值等全局值"
        width={2880}
        height={1440}
        caption="FIG. 1 — 系统级设置"
        note="全局默认值"
      >
        分组里没有单独配置时，用的就是这里的值。
      </Figure>

      <Notice label="怎么确认生效值" tone="blue">
        分组的设置 tab 会标出哪些是<b>继承自系统</b>、哪些是<b>本分组单独覆盖</b>的。
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
              <td>请求超时</td>
              <td>整个请求的总时长上限</td>
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

      <Heading id="retry">重试与拉黑</Heading>
      <ul>
        <li>
          <strong>重试次数</strong>——一个请求失败后最多换几个凭据重试。
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

      <Heading id="affinity">会话亲和</Heading>
      <p>
        开启后，<strong>来自同一会话的请求会尽量落在同一个凭据上</strong>。
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
      <Notice label="什么时候需要它" tone="blue">
        用到<b>有状态接口</b>时必须开——比如 OpenAI Responses 里靠
        <code>previous_response_id</code> 接续上下文的请求，
        换凭据就找不到之前的会话了。
        纯无状态的对话请求则不需要，关掉反而让负载更均衡。
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
      <ul>
        <li>
          <strong>校验间隔</strong>——多久对凭据做一次可用性校验
        </li>
        <li>
          <strong>模型价格自动同步</strong>——是否从公开数据源同步价格，
          见 <Link href="/docs/models">模型管理</Link>
        </li>
        <li>
          <strong>请求头规则</strong>与<strong>用量选项注入</strong>——
          非标场景用，见 <Link href="/docs/advanced/proxy-and-headers">代理、请求头与覆盖</Link>
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
          <strong>有状态请求报找不到上下文</strong> → 开启会话亲和
        </li>
      </ul>
      <p>
        调整前先用 <Link href="/docs/monitor">监控与排障</Link> 确认症状，
        <strong>只改和症状相关的那一项</strong>，改完观察一段时间再动下一个。
      </p>
    </DocsPage>
  );
}
