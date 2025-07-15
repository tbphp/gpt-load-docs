"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import {
  BookOpen,
  Settings,
  Wrench,
  Cloud,
  Layers,
  Users,
  Globe,
} from "lucide-react";

const DocsNavigation = ({ onItemClick }: { onItemClick?: () => void }) => {
  const pathname = usePathname();

  const navigation = [
    { title: "项目简介", href: "/docs", icon: BookOpen },
    { title: "安装部署", href: "/docs/installation", icon: Cloud },
    { title: "集群部署", href: "/docs/cluster", icon: Layers },
    { title: "配置说明", href: "/docs/configuration", icon: Settings },
    { title: "系统架构", href: "/docs/build", icon: Wrench },
    { title: "渠道类型", href: "/docs/channels", icon: Globe },
    { title: "管理说明", href: "/docs/management", icon: Users },
  ];

  return (
    <nav className="space-y-2">
      {navigation.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = pathname === item.href;

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
      })}
    </nav>
  );
};

export default DocsNavigation;
