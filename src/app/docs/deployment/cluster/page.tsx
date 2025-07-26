import { Layers, Server, Database, AlertTriangle } from "lucide-react";

export default function ClusterPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">集群部署</h1>
        <p className="text-xl text-gray-600">
          GPT-Load 高可用集群部署方案，支持主从架构和水平扩展
        </p>
      </div>

      {/* Cluster Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          集群架构概览
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              分布式主从架构
            </h3>
            <p className="text-gray-700 text-lg">
              采用一主多从的分布式架构，主节点负责管理功能，从节点专注代理服务，实现高可用和负载分散
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Server className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              主节点 (Master)
            </h3>
            <p className="text-gray-600 text-sm">
              Web 管理界面、配置管理、统计分析
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Layers className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">从节点 (Slave)</h3>
            <p className="text-gray-600 text-sm">
              专注 API 代理服务，支持水平扩展
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Database className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">共享存储</h3>
            <p className="text-gray-600 text-sm">统一的 MySQL 和 Redis 集群</p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">部署要求</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900">重要提示</h4>
              <p className="text-yellow-800 text-sm">
                集群部署时 数据库 和 Redis 是必需的，用于分布式协调和状态同步
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              基础设施要求
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">数据库集群</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• MySQL 8.2+ 高可用集群</li>
                  <li>• 支持主从复制或 Galera 集群</li>
                  <li>• 建议配置读写分离</li>
                  <li>• 定期备份和故障恢复机制</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">缓存集群</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Redis 集群或哨兵模式</li>
                  <li>• 用于分布式锁和状态同步</li>
                  <li>• 配置持久化和故障转移</li>
                  <li>• 监控内存使用和性能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">部署步骤</h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                准备共享基础设施
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  部署 MySQL 集群(或者PostgreSQL)
                </h4>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-700">
                    建议使用云数据库集群服务，或自行部署独立的 MySQL/PostgreSQL
                    集群。
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  部署 Redis 集群
                </h4>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-700">
                    建议使用 Redis Sentinel
                    或集群模式，确保高可用性和数据一致性。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 font-semibold rounded-full text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                节点docker-compose.yml内容参考（主从节点一致）
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`services:
  gpt-load:
    image: ghcr.io/tbphp/gpt-load:latest
    container_name: gpt-load
    ports:
      - "\${PORT:-3001}:\${PORT:-3001}"
    env_file:
      - .env
    restart: always
    volumes:
      - ./data:/app/data
    stop_grace_period: \${SERVER_GRACEFUL_SHUTDOWN_TIMEOUT:-10}s
    healthcheck:
      test: wget -q --spider -T 10 -O /dev/null http://localhost:\${PORT:-3001}/health
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  使用配置区分主从节点
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`IS_SLAVE=true`}</code>
                  </pre>
                </div>
                <p className="text-gray-800 mb-2 mt-2">
                  主节点不配置，或者配置为IS_SLAVE=false。从节点配置为IS_SLAVE=true。
                </p>
                <p className="text-gray-800 mb-2">
                  保证整个集群只有一个主节点。
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                配置负载均衡
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                使用 Nginx 或其他负载均衡器分发请求到不同的从节点
              </p>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Nginx 配置示例
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`# nginx.conf
upstream gpt_load_cluster {
    server master-node-ip:3001 weight=3;
    server slave-node1-ip:3001 weight=5;
    server slave-node2-ip:3001 weight=5;
    # 可添加更多从节点
}

server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://gpt_load_cluster;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 如果使用CF或其他代理服务，需要设置真实IP
        set_real_ip_from 0.0.0.0/0;
        real_ip_header X-Forwarded-For;
    }
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">配置管理</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              统一配置要求
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                  AUTH_KEY
                </code>
                <span className="text-gray-600 text-sm">
                  必须相同（管理端密钥）
                </span>
              </div>
              <div className="flex justify-between items-center">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                  DATABASE_DSN
                </code>
                <span className="text-gray-600 text-sm">必须相同</span>
              </div>
              <div className="flex justify-between items-center">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                  REDIS_DSN
                </code>
                <span className="text-gray-600 text-sm">必须相同</span>
              </div>
              <div className="flex justify-between items-center">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                  IS_SLAVE
                </code>
                <span className="text-gray-600 text-sm">从节点为 true</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              动态配置同步
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• 系统设置存储在 MySQL 中自动同步</li>
              <li>• 分组配置实时推送到所有节点</li>
              <li>• 密钥状态通过 Redis 实时共享</li>
              <li>• 配置变更无需重启服务</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monitoring and Maintenance */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          监控与运维
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              健康检查
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  节点健康状态
                </h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-sm">
                    <code>{`# 检查节点状态
curl http://node:3001/health

# 响应示例
{
  "status": "healthy",
  "timestamp": "2025-07-15T12:56:00Z",
  "uptime": "11.822967ms"
}`}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  集群状态监控
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 监控各节点请求量和响应时间</li>
                  <li>• 检查数据库和 Redis 连接状态</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              扩容与缩容
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">水平扩容</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 按需增加从节点数量</li>
                  <li>• 更新负载均衡器配置</li>
                  <li>• 新节点自动同步配置</li>
                  <li>• 无缝接入现有服务</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">优雅下线</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 从负载均衡器移除节点</li>
                  <li>• 等待现有请求处理完成</li>
                  <li>• 发送停止信号给容器</li>
                  <li>• 清理相关资源和日志</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">最佳实践</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">✅ 推荐做法</h3>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>• 使用容器编排工具 (Docker Swarm/K8s)</li>
              <li>• 配置数据库和 Redis 的高可用</li>
              <li>• 设置完整的监控和告警系统</li>
              <li>• 定期备份配置和数据</li>
              <li>• 使用配置管理工具统一部署</li>
              <li>• 实施蓝绿部署或滚动更新</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">❌ 避免做法</h3>
            <ul className="text-red-800 space-y-2 text-sm">
              <li>• 单点故障的数据库或缓存</li>
              <li>• 节点间配置不一致</li>
              <li>• 忽略网络延迟和分区问题</li>
              <li>• 缺乏监控和日志收集</li>
              <li>• 手动管理大量节点配置</li>
              <li>• 直接修改生产环境配置</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
