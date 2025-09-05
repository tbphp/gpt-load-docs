"use client";
import { motion } from "framer-motion";
import {
  Database,
  Server,
  Users,
  ArrowRight,
  Shield,
  RotateCcw,
  Monitor,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
const Architecture = () => {
  const { t, tArray } = useTranslation();
  
  const components = [
    {
      icon: Users,
      title: t("architecture.components.client.title"),
      description: t("architecture.components.client.description"),
      items: tArray("architecture.components.client.items"),
    },
    {
      icon: Shield,
      title: t("architecture.components.proxy.title"),
      description: t("architecture.components.proxy.description"),
      items: tArray("architecture.components.proxy.items"),
    },
    {
      icon: Server,
      title: t("architecture.components.providers.title"),
      description: t("architecture.components.providers.description"),
      items: tArray("architecture.components.providers.items"),
    },
  ];
  const infrastructure = [
    {
      icon: Database,
      title: t("architecture.infrastructure.mysql.title"),
      description: t("architecture.infrastructure.mysql.description"),
      details: tArray("architecture.infrastructure.mysql.details"),
    },
    {
      icon: RotateCcw,
      title: t("architecture.infrastructure.redis.title"),
      description: t("architecture.infrastructure.redis.description"),
      details: tArray("architecture.infrastructure.redis.details"),
    },
    {
      icon: Monitor,
      title: t("architecture.infrastructure.management.title"),
      description: t("architecture.infrastructure.management.description"),
      details: tArray("architecture.infrastructure.management.details"),
    },
  ];
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 px-4">
              {t("architecture.title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              {t("architecture.description")}
            </p>
          </motion.div>
          {/* Data Flow */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center px-4">
              {t("dataFlow")}
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 sm:space-y-8 lg:space-y-0 lg:space-x-4">
              {components.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row items-center w-full lg:w-auto"
                  >
                    <motion.div
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 max-w-xs w-full text-center border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-3 sm:mb-4">
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {component.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
                        {component.description}
                      </p>
                      <div className="space-y-1 sm:space-y-2">
                        {component.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="text-xs sm:text-sm bg-white dark:bg-gray-900 px-2 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    {/* Arrow */}
                    {index < components.length - 1 && (
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 dark:text-gray-600 mx-4 my-4 lg:my-0 hidden lg:block" />
                    )}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          {/* Infrastructure */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center px-4">
              {t("infrastructure")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {infrastructure.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 text-center border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mx-auto mb-3 sm:mb-4">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="text-xs sm:text-sm bg-white dark:bg-gray-900 px-2 sm:px-3 py-1 rounded border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>{" "}
          {/* Deployment Options */}
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-gray-800 dark:to-blue-800 rounded-xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {t("deploymentOptions.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-blue-300 dark:text-blue-400">
                  {t("deploymentOptions.standalone.title")}
                </h4>
                <ul className="space-y-2 text-blue-100 dark:text-blue-200 text-sm sm:text-base">
                  {tArray("deploymentOptions.standalone.features").map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-blue-300 dark:text-blue-400">
                  {t("deploymentOptions.cluster.title")}
                </h4>
                <ul className="space-y-2 text-blue-100 dark:text-blue-200 text-sm sm:text-base">
                  {tArray("deploymentOptions.cluster.features").map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Architecture;
