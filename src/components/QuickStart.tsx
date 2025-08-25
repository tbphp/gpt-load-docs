"use client";

import { motion } from "framer-motion";
import { Terminal, Download, Settings, Play } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const QuickStart = () => {
  const t = useTranslations("quickStart");
  const t2 = useTranslations("quickStartPage");
  const steps = [
    {
      icon: Download,
      title: t("step1.title"),
      description: t("step1.description"),
      code: `git clone https://github.com/tbphp/gpt-load.git
cd gpt-load`,
    },
    {
      icon: Settings,
      title: t("step2.title"),
      description: t("step2.description"),
      code: `# ${t2("step2.copyEnv")}
cp .env.example .env

# ${t2("step2.editConfig")}
# vim .env

# ${t2("step2.mainConfig")}
# APP_PORT=3001
# APP_SECRET=your-secret-key`,
    },
    {
      icon: Play,
      title: t("step3.title"),
      description: t("step3.description"),
      code: `# ${t2("step3.startService")}
docker compose up -d

# ${t2("step3.visitAdmin")}
# http://localhost:3001`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{t("title")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              {t("subtitle")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t("description")}
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
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
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 h-full">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {step.description}
                    </p>

                    {/* Code Block */}
                    <div className="bg-gray-900 rounded-lg p-3 sm:p-4 overflow-hidden">
                      <pre className="text-green-400 text-xs sm:text-sm whitespace-pre-wrap break-words">
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
            className="bg-gray-50 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center px-4">
              {t2("requirements.title")}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-blue-600 mb-1 sm:mb-2">
                  Go 1.23+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{t2("requirements.runtime")}</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-blue-600 mb-1 sm:mb-2">
                  MySQL 8.2+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{t2("requirements.storage")}</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-blue-600 mb-1 sm:mb-2">
                  Redis
                </div>
                <div className="text-xs sm:text-sm text-gray-600">{t2("requirements.cache")}</div>
              </div>
              <div className="text-center">
                <div className="text-base sm:text-lg font-bold text-blue-600 mb-1 sm:mb-2">
                  Docker
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {t2("requirements.container")}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <Link
                href="/docs/deployment"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 text-sm sm:text-base"
              >
                <span>{t2("viewDocs")}</span>
                <Terminal className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
