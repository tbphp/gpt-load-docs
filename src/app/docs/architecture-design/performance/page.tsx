import { getTranslations } from "next-intl/server";
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
import { Viewport, Metadata } from "next";

export const viewport: Viewport = {
  themeColor: "light",
  width: "device-width",
  initialScale: 1,
};

import { generatePageMetadata } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata("performance");
}

interface CoreFeature {
  title: string;
  description: string;
}

interface ZeroCopyAdvantage {
  title: string;
  description: string;
}

export default async function PerformancePage() {
  const t = await getTranslations("docs.performancePage");

  const coreFeatures: CoreFeature[] = t.raw("coreFeatures.features");
  const zeroCopyAdvantages: ZeroCopyAdvantage[] = t.raw(
    "proxyPerformance.zeroCopy.advantages"
  );
  const httpClientItems: string[] = t.raw("concurrency.httpClient.items");
  const clusterSyncItems: string[] = t.raw("scalability.clusterSupport.sync.items");
  const applicabilityItems: string[] = t.raw(
    "resourceEfficiency.wideApplicability.items"
  );

  const iconComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Zap,
    Network,
    Cpu,
    MemoryStick,
  };

  const coreFeatureBgColors = [
    "from-blue-50 to-blue-100 border-blue-200",
    "from-green-50 to-green-100 border-green-200",
    "from-purple-50 to-purple-100 border-purple-200",
    "from-orange-50 to-orange-100 border-orange-200",
  ];
  const coreFeatureTextColors = [
    "text-blue-900",
    "text-green-900",
    "text-purple-900",
    "text-orange-900",
  ];
  const coreFeatureSubTextColors = [
    "text-blue-700",
    "text-green-700",
    "text-purple-700",
    "text-orange-700",
  ];
  const coreFeatureIconBgColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("header.title")}
        </h1>
        <p
          className="text-xl text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.raw("header.description") }}
        ></p>
      </div>

      {/* 核心性能指标 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t("coreFeatures.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${coreFeatureBgColors[index]} rounded-lg p-6 text-center`}
            >
              <div
                className={`w-12 h-12 ${coreFeatureIconBgColors[index]} rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                <div className="h-6 w-6 text-white">
                  {(() => {
                    const Icon =
                      iconComponents[
                        feature.title.split(" ")[0] as keyof typeof iconComponents
                      ] || Zap;
                    return <Icon />;
                  })()}
                </div>
              </div>
              <h3 className={`font-semibold ${coreFeatureTextColors[index]} mb-2`}>
                {feature.title}
              </h3>
              <p className={`${coreFeatureSubTextColors[index]} text-sm`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 极致的代理请求性能 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Zap className="h-7 w-7 text-blue-600 mr-3" />
          {t("proxyPerformance.title")}
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <p
            className="text-blue-900 font-medium"
            dangerouslySetInnerHTML={{ __html: t.raw("proxyPerformance.zeroIoNote") }}
          ></p>
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
                  {t("proxyPerformance.inMemory.title")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("proxyPerformance.inMemory.description")}
                </p>
              </div>
            </div>
          </div>

          {/* 零拷贝流式传输 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Network className="h-5 w-5 text-green-600 mr-2" />
                {t("proxyPerformance.zeroCopy.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* 机制说明 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t("proxyPerformance.zeroCopy.mechanism.title")}
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p
                      className="text-gray-700 text-sm mb-2"
                      dangerouslySetInnerHTML={{
                        __html: t.raw("proxyPerformance.zeroCopy.mechanism.description"),
                      }}
                    ></p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-900 mb-2">
                      {t("proxyPerformance.zeroCopy.comparison.title")}
                    </h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-red-700 font-medium mb-1">
                          {t("proxyPerformance.zeroCopy.comparison.traditional.title")}
                        </p>
                        <p className="text-red-600">
                          {t("proxyPerformance.zeroCopy.comparison.traditional.description")}
                        </p>
                      </div>
                      <div>
                        <p className="text-green-700 font-medium mb-1">
                          {t("proxyPerformance.zeroCopy.comparison.gptload.title")}
                        </p>
                        <p className="text-green-600">
                          {t("proxyPerformance.zeroCopy.comparison.gptload.description")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 核心优势 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t("proxyPerformance.zeroCopy.advantagesTitle")}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {zeroCopyAdvantages
                        .slice(0, 3)
                        .map((advantage, index) => (
                          <div
                            key={`advantage-1-${index}`}
                            className="flex items-start space-x-2"
                          >
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
                      {zeroCopyAdvantages
                        .slice(3, 6)
                        .map((advantage, index) => (
                          <div
                            key={`advantage-2-${index}`}
                            className="flex items-start space-x-2"
                          >
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
                  {t("proxyPerformance.asyncLogging.title")}
                </h3>
                <p
                  className="text-gray-600 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: t.raw("proxyPerformance.asyncLogging.description"),
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 动态资源与并发管理 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Workflow className="h-7 w-7 text-green-600 mr-3" />
          {t("concurrency.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* HTTP 客户端复用 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("concurrency.httpClient.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {httpClientItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 原子操作与无锁设计 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("concurrency.atomicLockFree.title")}
              </h3>
            </div>
            <div className="p-6">
              <p
                className="text-gray-600 text-sm"
                dangerouslySetInnerHTML={{
                  __html: t.raw("concurrency.atomicLockFree.description"),
                }}
              ></p>
            </div>
          </div>
        </div>
      </section>

      {/* 异步任务与可扩展性 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-7 w-7 text-orange-600 mr-3" />
          {t("scalability.title")}
        </h2>

        <div className="space-y-6">
          {/* 海量密钥异步管理 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("scalability.asyncKeyManagement.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("scalability.asyncKeyManagement.mechanism.title")}
                  </h4>
                  <p
                    className="text-gray-600 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: t.raw(
                        "scalability.asyncKeyManagement.mechanism.description"
                      ),
                    }}
                  ></p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("scalability.asyncKeyManagement.advantage.title")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t("scalability.asyncKeyManagement.advantage.description")}
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
                {t("scalability.clusterSupport.title")}
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t("scalability.clusterSupport.architecture.title")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t("scalability.clusterSupport.architecture.description")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {t("scalability.clusterSupport.sync.title")}
                  </h4>
                  <div className="space-y-2">
                    {clusterSyncItems.map((item, index) => (
                      <p
                        key={index}
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{ __html: item }}
                      ></p>
                    ))}
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
          {t("resourceEfficiency.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* 极低资源占用 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              {t("resourceEfficiency.lowUsage.title")}
            </h3>
            <p
              className="text-purple-800 text-sm mb-4"
              dangerouslySetInnerHTML={{
                __html: t.raw("resourceEfficiency.lowUsage.description"),
              }}
            ></p>
            <div className="bg-purple-200 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  {t("resourceEfficiency.lowUsage.specs.cpu")}
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <MemoryStick className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  {t("resourceEfficiency.lowUsage.specs.memory")}
                </span>
              </div>
            </div>
          </div>

          {/* 适用性广 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {t("resourceEfficiency.wideApplicability.title")}
            </h3>
            <p className="text-green-800 text-sm mb-4">
              {t("resourceEfficiency.wideApplicability.description")}
            </p>
            <div className="space-y-2">
              {applicabilityItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-green-800 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
