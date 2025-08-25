import { Zap, CheckCircle } from "lucide-react";

export default function QuickStartPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">快速开始</h1>
        <p className="text-xl text-gray-600">
          通过以下步骤快速启动和运行 GPT-Load。
        </p>
      </div>

      {/* Quick Start Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">快速启动</h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Zap className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900">轻量化部署</h4>
              <p className="text-green-800 text-sm">
                使用 SQLite 数据库和内存存储，最适合个人使用和快速体验
              </p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">环境要求</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Docker 20.10+ 和 Docker Compose</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Linux/macOS/Windows 操作系统</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>至少 128MB 内存和 1GB 磁盘空间</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">安装步骤</h3>

          {/* Security Warning - High Priority */}
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-red-600 text-2xl">🚨</div>
              <div>
                <h4 className="text-lg font-bold text-red-800 mb-2">
                  重要安全提醒
                </h4>
                <div className="text-red-700 space-y-2">
                  <p className="font-semibold">
                    在部署之前，您必须修改默认的管理密钥！
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 使用至少 20 个字符的复杂密钥</li>
                    <li>• 包含大小写字母、数字和特殊字符</li>
                    <li>
                      • 绝不使用{" "}
                      <code className="bg-red-200 px-1 rounded">sk-123456</code>{" "}
                      等默认或简单密钥
                    </li>
                    <li>• 生产环境中使用弱密钥将面临严重安全风险</li>
                  </ul>
                  <p className="text-sm font-medium bg-red-100 p-2 rounded">
                    建议密钥格式：<code>sk-prod-[随机字符串32位]</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  创建工作目录
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # 创建目录并进入
                  <br />
                  mkdir -p gpt-load && cd gpt-load
                </code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  下载配置文件
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # 下载 Docker Compose 配置
                  <br />
                  wget
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/docker-compose.yml
                  <br />
                  <br />
                  # 下载环境变量配置
                  <br />
                  wget -O .env
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/.env.example
                </code>
              </div>

              {/* Security configuration step */}
              <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <div className="text-orange-600 text-lg">🔐</div>
                  <div>
                    <h5 className="font-semibold text-orange-800 mb-2">
                      立即修改安全配置
                    </h5>
                    <p className="text-orange-700 text-sm mb-2">
                      编辑{" "}
                      <code className="bg-orange-200 px-1 rounded">.env</code>{" "}
                      文件，将以下内容：
                    </p>
                    <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs mb-2">
                      <code>AUTH_KEY=sk-123456</code>
                    </div>
                    <p className="text-orange-700 text-sm mb-2">
                      修改为强密钥：
                    </p>
                    <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs">
                      <code>
                        AUTH_KEY=sk-prod-your-strong-random-key-32-chars
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  启动服务
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # 启动 GPT-Load 服务
                  <br />
                  docker compose up -d
                </code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600 font-semibold">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  验证部署
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">访问管理界面：</p>
                  <a
                    href="http://localhost:3001"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://localhost:3001
                  </a>
                </div>
                <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                  <p className="text-green-800 text-sm">
                    使用您在{" "}
                    <code className="bg-green-200 px-1 rounded">.env</code>{" "}
                    文件中设置的
                    <code className="bg-green-200 px-1 rounded">
                      AUTH_KEY
                    </code>{" "}
                    登录管理界面
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Commands */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">常用命令</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">查看状态</h4>
              <code className="text-sm text-gray-700">docker compose ps</code>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">查看日志</h4>
              <code className="text-sm text-gray-700">
                docker compose logs -f
              </code>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">重启服务</h4>
              <code className="text-sm text-gray-700">
                docker compose down && docker compose up -d
              </code>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">更新版本</h4>
              <code className="text-sm text-gray-700">
                docker compose pull && docker compose down && docker compose up
                -d
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <p className="text-gray-700">
          想了解更多部署选项，例如使用 MySQL/PostgreSQL
          或进行集群部署吗？请查看完整的{" "}
          <a href="/docs/deployment" className="text-blue-600 hover:underline">
            <strong>部署指南</strong>
          </a>
          。
        </p>
      </div>
    </div>
  );
}
