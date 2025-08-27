"use client";

import {
  Server,
  Database,
  Shield,
  Cpu,
  RotateCcw,
  Globe,
  Zap,
  CheckCircle,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function IntroductionPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/introduction");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("introduction.title")}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {t("introduction.subtitle")}
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.coreConcept.title")}
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            {t("introduction.coreConcept.transparentProxy.title")}
          </h3>
          <p className="text-blue-800">
            {t("introduction.coreConcept.transparentProxy.description")}
          </p>
        </div>
      </div>

      {/* Supported Services */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.supportedServices.title")}
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">OpenAI</h3>
            </div>
            <ul className="text-gray-600 space-y-2">
              {tArray("introduction.supportedServices.openai.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Google Gemini
              </h3>
            </div>
            <ul className="text-gray-600 space-y-2">
              {tArray("introduction.supportedServices.gemini.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">
                Anthropic Claude
              </h3>
            </div>
            <ul className="text-gray-600 space-y-2">
              {tArray("introduction.supportedServices.claude.features").map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Core Features */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.coreFeatures.title")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Cpu className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.highPerformance.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.highPerformance.description")}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <RotateCcw className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.keyManagement.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.keyManagement.description")}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Shield className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.loadBalancing.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.loadBalancing.description")}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Database className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.clusterSupport.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.clusterSupport.description")}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Server className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.hotReload.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.hotReload.description")}
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <Globe className="h-8 w-8 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("introduction.coreFeatures.adminPanel.title")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("introduction.coreFeatures.adminPanel.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.techStack.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("introduction.techStack.backend.title")}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {tObjectArray<{name: string, desc: string}>("introduction.techStack.backend.items").map((item, index) => (
                <li key={index}>
                  • <strong>{item.name}</strong> - {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("introduction.techStack.frontend.title")}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {tObjectArray<{name: string, desc: string}>("introduction.techStack.frontend.items").map((item, index) => (
                <li key={index}>
                  • <strong>{item.name}</strong> - {item.desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Architecture Advantages */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.architectureAdvantages.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t("introduction.architectureAdvantages.microservices.title")}
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              {tArray("introduction.architectureAdvantages.microservices.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t("introduction.architectureAdvantages.distributed.title")}
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              {tArray("introduction.architectureAdvantages.distributed.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t("introduction.architectureAdvantages.highAvailability.title")}
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              {tArray("introduction.architectureAdvantages.highAvailability.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("introduction.useCases.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {t("introduction.useCases.enterprise.title")}
            </h3>
            <ul className="text-blue-800 space-y-1 text-sm">
              {tArray("introduction.useCases.enterprise.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              {t("introduction.useCases.developer.title")}
            </h3>
            <ul className="text-green-800 space-y-1 text-sm">
              {tArray("introduction.useCases.developer.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              {t("introduction.useCases.multiTenant.title")}
            </h3>
            <ul className="text-purple-800 space-y-1 text-sm">
              {tArray("introduction.useCases.multiTenant.items").map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 深入了解 */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
          {t("introduction.deepDive.title")}
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          {t("introduction.deepDive.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/docs/architecture-design/performance"
            className="group bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-700">
                  {t("introduction.deepDive.performance.title")}
                </h3>
                <p className="text-blue-600 text-sm">{t("introduction.deepDive.performance.subtitle")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-blue-800">
              {tArray("introduction.deepDive.performance.features").map((feature: string, index: number) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Link>

          <Link
            href="/docs/architecture-design"
            className="group bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-900 group-hover:text-purple-700">
                  {t("introduction.deepDive.architecture.title")}
                </h3>
                <p className="text-purple-600 text-sm">{t("introduction.deepDive.architecture.subtitle")}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-purple-800">
              {tArray("introduction.deepDive.architecture.features").map((feature: string, index: number) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">{t("introduction.gettingStarted.title")}</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          {t("introduction.gettingStarted.description")}
        </p>
        <Link
          href="/docs/deployment"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {t("introduction.gettingStarted.button")}
        </Link>
      </div>
    </div>
  );
}