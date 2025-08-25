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
import { useTranslation } from "@/hooks/useTranslation";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Cpu,
      title: t("features.highPerformance.title"),
      description: t("features.highPerformance.description"),
      technical: t("features.highPerformance.technical"),
    },
    {
      icon: Globe,
      title: t("features.transparentProxy.title"),
      description: t("features.transparentProxy.description"),
      technical: t("features.transparentProxy.technical"),
    },
    {
      icon: RotateCcw,
      title: t("features.keyManagement.title"),
      description: t("features.keyManagement.description"),
      technical: t("features.keyManagement.technical"),
    },
    {
      icon: BarChart3,
      title: t("features.loadBalancing.title"),
      description: t("features.loadBalancing.description"),
      technical: t("features.loadBalancing.technical"),
    },
    {
      icon: Settings,
      title: t("features.hotReload.title"),
      description: t("features.hotReload.description"),
      technical: t("features.hotReload.technical"),
    },
    {
      icon: Database,
      title: t("features.clusterSupport.title"),
      description: t("features.clusterSupport.description"),
      technical: t("features.clusterSupport.technical"),
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      description: t("features.security.description"),
      technical: t("features.security.technical"),
    },
    {
      icon: FileText,
      title: t("features.admin.title"),
      description: t("features.admin.description"),
      technical: t("features.admin.technical"),
    },
    {
      icon: Code,
      title: t("features.developerFriendly.title"),
      description: t("features.developerFriendly.description"),
      technical: t("features.developerFriendly.technical"),
    },
  ];
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
              {t("features.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t("features.subtitle")}
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
            })}{" "}
          </div>{" "}
          {/* Architecture Highlight */}
          <motion.div
            className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {t("productionReady.title")}
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              {t("productionReady.description")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Go 1.23+
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("productionReady.runtime")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  MySQL 8.2+
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("productionReady.persistence")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Redis
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("productionReady.cacheAndLock")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  Vue 3
                </div>
                <div className="text-blue-200 text-xs sm:text-sm">
                  {t("productionReady.adminUI")}
                </div>
              </div>
            </div>
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Features;
