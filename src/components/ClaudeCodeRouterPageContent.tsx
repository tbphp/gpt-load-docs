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
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ClaudeCodeRouterPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/integrations/claude-code-router");

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">CCR</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("claudeCodeRouter.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {t("claudeCodeRouter.description")}
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-200 mb-1">{t("claudeCodeRouter.prerequisites.title")}</h3>
            <div className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
              {tArray("claudeCodeRouter.prerequisites.items").map((item: string, index: number) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 步骤1：安装工具 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 dark:text-green-400 font-bold text-sm">1</span>
          </div>
          {t("claudeCodeRouter.installation.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Download className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              {t("claudeCodeRouter.installation.globalInstall.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium mb-2">
                    {t("claudeCodeRouter.installation.claudeCode.title")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 dark:text-green-300 font-mono">
                      {t("claudeCodeRouter.installation.claudeCode.command")}
                    </code>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium mb-2">
                    {t("claudeCodeRouter.installation.claudeCodeRouter.title")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 dark:text-green-300 font-mono">
                      {t("claudeCodeRouter.installation.claudeCodeRouter.command")}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-md">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>{t("claudeCodeRouter.installation.reference.title")}</strong>
                  <Link
                    href={t("claudeCodeRouter.installation.reference.url")}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-300 underline ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("claudeCodeRouter.installation.reference.text")}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 步骤2：配置文件 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
          </div>
          {t("claudeCodeRouter.configuration.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Settings className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              {t("claudeCodeRouter.configuration.createConfig.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium mb-2">{t("claudeCodeRouter.configuration.configPath.title")}</p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-3">
                    <code className="text-sm text-gray-800 dark:text-gray-300 font-mono">
                      {t("claudeCodeRouter.configuration.configPath.path")}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                    {t("claudeCodeRouter.configuration.configPath.note")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium mb-2">{t("claudeCodeRouter.configuration.configExample.title")}</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-800 dark:text-gray-300 font-mono">
                      <code>{t("claudeCodeRouter.configuration.configExample.content")}</code>
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
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
          </div>
          {t("claudeCodeRouter.explanation.title")}
        </h2>

        <div className="space-y-6">
          {/* Providers 配置 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("claudeCodeRouter.explanation.providers.title")}
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {tObjectArray<{name: string, description: string, type: string}>("claudeCodeRouter.explanation.providers.items").slice(0, 2).map((provider, index) => (
                    <div key={index} className={`p-3 border rounded-md ${
                      provider.type === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' :
                      provider.type === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' :
                      provider.type === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700' :
                      'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700'
                    }`}>
                      <p className={`font-medium text-sm ${
                        provider.type === 'green' ? 'text-green-900 dark:text-green-200' :
                        provider.type === 'blue' ? 'text-blue-900 dark:text-blue-200' :
                        provider.type === 'cyan' ? 'text-cyan-900 dark:text-cyan-200' :
                        'text-purple-900 dark:text-purple-200'
                      }`}>
                        {provider.name}
                      </p>
                      <p className={`text-xs ${
                        provider.type === 'green' ? 'text-green-700 dark:text-green-300' :
                        provider.type === 'blue' ? 'text-blue-700 dark:text-blue-300' :
                        provider.type === 'cyan' ? 'text-cyan-700 dark:text-cyan-300' :
                        'text-purple-700 dark:text-purple-300'
                      }`}>
                        {provider.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {tObjectArray<{name: string, description: string, type: string}>("claudeCodeRouter.explanation.providers.items").slice(2, 4).map((provider, index) => (
                    <div key={index} className={`p-3 border rounded-md ${
                      provider.type === 'cyan' ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-700' :
                      'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700'
                    }`}>
                      <p className={`font-medium text-sm ${
                        provider.type === 'cyan' ? 'text-cyan-900 dark:text-cyan-200' :
                        'text-purple-900 dark:text-purple-200'
                      }`}>
                        {provider.name}
                      </p>
                      <p className={`text-xs ${
                        provider.type === 'cyan' ? 'text-cyan-700 dark:text-cyan-300' :
                        'text-purple-700 dark:text-purple-300'
                      }`}>
                        {provider.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-400 dark:bg-amber-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-900 dark:text-amber-200 mb-2">
                      {t("claudeCodeRouter.explanation.providers.important.title")}
                    </h4>
                    <ul className="text-amber-800 dark:text-amber-300 text-sm space-y-1">
                      {tArray("claudeCodeRouter.explanation.providers.important.items").map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Router 配置 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("claudeCodeRouter.explanation.router.title")}
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {tObjectArray<{key: string, description: string}>("claudeCodeRouter.explanation.router.items").slice(0, 3).map((item, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {item.key}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {tObjectArray<{key: string, description: string}>("claudeCodeRouter.explanation.router.items").slice(3, 5).map((item, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {item.key}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-md">
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  <strong>{t("claudeCodeRouter.explanation.router.note.title")}</strong>
                  {t("claudeCodeRouter.explanation.router.note.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 步骤4：启动使用 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mr-3">
            <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">4</span>
          </div>
          {t("claudeCodeRouter.usage.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Terminal className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
              {t("claudeCodeRouter.usage.launch.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 dark:text-white font-medium mb-2">
                    {t("claudeCodeRouter.usage.launch.commandTitle")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 dark:text-green-300 font-mono">
                      {t("claudeCodeRouter.usage.launch.command")}
                    </code>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs mt-2">
                    {t("claudeCodeRouter.usage.launch.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 验证和测试 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t("claudeCodeRouter.verification.title")}</h2>
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 dark:text-green-200 mb-1">{t("claudeCodeRouter.verification.test.title")}</h3>
              <p className="text-green-800 text-sm">
                {t("claudeCodeRouter.verification.test.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("claudeCodeRouter.relatedResources.title")}</h3>
        <div className="space-y-3">
          <Link
            href={t("claudeCodeRouter.relatedResources.officialDocs.url")}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("claudeCodeRouter.relatedResources.officialDocs.text")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 transition-colors duration-200"
          >
            {t("claudeCodeRouter.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-300 transition-colors duration-200"
          >
            {t("claudeCodeRouter.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}