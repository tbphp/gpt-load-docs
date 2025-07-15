"use client";
import { motion } from "framer-motion";
import {
  Cpu,
  RotateCcw,
  Globe,
  BarChart3,
  Settings,
  Database,
  Shield,
  FileText,
  Code,
} from "lucide-react";
const Features = () => {
  const features = [
    {
      icon: Cpu,
      title: "高性能架构",
      description:
        "基于 Go 1.23+ 开发，零拷贝流式传输，协程并发模型，支持高并发处理",
      technical: "Go 协程 + HTTP/2 连接复用",
    },
    {
      icon: Globe,
      title: "透明代理",
      description:
        "完全保留原生 API 格式，无需修改现有代码即可接入多种 AI 服务",
      technical: "OpenAI + Google Gemini 支持",
    },
    {
      icon: RotateCcw,
      title: "智能密钥管理",
      description: "分组管理、动态轮换、自动重试，确保服务高可用性",
      technical: "Redis 缓存 + 故障恢复机制",
    },
    {
      icon: BarChart3,
      title: "负载均衡",
      description: "多上游支持、权重配置、健康检查，智能路由到可用节点",
      technical: "加权轮询 + 健康检查",
    },
    {
      icon: Settings,
      title: "热重载配置",
      description: "三层配置系统，环境变量、系统设置、分组配置，支持热更新",
      technical: "环境变量 → 系统设置 → 分组设置",
    },
    {
      icon: Database,
      title: "集群支持",
      description: "主从架构，无状态设计，支持水平扩展和分布式部署",
      technical: "Master/Slave + Redis 分布式锁",
    },
    {
      icon: Shield,
      title: "安全机制",
      description: "Bearer Token 认证、分组隔离、请求日志、敏感信息脱敏",
      technical: "JWT + 访问控制 + 审计日志",
    },
    {
      icon: FileText,
      title: "管理后台",
      description: "Vue 3 现代化界面，实时监控、日志查看、配置管理",
      technical: "Vue 3 + TypeScript + Naive UI",
    },
    {
      icon: Code,
      title: "开发友好",
      description: "完整的 RESTful API、详细文档、Docker 一键部署",
      technical: "OpenAPI + Docker Compose",
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Header */}{" "}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {" "}
              核心技术特性{" "}
            </h2>{" "}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {" "}
              企业级架构设计，专为生产环境优化{" "}
            </p>{" "}
          </motion.div>{" "}
          {/* Features Grid */}{" "}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {" "}
                  {/* Icon */}{" "}
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    {" "}
                    <IconComponent className="h-6 w-6 text-blue-600" />{" "}
                  </div>{" "}
                  {/* Title */}{" "}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {" "}
                    {feature.title}{" "}
                  </h3>{" "}
                  {/* Description */}{" "}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {" "}
                    {feature.description}{" "}
                  </p>{" "}
                  {/* Technical Details */}{" "}
                  <div className="bg-gray-50 rounded-lg p-3">
                    {" "}
                    <div className="text-sm text-gray-500 font-mono">
                      {" "}
                      {feature.technical}{" "}
                    </div>{" "}
                  </div>{" "}
                </motion.div>
              );
            })}{" "}
          </div>{" "}
          {/* Architecture Highlight */}{" "}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {" "}
            <h3 className="text-2xl font-bold mb-4">
              {" "}
              生产就绪的企业级架构{" "}
            </h3>{" "}
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {" "}
              从单机部署到分布式集群，从开发环境到生产环境，GPT-Load
              提供完整的解决方案{" "}
            </p>{" "}
            <div className="grid md:grid-cols-4 gap-6">
              {" "}
              <div>
                {" "}
                <div className="text-3xl font-bold mb-2">Go 1.23+</div>{" "}
                <div className="text-blue-200 text-sm">运行时环境</div>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-3xl font-bold mb-2">MySQL 8.2+</div>{" "}
                <div className="text-blue-200 text-sm">数据持久化</div>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-3xl font-bold mb-2">Redis</div>{" "}
                <div className="text-blue-200 text-sm">缓存 & 锁</div>{" "}
              </div>{" "}
              <div>
                {" "}
                <div className="text-3xl font-bold mb-2">Vue 3</div>{" "}
                <div className="text-blue-200 text-sm">管理界面</div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Features;
