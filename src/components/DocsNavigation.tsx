"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import {
  BookOpen,
  Settings,
  Wrench,
  BarChart3,
  Code,
  Cloud,
  Lightbulb,
  ChevronRight,
} from "lucide-react";

const DocsNavigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const pathname = usePathname();

  const navigation = [
    {
      title: "开始使用",
      icon: BookOpen,
      items: [
        { title: "快速开始", href: "/docs" },
        { title: "安装部署", href: "/docs/installation" },
        { title: "Docker 部署", href: "/docs/docker" },
        { title: "源码构建", href: "/docs/build" },
      ],
    },
    {
      title: "配置指南",
      icon: Settings,
      items: [
        { title: "环境变量", href: "/docs/configuration" },
        { title: "配置文件", href: "/docs/config-file" },
        { title: "API 提供商", href: "/docs/providers" },
        { title: "负载均衡", href: "/docs/load-balancing" },
      ],
    },
    {
      title: "功能特性",
      icon: Wrench,
      items: [
        { title: "多密钥轮询", href: "/docs/key-rotation" },
        { title: "智能拉黑", href: "/docs/blacklisting" },
        { title: "错误处理", href: "/docs/error-handling" },
        { title: "CORS 支持", href: "/docs/cors" },
      ],
    },
    {
      title: "监控统计",
      icon: BarChart3,
      items: [
        { title: "监控端点", href: "/docs/monitoring" },
        { title: "统计信息", href: "/docs/statistics" },
        { title: "健康检查", href: "/docs/health-check" },
        { title: "日志管理", href: "/docs/logging" },
      ],
    },
    {
      title: "API 参考",
      icon: Code,
      items: [
        { title: "OpenAI 兼容", href: "/docs/api/openai" },
        { title: "管理接口", href: "/docs/api/admin" },
        { title: "认证方式", href: "/docs/api/auth" },
        { title: "错误码", href: "/docs/api/errors" },
      ],
    },
    {
      title: "部署指南",
      icon: Cloud,
      items: [
        { title: "生产环境", href: "/docs/deployment/production" },
        { title: "性能优化", href: "/docs/deployment/optimization" },
        { title: "安全配置", href: "/docs/deployment/security" },
        { title: "集群部署", href: "/docs/deployment/cluster" },
      ],
    },
    {
      title: "使用示例",
      icon: Lightbulb,
      items: [
        { title: "OpenAI API", href: "/docs/examples/openai" },
        { title: "Azure OpenAI", href: "/docs/examples/azure" },
        { title: "第三方服务", href: "/docs/examples/third-party" },
        { title: "故障排除", href: "/docs/examples/troubleshooting" },
      ],
    },
  ];

  return (
    <nav className="space-y-6">
      {navigation.map((section, sectionIndex) => {
        const IconComponent = section.icon;

        return (
          <div key={sectionIndex}>
            <div className="flex items-center space-x-2 mb-3">
              <IconComponent className="h-4 w-4 text-gray-600" />
              <h3 className="text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
            </div>
            <ul className="space-y-1 ml-6">
              {section.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;

                return (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className={cn(
                        "group flex items-center space-x-2 px-3 py-2 text-sm rounded-md transition-colors duration-200",
                        isActive
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      )}
                    >
                      <ChevronRight
                        className={cn(
                          "h-3 w-3 transition-transform duration-200",
                          isActive
                            ? "rotate-90 text-blue-700"
                            : "text-gray-400 group-hover:text-gray-600"
                        )}
                      />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default DocsNavigation;
