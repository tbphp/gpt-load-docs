"use client";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("features");

  const featureIcons = [
    Cpu,
    Globe,
    RotateCcw,
    BarChart3,
    Settings,
    Database,
    Shield,
    FileText,
    Code,
  ];

  const features = Array.from({ length: 9 }, (_, i) => ({
    icon: featureIcons[i],
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    technical: t(`items.${i}.technical`),
  }));

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t("subtitle")}
            </p>
          </motion.div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mb-3 sm:mb-4">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  {/* Technical Details */}
                  <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                    <div className="text-xs sm:text-sm text-gray-500 font-mono">
                      {feature.technical}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* Architecture Highlight */}
          <motion.div
            className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {t("highlight.title")}
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              {t("highlight.description")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Go 1.23+
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("highlight.runtime")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  MySQL 8.2+
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("highlight.storage")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Redis
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("highlight.cache")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Vue 3
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("highlight.admin")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
