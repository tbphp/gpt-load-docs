"use client";

import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import ImageViewer from "../../../../components/ImageViewer";

export default function RooCodeIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">RC</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Roo Code 接入指南
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          本指南将帮助您将 GPT-Load 代理服务接入到 Roo Code 智能代码助手中，支持
          OpenAI、Gemini 和 Anthropic 三种渠道类型。
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
                      <p className="text-gray-900 font-medium">选择供应商</p>
                      <p className="text-gray-600 text-sm">
                        在 Roo Code 中选择 &ldquo;OpenAI Compatible&rdquo;
                        供应商
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置代理地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/openai/v1
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
                      <p className="text-gray-900 font-medium">配置 API Key</p>
                      <p className="text-gray-600 text-sm">
                        输入 GPT-Load 中配置的代理密钥
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_openai.png"
                  alt="OpenAI Compatible 供应商配置截图"
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
          {/* 方式一：Google Gemini 供应商 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                方式一：Google Gemini 供应商
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                使用原生 Gemini 接口格式（推荐）
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择供应商</p>
                      <p className="text-gray-600 text-sm">
                        在 Roo Code 中选择 &ldquo;Google Gemini&rdquo; 供应商
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        启用自定义基础 URL
                      </p>
                      <p className="text-gray-600 text-sm">
                        勾选&ldquo;使用自定义基础 URL&rdquo;选项
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置代理地址</p>
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
                      <p className="text-gray-900 font-medium">配置 API Key</p>
                      <p className="text-gray-600 text-sm">
                        输入您的 Gemini API Key
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_gemini.png"
                  alt="Google Gemini 供应商配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 方式二：OpenAI Compatible 格式 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                方式二：OpenAI Compatible 格式
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                使用 OpenAI 兼容接口格式
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">选择供应商</p>
                      <p className="text-gray-600 text-sm">
                        在 Roo Code 中选择 &ldquo;OpenAI Compatible&rdquo;
                        供应商
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置代理地址</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800 break-all">
                          http://localhost:3001/proxy/gemini/v1beta/openai
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
                      <p className="text-gray-900 font-medium">配置 API Key</p>
                      <p className="text-gray-600 text-sm">
                        输入您的 Gemini API Key
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_gemini_openai.png"
                  alt="Gemini OpenAI Compatible 供应商配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置建议 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div>
                <h4 className="font-medium text-amber-900 mb-1">配置建议</h4>
                <p className="text-amber-800 text-sm">
                  推荐使用 <strong>方式一：Google Gemini 供应商</strong>
                  ，因为它使用原生 Gemini
                  接口格式，提供了更好的兼容性和完整的功能支持。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthropic 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
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
                      <p className="text-gray-900 font-medium">选择供应商</p>
                      <p className="text-gray-600 text-sm">
                        在 Roo Code 中选择 &ldquo;Anthropic&rdquo; 供应商
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置代理地址</p>
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

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置 API Key</p>
                      <p className="text-gray-600 text-sm">
                        输入您的 Anthropic API Key
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_anthropic.png"
                  alt="Anthropic 供应商配置截图"
                  width={300}
                  height={400}
                />
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
                配置完成后，在 Roo Code
                中发送一个测试消息，确认能够正常响应。如果遇到问题，请检查
                GPT-Load 服务是否正常运行，以及分组名称是否正确。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">相关资源</h3>
        <div className="space-y-2">
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
