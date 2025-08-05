"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Search,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "../../../../components/ImageViewer";

export default function NewAPIIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-orange-600 font-bold text-sm">NA</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">New API 接入指南</h1>
        </div>
        <p className="text-lg text-gray-600">
          本指南将帮助您将 GPT-Load 代理服务接入到 New API 平台中，支持
          OpenAI、Gemini、Gemini OpenAI 兼容和 Anthropic 四种渠道类型。
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">前置条件</h3>
            <p className="text-blue-800 text-sm">
              确保您已经成功部署并启动了 GPT-Load 服务，默认运行在
              http://localhost:3001
            </p>
          </div>
        </div>
      </div>

      {/* OpenAI 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">1</span>
          </div>
          OpenAI 渠道配置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  配置步骤
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择类型</p>
                      <p className="text-gray-600 text-sm">
                        在 New API 中选择 &ldquo;OpenAI&rdquo; 类型
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置密钥</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        使用您在 GPT-Load 中配置的代理密钥
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置 API 地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/openai
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        其中 &ldquo;openai&rdquo; 是您在 GPT-Load
                        中配置的分组名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        添加模型并测试
                      </p>
                      <p className="text-gray-600 text-sm">
                        添加好模型列表并进行测试验证
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_openai.png"
                  alt="New API OpenAI 配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">2</span>
          </div>
          Gemini 渠道配置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  配置步骤
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择类型</p>
                      <p className="text-gray-600 text-sm">
                        在 New API 中选择 &ldquo;Google Gemini&rdquo; 类型
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置密钥</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        使用您在 GPT-Load 中配置的代理密钥
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置 API 地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/gemini
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        其中 &ldquo;gemini&rdquo; 是您在 GPT-Load
                        中配置的分组名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">模型列表配置</p>
                      <p className="text-gray-600 text-sm">
                        由于 New API 的 Gemini 类型获取模型列表存在 bug，
                        新建时可能无法获取，建议手动填写模型名称
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini.png"
                  alt="New API Gemini 配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 重要提示 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-amber-900 mb-1">
                  模型列表获取说明
                </h4>
                <p className="text-amber-800 text-sm">
                  New API 的 Gemini 类型在新建渠道时可能无法自动获取模型列表，
                  建议先手动填写模型名称。创建完成后，在编辑模式下通常可以正常获取模型列表。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini 思考配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <Lightbulb className="h-4 w-4 text-purple-600" />
          </div>
          Gemini 思考配置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  思考功能设置
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">启用思考适配</p>
                      <p className="text-gray-600 text-sm">
                        在 New API 的系统设置 → 模型相关设置中选择 &ldquo;启用
                        Gemini 思考后缀适配&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">使用思考后缀</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2 space-y-1">
                        <div className="text-sm text-gray-800">
                          •{" "}
                          <code className="bg-gray-200 px-1 rounded">
                            -thinking
                          </code>
                          ：启用思考模式
                        </div>
                        <div className="text-sm text-gray-800">
                          •{" "}
                          <code className="bg-gray-200 px-1 rounded">
                            -nothinking
                          </code>
                          ：禁用思考模式
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        注意：gemini-2.5-pro 模型无法关闭思考功能
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini_thinking.png"
                  alt="New API Gemini 思考配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 重要提示 */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-900 mb-1">重要提醒</h4>
                <p className="text-red-800 text-sm">
                  在 New API 中配置了思考功能后，请不要在 GPT-Load
                  的参数覆盖中再次配置思考相关参数，避免重复配置导致冲突。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 搜索配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
            <Search className="h-4 w-4 text-cyan-600" />
          </div>
          Gemini 搜索功能配置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              启用官方搜索工具
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">配置选择</p>
                  <p className="text-gray-600 text-sm mb-3">
                    可以在 New API 或 GPT-Load 中配置搜索模型（只能在一侧配置）
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">参数配置</p>
                  <p className="text-gray-600 text-sm mb-2">
                    在参数覆盖中添加以下配置：
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <pre className="text-sm text-gray-300 font-mono">
                      {`{
  "tools": [
    {
      "google_search": {}
    }
  ]
}`}
                    </pre>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    配置完成后即可启用官方的搜索工具功能
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini OpenAI 兼容格式 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">3</span>
          </div>
          Gemini OpenAI 兼容格式
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  配置步骤
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择类型</p>
                      <p className="text-gray-600 text-sm">
                        在 New API 中选择 &ldquo;自定义渠道&rdquo; 类型
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置密钥</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        使用您在 GPT-Load 中配置的代理密钥
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置完整地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800 break-all">
                          http://localhost:3001/proxy/gemini/v1beta/openai/chat/completions
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        其中 &ldquo;gemini&rdquo; 是您在 GPT-Load
                        中配置的分组名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">手动添加模型</p>
                      <p className="text-gray-600 text-sm">
                        兼容格式无法自动获取模型列表，需要手动填入模型名称
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini_openai.png"
                  alt="New API Gemini OpenAI 兼容格式配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 限制说明 */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-1">
                  兼容模式限制
                </h4>
                <p className="text-yellow-800 text-sm">
                  使用 OpenAI 兼容模式时，无法配置思考和搜索参数，
                  如需使用这些高级功能，建议使用原生 Gemini 类型。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthropic 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-violet-600 font-bold text-sm">4</span>
          </div>
          Anthropic (Claude) 渠道配置
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  配置步骤
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择类型</p>
                      <p className="text-gray-600 text-sm">
                        在 New API 中选择 &ldquo;Anthropic Claude&rdquo; 类型
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置密钥</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        使用您在 GPT-Load 中配置的代理密钥
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置 API 地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/anthropic
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        其中 &ldquo;anthropic&rdquo; 是您在 GPT-Load
                        中配置的分组名称
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_anthropic.png"
                  alt="New API Anthropic 配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 重要说明 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">重要说明</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">配置注意事项</h3>
              <div className="text-blue-800 text-sm space-y-1">
                <p>• 请将示例中的 GPT-Load 访问地址替换为您实际的服务地址</p>
                <p>
                  • 路径中的分组名称（如 openai、gemini、anthropic）需要与您在
                  GPT-Load 中的实际配置保持一致
                </p>
                <p>• 建议先在小范围内测试配置，确认无误后再正式使用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">相关资源</h3>
        <div className="space-y-2">
          <Link
            href="https://www.newapi.ai/getting-started/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            New API 官方文档
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
