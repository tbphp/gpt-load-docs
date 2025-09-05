"use client";

import {
  Globe,
  Github,
  Zap,
  Settings,
  Play,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import ImageViewer from "./ImageViewer";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ClawCloudPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/deployment/claw-cloud");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t("clawCloud.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("clawCloud.subtitle")}
        </p>
      </div>

      {/* Important Warning */}
      <div className="mb-12">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 dark:border-red-700 p-6 rounded-lg shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-3">
                {t("clawCloud.warning.title")}
              </h3>
              <div className="text-red-800 space-y-2">
                <p className="font-medium">
                  {t("clawCloud.warning.description")}
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {tArray("clawCloud.warning.risks").map((risk: string, index: number) => (
                    <li key={index}>{risk}</li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded border border-red-200 dark:border-red-700">
                  <p className="font-semibold text-red-900 dark:text-red-200">{t("clawCloud.warning.recommendation.title")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {tArray("clawCloud.warning.recommendation.items").map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("clawCloud.overview.title")}</h2>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.overview.service.title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {t("clawCloud.overview.service.description")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Zap className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("clawCloud.overview.features.freeQuota.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t("clawCloud.overview.features.freeQuota.description")}</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("clawCloud.overview.features.globalDeploy.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("clawCloud.overview.features.globalDeploy.description")}
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Github className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t("clawCloud.overview.features.simpleAuth.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t("clawCloud.overview.features.simpleAuth.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("clawCloud.prerequisites.title")}</h2>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-200">{t("clawCloud.prerequisites.accountRequirement.title")}</h4>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                {t("clawCloud.prerequisites.accountRequirement.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t("clawCloud.prerequisites.serviceFeatures.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.prerequisites.serviceFeatures.freeQuota.title")}</h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                {tArray("clawCloud.prerequisites.serviceFeatures.freeQuota.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.prerequisites.serviceFeatures.techSpecs.title")}</h4>
              <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                {tArray("clawCloud.prerequisites.serviceFeatures.techSpecs.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("clawCloud.deploymentSteps.title")}</h2>

        <div className="space-y-8">
          {/* Step 1: Register and Login */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("clawCloud.deploymentSteps.step1.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.deploymentSteps.step1.githubLogin.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.deploymentSteps.step1.githubLogin.description")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <a
                    href="https://run.claw.cloud"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-300 underline flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>https://run.claw.cloud</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.deploymentSteps.step1.regionSelection.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.deploymentSteps.step1.regionSelection.description")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <div className="mb-2">{t("clawCloud.deploymentSteps.step1.regionSelection.recommended")}</div>
                    <ul className="space-y-1">
                      {tArray("clawCloud.deploymentSteps.step1.regionSelection.regions").map((region: string, index: number) => (
                        <li key={index}>{region}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <ImageViewer
                    src="/claw_1.png"
                    alt={t("clawCloud.deploymentSteps.step1.image.alt")}
                    width={250}
                    height={400}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                  {t("clawCloud.deploymentSteps.step1.image.caption")}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Create Application */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("clawCloud.deploymentSteps.step2.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.deploymentSteps.step2.launchApp.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.deploymentSteps.step2.launchApp.description")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <ImageViewer
                      src="/claw_2.png"
                      alt={t("clawCloud.deploymentSteps.step2.image.alt")}
                      width={800}
                      height={400}
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                    {t("clawCloud.deploymentSteps.step2.image.caption")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Configure Application */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("clawCloud.deploymentSteps.step3.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("clawCloud.deploymentSteps.step3.form.title")}
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {t("clawCloud.deploymentSteps.step3.form.basic.title")}
                        </h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">
                              {t("clawCloud.deploymentSteps.step3.form.basic.appName.label")}:
                            </span>
                            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded ml-2">
                              {t("clawCloud.deploymentSteps.step3.form.basic.appName.value")}
                            </code>
                          </div>
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.basic.image.label")}:</span>
                            <span className="ml-2">{t("clawCloud.deploymentSteps.step3.form.basic.image.value")}</span>
                          </div>
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.basic.imageName.label")}:</span>
                            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded ml-2">
                              {t("clawCloud.deploymentSteps.step3.form.basic.imageName.value")}
                            </code>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                          {t("clawCloud.deploymentSteps.step3.form.usage.title")}
                        </h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.usage.usage.label")}:</span>
                            <span className="ml-2">{t("clawCloud.deploymentSteps.step3.form.usage.usage.value")}</span>
                          </div>
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.usage.replicas.label")}:</span>
                            <span className="ml-2">{t("clawCloud.deploymentSteps.step3.form.usage.replicas.value")}</span>
                          </div>
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.usage.cpu.label")}:</span>
                            <span className="ml-2">{t("clawCloud.deploymentSteps.step3.form.usage.cpu.value")}</span>
                          </div>
                          <div>
                            <span className="font-medium">{t("clawCloud.deploymentSteps.step3.form.usage.memory.label")}:</span>
                            <span className="ml-2">{t("clawCloud.deploymentSteps.step3.form.usage.memory.value")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-blue-900 dark:text-blue-200">
                          {t("clawCloud.deploymentSteps.step3.form.resourceTip.title")}
                        </h5>
                        <p className="text-blue-800 dark:text-blue-300 text-sm">
                          {t("clawCloud.deploymentSteps.step3.form.resourceTip.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("clawCloud.deploymentSteps.step3.network.title")}
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">{t("clawCloud.deploymentSteps.step3.network.containerPort.label")}:</span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded ml-2">
                        {t("clawCloud.deploymentSteps.step3.network.containerPort.value")}
                      </code>
                    </div>
                    <div>
                      <span className="font-medium">{t("clawCloud.deploymentSteps.step3.network.publicAccess.label")}:</span>
                      <span className="ml-2">{t("clawCloud.deploymentSteps.step3.network.publicAccess.value")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("clawCloud.deploymentSteps.step3.environment.title")}
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {t("clawCloud.deploymentSteps.step3.environment.description")}
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
                      <code>
                        <span className="font-medium">{t("clawCloud.deploymentSteps.step3.environment.authKey.label")}</span>=
                        <span className="text-green-600 dark:text-green-400">
                          {t("clawCloud.deploymentSteps.step3.environment.authKey.value")}
                        </span>
                      </code>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t("clawCloud.deploymentSteps.step3.environment.warning")}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("clawCloud.deploymentSteps.step3.storage.title")}
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">{t("clawCloud.deploymentSteps.step3.storage.localStorage.label")}:</span>
                      <span className="ml-2">
                        {t("clawCloud.deploymentSteps.step3.storage.localStorage.value")}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">{t("clawCloud.deploymentSteps.step3.storage.capacity.label")}:</span>
                      <span className="ml-2">{t("clawCloud.deploymentSteps.step3.storage.capacity.value")}</span>
                    </div>
                    <div>
                      <span className="font-medium">{t("clawCloud.deploymentSteps.step3.storage.mountPath.label")}:</span>
                      <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded ml-2">
                        {t("clawCloud.deploymentSteps.step3.storage.mountPath.value")}
                      </code>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    {t("clawCloud.deploymentSteps.step3.storage.note")}
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <ImageViewer
                    src="/claw_3.png"
                    alt={t("clawCloud.deploymentSteps.step3.image.alt")}
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-2">
                  {t("clawCloud.deploymentSteps.step3.image.caption")}
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Deploy Application */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <span className="text-green-600 dark:text-green-400 font-semibold">4</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t("clawCloud.deploymentSteps.step4.title")}
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.deploymentSteps.step4.startDeploy.title")}</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.deploymentSteps.step4.startDeploy.description")}
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-200">{t("clawCloud.deploymentSteps.step4.completed.title")}</h5>
                      <p className="text-green-800 dark:text-green-300 text-sm">
                        {t("clawCloud.deploymentSteps.step4.completed.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.deploymentSteps.step4.waitService.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.deploymentSteps.step4.waitService.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Access and Usage */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("clawCloud.accessUsage.title")}
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.accessUsage.firstAccess.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.accessUsage.firstAccess.getAddress.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.accessUsage.firstAccess.getAddress.description")}
                </p>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <div className="mb-2">{t("clawCloud.accessUsage.firstAccess.getAddress.example.label")}:</div>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {t("clawCloud.accessUsage.firstAccess.getAddress.example.value")}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.accessUsage.firstAccess.login.title")}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {t("clawCloud.accessUsage.firstAccess.login.description")}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-blue-900 dark:text-blue-200">{t("clawCloud.accessUsage.firstAccess.login.securityTip.title")}</h5>
                      <p className="text-blue-800 dark:text-blue-300 text-sm">
                        {t("clawCloud.accessUsage.firstAccess.login.securityTip.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.accessUsage.apiUsage.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t("clawCloud.accessUsage.apiUsage.proxyAddress.title")}
                </h4>
                <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-700 dark:text-gray-300">
                    <div className="mb-2">{t("clawCloud.accessUsage.apiUsage.proxyAddress.label")}:</div>
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {t("clawCloud.accessUsage.apiUsage.proxyAddress.value")}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.accessUsage.apiUsage.example.title")}</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <code className="text-sm">
                    {t("clawCloud.accessUsage.apiUsage.example.code")}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update and Maintenance */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("clawCloud.updateMaintenance.title")}
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.updateMaintenance.versionUpdate.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.updateMaintenance.versionUpdate.steps.title")}</h4>
                <div className="space-y-2 text-sm">
                  {tArray("clawCloud.updateMaintenance.versionUpdate.steps.items").map((step: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded text-blue-600 dark:text-blue-400 font-semibold text-xs w-5 h-5 flex items-center justify-center mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <RefreshCw className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-900 dark:text-green-200">{t("clawCloud.updateMaintenance.versionUpdate.autoUpdate.title")}</h5>
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      {t("clawCloud.updateMaintenance.versionUpdate.autoUpdate.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.updateMaintenance.monitoring.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.updateMaintenance.monitoring.appMonitoring.title")}</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray("clawCloud.updateMaintenance.monitoring.appMonitoring.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("clawCloud.updateMaintenance.monitoring.costControl.title")}</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray("clawCloud.updateMaintenance.monitoring.costControl.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t("clawCloud.troubleshooting.title")}</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t("clawCloud.troubleshooting.commonIssues.title")}
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t("clawCloud.troubleshooting.commonIssues.appNotStart.title")}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {t("clawCloud.troubleshooting.commonIssues.appNotStart.cause")}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("clawCloud.troubleshooting.commonIssues.appNotStart.solution")}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {t("clawCloud.troubleshooting.commonIssues.accessFailed.title")}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {t("clawCloud.troubleshooting.commonIssues.accessFailed.cause")}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("clawCloud.troubleshooting.commonIssues.accessFailed.solution")}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">{t("clawCloud.troubleshooting.commonIssues.authFailed.title")}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {t("clawCloud.troubleshooting.commonIssues.authFailed.cause")}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t("clawCloud.troubleshooting.commonIssues.authFailed.solution")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-700 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("clawCloud.nextSteps.title")}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{t("clawCloud.nextSteps.description")}</p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
          {tArray("clawCloud.nextSteps.tasks").map((task: string, index: number) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            {t("clawCloud.nextSteps.buttons.configuration")}
          </a>
          <a
            href="/docs/configuration/management"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe className="h-4 w-4 mr-2" />
            {t("clawCloud.nextSteps.buttons.management")}
          </a>
        </div>
      </div>
    </div>
  );
}