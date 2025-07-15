"use client";

import { motion } from "framer-motion";
import { Terminal, Download, Settings, Play } from "lucide-react";
import Link from "next/link";

const QuickStart = () => {
  const steps = [
    {
      icon: Download,
      title: "1. 克隆项目",
      description: "从 GitHub 下载完整项目代码",
      code: `git clone https://github.com/tbphp/gpt-load.git
cd gpt-load`,
    },
    {
      icon: Settings,
      title: "2. 配置环境",
      description: "复制并编辑环境配置文件",
      code: `# 复制环境配置文件
cp .env.example .env

# 编辑配置（可选）
vim .env

# 主要配置项：
# APP_PORT=3001
# APP_SECRET=your-secret-key`,
    },
    {
      icon: Play,
      title: "3. 启动服务",
      description: "使用 Docker Compose 一键启动",
      code: `# 启动服务（包含 MySQL 和 Redis）
docker compose up -d

# 访问管理界面
# http://localhost:3001`,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Terminal className="h-4 w-4" />
              <span>快速开始</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              3 步启动 GPT-Load
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              通过 Docker Compose 快速部署，包含完整的数据库和缓存服务
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{step.description}</p>

                    {/* Code Block */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{step.code}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Connection line (except for last item) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-gray-300 z-10"
                      style={{ transform: "translateY(-50%)" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Requirements */}
          <motion.div
            className="bg-gray-50 rounded-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              系统要求
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">
                  Go 1.23+
                </div>
                <div className="text-sm text-gray-600">运行环境</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">
                  MySQL 8.2+
                </div>
                <div className="text-sm text-gray-600">数据存储</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">
                  Redis
                </div>
                <div className="text-sm text-gray-600">缓存服务</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600 mb-2">
                  Docker
                </div>
                <div className="text-sm text-gray-600">容器运行时</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/docs/installation"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
              >
                <span>查看详细部署文档</span>
                <Terminal className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
