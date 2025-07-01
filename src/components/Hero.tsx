"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Zap, Shield, BarChart3 } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="h-4 w-4" />
              <span>高性能 AI API 代理</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-800 bg-clip-text text-transparent">
                GPT-Load
              </span>
              <br />
              <span className="text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
                智能负载均衡
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              高性能的 OpenAI 兼容 API
              代理服务器，支持多密钥轮询、负载均衡和智能错误处理。 为您的 AI
              应用提供稳定可靠的 API 访问服务。
            </motion.p>

            {/* Feature highlights */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">生产就绪</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <BarChart3 className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">实时监控</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                <Zap className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium">零拷贝流式</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/docs"
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>快速开始</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="h-4 w-4" />
                <span>查看源码</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Code example */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-gray-900 rounded-xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">快速启动</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{`# 使用 Docker 快速部署
docker pull ghcr.io/tbphp/gpt-load:latest

# 创建密钥文件
echo "sk-your-api-key-1" > keys.txt
echo "sk-your-api-key-2" >> keys.txt

# 启动服务
docker run -d -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  ghcr.io/tbphp/gpt-load:latest

# 🚀 服务已就绪！`}</code>
              </pre>
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-2xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600">并发请求</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-600">可用性</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
