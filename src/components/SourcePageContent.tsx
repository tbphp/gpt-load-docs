"use client";

import {
  Code,
  GitBranch,
  Settings,
  CheckCircle,
  AlertTriangle,
  Download,
  Play,
  Wrench,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function SourcePageContent() {
  const { t } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/deployment/source");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t("deployment.source.title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("deployment.source.subtitle")}
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("deployment.source.prerequisites.title")}</h2>

        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Code className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-200">{t("deployment.source.prerequisites.development.title")}</h4>
              <p className="text-blue-800 dark:text-blue-300 text-sm">
                {t("deployment.source.prerequisites.development.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("deployment.source.prerequisites.required.title")}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t("deployment.source.prerequisites.required.go")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t("deployment.source.prerequisites.required.git")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t("deployment.source.prerequisites.required.make")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span>{t("deployment.source.prerequisites.required.database")}</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("deployment.source.prerequisites.optional.title")}
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{t("deployment.source.prerequisites.optional.redis")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{t("deployment.source.prerequisites.optional.nodejs")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{t("deployment.source.prerequisites.optional.docker")}</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span>{t("deployment.source.prerequisites.optional.ide")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("deployment.source.installation.title")}</h2>

        <div className="space-y-8">
          {/* Step 1: Clone Repository */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("deployment.source.installation.step1.title")}
                </h3>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {t("deployment.source.installation.step1.description")}
              </p>
              <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg">
                <code className="text-sm">
                  git clone https://github.com/tbphp/gpt-load.git
                  <br />
                  cd gpt-load
                </code>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>{t("deployment.source.installation.tip")}：</strong>{t("deployment.source.installation.step1.tip")}
              </p>
            </div>
          </div>

          {/* Step 2: Install Dependencies */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("deployment.source.installation.step2.title")}
                </h3>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t("deployment.source.installation.step2.description")}</p>
              <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg">
                <code className="text-sm">{t("deployment.source.installation.step2.code")}</code>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                    <strong>{t("deployment.source.installation.note")}：</strong>
                    {t("deployment.source.installation.step2.warning")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Database Setup */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("deployment.source.installation.step3.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("deployment.source.installation.step3.config.title")}
                </h4>
                <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">{t("deployment.source.installation.step3.config.code")}</code>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("deployment.source.installation.step3.config.description")}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("deployment.source.installation.step3.database.title")}
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                      {t("deployment.source.installation.step3.database.sqlite")}：
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                      <code>{t("deployment.source.installation.step3.database.sqliteCode")}</code>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{t("deployment.source.installation.step3.database.mysql")}：</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                      <code>
                        {t("deployment.source.installation.step3.database.mysqlCode")}
                      </code>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{t("deployment.source.installation.step3.database.postgresql")}：</p>
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                      <code>
                        {t("deployment.source.installation.step3.database.postgresqlCode")}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Build and Run */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">4</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("deployment.source.installation.step4.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("deployment.source.installation.step4.frontend.title")}</h4>
                <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">
                    {t("deployment.source.installation.step4.frontend.code")}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("deployment.source.installation.step4.backend.title")}
                </h4>
                <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">{t("deployment.source.installation.step4.backend.code")}</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("deployment.source.installation.step4.dev.title")}
                </h4>
                <div className="bg-gray-950 dark:bg-black border border-gray-700 dark:border-gray-600 text-gray-100 p-4 rounded-lg mb-2">
                  <code className="text-sm">{t("deployment.source.installation.step4.dev.code")}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Guide */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("deployment.source.development.title")}</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("deployment.source.development.structure.title")}
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div
                className="font-mono text-sm text-gray-700 dark:text-gray-300"
                style={{ lineHeight: "18px" }}
              >
                <div>{t("deployment.source.development.structure.root")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.internal")}</div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.app")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.channel")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.config")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.container")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.db")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.errors")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.handler")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.httpclient")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.keypool")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.middleware")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.models")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.proxy")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.response")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.router")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.services")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.store")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.syncer")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;├── {t("deployment.source.development.structure.types")}
                </div>
                <div>
                  &nbsp;&nbsp;│&nbsp;&nbsp;&nbsp;&nbsp;└── {t("deployment.source.development.structure.version")}
                </div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.web")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.gomod")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.envexample")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.dockercompose")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.dockerfile")}</div>
                <div>&nbsp;&nbsp;├── {t("deployment.source.development.structure.makefile")}</div>
                <div>&nbsp;&nbsp;└── {t("deployment.source.development.structure.maingo")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("deployment.source.troubleshooting.title")}</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("deployment.source.troubleshooting.common.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t("deployment.source.troubleshooting.common.goVersion.title")}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {t("deployment.source.troubleshooting.error")}：
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                    {t("deployment.source.troubleshooting.common.goVersion.error")}
                  </code>
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("deployment.source.troubleshooting.solution")}：{t("deployment.source.troubleshooting.common.goVersion.solution")}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t("deployment.source.troubleshooting.common.dependency.title")}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {t("deployment.source.troubleshooting.common.dependency.cause")}
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                  <code>
                    {t("deployment.source.troubleshooting.common.dependency.codeComment")}
                    <br />
                    {t("deployment.source.troubleshooting.common.dependency.code")}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/30 dark:to-violet-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("deployment.source.nextSteps.title")}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{t("deployment.source.nextSteps.description")}</p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>{t("deployment.source.nextSteps.customize")}</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>{t("deployment.source.nextSteps.contribute")}</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>{t("deployment.source.nextSteps.docker")}</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span>{t("deployment.source.nextSteps.cicd")}</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            {t("deployment.source.nextSteps.configurationGuide")}
          </a>
          <a
            href="/docs/architecture-design"
            className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
          >
            <Wrench className="h-4 w-4 mr-2" />
            {t("deployment.source.nextSteps.systemArchitecture")}
          </a>
        </div>
      </div>
    </div>
  );
}