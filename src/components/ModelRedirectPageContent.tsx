"use client";

import { Repeat, Settings, Shield, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ModelRedirectPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();

  useSeo("/v1/docs/architecture-design/model-redirect");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("modelRedirect.subtitle")}
        </p>
      </div>

      {/* Core Value */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.coreValue.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tObjectArray<{icon: string, title: string, description: string}>("modelRedirect.coreValue.items").map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-start">
                <span className="text-2xl mr-3">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.configuration.title")}
        </h2>

        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-700 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            {t("modelRedirect.configuration.location.title")}
          </h3>
          <ol className="text-blue-800 dark:text-blue-400 space-y-2 text-sm list-decimal list-inside">
            {tArray("modelRedirect.configuration.location.steps").map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("modelRedirect.configuration.format.title")}
          </h3>

          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
            <p className="text-amber-900 dark:text-amber-300 text-sm font-medium mb-2">
              ⚠️ {t("modelRedirect.configuration.format.important")}
            </p>
            <p className="text-amber-800 dark:text-amber-400 text-sm">
              {t("modelRedirect.configuration.format.keyValue")}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code className="text-gray-800 dark:text-gray-300">{`{
  "gpt-4": "gpt-4-turbo-2024-04-09",
  "gpt-4o": "gpt-4o-2024-05-13",
  "claude-opus": "claude-3-opus-20240229"
}`}</code>
            </pre>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>{t("modelRedirect.configuration.format.effect")}:</strong>
            </p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
              {tArray("modelRedirect.configuration.format.examples").map((example: string, index: number) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Policy Modes */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.policyModes.title")}
        </h2>

        <div className="space-y-6">
          {/* Loose Mode */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-green-50 dark:bg-green-900/30 px-6 py-4 border-b border-green-200 dark:border-green-800">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-200 flex items-center">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                {t("modelRedirect.policyModes.loose.title")}
              </h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("modelRedirect.policyModes.loose.description")}
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="text-sm space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-mono">
                    {t("modelRedirect.policyModes.loose.config")}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    {tArray("modelRedirect.policyModes.loose.behavior").map((behavior: string, index: number) => (
                      <p key={index} className="text-gray-600 dark:text-gray-400">
                        {behavior}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strict Mode */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-red-50 dark:bg-red-900/30 px-6 py-4 border-b border-red-200 dark:border-red-800">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-200 flex items-center">
                <Shield className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                {t("modelRedirect.policyModes.strict.title")}
              </h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t("modelRedirect.policyModes.strict.description")}
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="text-sm space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-mono">
                    {t("modelRedirect.policyModes.strict.config")}
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    {tArray("modelRedirect.policyModes.strict.behavior").map((behavior: string, index: number) => (
                      <p key={index} className="text-gray-600 dark:text-gray-400">
                        {behavior}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.useCases.title")}
        </h2>
        <div className="space-y-6">
          {tObjectArray<{title: string, description: string, config: string}>("modelRedirect.useCases.scenarios").map((scenario, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {scenario.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {scenario.description}
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-xs overflow-x-auto">
                  <code className="text-gray-800 dark:text-gray-300">{scenario.config}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {t("modelRedirect.notes.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-200 mb-3 flex items-center">
              <Settings className="h-5 w-5 mr-2" />
              {t("modelRedirect.notes.limitations.title")}
            </h3>
            <ul className="text-yellow-800 dark:text-yellow-300 space-y-2 text-sm">
              {tArray("modelRedirect.notes.limitations.items").map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3 flex items-center">
              <Repeat className="h-5 w-5 mr-2" />
              {t("modelRedirect.notes.recommendations.title")}
            </h3>
            <ul className="text-blue-800 dark:text-blue-400 space-y-2 text-sm">
              {tArray("modelRedirect.notes.recommendations.items").map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">
          {t("modelRedirect.summary.title")}
        </h2>
        <p className="text-blue-100 mb-4">
          {t("modelRedirect.summary.description")}
        </p>
        <div className="text-blue-100 text-sm">
          <strong>{t("modelRedirect.summary.keyPoint")}:</strong> {t("modelRedirect.summary.keyPointValue")}
        </div>
      </div>
    </div>
  );
}
