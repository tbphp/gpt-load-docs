"use client";

import { motion } from "framer-motion";
import {
  Zap,
  RotateCcw,
  Shield,
  BarChart3,
  Settings,
  Globe,
  FileText,
  Lock,
  Cpu,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: RotateCcw,
      title: "多密钥轮询",
      description: "自动 API 密钥轮换和负载均衡，确保服务高可用性",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: BarChart3,
      title: "多目标负载均衡",
      description: "支持轮询多个上游 API 地址，分散请求压力",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Shield,
      title: "智能拉黑",
      description: "区分永久性和临时性错误，智能密钥管理",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: BarChart3,
      title: "实时监控",
      description: "全面的统计信息、健康检查和黑名单管理",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Settings,
      title: "灵活配置",
      description: "基于环境变量的配置，支持 .env 文件",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: Globe,
      title: "CORS 支持",
      description: "完整的跨域请求支持，适配各种前端框架",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
    {
      icon: FileText,
      title: "结构化日志",
      description: "详细的日志记录，包含响应时间和密钥信息",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: Lock,
      title: "可选认证",
      description: "项目级 Bearer token 认证，保障 API 安全",
      color: "text-pink-600",
      bgColor: "bg-pink-100",
    },
    {
      icon: Zap,
      title: "高性能",
      description: "零拷贝流式传输、并发处理和原子操作",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Cpu,
      title: "生产就绪",
      description: "优雅关闭、错误恢复和内存管理",
      color: "text-teal-600",
      bgColor: "bg-teal-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            强大的功能特性
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GPT-Load 为您的 AI 应用提供全方位的 API 代理解决方案，
            从基础的负载均衡到高级的监控管理，一应俱全。
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-6 w-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Performance stats */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-blue-100">并发请求</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt;10ms</div>
              <div className="text-blue-100">响应延迟</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">服务可用性</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-blue-100">单点故障</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
