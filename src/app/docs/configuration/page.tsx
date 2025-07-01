import { Settings, Database, Globe, Shield } from "lucide-react";

export default function ConfigurationPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">配置指南</h1>
        <p className="text-xl text-gray-600">
          详细了解 GPT-Load 的各种配置选项，优化您的部署
        </p>
      </div>

      {/* Environment Variables */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Settings className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">环境变量配置</h2>
        </div>

        <p className="text-gray-600 mb-6">
          GPT-Load 支持通过环境变量进行灵活配置。您可以创建{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">.env</code>{" "}
          文件或直接设置环境变量。
        </p>

        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <h4 className="text-white font-medium mb-2">创建配置文件</h4>
          <pre className="text-green-400 text-sm">
            <code>{`# 复制示例配置
cp .env.example .env

# 编辑配置
vim .env`}</code>
          </pre>
        </div>

        {/* Core settings */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              核心配置
            </h3>
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
                      HOST
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">0.0.0.0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      服务器绑定地址
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      KEYS_FILE
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      keys.txt
                    </td>
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
                      上游 API 基础地址
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance settings */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              性能配置
            </h3>
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
                      MAX_CONCURRENT_REQUESTS
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">100</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      最大并发请求数
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      REQUEST_TIMEOUT
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">30</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      请求超时时间（秒）
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      RESPONSE_TIMEOUT
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">30</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      响应超时时间（秒）
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      ENABLE_GZIP
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">true</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      启用 Gzip 压缩
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Key management */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-green-100 p-2 rounded-lg">
            <Database className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">密钥管理</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              密钥文件格式
            </h3>
            <p className="text-gray-600 mb-4">
              创建一个文本文件，每行包含一个 API 密钥：
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# keys.txt
sk-your-openai-key-1
sk-your-openai-key-2
sk-your-openai-key-3

# 支持注释（以 # 开头）
# sk-disabled-key-4`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              轮询配置
            </h3>
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
                      START_INDEX
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">0</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      密钥轮换起始索引
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      BLACKLIST_THRESHOLD
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">1</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      拉黑前的错误次数
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                      MAX_RETRIES
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">3</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      使用不同密钥的最大重试次数
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* CORS settings */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Globe className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">CORS 配置</h2>
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
                  ENABLE_CORS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">true</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  启用 CORS 支持
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  ALLOWED_ORIGINS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">*</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  允许的来源（逗号分隔）
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  ALLOWED_METHODS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  GET,POST,PUT,DELETE,OPTIONS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  允许的 HTTP 方法
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  ALLOWED_HEADERS
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">*</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  允许的头部（逗号分隔）
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Security settings */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-red-100 p-2 rounded-lg">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">安全配置</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              认证设置
            </h3>
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
                      AUTH_KEY
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">-</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      可选的认证密钥
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-yellow-900 mb-2">
                ⚠️ 安全提示
              </h4>
              <ul className="text-yellow-800 text-sm space-y-1">
                <li>• 在生产环境中设置 AUTH_KEY 来保护您的代理服务</li>
                <li>• 使用强密码并定期更换认证密钥</li>
                <li>• 限制 ALLOWED_ORIGINS 到可信域名</li>
                <li>• 定期监控访问日志</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration examples */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">配置示例</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">生产环境配置</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# .env
PORT=3000
HOST=0.0.0.0
KEYS_FILE=/etc/gpt-load/keys.txt
OPENAI_BASE_URL=https://api.openai.com

# 性能优化
MAX_CONCURRENT_REQUESTS=200
REQUEST_TIMEOUT=60
ENABLE_GZIP=true

# 安全配置
AUTH_KEY=your-super-secret-auth-key
ALLOWED_ORIGINS=https://yourdomain.com,https://app.yourdomain.com

# 日志配置
LOG_LEVEL=info
LOG_ENABLE_FILE=true
LOG_FILE_PATH=/var/log/gpt-load/app.log`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">开发环境配置</h4>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm">
                <code>{`# .env.development
PORT=3000
KEYS_FILE=./keys.txt
OPENAI_BASE_URL=https://api.openai.com

# 开发调试
LOG_LEVEL=debug
LOG_ENABLE_REQUEST=true
ENABLE_CORS=true
ALLOWED_ORIGINS=*

# 较低的并发限制
MAX_CONCURRENT_REQUESTS=10`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
