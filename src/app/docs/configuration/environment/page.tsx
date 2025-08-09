export default function EnvironmentConfigurationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">环境配置</h1>
      {/* Layer 1: Environment Configuration */}
      <div className="mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">配置特点</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">加载方式</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• 通过环境变量或 .env 文件</li>
                <li>• 应用启动时一次性读取</li>
                <li>• 运行时不可修改</li>
                <li>• 提供基础配置默认值</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">适用场景</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• 服务器基础参数配置</li>
                <li>• 数据库连接信息</li>
                <li>• 安全认证密钥</li>
                <li>• 日志和监控设置</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Server Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              服务器配置
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      配置项
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      环境变量
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      默认值
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      说明
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">服务端口</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">PORT</code>
                    </td>
                    <td className="py-2 px-3">3001</td>
                    <td className="py-2 px-3">HTTP 服务器监听端口</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">服务地址</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">HOST</code>
                    </td>
                    <td className="py-2 px-3">0.0.0.0</td>
                    <td className="py-2 px-3">HTTP 服务器绑定地址</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">读取超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        SERVER_READ_TIMEOUT
                      </code>
                    </td>
                    <td className="py-2 px-3">60秒</td>
                    <td className="py-2 px-3">HTTP 服务器读取请求超时</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">写入超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        SERVER_WRITE_TIMEOUT
                      </code>
                    </td>
                    <td className="py-2 px-3">600秒</td>
                    <td className="py-2 px-3">HTTP 服务器写入响应超时</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">优雅关闭超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        SERVER_GRACEFUL_SHUTDOWN_TIMEOUT
                      </code>
                    </td>
                    <td className="py-2 px-3">10秒</td>
                    <td className="py-2 px-3">服务优雅关闭等待时间</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">并发数量</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        MAX_CONCURRENT_REQUESTS
                      </code>
                    </td>
                    <td className="py-2 px-3">100</td>
                    <td className="py-2 px-3">最大并发请求数量</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Database Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              数据库配置
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  MySQL 数据库
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      环境变量：
                    </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2 text-gray-600">
                      DATABASE_DSN
                    </code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">
                      user:pass@tcp(host:3306)/db?charset=utf8mb4
                    </code>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Redis 缓存</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      环境变量：
                    </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2 text-gray-600">
                      REDIS_DSN
                    </code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">
                      redis://localhost:6379/0
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              安全配置
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">认证设置</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      管理端认证密钥
                    </label>
                    <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                      AUTH_KEY
                    </code>
                    <p className="text-xs text-red-600 mt-1">
                      必需项：访问 Web 管理界面的认证密钥
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">CORS 设置</h4>
                <div className="space-y-2 text-sm text-gray-800">
                  <div>
                    <strong>启用 CORS：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ENABLE_CORS=true
                    </code>
                  </div>
                  <div>
                    <strong>允许来源：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ALLOWED_ORIGINS=*
                    </code>
                  </div>
                  <div>
                    <strong>允许方法：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ALLOWED_METHODS=GET,POST,...
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proxy Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              代理配置
            </h3>
            <div className="mb-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-amber-800 mb-2">
                  优先级说明
                </h4>
                <p className="text-amber-700 text-sm mb-2">
                  代理配置支持三层优先级：
                  <strong>分组配置 &gt; 系统配置 &gt; 环境配置</strong>
                </p>
                <p className="text-amber-700 text-sm">
                  环境代理作为全局兜底配置，仅在系统配置和分组配置都未设置代理时生效。
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                GPT-Load
                会自动从环境变量中读取代理设置，作为最低优先级的全局代理配置。
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">代理设置</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          配置项
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          环境变量
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          说明
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">HTTP 代理</td>
                        <td className="py-2 px-3">
                          <code className="bg-gray-100 px-1 rounded">
                            HTTP_PROXY
                          </code>
                        </td>
                        <td className="py-2 px-3">
                          用于 HTTP 请求的代理服务器地址
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3">HTTPS 代理</td>
                        <td className="py-2 px-3">
                          <code className="bg-gray-100 px-1 rounded">
                            HTTPS_PROXY
                          </code>
                        </td>
                        <td className="py-2 px-3">
                          用于 HTTPS 请求的代理服务器地址
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">无代理</td>
                        <td className="py-2 px-3">
                          <code className="bg-gray-100 px-1 rounded">
                            NO_PROXY
                          </code>
                        </td>
                        <td className="py-2 px-3">
                          不需要通过代理访问的主机或域名，逗号分隔
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  支持的协议格式
                </h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      HTTP:
                    </span>
                    <div className="bg-gray-900 rounded p-2 mt-1">
                      <code className="text-green-400 text-xs">
                        http://user:pass@host:port
                      </code>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      HTTPS:
                    </span>
                    <div className="bg-gray-900 rounded p-2 mt-1">
                      <code className="text-green-400 text-xs">
                        https://user:pass@host:port
                      </code>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      SOCKS5:
                    </span>
                    <div className="bg-gray-900 rounded p-2 mt-1">
                      <code className="text-green-400 text-xs">
                        socks5://user:pass@host:port
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          环境配置总结
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            环境配置是 GPT-Load
            配置系统的基石，主要负责提供应用运行所需的基础设施参数。
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            <li>
              <strong>基础服务参数</strong>
              ：定义了应用启动和运行所依赖的核心服务，如服务器端口、数据库连接等。
            </li>
            <li>
              <strong>管理特性</strong>：通过 <code>.env</code>{" "}
              文件或操作系统环境变量进行配置，在应用启动时加载，确保了配置的稳定性和一致性。
            </li>
            <li>
              <strong>使用优势</strong>
              ：为系统提供了可靠的默认值，同时将敏感信息（如数据库密码、API密钥）与代码库分离，增强了安全性。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
