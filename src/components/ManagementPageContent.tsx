"use client";

import {
  Settings,
  Server,
  Wrench,
  Key,
  Globe,
  AlertTriangle,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ManagementPageContent() {
  const { t } = useTranslation();
  useSeo("/docs/configuration/management");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("managementPage.title")}
        </h1>
        <p className="text-xl text-gray-600">{t("managementPage.subtitle")}</p>
      </div>

      {/* Basic Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Settings className="inline h-6 w-6 mr-2 text-blue-600" />
          {t("managementPage.basicConfig.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.groupName.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.groupName.description")}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.displayName.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.displayName.description")}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.channelType.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.channelType.description")}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.testModel.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.testModel.description")}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.proxyKey.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.proxyKey.description")}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  {t("managementPage.basicConfig.priority.label")}
                </h4>
                <div className="bg-white p-3 rounded border text-sm text-gray-600">
                  {t("managementPage.basicConfig.priority.description")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upstream Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Server className="inline h-6 w-6 mr-2 text-green-600" />
          {t("managementPage.upstreamConfig.title")}
        </h2>

        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Globe className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900 mb-2">
                  {t("managementPage.upstreamConfig.multiAddress.title")}
                </h4>
                <p className="text-green-800 text-sm mb-2">
                  {t("managementPage.upstreamConfig.multiAddress.description")}
                </p>
                <div className="text-green-700 text-sm">
                  <p>
                    •{" "}
                    {t(
                      "managementPage.upstreamConfig.multiAddress.loadBalancing"
                    )}
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "managementPage.upstreamConfig.multiAddress.sameService"
                    )}
                  </p>
                  <p>
                    •{" "}
                    {t(
                      "managementPage.upstreamConfig.multiAddress.weightRoundRobin"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                {t("managementPage.upstreamConfig.configuration.title")}
              </h4>
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">
                    https://api.openai.com
                  </code>
                  <div className="text-xs text-gray-600 mt-1">
                    {t("managementPage.upstreamConfig.configuration.weight1")}
                  </div>
                </div>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">
                    https://ai.proxy.com/openai
                  </code>
                  <div className="text-xs text-gray-600 mt-1">
                    {t("managementPage.upstreamConfig.configuration.weight2")}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                {t("managementPage.upstreamConfig.features.title")}
              </h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>
                  •{" "}
                  {t("managementPage.upstreamConfig.features.highAvailability")}
                </li>
                <li>
                  • {t("managementPage.upstreamConfig.features.autoFailover")}
                </li>
                <li>
                  • {t("managementPage.upstreamConfig.features.performance")}
                </li>
                <li>
                  • {t("managementPage.upstreamConfig.features.monitoring")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Wrench className="inline h-6 w-6 mr-2 text-purple-600" />
          {t("managementPage.advancedConfig.title")}
        </h2>

        <div className="space-y-6">
          {/* Group Configuration Override */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Settings className="inline h-5 w-5 mr-2 text-blue-600" />
              {t("managementPage.advancedConfig.groupOverride.title")}
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
              <p className="text-blue-800 text-sm">
                {t("managementPage.advancedConfig.groupOverride.description")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.groupOverride.priority.title"
                  )}
                </h5>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>
                    1.{" "}
                    {t(
                      "managementPage.advancedConfig.groupOverride.priority.group"
                    )}
                  </li>
                  <li>
                    2.{" "}
                    {t(
                      "managementPage.advancedConfig.groupOverride.priority.system"
                    )}
                  </li>
                  <li>
                    3.{" "}
                    {t(
                      "managementPage.advancedConfig.groupOverride.priority.default"
                    )}
                  </li>
                </ol>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.groupOverride.reference.title"
                  )}
                </h5>
                <p className="text-sm text-gray-600">
                  {t(
                    "managementPage.advancedConfig.groupOverride.reference.description"
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Custom Headers */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Key className="inline h-5 w-5 mr-2 text-green-600" />
              {t("managementPage.advancedConfig.customHeaders.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.customHeaders.functionality.title"
                  )}
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.customHeaders.functionality.add"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.customHeaders.functionality.remove"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.customHeaders.functionality.modify"
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.customHeaders.examples.title"
                  )}
                </h5>
                <div className="space-y-2">
                  <code className="block text-xs bg-gray-100 p-2 rounded">
                    {t(
                      "managementPage.advancedConfig.customHeaders.examples.auth"
                    )}
                  </code>
                  <code className="block text-xs bg-gray-100 p-2 rounded">
                    {t(
                      "managementPage.advancedConfig.customHeaders.examples.userAgent"
                    )}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Parameter Override */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              <Wrench className="inline h-5 w-5 mr-2 text-purple-600" />
              {t("managementPage.advancedConfig.parameterOverride.title")}
            </h3>
            <div className="bg-purple-50 border border-purple-200 rounded p-4 mb-4">
              <p className="text-purple-800 text-sm">
                {t(
                  "managementPage.advancedConfig.parameterOverride.description"
                )}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.parameterOverride.format.title"
                  )}
                </h5>
                <div className="bg-gray-100 p-3 rounded">
                  <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                    {`{
  "generationConfig": {
    "thinkingConfig": {
      "includeThoughts": true
    }
  },
  "tools": [
    {
      "google_search": {}
    }
  ]
}`}
                  </pre>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">
                  {t(
                    "managementPage.advancedConfig.parameterOverride.useCases.title"
                  )}
                </h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.parameterOverride.useCases.defaultParams"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.parameterOverride.useCases.limitParams"
                    )}
                  </li>
                  <li>
                    •{" "}
                    {t(
                      "managementPage.advancedConfig.parameterOverride.useCases.securityParams"
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-3">
                {t("managementPage.bestPractices.title")}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">
                    {t("managementPage.bestPractices.configuration.title")}
                  </h5>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>
                      •{" "}
                      {t("managementPage.bestPractices.configuration.testing")}
                    </li>
                    <li>
                      • {t("managementPage.bestPractices.configuration.backup")}
                    </li>
                    <li>
                      •{" "}
                      {t(
                        "managementPage.bestPractices.configuration.validation"
                      )}
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-yellow-800 mb-2">
                    {t("managementPage.bestPractices.security.title")}
                  </h5>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>
                      • {t("managementPage.bestPractices.security.keyRotation")}
                    </li>
                    <li>
                      •{" "}
                      {t("managementPage.bestPractices.security.accessControl")}
                    </li>
                    <li>
                      • {t("managementPage.bestPractices.security.monitoring")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
