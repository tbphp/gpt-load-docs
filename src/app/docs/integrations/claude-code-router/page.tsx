"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Terminal,
  Download,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function ClaudeCodeRouterIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">CCR</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Claude Code Router 接入指南
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          本指南将帮助您将 GPT-Load 代理服务接入到 Claude Code Router 工具中，
          实现多模型智能路由和代码辅助功能。
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">前置条件</h3>
            <div className="text-blue-800 text-sm space-y-1">
              <p>
                • 确保您已经成功部署并启动了 GPT-Load 服务，默认运行在
                http://localhost:3001
              </p>
              <p>• 已安装 Node.js 和 npm 环境</p>
            </div>
          </div>
        </div>
      </div>

      {/* 步骤1：安装工具 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">1</span>
          </div>
          安装工具
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Download className="h-5 w-5 text-blue-600 mr-2" />
              全局安装必要组件
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    安装 Claude Code
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      npm install -g @anthropic-ai/claude-code
                    </code>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    安装 Claude Code Router
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      npm install -g @musistudio/claude-code-router
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-800 text-sm">
                  <strong>参考文档：</strong>
                  <Link
                    href="https://github.com/musistudio/claude-code-router/blob/main/README_zh.md"
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Claude Code Router 官方文档
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 步骤2：配置文件 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">2</span>
          </div>
          配置文件设置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 text-blue-600 mr-2" />
              创建配置文件
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">配置文件路径</p>
                  <div className="bg-gray-100 rounded-md p-3">
                    <code className="text-sm text-gray-800 font-mono">
                      ~/.claude-code-router/config.json
                    </code>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">
                    如果目录不存在，请先创建目录结构
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">配置内容示例</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`{
  "Providers": [
    {
      "name": "gpt-load-openai",
      "api_base_url": "http://localhost:3001/proxy/openai/v1/chat/completions",
      "api_key": "sk-123456",
      "models": [
        "gpt-4.1-mini",
        "gpt-4.1-nano"
      ]
    },
    {
      "name": "gpt-load-gemini",
      "api_base_url": "http://localhost:3001/proxy/gemini/v1beta/models/",
      "api_key": "sk-123456",
      "models": [
        "gemini-2.5-pro",
        "gemini-2.5-flash"
      ],
      "transformer": {
        "use": [
          "gemini"
        ]
      }
    },
    {
      "name": "gpt-load-gemini-openai",
      "api_base_url": "http://localhost:3001/proxy/gemini/v1beta/openai/chat/completions",
      "api_key": "sk-123456",
      "models": [
        "gemini-2.5-pro",
        "gemini-2.5-flash"
      ]
    },
    {
      "name": "gpt-load-anthropic",
      "api_base_url": "http://localhost:3001/proxy/anthropic/v1/messages",
      "api_key": "sk-123456",
      "models": [
        "claude-sonnet-4-20250514",
        "claude-3-haiku-20240307"
      ],
      "transformer": {
        "use": [
          "Anthropic"
        ]
      }
    }
  ],
  "Router": {
    "default": "gpt-load-gemini,gemini-2.5-pro",
    "background": "gpt-load-gemini,gemini-2.5-flash",
    "think": "gpt-load-gemini,gemini-2.5-pro",
    "longContext": "gpt-load-gemini,gemini-2.5-pro",
    "longContextThreshold": 60000,
    "webSearch": "gpt-load-gemini,gemini-2.5-flash"
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 配置说明 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          配置说明
        </h2>

        <div className="space-y-6">
          {/* Providers 配置 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Providers 配置详解
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                    <p className="font-medium text-green-900 text-sm">
                      gpt-load-openai
                    </p>
                    <p className="text-green-700 text-xs">OpenAI 渠道类型</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <p className="font-medium text-blue-900 text-sm">
                      gpt-load-gemini
                    </p>
                    <p className="text-blue-700 text-xs">Gemini 原生格式</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-cyan-50 border border-cyan-200 rounded-md">
                    <p className="font-medium text-cyan-900 text-sm">
                      gpt-load-gemini-openai
                    </p>
                    <p className="text-cyan-700 text-xs">
                      Gemini OpenAI 兼容格式
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 border border-purple-200 rounded-md">
                    <p className="font-medium text-purple-900 text-sm">
                      gpt-load-anthropic
                    </p>
                    <p className="text-purple-700 text-xs">
                      Anthropic Claude 渠道
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">
                      重要配置注意事项
                    </h4>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>
                        • 将{" "}
                        <code className="bg-amber-100 px-1 rounded">
                          localhost:3001
                        </code>{" "}
                        替换为您实际的 GPT-Load 访问地址
                      </li>
                      <li>
                        •
                        <code className="bg-amber-100 px-1 rounded">
                          Providers
                        </code>{" "}
                        中的提供商根据你实际在GPT-Load里面配置的渠道类型进行调整
                      </li>
                      <li>
                        • 路径中的{" "}
                        <code className="bg-amber-100 px-1 rounded">
                          openai
                        </code>
                        、
                        <code className="bg-amber-100 px-1 rounded">
                          gemini
                        </code>{" "}
                        等是您在 GPT-Load 中配置的分组名称
                      </li>
                      <li>• 模型列表需要根据您的渠道实际支持的模型进行调整</li>
                      <li>
                        • Anthropic 配置中的{" "}
                        <code className="bg-amber-100 px-1 rounded">
                          transformer.use
                        </code>{" "}
                        值为{" "}
                        <code className="bg-amber-100 px-1 rounded">
                          Anthropic
                        </code>
                        （首字母大写）
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Router 配置 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Router 路由配置
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">
                      default
                    </span>
                    <span className="text-gray-600 text-sm">默认模型</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">
                      background
                    </span>
                    <span className="text-gray-600 text-sm">后台任务</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">
                      think
                    </span>
                    <span className="text-gray-600 text-sm">思考模式</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">
                      longContext
                    </span>
                    <span className="text-gray-600 text-sm">长上下文</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700 font-medium text-sm">
                      webSearch
                    </span>
                    <span className="text-gray-600 text-sm">网络搜索</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-blue-800 text-sm">
                  <strong>示例配置说明：</strong>上述示例主要配置了 Gemini
                  模型， 您可以根据实际需要配置其他模型组合，如 OpenAI 或
                  Anthropic 模型。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 步骤4：启动使用 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-orange-600 font-bold text-sm">4</span>
          </div>
          启动使用
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Terminal className="h-5 w-5 text-green-600 mr-2" />
              启动命令
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    启动 Claude Code Router
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      ccr code
                    </code>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    配置完成后，即可使用此命令启动 Claude Code Router 工具
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 验证和测试 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">验证配置</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">测试连接</h3>
              <p className="text-green-800 text-sm">
                启动成功后，尝试执行一些基本的代码相关任务，确认各个模型能够正常响应。
                如果遇到问题，请检查 GPT-Load
                服务状态、配置文件语法以及网络连接。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">相关资源</h3>
        <div className="space-y-3">
          <Link
            href="https://github.com/musistudio/claude-code-router/blob/main/README_zh.md"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude Code Router 官方文档
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            GPT-Load 配置说明
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            渠道类型说明
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
