import { Route, ArrowRight, Globe, Settings } from "lucide-react";

export default function RoutingStrategyPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">路径设计策略</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          理解 GPT-Load
          的路径处理机制，掌握灵活的路径配置方法，确保客户端与上游服务的正确连接。
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          路径处理原理
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">透传原则</h3>
          <p className="text-blue-800 mb-4">
            GPT-Load
            遵循透传原则，仅负责路径替换，保持最大的灵活性。核心逻辑是将客户端请求中的代理前缀替换为实际的上游地址。
          </p>
          <div className="bg-blue-100 rounded-lg p-4">
            <p className="text-blue-900 font-mono text-sm">
              替换规则：
              <span className="font-bold">
                GPT-Load服务地址 + /proxy/ + 分组名
              </span>
              {"    "}
              替换为{"    "}
              <span className="font-bold">上游地址</span>
            </p>
          </div>
        </div>
      </div>

      {/* Processing Logic */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          处理流程示例
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="grid gap-4">
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 font-medium">服务地址:</div>
              <code className="bg-gray-100 px-2 py-1 rounded">
                http://localhost:3001
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 font-medium">上游地址:</div>
              <code className="bg-gray-100 px-2 py-1 rounded">
                https://api.test.com
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 font-medium">分组名:</div>
              <code className="bg-gray-100 px-2 py-1 rounded">test</code>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">客户端请求</div>
                <code className="text-xs bg-white px-2 py-1 rounded border">
                  http://localhost:3001/proxy/test/v1/chat/completions
                </code>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 mx-4" />
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">实际请求</div>
                <code className="text-xs bg-white px-2 py-1 rounded border">
                  https://api.test.com/v1/chat/completions
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          配置方式详解
        </h2>
        <p className="text-gray-600 mb-6">
          以 OpenRouter 为例（完整路径：
          <code className="bg-gray-100 px-1 rounded">
            https://openrouter.ai/api/v1/chat/completions
          </code>
          ）， 分组名为{" "}
          <code className="bg-gray-100 px-1 rounded">openrouter</code>
          ，渠道类型为 <code className="bg-gray-100 px-1 rounded">openai</code>
          ：
        </p>

        <div className="space-y-8">
          {/* Configuration 1 */}
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 text-blue-600 mr-2" />
                配置方式一：域名分离
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    GPT-Load 配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600">上游地址:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        https://openrouter.ai
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600">测试路径:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        /api/v1/chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    客户端配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">
                        Cherry Studio API地址:
                      </span>
                      <code className="block bg-gray-100 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter/api
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration 2 */}
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 text-green-600 mr-2" />
                配置方式二：包含 API 路径（推荐）
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    GPT-Load 配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600">上游地址:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        https://openrouter.ai/api
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600">测试路径:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        /v1/chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    客户端配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">
                        Cherry Studio API地址:
                      </span>
                      <code className="block bg-gray-100 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration 3 */}
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 text-purple-600 mr-2" />
                配置方式三：完整版本路径
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    GPT-Load 配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600">上游地址:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        https://openrouter.ai/api/v1
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600">测试路径:</span>
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        /chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    客户端配置
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600">
                        Cherry Studio API地址:
                      </span>
                      <code className="block bg-gray-100 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter/
                      </code>
                      <p className="text-xs text-orange-600 mt-1">
                        注意：必须以 / 结尾，避免客户端自动拼接 v1 路径
                      </p>
                    </div>
                  </div>
                </div>
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
            <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
              <Route className="h-5 w-5 mr-2" />
              配置建议
            </h3>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>• 推荐使用配置方式二，结构清晰易理解</li>
              <li>• 先确定完整的上游 API 地址</li>
              <li>• 根据客户端特性选择合适的路径分割点</li>
              <li>• 保持配置的一致性和可维护性</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              调试技巧
            </h3>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• 查看 GPT-Load 请求日志确认上游地址</li>
              <li>• 使用测试路径验证配置正确性</li>
              <li>• 注意客户端的路径拼接规则</li>
              <li>• 灵活调整配置以适应不同场景</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">配置要点总结</h2>
        <p className="text-blue-100 mb-4">
          理解路径处理逻辑是关键：GPT-Load
          只负责简单的字符串替换，灵活的配置方式能适应各种客户端和上游服务的需求。
        </p>
        <div className="text-blue-100 text-sm">
          <strong>核心原则：</strong>确保{" "}
          <code className="bg-blue-700 px-1 rounded">测试地址</code> 和{" "}
          <code className="bg-blue-700 px-1 rounded">客户端请求地址</code>
          经过 GPT-Load 代理后，最终请求的上游地址正确无误。
        </div>
      </div>
    </div>
  );
}
