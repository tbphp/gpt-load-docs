"use client";

import { Route, ArrowRight, Globe, Settings } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function RoutingStrategyPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/architecture-design/routing-strategy");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t("routingStrategy.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("routingStrategy.subtitle")}
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("routingStrategy.coreProcessing.title")}
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-700 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 dark:text-blue-300 mb-2">
            {t("routingStrategy.coreProcessing.transparentPrinciple.title")}
          </h3>
          <p className="text-blue-800 dark:text-blue-300 dark:text-blue-400 mb-4">
            {t("routingStrategy.coreProcessing.transparentPrinciple.description")}
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4">
            <p className="text-blue-900 dark:text-blue-200 dark:text-blue-300 font-mono text-sm">
              {t("routingStrategy.coreProcessing.transparentPrinciple.rule")}
            </p>
          </div>
        </div>
      </div>

      {/* Processing Logic */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("routingStrategy.processingFlow.title")}
        </h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid gap-4">
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t("routingStrategy.processingFlow.serviceAddress")}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                http://localhost:3001
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t("routingStrategy.processingFlow.upstreamAddress")}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                https://api.test.com
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t("routingStrategy.processingFlow.groupName")}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">test</code>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {t("routingStrategy.processingFlow.clientRequest")}
                </div>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border dark:border-gray-700">
                  http://localhost:3001/proxy/test/v1/chat/completions
                </code>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 dark:text-gray-500 dark:text-gray-400 mx-4" />
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {t("routingStrategy.processingFlow.actualRequest")}
                </div>
                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded border dark:border-gray-700">
                  https://api.test.com/v1/chat/completions
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("routingStrategy.configurationMethods.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {t("routingStrategy.configurationMethods.description")}
        </p>

        <div className="space-y-8">
          {/* Configuration 1 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                {t("routingStrategy.configurationMethods.method1.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method1.gptLoadConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method1.upstreamAddress")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        https://openrouter.ai
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method1.testPath")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        /api/v1/chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method1.clientConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method1.cherryStudioApi")}:
                      </span>
                      <code className="block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter/api
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration 2 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Settings className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                {t("routingStrategy.configurationMethods.method2.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method2.gptLoadConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method2.upstreamAddress")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        https://openrouter.ai/api
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method2.testPath")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        /v1/chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method2.clientConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method2.cherryStudioApi")}:
                      </span>
                      <code className="block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Configuration 3 */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Settings className="h-5 w-5 text-purple-600 dark:text-purple-400 dark:text-purple-400 mr-2" />
                {t("routingStrategy.configurationMethods.method3.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method3.gptLoadConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method3.upstreamAddress")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        https://openrouter.ai/api/v1
                      </code>
                    </div>
                    <div className="flex">
                      <span className="w-20 text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method3.testPath")}:
                      </span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        /chat/completions
                      </code>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {t("routingStrategy.configurationMethods.method3.clientConfig")}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">
                        {t("routingStrategy.configurationMethods.method3.cherryStudioApi")}:
                      </span>
                      <code className="block bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1">
                        http://localhost:3001/proxy/openrouter/
                      </code>
                      <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                        {t("routingStrategy.configurationMethods.method3.note")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("routingStrategy.bestPractices.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 dark:text-green-200 mb-3 flex items-center">
              <Route className="h-5 w-5 mr-2" />
              {t("routingStrategy.bestPractices.configurationSuggestions.title")}
            </h3>
            <ul className="text-green-800 dark:text-green-300 space-y-2 text-sm">
              {tArray("routingStrategy.bestPractices.configurationSuggestions.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 dark:text-blue-300 mb-3 flex items-center">
              <Globe className="h-5 w-5 mr-2" />
              {t("routingStrategy.bestPractices.debuggingTips.title")}
            </h3>
            <ul className="text-blue-800 dark:text-blue-300 dark:text-blue-400 space-y-2 text-sm">
              {tArray("routingStrategy.bestPractices.debuggingTips.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          {t("routingStrategy.summary.title")}
        </h2>
        <p className="text-blue-100 mb-4">
          {t("routingStrategy.summary.description")}
        </p>
        <div className="text-blue-100 text-sm">
          <strong>{t("routingStrategy.summary.corePrinciple")}:</strong> {t("routingStrategy.summary.principle")}
        </div>
      </div>
    </div>
  );
}