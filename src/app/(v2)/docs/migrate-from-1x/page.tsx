import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { CodeBlock, Notice } from "@/components/v2/ui";
import { pageMeta } from "@/lib/v2/site";

export const metadata: Metadata = pageMeta({
  title: "从 1.x 迁移",
  description: "GPT-Load 2.0 无法原地升级，也不能导入 1.x 数据。本页说明并行部署与安全切流量的步骤。",
  path: "/docs/migrate-from-1x",
});

const TOC = [
  { id: "no", label: "先说结论" },
  { id: "why", label: "为什么不能升级" },
  { id: "map", label: "概念对照" },
  { id: "url", label: "请求地址的变化" },
  { id: "plan", label: "并行部署" },
  { id: "verify", label: "切流量前的验证" },
  { id: "rollback", label: "回滚" },
];

export default function Migrate() {
  return (
    <DocsPage
      path="/docs/migrate-from-1x"
      title="从 1.x 迁移"
      lede="2.0 是完全重写的版本。它不能就地升级 1.x，也没有数据导入工具——正确做法是并行部署、验证后切流量。"
      toc={TOC}
    >
      <Notice label="重要" tone="amber">
        <b>不要把 2.0 指向 1.x 的数据目录或数据库。</b>
        两者的数据结构完全不同，2.0 不会读取、更不会转换 1.x 的数据。
        直接复用旧数据目录可能导致启动失败或数据损坏。
      </Notice>

      <Heading id="no">先说结论</Heading>
      <ul>
        <li>
          <strong>不能原地升级</strong>——不存在「拉个新镜像就升上去」这条路
        </li>
        <li>
          <strong>没有数据导入工具</strong>——渠道、密钥、分组都需要在 2.0 里重新配置
        </li>
        <li>
          <strong>1.x 仍然可用</strong>——维护线继续存在，
          文档保留在 <a href="/v1/docs">1.4.x 文档</a>，不急的话可以先不动
        </li>
      </ul>
      <p>
        需要做的是：<strong>另起一套 2.0，配好、验证、再把流量切过去</strong>，
        旧的那套在回滚窗口内保持不动。
      </p>

      <Heading id="why">为什么不能升级</Heading>
      <p>
        2.0 重写了数据模型。最根本的变化是<strong>概念层级从一层变成了两层</strong>：
        1.x 里「分组」同时承担了上游配置和对外授权两个职责；
        2.0 把它拆成了<strong>分组</strong>（朝上游）和<strong>访问密钥</strong>（朝应用）。
      </p>
      <p>
        这不是加几个字段能兼容的差异——旧数据里没有任何信息可以推导出
        「哪些应用该被授权用哪些分组」。所以与其提供一个会猜错的导入工具，
        不如让你在 2.0 里明确配一遍。配置量通常不大，而且只需要做一次。
      </p>

      <Heading id="map">概念对照</Heading>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>1.x</th>
              <th style={{ width: "34%" }}>2.0 对应</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>分组</td>
              <td>分组 + 访问密钥</td>
              <td>一个 1.x 分组通常拆成「一个分组」＋「一把访问密钥」</td>
            </tr>
            <tr>
              <td>分组里的密钥池</td>
              <td>分组的凭据池</td>
              <td>概念一致，直接重新粘贴即可</td>
            </tr>
            <tr>
              <td>渠道类型</td>
              <td>分组的渠道字段</td>
              <td><strong>2.0 没有独立的渠道菜单</strong>，它是建分组时的选项</td>
            </tr>
            <tr>
              <td>对外的分组名</td>
              <td>访问密钥</td>
              <td>应用侧改为持有一把 key，不再拼分组名</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        三层还是两层这件事容易记混，详见 <Link href="/docs/concepts">核心概念</Link>。
      </p>

      <Heading id="url">请求地址的变化</Heading>
      <p>
        这是应用侧<strong>唯一必须改的东西</strong>。1.x 需要把分组名拼进路径，
        2.0 不需要：
      </p>
      <CodeBlock caption="应用侧的改动">
        <span className="c"># 1.x：地址里带分组名</span>{"\n"}
        http://host:3001/proxy/<span className="s">你的分组名</span>/v1/chat/completions{"\n"}
        {"\n"}
        <span className="c"># 2.0：固定地址，用哪个分组由访问密钥和模型名决定</span>{"\n"}
        http://host:3001/v1/chat/completions
      </CodeBlock>
      <p>
        换句话说，2.0 里<strong>应用只需要一个 base URL 和一把访问密钥</strong>。
        以后你在管理台增删分组、换服务商，应用侧都不用再动。
      </p>

      <Heading id="plan">并行部署</Heading>
      <p>
        关键是<strong>两套实例的四样东西必须完全分开</strong>，任何一样共用都可能出问题：
      </p>
      <ul>
        <li>
          <strong>端口</strong>——2.0 用一个新端口，别占用 1.x 正在用的
        </li>
        <li>
          <strong>数据目录 / Docker 卷</strong>——必须是全新的，不要复用
        </li>
        <li>
          <strong>数据库</strong>——用新库；哪怕都是 MySQL 也要分开建库
        </li>
        <li>
          <strong>OAuth 回调端口</strong>——若要用订阅账号，注意端口是独占的，
          见 <Link href="/docs/groups/subscription">订阅账号</Link>
        </li>
      </ul>
      <CodeBlock caption="以 Compose 为例：换目录、换端口">
        <span className="c"># 1.x 保持原样运行，不要动它</span>{"\n"}
        {"\n"}
        <span className="c"># 2.0 clone 到另一个目录</span>{"\n"}
        git clone --depth 1 --branch v2 \{"\n"}
        {"  "}https://github.com/tbphp/gpt-load.git gpt-load-v2{"\n"}
        cd gpt-load-v2{"\n"}
        cp .env.example .env{"\n"}
        {"\n"}
        <span className="c"># 在 .env 里把端口改成未占用的，例如 3002</span>{"\n"}
        <span className="c"># PORT=3002</span>{"\n"}
        {"\n"}
        docker compose up -d
      </CodeBlock>
      <p>
        起来之后按 <Link href="/docs/quickstart">快速开始</Link> 配置：
        建分组、填密钥、选模型、发访问密钥。
      </p>

      <Heading id="verify">切流量前的验证</Heading>
      <p>逐项确认，再动生产流量：</p>
      <ol>
        <li>
          <strong>每个分组都能跑通</strong>——用真实模型各发一个请求，不要只测一个分组
        </li>
        <li>
          <strong>模型名对得上</strong>——2.0 里模型是分组级声明的，
          确认应用请求的模型名在对应分组里已开放
        </li>
        <li>
          <strong>协议匹配</strong>——访问密钥要勾选应用实际使用的协议
        </li>
        <li>
          <strong>看一眼监控</strong>——请求日志里确认路由走向符合预期，
          见 <Link href="/docs/monitor">监控与排障</Link>
        </li>
        <li>
          <strong>过一遍上生产清单</strong>——特别是密钥备份与网络边界，
          见 <Link href="/docs/security">安全与上生产</Link>
        </li>
      </ol>
      <p>
        建议先把<strong>一个非关键应用</strong>切到 2.0 跑一段时间，
        确认无误后再切其余的。
      </p>

      <Heading id="rollback">回滚</Heading>
      <p>
        因为是并行部署，回滚就是<strong>把应用的地址和密钥改回 1.x</strong>，
        没有数据迁移需要撤销。
      </p>
      <Notice label="别急着删" tone="amber">
        流量切完之后，<b>1.x 那套至少再保留一到两周</b>。
        确认 2.0 在真实负载下稳定、没有遗漏的应用还在连旧实例，再考虑下线。
        删除前记得备份它的数据目录。
      </Notice>
    </DocsPage>
  );
}
