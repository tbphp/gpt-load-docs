"use client";

import { Zap, Database, Shield, Settings, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function StandalonePageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  useSeo("/docs/deployment/standalone");

  const requirements = tArray("standalone.requirements.items");
  const commonCommands = tObjectArray<{title: string; code: string}>("standalone.commonCommands.items");
  const databaseConfigs = tObjectArray<{name: string; steps: {description: string; file: string; code: string}[]}>("standalone.optional.database.configs");
  const troubleshootingItems = tObjectArray<{title: string; description: string; solution: {type: string; items?: string[]; content?: string} | null}>("standalone.troubleshooting.items");
  const nextSteps = tArray("standalone.nextSteps.items");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("standalone.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("standalone.subtitle")}
        </p>
      </div>

      {/* Quick Start Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("standalone.quickStart.title")}
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Zap className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900">
                {t("standalone.quickStart.lightweight.title")}
              </h4>
              <p className="text-green-800 text-sm">
                {t("standalone.quickStart.lightweight.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.requirements.title")}
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.installation.title")}
          </h3>

          {/* Critical Security Warning */}
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-red-600 text-2xl">🚨</div>
              <div>
                <h4 className="text-lg font-bold text-red-800 mb-2">
                  {t("standalone.security.warning.title")}
                </h4>
                <div className="text-red-700 space-y-2">
                  <p className="font-semibold">
                    {t("standalone.security.warning.message")}
                  </p>
                  <div className="bg-red-100 p-3 rounded-lg">
                    <p className="font-medium text-red-800 mb-1">
                      {t("standalone.security.requirements.title")}
                    </p>
                    <ul className="text-sm space-y-1 ml-4">
                      {tArray("standalone.security.requirements.items").map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm font-medium text-red-800">
                    {t("standalone.security.risk")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("standalone.installation.step1.title")}
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  {t("standalone.installation.step1.comment")}
                  <br />
                  mkdir -p gpt-load && cd gpt-load
                </code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("standalone.installation.step2.title")}
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  {t("standalone.installation.step2.dockerComment")}
                  <br />
                  wget
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/docker-compose.yml
                  <br />
                  <br />
                  {t("standalone.installation.step2.envComment")}
                  <br />
                  wget -O .env
                  https://raw.githubusercontent.com/tbphp/gpt-load/refs/heads/main/.env.example
                </code>
              </div>

              {/* Mandatory Security Configuration */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <div className="flex items-start space-x-2">
                  <div className="text-red-600 text-lg">⚠️</div>
                  <div>
                    <h5 className="font-bold text-red-800 mb-2">
                      {t("standalone.installation.step2.securityConfig.title")}
                    </h5>
                    <p className="text-red-700 text-sm mb-3">
                      {t("standalone.installation.step2.securityConfig.editFile")}{" "}
                      <code className="bg-red-200 px-1 rounded">.env</code>{" "}
                      {t("standalone.installation.step2.securityConfig.changeFrom")}
                    </p>
                    <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs mb-2">
                      <code>AUTH_KEY=sk-123456</code>
                    </div>
                    <p className="text-red-700 text-sm mb-2">
                      {t("standalone.installation.step2.securityConfig.changeTo")}
                    </p>
                    <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs mb-3">
                      <code>
                        AUTH_KEY=sk-prod-AbCdEfGh123456$#@!XyZabc789012
                      </code>
                    </div>
                    <div className="text-xs text-red-600 bg-red-100 p-2 rounded">
                      <strong>{t("standalone.installation.step2.securityConfig.reminder.title")}</strong>
                      {t("standalone.installation.step2.securityConfig.reminder.message")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <span className="text-blue-600 font-semibold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("standalone.installation.step3.title")}
                </h4>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                <code className="text-sm">
                  {t("standalone.installation.step3.comment")}
                  <br />
                  docker compose up -d
                </code>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <span className="text-green-600 font-semibold">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {t("standalone.installation.step4.title")}
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">{t("standalone.installation.step4.accessAdmin")}</p>
                  <a
                    href="http://localhost:3001"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://localhost:3001
                  </a>
                </div>
                <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <div className="text-green-600 text-lg">🔐</div>
                    <div>
                      <p className="text-green-800 text-sm font-medium mb-1">
                        {t("standalone.installation.step4.useAuthKey")}
                      </p>
                      <p className="text-green-700 text-xs">
                        {t("standalone.installation.step4.fileSet")}{" "}
                        <code className="bg-green-200 px-1 rounded">.env</code>{" "}
                        {t("standalone.installation.step4.login")}
                        <code className="bg-green-200 px-1 rounded">
                          AUTH_KEY
                        </code>{" "}
                        {t("standalone.installation.step4.value")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-300 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <div className="text-amber-600 text-lg">💡</div>
                    <div>
                      <p className="text-amber-800 text-sm">
                        <strong>{t("standalone.installation.step4.securityTip.title")}</strong>
                        {t("standalone.installation.step4.securityTip.message")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Commands */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.commonCommands.title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {commonCommands.map((command, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{command.title}</h4>
                <code className="text-sm text-gray-700">{command.code}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Deployment Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("standalone.optional.title")}
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Database className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900">
                {t("standalone.optional.performance.title")}
              </h4>
              <p className="text-blue-800 text-sm">
                {t("standalone.optional.performance.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Database Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.optional.database.title")}
          </h3>

          <div className="space-y-6">
            {databaseConfigs && databaseConfigs.length > 0 ? databaseConfigs.map((config, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {config.name}
                </h4>
                {config.steps && config.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="mb-4">
                    <p className="text-gray-700 mb-2">
                      {step.description ? (
                        <>
                          {step.description.split('{file}')[0]}
                          <code className="bg-gray-100 px-1 rounded">{step.file || ''}</code>
                          {step.description.split('{file}')[1]}
                        </>
                      ) : ''}
                    </p>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                      <code className="whitespace-pre-wrap">{step.code || ''}</code>
                    </div>
                  </div>
                ))}
              </div>
            )) : (
              <div className="text-gray-500">加载中...</div>
            )}
          </div>
        </div>

        {/* Redis Configuration */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.optional.redis.title")}
          </h3>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                {t("standalone.optional.redis.step1.description")}
                <code className="bg-gray-100 px-1 rounded">
                  {t("standalone.optional.redis.step1.file")}
                </code>
                {t("standalone.optional.redis.step1.action")}
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code className="whitespace-pre-wrap">{t("standalone.optional.redis.step1.code")}</code>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                {t("standalone.optional.redis.step2.description")}{" "}
                <code className="bg-gray-100 px-1 rounded">{t("standalone.optional.redis.step2.file")}</code>{" "}
                {t("standalone.optional.redis.step2.action")}
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                <code>REDIS_DSN=redis://redis:6379/0</code>
              </div>
            </div>
          </div>
        </div>

        {/* Restart Services */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("standalone.optional.restart.title")}
          </h3>

          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-4">{t("standalone.optional.restart.description")}</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
              <code>
                {t("standalone.optional.restart.stopComment")}
                <br />
                docker compose down
                <br />
                <br />
                {t("standalone.optional.restart.startComment")}
                <br />
                docker compose up -d
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("standalone.troubleshooting.title")}
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("standalone.troubleshooting.commonIssues.title")}
            </h3>
            <div className="space-y-4">
              {troubleshootingItems.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  {item.solution && (
                    <div className="text-gray-600 text-sm">
                      {item.solution.type === 'list' && item.solution.items && (
                        <ul className="text-gray-600 text-sm space-y-1 ml-4">
                          {item.solution.items.map((listItem, listIndex) => (
                            <li key={listIndex}>• {listItem}</li>
                          ))}
                        </ul>
                      )}
                      {item.solution.type === 'code' && item.solution.content && (
                        <div className="bg-gray-100 p-2 rounded text-sm">
                          <code>{item.solution.content}</code>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t("standalone.nextSteps.title")}
        </h2>
        <p className="text-gray-700 mb-6">{t("standalone.nextSteps.description")}</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          {nextSteps.map((step, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            {t("standalone.nextSteps.buttons.configuration")}
          </a>
          <a
            href="/docs/configuration/management"
            className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Shield className="h-4 w-4 mr-2" />
            {t("standalone.nextSteps.buttons.management")}
          </a>
        </div>
      </div>
    </div>
  );
}