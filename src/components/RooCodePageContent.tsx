"use client";

import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import ImageViewer from "./ImageViewer";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function RooCodePageContent() {
  const { t } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/integrations/roo-code");

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">RC</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("rooCode.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t("rooCode.description")}
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">{t("rooCode.prerequisites.title")}</h3>
            <p className="text-blue-800 text-sm">
              {t("rooCode.prerequisites.description")}
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
          {t("rooCode.openai.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("rooCode.openai.steps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.openai.steps.selectProvider.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.openai.steps.selectProvider.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.openai.steps.setProxy.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("rooCode.openai.steps.setProxy.url")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("rooCode.openai.steps.setProxy.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.openai.steps.configKey.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.openai.steps.configKey.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_openai.png"
                  alt={t("rooCode.openai.imageAlt")}
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
          {t("rooCode.gemini.title")}
        </h2>

        <div className="space-y-6">
          {/* 方式一：Google Gemini 供应商 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("rooCode.gemini.method1.title")}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {t("rooCode.gemini.method1.subtitle")}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("rooCode.gemini.method1.steps.title")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method1.steps.selectProvider.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.gemini.method1.steps.selectProvider.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("rooCode.gemini.method1.steps.enableCustomUrl.title")}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.gemini.method1.steps.enableCustomUrl.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method1.steps.setProxy.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("rooCode.gemini.method1.steps.setProxy.url")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("rooCode.gemini.method1.steps.setProxy.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method1.steps.configKey.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.gemini.method1.steps.configKey.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_gemini.png"
                  alt={t("rooCode.gemini.method1.imageAlt")}
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
                {t("rooCode.gemini.method2.title")}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {t("rooCode.gemini.method2.subtitle")}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("rooCode.gemini.method2.steps.title")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method2.steps.selectProvider.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.gemini.method2.steps.selectProvider.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method2.steps.setProxy.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800 break-all">
                          {t("rooCode.gemini.method2.steps.setProxy.url")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("rooCode.gemini.method2.steps.setProxy.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.gemini.method2.steps.configKey.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.gemini.method2.steps.configKey.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_gemini_openai.png"
                  alt={t("rooCode.gemini.method2.imageAlt")}
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
                <h4 className="font-medium text-amber-900 mb-1">{t("rooCode.gemini.recommendation.title")}</h4>
                <p className="text-amber-800 text-sm">
                  {t("rooCode.gemini.recommendation.description")}
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
          {t("rooCode.anthropic.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("rooCode.anthropic.steps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.anthropic.steps.selectProvider.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.anthropic.steps.selectProvider.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.anthropic.steps.setProxy.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("rooCode.anthropic.steps.setProxy.url")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("rooCode.anthropic.steps.setProxy.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("rooCode.anthropic.steps.configKey.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("rooCode.anthropic.steps.configKey.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_roo_anthropic.png"
                  alt={t("rooCode.anthropic.imageAlt")}
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t("rooCode.verification.title")}</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">{t("rooCode.verification.test.title")}</h3>
              <p className="text-green-800 text-sm">
                {t("rooCode.verification.test.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("rooCode.relatedResources.title")}</h3>
        <div className="space-y-2">
          <Link
            href="https://docs.roocode.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("rooCode.relatedResources.rooCodeDocs")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("rooCode.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("rooCode.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}