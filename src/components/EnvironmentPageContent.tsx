"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

interface ServerConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface AuthDatabaseConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface PerformanceCorsConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface LogConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface ProxyConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface ProxyFormat {
  protocol: string;
  format: string;
}

export default function EnvironmentPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/configuration/environment");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">{t("environmentConfiguration.title")}</h1>
      
      {/* Layer 1: Environment Configuration */}
      <div className="mb-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-3">{t("environmentConfiguration.characteristics.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{t("environmentConfiguration.characteristics.loadingMethod.title")}</h4>
              <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                {tArray("environmentConfiguration.characteristics.loadingMethod.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{t("environmentConfiguration.characteristics.useCase.title")}</h4>
              <ul className="text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                {tArray("environmentConfiguration.characteristics.useCase.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Server Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("environmentConfiguration.serverConfig.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.serverConfig.table.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.serverConfig.table.envVar")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.serverConfig.table.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.serverConfig.table.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  {tObjectArray<ServerConfigItem>("environmentConfiguration.serverConfig.items").map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 px-3">{item.name}</td>
                      <td className="py-2 px-3">
                        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{item.envVar}</code>
                      </td>
                      <td className="py-2 px-3">{item.defaultValue}</td>
                      <td className="py-2 px-3">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Authentication & Database Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("environmentConfiguration.authDatabaseConfig.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.authDatabaseConfig.table.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.authDatabaseConfig.table.envVar")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.authDatabaseConfig.table.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.authDatabaseConfig.table.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  {tObjectArray<AuthDatabaseConfigItem>("environmentConfiguration.authDatabaseConfig.items").map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 px-3">{item.name}</td>
                      <td className="py-2 px-3">
                        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{item.envVar}</code>
                      </td>
                      <td className="py-2 px-3">{item.defaultValue}</td>
                      <td className="py-2 px-3" dangerouslySetInnerHTML={{ __html: item.description }} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Performance & CORS Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("environmentConfiguration.performanceCorsConfig.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.performanceCorsConfig.table.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.performanceCorsConfig.table.envVar")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.performanceCorsConfig.table.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.performanceCorsConfig.table.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  {tObjectArray<PerformanceCorsConfigItem>("environmentConfiguration.performanceCorsConfig.items").map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 px-3">{item.name}</td>
                      <td className="py-2 px-3">
                        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{item.envVar}</code>
                      </td>
                      <td className="py-2 px-3">{item.defaultValue}</td>
                      <td className="py-2 px-3">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Log Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("environmentConfiguration.logConfig.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.logConfig.table.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.logConfig.table.envVar")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.logConfig.table.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                      {t("environmentConfiguration.logConfig.table.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-400">
                  {tObjectArray<LogConfigItem>("environmentConfiguration.logConfig.items").map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-2 px-3">{item.name}</td>
                      <td className="py-2 px-3">
                        <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{item.envVar}</code>
                      </td>
                      <td className="py-2 px-3">{item.defaultValue}</td>
                      <td className="py-2 px-3">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Proxy Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("environmentConfiguration.proxyConfig.title")}
            </h3>
            <div className="mb-4">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">
                  {t("environmentConfiguration.proxyConfig.priority.title")}
                </h4>
                <p className="text-amber-700 dark:text-amber-300 text-sm mb-2">
                  {t("environmentConfiguration.proxyConfig.priority.description")}
                  <strong>{t("environmentConfiguration.proxyConfig.priority.fallback")}</strong>
                </p>
                <p className="text-amber-700 dark:text-amber-300 text-sm">
                  {t("environmentConfiguration.proxyConfig.priority.envNote")}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t("environmentConfiguration.proxyConfig.autoRead")}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{t("environmentConfiguration.proxyConfig.settings.title")}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                          {t("environmentConfiguration.proxyConfig.settings.table.configItem")}
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                          {t("environmentConfiguration.proxyConfig.settings.table.envVar")}
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                          {t("environmentConfiguration.proxyConfig.settings.table.defaultValue")}
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800 dark:text-gray-200">
                          {t("environmentConfiguration.proxyConfig.settings.table.description")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-400">
                      {tObjectArray<ProxyConfigItem>("environmentConfiguration.proxyConfig.settings.items").map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                          <td className="py-2 px-3">{item.name}</td>
                          <td className="py-2 px-3">
                            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                              {item.envVar}
                            </code>
                          </td>
                          <td className="py-2 px-3">{item.defaultValue}</td>
                          <td className="py-2 px-3">
                            {item.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {t("environmentConfiguration.proxyConfig.formats.title")}
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {tObjectArray<ProxyFormat>("environmentConfiguration.proxyConfig.formats.items").map((format, index) => (
                    <div key={index}>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {format.protocol}:
                      </span>
                      <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 rounded p-2 mt-1">
                        <code className="text-green-400 text-xs">
                          {format.format}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          {t("environmentConfiguration.summary.title")}
        </h2>
        <div className="bg-gray-50 dark:bg-gray-900/20 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <p className="text-gray-700 dark:text-gray-300">
            {t("environmentConfiguration.summary.description")}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-400">
            {tArray("environmentConfiguration.summary.features").map((feature: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}