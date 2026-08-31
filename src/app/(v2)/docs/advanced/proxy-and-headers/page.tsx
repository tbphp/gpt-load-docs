import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Notice } from "@/components/v2/ui";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/advanced/proxy-and-headers");
}

const TOC = [
  { id: "when", label: "什么时候需要" },
  { id: "proxy", label: "出站代理" },
  { id: "level", label: "四级覆盖" },
  { id: "headers", label: "请求头规则" },
  { id: "usage", label: "用量选项注入" },
];

export default function ProxyHeaders() {
  return (
    <DocsPage
      path="/docs/advanced/proxy-and-headers"
      title="代理与请求头"
      lede="这一页是给非标场景准备的：网络受限、不同凭据需要不同出口，或上游要求特殊请求头。用不到就不用看。"
      toc={TOC}
    >
      <Heading id="when">什么时候需要</Heading>
      <p>常见的几种情况：</p>
      <ul>
        <li>
          <strong>服务器访问不了某些上游</strong>——需要走代理出去
        </li>
        <li>
          <strong>不同凭据要走不同出口</strong>——比如按区域分流
        </li>
        <li>
          <strong>上游要求特定请求头</strong>——某些中转服务会校验来源标识
        </li>
      </ul>
      <p>没有这些需求的话，这一页的配置全都留空即可。</p>

      <Heading id="proxy">出站代理</Heading>
      <p>
        代理配置有三种模式：
      </p>
      <ul>
        <li>
          <strong>继承</strong>——用上一级的配置，这是默认值
        </li>
        <li>
          <strong>直连</strong>——<strong>明确不走代理</strong>，
          即使上一级配了也不用
        </li>
        <li>
          <strong>自定义</strong>——指定具体的代理地址
        </li>
      </ul>
      <Notice label="直连不等于继承" tone="blue">
        这两个容易混。<b>继承</b>是「跟着上级走」，上级配了代理就走代理；
        <b>直连</b>是「明确不走」，用来给个别凭据开例外——
        比如大部分上游要代理，但有一个在内网、走代理反而不通。
      </Notice>

      <Heading id="level">四级覆盖</Heading>
      <p>
        代理可以配在四个层级，<strong>越具体的优先</strong>。
        完整的优先级链是：凭据 → 分组 → 全局 → 环境变量 → 直连。
      </p>
      <ol>
        <li>
          <strong>环境变量</strong>——<code>HTTP_PROXY</code> 与{" "}
          <code>HTTPS_PROXY</code>，进程级的兜底出口。
          只在上面三级都没有明确指定时才生效，改完需要重启进程
        </li>
        <li>
          <strong>全局</strong>——管理台里配置的默认出口
        </li>
        <li>
          <strong>分组</strong>——覆盖全局，这个分组的所有凭据都走它
        </li>
        <li>
          <strong>单个凭据</strong>——覆盖分组，只对这一个凭据生效
        </li>
      </ol>
      <Notice label="环境变量是最后一层，不是第一层" tone="blue">
        管理台里选<b>继承</b>时，才会继续往下找；一路都是继承，最后才落到
        <code>HTTP_PROXY</code> 这类环境变量上。所以在管理台配了全局代理之后，
        环境变量就不再起作用了。反过来，任何一级选了<b>直连</b>，
        环境变量同样不生效。
        <br />
        这三个变量在 <Link href="/docs/reference/env">环境变量</Link> 页有完整说明。
      </Notice>
      <p>
        凭据级这一层是很多网关没有的。实际用途：
        同一个服务商的多个账号分属不同区域，
        需要各自从对应区域的出口访问，否则会被判定为异地登录。
      </p>

      <Heading id="headers">请求头规则</Heading>
      <p>
        可以在转发前修改发往上游的请求头，支持<strong>添加</strong>和
        <strong>删除</strong>两类动作。配置分全局与分组两级。
      </p>
      <p>典型用途：</p>
      <ul>
        <li>
          <strong>补上游要求的标识头</strong>——某些中转服务需要特定的来源标记
        </li>
        <li>
          <strong>去掉客户端带来的干扰头</strong>——
          有些客户端会附带自己的追踪头，上游可能不接受
        </li>
      </ul>
      <Notice label="别动认证头" tone="amber">
        认证相关的头由网关自己管理——它需要按选中的凭据动态填充。
        用规则去改它会导致请求失败。
      </Notice>

      <Heading id="usage">用量选项注入</Heading>
      <p>
        部分上游<strong>默认不返回 token 用量</strong>，需要在请求里显式声明才给。
        开启用量选项注入后，网关会自动加上这个声明。
      </p>
      <p>
        影响的是<strong>统计和成本估算的完整度</strong>——
        没有用量数据的请求，在监控页会计入「用量缺失」，也不产生成本估算。
      </p>
      <p>
        如果你发现某个分组的成本估算明显偏低、
        或者「用量缺失」数字很大，先检查这个开关，见{" "}
        <Link href="/docs/monitor">监控与排障</Link>。
      </p>
      <p>
        配置位置见 <Link href="/docs/settings">运行时设置</Link>。
      </p>
    </DocsPage>
  );
}
