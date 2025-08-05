"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import {
  BookOpen,
  Settings,
  Wrench,
  Cloud,
  Users,
  Globe,
  Server,
  Code,
  Layers,
  Heart,
  Sparkles,
  Plug,
  Terminal,
} from "lucide-react";

const DocsNavigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const pathname = usePathname();

  const navigation = [
    { title: "项目简介", href: "/docs", icon: BookOpen },
    {
      title: "部署指南",
      href: "/docs/deployment",
      icon: Cloud,
      children: [
        {
          title: "单机部署",
          href: "/docs/deployment/standalone",
          icon: Server,
        },
        { title: "源码部署", href: "/docs/deployment/source", icon: Code },
        { title: "集群部署", href: "/docs/deployment/cluster", icon: Layers },
        {
          title: "Claw Cloud",
          href: "/docs/deployment/claw-cloud",
          icon: Cloud,
        },
      ],
    },
    { title: "配置说明", href: "/docs/configuration", icon: Settings },
    { title: "系统架构", href: "/docs/build", icon: Wrench },
    {
      title: "渠道类型",
      href: "/docs/channels",
      icon: Globe,
      children: [
        {
          title: "Gemini 官方 OpenAI 兼容",
          href: "/docs/gemini-openai",
          icon: Sparkles,
        },
      ],
    },
    {
      title: "接入指南",
      href: "/docs/integrations",
      icon: Plug,
      children: [
        {
          title: "Roo Code",
          href: "/docs/integrations/roo-code",
          icon: Code,
        },
        {
          title: "New API",
          href: "/docs/integrations/new-api",
          icon: Globe,
        },
        {
          title: "Claude Code Router",
          href: "/docs/integrations/claude-code-router",
          icon: Terminal,
        },
      ],
    },
    { title: "管理说明", href: "/docs/management", icon: Users },
    { title: "支持赞助", href: "/docs/sponsor", icon: Heart },
  ];

  return (
    <nav className="space-y-1">
      {navigation.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.href;
        const hasChildren = item.children && item.children.length > 0;
        const isChildActive =
          hasChildren && item.children.some((child) => pathname === child.href);

        return (
          <div key={index}>
            <Link
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200",
                isActive || isChildActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <IconComponent
                className={cn(
                  "h-4 w-4",
                  isActive || isChildActive ? "text-blue-700" : "text-gray-500"
                )}
              />
              <span>{item.title}</span>
            </Link>
            {hasChildren && (
              <div className="ml-3 mt-1 space-y-1">
                {item.children.map((child, childIndex) => {
                  const ChildIconComponent = child.icon;
                  const isChildActiveLink = pathname === child.href;

                  return (
                    <Link
                      key={childIndex}
                      href={child.href}
                      onClick={onItemClick}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200 ml-3",
                        isChildActiveLink
                          ? "bg-blue-50 text-blue-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <ChildIconComponent
                        className={cn(
                          "h-4 w-4",
                          isChildActiveLink ? "text-blue-700" : "text-gray-400"
                        )}
                      />
                      <span>{child.title}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default DocsNavigation;
