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
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
            <span className="text-purple-600 font-bold text-sm">CCR</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("claudeCodeRouter.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t("claudeCodeRouter.description")}
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">{t("claudeCodeRouter.prerequisites.title")}</h3>
            <div className="text-blue-800 text-sm space-y-1">
              {tArray("claudeCodeRouter.prerequisites.items").map((item: string, index: number) => (
                <p key={index}>• {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 步骤1：安装工具 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">1</span>
          </div>
          {t("claudeCodeRouter.installation.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Download className="h-5 w-5 text-blue-600 mr-2" />
              {t("claudeCodeRouter.installation.globalInstall.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    {t("claudeCodeRouter.installation.claudeCode.title")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      {t("claudeCodeRouter.installation.claudeCode.command")}
                    </code>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    {t("claudeCodeRouter.installation.claudeCodeRouter.title")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      {t("claudeCodeRouter.installation.claudeCodeRouter.command")}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-yellow-800 text-sm">
                  <strong>{t("claudeCodeRouter.installation.reference.title")}</strong>
                  <Link
                    href={t("claudeCodeRouter.installation.reference.url")}
                    className="text-blue-600 hover:text-blue-800 underline ml-1"
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">2</span>
          </div>
          {t("claudeCodeRouter.configuration.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 text-blue-600 mr-2" />
              {t("claudeCodeRouter.configuration.createConfig.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">{t("claudeCodeRouter.configuration.configPath.title")}</p>
                  <div className="bg-gray-100 rounded-md p-3">
                    <code className="text-sm text-gray-800 font-mono">
                      {t("claudeCodeRouter.configuration.configPath.path")}
                    </code>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">
                    {t("claudeCodeRouter.configuration.configPath.note")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">{t("claudeCodeRouter.configuration.configExample.title")}</p>
                  <div className="bg-gray-900 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          {t("claudeCodeRouter.explanation.title")}
        </h2>

        <div className="space-y-6">
          {/* Providers 配置 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("claudeCodeRouter.explanation.providers.title")}
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {tObjectArray<{name: string, description: string, type: string}>("claudeCodeRouter.explanation.providers.items").slice(0, 2).map((provider, index) => (
                    <div key={index} className={`p-3 border rounded-md ${
                      provider.type === 'green' ? 'bg-green-50 border-green-200' :
                      provider.type === 'blue' ? 'bg-blue-50 border-blue-200' :
                      provider.type === 'cyan' ? 'bg-cyan-50 border-cyan-200' :
                      'bg-purple-50 border-purple-200'
                    }`}>
                      <p className={`font-medium text-sm ${
                        provider.type === 'green' ? 'text-green-900' :
                        provider.type === 'blue' ? 'text-blue-900' :
                        provider.type === 'cyan' ? 'text-cyan-900' :
                        'text-purple-900'
                      }`}>
                        {provider.name}
                      </p>
                      <p className={`text-xs ${
                        provider.type === 'green' ? 'text-green-700' :
                        provider.type === 'blue' ? 'text-blue-700' :
                        provider.type === 'cyan' ? 'text-cyan-700' :
                        'text-purple-700'
                      }`}>
                        {provider.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {tObjectArray<{name: string, description: string, type: string}>("claudeCodeRouter.explanation.providers.items").slice(2, 4).map((provider, index) => (
                    <div key={index} className={`p-3 border rounded-md ${
                      provider.type === 'cyan' ? 'bg-cyan-50 border-cyan-200' :
                      'bg-purple-50 border-purple-200'
                    }`}>
                      <p className={`font-medium text-sm ${
                        provider.type === 'cyan' ? 'text-cyan-900' :
                        'text-purple-900'
                      }`}>
                        {provider.name}
                      </p>
                      <p className={`text-xs ${
                        provider.type === 'cyan' ? 'text-cyan-700' :
                        'text-purple-700'
                      }`}>
                        {provider.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-900 mb-2">
                      {t("claudeCodeRouter.explanation.providers.important.title")}
                    </h4>
                    <ul className="text-amber-800 text-sm space-y-1">
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
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("claudeCodeRouter.explanation.router.title")}
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {tObjectArray<{key: string, description: string}>("claudeCodeRouter.explanation.router.items").slice(0, 3).map((item, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-700 font-medium text-sm">
                        {item.key}
                      </span>
                      <span className="text-gray-600 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {tObjectArray<{key: string, description: string}>("claudeCodeRouter.explanation.router.items").slice(3, 5).map((item, index) => (
                    <div key={index} className="flex justify-between p-2 bg-gray-50 rounded">
                      <span className="text-gray-700 font-medium text-sm">
                        {item.key}
                      </span>
                      <span className="text-gray-600 text-sm">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-blue-800 text-sm">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-orange-600 font-bold text-sm">4</span>
          </div>
          {t("claudeCodeRouter.usage.title")}
        </h2>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Terminal className="h-5 w-5 text-green-600 mr-2" />
              {t("claudeCodeRouter.usage.launch.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-gray-900 font-medium mb-2">
                    {t("claudeCodeRouter.usage.launch.commandTitle")}
                  </p>
                  <div className="bg-gray-900 rounded-md p-4">
                    <code className="text-sm text-green-400 font-mono">
                      {t("claudeCodeRouter.usage.launch.command")}
                    </code>
                  </div>
                  <p className="text-gray-600 text-xs mt-2">
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
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t("claudeCodeRouter.verification.title")}</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">{t("claudeCodeRouter.verification.test.title")}</h3>
              <p className="text-green-800 text-sm">
                {t("claudeCodeRouter.verification.test.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("claudeCodeRouter.relatedResources.title")}</h3>
        <div className="space-y-3">
          <Link
            href={t("claudeCodeRouter.relatedResources.officialDocs.url")}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("claudeCodeRouter.relatedResources.officialDocs.text")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("claudeCodeRouter.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("claudeCodeRouter.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}