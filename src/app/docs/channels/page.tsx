import { Globe, CheckCircle } from "lucide-react";

export default function ChannelsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">渠道类型</h1>
        <p className="text-xl text-gray-600">
          GPT-Load 支持多种 AI 服务提供商的透明代理，完整保留各服务的原生 API
          格式
        </p>
      </div>

      {/* Supported Services */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          支持的 AI 服务
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                OpenAI 格式
              </h3>
            </div>
            <ul className="text-blue-800 space-y-2 text-sm">
              <li>• 官方 OpenAI API</li>
              <li>• Azure OpenAI Service</li>
              <li>• 其他 OpenAI 兼容服务</li>
              <li>• 支持所有模型和接口</li>
            </ul>
          </div>

          <div className="border border-green-200 rounded-lg p-6 bg-green-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-900">
                Google Gemini 格式
              </h3>
            </div>
            <ul className="text-green-800 space-y-2 text-sm">
              <li>• Gemini Pro 模型</li>
              <li>• Gemini Pro Vision</li>
              <li>• Gemini 原生 API 格式</li>
              <li>• 完整功能支持</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold text-purple-900 mb-2">扩展性设计</h3>
          <p className="text-purple-800 text-sm">
            GPT-Load 采用插件化架构设计，可以快速集成新的 AI
            服务提供商及其原生格式，保持各服务的独特特性和完整功能。
          </p>
        </div>
      </div>

      {/* Proxy Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          代理调用格式
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            统一代理端点
          </h3>
          <div className="text-center">
            <code className="bg-white px-4 py-2 rounded-lg font-mono border text-gray-600">
              http://localhost:3001/proxy/&#123;group_name&#125;/&#123;原始API路径&#125;
            </code>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">参数说明</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>
                  • <code className="bg-gray-100 px-1 rounded">group_name</code>
                  : 在管理界面创建的分组名称
                </li>
                <li>
                  •{" "}
                  <code className="bg-gray-100 px-1 rounded">原始API路径</code>:
                  保持与原始 AI 服务完全一致
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">认证方式</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 保留各 AI 服务的原生认证格式</li>
                <li>• 使用统一的认证密钥值</li>
                <li>• 完全透明的代理转发</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* OpenAI Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Globe className="inline h-6 w-6 mr-2 text-blue-600" />
          OpenAI 格式调用
        </h2>

        <div className="space-y-8">
          {/* Authentication */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              认证方式
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 text-sm">
                OpenAI 格式使用{" "}
                <code className="bg-blue-100 px-1 rounded">
                  Authorization: Bearer &#123;AUTH_KEY&#125;
                </code>{" "}
                头部认证
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  原始调用方式
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`curl -X POST https://api.openai.com/v1/chat/completions \\
  -H "Authorization: Bearer sk-your-openai-key" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "gpt-4.1-mini", "messages": [...]}'`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  代理调用方式
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`curl -X POST http://localhost:3001/proxy/openai/v1/chat/completions \\
  -H "Authorization: Bearer sk-123456" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "gpt-4.1-mini", "messages": [...]}'`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                将{" "}
                <code className="bg-gray-100 px-1 rounded">
                  https://api.openai.com
                </code>{" "}
                替换为
                <code className="bg-gray-100 px-1 rounded">
                  http://localhost:3001/proxy/openai
                </code>
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                将原始{" "}
                <code className="bg-gray-100 px-1 rounded">OpenAI API Key</code>{" "}
                替换为统一认证秘钥{" "}
                <code className="bg-gray-100 px-1 rounded">sk-123456</code>
                （默认）
              </span>
            </div>
          </div>

          {/* Supported Endpoints */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              支持的接口
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">主要接口</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/chat/completions
                    </code>{" "}
                    - 聊天对话
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/completions
                    </code>{" "}
                    - 文本补全
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/embeddings
                    </code>{" "}
                    - 文本嵌入
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">/v1/models</code>{" "}
                    - 模型列表
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">其他接口</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/images/generations
                    </code>{" "}
                    - 图像生成
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/audio/transcriptions
                    </code>{" "}
                    - 语音转文字
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1/moderations
                    </code>{" "}
                    - 内容审查
                  </li>
                  <li>• 以及其他所有 OpenAI 兼容接口</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDK Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              SDK 配置示例
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Python SDK</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`from openai import OpenAI

client = OpenAI(
    api_key="sk-123456",  # 使用统一认证密钥
    base_url="http://localhost:3001/proxy/openai"  # 使用代理端点
)

response = client.chat.completions.create(
    model="gpt-4.1-mini",
    messages=[{"role": "user", "content": "Hello"}]
)`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Node.js SDK
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-123456',  // 使用统一认证密钥
  baseURL: 'http://localhost:3001/proxy/openai'  // 使用代理端点
});

const response = await openai.chat.completions.create({
  model: 'gpt-4.1-mini',
  messages: [{ role: 'user', content: 'Hello' }]
});`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gemini Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Globe className="inline h-6 w-6 mr-2 text-green-600" />
          Google Gemini 格式调用
        </h2>

        <div className="space-y-8">
          {/* Authentication */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              认证方式
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm">
                Gemini 格式使用 URL 参数{" "}
                <code className="bg-green-100 px-1 rounded">
                  key=&#123;AUTH_KEY&#125;
                </code>{" "}
                认证
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  原始调用方式
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`curl -X POST "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=your-gemini-key" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Hello"}]}]}'`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  代理调用方式
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`curl -X POST "http://localhost:3001/proxy/gemini/v1beta/models/gemini-2.5-pro:generateContent?key=sk-123456" \\
  -H "Content-Type: application/json" \\
  -d '{"contents": [{"parts": [{"text": "Hello"}]}]}'`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                将{" "}
                <code className="bg-gray-100 px-1 rounded">
                  https://generativelanguage.googleapis.com
                </code>{" "}
                替换为
                <code className="bg-gray-100 px-1 rounded">
                  http://localhost:3001/proxy/gemini
                </code>
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                将 URL 参数中的{" "}
                <code className="bg-gray-100 px-1 rounded">
                  key=your-gemini-key
                </code>{" "}
                替换为统一认证密钥{" "}
                <code className="bg-gray-100 px-1 rounded">sk-123456</code>
                （默认）
              </span>
            </div>
          </div>

          {/* Supported Endpoints */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              支持的接口
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">内容生成</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1beta/models/*/generateContent
                    </code>
                  </li>
                  <li>• 支持流式和非流式响应</li>
                  <li>• 支持多模态输入（文本+图像）</li>
                  <li>• 完整的参数配置支持</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">模型管理</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1beta/models
                    </code>{" "}
                    - 模型列表
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      /v1beta/models/model-id
                    </code>{" "}
                    - 模型详情
                  </li>
                  <li>• 支持所有 Gemini 原生接口</li>
                  <li>• 保持原始 API 响应格式</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDK Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              SDK 配置示例
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Python SDK</h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`import google.generativeai as genai

# 配置 API 密钥和基础 URL
genai.configure(
    api_key="sk-123456",  # 使用统一认证密钥
    client_options={"api_endpoint": "http://localhost:3001/proxy/gemini"}
)

model = genai.GenerativeModel('gemini-2.5-pro')
response = model.generate_content("Hello")`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  直接 HTTP 调用
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{`import requests

url = "http://localhost:3001/proxy/gemini/v1beta/models/gemini-2.5-pro:generateContent"
params = {"key": "sk-123456"}
data = {
    "contents": [{"parts": [{"text": "Hello"}]}]
}

response = requests.post(url, params=params, json=data)`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">分组管理</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              创建分组
            </h3>
            <ol className="text-gray-600 space-y-2 text-sm">
              <li>1. 登录 Web 管理界面</li>
              <li>2. 进入&ldquo;密钥管理&rdquo;页面</li>
              <li>3. 点击&ldquo;添加分组&rdquo;按钮</li>
              <li>4. 设置分组名称和类型</li>
              <li>5. 配置上游地址和参数</li>
              <li>6. 添加 API 密钥</li>
            </ol>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              分组配置
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>
                • <strong>分组名称</strong>：用于代理路径的标识符
              </li>
              <li>
                • <strong>服务类型</strong>：OpenAI 或 Gemini 格式
              </li>
              <li>
                • <strong>上游地址</strong>：原始 API 服务地址
              </li>
              <li>
                • <strong>负载均衡</strong>：支持多个上游地址轮询
              </li>
              <li>
                • <strong>自定义配置</strong>：覆盖系统默认设置
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">迁移指南</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              从直接调用迁移到代理
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-lg mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">替换端点</h4>
                <p className="text-gray-600 text-sm">
                  将原始 API 端点替换为代理端点
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-lg mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">更新密钥</h4>
                <p className="text-gray-600 text-sm">使用统一的认证密钥</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-3 mx-auto w-12 h-12 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">保持格式</h4>
                <p className="text-gray-600 text-sm">其他请求参数和格式不变</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-2">无缝迁移</h3>
            <p className="text-yellow-800 text-sm">
              GPT-Load 作为透明代理服务，完全保留各 AI 服务的原生 API
              格式和认证方式，
              仅需要替换端点地址并使用统一密钥值即可无缝迁移现有代码。
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">渠道类型总结</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">透明代理</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 完整保留原生 API 格式</li>
              <li>• 支持所有接口和参数</li>
              <li>• 无需修改现有代码</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">统一管理</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 统一认证密钥</li>
              <li>• 集中配置管理</li>
              <li>• 智能负载均衡</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">易于扩展</h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              <li>• 插件化架构</li>
              <li>• 快速支持新服务</li>
              <li>• 保持服务特性</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
