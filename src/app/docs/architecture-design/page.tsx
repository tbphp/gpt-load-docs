import {
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  GitBranch,
} from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">系统架构</h1>
        <p className="text-xl text-gray-600">
          深入了解 GPT-Load 的技术架构和设计理念
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">架构概览</h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              高性能透明代理架构
            </h3>
            <p className="text-gray-700 text-lg">
              基于 Go 语言构建的高性能 OpenAI API
              代理服务，支持多密钥轮换、负载均衡和智能故障切换
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">API 网关</h3>
            <p className="text-gray-600 text-sm">统一的 API 入口和路由</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Server className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">负载均衡</h3>
            <p className="text-gray-600 text-sm">智能密钥轮换和分发</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Database className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">数据存储</h3>
            <p className="text-gray-600 text-sm">MySQL + Redis 双重存储</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">安全监控</h3>
            <p className="text-gray-600 text-sm">限流、认证和监控</p>
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">系统组件</h2>

        <div className="space-y-6">
          {/* Core Service */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                核心服务层
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  API 代理服务
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• HTTP/HTTPS 透明代理</li>
                  <li>• 请求路由和转发</li>
                  <li>• 响应流式处理</li>
                  <li>• 错误处理和重试</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">负载均衡器</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 轮询（Round Robin）算法</li>
                  <li>• 权重分配策略</li>
                  <li>• 健康检查机制</li>
                  <li>• 故障自动切换</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Layer */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Layers className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                管理服务层
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Web 管理界面
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Vue 3 + TypeScript</li>
                  <li>• Naive UI 组件库</li>
                  <li>• 实时监控面板</li>
                  <li>• 配置管理界面</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">REST API</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 密钥管理接口</li>
                  <li>• 统计数据接口</li>
                  <li>• 系统配置接口</li>
                  <li>• 监控指标接口</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                数据存储层
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  MySQL 数据库
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 密钥和配置持久化</li>
                  <li>• 用户认证数据</li>
                  <li>• 历史统计记录</li>
                  <li>• 系统日志存储</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Redis 缓存</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 密钥状态缓存</li>
                  <li>• 限流计数器</li>
                  <li>• 分布式锁机制</li>
                  <li>• 会话状态管理</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">数据流向</h2>

        <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">
                1
              </div>
              <div className="flex-1">
                <span className="font-semibold">客户端请求</span> → API 网关接收
                OpenAI 兼容请求
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded text-sm font-semibold">
                2
              </div>
              <div className="flex-1">
                <span className="font-semibold">密钥选择</span> →
                负载均衡器选择可用的 API 密钥
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white px-3 py-1 rounded text-sm font-semibold">
                3
              </div>
              <div className="flex-1">
                <span className="font-semibold">请求转发</span> →
                代理服务转发请求到 OpenAI API
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                4
              </div>
              <div className="flex-1">
                <span className="font-semibold">响应处理</span> →
                流式响应处理并返回给客户端
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                5
              </div>
              <div className="flex-1">
                <span className="font-semibold">数据记录</span> →
                统计数据和日志记录到数据库
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Architectures */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">部署架构</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              单机部署
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-green-900 mb-2">适用场景</h4>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• 中小规模应用</li>
                <li>• 开发测试环境</li>
                <li>• 个人项目使用</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              集群部署
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-900 mb-2">适用场景</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• 大规模生产环境</li>
                <li>• 高可用性要求</li>
                <li>• 企业级应用</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">技术栈</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-4">后端技术</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800 text-sm">Go 1.23+</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800 text-sm">Gin Web 框架</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800 text-sm">GORM ORM</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-800 text-sm">Go-Redis</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-4">前端技术</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-800 text-sm">Vue 3</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-800 text-sm">TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-800 text-sm">Naive UI</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-800 text-sm">Vite</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-4">基础设施</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-800 text-sm">MySQL 8.2+</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-800 text-sm">Redis</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-800 text-sm">Docker</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-purple-800 text-sm">Nginx</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">设计原则</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <GitBranch className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">高性能</h3>
                <p className="text-gray-600 text-sm">
                  基于 Go 语言的高并发处理能力，支持数千 QPS 的请求处理
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">高可用</h3>
                <p className="text-gray-600 text-sm">
                  故障自动切换、健康检查和分布式部署保障服务可用性
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Layers className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">可扩展</h3>
                <p className="text-gray-600 text-sm">
                  模块化设计和微服务架构，支持水平扩展和功能扩展
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Globe className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">透明代理</h3>
                <p className="text-gray-600 text-sm">
                  完全兼容 OpenAI API，无需修改现有代码即可接入
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
