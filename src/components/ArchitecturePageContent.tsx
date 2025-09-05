"use client";

import {
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  GitBranch,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ArchitecturePageContent() {
  const { t, tArray, tObjectArray } = useTranslation();

  // 使用 useSeo hook 处理语言切换时的标题更新
  useSeo("/docs/architecture-design");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('architectureDesign.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t('architectureDesign.subtitle')}
        </p>
      </div>

      {/* Architecture Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.overview.title')}</h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-900/20 dark:to-violet-900/20 border border-blue-200 dark:border-blue-700 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('architectureDesign.overview.highlightTitle')}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              {t('architectureDesign.overview.highlightDescription')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('architectureDesign.components.apiGateway.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('architectureDesign.components.apiGateway.description')}</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Server className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('architectureDesign.components.loadBalancer.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('architectureDesign.components.loadBalancer.description')}</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Database className="h-8 w-8 text-purple-600 dark:text-purple-400 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('architectureDesign.components.dataStorage.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('architectureDesign.components.dataStorage.description')}</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('architectureDesign.components.securityMonitor.title')}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{t('architectureDesign.components.securityMonitor.description')}</p>
          </div>
        </div>
      </div>

      {/* System Components */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.systemComponents.title')}</h2>

        <div className="space-y-6">
          {/* Core Service */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('architectureDesign.systemComponents.coreService.title')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('architectureDesign.systemComponents.coreService.apiProxy.title')}
                </h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.coreService.apiProxy.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('architectureDesign.systemComponents.coreService.loadBalancer.title')}</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.coreService.loadBalancer.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Management Layer */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Layers className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('architectureDesign.systemComponents.managementLayer.title')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('architectureDesign.systemComponents.managementLayer.webInterface.title')}
                </h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.managementLayer.webInterface.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('architectureDesign.systemComponents.managementLayer.restApi.title')}</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.managementLayer.restApi.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="h-6 w-6 text-purple-600 dark:text-purple-400 dark:text-purple-400" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('architectureDesign.systemComponents.dataLayer.title')}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {t('architectureDesign.systemComponents.dataLayer.mysql.title')}
                </h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.dataLayer.mysql.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t('architectureDesign.systemComponents.dataLayer.redis.title')}</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                  {tArray('architectureDesign.systemComponents.dataLayer.redis.features').map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.dataFlow.title')}</h2>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-gray-600 dark:text-gray-400">
          <div className="space-y-4">
            {tObjectArray<{ title: string; description: string }>('architectureDesign.dataFlow.steps').map((step, index) => {
              const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-red-500'];
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`${colors[index] || 'bg-gray-500'} text-white px-3 py-1 rounded text-sm font-semibold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold">{step.title}</span> → {step.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Deployment Architectures */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.deploymentArchitectures.title')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('architectureDesign.deploymentArchitectures.standalone.title')}
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">{t('architectureDesign.deploymentArchitectures.standalone.scenarios.title')}</h4>
              <ul className="text-green-800 dark:text-green-400 space-y-1 text-sm">
                {tArray('architectureDesign.deploymentArchitectures.standalone.scenarios.items').map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t('architectureDesign.deploymentArchitectures.cluster.title')}
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">{t('architectureDesign.deploymentArchitectures.cluster.scenarios.title')}</h4>
              <ul className="text-blue-800 dark:text-blue-300 space-y-1 text-sm">
                {tArray('architectureDesign.deploymentArchitectures.cluster.scenarios.items').map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.techStack.title')}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-4">{t('architectureDesign.techStack.backend.title')}</h3>
            <ul className="space-y-2">
              {tArray('architectureDesign.techStack.backend.items').map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-800 dark:text-blue-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 dark:text-green-200 mb-4">{t('architectureDesign.techStack.frontend.title')}</h3>
            <ul className="space-y-2">
              {tArray('architectureDesign.techStack.frontend.items').map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-800 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-4">{t('architectureDesign.techStack.infrastructure.title')}</h3>
            <ul className="space-y-2">
              {tArray('architectureDesign.techStack.infrastructure.items').map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-purple-800 dark:text-purple-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">{t('architectureDesign.designPrinciples.title')}</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <GitBranch className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('architectureDesign.designPrinciples.highPerformance.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t('architectureDesign.designPrinciples.highPerformance.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('architectureDesign.designPrinciples.highAvailability.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t('architectureDesign.designPrinciples.highAvailability.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg">
                <Layers className="h-5 w-5 text-purple-600 dark:text-purple-400 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('architectureDesign.designPrinciples.scalability.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t('architectureDesign.designPrinciples.scalability.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg">
                <Globe className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{t('architectureDesign.designPrinciples.transparentProxy.title')}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {t('architectureDesign.designPrinciples.transparentProxy.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}