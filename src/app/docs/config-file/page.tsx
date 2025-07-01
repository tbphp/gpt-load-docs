import { Settings, FileText, Key, RotateCcw } from "lucide-react";

export default function ConfigFilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">配置文件</h1>
        <p className="text-lg text-gray-600">
          通过配置文件管理 GPT-Load 的详细设置，支持 JSON 和 YAML 格式。
        </p>
      </div>

      {/* 配置文件位置 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FileText className="h-6 w-6 text-blue-600 mr-2" />
          配置文件位置
        </h2>
        <p className="text-gray-600 mb-4">
          GPT-Load 按以下优先级查找配置文件：
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                ./config.json
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                ./config.yaml
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                ~/.gpt-load/config.json
              </code>
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                /etc/gpt-load/config.json
              </code>
            </li>
          </ol>
        </div>
      </section>

      {/* JSON 配置示例 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <Settings className="h-6 w-6 text-green-600 mr-2" />
          JSON 配置示例
        </h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`{
  "server": {
    "host": "0.0.0.0",
    "port": 3000,
    "cors": {
      "origin": "*",
      "credentials": true
    }
  },
  "providers": {
    "openai": {
      "enabled": true,
      "apiKeys": [
        "sk-key1",
        "sk-key2",
        "sk-key3"
      ],
      "baseURL": "https://api.openai.com",
      "timeout": 30000
    },
    "azure": {
      "enabled": false,
      "endpoint": "https://your-resource.openai.azure.com",
      "apiKey": "your-azure-key",
      "apiVersion": "2023-12-01-preview"
    }
  },
  "loadBalancing": {
    "strategy": "round-robin",
    "healthCheck": {
      "enabled": true,
      "interval": 60000,
      "timeout": 5000
    },
    "retryConfig": {
      "maxRetries": 3,
      "retryDelay": 1000,
      "backoffMultiplier": 2
    }
  },
  "rateLimit": {
    "enabled": true,
    "windowMs": 60000,
    "maxRequests": 100,
    "keyGenerator": "ip"
  },
  "monitoring": {
    "enabled": true,
    "endpoints": {
      "health": "/health",
      "stats": "/stats",
      "metrics": "/metrics"
    }
  },
  "logging": {
    "level": "info",
    "format": "json",
    "file": {
      "enabled": true,
      "path": "./logs/gpt-load.log",
      "maxSize": "10MB",
      "maxFiles": 5
    }
  }
}`}</code>
          </pre>
        </div>
      </section>

      {/* YAML 配置示例 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FileText className="h-6 w-6 text-purple-600 mr-2" />
          YAML 配置示例
        </h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-green-400 text-sm overflow-x-auto">
            <code>{`server:
  host: "0.0.0.0"
  port: 3000
  cors:
    origin: "*"
    credentials: true

providers:
  openai:
    enabled: true
    apiKeys:
      - "sk-key1"
      - "sk-key2"
      - "sk-key3"
    baseURL: "https://api.openai.com"
    timeout: 30000
  
  azure:
    enabled: false
    endpoint: "https://your-resource.openai.azure.com"
    apiKey: "your-azure-key"
    apiVersion: "2023-12-01-preview"

loadBalancing:
  strategy: "round-robin"
  healthCheck:
    enabled: true
    interval: 60000
    timeout: 5000
  retryConfig:
    maxRetries: 3
    retryDelay: 1000
    backoffMultiplier: 2

rateLimit:
  enabled: true
  windowMs: 60000
  maxRequests: 100
  keyGenerator: "ip"

monitoring:
  enabled: true
  endpoints:
    health: "/health"
    stats: "/stats"
    metrics: "/metrics"

logging:
  level: "info"
  format: "json"
  file:
    enabled: true
    path: "./logs/gpt-load.log"
    maxSize: "10MB"
    maxFiles: 5`}</code>
          </pre>
        </div>
      </section>

      {/* 配置项说明 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <Key className="h-6 w-6 text-orange-600 mr-2" />
          主要配置项说明
        </h2>
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Server 配置</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                • <code>host</code>: 服务器监听地址
              </li>
              <li>
                • <code>port</code>: 服务器端口
              </li>
              <li>
                • <code>cors</code>: CORS 跨域配置
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Providers 配置</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                • <code>openai.apiKeys</code>: OpenAI API 密钥数组
              </li>
              <li>
                • <code>azure.endpoint</code>: Azure OpenAI 端点
              </li>
              <li>
                • <code>timeout</code>: 请求超时时间（毫秒）
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Load Balancing 配置
            </h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>
                • <code>strategy</code>: 负载均衡策略（round-robin, random,
                least-connections）
              </li>
              <li>
                • <code>healthCheck</code>: 健康检查配置
              </li>
              <li>
                • <code>retryConfig</code>: 重试配置
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 动态重载 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <RotateCcw className="h-6 w-6 text-red-600 mr-2" />
          动态重载配置
        </h2>
        <p className="text-gray-600 mb-4">
          GPT-Load 支持动态重载配置文件，无需重启服务：
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-green-400 text-sm">
            <code>{`# 发送 SIGHUP 信号重载配置
kill -HUP $(pgrep gpt-load)

# 或通过管理接口
curl -X POST http://localhost:3000/admin/reload`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
