"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  ChevronRight,
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
          title: "Claude Code Router",
          href: "/docs/integrations/claude-code-router",
          icon: Terminal,
        },
        {
          title: "New API",
          href: "/docs/integrations/new-api",
          icon: Globe,
        },
        {
          title: "Cherry Studio",
          href: "/docs/integrations/cherry-studio",
          icon: Sparkles,
        },
      ],
    },
    { title: "管理说明", href: "/docs/management", icon: Users },
    { title: "支持赞助", href: "/docs/sponsor", icon: Heart },
  ];

  const [openItems, setOpenItems] = useState<number[]>(() => {
    const activeItemIndex = navigation.findIndex(
      (item) =>
        item.children &&
        item.children.some((child) => pathname.startsWith(child.href))
    );
    return activeItemIndex !== -1 ? [activeItemIndex] : [];
  });

  const toggleItem = (index: number) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter((i) => i !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <nav className="space-y-1">
      {navigation.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.href;
        const hasChildren = item.children && item.children.length > 0;
        const isChildActive =
          hasChildren &&
          item.children.some((child) => pathname.startsWith(child.href));
        const isOpen = openItems.includes(index);

        if (!hasChildren) {
          return (
            <Link
              key={index}
              href={item.href}
              onClick={onItemClick}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200",
                isActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <IconComponent
                className={cn(
                  "h-4 w-4",
                  isActive ? "text-blue-700" : "text-gray-500"
                )}
              />
              <span>{item.title}</span>
            </Link>
          );
        }

        return (
          <div key={index}>
            <div
              onClick={() => toggleItem(index)}
              className={cn(
                "flex items-center justify-between space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200 cursor-pointer",
                isChildActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <div className="flex items-center space-x-3">
                <IconComponent
                  className={cn(
                    "h-4 w-4",
                    isChildActive ? "text-blue-700" : "text-gray-500"
                  )}
                />
                <span>{item.title}</span>
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transform transition-transform duration-200",
                  isOpen ? "rotate-90" : ""
                )}
              />
            </div>
            {isOpen && (
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
