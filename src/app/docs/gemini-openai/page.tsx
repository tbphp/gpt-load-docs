import { Sparkles, Globe, Code, Settings } from "lucide-react";

export default function GeminiPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          <Sparkles className="inline h-8 w-8 mr-3 text-blue-600" />
          Gemini 官方支持的 OpenAI 兼容格式
        </h1>
        <p className="text-xl text-gray-600">
          GPT-Load 现已支持 Google Gemini 的官方 OpenAI
          兼容格式，让您能够使用标准的 OpenAI SDK 和工具来访问 Gemini
          模型的强大功能。
        </p>
        <p className="text-gray-500 mt-4">
          注意：这并不是格式转换，只是对Gemini官方的OpenAI兼容格式进行透明代理。详情请参考官方文档：
          <a href="https://ai.google.dev/gemini-api/docs/openai">
            https://ai.google.dev/gemini-api/docs/openai
          </a>
        </p>
      </div>

      {/* Configuration in GPT-Load */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Settings className="inline h-6 w-6 mr-2 text-green-600" />
          GPT-Load 中的配置
        </h2>

        <div className="space-y-8">
          {/* Step 1: Create Channel Group */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              步骤一：创建 Gemini 分组
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">分组配置</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    • <strong>分组名称</strong>：gemini（建议使用此名称）
                  </li>
                  <li>
                    • <strong>渠道类型</strong>：选择 &ldquo;gemini&rdquo; 类型
                  </li>
                  <li>
                    • <strong>上游地址</strong>
                    ：https://generativelanguage.googleapis.com
                  </li>
                  <li>
                    • <strong>API 密钥</strong>：添加您的 Gemini API Key
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">重要说明</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    • 使用官方 Google 的 generativelanguage.googleapis.com 端点
                  </li>
                  <li>• 确保 API 密钥有效且有足够的配额</li>
                  <li>• 分组创建后会自动兼容 OpenAI 兼容格式</li>
                  <li>• 支持负载均衡和故障转移</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2: Proxy Endpoint */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              步骤二：获取代理端点
            </h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                <strong>代理端点格式：</strong>
                GPT-Load 会为 Gemini 分组生成专用的 OpenAI 兼容端点
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  完整调用路径
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>
                      http://localhost:3001/proxy/gemini/v1beta/openai/chat/completions
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Code className="inline h-6 w-6 mr-2 text-purple-600" />
          客户端调用示例
        </h2>

        <div className="space-y-8">
          {/* Cherry Studio Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cherry Studio 配置
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm">
                <strong>推荐使用：</strong>
                Cherry Studio 是一个优秀的 AI 客户端，完美支持 Gemini OpenAI
                兼容格式
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">配置步骤</h4>
                <ol className="text-gray-600 space-y-2 text-sm">
                  <li>1. 打开 Cherry Studio</li>
                  <li>2. 创建新的渠道，提供商类型选择OpenAI</li>
                  <li>3. 设置基础URL为代理端点</li>
                  <li>4. 输入代理密钥</li>
                  <li>5. 开始使用 Gemini 模型</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">配置参数</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      提供商类型：
                    </span>
                    <code className="bg-slate-200 text-slate-800 px-1 rounded ml-1">
                      OpenAI
                    </code>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">基础URL：</span>
                    <p>
                      <code className="bg-slate-200 text-slate-800 px-1 rounded ml-1 text-xs">
                        http://localhost:3001/proxy/gemini/v1beta/openai/
                      </code>
                    </p>
                    <p className="text-gray-700">（必须以 / 结尾）</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">API Key：</span>
                    <code className="bg-slate-200 text-slate-800 px-1 rounded ml-1">
                      your-proxy-key
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* cURL Example */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              cURL 直接调用
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                <code>{`curl -X POST "http://localhost:3001/proxy/gemini/v1beta/openai/chat/completions" \\
  -H "Authorization: Bearer your-proxy-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gemini-2.5-flash",
    "messages": [
      {
        "role": "user",
        "content": "hi"
      }
    ]
  }'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Globe className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">注意事项</h3>
              <ul className="text-yellow-800 space-y-1 text-sm">
                <li>• 确保 GPT-Load 版本最新以支持 Gemini OpenAI 兼容格式</li>
                <li>
                  • Cherry Studio
                  基础URL必须以斜杠（/）结尾，否则可能导致调用失败
                </li>
                <li>• Gemini API Key 需要有足够的配额和正确的权限</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
