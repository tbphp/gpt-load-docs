"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Cloud,
  Info,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "../../../../components/ImageViewer";

export default function CloudflareAIGatewayPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <Cloud className="h-5 w-5 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Cloudflare AI Gateway 上游配置
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          本指南将帮助您配置 Cloudflare AI Gateway 作为 GPT-Load 的上游代理，
          通过 Cloudflare 的全球网络优化 AI 服务请求的性能和稳定性。
        </p>
      </div>

      {/* 重要提示 */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-900 mb-1">重要提示</h3>
            <p className="text-amber-800 text-sm">
              Cloudflare AI Gateway 仅支持部分 AI
              服务提供商。在配置前请确认您需要的 AI 服务渠道是否在 Cloudflare
              支持列表中。 如果 API
              的平台下拉列表里面没有您的渠道，则该渠道不可用。
            </p>
          </div>
        </div>
      </div>

      {/* 第一步：注册登录 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">1</span>
          </div>
          注册并登录 Cloudflare
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-900 font-medium mb-2">
                访问 Cloudflare Dashboard
              </p>
              <p className="text-gray-600 text-sm mb-3">
                前往 Cloudflare 官网注册账号并登录到控制台
              </p>
              <Link
                href="https://dash.cloudflare.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dash.cloudflare.com
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 第二步：进入 AI Gateway */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">2</span>
          </div>
          进入 AI Gateway 管理页面
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧文字内容 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                导航到 AI Gateway
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">选择菜单</p>
                    <p className="text-gray-600 text-sm">
                      在左侧导航栏中依次选择：<strong>AI → AI Gateway</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">访问管理页面</p>
                    <p className="text-gray-600 text-sm">
                      进入 AI Gateway 管理页面，可以看到当前的网关列表
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
              <ImageViewer
                src="/int_cf_001.png"
                alt="Cloudflare AI Gateway 菜单导航截图"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 第三步：创建网关 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          创建 AI Gateway
        </h2>

        <div className="space-y-6">
          {/* 创建按钮说明 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium mb-2">点击创建网关</p>
                <p className="text-gray-600 text-sm">
                  在 AI Gateway 页面中点击{" "}
                  <strong>&ldquo;创建网关&rdquo;</strong> 按钮开始配置新的网关
                </p>
              </div>
            </div>
          </div>

          {/* 创建表单配置 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  配置网关参数
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">设置网关名称</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">gpt-load</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        名称可以随意设置，此处以 &ldquo;gpt-load&rdquo; 为例
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">保持默认配置</p>
                      <p className="text-gray-600 text-sm">
                        其他配置项保持默认值即可
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-amber-900 font-medium text-sm">
                          重要配置项
                        </p>
                        <ul className="text-amber-800 text-xs mt-1 space-y-1">
                          <li>
                            • <strong>不要开启缓存</strong> - CF
                            的缓存在某些渠道有 bug
                          </li>
                          <li>
                            • <strong>不要开启网关验证</strong> -
                            保持验证功能关闭
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cf_002.png"
                  alt="Cloudflare AI Gateway 创建表单截图"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第四步：获取 API 地址 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-cyan-600 font-bold text-sm">4</span>
          </div>
          获取渠道代理地址
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧文字内容 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                查看 API 端点
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">点击 API 按钮</p>
                    <p className="text-gray-600 text-sm">
                      创建完成后，点击右上角的{" "}
                      <strong>&ldquo;API&rdquo;</strong> 按钮
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">选择目标渠道</p>
                    <p className="text-gray-600 text-sm">
                      在 API 的平台下拉列表中找到您需要的 AI
                      服务提供商，复制对应的代理地址
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-800 text-sm">
                      每个 AI 服务提供商都有对应的代理地址，确保选择正确的渠道
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
              <ImageViewer
                src="/int_cf_003.png"
                alt="Cloudflare AI Gateway API 端点列表截图"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 第五步：配置到 GPT-Load */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">5</span>
          </div>
          配置到 GPT-Load
        </h2>

        <div className="space-y-6">
          {/* 配置说明 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              添加上游地址
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">复制代理地址</p>
                  <p className="text-gray-600 text-sm mb-2">
                    将从 Cloudflare AI Gateway 获取的代理地址复制到 GPT-Load
                    对应分组的上游地址配置中
                  </p>

                  <div className="bg-gray-100 rounded-md p-3">
                    <p className="text-sm text-gray-700 mb-1 font-medium">
                      示例地址：
                    </p>
                    <code className="text-sm text-gray-800 break-all">
                      https://gateway.ai.cloudflare.com/v1/b7fbxxxxxfdba/gpt-load/google-ai-studio
                    </code>
                  </div>

                  <p className="text-gray-600 text-xs mt-2">
                    其中{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      b7fbxxxxxfdba
                    </code>{" "}
                    是您的账户 ID，
                    <code className="bg-gray-100 px-1 rounded">
                      gpt-load
                    </code>{" "}
                    是网关名称，
                    <code className="bg-gray-100 px-1 rounded">
                      google-ai-studio
                    </code>{" "}
                    是具体的 AI 服务提供商
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 配置截图 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                GPT-Load 配置示例
              </h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50">
              <ImageViewer
                src="/int_cf_004.png"
                alt="GPT-Load 配置 Cloudflare AI Gateway 上游地址示例截图"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gemini 特别说明 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Gemini 渠道特别说明
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-900 mb-2">重要提醒</h3>
              <div className="text-amber-800 text-sm space-y-2">
                <p>当使用 Gemini 渠道类型配合 Cloudflare AI Gateway 时：</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <strong>推荐：</strong>使用 Gemini 原生格式调用，工作正常
                  </li>
                  <li>
                    <strong>不推荐：</strong>使用 Gemini 官方的 OpenAI
                    格式调用，可能出现输出乱码问题
                  </li>
                </ul>
                <p className="mt-2 font-medium">
                  这是 Cloudflare AI Gateway 的已知问题，建议始终使用 Gemini
                  原生格式以确保最佳兼容性。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 验证配置 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">验证配置</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">测试连接</h3>
              <p className="text-green-800 text-sm">
                配置完成后，发送一个测试请求确认代理工作正常。
                如果遇到问题，请检查 Cloudflare AI Gateway 状态和 GPT-Load
                配置是否正确。
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
            href="https://developers.cloudflare.com/ai-gateway/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudflare AI Gateway 官方文档
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
