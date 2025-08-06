import { Zap, Database, Shield, Settings, CheckCircle } from "lucide-react";

export default function StandalonePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">单机部署</h1>
        <p className="text-xl text-gray-600">
          单机部署是 GPT-Load
          最简单的部署方式，适合个人用户和小团队快速上手。支持从轻量化快速启动到完整功能的可选部署。
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
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    默认管理密钥：
                    <code className="bg-yellow-100 px-1 rounded">
                      sk-123456
                    </code>
                    （用于登录管理界面）
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

      {/* Optional Deployment Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">可选部署</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Database className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">增强性能</h4>
              <p className="text-blue-800 text-sm">
                配置 MySQL/PostgreSQL 数据库和 Redis 缓存，提升系统性能和可靠性
              </p>
            </div>
          </div>
        </div>

        {/* Database Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            数据库配置
          </h3>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                MySQL 配置
              </h4>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  1. 编辑{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    docker-compose.yml
                  </code>
                  ，取消 MySQL 服务的注释：
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
                    &nbsp;&nbsp;depends_on:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;mysql:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition:
                    service_healthy
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: true
                    <br />
                    <br />
                    mysql:
                    <br />
                    &nbsp;&nbsp;image: mysql:8.2
                    <br />
                    &nbsp;&nbsp;container_name: gpt-load-mysql
                    <br />
                    &nbsp;&nbsp;restart: always
                    <br />
                    &nbsp;&nbsp;ports:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- &quot;3306:3306&quot;
                    <br />
                    &nbsp;&nbsp;environment:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;MYSQL_ROOT_PASSWORD: 123456
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;MYSQL_DATABASE: gpt-load
                    <br />
                    &nbsp;&nbsp;volumes:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- ./data/mysql:/var/lib/mysql
                    <br />
                    &nbsp;&nbsp;healthcheck:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;test: [&quot;CMD&quot;,
                    &quot;mysqladmin&quot;, &quot;ping&quot;, &quot;-h&quot;,
                    &quot;localhost&quot;]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;interval: 5s
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;timeout: 5s
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;retries: 10
                  </code>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  2. 在 <code className="bg-gray-100 px-1 rounded">.env</code>{" "}
                  文件中配置数据库连接：
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
                    DATABASE_DSN=root:123456@tcp(mysql:3306)/gpt-load?charset=utf8mb4&parseTime=True&loc=Local
                  </code>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                PostgreSQL 配置
              </h4>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  1. 编辑{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    docker-compose.yml
                  </code>
                  ，取消 PostgreSQL 服务的注释：
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
                    &nbsp;&nbsp;depends_on:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;postgres:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition:
                    service_healthy
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: true
                    <br />
                    <br />
                    postgres:
                    <br />
                    &nbsp;&nbsp;image: &quot;postgres:16&quot;
                    <br />
                    &nbsp;&nbsp;container_name: gpt-load-postgres
                    <br />
                    &nbsp;&nbsp;environment:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;POSTGRES_USER: postgres
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;POSTGRES_PASSWORD: 123456
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;POSTGRES_DB: gpt-load
                    <br />
                    &nbsp;&nbsp;ports:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- &quot;5432:5432&quot;
                    <br />
                    &nbsp;&nbsp;volumes:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;-
                    ./data/postgres:/var/lib/postgresql/data
                    <br />
                    &nbsp;&nbsp;healthcheck:
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;test: [&quot;CMD-SHELL&quot;,
                    &quot;pg_isready -U postgres -d &quot;]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;interval: 5s
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;timeout: 5s
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;retries: 10
                  </code>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">
                  2. 在 <code className="bg-gray-100 px-1 rounded">.env</code>{" "}
                  文件中配置数据库连接：
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                  <code>
                    DATABASE_DSN=postgres://postgres:123456@postgres:5432/gpt-load?sslmode=disable
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redis Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Redis 配置
          </h3>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                1. 编辑{" "}
                <code className="bg-gray-100 px-1 rounded">
                  docker-compose.yml
                </code>
                ，取消 Redis 服务的注释：
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>
                  &nbsp;&nbsp;depends_on:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;redis:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;condition: service_healthy
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restart: true
                  <br />
                  <br />
                  redis:
                  <br />
                  &nbsp;&nbsp;image: redis:latest
                  <br />
                  &nbsp;&nbsp;container_name: gpt-load-redis
                  <br />
                  &nbsp;&nbsp;restart: always
                  <br />
                  &nbsp;&nbsp;ports:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;- &quot;6379:6379&quot;
                  <br />
                  &nbsp;&nbsp;healthcheck:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;test: [&quot;CMD&quot;,
                  &quot;redis-cli&quot;, &quot;ping&quot;]
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;interval: 5s
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;timeout: 3s
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;retries: 3
                </code>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                2. 在 <code className="bg-gray-100 px-1 rounded">.env</code>{" "}
                文件中配置 Redis 连接：
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>REDIS_DSN=redis://redis:6379/0</code>
              </div>
            </div>
          </div>
        </div>

        {/* Restart Services */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            重新启动服务
          </h3>

          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">配置完成后，重新启动所有服务：</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
              <code>
                # 停止服务
                <br />
                docker compose down
                <br />
                <br />
                # 重新启动服务
                <br />
                docker compose up -d
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">故障排除</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              常见问题
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">端口冲突</h4>
                <p className="text-gray-600 text-sm mb-2">
                  如果 3001 端口被占用，可以在{" "}
                  <code className="bg-gray-100 px-1 rounded">.env</code>{" "}
                  文件中修改：
                </p>
                <div className="bg-gray-100 p-2 rounded text-sm">
                  <code>PORT=3002</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">数据库连接失败</h4>
                <p className="text-gray-600 text-sm mb-2">
                  检查数据库服务是否正常启动：
                </p>
                <div className="bg-gray-100 p-2 rounded text-sm">
                  <code>docker compose logs mysql</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">内存不足</h4>
                <p className="text-gray-600 text-sm">
                  确保系统有足够的内存资源，开发数据库服务后，建议至少 1GB
                  可用内存
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">下一步</h2>
        <p className="text-gray-700 mb-6">部署完成后，您可以：</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>配置代理密钥和管理 AI 服务分组</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>添加和管理 AI 服务商 API 密钥</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>调整系统配置和性能参数</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>开始使用 API 代理服务</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            查看配置说明
          </a>
          <a
            href="/docs/configuration/management"
            className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Shield className="h-4 w-4 mr-2" />
            管理端配置
          </a>
        </div>
      </div>
    </div>
  );
}
