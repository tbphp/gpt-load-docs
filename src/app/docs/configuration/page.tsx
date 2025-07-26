import {
  Database,
  Server,
  Key,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Layers,
} from "lucide-react";

export default function ConfigurationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">配置说明</h1>
        <p className="text-xl text-gray-600">
          GPT-Load 采用强大而灵活的三层配置系统，满足不同场景下的配置需求
        </p>
      </div>

      {/* Three-Layer Architecture */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Layers className="inline h-6 w-6 mr-2 text-blue-600" />
          三层配置系统架构
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            配置优先级
          </h3>
          <div className="flex justify-center items-center space-x-4 text-center">
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 flex-1">
              <div className="text-red-600 font-bold text-lg mb-2">
                分组配置
              </div>
              <div className="text-red-800 text-sm">最高优先级</div>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 flex-1">
              <div className="text-orange-600 font-bold text-lg mb-2">
                系统设置
              </div>
              <div className="text-orange-800 text-sm">中等优先级</div>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 flex-1">
              <div className="text-blue-600 font-bold text-lg mb-2">
                环境变量
              </div>
              <div className="text-blue-800 text-sm">基础优先级</div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              配置系统通过{" "}
              <code className="bg-white px-2 py-1 rounded text-xs">
                SystemSettingsManager
              </code>
              管理配置的加载、合并和热更新
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              配置特性
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>
                • <strong>三层架构</strong>：环境、系统、分组
              </li>
              <li>
                • <strong>优先级覆盖</strong>：上层覆盖下层
              </li>
              <li>
                • <strong>热更新支持</strong>：运行时动态生效
              </li>
              <li>
                • <strong>配置验证</strong>：严格的数据验证
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              使用场景
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>
                • <strong>环境配置</strong>：基础服务参数
              </li>
              <li>
                • <strong>系统配置</strong>：全局业务设置
              </li>
              <li>
                • <strong>分组配置</strong>：特定分组定制
              </li>
              <li>
                • <strong>动态调优</strong>：实时性能优化
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              管理方式
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>
                • <strong>环境变量</strong>：.env 文件或系统环境
              </li>
              <li>
                • <strong>Web 管理</strong>：在线配置界面
              </li>
              <li>
                • <strong>API 接口</strong>：程序化配置管理
              </li>
              <li>
                • <strong>配置文件</strong>：JSON 格式导入导出
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Layer 1: Environment Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Server className="inline h-6 w-6 mr-2 text-blue-600" />
          第一层：环境配置
        </h2>

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
                  <tr>
                    <td className="py-2 px-3">优雅关闭超时</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        SERVER_GRACEFUL_SHUTDOWN_TIMEOUT
                      </code>
                    </td>
                    <td className="py-2 px-3">10秒</td>
                    <td className="py-2 px-3">服务优雅关闭等待时间</td>
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
              <p className="text-gray-600 text-sm">
                GPT-Load 会自动从环境变量中读取代理设置，用于向上游 AI
                服务商发起请求。
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

      {/* Layer 2: System Settings */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Database className="inline h-6 w-6 mr-2 text-orange-600" />
          第二层：系统设置
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
                      项目基础 URL，用于拼接分组端点
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
                    <td className="py-2 px-3">请求日志数据库保留天数</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">日志写入间隔</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_log_write_interval_minutes
                      </code>
                    </td>
                    <td className="py-2 px-3">1</td>
                    <td className="py-2 px-3">日志写入数据库周期（分钟）</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">全局代理密钥</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        proxy_keys
                      </code>
                    </td>
                    <td className="py-2 px-3">初始值为环境配置的 AUTH_KEY</td>
                    <td className="py-2 px-3">
                      全局生效的代理认证密钥，多个用逗号分隔
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Request Settings */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              请求设置
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">超时配置</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>请求超时：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      600秒
                    </code>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>连接超时：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      15秒
                    </code>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>响应头超时：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      15秒
                    </code>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>空闲连接超时：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      120秒
                    </code>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">连接池配置</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-800">
                    <span>最大空闲连接：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      100
                    </code>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>每主机最大连接：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      50
                    </code>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>最大并发请求：</span>
                    <code className="bg-gray-100 px-1 rounded text-gray-600">
                      100
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              密钥配置
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">重试设置</h4>
                <div className="text-sm text-gray-600">
                  <div>
                    最大重试次数：
                    <code className="bg-gray-100 px-1 rounded ml-1">3</code>
                  </div>
                  <p className="text-xs mt-1">单个请求使用不同密钥的重试次数</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">黑名单设置</h4>
                <div className="text-sm text-gray-600">
                  <div>
                    黑名单阈值：
                    <code className="bg-gray-100 px-1 rounded ml-1">3</code>
                  </div>
                  <p className="text-xs mt-1">密钥连续失败多少次进入黑名单</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">验证设置</h4>
                <div className="text-sm text-gray-600">
                  <div>
                    验证间隔：
                    <code className="bg-gray-100 px-1 rounded ml-1">
                      60分钟
                    </code>
                  </div>
                  <p className="text-xs mt-1">后台验证密钥的间隔时长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Group Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Key className="inline h-6 w-6 mr-2 text-green-600" />
          第三层：分组配置
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
                  性能相关配置
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
                      max_idle_conns
                    </code>{" "}
                    - 最大空闲连接
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      response_header_timeout
                    </code>{" "}
                    - 响应头超时
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
                    - 验证周期
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">最佳实践</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  配置管理建议
                </h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>
                    • 环境配置用于基础设置，生产环境务必配置安全的认证密钥
                  </li>
                  <li>
                    • 系统配置用于全局调优，根据实际负载情况调整超时和连接参数
                  </li>
                  <li>• 分组配置用于特殊需求，针对不同服务提供商优化配置</li>
                  <li>• 定期备份配置数据，重要变更前先在测试环境验证</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">注意事项</h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• 修改环境配置需要重启服务才能生效</li>
                  <li>• 系统配置和分组配置支持热更新，但建议在低峰期进行</li>
                  <li>• 配置验证失败会阻止保存，请确保参数在有效范围内</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">配置系统总结</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">三层架构</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 环境配置：基础服务参数</li>
              <li>• 系统设置：全局业务配置</li>
              <li>• 分组配置：特定分组定制</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">管理特性</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 优先级覆盖机制</li>
              <li>• 配置热更新支持</li>
              <li>• 严格的验证和约束</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">使用优势</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 灵活的配置层次</li>
              <li>• 动态配置调整</li>
              <li>• 多租户配置隔离</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
