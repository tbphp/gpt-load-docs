import type { Metadata } from "next";
import { pageMeta } from "@/lib/v2/site";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";

export const metadata: Metadata = pageMeta({
  title: "核心概念",
  description: "GPT-Load 只有分组和访问密钥两层：分组管上游与凭据，访问密钥管应用能用什么。",
  path: "/docs/concepts",
});

const TOC = [
  { id: "two", label: "只有两层" },
  { id: "group", label: "分组" },
  { id: "channel", label: "渠道在哪" },
  { id: "conn", label: "两种接入方式" },
  { id: "key", label: "访问密钥" },
  { id: "url", label: "分组不在 URL 里" },
  { id: "how", label: "该建几个分组" },
];

export default function Concepts() {
  return (
    <DocsPage
      path="/docs/concepts"
      title="核心概念"
      lede="管理台里只有两个需要你操心的东西：分组和访问密钥。搞清它们各管什么，其余文档都好读了。"
      toc={TOC}
    >
      <Heading id="two">只有两层</Heading>
      <p>
        很多网关会让你分别管理「服务商」「密钥」「路由规则」。GPT-Load 把它们压成了两层：
      </p>
      <ul>
        <li>
          <strong>分组</strong>——对接上游的一切：用哪个服务、拿哪些凭据、开放哪些模型、按什么策略跑
        </li>
        <li>
          <strong>访问密钥</strong>——发给应用的东西：能用哪些分组、能用哪些协议、限额多少
        </li>
      </ul>
      <p>
        一句话概括：<strong>分组朝上游，访问密钥朝应用</strong>。中间的调度、重试、冷却、计费统计，
        网关自己完成，两边都不用管。
      </p>

      <Heading id="group">分组：朝上游的那一半</Heading>
      <p>一个分组把五件事绑在一起：</p>
      <ol>
        <li>
          <strong>渠道</strong>——从内置的二十个上游里选一个，决定请求最终发到哪
        </li>
        <li>
          <strong>接入方式</strong>——用 API 密钥，还是用订阅账号授权
        </li>
        <li>
          <strong>凭据池</strong>——一个或多个密钥／账号，网关在它们之间轮转
        </li>
        <li>
          <strong>可用模型</strong>——这个分组对外开放哪些模型
        </li>
        <li>
          <strong>运行策略</strong>——权重、超时、重试次数、冷却阈值、出站代理
        </li>
      </ol>

      <Figure
        src="/v2/docs/cpt-01-group-tabs.png"
        caption="FIG. 1 — 分组详情"
        note="凭据 · 模型 · 设置"
        shot={{
          id: "CPT-01",
          where: "管理台 → 分组 → 点进任意一个分组，停在顶部",
          include: [
            "分组名称与所属渠道",
            "「凭据」「模型」「设置」三个 tab 都可见",
            "当前停在凭据 tab，能看到凭据条目",
          ],
          hint: "这张图要让人一眼看出「一个分组包含这三块」，所以三个 tab 必须都在画面里。",
        }}
      >
        一个分组的全部内容就在这三个 tab 里：凭据池、开放的模型、运行策略。
      </Figure>

      <Heading id="channel">渠道不是单独建的</Heading>
      <Notice label="容易找不到" tone="amber">
        管理台里<b>没有「渠道」这个菜单</b>。渠道是你新建分组时的一个下拉选项——
        选完 OpenAI 或 Anthropic，这个分组就固定对接那个上游了。
        想接两个不同的服务商，就建两个分组。
      </Notice>
      <p>
        这么设计是因为：换服务商往往意味着凭据、可用模型、限流特征全都变了，
        与其让你在三个地方分别改，不如让一个分组从头到尾对应一个上游。
      </p>

      <Heading id="conn">两种接入方式，同一套调度</Heading>
      <p>建分组时要选接入方式，它决定凭据长什么样：</p>
      <ul>
        <li>
          <strong>API 密钥</strong>——粘贴一串或多串 key，最常见的方式
        </li>
        <li>
          <strong>订阅账号</strong>——走 OAuth 授权，用于 Codex、Claude、Antigravity、Grok
          这类按订阅计费的账号
        </li>
      </ul>
      <p>
        两者<strong>共用同一套调度、重试、冷却和健康隔离</strong>。也就是说，
        你不需要为订阅账号单独维护一套运维逻辑，它们在网关眼里都只是「一池凭据」。
        订阅账号的授权细节见 <Link href="/docs/groups/subscription">订阅账号</Link>。
      </p>

      <Heading id="key">访问密钥：朝应用的那一半</Heading>
      <p>
        访问密钥是你交给应用的那串字符。它<strong>不直接绑定任何上游</strong>，
        只声明三件事：
      </p>
      <ul>
        <li>
          <strong>能用哪些分组</strong>——可以选多个，网关按模型和健康状况决定实际走哪个
        </li>
        <li>
          <strong>能用哪些协议</strong>——OpenAI Chat Completions、Responses、Anthropic Messages、Gemini
        </li>
        <li>
          <strong>限额</strong>——每分钟请求数，以及每日／每月的成本上限
        </li>
      </ul>
      <p>
        因为这层隔离，给不同应用发不同的密钥就变得很自然：
        测试环境一把、生产一把、给同事一把，各自限额、各自吊销，互不影响。
        细节见 <Link href="/docs/access-keys">访问密钥</Link>。
      </p>

      <Heading id="url">分组不出现在 URL 里</Heading>
      <Notice label="与 1.x 的差异" tone="amber">
        1.x 需要把分组名拼进请求地址。<b>2.0 不需要</b>——应用只认一个固定的 base URL，
        用哪个分组由访问密钥的授权范围和请求里的模型名共同决定。
      </Notice>
      <p>
        这意味着切换上游对应用是<strong>完全无感的</strong>：你在管理台里改分组配置、
        增删凭据、甚至换一家服务商，应用那边的地址和密钥都不用动。
      </p>

      <Heading id="how">该建几个分组</Heading>
      <p>没有标准答案，但有两条实用的判断：</p>
      <ul>
        <li>
          <strong>按上游分</strong>——这是硬性的，一个分组只能对接一个渠道
        </li>
        <li>
          <strong>按策略分</strong>——同一个服务商，如果你想让一批 key 走高优先级、另一批做兜底，
          或者两批 key 的超时和重试要求不同，那就拆成两个分组
        </li>
      </ul>
      <p>
        反过来，<strong>同一个服务商的多把 key 不需要拆分组</strong>——
        直接扔进同一个凭据池，网关会自己轮转和避让。
      </p>
    </DocsPage>
  );
}
