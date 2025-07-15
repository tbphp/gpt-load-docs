export default function ArchitecturePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">架构设计</h1>
      <p className="text-xl text-gray-600 mb-8">
        深入了解 GPT-Load 的系统架构设计与技术实现
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            系统架构概览
          </h2>
          <div className="prose max-w-none text-gray-600 mb-6">
            <p>
              GPT-Load
              采用现代化的分布式架构设计，以高性能、高可用性和可扩展性为核心设计目标。
              系统基于 Go 1.23+ 开发，使用 MySQL 8.2 作为主要数据存储，Redis
              作为缓存和分布式锁协调服务， 前端采用 Vue 3 + TypeScript
              构建现代化管理界面。
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              核心架构特性
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 分布式协调: 基于 Redis 的 Leader/Follower 选举机制</li>
              <li>
                • 三层配置系统: 环境变量 → 系统设置 → 分组配置的优先级体系
              </li>
              <li>• 渠道工厂模式: 可插拔的渠道架构，支持 OpenAI 和 Gemini</li>
              <li>• 高性能代理: 基于 Gin 框架的高性能 HTTP 代理</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            技术栈组成
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                后端技术
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Go 1.23+</li>
                <li>• Gin Web Framework</li>
                <li>• GORM ORM</li>
                <li>• Uber Dig (依赖注入)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                数据存储
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• MySQL 8.2 (主要数据)</li>
                <li>• Redis (缓存和分布式锁)</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                前端技术
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Vue 3</li>
                <li>• TypeScript</li>
                <li>• Naive UI</li>
                <li>• Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            分层架构
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                分布式协调层
              </h3>
              <p className="text-gray-600 mb-3">
                负责集群节点之间的协调和同步，确保数据一致性和高可用性。
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Leader Service - Leader 选举服务</li>
                <li>• Cache Syncer - 缓存同步服务</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                接入层
              </h3>
              <p className="text-gray-600 mb-3">
                处理所有入站请求，提供路由、中间件和请求处理功能。
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Router - 路由层</li>
                <li>• Middleware - 中间件层</li>
                <li>• Proxy Handler - 代理处理器</li>
                <li>• API Handler - 管理 API 处理器</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                业务逻辑层
              </h3>
              <p className="text-gray-600 mb-3">
                核心业务逻辑实现，包括密钥管理、配置管理等核心功能。
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Channel Factory - 渠道工厂</li>
                <li>• Key Service - 密钥服务</li>
                <li>• Group Service - 分组服务</li>
                <li>• Config Manager - 配置管理器</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                渠道实现层
              </h3>
              <p className="text-gray-600 mb-3">
                具体的 AI 服务渠道实现，支持不同的 API 协议转换。
              </p>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• OpenAI Channel - OpenAI 渠道实现</li>
                <li>• Gemini Channel - Google Gemini 渠道实现</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            架构优势
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🏗️ 微服务架构
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 模块化设计: 清晰的层次结构和模块边界</li>
                <li>• 依赖注入: 松耦合的组件关系</li>
                <li>• 接口驱动: 基于接口的设计模式</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🔄 分布式设计
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Leader/Follower 模式: 支持多实例部署</li>
                <li>• 分布式锁: 基于 Redis 的分布式同步</li>
                <li>• 缓存同步: 自动的配置和数据同步</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🛡️ 高可用性
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 优雅降级: Redis 不可用时自动切换到内存模式</li>
                <li>• 故障恢复: 自动重试和错误恢复机制</li>
                <li>• 资源保护: 完善的资源清理和内存管理</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📈 可扩展性
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• 水平扩展: 无状态设计支持多实例部署</li>
                <li>• 插件架构: 支持新的 AI 服务渠道</li>
                <li>• 配置扩展: 灵活的配置管理系统</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
