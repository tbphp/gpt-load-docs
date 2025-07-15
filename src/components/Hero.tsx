"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Download, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gray-100"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Image
              src="/logo.png"
              alt="GPT-Load Logo"
              width={80}
              height={80}
              className="mx-auto mb-6"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              GPT-Load
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-4 font-medium"
          >
            高性能 AI 接口透明代理
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            基于 Go 1.23+ 开发的企业级 AI 接口代理服务，支持 OpenAI、Google
            Gemini 等多种 AI 服务提供商。
            提供智能密钥管理、负载均衡、高并发处理和完善的监控功能。
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/docs"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FileText className="h-5 w-5" />
              项目文档
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/docs/installation"
              className="group border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md"
            >
              <Download className="h-5 w-5" />
              安装部署
            </Link>

            <a
              href="https://github.com/tbphp/gpt-load"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16"
          >
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-lg font-bold text-blue-600 mb-2">
                Go 1.23+
              </div>
              <div className="text-sm text-gray-600">后端语言</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-lg font-bold text-blue-600 mb-2">MySQL</div>
              <div className="text-sm text-gray-600">数据存储</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-lg font-bold text-blue-600 mb-2">Redis</div>
              <div className="text-sm text-gray-600">缓存系统</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-lg font-bold text-blue-600 mb-2">Vue 3</div>
              <div className="text-sm text-gray-600">管理界面</div>
            </div>
          </motion.div>

          {/* Quick Start Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-900 rounded-lg p-6 text-left shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">快速启动</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 克隆项目
git clone https://github.com/tbphp/gpt-load.git
cd gpt-load

# 复制环境配置文件
cp .env.example .env

# 启动服务
docker compose up -d

# 访问管理界面：http://localhost:3001
# 默认认证Key: sk-123456
`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
