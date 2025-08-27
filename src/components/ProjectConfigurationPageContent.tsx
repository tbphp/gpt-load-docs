"use client";

import { Database, Key } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ProjectConfigurationPageContent() {
  const { t } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/configuration/project");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {t("projectConfigurationPage.title")}
      </h1>
      
      {/* Layer 2: System Settings */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Database className="inline h-6 w-6 mr-2 text-orange-600" />
          {t("projectConfigurationPage.systemSettings.title")}
        </h2>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-orange-900 mb-3">
            {t("projectConfigurationPage.systemSettings.characteristics.title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">
                {t("projectConfigurationPage.systemSettings.characteristics.storage.title")}
              </h4>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.storage.database")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.storage.dynamicModification")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.storage.hotReload")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.storage.baseline")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-800 mb-2">
                {t("projectConfigurationPage.systemSettings.characteristics.management.title")}
              </h4>
              <ul className="text-orange-700 space-y-1 text-sm">
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.management.webInterface")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.management.restfulApi")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.management.validation")}</li>
                <li>• {t("projectConfigurationPage.systemSettings.characteristics.management.history")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Parameters */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("projectConfigurationPage.systemSettings.basicParameters.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.fieldName")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.groupOverridable")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.appUrl.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">app_url</code>
                    </td>
                    <td className="py-2 px-3">http://localhost:3001</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.basicParameters.appUrl.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.proxyKeys.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">proxy_keys</code>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.proxyKeys.defaultValue")}</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.basicParameters.proxyKeys.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.logRetention.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_log_retention_days
                      </code>
                    </td>
                    <td className="py-2 px-3">7</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.basicParameters.logRetention.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.logWriteInterval.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_log_write_interval_minutes
                      </code>
                    </td>
                    <td className="py-2 px-3">1</td>
                    <td className="py-2 px-3">
                      <span className="text-red-600 font-semibold">❌</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.logWriteInterval.description")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.basicParameters.enableRequestBodyLogging.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        enable_request_body_logging
                      </code>
                    </td>
                    <td className="py-2 px-3">false</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.basicParameters.enableRequestBodyLogging.description")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Request Parameters */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("projectConfigurationPage.systemSettings.requestSettings.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.fieldName")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.groupOverridable")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.requestTimeout.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        request_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">600</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.requestSettings.requestTimeout.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.connectTimeout.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        connect_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">15</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.connectTimeout.description")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.idleConnTimeout.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        idle_conn_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">120</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.idleConnTimeout.description")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.responseHeaderTimeout.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        response_header_timeout
                      </code>
                    </td>
                    <td className="py-2 px-3">600</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.responseHeaderTimeout.description")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.maxIdleConns.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_idle_conns
                      </code>
                    </td>
                    <td className="py-2 px-3">100</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.maxIdleConns.description")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.maxIdleConnsPerHost.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_idle_conns_per_host
                      </code>
                    </td>
                    <td className="py-2 px-3">50</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.maxIdleConnsPerHost.description")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.requestSettings.proxyUrl.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        proxy_url
                      </code>
                    </td>
                    <td className="py-2 px-3">-</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.requestSettings.proxyUrl.description")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Configuration */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("projectConfigurationPage.systemSettings.keyConfiguration.title")}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.configItem")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.fieldName")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.defaultValue")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.groupOverridable")}
                    </th>
                    <th className="text-left py-2 px-3 font-semibold text-gray-800">
                      {t("projectConfigurationPage.systemSettings.table.headers.description")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.maxRetries.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        max_retries
                      </code>
                    </td>
                    <td className="py-2 px-3">3</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.keyConfiguration.maxRetries.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.blacklistThreshold.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        blacklist_threshold
                      </code>
                    </td>
                    <td className="py-2 px-3">3</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.keyConfiguration.blacklistThreshold.description")}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationInterval.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_interval_minutes
                      </code>
                    </td>
                    <td className="py-2 px-3">60</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationInterval.description")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationConcurrency.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_concurrency
                      </code>
                    </td>
                    <td className="py-2 px-3">10</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationConcurrency.description")}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">{t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationTimeout.name")}</td>
                    <td className="py-2 px-3">
                      <code className="bg-gray-100 px-1 rounded">
                        key_validation_timeout_seconds
                      </code>
                    </td>
                    <td className="py-2 px-3">20</td>
                    <td className="py-2 px-3">
                      <span className="text-green-600 font-semibold">✅</span>
                    </td>
                    <td className="py-2 px-3">
                      {t("projectConfigurationPage.systemSettings.keyConfiguration.keyValidationTimeout.description")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Proxy Configuration Priority Notice */}
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">
              {t("projectConfigurationPage.systemSettings.proxyConfigPriority.title")}
            </h3>
            <div className="mb-4">
              <p className="text-amber-800 text-sm mb-2">
                {t("projectConfigurationPage.systemSettings.proxyConfigPriority.description")}
              </p>
              <div className="bg-amber-100 border border-amber-300 rounded p-3">
                <code className="text-amber-900 font-semibold">
                  {t("projectConfigurationPage.systemSettings.proxyConfigPriority.hierarchy")}
                </code>
              </div>
            </div>
            <p className="text-amber-700 text-sm">
              {t("projectConfigurationPage.systemSettings.proxyConfigPriority.fallback")}
            </p>
          </div>
        </div>
      </div>

      {/* Layer 3: Group Configuration */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Key className="inline h-6 w-6 mr-2 text-green-600" />
          {t("projectConfigurationPage.groupConfiguration.title")}
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-green-900 mb-3">
            {t("projectConfigurationPage.groupConfiguration.characteristics.title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-2">
                {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.title")}
              </h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.override")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.customize")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.tuning")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.isolation")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.highestPriority.proxyPriority")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-2">
                {t("projectConfigurationPage.groupConfiguration.characteristics.flexibility.title")}
              </h4>
              <ul className="text-green-700 space-y-1 text-sm">
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.flexibility.jsonFormat")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.flexibility.inheritance")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.flexibility.dynamicCalculation")}</li>
                <li>• {t("projectConfigurationPage.groupConfiguration.characteristics.flexibility.validation")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Overridable Settings */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("projectConfigurationPage.groupConfiguration.overridableSettings.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">request_timeout</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.requestTimeout")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">connect_timeout</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.connectTimeout")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">idle_conn_timeout</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.idleConnTimeout")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">response_header_timeout</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.responseHeaderTimeout")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">max_idle_conns</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.maxIdleConns")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">max_idle_conns_per_host</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.maxIdleConnsPerHost")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">proxy_url</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.requestConnection.proxyUrl")}
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.title")}
                </h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">max_retries</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.maxRetries")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">blacklist_threshold</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.blacklistThreshold")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">key_validation_interval_minutes</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.keyValidationInterval")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">key_validation_concurrency</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.keyValidationConcurrency")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">key_validation_timeout_seconds</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.keyValidationTimeout")}
                  </li>
                  <li>
                    • <code className="bg-gray-100 px-1 rounded">enable_request_body_logging</code> - {t("projectConfigurationPage.groupConfiguration.overridableSettings.keyManagement.enableRequestBodyLogging")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t("projectConfigurationPage.summary.title")}
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700">
            {t("projectConfigurationPage.summary.description")}
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            <li>
              <strong>{t("projectConfigurationPage.summary.roleAndLayering.title")}</strong>：{t("projectConfigurationPage.summary.roleAndLayering.description")}
            </li>
            <li>
              <strong>{t("projectConfigurationPage.summary.managementFeatures.title")}</strong>：{t("projectConfigurationPage.summary.managementFeatures.description")}
            </li>
            <li>
              <strong>{t("projectConfigurationPage.summary.proxyConfigPriority.title")}</strong>：{t("projectConfigurationPage.summary.proxyConfigPriority.description")}
            </li>
            <li>
              <strong>{t("projectConfigurationPage.summary.usageAdvantages.title")}</strong>：{t("projectConfigurationPage.summary.usageAdvantages.description")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}