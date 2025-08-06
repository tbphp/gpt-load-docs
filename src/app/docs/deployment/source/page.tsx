import {
  Code,
  GitBranch,
  Settings,
  CheckCircle,
  AlertTriangle,
  Download,
  Play,
  Wrench,
} from "lucide-react";

export default function SourcePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">源码部署</h1>
        <p className="text-xl text-gray-600">
          通过源码构建和部署
          GPT-Load，适合开发者进行功能定制和调试。提供完全的控制权和灵活性。
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">环境要求</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Code className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">开发环境</h4>
              <p className="text-blue-800 text-sm">
                需要本地安装 Go 开发环境和相关工具链
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              必需软件
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Go 1.23+ 开发环境</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Git 版本控制工具</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Make 构建工具</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>数据库服务（MySQL/PostgreSQL/SQLite）</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              可选软件
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>Redis 缓存服务</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>Node.js 和 npm（前端开发）</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>Docker（容器化测试）</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span>IDE 或编辑器（VS Code/GoLand）</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">安装步骤</h2>

        <div className="space-y-8">
          {/* Step 1: Clone Repository */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  克隆源码
                </h3>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                从 GitHub 克隆 GPT-Load 源码仓库：
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                <code className="text-sm">
                  git clone https://github.com/tbphp/gpt-load.git
                  <br />
                  cd gpt-load
                </code>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>提示：</strong>如果需要特定版本，可以使用
                <code className="bg-gray-100 px-1 rounded mx-1">
                  git checkout v1.x.x
                </code>
                切换到对应版本标签
              </p>
            </div>
          </div>

          {/* Step 2: Install Dependencies */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  安装依赖
                </h3>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-2">下载并安装 Go 模块依赖：</p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                <code className="text-sm">go mod tidy</code>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-yellow-800 text-sm">
                    <strong>注意：</strong>
                    确保网络连接正常，某些依赖可能需要从海外服务器下载
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Database Setup */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  数据库配置
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  创建配置文件
                </h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">cp .env.example .env</code>
                </div>
                <p className="text-gray-600 text-sm">
                  复制示例配置文件并根据你的环境进行修改
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  数据库连接配置
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 text-sm mb-1">
                      SQLite（推荐用于开发）：
                    </p>
                    <div className="bg-gray-100 p-2 rounded text-sm">
                      <code>DATABASE_DSN=./data/gpt-load.db</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 text-sm mb-1">MySQL：</p>
                    <div className="bg-gray-100 p-2 rounded text-sm">
                      <code>
                        DATABASE_DSN=root:123456@tcp(mysql:3306)/gpt-load?charset=utf8mb4&parseTime=True&loc=Local
                      </code>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 text-sm mb-1">PostgreSQL：</p>
                    <div className="bg-gray-100 p-2 rounded text-sm">
                      <code>
                        DATABASE_DSN=postgres://postgres:123456@postgres:5432/gpt-load?sslmode=disable
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Build and Run */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">4</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  构建运行
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">构建前端</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">
                    cd web && npm install && npm run build
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  运行后端开发服务
                </h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">go run main.go</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  运行前端开发服务
                </h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">cd web && npm run dev</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Guide */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">开发指南</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              项目结构
            </h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div
                className="font-mono text-sm text-gray-700"
                style={{ lineHeight: "18px" }}
              >
                <div>gpt-load/</div>
                <div>&nbsp;&nbsp;├── internal/ # 内部业务逻辑</div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── app/ # 应用初始化
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── channel/ #
                  渠道类型管理
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── config/ # 配置管理
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── container/ #
                  dig容器服务管理
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── db/ #
                  DB初始化及迁移脚本
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── errors/ # 错误信息
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── handler/ #
                  管理端API接口
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── httpclient/ #
                  HTTP客户端封装
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── keypool/ # 密钥池管理
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── middleware/ # 中间件
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── models/ # 数据模型
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── proxy/ # 代理服务
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── response/ # 响应封装
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── router/ # 路由
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── services/ #
                  逻辑服务层
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── store/ # 统一内存
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── syncer/ # 集群同步器
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── types/ # 类型定义
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── utils/ # 工具函数
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── version/ # 版本常量
                </div>
                <div>&nbsp;&nbsp;├── web/ # 前端资源</div>
                <div>&nbsp;&nbsp;├── go.mod # Go 模块定义</div>
                <div>&nbsp;&nbsp;├── .env.example # 配置示例</div>
                <div>&nbsp;&nbsp;├── docker-compose.yml # 配置示例</div>
                <div>&nbsp;&nbsp;├── Dockerfile # 配置示例</div>
                <div>&nbsp;&nbsp;├── Makefile # 构建规则</div>
                <div>&nbsp;&nbsp;└── main.go # 入口程序</div>
              </div>
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
                <h4 className="font-semibold text-gray-800">Go 版本过低</h4>
                <p className="text-gray-600 text-sm mb-2">
                  错误信息：
                  <code className="bg-gray-100 px-1 rounded">
                    go version go1.xx.x: minimum supported version is go1.23
                  </code>
                </p>
                <p className="text-gray-600 text-sm">
                  解决方案：升级 Go 版本到 1.23 或更高版本
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">依赖下载失败</h4>
                <p className="text-gray-600 text-sm mb-2">
                  可能的原因：网络连接问题或代理设置
                </p>
                <div className="bg-gray-100 p-2 rounded text-sm">
                  <code>
                    # 设置 Go 代理
                    <br />
                    go env -w GOPROXY=https://goproxy.cn,direct
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">下一步</h2>
        <p className="text-gray-700 mb-6">源码部署完成后，您可以：</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>深入了解代码结构，进行功能定制</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>参与开源项目，提交 Pull Request</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>构建自定义 Docker 镜像</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>集成到 CI/CD 流程中</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            配置说明
          </a>
          <a
            href="/docs/architecture-design"
            className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Wrench className="h-4 w-4 mr-2" />
            系统架构
          </a>
        </div>
      </div>
    </div>
  );
}
