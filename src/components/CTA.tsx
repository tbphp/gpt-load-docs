"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, BookOpen } from "lucide-react";
import Link from "next/link";
import { useGitHubStars } from "@/context/GitHubStarsContext";
import { formatStars } from "@/lib/utils";

const CTA = () => {
  const { stars } = useGitHubStars();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]" />
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              准备开始了吗？
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              只需几分钟就能部署 GPT-Load，为您的 AI 应用提供企业级的 API
              代理服务。 开源免费，生产就绪。
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <BookOpen className="h-5 w-5" />
                <span>查看文档</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Github className="h-5 w-5" />
                <span>GitHub 源码</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Quick start */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">一键部署</h3>

            <div className="bg-gray-900 rounded-lg p-6 text-left overflow-x-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">快速部署</span>
              </div>
              <pre className="text-green-400 text-sm">
                <code>{`# 拉取镜像
docker pull ghcr.io/tbphp/gpt-load:latest

# 创建配置
echo "sk-your-openai-key" > keys.txt

# 启动服务
docker run -d -p 3000:3000 \\
  -v $(pwd)/keys.txt:/app/keys.txt:ro \\
  ghcr.io/tbphp/gpt-load:latest

# 🎉 完成！您的 API 代理服务已启动在 http://localhost:3000`}</code>
              </pre>
            </div>
          </motion.div>

          {/* Stats and social proof */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                {stars ? formatStars(stars) : "..."}
              </div>
              <div className="text-blue-100">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Docker 下载</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">MIT</div>
              <div className="text-blue-100">开源协议</div>
            </div>
          </motion.div>

          {/* Community links */}
          <motion.div
            className="mt-12 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="https://github.com/tbphp/gpt-load/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
            >
              问题反馈
            </Link>
            <span className="text-blue-200">•</span>
            <Link
              href="https://github.com/tbphp/gpt-load/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
            >
              社区讨论
            </Link>
            <span className="text-blue-200">•</span>
            <Link
              href="https://github.com/tbphp/gpt-load/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 hover:text-white transition-colors duration-200 text-sm"
            >
              贡献指南
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
