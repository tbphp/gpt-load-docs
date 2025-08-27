"use client";

import { Users, CheckCircle, AlertTriangle } from "lucide-react";
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
        <p className="text-xl text-gray-600">
          {t("managementPage.subtitle")}
        </p>
      </div>

      {/* Access */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("managementPage.access.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            {t("managementPage.access.interface.title")}
          </h3>
          <div className="text-center">
            <code className="bg-white px-4 py-2 rounded-lg text-lg font-mono border text-gray-600">
              {t("managementPage.access.interface.url")}
            </code>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("managementPage.access.defaultConfig.title")}
              </h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• {t("managementPage.access.defaultConfig.port")}</li>
                <li>• {t("managementPage.access.defaultConfig.protocol")}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                {t("managementPage.access.security.title")}
              </h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• {t("managementPage.access.security.password")}</li>
                <li>• {t("managementPage.access.security.backup")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Group Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Users className="inline h-6 w-6 mr-2 text-green-600" />
          {t("managementPage.groupManagement.title")}
        </h2>

        <div className="space-y-8">
          {/* Create Group */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("managementPage.groupManagement.createGroup.title")}
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("managementPage.groupManagement.createGroup.basicSettings.title")}
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.basicSettings.groupName.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.basicSettings.groupName.description")}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.basicSettings.serviceType.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.basicSettings.serviceType.description")}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.basicSettings.groupDescription.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.basicSettings.groupDescription.description")}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  {t("managementPage.groupManagement.createGroup.upstreamConfig.title")}
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.upstreamAddress.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.upstreamAddress.description")}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.loadBalancing.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.loadBalancing.description")}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.healthCheck.label")}
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      {t("managementPage.groupManagement.createGroup.upstreamConfig.healthCheck.description")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    {t("managementPage.groupManagement.createGroup.steps.title")}
                  </h4>
                  <ol className="text-blue-800 text-sm space-y-1">
                    <li>{t("managementPage.groupManagement.createGroup.steps.step1")}</li>
                    <li>{t("managementPage.groupManagement.createGroup.steps.step2")}</li>
                    <li>{t("managementPage.groupManagement.createGroup.steps.step3")}</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Best Practices */}
      <div className="mb-12">
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">
                  {t("managementPage.bestPractices.title")}
                </h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• {t("managementPage.bestPractices.security")}</li>
                  <li>• {t("managementPage.bestPractices.keyInfo")}</li>
                  <li>• {t("managementPage.bestPractices.coreConfig")}</li>
                  <li>• {t("managementPage.bestPractices.deleteGroup")}</li>
                  <li>• {t("managementPage.bestPractices.errorLogs")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}