"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

interface ServerConfigItem {
  name: string;
  envVar: string;
  defaultValue: string;
  description: string;
}

interface ProxyConfigItem {
  name: string;
  envVar: string;
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
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("environmentConfiguration.title")}</h1>
      
      {/* Layer 1: Environment Configuration */}
      <div className="mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">{t("environmentConfiguration.characteristics.title")}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">{t("environmentConfiguration.characteristics.loadingMethod.title")}</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                {tArray("environmentConfiguration.characteristics.loadingMethod.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">{t("environmentConfiguration.characteristics.useCase.title")}</h4>
              <ul className="text-blue-700 space-y-1 text-sm">
                {tArray("environmentConfiguration.characteristics.useCase.items").map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Server Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("environmentConfiguration.serverConfig.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("environmentConfiguration.serverConfig.table.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("environmentConfiguration.serverConfig.table.envVar")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("environmentConfiguration.serverConfig.table.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("environmentConfiguration.serverConfig.table.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {tObjectArray<ServerConfigItem>("environmentConfiguration.serverConfig.items").map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-2 px-3">{item.name}</td>
                      <td className="py-2 px-3">
                        <code className="bg-gray-100 px-1 rounded">{item.envVar}</code>
                      </td>
                      <td className="py-2 px-3">{item.defaultValue}</td>
                      <td className="py-2 px-3">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Database Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("environmentConfiguration.databaseConfig.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("environmentConfiguration.databaseConfig.mysql.title")}
                </h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {t("environmentConfiguration.databaseConfig.mysql.envLabel")}
                    </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2 text-gray-600">
                      DATABASE_DSN
                    </code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">
                      {t("environmentConfiguration.databaseConfig.mysql.format")}
                    </code>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t("environmentConfiguration.databaseConfig.redis.title")}</h4>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      {t("environmentConfiguration.databaseConfig.redis.envLabel")}
                    </span>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2 text-gray-600">
                      REDIS_DSN
                    </code>
                  </div>
                  <div className="bg-gray-900 rounded p-2">
                    <code className="text-green-400 text-xs">
                      {t("environmentConfiguration.databaseConfig.redis.format")}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("environmentConfiguration.securityConfig.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t("environmentConfiguration.securityConfig.auth.title")}</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t("environmentConfiguration.securityConfig.auth.key")}
                    </label>
                    <code className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                      AUTH_KEY
                    </code>
                    <p className="text-xs text-red-600 mt-1">
                      {t("environmentConfiguration.securityConfig.auth.description")}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t("environmentConfiguration.securityConfig.cors.title")}</h4>
                <div className="space-y-2 text-sm text-gray-800">
                  <div>
                    <strong>{t("environmentConfiguration.securityConfig.cors.enable")}：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ENABLE_CORS=true
                    </code>
                  </div>
                  <div>
                    <strong>{t("environmentConfiguration.securityConfig.cors.origins")}：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ALLOWED_ORIGINS=*
                    </code>
                  </div>
                  <div>
                    <strong>{t("environmentConfiguration.securityConfig.cors.methods")}：</strong>
                    <code className="bg-gray-100 px-1 rounded ml-1 text-gray-600">
                      ALLOWED_METHODS=GET,POST,...
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proxy Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("environmentConfiguration.proxyConfig.title")}
            </h3>
            <div className="mb-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-amber-800 mb-2">
                  {t("environmentConfiguration.proxyConfig.priority.title")}
                </h4>
                <p className="text-amber-700 text-sm mb-2">
                  {t("environmentConfiguration.proxyConfig.priority.description")}
                  <strong>{t("environmentConfiguration.proxyConfig.priority.fallback")}</strong>
                </p>
                <p className="text-amber-700 text-sm">
                  {t("environmentConfiguration.proxyConfig.priority.envNote")}
                </p>
              </div>
              <p className="text-gray-600 text-sm">
                {t("environmentConfiguration.proxyConfig.autoRead")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">{t("environmentConfiguration.proxyConfig.settings.title")}</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          {t("environmentConfiguration.proxyConfig.settings.table.configItem")}
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          {t("environmentConfiguration.proxyConfig.settings.table.envVar")}
                        </th>
                        <th className="text-left py-2 px-3 font-semibold text-gray-800">
                          {t("environmentConfiguration.proxyConfig.settings.table.description")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {tObjectArray<ProxyConfigItem>("environmentConfiguration.proxyConfig.settings.items").map((item, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-2 px-3">{item.name}</td>
                          <td className="py-2 px-3">
                            <code className="bg-gray-100 px-1 rounded">
                              {item.envVar}
                            </code>
                          </td>
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
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("environmentConfiguration.proxyConfig.formats.title")}
                </h4>
                <div className="space-y-3">
                  {tObjectArray<ProxyFormat>("environmentConfiguration.proxyConfig.formats.items").map((format, index) => (
                    <div key={index}>
                      <span className="text-sm font-medium text-gray-700">
                        {format.protocol}:
                      </span>
                      <div className="bg-gray-900 rounded p-2 mt-1">
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
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t("environmentConfiguration.summary.title")}
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            {t("environmentConfiguration.summary.description")}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            {tArray("environmentConfiguration.summary.features").map((feature: string, index: number) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}