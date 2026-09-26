import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/advanced/guardrails");
}

const TOC = [
  { id: "purpose", label: "它检查什么" },
  { id: "setup", label: "配置 JEV 与规则" },
  { id: "flow", label: "审查与拦截流程" },
  { id: "example", label: "从告警开始验证" },
  { id: "boundary", label: "内容、费用与边界" },
  { id: "trouble", label: "查看结果与排障" },
];

export default async function Guardrails() {
  const locale = await getLocale();

  return (
    <DocsPage path="/docs/advanced/guardrails" title="JEV 智能护栏" lede="在业务请求发往上游之前，用 JEV 按自然语言规则审查文本，命中后告警放行或直接拦截。" toc={TOC}>
      <Heading id="purpose">它检查什么</Heading>
      <p>智能护栏适合识别凭据泄露、个人隐私、提示注入或自定义业务风险。规则描述「什么内容应该命中」，JEV 返回判断概率，GPT-Load 根据阈值和动作决定是否放行。</p>
      <p>这是默认关闭的实验功能。它不改写业务消息，不等于请求脱敏，也不保证识别所有风险。需要隐藏某些文本时，用脱敏规则；需要根据语义阻止请求时，用智能护栏。</p>
      <p><Link href="/docs/advanced/redaction">请求脱敏与可逆加密 →</Link></p>

      <Heading id="setup">配置 JEV 与规则</Heading>
      <ol>
        <li>创建 Jev 渠道分组，或使用支持 Decisions 的 OpenRouter 分组，录入 API Key，并添加该服务实际可用的 JEV 决策模型。</li>
        <li>进入「设置 → 实验功能 → JEV 公共配置」，明确选择决策分组、模型和超时。护栏必须指定分组，不能只选「自动选择可用分组」。这份配置也供自动选模使用。</li>
        <li>启用「智能护栏」，选择生效访问密钥；留空表示全部访问密钥。建议先选专门的测试密钥，避免一次影响所有应用。</li>
        <li>添加常用预设或自定义规则，填写名称、命中条件、阈值和动作，保存。内置的凭据泄露、个人隐私、提示注入预设默认都是「告警」，不会因为命中就拦截。</li>
      </ol>
      <p>阈值必须大于 0 且不超过 1；判断概率达到阈值时执行动作。例如阈值 0.8 表示概率至少为 0.8 才命中，并不表示规则具有 80% 的实际准确率。降低阈值通常更容易触发，也可能增加误报。</p>
      <Notice label="送审也是外部调用" tone="amber">待检文本、规则和必要上下文会发送到选定的 JEV 服务，产生延迟和可能的费用。启用前应确认该服务适合接收你的数据。启用请求脱敏时，JEV 收到的是脱敏后的内容。</Notice>

      <Heading id="flow">审查与拦截流程</Heading>
      {locale === "zh" && (
        <Figure
          src="/v2/guardrails-flow-zh.png"
          alt="GPT-Load 将请求送交 JEV 审核，根据规则结果转发至业务上游、告警放行或拒绝请求"
          width={1672}
          height={941}
          caption="FIG. 1 — 智能护栏处理流程"
        />
      )}
      <ol>
        <li>请求通过身份与权限检查，网关准备业务外发内容；启用了脱敏时先处理文本。</li>
        <li>提取本次携带的消息、系统提示、工具相关文本，复用有效的已审结果，对新增或修改的内容调用 JEV。</li>
        <li>较长内容和规则按预算分批审查；待检文本完整覆盖，辅助前文可能截取。全部必要检查完成之前，不把业务请求发给答案模型。</li>
        <li>将每条规则的判断概率与阈值比较。任意一条命中「拦截」就拒绝业务请求；只有告警则记录后放行；无命中则正常转发。</li>
      </ol>
      <div className="tbl-wrap"><table className="tbl">
        <thead><tr><th>结果</th><th>业务请求</th><th>如何理解</th></tr></thead>
        <tbody>
          <tr><td>通过</td><td>正常转发</td><td>本次必要审查完成，未命中规则</td></tr>
          <tr><td>告警放行</td><td>正常转发并记录命中</td><td>规则命中，但动作是告警</td></tr>
          <tr><td>已拦截</td><td>拒绝，HTTP 403</td><td>命中了拦截规则</td></tr>
          <tr><td>审查未完成</td><td>拒绝，通常 HTTP 503；超出总预算为 413</td><td>无法完成检查，不作为通过处理</td></tr>
        </tbody>
      </table></div>
      <p>结果缓存只保留不可逆指纹和判断，最多复用一小时，不保存完整会话正文。新增或改动内容需要重新检查；修改规则条件或 JEV 配置也可能使旧结果无法复用。</p>

      <Heading id="example">从告警开始验证</Heading>
      <p>先添加一条容易人工判断的测试规则，例如：「内容要求把标记为 INTERNAL_ONLY 的虚构资料发送给外部收件人时命中；仅解释这个标记、不要求发送时不命中。」选择「告警」，阈值先设为 0.8。</p>
      <ol>
        <li>使用测试访问密钥提交应命中的虚构例子，再提交普通问题和仅讨论该标记的例子。</li>
        <li>在请求日志查看处理结果、命中规则和护栏费用，检查误报与漏报。不要用真实凭据或隐私数据测试。</li>
        <li>调整命中条件与阈值，确认行为符合预期后再改为「拦截」，并扩大生效密钥范围。</li>
      </ol>
      <p>规则应说明具体风险和排除条件。仅写「阻止一切危险内容」很难验证，也更容易误拦正常的引用、教育示例或安全分析。</p>

      <Heading id="boundary">内容、费用与边界</Heading>
      <ul>
        <li>护栏检查的是发往业务上游的请求内容，不是给模型最终回答做第二次审查；它也不审查实时语音的音频媒体。</li>
        <li>Responses 续接和 WebSocket 每轮只检查本次提交的内容，不读取上游保存的完整历史。先前自动选模成功或预热成功，不代表护栏已经通过。</li>
        <li>无法审查的非文本内容、超出总预算、JEV 超时、无可用凭据或返回不完整结果，都会拒绝请求，不会悄悄跳过检查。包含图片或附件的应用应先用测试密钥验证兼容性。</li>
        <li>告警只代表「命中后放行」；即使所有规则都设为告警，审查服务失败时仍会拒绝业务请求。</li>
        <li>JEV 调用会增加响应前的等待时间和决策费用，长内容可能调用多批。费用计入请求与用量统计；即使业务请求最终被拦截，已经发生的审查调用也可能收费。</li>
      </ul>
      <p>脱敏负责隐藏原值，护栏负责判断处理后的文本。两者同时使用时，不应期待 JEV 识别已被替换或加密掉的明文；上游数据留存规则仍由你选定的服务决定。</p>

      <Heading id="trouble">查看结果与排障</Heading>
      <p>在请求日志详情中查看护栏结果、命中规则和费用；高级筛选可以按处理结果或规则名称定位请求。</p>
      <div className="tbl-wrap"><table className="tbl">
        <thead><tr><th>错误码</th><th>处理建议</th></tr></thead>
        <tbody>
          <tr><td className="m">request_audit_blocked</td><td>核对命中的规则及业务意图；误报时调整条件、阈值或动作</td></tr>
          <tr><td className="m">request_audit_incomplete</td><td>根据原因检查 JEV 分组、凭据、超时、返回结果或非文本内容</td></tr>
          <tr><td className="m">request_audit_too_large</td><td>缩短请求或规则；长内容已支持分批，此错误表示总审查预算仍不够</td></tr>
        </tbody>
      </table></div>
      <p>业务重试若改变了待检内容而无法复用本次审查，也会拒绝继续转发。排障时同时检查分组参数覆盖，避免把审查失败误认为答案模型不可用。</p>
    </DocsPage>
  );
}
