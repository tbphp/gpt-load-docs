"use client";

import { Layers, Server, Database, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ClusterPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/deployment/cluster");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("cluster.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("cluster.subtitle")}
        </p>
      </div>

      {/* Cluster Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.overview.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("cluster.overview.architecture.title")}
            </h3>
            <p className="text-gray-700 text-lg">
              {t("cluster.overview.architecture.description")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Server className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("cluster.overview.components.master.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("cluster.overview.components.master.description")}
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Layers className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("cluster.overview.components.slave.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("cluster.overview.components.slave.description")}
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Database className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              {t("cluster.overview.components.storage.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("cluster.overview.components.storage.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.prerequisites.title")}
        </h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900">
                {t("cluster.prerequisites.warning.title")}
              </h4>
              <p className="text-yellow-800 text-sm">
                {t("cluster.prerequisites.warning.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("cluster.prerequisites.infrastructure.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.prerequisites.infrastructure.database.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {tArray("cluster.prerequisites.infrastructure.database.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.prerequisites.infrastructure.cache.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {tArray("cluster.prerequisites.infrastructure.cache.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.deploymentSteps.title")}
        </h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t("cluster.deploymentSteps.step1.title")}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.deploymentSteps.step1.database.title")}
                </h4>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-700">
                    {t("cluster.deploymentSteps.step1.database.description")}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.deploymentSteps.step1.redis.title")}
                </h4>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-700">
                    {t("cluster.deploymentSteps.step1.redis.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 font-semibold rounded-full text-sm">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t("cluster.deploymentSteps.step2.title")}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("cluster.deploymentSteps.step2.dockerCompose")}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.deploymentSteps.step2.slaveConfig.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("cluster.deploymentSteps.step2.slaveConfig.code")}</code>
                  </pre>
                </div>
                <p className="text-gray-800 mb-2 mt-2">
                  {t("cluster.deploymentSteps.step2.slaveConfig.description1")}
                </p>
                <p className="text-gray-800 mb-2">
                  {t("cluster.deploymentSteps.step2.slaveConfig.description2")}
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-600 font-semibold rounded-full text-sm">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t("cluster.deploymentSteps.step3.title")}
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                {t("cluster.deploymentSteps.step3.description")}
              </p>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.deploymentSteps.step3.nginx.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                    <code>{t("cluster.deploymentSteps.step3.nginx.config")}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.configurationManagement.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("cluster.configurationManagement.unified.title")}
            </h3>
            <div className="space-y-3">
              {tObjectArray<{key: string, description: string}>("cluster.configurationManagement.unified.items").map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm text-gray-800">
                    {item.key}
                  </code>
                  <span className="text-gray-600 text-sm">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("cluster.configurationManagement.dynamic.title")}
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              {tArray("cluster.configurationManagement.dynamic.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Monitoring and Maintenance */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.monitoring.title")}
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("cluster.monitoring.healthCheck.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.monitoring.healthCheck.nodeStatus.title")}
                </h4>
                <div className="bg-gray-900 rounded-lg p-3">
                  <pre className="text-green-400 text-sm">
                    <code>{t("cluster.monitoring.healthCheck.nodeStatus.code")}</code>
                  </pre>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.monitoring.healthCheck.clusterStatus.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {tArray("cluster.monitoring.healthCheck.clusterStatus.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("cluster.monitoring.scaling.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.monitoring.scaling.scaleOut.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {tArray("cluster.monitoring.scaling.scaleOut.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("cluster.monitoring.scaling.gracefulShutdown.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  {tArray("cluster.monitoring.scaling.gracefulShutdown.items").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("cluster.bestPractices.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-3">
              {t("cluster.bestPractices.recommended.title")}
            </h3>
            <ul className="text-green-800 space-y-2 text-sm">
              {tArray("cluster.bestPractices.recommended.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="font-semibold text-red-900 mb-3">
              {t("cluster.bestPractices.avoid.title")}
            </h3>
            <ul className="text-red-800 space-y-2 text-sm">
              {tArray("cluster.bestPractices.avoid.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}