"use client";

import { ArrowRight, Layers, CheckCircle, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ConfigurationPageContent() {
  const { t, tArray } = useTranslation();

  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/configuration");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("configurationPage.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("configurationPage.subtitle")}
        </p>
      </div>

      {/* Three-Layer Architecture */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Layers className="inline h-6 w-6 mr-2 text-blue-600" />
          {t("configurationPage.threeLayerArchitecture.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {t("configurationPage.threeLayerArchitecture.priorityTitle")}
          </h3>
          <div className="flex justify-center items-center space-x-4 text-center">
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 flex-1">
              <div className="text-red-600 font-bold text-lg mb-2">
                {t("configurationPage.threeLayerArchitecture.groupConfig.name")}
              </div>
              <div className="text-red-800 text-sm">
                {t(
                  "configurationPage.threeLayerArchitecture.groupConfig.priority"
                )}
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 flex-1">
              <div className="text-orange-600 font-bold text-lg mb-2">
                {t(
                  "configurationPage.threeLayerArchitecture.systemSettings.name"
                )}
              </div>
              <div className="text-orange-800 text-sm">
                {t(
                  "configurationPage.threeLayerArchitecture.systemSettings.priority"
                )}
              </div>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-400" />
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 flex-1">
              <div className="text-blue-600 font-bold text-lg mb-2">
                {t(
                  "configurationPage.threeLayerArchitecture.environmentVars.name"
                )}
              </div>
              <div className="text-blue-800 text-sm">
                {t(
                  "configurationPage.threeLayerArchitecture.environmentVars.priority"
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              {t("configurationPage.threeLayerArchitecture.managerDescription")}{" "}
              <code className="bg-white px-2 py-1 rounded text-xs">
                SystemSettingsManager
              </code>
              {t("configurationPage.threeLayerArchitecture.managerFunction")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("configurationPage.features.title")}
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              {tArray("configurationPage.features.items").map(
                (item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                )
              )}
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("configurationPage.useCases.title")}
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              {tArray("configurationPage.useCases.items").map(
                (item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                )
              )}
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("configurationPage.managementMethods.title")}
            </h3>
            <ul className="text-gray-600 space-y-2 text-sm">
              {tArray("configurationPage.managementMethods.items").map(
                (item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("configurationPage.bestPractices.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
              {t("configurationPage.bestPractices.recommendations.title")}
            </h3>
            <ul className="text-green-800 space-y-2 text-sm">
              {tArray(
                "configurationPage.bestPractices.recommendations.items"
              ).map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
              <AlertTriangle className="h-6 w-6 mr-2 text-yellow-600" />
              {t("configurationPage.bestPractices.warnings.title")}
            </h3>
            <ul className="text-yellow-800 space-y-2 text-sm">
              {tArray("configurationPage.bestPractices.warnings.items").map(
                (item: string, index: number) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Further Reading */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t("configurationPage.furtherReading.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/docs/configuration/environment"
            className="block bg-blue-50 hover:bg-blue-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              {t("configurationPage.furtherReading.environment.title")}
            </h3>
            <p className="text-blue-700">
              {t("configurationPage.furtherReading.environment.description")}
            </p>
          </a>
          <a
            href="/docs/configuration/project"
            className="block bg-orange-50 hover:bg-orange-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              {t("configurationPage.furtherReading.project.title")}
            </h3>
            <p className="text-orange-700">
              {t("configurationPage.furtherReading.project.description")}
            </p>
          </a>
          <a
            href="/docs/configuration/cloudflare-aigateway"
            className="block bg-cyan-50 hover:bg-cyan-100 p-6 rounded-lg transition-colors"
          >
            <h3 className="text-xl font-semibold text-cyan-900 mb-2">
              {t("configurationPage.furtherReading.cloudflareAiGateway.title")}
            </h3>
            <p className="text-cyan-700">
              {t(
                "configurationPage.furtherReading.cloudflareAiGateway.description"
              )}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
