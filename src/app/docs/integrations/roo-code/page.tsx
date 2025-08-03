"use client";

import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RooCodeIntegrationPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const ImageModal = ({
    src,
    alt,
    isOpen,
    onClose,
  }: {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
  }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <div className="relative max-w-4xl max-h-full">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={600}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };
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
                <div className="text-center">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setExpandedImage("/int_roo_openai.png")}
                  >
                    <Image
                      src="/int_roo_openai.png"
                      alt="OpenAI Compatible 供应商配置截图"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-md transition-transform group-hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">点击图片放大查看</p>
                </div>
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
                <div className="text-center">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setExpandedImage("/int_roo_gemini.png")}
                  >
                    <Image
                      src="/int_roo_gemini.png"
                      alt="Google Gemini 供应商配置截图"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-md transition-transform group-hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">点击图片放大查看</p>
                </div>
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
                <div className="text-center">
                  <div
                    className="relative cursor-pointer group"
                    onClick={() => setExpandedImage("/int_roo_anthropic.png")}
                  >
                    <Image
                      src="/int_roo_anthropic.png"
                      alt="Anthropic 供应商配置截图"
                      width={300}
                      height={400}
                      className="rounded-lg shadow-md transition-transform group-hover:scale-105"
                    />
                  </div>
                  <p className="text-gray-500 text-sm mt-2">点击图片放大查看</p>
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

      {/* 图片放大模态框 */}
      <ImageModal
        src={expandedImage || ""}
        alt="配置截图"
        isOpen={!!expandedImage}
        onClose={() => setExpandedImage(null)}
      />
    </div>
  );
}
