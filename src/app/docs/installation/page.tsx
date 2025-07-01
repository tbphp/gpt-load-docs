import { Server, Settings, Play } from "lucide-react";

export default function InstallationPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">安装部署</h1>
        <p className="text-xl text-gray-600">
          GPT-Load 支持多种部署方式，选择最适合您环境的方式快速开始
        </p>
      </div>

      {/* Docker deployment */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Server className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Docker 部署（推荐）
          </h2>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">✅ 推荐理由</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• 环境隔离，避免依赖冲突</li>
            <li>• 一键部署，简单快捷</li>
            <li>• 支持容器编排和扩展</li>
            <li>• 生产环境首选方案</li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-4">快速开始</h3>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">1. 拉取镜像</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>docker pull ghcr.io/tbphp/gpt-load:latest</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">2. 创建密钥文件</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 每行一个 API 密钥
echo "sk-your-openai-key-1" > keys.txt
echo "sk-your-openai-key-2" >> keys.txt
echo "sk-your-openai-key-3" >> keys.txt`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">3. 启动容器</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`docker run -d \\
  --name gpt-load \\
  -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  ghcr.io/tbphp/gpt-load:latest`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">4. 验证服务</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 检查健康状态
curl http://localhost:3000/health

# 查看统计信息
curl http://localhost:3000/stats`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-900 mb-2">🎉 部署完成！</h4>
          <p className="text-green-800 text-sm">
            您的 GPT-Load 服务现在运行在{" "}
            <code className="bg-green-100 px-1 rounded">
              http://localhost:3000
            </code>
          </p>
        </div>
      </div>

      {/* Docker Compose */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          使用 Docker Compose
        </h3>

        <p className="text-gray-600 mb-4">
          对于生产环境或需要持久化配置的场景，推荐使用 Docker Compose：
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">
              创建 docker-compose.yml
            </h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`version: '3.8'

services:
  gpt-load:
    image: ghcr.io/tbphp/gpt-load:latest
    container_name: gpt-load
    ports:
      - "3000:3000"
    volumes:
      - ./keys.txt:/app/keys.txt:ro
      - ./logs:/app/logs
    environment:
      - LOG_LEVEL=info
      - MAX_CONCURRENT_REQUESTS=100
      - ENABLE_CORS=true
    restart: unless-stopped`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">启动服务</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Environment variables */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Settings className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">环境变量配置</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  变量名
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  默认值
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  说明
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  PORT
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">3000</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  服务器监听端口
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  KEYS_FILE
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">keys.txt</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  API 密钥文件路径
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  OPENAI_BASE_URL
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  https://api.openai.com
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  上游 API 地址
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  MAX_CONCURRENT_REQUESTS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">100</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  最大并发请求数
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Testing */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg">
            <Play className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">测试服务</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">健康检查</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`curl http://localhost:3000/health

# 响应示例
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z",
  "uptime": "1h30m45s"
}`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">发送测试请求</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`curl -X POST http://localhost:3000/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer sk-your-api-key" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "messages": [
      {"role": "user", "content": "Hello, world!"}
    ]
  }'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">下一步</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">配置优化</h4>
            <p className="text-gray-600 text-sm mb-2">
              了解如何优化 GPT-Load 的配置以获得最佳性能
            </p>
            <a
              href="/docs/configuration"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              查看配置指南 →
            </a>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">生产部署</h4>
            <p className="text-gray-600 text-sm mb-2">
              学习如何在生产环境中安全、稳定地部署 GPT-Load
            </p>
            <a
              href="/docs/deployment"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              查看部署指南 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
