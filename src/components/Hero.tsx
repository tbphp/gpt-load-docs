"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Download, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Image
              src="/logo.png"
              alt="GPT-Load Logo"
              width={80}
              height={80}
              className="mx-auto mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 px-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {t("hero.title")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium px-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {t("hero.description")}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <Link
              href="/docs"
              className="group bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl dark:shadow-blue-500/20 w-full sm:w-auto justify-center"
            >
              <FileText className="h-5 w-5" />
              {t("hero.buttons.docs")}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/docs/deployment"
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md dark:hover:bg-gray-800 w-full sm:w-auto justify-center"
            >
              <Download className="h-5 w-5" />
              {t("hero.buttons.install")}
            </Link>

            <a
              href="https://github.com/tbphp/gpt-load"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:shadow-md dark:hover:bg-gray-800 w-full sm:w-auto justify-center"
            >
              <Github className="h-5 w-5" />
              {t("hero.buttons.github")}
            </a>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-3xl mx-auto mb-12 sm:mb-16 px-4"
          >
            <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                Go 1.23+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("hero.tech.backend")}</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                MySQL
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("hero.tech.database")}</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                Redis
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("hero.tech.cache")}</div>
            </div>
            <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                Vue 3
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{t("hero.tech.frontend")}</div>
            </div>
          </motion.div>

          {/* Quick Start Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-2xl mx-auto px-4"
          >
            <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 rounded-lg p-4 sm:p-6 text-left shadow-xl overflow-hidden">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-xs sm:text-sm ml-4">
                  {t("hero.quickStart.title")}
                </span>
              </div>
              <pre className="text-green-400 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap break-words">
                <code>{`docker run -d --name gpt-load \\
    -p 3001:3001 \\
    -e AUTH_KEY=your-secure-key-here \\
    -v "$(pwd)/data":/app/data \\
    ghcr.io/tbphp/gpt-load:latest

# 访问管理界面：http://localhost:3001
`}</code>
              </pre>

              {/* Security Warning */}
              <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                <div className="flex items-start space-x-2">
                  <div className="text-red-400 text-lg">⚠️</div>
                  <div>
                    <div className="text-red-400 text-xs sm:text-sm font-bold">
                      {t("hero.quickStart.security.title")}
                    </div>
                    <div className="text-red-300 text-xs mt-1">
                      {t("hero.quickStart.security.message")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
