"use client";

import Link from "next/link";
import {
  Cloud,
  Code,
  Layers,
  Globe,
  Server,
  Database,
  Zap,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function DeploymentPageContent() {
  const { t } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/deployment");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("deploymentPage.title")}
        </h1>
        <p className="text-xl text-gray-600">
          {t("deploymentPage.subtitle")}
        </p>
      </div>

      {/* Deployment Options Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Single Machine Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("deploymentPage.standalone.title")}
              </h2>
              <p className="text-gray-600">
                {t("deploymentPage.standalone.subtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Zap className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.standalone.quickStart.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.standalone.quickStart.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Database className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.standalone.optional.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.standalone.optional.description")}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/standalone"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>{t("deploymentPage.viewDetails")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Source Code Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Code className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("deploymentPage.source.title")}
              </h2>
              <p className="text-gray-600">
                {t("deploymentPage.source.subtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Shield className="h-4 w-4 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.source.fullControl.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.source.fullControl.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Code className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.source.development.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.source.development.description")}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/source"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>{t("deploymentPage.viewDetails")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cluster Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Layers className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("deploymentPage.cluster.title")}
              </h2>
              <p className="text-gray-600">
                {t("deploymentPage.cluster.subtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Users className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.cluster.masterSlave.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.cluster.masterSlave.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Shield className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.cluster.highAvailability.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.cluster.highAvailability.description")}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/cluster"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>{t("deploymentPage.viewDetails")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Claw Cloud Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-cyan-100 p-3 rounded-lg">
              <Cloud className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("deploymentPage.clawCloud.title")}
              </h2>
              <p className="text-gray-600">
                {t("deploymentPage.clawCloud.subtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Globe className="h-4 w-4 text-cyan-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.clawCloud.cloudDeploy.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.clawCloud.cloudDeploy.description")}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Zap className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {t("deploymentPage.clawCloud.freeQuota.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("deploymentPage.clawCloud.freeQuota.description")}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/claw-cloud"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>{t("deploymentPage.viewDetails")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Quick Comparison */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("deploymentPage.comparison.title")}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  {t("deploymentPage.comparison.headers.solution")}
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  {t("deploymentPage.comparison.headers.scenario")}
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  {t("deploymentPage.comparison.headers.requirements")}
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  {t("deploymentPage.comparison.headers.performance")}
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  {t("deploymentPage.comparison.headers.complexity")}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {t("deploymentPage.comparison.rows.standalone.solution")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.standalone.scenario")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.standalone.requirements")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.standalone.performance")}
                </td>
                <td className="py-3 px-4 text-green-600">
                  {t("deploymentPage.comparison.rows.standalone.complexity")}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {t("deploymentPage.comparison.rows.source.solution")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.source.scenario")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.source.requirements")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.source.performance")}
                </td>
                <td className="py-3 px-4 text-yellow-600">
                  {t("deploymentPage.comparison.rows.source.complexity")}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {t("deploymentPage.comparison.rows.cluster.solution")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.cluster.scenario")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.cluster.requirements")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.cluster.performance")}
                </td>
                <td className="py-3 px-4 text-red-600">
                  {t("deploymentPage.comparison.rows.cluster.complexity")}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {t("deploymentPage.comparison.rows.clawCloud.solution")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.clawCloud.scenario")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.clawCloud.requirements")}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {t("deploymentPage.comparison.rows.clawCloud.performance")}
                </td>
                <td className="py-3 px-4 text-green-600">
                  {t("deploymentPage.comparison.rows.clawCloud.complexity")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          {t("deploymentPage.gettingStarted.title")}
        </h2>
        <p className="text-gray-700 mb-6">
          {t("deploymentPage.gettingStarted.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs/deployment/standalone"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Server className="h-4 w-4 mr-2" />
            {t("deploymentPage.gettingStarted.buttons.standalone")}
          </Link>
          <Link
            href="/docs/deployment/claw-cloud"
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Cloud className="h-4 w-4 mr-2" />
            {t("deploymentPage.gettingStarted.buttons.clawCloud")}
          </Link>
        </div>
      </div>
    </div>
  );
}