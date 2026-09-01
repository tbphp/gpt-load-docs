import type { Metadata } from "next";
import Link from "next/link";
import { DocsPage, Heading } from "@/components/v2/docs";
import { Figure, Notice } from "@/components/v2/ui";
import { getLocale } from "@/i18n/v2/server";
import { docScreenshot } from "@/lib/v2/doc-screenshot";
import { docPageMetadata } from "@/lib/v2/doc-meta";

export function generateMetadata(): Promise<Metadata> {
  return docPageMetadata("/docs/monitor");
}

const TOC = [
  { id: "where", label: "四个标签页" },
  { id: "health", label: "健康" },
  { id: "logs", label: "请求日志" },
  { id: "inspect", label: "路由检查" },
  { id: "usage", label: "用量与成本" },
  { id: "quality", label: "数据完整度" },
  { id: "flow", label: "排障顺序" },
];

export default async function Monitor() {
  const locale = await getLocale();

  return (
    <DocsPage
      path="/docs/monitor"
      title="监控与排障"
      lede="请求失败时，这一页帮你定位到是哪个凭据、哪一步出的问题。"
      toc={TOC}
    >
      <Heading id="where">四个标签页</Heading>
      <p>监控页分四块，各管一件事：</p>
      <ul>
        <li>
          <strong>健康</strong>——现在哪些凭据可用、哪些出了问题
        </li>
        <li>
          <strong>用量与成本</strong>——花了多少 token、多少钱
        </li>
        <li>
          <strong>请求日志</strong>——每一条请求的详细记录
        </li>
        <li>
          <strong>路由检查</strong>——给定条件，看网关会怎么选
        </li>
      </ul>

      <Heading id="health">健康</Heading>
      <p>
        健康页给出<strong>当前每个分组、每个凭据的可用状态</strong>，
        以及需要注意的问题清单。
      </p>
      <p>凭据的状态含义：</p>
      <ul>
        <li>
          <strong>可用</strong>——正常参与轮转
        </li>
        <li>
          <strong>冷却中</strong>——刚被上游限流或报错，暂时跳过，到点自动恢复
        </li>
        <li>
          <strong>已拉黑</strong>——连续失败超过阈值，自动摘除。API Key 分组会按验证间隔自动探测并恢复；订阅凭据不走这条自动恢复路径
        </li>
        <li>
          <strong>已停用</strong>——你手动关掉的，不参与轮转
        </li>
      </ul>
      <p>
        冷却和拉黑的触发条件、恢复方式见{" "}
        <Link href="/docs/internals/scheduling">调度是怎么做的</Link>。
      </p>

      <Figure
        src={docScreenshot(locale, "mon-01-health.png")}
        alt="监控健康页，展示凭据健康概览、分组状态和问题列表"
        width={2880}
        height={1440}
        caption="FIG. 1 — 健康"
        note="分组 · 凭据 · 问题清单"
      >
        有问题的凭据会集中列出，不用逐个分组翻。
      </Figure>

      <Heading id="logs">请求日志</Heading>
      <p>
        每条请求都有记录，可以按时间、分组、模型、状态等条件筛选。
        <strong>点开单条能看到完整链路</strong>：用了哪个凭据、
        是否发生过协议转换、重试了几次、上游返回了什么。
      </p>
      <p>排障时最有用的几个字段：</p>
      <ul>
        <li>
          <strong>路由身份</strong>——这条请求实际走了哪个分组、哪个凭据
        </li>
        <li>
          <strong>协议转换</strong>——客户端用的协议与上游协议不同时，
          这里能看到转换过程
        </li>
        <li>
          <strong>错误信息</strong>——经过脱敏和长度限制的错误摘要，
          配合错误码、来源、范围和命中规则判断
        </li>
      </ul>
      <p>
        字段和错误码见 <Link href="/docs/reference/errors#request-logs">错误与恢复参考</Link>；
        日志保留天数见 <Link href="/docs/settings">运行时设置</Link>。
      </p>

      <Heading id="inspect">路由检查</Heading>
      <p>
        <strong>这是排障最快的入口。</strong>输入一把访问密钥和一个模型名，
        它直接告诉你：这个请求是否可以路由、有哪些候选分组、当前有多少可用凭据，
        或者为什么走不通。
      </p>
      <p>典型用途：</p>
      <ul>
        <li>
          <strong>「为什么提示模型不存在」</strong>——检查器会告诉你
          这把密钥能用的分组里，有没有开放这个模型
        </li>
        <li>
          <strong>「为什么没有可用凭据」</strong>——按候选分组查看凭据总数和当前可用数
        </li>
        <li>
          <strong>「加了新分组但没生效」</strong>——确认访问密钥有没有授权到它
        </li>
      </ul>
      <p>
        <Link href="/docs/reference/errors#route-reasons">查看路由检查原因码及处理方式 →</Link>
      </p>

      <Figure
        src={docScreenshot(locale, "mon-02-inspect.png")}
        alt="路由检查页，展示模拟请求条件、可路由结论、候选分组和可用凭据数量"
        width={2880}
        height={1440}
        caption="FIG. 2 — 路由检查"
        note="条件 · 候选分组 · 凭据数量"
      >
        不用发真实请求就能看到候选分组与当前可用凭据。
      </Figure>

      <Heading id="usage">用量与成本</Heading>
      <p>
        展示请求量、成败趋势、缓存命中率、token 分类明细和成本估算，
        可以按分组、模型、访问密钥等维度看分布。
      </p>
      <p>token 分类需要理解一下，它直接影响成本：</p>
      <ul>
        <li>
          <strong>非缓存输入</strong>——正常计费的输入 token
        </li>
        <li>
          <strong>缓存读取</strong>——命中缓存的部分，<strong>通常远比非缓存便宜</strong>
        </li>
        <li>
          <strong>缓存写入</strong>——建立缓存的开销，部分服务商单独计费
        </li>
        <li>
          <strong>输出</strong>——模型生成的 token，通常最贵
        </li>
      </ul>
      <p>
        所以<strong>缓存命中率高是好事</strong>——同样的请求量，
        缓存命中率上去了，成本会明显下降。
      </p>

      <Notice label="成本是估算，不是账单" tone="amber">
        成本由<b>上游返回的 token 用量 × 模型价格</b>推算而来，
        用于运营分析和容量规划，<b>不等于服务商账单，也不能作为财务对账依据</b>。
        几个已知偏差来源：上游未返回用量的请求无法计入；
        没有价格数据的模型不计价；价格变更不回算历史数据。
      </Notice>

      <Heading id="quality">数据完整度</Heading>
      <p>
        用量页有一块「质量」指标，它衡量的<strong>不是服务质量，
        而是统计数据本身有多完整</strong>：
      </p>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: "24%" }}>指标</th>
              <th style={{ width: "38%" }}>含义</th>
              <th>影响</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>用量缺失</td>
              <td>上游没有返回 token 用量</td>
              <td>这些请求不计入统计与成本</td>
            </tr>
            <tr>
              <td>用量部分缺失</td>
              <td>只返回了部分维度</td>
              <td>成本偏低于实际</td>
            </tr>
            <tr>
              <td>成本未定价</td>
              <td>有用量，但该模型没有价格数据</td>
              <td>不计入成本，用量仍然统计</td>
            </tr>
            <tr>
              <td>部分定价</td>
              <td>只有部分 token 类型有价格</td>
              <td>成本偏低</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        这些数字大的时候，说明<strong>成本估算的可信度在下降</strong>。
        「未定价」通常是模型价格没同步到，见{" "}
        <Link href="/docs/models">模型管理</Link>。
      </p>

      <Heading id="flow">排障顺序</Heading>
      <p>遇到问题时按这个顺序走，通常两三步就能定位：</p>
      <ol>
        <li>
          <strong>先看健康</strong>——凭据是不是都冷却或拉黑了？
          是的话问题在上游或密钥本身
        </li>
        <li>
          <strong>再用路由检查</strong>——有没有候选分组和可用凭据？
          走不通的话它会直接告诉你原因
        </li>
        <li>
          <strong>最后翻请求日志</strong>——找到那条失败的，
          看错误码和已脱敏的错误摘要
        </li>
      </ol>
      <p>
        怀疑是某一把凭据本身失效时，还有一个更直接的办法：
        去分组的凭据页对它<strong>测试连接</strong>，
        用一次真实请求当场确认，见{" "}
        <Link href="/docs/groups">分组与渠道</Link>。
      </p>
      <p>
        如果健康正常、路由检查也显示存在候选分组和可用凭据，但请求还是失败，
        那多半是上游侧的问题（额度、模型下线、区域限制），
        日志里的错误码和安全摘要会提供进一步线索。
      </p>
    </DocsPage>
  );
}
