import { Database, Key } from "lucide-react";

export default function ProjectConfigurationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">项目配置</h1>
      {/* Layer 2: System Settings */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Database className="inline h-6 w-6 mr-2 text-orange-600" />
          系统设置
        </h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-orange-900 mb-3">
            配置特点
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">存储方式</h4>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• 存储在数据库中</li>
                <li>• 支持管理 API 动态修改</li>
                <li>• 支持热重载无需重启</li>
                <li>• 为整个应用提供行为基准</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">管理特性</h4>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• Web 界面可视化配置</li>
                <li>• RESTful API 程序化管理</li>
                <li>• 配置验证和约束检查</li>
                <li>• 变更历史记录和回滚</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Parameters */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              基础参数
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      配置项
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      字段名
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      默认值
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      分组可覆盖
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">项目地址</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">app_url</code>
                    </td>
                    <td className="py-2 px-3">http://localhost:3001</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      项目基础 URL，用于拼接分组端点
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">全局代理密钥</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        proxy_keys
                      </code>
                    </td>
                    <td className="py-2 px-3">初始值为环境配置的 AUTH_KEY</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      全局生效的代理认证密钥，多个用逗号分隔
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">日志保留天数</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_log_retention_days
                      </code>
                    </td>
                    <td className="py-2 px-3">7</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      请求日志数据库保留天数，0 为不清理
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">日志写入间隔</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_log_write_interval_minutes
                      </code>
                    </td>
                    <td className="py-2 px-3">1</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">日志写入数据库周期（分钟）</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">启用日志详情</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        enable_request_body_logging
                      </code>
                    </td>
                    <td className="py-2 px-3">false</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      是否在请求日志中记录完整的请求体和响应体内容，启用会增加内存和存储占用
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Request Parameters */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              请求设置
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      配置项
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      字段名
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      默认值
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      分组可覆盖
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">请求超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">600</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      转发请求完整生命周期超时（秒）
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">连接超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        connect_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">15</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">与上游服务建立连接超时（秒）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">空闲连接超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        idle_conn_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">120</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">HTTP 客户端空闲连接超时（秒）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">响应头超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        response_header_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">600</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">等待上游响应头超时（秒）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">最大空闲连接数</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_idle_conns
                      </code>
                    </td>
                    <td className="py-2 px-3">100</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">连接池最大空闲连接总数</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">每主机最大空闲连接数</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_idle_conns_per_host
                      </code>
                    </td>
                    <td className="py-2 px-3">50</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">每个上游主机最大空闲连接数</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">代理服务器地址</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        proxy_url
                      </code>
                    </td>
                    <td className="py-2 px-3">-</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      用于转发请求的 HTTP/HTTPS 代理，为空则使用环境配置
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              密钥配置
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      配置项
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      字段名
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      默认值
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      分组可覆盖
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">最大重试次数</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_retries
                      </code>
                    </td>
                    <td className="py-2 px-3">3</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      单个请求使用不同密钥的最大重试次数
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">黑名单阈值</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        blacklist_threshold
                      </code>
                    </td>
                    <td className="py-2 px-3">3</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      密钥连续失败多少次后进入黑名单
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">密钥验证间隔</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_interval_minutes
                      </code>
                    </td>
                    <td className="py-2 px-3">60</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">后台定时验证密钥周期（分钟）</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">密钥验证并发数</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_concurrency
                      </code>
                    </td>
                    <td className="py-2 px-3">10</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      后台定时验证无效 Key 时的并发数
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">密钥验证超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_timeout_seconds
                      </code>
                    </td>
                    <td className="py-2 px-3">20</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      后台定时验证单个 Key 时的 API 请求超时时间（秒）
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Proxy Configuration Priority Notice */}
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">
              代理配置优先级
            </h3>
            <div className="mb-4">
              <p className="text-amber-800 text-sm mb-2">
                系统代理配置优先级为中等，会覆盖环境变量配置，但可被分组配置覆盖：
              </p>
              <div className="bg-amber-100 border border-amber-300 rounded p-3">
                <code className="text-amber-900 font-semibold">
                  分组配置 &gt; 系统配置 &gt; 环境配置
                </code>
              </div>
            </div>
            <p className="text-amber-700 text-sm">
              当系统配置中的 <code>proxy_url</code>{" "}
              为空时，将自动使用环境变量中的代理设置。
            </p>
          </div>
        </div>
      </div>

      {/* Layer 3: Group Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Key className="inline h-6 w-6 mr-2 text-green-600" />
          分组配置
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-900 mb-3">
            配置特点
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">优先级最高</h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• 可覆盖系统设置的任意参数</li>
                <li>• 为特定分组定制专用行为</li>
                <li>• 支持细粒度的性能调优</li>
                <li>• 实现多租户隔离配置</li>
                <li>• 代理配置优先级最高，覆盖系统和环境设置</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">配置灵活性</h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• JSON 格式的灵活配置</li>
                <li>• 支持参数覆盖和继承</li>
                <li>• 动态计算有效配置</li>
                <li>• 配置验证和约束检查</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Overridable Settings */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              可覆盖的配置项
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  请求与连接配置
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      request_timeout
                    </code>{" "}
                    - 请求超时
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      connect_timeout
                    </code>{" "}
                    - 连接超时
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      idle_conn_timeout
                    </code>{" "}
                    - 空闲连接超时
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      response_header_timeout
                    </code>{" "}
                    - 响应头超时
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      max_idle_conns
                    </code>{" "}
                    - 最大空闲连接数
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      max_idle_conns_per_host
                    </code>{" "}
                    - 每主机最大空闲连接数
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">proxy_url</code>{" "}
                    - 代理服务器地址
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  密钥管理配置
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      max_retries
                    </code>{" "}
                    - 最大重试次数
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      blacklist_threshold
                    </code>{" "}
                    - 黑名单阈值
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      key_validation_interval_minutes
                    </code>{" "}
                    - 密钥验证间隔
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      key_validation_concurrency
                    </code>{" "}
                    - 密钥验证并发数
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      key_validation_timeout_seconds
                    </code>{" "}
                    - 密钥验证超时
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      enable_request_body_logging
                    </code>{" "}
                    - 启用日志详情
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          项目配置总结
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            项目配置是 GPT-Load
            配置系统的核心，提供了强大的动态管理能力，涵盖系统级和分组级的配置。
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            <li>
              <strong>角色与分层</strong>
              ：分为&ldquo;系统设置&rdquo;和&ldquo;分组配置&rdquo;，前者为全局基准，后者为特定场景提供覆盖，实现了层次化管理。
            </li>
            <li>
              <strong>管理特性</strong>
              ：支持通过 Web 界面和 API
              进行动态修改，配置变更可热更新，无需重启服务，保证了系统的高可用性。
            </li>
            <li>
              <strong>代理配置优先级</strong>
              ：分组配置 &gt; 系统配置 &gt;
              环境配置，实现了从全局到特定分组的灵活代理设置。
            </li>
            <li>
              <strong>使用优势</strong>
              ：提供了极高的灵活性和动态调整能力，允许针对不同业务场景（如多租户）进行细粒度隔离和优化。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
