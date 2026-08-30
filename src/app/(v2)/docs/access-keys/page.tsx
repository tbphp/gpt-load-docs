import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "访问密钥",
  description: "访问密钥的授权范围、客户端协议、限流与成本上限配置。",
  path: "/docs/access-keys",
});

const TOC = [
  { id: "what", label: "它管什么" },
  { id: "create", label: "创建一把密钥" },
  { id: "scope", label: "授权范围" },
  { id: "proto", label: "协议选择" },
  { id: "rpm", label: "限流" },
  { id: "cost", label: "成本上限" },
  { id: "rotate", label: "停用与轮换" },
  { id: "practice", label: "实践建议" },
];

export default function AccessKeys() {
  return (
    <DocsPage
      path="/docs/access-keys"
      title="访问密钥"
      lede="访问密钥是你交给应用的那串字符。它不绑定任何上游，只声明「能用哪些分组、哪些协议、用多少」。"
      toc={TOC}
    >
      <Heading id="what">它管什么</Heading>
      <p>
        分组朝上游，<strong>访问密钥朝应用</strong>。应用拿到一把密钥，
        不需要知道背后有几个分组、几十把上游凭据。
      </p>
      <p>一把密钥声明三件事：</p>
      <ul>
        <li>
          <strong>能用哪些分组</strong>——可以选多个
        </li>
        <li>
          <strong>能用哪些客户端协议</strong>
        </li>
        <li>
          <strong>用量上限</strong>——每分钟请求数，以及成本封顶
        </li>
      </ul>
      <p>
        因为有这层隔离，<strong>给不同应用发不同的密钥</strong>就变得很自然：
        各自限额、各自吊销，互不影响。
      </p>

      <Heading id="create">创建一把密钥</Heading>
      <p>
        点<strong>访问密钥 → 新建</strong>，勾选可用分组和协议，
        按需设置限额，保存后会生成密钥串。
      </p>

      <Figure
        src="/v2/docs/key-01-list.png"
        caption="FIG. 1 — 访问密钥列表"
        note="授权范围 · 限额 · 状态"
        shot={{
          id: "KEY-01",
          where: "管理台 → 访问密钥，列表页",
          include: [
            "2–3 把密钥，最好授权范围不同",
            "能看到各自的可用分组、状态（启用/停用）",
            "如果配了限额，让它显示出来",
          ],
          hint: "密钥串只留后四位，前面用星号。",
        }}
      >
        密钥创建后只显示掩码，需要时可以显式查看真实值。
      </Figure>

      <Notice label="保存好它" tone="amber">
        密钥是应用访问网关的唯一凭证。<b>不要提交到仓库、日志或公开 issue</b>，
        也不要在多个应用之间共用同一把——共用会让你无法单独吊销其中一个。
      </Notice>

      <Heading id="scope">授权范围</Heading>
      <p>
        一把密钥可以授权多个分组。请求进来时，
        <strong>网关按请求里的模型名和分组的健康状况决定实际走哪个</strong>。
      </p>
      <p>这带来一个实用效果：</p>
      <ul>
        <li>
          <strong>同模型多来源</strong>——若两个分组都开放了同一个模型，
          一个不可用时会自动走另一个，应用无感
        </li>
        <li>
          <strong>按需收窄</strong>——只授权某个应用真正需要的分组，
          避免它意外用到昂贵的模型
        </li>
      </ul>

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
        <strong>怀疑泄漏时</strong>：新建一把密钥、更新应用配置、
        确认新密钥工作正常后，再删除旧的。
        不要先删旧的——那会让应用直接中断。
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
          <strong>发给外部的密钥用总额度封顶。</strong>比周期额度更可控
        </li>
      </ul>
    </DocsPage>
  );
}
