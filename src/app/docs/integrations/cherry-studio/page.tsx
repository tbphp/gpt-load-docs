"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Settings,
  Plus,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "../../../../components/ImageViewer";

export default function CherryStudioIntegrationPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-pink-600 font-bold text-sm">CS</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Cherry Studio 接入指南
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          本指南将帮助您将 GPT-Load 代理服务接入到 Cherry Studio AI
          客户端中，支持 OpenAI、Gemini、Gemini OpenAI 兼容和 Anthropic
          四种渠道类型。
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

      {/* 通用添加说明 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <Plus className="h-4 w-4 text-gray-600" />
          </div>
          通用添加步骤
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="h-5 w-5 text-blue-600 mr-2" />
            服务添加位置
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">访问设置页面</p>
                <p className="text-gray-600 text-sm">
                  在 Cherry Studio 左下角点击 &ldquo;设置&rdquo; →
                  &ldquo;模型服务&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">添加新服务</p>
                <p className="text-gray-600 text-sm">
                  在页面底部点击 &ldquo;添加&rdquo;
                  按钮（请勿使用列表中现有的服务）
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">配置完成后获取模型</p>
                <p className="text-gray-600 text-sm">
                  点击 &ldquo;管理&rdquo; 按钮，获取模型列表并选择需要的模型
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-900 mb-1">重要提醒</h4>
              <p className="text-amber-800 text-sm">
                所有渠道类型都遵循相同的添加流程：选择供应商类型 → 配置 API
                地址和密钥 → 获取模型列表。 只是供应商类型和 API
                地址配置有所不同。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OpenAI 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">1</span>
          </div>
          OpenAI 渠道配置
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤一：创建服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  创建步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">输入服务名称</p>
                      <p className="text-gray-600 text-sm">
                        为您的服务设置一个易于识别的名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        选择供应商类型
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">OpenAI</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        在供应商类型下拉列表中选择 OpenAI
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_openai_create.png"
                  alt="Cherry Studio OpenAI 服务创建截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤二：配置服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置参数
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置 API 密钥</p>
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
                      <p className="text-gray-900 font-medium">获取模型列表</p>
                      <p className="text-gray-600 text-sm">
                        配置完成后点击 &ldquo;管理&rdquo;
                        按钮，获取并选择所需模型
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_openai_config.png"
                  alt="Cherry Studio OpenAI 服务配置截图"
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
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤一：创建服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  创建步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">输入服务名称</p>
                      <p className="text-gray-600 text-sm">
                        为您的 Gemini 服务设置一个易于识别的名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        选择供应商类型
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">Gemini</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        在供应商类型下拉列表中选择 Gemini
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_create.png"
                  alt="Cherry Studio Gemini 服务创建截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-cyan-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤二：配置服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置参数
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置 API 密钥</p>
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
                      <p className="text-gray-900 font-medium">获取模型列表</p>
                      <p className="text-gray-600 text-sm">
                        配置完成后点击 &ldquo;管理&rdquo;
                        按钮，获取并选择所需模型
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_config.png"
                  alt="Cherry Studio Gemini 服务配置截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini OpenAI 兼容格式 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          Gemini OpenAI 兼容格式
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤一：创建服务
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                使用 Gemini 渠道的 OpenAI 兼容接口格式
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  创建步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">输入服务名称</p>
                      <p className="text-gray-600 text-sm">
                        为您的 Gemini OpenAI 兼容服务设置名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        选择供应商类型
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">OpenAI</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        使用 OpenAI 类型以支持兼容接口
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_openai_create.png"
                  alt="Cherry Studio Gemini OpenAI 兼容服务创建截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤二：配置服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置参数
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置 API 密钥</p>
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
                        <code className="text-sm text-gray-800 break-all">
                          http://localhost:3001/proxy/gemini/v1beta/openai/
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        注意：地址必须以 &ldquo;/&rdquo; 结尾，避免 Cherry
                        Studio 自动添加 v1 路径
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">获取模型列表</p>
                      <p className="text-gray-600 text-sm">
                        配置完成后点击 &ldquo;管理&rdquo;
                        按钮，获取并选择所需模型
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_openai_config.png"
                  alt="Cherry Studio Gemini OpenAI 兼容服务配置截图"
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
                <h4 className="font-medium text-red-900 mb-1">关键配置注意</h4>
                <p className="text-red-800 text-sm">
                  API 地址必须以 &ldquo;/&rdquo; 结尾！这是 Cherry Studio
                  的规则要求， 确保不会自动添加 v1
                  路径，从而保证兼容性接口正常工作。
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
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-violet-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤一：创建服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  创建步骤
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">输入服务名称</p>
                      <p className="text-gray-600 text-sm">
                        为您的 Anthropic 服务设置一个易于识别的名称
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        选择供应商类型
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">Anthropic</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        在供应商类型下拉列表中选择 Anthropic
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_anthropic_create.png"
                  alt="Cherry Studio Anthropic 服务创建截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-indigo-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                步骤二：配置服务
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  配置参数
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">配置 API 密钥</p>
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

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">获取模型列表</p>
                      <p className="text-gray-600 text-sm">
                        配置完成后点击 &ldquo;管理&rdquo;
                        按钮，获取并选择所需模型
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_anthropic_config.png"
                  alt="Cherry Studio Anthropic 服务配置截图"
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
                <p>
                  • 使用您在 GPT-Load 中配置的实际代理密钥，不要使用示例中的
                  sk-123456
                </p>
                <p>• 配置完成后，记得在对话界面选择刚才添加的模型进行测试</p>
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
            href="https://docs.cherry-ai.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cherry Studio 官方文档
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
