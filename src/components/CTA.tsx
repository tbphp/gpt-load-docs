"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, BookOpen, Download } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-violet-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              立即开始使用 GPT-Load
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              几分钟内即可部署完成，开始享受高性能的 AI 接口代理服务
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link
                href="/docs/installation"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>快速部署</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>

              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>查看文档</span>
              </Link>

              <a
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>GitHub</span>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900 rounded-lg p-4 sm:p-6 max-w-2xl mx-auto overflow-hidden"
            >
              <div className="text-left">
                <div className="text-gray-400 text-xs sm:text-sm mb-2">
                  快速启动命令：
                </div>
                <code className="text-green-400 text-xs sm:text-sm break-all">
                  git clone https://github.com/tbphp/gpt-load.git && cd gpt-load
                  && cp .env.example .env && docker compose up -d
                </code>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
