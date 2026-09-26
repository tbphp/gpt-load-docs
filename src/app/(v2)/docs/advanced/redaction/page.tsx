import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/advanced/redaction");
}

const TOC = [
  { id: "purpose", label: "解决什么问题" },
  { id: "configure", label: "配置规则" },
  { id: "flow", label: "请求与响应流程" },
  { id: "example", label: "一个可验证的例子" },
  { id: "scope", label: "覆盖范围与限制" },
  { id: "trouble", label: "排障与密钥" },
];

export default function Redaction() {
  return (
    <DocsPage path="/docs/advanced/redaction" title="请求脱敏" lede="在消息发给业务上游或 JEV 前隐藏敏感文本；需要把原值交回客户端时，可以使用可逆加密。" toc={TOC}>
      <Heading id="purpose">解决什么问题</Heading>
      <p>对话、工具参数和工具结果可能带有邮箱、手机号、业务标识或密钥。请求脱敏在网关内按正则规则处理外发副本，减少这些文本暴露给上游的机会；它不负责判断请求是否违规，也不是只给日志打码。</p>
      <div className="tbl-wrap"><table className="tbl">
        <thead><tr><th>处理方式</th><th>上游看到什么</th><th>适用场景</th></tr></thead>
        <tbody>
          <tr><td>固定替换</td><td>指定的替换文本，无法恢复原值</td><td>只需隐藏信息，后续不需要原值</td></tr>
          <tr><td>可逆加密</td><td>稳定的密文，不同原值仍可区分</td><td>需要区分业务对象，或把原值交给客户端执行的工具</td></tr>
        </tbody>
      </table></div>
      <p>同一访问密钥下，相同原值产生相同密文，便于模型维持引用关系；不同访问密钥相互隔离。模型只能操作密文，不能理解加密前的含义，也不能拿密文直接查询原始邮箱或账号。</p>

      <Heading id="configure">配置规则</Heading>
      <ol>
        <li>以管理员身份进入「设置 → 请求脱敏」。规则属于全局设置，不依赖实验功能开关；没有规则时不产生新的脱敏处理。</li>
        <li>从邮箱、中国手机号、常见 API Key、私钥预设开始，或添加自定义 Go／RE2 正则。预设只是起点，应按自己的数据格式收窄匹配范围。</li>
        <li>选择「固定替换」并填写替换文本，或选择「可逆加密」。固定替换按字面使用文本，$1 等内容不会展开为捕获组。</li>
        <li>保存后对新请求生效。用虚构数据验证匹配、回复和工具调用，再让真实流量使用。</li>
      </ol>
      <p>同一原文上的匹配会合并重叠区间，并采用排在前面的规则处理该区间；不是前一条替换后再让后一条重新匹配。避免把匹配整段消息的宽泛规则放在前面。</p>

      <Heading id="flow">请求与响应流程</Heading>
      <ol>
        <li>客户端把原始消息交给 GPT-Load；网关仍按原有权限、模型和路由配置选择目标。</li>
        <li>网关处理参数覆盖后的外发文本，将匹配片段替换或加密。业务上游和 JEV 收到的都是处理后的内容。</li>
        <li>上游生成回复或工具调用。对话响应中的有效密文在返回客户端前还原，包括普通响应、SSE 和 Responses WebSocket。</li>
        <li>客户端工具获得还原后的参数；下一轮携带历史或工具结果时，网关再次保护需要外发的内容。</li>
      </ol>
      <Notice label="还原需要密文原样返回" tone="amber">只有通过当前访问密钥认证的完整密文才能还原。模型改写、截断或拼错密文时，网关不会猜测原值；该片段可能仍以密文显示。固定替换的文本始终不能还原。</Notice>
      <p>带签名的思考与历史块需要保持完整。网关会携带必要的还原记录，在下一轮校验并恢复上游原文和签名；客户端应原样保留这些块，不要自行删改签名或其中的内容。</p>

      <Heading id="example">一个可验证的例子</Heading>
      <p>添加规则 TEST-PROJECT-[0-9]+，先选择「固定替换」，替换文本填 [PROJECT]。让模型原样复述下面的虚构标识；随后切换到「可逆加密」再发起一个新请求。</p>
      <CodeBlock caption="使用虚构数据测试">{`curl http://127.0.0.1:3001/v1/chat/completions \\
  -H "Authorization: Bearer $GPT_LOAD_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"YOUR_MODEL","messages":[{"role":"user","content":"Repeat exactly: TEST-PROJECT-123"}]}'`}</CodeBlock>
      <p>固定替换时，上游只看到 [PROJECT]。可逆加密时，上游看到密文；如果原样返回，客户端会重新看到 TEST-PROJECT-123。这个例子用于检查规则和还原链路，不保证模型每次都遵从复述指令。</p>
      <p>若需要核对实际外发内容，请用自己控制的测试上游观察虚构数据；不要为了调试而记录生产消息或真实密钥。</p>

      <Heading id="scope">覆盖范围与限制</Heading>
      <ul>
        <li>处理支持的消息文本、工具参数和结果等文本内容，不是对所有 JSON 字段做盲目替换。模型名、ID、角色、工具名等协议字段保持其语义。</li>
        <li>图片、音频、附件内部、未随请求提交的远程历史和不透明加密内容，不属于可检查的明文；原生数值字段也不会按字符串规则加密。</li>
        <li>Chat、Responses、Anthropic、Gemini 对话支持响应还原。生图、向量、重排序等非对话请求只处理其支持的外发文本，不提供同样的响应还原。</li>
        <li>客户端执行的工具可以拿到还原后的参数；上游内置搜索、托管 MCP、代码执行等工具拿到的仍是密文，不能依赖原值执行。</li>
        <li>加密会增加文本长度，可能增加 token 用量；需要等待完整密文或工具 JSON 片段时，流式输出也可能短暂延后。</li>
      </ul>
      <p>脱敏与智能护栏可以同时启用，但 JEV 审查的是脱敏后的内容。已被隐藏的原值不会再以明文交给 JEV 判断；应结合自己的保护目标选择规则。</p>
      <p><Link href="/docs/advanced/guardrails">JEV 智能护栏：判断、告警与拦截 →</Link></p>

      <Heading id="trouble">排障与密钥</Heading>
      <p>出现 request_redaction_failed 时，检查规则范围、文本结构及处理大小限制；网关会拒绝无法安全处理的请求。回复仍有密文时，先确认模型是否改写密文、是否更换了访问密钥身份，以及该协议是否支持还原。</p>
      <p>可逆加密由实例的 ENCRYPTION_KEY 和访问密钥身份派生，不依赖逐条会话映射。删除规则不会销毁解密能力，但不会追溯处理上游已有历史；停用规则后也不要假定所有流式历史路径仍会触发还原。</p>
      <p>保留数据库与原加密主密钥，才能维持原来的访问密钥身份与解密能力。重建访问密钥或更换实例主密钥，不能用来恢复旧身份下的密文。</p>
      <p><Link href="/docs/security#backup">加密密钥与数据库备份 →</Link></p>
    </DocsPage>
  );
}
