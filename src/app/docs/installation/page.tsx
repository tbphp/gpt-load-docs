import { Settings, Server, CheckCircle, AlertCircle } from "lucide-react";
export default function InstallationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">安装部署</h1>
        <p className="text-xl text-gray-600">
          GPT-Load 支持多种部署方式，推荐使用 Docker Compose 进行快速部署
        </p>
      </div>
      {/* System Requirements */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">系统要求</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <CheckCircle className="h-6 w-6 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              Docker 部署（推荐）
            </h3>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>• Docker 20.10+</li> <li>• Docker Compose 2.0+</li>
              <li>• 0.5GB+ 内存</li> <li>• 2GB+ 磁盘空间</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <Server className="h-6 w-6 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              源码部署
            </h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• Go 1.23+</li> <li>• MySQL 8.2+</li> <li>• Redis（可选）</li>
              <li>• 4GB+ 内存</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Docker Compose Deployment */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Docker Compose 部署
        </h2>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900">推荐部署方式</h4>
              <p className="text-yellow-800 text-sm">
                包含完整的 MySQL 数据库和 Redis 缓存，适合生产环境使用
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">克隆项目</h3>
            </div>
            <p className="text-gray-600 mb-4">从 GitHub 获取完整的项目代码</p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`git clone https://github.com/tbphp/gpt-load.git\ncd gpt-load`}</code>
              </pre>
            </div>
          </div>
          {/* Step 2 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">配置环境</h3>
            </div>
            <p className="text-gray-600 mb-4">复制并编辑环境配置文件</p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 复制环境配置文件\ncp .env.example .env\n\n# 编辑配置文件\nvim .env`}</code>
              </pre>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">
                主要配置项说明：
              </h4>
              <div className="space-y-2 text-sm">
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-mono text-gray-700">APP_PORT</span>
                  <span className="text-gray-600">服务端口</span>
                  <span className="text-gray-500">默认: 3001</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <span className="font-mono text-gray-700">APP_SECRET</span>
                  <span className="text-gray-600">认证密钥</span>
                  <span className="text-gray-500">必须设置</span>
                </div>
              </div>
            </div>
          </div>
          {/* Step 3 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">启动服务</h3>
            </div>
            <p className="text-gray-600 mb-4">
              使用 Docker Compose 一键启动所有服务
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 启动服务（包含 MySQL 和 Redis）\ndocker compose up -d\n\n# 查看服务状态\ndocker compose ps\n\n# 查看日志\ndocker compose logs -f\n\n# 重启服务\ndocker compose restart gpt-load\n\n更新到最新版\ndocker compose pull && docker compose down && docker compose up -d`}</code>
              </pre>
            </div>
          </div>
          {/* Step 4 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 font-semibold rounded-full text-sm">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900">访问服务</h3>
            </div>
            <p className="text-gray-600 mb-4">服务启动后可通过以下地址访问</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">管理界面</h4>
                <p className="text-blue-800 text-sm">http://localhost:3001</p>
                <p className="text-gray-800 text-sm">
                  默认认证Key：<code>sk-123456</code>
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-900 mb-2">API 接口</h4>
                <p className="text-green-800 text-sm">
                  http://localhost:3001/api
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Source Code Deployment */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">源码部署</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Settings className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">开发环境部署</h4>
              <p className="text-blue-800 text-sm">
                适合开发调试，需要自行准备 MySQL 和 Redis 环境
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`# 1. 克隆代码\ngit clone https://github.com/tbphp/gpt-load.git\ncd gpt-load\n\n# 2. 安装依赖\ngo mod download\n\n# 3. 配置环境\ncp .env.example .env\n# 编辑 .env 文件，配置数据库连接信息\n\n# 4. 启动服务\nmake run`}</code>
            </pre>
          </div>
        </div>
      </div>
      {/* Production Deployment */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          生产环境部署
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              单机部署
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• 使用 Docker Compose</li> <li>• 适合中小规模应用</li>
              <li>• 简单易维护</li> <li>• 包含完整数据库</li>
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              集群部署
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Master/Slave 架构</li> <li>• 水平扩展支持</li>
              <li>• 高可用性保障</li> <li>• 需要外部数据库</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-900 mb-2">
            生产环境注意事项：
          </h4>
          <ul className="text-yellow-800 space-y-1 text-sm">
            <li>• 修改默认的 AUTH_KEY 密钥</li>
            <li>• 配置合适的并发数</li>
            <li>• 定期备份数据库</li>
          </ul>
        </div>
      </div>
      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">常见问题</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">端口冲突</h4>
            <p className="text-gray-600 text-sm">
              如果 3001 端口被占用，可以修改 .env 文件中的 APP_PORT 配置
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">数据库连接失败</h4>
            <p className="text-gray-600 text-sm">
              检查 MySQL 服务是否正常启动，确认 .env 文件中的数据库配置正确
            </p>
          </div>
        </div>
      </div>
      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">部署完成！</h2>
        <p className="text-blue-100 mb-6">
          服务启动后，您可以通过管理界面进行配置和监控
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/docs/configuration"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            查看配置说明
          </a>
          <a
            href="/docs/cluster"
            rel="noopener noreferrer"
            className="inline-flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            查看集群部署
          </a>
        </div>
      </div>
    </div>
  );
}
