import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/access-keys");
}

const TOC = [
  { id: "what", label: "它管什么" },
  { id: "create", label: "创建一把密钥" },
  { id: "scope", label: "授权范围" },
  { id: "proto", label: "协议选择" },
  { id: "source", label: "来源与有效期" },
  { id: "rpm", label: "限流" },
  { id: "cost", label: "成本上限" },
  { id: "rotate", label: "停用与轮换" },
  { id: "practice", label: "实践建议" },
];

export default async function AccessKeys() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/access-keys"
      title="访问密钥"
      lede="访问密钥是你交给应用的那串字符。它不绑定任何上游，只声明应用能访问哪些资源、从哪里访问，以及能用多少。"
      toc={TOC}
    >
      <Heading id="what">它管什么</Heading>
      <p>
        分组朝上游，<strong>访问密钥朝应用</strong>。应用拿到一把密钥，
        不需要知道背后有几个分组、几十把上游凭据。
      </p>
      <p>一把密钥声明四类边界：</p>
      <ul>
        <li>
          <strong>资源范围</strong>——能用哪些分组和客户端模型
        </li>
        <li>
          <strong>协议范围</strong>——能用哪些客户端协议
        </li>
        <li>
          <strong>访问条件</strong>——允许的来源 IP/CIDR 和有效期
        </li>
        <li>
          <strong>用量边界</strong>——每分钟请求数，以及成本封顶
        </li>
      </ul>
      <p>
        因为有这层隔离，<strong>给不同应用发不同的密钥</strong>就变得很自然：
        各自限额、各自吊销，互不影响。
      </p>
      <Notice label="也可以登录只读管理台" tone="blue">
        启用且未过期的访问密钥可以直接登录当前实例，
        但只能查看自身范围内的首页、模型、用量和脱敏请求日志。
        它不能修改分组、访问密钥或运行时设置，也不能查看上游凭据。
      </Notice>

      <Heading id="create">创建一把密钥</Heading>
      <p>
        点<strong>访问密钥 → 新建</strong>，勾选可用分组和协议，
        按需设置限额，保存后会生成密钥串。
      </p>

      <Figure
        src={docScreenshot(locale, "key-01-list.png")}
        alt="访问密钥列表，展示密钥状态、授权分组、协议范围和用量限额"
        width={2880}
        height={1440}
        caption="FIG. 1 — 访问密钥列表"
        note="授权范围 · 限额 · 状态"
      >
        密钥创建后只显示掩码，需要时可以显式查看真实值。
      </Figure>

      <Notice label="保存好它" tone="amber">
        密钥是应用访问网关的唯一凭证。<b>不要提交到仓库、日志或公开 issue</b>，
        也不要在多个应用之间共用同一把——共用会让你无法单独吊销其中一个。
      </Notice>

      <Heading id="scope">授权范围</Heading>
      <p>
        一把密钥可以授权多个分组，也可以按<strong>客户端看到的模型名</strong>进一步收窄。
        请求进来时，
        <strong>网关按请求里的模型名和分组的健康状况决定实际走哪个</strong>。
      </p>
      <p>这带来一个实用效果：</p>
      <ul>
        <li>
          <strong>同模型多来源</strong>——若两个分组都开放了同一个模型，
          一个不可用时会自动走另一个，应用无感
        </li>
        <li>
          <strong>按需收窄</strong>——只授权应用真正需要的分组和模型，
          避免它意外使用其他资源
        </li>
      </ul>
      <Notice label="留空表示不限制" tone="blue">
        分组、协议或模型列表留空，表示该维度不限制；填写多个值时，任意一个匹配即可。
        不同维度之间则必须同时满足。
      </Notice>

      <Heading id="proto">协议选择</Heading>
      <p>
        勾选这把密钥允许的客户端协议。没勾的协议，用这把密钥请求会被拒绝。
      </p>
      <ul>
        <li>
          <strong>OpenAI Chat Completions</strong>——最通用，绝大多数兼容客户端走这条
        </li>
        <li>
          <strong>OpenAI Responses</strong>——较新的接口形态，支持有状态请求
        </li>
        <li>
          <strong>Anthropic Messages</strong>——Claude Code 等客户端的原生入口
        </li>
        <li>
          <strong>Gemini</strong>——Gemini 客户端的原生入口
        </li>
      </ul>
      <p>
        拿不准就把应用会用到的都勾上。协议之间的能力差异见{" "}
        <Link href="/docs/internals/protocols">协议与转换边界</Link>。
      </p>

      <Heading id="source">来源与有效期</Heading>
      <p>还可以给访问密钥增加两个认证条件：</p>
      <ul>
        <li>
          <strong>来源 IP/CIDR</strong>——留空表示不限来源；填写后，只允许匹配的 IPv4、IPv6 或 CIDR
        </li>
        <li>
          <strong>有效期</strong>——可设为永不过期或指定未来时间；到期后，新请求和只读管理台登录都会被拒绝
        </li>
      </ul>
      <Notice label="反向代理看到的是直接来源" tone="amber">
        来源限制匹配的是与 GPT-Load 直接建立连接的地址，不读取
        <code>X-Forwarded-For</code> 或 <code>X-Real-IP</code>。
        经过反向代理时，通常应允许代理服务器地址，而不是终端用户地址。
      </Notice>

      <Heading id="rpm">限流</Heading>
      <p>
        <strong>每分钟请求数（RPM）</strong>限制这把密钥的调用频率，
        超出的请求会被拒绝。留空或设为 0 表示不限制。
      </p>
      <p>
        它的作用是<strong>防止单个应用失控</strong>——
        比如某个脚本写错了循环，不至于把所有上游额度耗光。
      </p>

      <Heading id="cost">成本上限</Heading>
      <p>
        比 RPM 更直接的保护：<strong>按花掉多少钱来封顶</strong>。支持两种规则：
      </p>
      <ul>
        <li>
          <strong>总额度</strong>——累计花到这个数就停，不会重置。
          适合发给外部协作者的一次性密钥
        </li>
        <li>
          <strong>周期额度</strong>——每个周期重新计数，周期长度可配
          （从一分钟到一年）。常用的是按天或按月
        </li>
      </ul>

      <Notice label="它基于估算成本" tone="amber">
        成本上限用的是<b>网关自己算出来的估算成本</b>，依据上游返回的 token 用量
        与模型价格推算，<b>不等于服务商账单</b>。
        没有价格数据的模型不计入消耗。
        所以它适合用来<b>防止意外失控</b>，不适合当作精确的财务管控手段。
        计费口径见 <Link href="/docs/monitor">监控与排障</Link>。
      </Notice>

      <Heading id="rotate">停用与轮换</Heading>
      <p>
        密钥有<strong>启用 / 停用</strong>两种状态。停用后立即失效，
        但配置保留着，随时可以再启用——排查某个应用的问题时很方便。
      </p>
      <p>
        管理台的<strong>轮换密钥</strong>会在原记录上生成新密钥，保留名称、权限和额度设置。
        轮换成功后旧密钥立即失效，已经开始的请求不受影响；它没有双密钥宽限期，
        适合确认泄漏后立即切断旧密钥。
      </p>
      <p>
        如果要求<strong>零停机轮换</strong>，仍应新建第二把密钥、更新并验证应用，
        然后再停用或删除旧密钥。
      </p>

      <Heading id="practice">实践建议</Heading>
      <ul>
        <li>
          <strong>一个应用一把密钥。</strong>共用会让你既看不清是谁在用量，
          也没法单独吊销
        </li>
        <li>
          <strong>给测试环境单独发一把，并设较低的成本上限。</strong>
          调试时的意外循环最容易烧额度
        </li>
        <li>
          <strong>授权范围按需给。</strong>只读的演示应用没必要授权到贵模型的分组
        </li>
        <li>
          <strong>外部或临时应用设置来源限制和过期时间。</strong>泄漏后的可用范围会更小
        </li>
        <li>
          <strong>发给外部的密钥用总额度封顶。</strong>比周期额度更可控
        </li>
      </ul>
    </DocsPage>
  );
}
