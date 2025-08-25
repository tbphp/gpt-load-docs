import Link from "next/link";
import {
  Cloud,
  Code,
  Layers,
  Globe,
  Server,
  Database,
  Zap,
  Users,
  Shield,
  ArrowRight,
} from "lucide-react";

import { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata("deployment");
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export default function DeploymentPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">部署指南</h1>
        <p className="text-xl text-gray-600">
          GPT-Load
          提供多种部署方案，满足不同场景的需求。从轻量化的单机部署到企业级的集群部署，选择最适合您的方案。
        </p>
      </div>

      {/* Deployment Options Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Single Machine Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Server className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">单机部署</h2>
              <p className="text-gray-600">轻量化部署，适合个人和小团队</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Zap className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  快速启动
                </h3>
                <p className="text-gray-600 text-sm">
                  使用 Docker Compose 一键部署，SQLite + 内存存储
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Database className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  可选部署
                </h3>
                <p className="text-gray-600 text-sm">
                  配置 MySQL/PostgreSQL 和 Redis，提升性能
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/standalone"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>查看详情</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Source Code Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Code className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">源码部署</h2>
              <p className="text-gray-600">开发者友好，完全自定义</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Shield className="h-4 w-4 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  完全控制
                </h3>
                <p className="text-gray-600 text-sm">
                  自定义构建、配置和部署流程
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Code className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  开发调试
                </h3>
                <p className="text-gray-600 text-sm">适合开发环境和功能定制</p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/source"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>查看详情</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Cluster Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Layers className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">集群部署</h2>
              <p className="text-gray-600">企业级高可用方案</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Users className="h-4 w-4 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  主从架构
                </h3>
                <p className="text-gray-600 text-sm">
                  分布式部署，支持水平扩展
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Shield className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">高可用</h3>
                <p className="text-gray-600 text-sm">故障转移和负载均衡</p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/cluster"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>查看详情</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Claw Cloud Deployment */}
        <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-cyan-100 p-3 rounded-lg">
              <Cloud className="h-6 w-6 text-cyan-600" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Claw Cloud
              </h2>
              <p className="text-gray-600">免费云端部署方案</p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-2">
              <Globe className="h-4 w-4 text-cyan-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  云端部署
                </h3>
                <p className="text-gray-600 text-sm">
                  无需服务器，一键部署到云端
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Zap className="h-4 w-4 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  免费额度
                </h3>
                <p className="text-gray-600 text-sm">每月 5 美元免费额度</p>
              </div>
            </div>
          </div>

          <Link
            href="/docs/deployment/claw-cloud"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>查看详情</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Quick Comparison */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">方案对比</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  部署方案
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  适用场景
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  技术要求
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  性能表现
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  运维难度
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  单机部署
                </td>
                <td className="py-3 px-4 text-gray-600">个人、小团队</td>
                <td className="py-3 px-4 text-gray-600">Docker 基础</td>
                <td className="py-3 px-4 text-gray-600">中等</td>
                <td className="py-3 px-4 text-green-600">简单</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  源码部署
                </td>
                <td className="py-3 px-4 text-gray-600">开发调试</td>
                <td className="py-3 px-4 text-gray-600">Go 开发经验</td>
                <td className="py-3 px-4 text-gray-600">高</td>
                <td className="py-3 px-4 text-yellow-600">中等</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  集群部署
                </td>
                <td className="py-3 px-4 text-gray-600">企业生产</td>
                <td className="py-3 px-4 text-gray-600">K8s/运维经验</td>
                <td className="py-3 px-4 text-gray-600">很高</td>
                <td className="py-3 px-4 text-red-600">复杂</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-gray-900">
                  Claw Cloud
                </td>
                <td className="py-3 px-4 text-gray-600">快速体验</td>
                <td className="py-3 px-4 text-gray-600">GitHub 账号</td>
                <td className="py-3 px-4 text-gray-600">中等</td>
                <td className="py-3 px-4 text-green-600">最简单</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Getting Started */}
      <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">开始部署</h2>
        <p className="text-gray-700 mb-6">
          如果您是首次使用
          GPT-Load，我们推荐从单机部署开始，它提供了最佳的学习曲线和快速体验。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs/deployment/standalone"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Server className="h-4 w-4 mr-2" />
            单机快速部署
          </Link>
          <Link
            href="/docs/deployment/claw-cloud"
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Cloud className="h-4 w-4 mr-2" />
            免费云端体验
          </Link>
        </div>
      </div>
    </div>
  );
}
