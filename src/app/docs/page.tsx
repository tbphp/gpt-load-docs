import { Rocket, Github, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">GPT-Load 文档</h1>
        <p className="text-xl text-gray-600">
          学习如何使用 GPT-Load 为您的 AI 应用提供高性能的 API 代理服务
        </p>
      </div>

      {/* Quick start */}
      <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg p-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Rocket className="h-8 w-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              快速开始
            </h2>
            <p className="text-gray-600 mb-4">
              只需几分钟就能部署 GPT-Load，开始为您的应用提供稳定的 AI API
              服务。
            </p>
            <Link
              href="/docs/installation"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <span>立即开始</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Installation */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">安装部署</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Docker */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Docker 部署（推荐）
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 拉取镜像
docker pull ghcr.io/tbphp/gpt-load:latest

# 创建密钥文件
echo "sk-your-api-key" > keys.txt

# 启动服务
docker run -d -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  ghcr.io/tbphp/gpt-load:latest`}</code>
              </pre>
            </div>
            <Link
              href="/docs/docker"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              查看详细说明 →
            </Link>
          </div>

          {/* Source */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              源码构建
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 克隆项目
git clone https://github.com/tbphp/gpt-load.git
cd gpt-load

# 构建运行
go mod tidy
make build
make run`}</code>
              </pre>
            </div>
            <Link
              href="/docs/build"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              查看构建指南 →
            </Link>
          </div>
        </div>
      </div>

      {/* Key features */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">核心功能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">多密钥轮询</h3>
            <p className="text-gray-600 text-sm">
              自动轮换 API 密钥，避免单一密钥限流问题
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">负载均衡</h3>
            <p className="text-gray-600 text-sm">
              支持多个上游 API 服务，智能分发请求
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">错误处理</h3>
            <p className="text-gray-600 text-sm">
              智能区分永久和临时错误，自动重试和故障转移
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">实时监控</h3>
            <p className="text-gray-600 text-sm">
              详细的统计信息和健康检查接口
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">高性能</h3>
            <p className="text-gray-600 text-sm">
              基于 Go 语言，支持高并发和零拷贝流式传输
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">生产就绪</h3>
            <p className="text-gray-600 text-sm">
              完善的配置选项，支持企业级部署需求
            </p>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <BookOpen className="h-8 w-8 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">学习指南</h3>
          <p className="text-gray-600 mb-4">
            从基础配置到高级优化，全面掌握 GPT-Load 的使用方法。
          </p>
          <div className="space-y-2">
            <Link
              href="/docs/configuration"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              配置指南
            </Link>
            <Link
              href="/docs/examples"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              使用示例
            </Link>
            <Link
              href="/docs/deployment"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              部署指南
            </Link>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <Github className="h-8 w-8 text-gray-900 mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">开源社区</h3>
          <p className="text-gray-600 mb-4">
            加入我们的开源社区，参与项目开发，获得技术支持。
          </p>
          <div className="space-y-2">
            <Link
              href="https://github.com/tbphp/gpt-load"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              GitHub 仓库
            </Link>
            <Link
              href="https://github.com/tbphp/gpt-load/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              问题反馈
            </Link>
            <Link
              href="https://github.com/tbphp/gpt-load/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
            >
              社区讨论
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
