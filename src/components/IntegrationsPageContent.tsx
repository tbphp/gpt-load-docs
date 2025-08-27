"use client";

import {
  ArrowRight,
  Zap,
  Globe,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function IntegrationsPageContent() {
  const { t, tObjectArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/integrations");

  const integrations = tObjectArray<{
    name: string;
    description: string;
    status: string;
    icon: string;
    href: string;
    category: string;
  }>("integrations.integrations");

  const categories = tObjectArray<{
    title: string;
    description: string;
    items: unknown[];
  }>("integrations.categories");

  // 图标映射
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    Code2,
    Globe,
    Sparkles,
    Terminal,
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t("integrations.title")}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t("integrations.description")}
        </p>
      </div>

      {/* 核心优势 */}
      <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Zap className="h-5 w-5 text-blue-600 mr-2" />
          {t("integrations.advantages.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {tObjectArray<{title: string; description: string}>("integrations.advantages.items").map((advantage, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                index === 0 ? 'bg-blue-500' :
                index === 1 ? 'bg-violet-500' : 'bg-cyan-500'
              }`}></div>
              <div>
                <h3 className="font-medium text-gray-900">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 应用集成列表 */}
      <div className="space-y-8">
        {categories.map((category, index) => {
          // 过滤出该分类的集成应用
          const categoryItems = integrations.filter((item) => item.category === category.title);
          
          return (
            <div key={index} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {categoryItems.map((integration, itemIndex) => {
                  const IconComponent = iconMap[integration.icon];
                  return (
                    <div
                      key={itemIndex}
                      className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {integration.name}
                            </h3>
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                                integration.status === "available"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {integration.status === "available"
                                ? t("integrations.status.available")
                                : t("integrations.status.comingSoon")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">
                        {integration.description}
                      </p>

                      {integration.status === "available" ? (
                        <Link
                          href={integration.href}
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                        >
                          {t("integrations.viewGuide")}
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center text-gray-400 text-sm">
                          {t("integrations.comingSoon")}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 贡献说明 */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          {t("integrations.contribution.title")}
        </h2>
        <p className="text-gray-600 mb-4">
          {t("integrations.contribution.description")}
        </p>
        <Link
          href="https://github.com/tbphp/gpt-load-docs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          {t("integrations.contribution.githubLink")}
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}