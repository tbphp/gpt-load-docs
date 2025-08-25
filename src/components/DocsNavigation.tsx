"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "../lib/utils";
import {
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
  GitBranch,
  Shield,
  Rocket,
  BookUser,
} from "lucide-react";

const DocsNavigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const pathname = usePathname();
  const t = useTranslations("docs");

  const navigation = [
    { title: t("quickStart"), href: "/docs", icon: Rocket },
    { title: t("introduction"), href: "/docs/introduction", icon: BookUser },
    {
      title: t("deployment.title"),
      href: "/docs/deployment",
      icon: Cloud,
      children: [
        {
          title: t("deployment.standalone"),
          href: "/docs/deployment/standalone",
          icon: Server,
        },
        {
          title: t("deployment.source"),
          href: "/docs/deployment/source",
          icon: Code,
        },
        {
          title: t("deployment.cluster"),
          href: "/docs/deployment/cluster",
          icon: Layers,
        },
        {
          title: t("deployment.clawCloud"),
          href: "/docs/deployment/claw-cloud",
          icon: Cloud,
        },
      ],
    },
    {
      title: t("configuration.title"),
      href: "/docs/configuration",
      icon: Settings,
      children: [
        {
          title: t("configuration.environment"),
          href: "/docs/configuration/environment",
          icon: Server,
        },
        {
          title: t("configuration.project"),
          href: "/docs/configuration/project",
          icon: Wrench,
        },
        {
          title: t("configuration.management"),
          href: "/docs/configuration/management",
          icon: Users,
        },
        {
          title: t("configuration.cloudflare"),
          href: "/docs/configuration/cloudflare-aigateway",
          icon: Cloud,
        },
      ],
    },
    {
      title: t("architecture.title"),
      href: "/docs/architecture-design",
      icon: Wrench,
      children: [
        {
          title: t("architecture.performance"),
          href: "/docs/architecture-design/performance",
          icon: Sparkles,
        },
        {
          title: t("architecture.routing"),
          href: "/docs/architecture-design/routing-strategy",
          icon: GitBranch,
        },
        {
          title: t("architecture.keyManagement"),
          href: "/docs/architecture-design/key-management",
          icon: Shield,
        },
      ],
    },
    {
      title: t("channels"),
      href: "/docs/channels",
      icon: Globe,
      children: [
        {
          title: t("integrations.gemini"),
          href: "/docs/gemini-openai",
          icon: Sparkles,
        },
      ],
    },
    {
      title: t("integrations.title"),
      href: "/docs/integrations",
      icon: Plug,
      children: [
        {
          title: t("integrations.roocode"),
          href: "/docs/integrations/roo-code",
          icon: Code,
        },
        {
          title: t("integrations.claude"),
          href: "/docs/integrations/claude-code-router",
          icon: Terminal,
        },
        {
          title: t("integrations.newapi"),
          href: "/docs/integrations/new-api",
          icon: Globe,
        },
        {
          title: t("integrations.cherry"),
          href: "/docs/integrations/cherry-studio",
          icon: Sparkles,
        },
      ],
    },
    { title: t("sponsor"), href: "/docs/sponsor", icon: Heart },
  ];

  const [openItems, setOpenItems] = useState<number[]>(() => {
    let activeItemIndex = -1;
    let longestMatch = 0;

    navigation.forEach((item, index) => {
      if (item.children && pathname.startsWith(item.href)) {
        if (item.href.length > longestMatch) {
          longestMatch = item.href.length;
          activeItemIndex = index;
        }
      }
    });

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
    <nav className="space-y-1 pr-2">
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
            <Link
              href={item.href}
              onClick={() => {
                toggleItem(index);
                if (onItemClick) {
                  onItemClick();
                }
              }}
              className={cn(
                "flex items-center justify-between space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-200",
                isActive || isChildActive
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              <div className="flex items-center space-x-3">
                <IconComponent
                  className={cn(
                    "h-4 w-4",
                    isActive || isChildActive
                      ? "text-blue-700"
                      : "text-gray-500"
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
            </Link>
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
