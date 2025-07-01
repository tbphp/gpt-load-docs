import { Package, Play, Settings, Monitor } from "lucide-react";

export default function DockerPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Docker 部署</h1>
        <p className="text-xl text-gray-600">
          使用 Docker 快速部署 GPT-Load，适合各种环境和生产需求
        </p>
      </div>

      {/* Quick Start */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Play className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">快速开始</h2>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-2">
            🐳 为什么选择 Docker？
          </h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• 环境一致性，避免&ldquo;在我机器上能运行&rdquo;的问题</li>
            <li>• 简化部署流程，一键启动</li>
            <li>• 易于扩展和管理</li>
            <li>• 支持容器编排（Docker Swarm、Kubernetes）</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              1. 拉取最新镜像
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 拉取最新版本
docker pull ghcr.io/tbphp/gpt-load:latest

# 查看镜像信息
docker images ghcr.io/tbphp/gpt-load`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              2. 准备配置文件
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 创建密钥文件
echo "sk-your-openai-key-1" > keys.txt
echo "sk-your-openai-key-2" >> keys.txt
echo "sk-your-openai-key-3" >> keys.txt

# 创建日志目录（可选）
mkdir -p logs

# 验证文件内容
cat keys.txt`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              3. 启动容器
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 基础启动
docker run -d \\
  --name gpt-load \\
  -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  ghcr.io/tbphp/gpt-load:latest

# 带环境变量启动
docker run -d \\
  --name gpt-load \\
  -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  -v $(pwd)/logs:/app/logs \\
  -e LOG_LEVEL=info \\
  -e MAX_CONCURRENT_REQUESTS=100 \\
  -e ENABLE_CORS=true \\
  ghcr.io/tbphp/gpt-load:latest`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Docker Compose */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg">
            <Package className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Docker Compose 部署
          </h2>
        </div>

        <p className="text-gray-600 mb-6">
          推荐使用 Docker Compose 进行生产环境部署，便于管理和维护。
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              创建 docker-compose.yml
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`version: '3.8'

services:
  gpt-load:
    image: ghcr.io/tbphp/gpt-load:latest
    container_name: gpt-load
    restart: unless-stopped
    ports:
      - "3000:3000"
    volumes:
      - ./keys.txt:/app/keys.txt:ro
      - ./logs:/app/logs
      - ./.env:/app/.env:ro
    environment:
      - LOG_LEVEL=info
      - LOG_ENABLE_FILE=true
      - LOG_FILE_PATH=/app/logs/app.log
      - MAX_CONCURRENT_REQUESTS=100
      - ENABLE_CORS=true
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    networks:
      - gpt-load-network

networks:
  gpt-load-network:
    driver: bridge`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              管理命令
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f

# 查看服务状态
docker-compose ps

# 重启服务
docker-compose restart

# 停止服务
docker-compose down

# 更新镜像
docker-compose pull
docker-compose up -d`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Configuration */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Settings className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">高级配置</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              多实例负载均衡
            </h3>
            <p className="text-gray-600 mb-4">
              在高并发场景下，可以运行多个 GPT-Load 实例：
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`version: '3.8'

services:
  gpt-load-1:
    image: ghcr.io/tbphp/gpt-load:latest
    restart: unless-stopped
    volumes:
      - ./keys.txt:/app/keys.txt:ro
    environment:
      - PORT=3000
      - START_INDEX=0

  gpt-load-2:
    image: ghcr.io/tbphp/gpt-load:latest
    restart: unless-stopped
    volumes:
      - ./keys.txt:/app/keys.txt:ro
    environment:
      - PORT=3000
      - START_INDEX=1

  nginx:
    image: nginx:alpine
    ports:
      - "3000:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - gpt-load-1
      - gpt-load-2`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              自定义镜像构建
            </h3>
            <p className="text-gray-600 mb-4">
              如果需要自定义配置，可以基于官方镜像构建：
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# Dockerfile
FROM ghcr.io/tbphp/gpt-load:latest

# 复制自定义配置
COPY keys.txt /app/keys.txt
COPY .env /app/.env

# 设置默认环境变量
ENV LOG_LEVEL=info
ENV MAX_CONCURRENT_REQUESTS=100

EXPOSE 3000

# 构建镜像
docker build -t my-gpt-load .

# 运行自定义镜像
docker run -d -p 3000:3000 my-gpt-load`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Monitor className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">监控和日志</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              容器监控
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 查看容器状态
docker ps

# 查看容器资源使用
docker stats gpt-load

# 查看容器日志
docker logs gpt-load

# 实时查看日志
docker logs -f gpt-load

# 进入容器
docker exec -it gpt-load sh`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              健康检查
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# 检查健康状态
curl http://localhost:3000/health

# 查看统计信息
curl http://localhost:3000/stats

# 查看黑名单
curl http://localhost:3000/blacklist

# 重置密钥状态
curl http://localhost:3000/reset-keys`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 mb-4">
          常见问题排查
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-yellow-900 mb-2">容器启动失败</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>
                • 检查端口是否被占用：
                <code className="bg-yellow-100 px-1 rounded">
                  netstat -tlnp | grep 3000
                </code>
              </li>
              <li>• 验证密钥文件路径和权限</li>
              <li>
                • 查看容器日志：
                <code className="bg-yellow-100 px-1 rounded">
                  docker logs gpt-load
                </code>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-yellow-900 mb-2">性能问题</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>
                • 适当调整{" "}
                <code className="bg-yellow-100 px-1 rounded">
                  MAX_CONCURRENT_REQUESTS
                </code>
              </li>
              <li>
                • 监控容器资源使用：
                <code className="bg-yellow-100 px-1 rounded">docker stats</code>
              </li>
              <li>• 考虑运行多个实例进行负载均衡</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-yellow-900 mb-2">网络问题</h4>
            <ul className="text-yellow-800 text-sm space-y-1">
              <li>• 检查防火墙设置</li>
              <li>• 验证 Docker 网络配置</li>
              <li>• 确保上游 API 地址可访问</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
