"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Search,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "./ImageViewer";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function NewAPIPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/integrations/new-api");

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <span className="text-orange-600 font-bold text-sm">NA</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("newApi.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t("newApi.description")}
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">{t("newApi.prerequisites.title")}</h3>
            <p className="text-blue-800 text-sm">
              {t("newApi.prerequisites.description")}
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
          {t("newApi.openai.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("newApi.openai.configSteps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.openai.configSteps.selectType.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.openai.configSteps.selectType.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.openai.configSteps.configKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">{t("newApi.openai.configSteps.configKey.example")}</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.openai.configSteps.configKey.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.openai.configSteps.apiAddress.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("newApi.openai.configSteps.apiAddress.example")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.openai.configSteps.apiAddress.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("newApi.openai.configSteps.addModel.title")}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.openai.configSteps.addModel.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_openai.png"
                  alt={t("newApi.openai.imageAlt")}
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
          {t("newApi.gemini.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("newApi.gemini.configSteps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.gemini.configSteps.selectType.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.gemini.configSteps.selectType.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.gemini.configSteps.configKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">{t("newApi.gemini.configSteps.configKey.example")}</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.gemini.configSteps.configKey.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.gemini.configSteps.apiAddress.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("newApi.gemini.configSteps.apiAddress.example")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.gemini.configSteps.apiAddress.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.gemini.configSteps.modelList.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.gemini.configSteps.modelList.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini.png"
                  alt={t("newApi.gemini.imageAlt")}
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
                  {t("newApi.gemini.modelListNotice.title")}
                </h4>
                <p className="text-amber-800 text-sm">
                  {t("newApi.gemini.modelListNotice.description")}
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
          {t("newApi.geminiThinking.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("newApi.geminiThinking.config.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiThinking.config.enableAdaptation.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.geminiThinking.config.enableAdaptation.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiThinking.config.useSuffix.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2 space-y-1">
                        <div className="text-sm text-gray-800">
                          • <code className="bg-gray-200 px-1 rounded">{t("newApi.geminiThinking.config.useSuffix.enableSuffix")}</code>：{t("newApi.geminiThinking.config.useSuffix.enableDescription")}
                        </div>
                        <div className="text-sm text-gray-800">
                          • <code className="bg-gray-200 px-1 rounded">{t("newApi.geminiThinking.config.useSuffix.disableSuffix")}</code>：{t("newApi.geminiThinking.config.useSuffix.disableDescription")}
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.geminiThinking.config.useSuffix.note")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini_thinking.png"
                  alt={t("newApi.geminiThinking.imageAlt")}
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
                <h4 className="font-medium text-red-900 mb-1">{t("newApi.geminiThinking.warning.title")}</h4>
                <p className="text-red-800 text-sm">
                  {t("newApi.geminiThinking.warning.description")}
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
          {t("newApi.geminiSearch.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("newApi.geminiSearch.config.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">{t("newApi.geminiSearch.config.configChoice.title")}</p>
                  <p className="text-gray-600 text-sm mb-3">
                    {t("newApi.geminiSearch.config.configChoice.description")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium mb-2">{t("newApi.geminiSearch.config.parameterConfig.title")}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {t("newApi.geminiSearch.config.parameterConfig.description")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <pre className="text-sm text-gray-300 font-mono">
                      {t("newApi.geminiSearch.config.parameterConfig.example")}
                    </pre>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
                    {t("newApi.geminiSearch.config.parameterConfig.note")}
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
          {t("newApi.geminiOpenAI.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("newApi.geminiOpenAI.configSteps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiOpenAI.configSteps.selectType.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.geminiOpenAI.configSteps.selectType.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiOpenAI.configSteps.configKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">{t("newApi.geminiOpenAI.configSteps.configKey.example")}</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.geminiOpenAI.configSteps.configKey.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiOpenAI.configSteps.fullAddress.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800 break-all">
                          {t("newApi.geminiOpenAI.configSteps.fullAddress.example")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.geminiOpenAI.configSteps.fullAddress.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.geminiOpenAI.configSteps.manualModel.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.geminiOpenAI.configSteps.manualModel.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_gemini_openai.png"
                  alt={t("newApi.geminiOpenAI.imageAlt")}
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
                  {t("newApi.geminiOpenAI.limitation.title")}
                </h4>
                <p className="text-yellow-800 text-sm">
                  {t("newApi.geminiOpenAI.limitation.description")}
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
          {t("newApi.anthropic.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("newApi.anthropic.configSteps.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.anthropic.configSteps.selectType.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("newApi.anthropic.configSteps.selectType.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.anthropic.configSteps.configKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">{t("newApi.anthropic.configSteps.configKey.example")}</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.anthropic.configSteps.configKey.note")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("newApi.anthropic.configSteps.apiAddress.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          {t("newApi.anthropic.configSteps.apiAddress.example")}
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("newApi.anthropic.configSteps.apiAddress.note")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_newapi_anthropic.png"
                  alt={t("newApi.anthropic.imageAlt")}
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t("newApi.importantNotes.title")}</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">{t("newApi.importantNotes.configuration.title")}</h3>
              <div className="text-blue-800 text-sm space-y-1">
                {tArray("newApi.importantNotes.configuration.items").map((item: string, index: number) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("newApi.relatedResources.title")}</h3>
        <div className="space-y-2">
          <Link
            href={t("newApi.relatedResources.newApiDocs.url")}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("newApi.relatedResources.newApiDocs.text")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("newApi.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("newApi.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}