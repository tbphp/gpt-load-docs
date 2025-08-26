"use client";

import { Globe, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ChannelsPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/channels");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("channels.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("channels.subtitle")}
        </p>
      </div>

      {/* Supported Services */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("channels.supportedServices.title")}
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-blue-200 rounded-lg p-6 bg-blue-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                {t("channels.supportedServices.openai.title")}
              </h3>
            </div>
            <ul className="text-blue-800 space-y-2 text-sm">
              {tArray("channels.supportedServices.openai.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="border border-green-200 rounded-lg p-6 bg-green-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-900">
                {t("channels.supportedServices.gemini.title")}
              </h3>
            </div>
            <ul className="text-green-800 space-y-2 text-sm">
              {tArray("channels.supportedServices.gemini.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-orange-900">
                {t("channels.supportedServices.claude.title")}
              </h3>
            </div>
            <ul className="text-orange-800 space-y-2 text-sm">
              {tArray("channels.supportedServices.claude.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="font-semibold text-purple-900 mb-2">
            {t("channels.supportedServices.extensibility.title")}
          </h3>
          <p className="text-purple-800 text-sm">
            {t("channels.supportedServices.extensibility.description")}
          </p>
        </div>
      </div>

      {/* Proxy Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("channels.proxyFormat.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {t("channels.proxyFormat.unifiedEndpoint.title")}
          </h3>
          <div className="text-center">
            <code className="bg-white px-4 py-2 rounded-lg font-mono border text-gray-600">
              {t("channels.proxyFormat.unifiedEndpoint.format")}
            </code>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("channels.proxyFormat.parameters.title")}
              </h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                {tArray("channels.proxyFormat.parameters.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("channels.proxyFormat.authentication.title")}
              </h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                {tArray("channels.proxyFormat.authentication.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* OpenAI Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Globe className="inline h-6 w-6 mr-2 text-blue-600" />
          {t("channels.openaiFormat.title")}
        </h2>

        <div className="space-y-8">
          {/* Authentication */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.openaiFormat.authentication.title")}
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-blue-800 text-sm">
                {t("channels.openaiFormat.authentication.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.examples.original.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.openaiFormat.examples.original.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.examples.proxy.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.openaiFormat.examples.proxy.code")}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.openaiFormat.migration.step1")}
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.openaiFormat.migration.step2")}
              </span>
            </div>
          </div>

          {/* Supported Endpoints */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.openaiFormat.endpoints.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.endpoints.main.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.openaiFormat.endpoints.main.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.endpoints.other.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.openaiFormat.endpoints.other.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SDK Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.openaiFormat.sdk.title")}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.sdk.python.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.openaiFormat.sdk.python.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.openaiFormat.sdk.nodejs.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.openaiFormat.sdk.nodejs.code")}</code>
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
          {t("channels.geminiFormat.title")}
        </h2>

        <div className="space-y-8">
          {/* Authentication */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.geminiFormat.authentication.title")}
            </h3>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <p className="text-green-800 text-sm">
                {t("channels.geminiFormat.authentication.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.examples.original.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.geminiFormat.examples.original.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.examples.proxy.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.geminiFormat.examples.proxy.code")}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.geminiFormat.migration.step1")}
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.geminiFormat.migration.step2")}
              </span>
            </div>
          </div>

          {/* Supported Endpoints */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.geminiFormat.endpoints.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.endpoints.content.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.geminiFormat.endpoints.content.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.endpoints.models.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.geminiFormat.endpoints.models.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SDK Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.geminiFormat.sdk.title")}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.sdk.python.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.geminiFormat.sdk.python.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.geminiFormat.sdk.http.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.geminiFormat.sdk.http.code")}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anthropic Format */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Globe className="inline h-6 w-6 mr-2 text-orange-600" />
          {t("channels.claudeFormat.title")}
        </h2>

        <div className="space-y-8">
          {/* Authentication */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.claudeFormat.authentication.title")}
            </h3>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-orange-800 text-sm">
                {t("channels.claudeFormat.authentication.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.examples.original.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.claudeFormat.examples.original.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.examples.proxy.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.claudeFormat.examples.proxy.code")}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.claudeFormat.migration.step1")}
              </span>
            </div>
            <div className="mt-4 flex items-center space-x-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-gray-600">
                {t("channels.claudeFormat.migration.step2")}
              </span>
            </div>
          </div>

          {/* Supported Endpoints */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.claudeFormat.endpoints.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.endpoints.main.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.claudeFormat.endpoints.main.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.endpoints.models.title")}
                </h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  {tArray("channels.claudeFormat.endpoints.models.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SDK Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.claudeFormat.sdk.title")}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.sdk.python.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.claudeFormat.sdk.python.code")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("channels.claudeFormat.sdk.http.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("channels.claudeFormat.sdk.http.code")}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("channels.groupManagement.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.groupManagement.creation.title")}
            </h3>
            <ol className="text-gray-600 space-y-2 text-sm">
              {tArray("channels.groupManagement.creation.steps").map((step: string, index: number) => (
                <li key={index}>{index + 1}. {step}</li>
              ))}
            </ol>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.groupManagement.configuration.title")}
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              {tArray("channels.groupManagement.configuration.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("channels.migration.title")}
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("channels.migration.guide.title")}
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {tObjectArray<{title: string, description: string}>("channels.migration.guide.steps").map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`${
                    index === 0 ? 'bg-blue-100' : 
                    index === 1 ? 'bg-green-100' : 'bg-purple-100'
                  } p-3 rounded-lg mb-3 mx-auto w-12 h-12 flex items-center justify-center`}>
                    <span className={`${
                      index === 0 ? 'text-blue-600' : 
                      index === 1 ? 'text-green-600' : 'text-purple-600'
                    } font-bold`}>
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-yellow-900 mb-2">
              {t("channels.migration.seamless.title")}
            </h3>
            <p className="text-yellow-800 text-sm">
              {t("channels.migration.seamless.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">
          {t("channels.summary.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {t("channels.summary.transparent.title")}
            </h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              {tArray("channels.summary.transparent.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {t("channels.summary.unified.title")}
            </h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              {tArray("channels.summary.unified.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">
              {t("channels.summary.scalable.title")}
            </h3>
            <ul className="text-blue-100 space-y-1 text-sm">
              {tArray("channels.summary.scalable.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}