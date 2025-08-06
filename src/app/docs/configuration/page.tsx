import { ArrowRight, Layers, CheckCircle, AlertTriangle } from "lucide-react";

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

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">最佳实践</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
              配置管理建议
            </h3>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>
                • <strong>统一管理</strong>：建议使用平台的 Web
                界面进行集中管理，以确保一致性。
              </li>
              <li>
                • <strong>定期审计</strong>
                ：定期审查配置，移除不再使用的参数，确保系统整洁。
              </li>
              <li>
                • <strong>版本控制</strong>
                ：对于重要的配置变更，建议在版本控制系统中记录，便于追踪和回滚。
              </li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
              注意事项
            </h3>
            <ul className="text-yellow-800 space-y-2 text-sm">
              <li>
                • <strong>敏感信息</strong>：切勿在项目配置中存储密码、API
                密钥等敏感信息，应使用环境变量。
              </li>
              <li>
                • <strong>谨慎热更新</strong>
                ：热更新功能强大，但需谨慎使用，避免在生产环境中引入意外行为。
              </li>
              <li>
                • <strong>性能影响</strong>
                ：频繁的配置变更可能对系统性能产生轻微影响，建议在低峰期操作。
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">深入了解</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/docs/configuration/environment"
            className="block bg-blue-50 hover:bg-blue-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              环境配置
            </h3>
            <p className="text-blue-700">
              查看通过环境变量或 .env 文件进行的基础设施级别配置。
            </p>
          </a>
          <a
            href="/docs/configuration/project"
            className="block bg-orange-50 hover:bg-orange-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              项目配置
            </h3>
            <p className="text-orange-700">
              探索通过数据库管理的系统级和分组级动态配置。
            </p>
          </a>
          <a
            href="/docs/configuration/cloudflare-aigateway"
            className="block bg-cyan-50 hover:bg-cyan-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-cyan-900 mb-2">
              Cloudflare AI Gateway
            </h3>
            <p className="text-cyan-700">
              配置 Cloudflare AI Gateway 作为上游代理，优化 AI 服务性能。
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
