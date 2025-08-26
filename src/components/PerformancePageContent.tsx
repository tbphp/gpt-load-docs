"use client";

import {
  Zap,
  Cpu,
  Database,
  Workflow,
  TrendingUp,
  MemoryStick,
  Network,
  Timer,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function PerformancePageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 使用 useSeo hook 处理语言切换时的标题更新
  useSeo("/docs/architecture-design/performance");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('performance.title')}</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {t('performance.subtitle')}
        </p>
      </div>

      {/* 核心性能指标 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t('performance.coreFeatures.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-blue-900 mb-2">{t('performance.coreFeatures.zeroIO.title')}</h3>
            <p className="text-blue-700 text-sm">{t('performance.coreFeatures.zeroIO.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Network className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-green-900 mb-2">{t('performance.coreFeatures.zeroCopy.title')}</h3>
            <p className="text-green-700 text-sm">{t('performance.coreFeatures.zeroCopy.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-purple-900 mb-2">{t('performance.coreFeatures.lockFree.title')}</h3>
            <p className="text-purple-700 text-sm">{t('performance.coreFeatures.lockFree.description')}</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <MemoryStick className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-orange-900 mb-2">{t('performance.coreFeatures.lowResource.title')}</h3>
            <p className="text-orange-700 text-sm">{t('performance.coreFeatures.lowResource.description')}</p>
          </div>
        </div>
      </div>

      {/* 极致的代理请求性能 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Zap className="h-7 w-7 text-blue-600 mr-3" />
          {t('performance.proxyPerformance.title')}
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <p className="text-blue-900 font-medium">
            {t('performance.proxyPerformance.description')}
          </p>
        </div>

        <div className="space-y-6">
          {/* 全内存服务 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('performance.proxyPerformance.inMemory.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('performance.proxyPerformance.inMemory.description')}
                </p>
              </div>
            </div>
          </div>

          {/* 零拷贝流式传输 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Network className="h-5 w-5 text-green-600 mr-2" />
                {t('performance.proxyPerformance.zeroCopyStreaming.title')}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* 机制说明 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t('performance.proxyPerformance.zeroCopyStreaming.mechanism.title')}
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="text-gray-700 text-sm mb-2">
                      {t('performance.proxyPerformance.zeroCopyStreaming.mechanism.description')}
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-900 mb-2">
                      {t('performance.proxyPerformance.zeroCopyStreaming.comparison.title')}
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-red-700 font-medium mb-1">
                          {t('performance.proxyPerformance.zeroCopyStreaming.comparison.traditional.label')}
                        </p>
                        <p className="text-red-600">
                          {t('performance.proxyPerformance.zeroCopyStreaming.comparison.traditional.flow')}
                        </p>
                      </div>
                      <div>
                        <p className="text-green-700 font-medium mb-1">
                          {t('performance.proxyPerformance.zeroCopyStreaming.comparison.gptLoad.label')}
                        </p>
                        <p className="text-green-600">
                          {t('performance.proxyPerformance.zeroCopyStreaming.comparison.gptLoad.flow')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 核心优势 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('performance.proxyPerformance.zeroCopyStreaming.advantages.title')}</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {tObjectArray<{ title: string; description: string }>('performance.proxyPerformance.zeroCopyStreaming.advantages.leftColumn').map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <span className="text-gray-900 font-medium text-sm">
                              {advantage.title}
                            </span>
                            <p className="text-gray-600 text-xs mt-1">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {tObjectArray<{ title: string; description: string }>('performance.proxyPerformance.zeroCopyStreaming.advantages.rightColumn').map((advantage, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <div>
                            <span className="text-gray-900 font-medium text-sm">
                              {advantage.title}
                            </span>
                            <p className="text-gray-600 text-xs mt-1">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 异步日志 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Timer className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('performance.proxyPerformance.asyncLogging.title')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('performance.proxyPerformance.asyncLogging.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 动态资源与并发管理 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Workflow className="h-7 w-7 text-green-600 mr-3" />
          {t('performance.resourceManagement.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* HTTP 客户端复用 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t('performance.resourceManagement.httpReuse.title')}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {tArray('performance.resourceManagement.httpReuse.features').map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 原子操作与无锁设计 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t('performance.resourceManagement.atomicOperations.title')}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                {t('performance.resourceManagement.atomicOperations.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 异步任务与可扩展性 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-7 w-7 text-orange-600 mr-3" />
          {t('performance.asyncTasks.title')}
        </h2>

        <div className="space-y-6">
          {/* 海量密钥异步管理 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t('performance.asyncTasks.massiveKeys.title')}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('performance.asyncTasks.massiveKeys.mechanism.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('performance.asyncTasks.massiveKeys.mechanism.description')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t('performance.asyncTasks.massiveKeys.advantage.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('performance.asyncTasks.massiveKeys.advantage.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 集群支持与配置同步 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-cyan-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                {t('performance.asyncTasks.clusterSupport.title')}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('performance.asyncTasks.clusterSupport.architecture.title')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('performance.asyncTasks.clusterSupport.architecture.description')}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t('performance.asyncTasks.clusterSupport.sync.title')}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      {t('performance.asyncTasks.clusterSupport.sync.redis')}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {t('performance.asyncTasks.clusterSupport.sync.consistency')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 轻量级与资源效率 */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <MemoryStick className="h-7 w-7 text-purple-600 mr-3" />
          {t('performance.lightweight.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* 极低资源占用 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              {t('performance.lightweight.lowResource.title')}
            </h3>
            <p className="text-purple-800 text-sm mb-4">
              {t('performance.lightweight.lowResource.description')}
            </p>
            <div className="bg-purple-200 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  {t('performance.lightweight.lowResource.cpu')}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <MemoryStick className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  {t('performance.lightweight.lowResource.memory')}
                </span>
              </div>
            </div>
          </div>

          {/* 适用性广 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {t('performance.lightweight.versatility.title')}
            </h3>
            <p className="text-green-800 text-sm mb-4">
              {t('performance.lightweight.versatility.description')}
            </p>
            <div className="space-y-2">
              {tArray('performance.lightweight.versatility.scenarios').map((scenario, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-800 text-sm">
                    {scenario}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}