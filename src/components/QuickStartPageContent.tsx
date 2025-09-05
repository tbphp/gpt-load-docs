"use client";

import { Zap, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function QuickStartPageContent() {
  const { t } = useTranslation();
  
  // 使用 useSeo hook 处理语言切换时的标题更新
  useSeo("/docs");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('docsQuickStart.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('docsQuickStart.subtitle')}
        </p>
      </div>

      {/* Quick Start Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('docsQuickStart.quickLaunch.title')}</h2>

        <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Zap className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 dark:text-green-200">{t('docsQuickStart.quickLaunch.lightweightDeployment.title')}</h4>
              <p className="text-green-800 dark:text-green-300 text-sm">
                {t('docsQuickStart.quickLaunch.lightweightDeployment.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('docsQuickStart.requirements.title')}</h3>
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t('docsQuickStart.requirements.docker')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t('docsQuickStart.requirements.os')}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t('docsQuickStart.requirements.resources')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('docsQuickStart.installation.title')}</h3>

          {/* Security Warning - High Priority */}
          <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-700 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-red-600 text-2xl">🚨</div>
              <div>
                <h4 className="text-lg font-bold text-red-800 dark:text-red-200 mb-2">
                  {t('docsQuickStart.security.title')}
                </h4>
                <div className="text-red-700 dark:text-red-300 space-y-2">
                  <p className="font-semibold">
                    {t('docsQuickStart.security.warning')}
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• {t('docsQuickStart.security.requirements.complex')}</li>
                    <li>• {t('docsQuickStart.security.requirements.characters')}</li>
                    <li>
                      • {t('docsQuickStart.security.requirements.avoid')}{" "}
                      <code className="bg-red-200 dark:bg-red-800/40 px-1 rounded">sk-123456</code>{" "}
                      {t('docsQuickStart.security.requirements.simpleKeys')}
                    </li>
                    <li>• {t('docsQuickStart.security.requirements.productionRisk')}</li>
                  </ul>
                  <p className="text-sm font-medium bg-red-100 dark:bg-red-900/40 p-2 rounded">
                    {t('docsQuickStart.security.recommendedFormat')}: <code>sk-prod-[{t('docsQuickStart.security.randomString')}32{t('docsQuickStart.security.characters')}]</code>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('docsQuickStart.steps.createDirectory.title')}
                </h4>
              </div>
              <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # {t('docsQuickStart.steps.createDirectory.comment')}
                  <br />
                  mkdir -p gpt-load && cd gpt-load
                </code>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('docsQuickStart.steps.downloadConfig.title')}
                </h4>
              </div>
              <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # {t('docsQuickStart.steps.downloadConfig.dockerComment')}
                  <br />
                  wget
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/docker-compose.yml
                  <br />
                  <br />
                  # {t('docsQuickStart.steps.downloadConfig.envComment')}
                  <br />
                  wget -O .env
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/.env.example
                </code>
              </div>

              {/* Security configuration step */}
              <div className="bg-orange-50 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-800 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <div className="text-orange-600 text-lg">🔐</div>
                  <div>
                    <h5 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
                      {t('docsQuickStart.steps.downloadConfig.securityConfig.title')}
                    </h5>
                    <p className="text-orange-700 dark:text-orange-400 text-sm mb-2">
                      {t('docsQuickStart.steps.downloadConfig.securityConfig.editFile')}{" "}
                      <code className="bg-orange-200 dark:bg-orange-800/40 px-1 rounded">.env</code>{" "}
                      {t('docsQuickStart.steps.downloadConfig.securityConfig.changeFrom')}
                    </p>
                    <div className="bg-gray-900 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-2 rounded text-xs mb-2">
                      <code>AUTH_KEY=sk-123456</code>
                    </div>
                    <p className="text-orange-700 dark:text-orange-400 text-sm mb-2">
                      {t('docsQuickStart.steps.downloadConfig.securityConfig.changeTo')}
                    </p>
                    <div className="bg-gray-900 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-2 rounded text-xs">
                      <code>
                        AUTH_KEY=sk-prod-your-strong-random-key-32-chars
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('docsQuickStart.steps.startServices.title')}
                </h4>
              </div>
              <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  # {t('docsQuickStart.steps.startServices.comment')}
                  <br />
                  docker compose up -d
                </code>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <span className="text-green-600 dark:text-green-400 font-semibold">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t('docsQuickStart.steps.verify.title')}
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{t('docsQuickStart.steps.verify.accessAdmin')}:</p>
                  <a
                    href="http://localhost:3001"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://localhost:3001
                  </a>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-300 dark:border-green-800 rounded-lg p-4">
                  <p className="text-green-800 dark:text-green-300 text-sm">
                    {t('docsQuickStart.steps.verify.useAuthKey')}{" "}
                    <code className="bg-green-200 dark:bg-green-800/40 px-1 rounded">.env</code>{" "}
                    {t('docsQuickStart.steps.verify.fileSet')}
                    <code className="bg-green-200 dark:bg-green-800/40 px-1 rounded">
                      AUTH_KEY
                    </code>{" "}
                    {t('docsQuickStart.steps.verify.login')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Commands */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{t('docsQuickStart.commands.title')}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('docsQuickStart.commands.checkStatus')}</h4>
              <code className="text-sm text-gray-700 dark:text-gray-300">docker compose ps</code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('docsQuickStart.commands.viewLogs')}</h4>
              <code className="text-sm text-gray-700 dark:text-gray-300">
                docker compose logs -f
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('docsQuickStart.commands.restart')}</h4>
              <code className="text-sm text-gray-700 dark:text-gray-300">
                docker compose down && docker compose up -d
              </code>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('docsQuickStart.commands.update')}</h4>
              <code className="text-sm text-gray-700 dark:text-gray-300">
                docker compose pull && docker compose down && docker compose up
                -d
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <p className="text-gray-700 dark:text-gray-300">
          {t('docsQuickStart.nextSteps.description')}{" "}
          <a href="/docs/deployment" className="text-blue-600 dark:text-blue-400 hover:underline">
            <strong>{t('docsQuickStart.nextSteps.deploymentGuide')}</strong>
          </a>
          {t('docsQuickStart.nextSteps.period')}
        </p>
      </div>
    </div>
  );
}