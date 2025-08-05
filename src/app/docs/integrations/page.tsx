import {
  ArrowRight,
  Zap,
  Globe,
  Code2,
  Sparkles,
  Terminal,
} from "lucide-react";
import Link from "next/link";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Roo Code",
      description: "智能代码助手，支持多种AI模型",
      status: "available",
      icon: Code2,
      href: "/docs/integrations/roo-code",
      category: "开发工具",
    },
    {
      name: "New API",
      description: "现代化的API开发平台，支持多种AI模型",
      status: "available",
      icon: Globe,
      href: "/docs/integrations/new-api",
      category: "API工具",
    },
    {
      name: "Cherry Studio",
      description: "桌面端AI对话应用，支持多种AI模型",
      status: "available",
      icon: Sparkles,
      href: "/docs/integrations/cherry-studio",
      category: "桌面应用",
    },
    {
      name: "Claude Code Router",
      description: "智能代码路由工具，支持多模型切换",
      status: "available",
      icon: Terminal,
      href: "/docs/integrations/claude-code-router",
      category: "开发工具",
    },
  ];

  const categories = [
    {
      title: "开发工具",
      description: "集成到各种开发工具和IDE中",
      items: integrations.filter((item) => item.category === "开发工具"),
    },
    {
      title: "API工具",
      description: "API开发和测试平台的集成",
      items: integrations.filter((item) => item.category === "API工具"),
    },
    {
      title: "桌面应用",
      description: "桌面端AI应用的接入配置",
      items: integrations.filter((item) => item.category === "桌面应用"),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">接入指南</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          GPT-Load
          支持接入各种AI应用和开发工具。通过统一的代理接口，您可以轻松地将多个AI服务集成到您喜爱的应用中，实现负载均衡和故障转移。
        </p>
      </div>

      {/* 核心优势 */}
      <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Zap className="h-5 w-5 text-blue-600 mr-2" />
          接入优势
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-medium text-gray-900">统一接口</h3>
              <p className="text-sm text-gray-600">一套配置支持多个AI服务</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-violet-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-medium text-gray-900">负载均衡</h3>
              <p className="text-sm text-gray-600">自动分配请求，提高可用性</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
            <div>
              <h3 className="font-medium text-gray-900">故障转移</h3>
              <p className="text-sm text-gray-600">服务异常时自动切换备用</p>
            </div>
          </div>
        </div>
      </div>

      {/* 应用集成列表 */}
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {category.title}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.items.map((integration, itemIndex) => {
                const IconComponent = integration.icon;
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
                              ? "可用"
                              : "即将推出"}
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
                        查看接入指南
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center text-gray-400 text-sm">
                        敬请期待
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 贡献说明 */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          贡献接入指南
        </h2>
        <p className="text-gray-600 mb-4">
          如果您成功将 GPT-Load
          接入到其他应用中，欢迎贡献您的接入指南。这将帮助更多用户受益。
        </p>
        <Link
          href="https://github.com/tbphp/gpt-load-docs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
        >
          在 GitHub 上贡献
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
