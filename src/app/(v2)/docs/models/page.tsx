import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/models");
}

const TOC = [
  { id: "two", label: "两个层面" },
  { id: "discover", label: "模型发现" },
  { id: "alias", label: "模型别名" },
  { id: "price", label: "价格从哪来" },
  { id: "manual", label: "手动改价" },
  { id: "unpriced", label: "没有价格会怎样" },
];

export default async function Models() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/models"
      title="模型管理"
      lede="让客户端用自己习惯的模型名，并知道成本估算的价格是从哪来的。"
      toc={TOC}
    >
      <Heading id="two">两个层面</Heading>
      <p>模型这件事分在两个地方，别搞混：</p>
      <ul>
        <li>
          <strong>分组的模型标签页</strong>——决定<strong>这个分组对外开放哪些模型</strong>。
          只有列在这里的模型才能被请求到
        </li>
        <li>
          <strong>模型页</strong>——全局的模型价格和规格，影响成本估算
        </li>
      </ul>
      <p>
        日常配置主要在分组里做，见 <Link href="/docs/groups">分组与渠道</Link>。
        这一页分别说明分组里的模型与别名，以及全局价格信息。
      </p>

      <Heading id="discover">模型发现</Heading>
      <p>
        不用手敲模型名——分组的模型标签页里可以<strong>从上游拉取模型列表</strong>，
        勾选需要的即可。
      </p>
      <p>
        发现结果取决于上游返回什么。有些服务商的列表包含大量你用不到的模型，
        <strong>建议只勾选实际会用的</strong>：范围小一点，
        既避免应用误用贵模型，出问题时也更好排查。
      </p>
      <p>
        上游没有列出但确实可用的模型，可以<strong>手工添加</strong>。
      </p>

      <Figure
        src={docScreenshot(locale, "mdl-01-discover.png")}
        alt="分组模型页打开获取上游模型列表抽屉，可搜索并勾选尚未添加的模型"
        width={2880}
        height={1440}
        caption="FIG. 1 — 模型发现"
        note="从上游拉取"
      >
        拉取结果按上游返回，勾选后才对外开放。
      </Figure>

      <Notice label="快速同步" tone="blue">
        模型发现抽屉里可以按上游结果<strong>完全同步</strong>、<strong>仅添加</strong>或
        <strong>清理</strong>当前列表。同步只比较上游发现结果，不把价格目录当作上游模型；
        保留下来的模型会保留别名，确认后直接保存。
      </Notice>

      <Heading id="alias">模型别名</Heading>
      <p>
        别名在<strong>分组的「模型与别名」标签页</strong>中配置，解决一个很实际的问题：
        <strong>客户端请求的名字，
        和上游实际的模型名对不上</strong>。
      </p>
      <p>典型场景：</p>
      <ul>
        <li>
          <strong>换供应商不改代码</strong>——应用一直请求同一个名字，
          你在网关这边把它指向不同的上游模型
        </li>
        <li>
          <strong>统一命名</strong>——不同服务商对同一个模型的命名各不相同，
          用别名归一
        </li>
        <li>
          <strong>版本收敛</strong>——把带日期后缀的具体版本，
          映射成一个稳定的名字
        </li>
      </ul>

      <Figure
        src={docScreenshot(locale, "mdl-02-alias.png")}
        alt="分组的模型与别名表格，模型 ID 旁可直接编辑对外别名"
        width={2880}
        height={1440}
        caption="FIG. 2 — 模型别名"
        note="模型 ID → 对外别名"
      >
        应用请求别名，网关转发时换成实际的模型名。
      </Figure>

      <Heading id="price">价格从哪来</Heading>
      <p>
        成本估算需要模型价格。价格有两个来源：
      </p>
      <ul>
        <li>
          <strong>自动同步</strong>——从公开的模型价格数据源
          （<a href="https://models.dev" target="_blank" rel="noopener noreferrer">models.dev</a>）
          获取，覆盖常见模型
        </li>
        <li>
          <strong>手动录入</strong>——数据源没有的、或者你有专属价格的，自己填
        </li>
      </ul>
      <p>
        自动同步可以在设置里关闭，见 <Link href="/docs/settings">运行时设置</Link>。
        关掉之后价格完全由你维护。
      </p>
      <p>价格按 token 类型分别定义，这也是成本估算能算准的前提：</p>
      <ul>
        <li>
          <strong>输入</strong> / <strong>输出</strong>——最基本的两项
        </li>
        <li>
          <strong>缓存读取</strong>——通常远低于普通输入价
        </li>
        <li>
          <strong>缓存写入</strong>——部分服务商单独计费
        </li>
      </ul>
      <p>
        部分模型还支持<strong>按上下文长度分档计价</strong>——
        超过某个长度后单价更高，这种阶梯价也能配。
      </p>

      <Heading id="manual">手动改价</Heading>
      <p>
        自动同步来的价格可以被<strong>手动覆盖</strong>。改过之后那条会标记为手动维护，
        后续自动同步<strong>不会覆盖掉你的修改</strong>。
      </p>
      <p>
        想恢复成自动同步的值，用重置即可。
      </p>
      <Notice label="什么时候需要手动改" tone="blue">
        你有企业协议价、走的是中转服务有自己的定价、
        或者用了公开数据源没收录的模型——这几种情况下自动同步的价格不准，
        手动填一次更靠谱。
      </Notice>

      <Heading id="unpriced">没有价格会怎样</Heading>
      <Notice label="不影响请求" tone="blue">
        <b>没有价格数据不会导致请求失败。</b>模型照常可用，
        只是这部分用量<b>不计入成本估算</b>——
        监控页的「成本未定价」指标会把它统计出来。
      </Notice>
      <p>
        所以如果你发现成本估算明显偏低，先去{" "}
        <Link href="/docs/monitor">监控与排障</Link> 看数据完整度那一块：
        「成本未定价」数字大，说明有模型缺价格，补上即可。
      </p>
      <p>
        另外提醒一点：<strong>价格变更不回算历史数据</strong>。
        今天补的价格只影响之后的统计，之前那些请求仍然是未计价状态。
      </p>
    </DocsPage>
  );
}
