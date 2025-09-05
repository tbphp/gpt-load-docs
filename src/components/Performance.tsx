"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Clock, Activity } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Performance = () => {
  const { t } = useTranslation();
  
  const metrics = [
    {
      label: t("performanceComponent.metrics.defaultConcurrency.label"),
      value: "100",
      description: t("performanceComponent.metrics.defaultConcurrency.description"),
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: t("performanceComponent.metrics.goVersion.label"),
      value: "1.23+",
      description: t("performanceComponent.metrics.goVersion.description"),
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: t("performanceComponent.metrics.connectionPool.label"),
      value: "100/50",
      description: t("performanceComponent.metrics.connectionPool.description"),
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      label: t("performanceComponent.metrics.requestTimeout.label"),
      value: "600s",
      description: t("performanceComponent.metrics.requestTimeout.description"),
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const comparisons = [
    {
      metric: t("performanceComponent.comparison.items.configManagement.metric"),
      without: t("performanceComponent.comparison.items.configManagement.without"),
      with: t("performanceComponent.comparison.items.configManagement.with"),
      improvement: t("performanceComponent.comparison.items.configManagement.improvement"),
    },
    {
      metric: t("performanceComponent.comparison.items.keyManagement.metric"),
      without: t("performanceComponent.comparison.items.keyManagement.without"),
      with: t("performanceComponent.comparison.items.keyManagement.with"),
      improvement: t("performanceComponent.comparison.items.keyManagement.improvement"),
    },
    {
      metric: t("performanceComponent.comparison.items.clusterDeployment.metric"),
      without: t("performanceComponent.comparison.items.clusterDeployment.without"),
      with: t("performanceComponent.comparison.items.clusterDeployment.with"),
      improvement: t("performanceComponent.comparison.items.clusterDeployment.improvement"),
    },
    {
      metric: t("performanceComponent.comparison.items.monitoring.metric"),
      without: t("performanceComponent.comparison.items.monitoring.without"),
      with: t("performanceComponent.comparison.items.monitoring.with"),
      improvement: t("performanceComponent.comparison.items.monitoring.improvement"),
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("performanceComponent.title")}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("performanceComponent.subtitle")}
          </p>
        </motion.div>

        {/* Performance metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 text-center group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${metric.bgColor} dark:bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Performance comparison */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("performanceComponent.comparison.title")}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("performanceComponent.comparison.subtitle")}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    {t("performanceComponent.comparison.headers.metric")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("performanceComponent.comparison.headers.directApi")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("performanceComponent.comparison.headers.withGptLoad")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("performanceComponent.comparison.headers.improvement")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {comparison.metric}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-red-600 dark:text-red-400">
                      {comparison.without}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 dark:text-green-400 font-semibold">
                      {comparison.with}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                        {comparison.improvement}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Real-time monitoring */}
        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Monitoring features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t("performanceComponent.monitoring.title")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mt-1">
                  <BarChart3 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t("performanceComponent.monitoring.features.detailedStats.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t("performanceComponent.monitoring.features.detailedStats.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-1">
                  <Activity className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t("performanceComponent.monitoring.features.healthCheck.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t("performanceComponent.monitoring.features.healthCheck.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{t("performanceComponent.monitoring.features.performanceAnalysis.title")}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t("performanceComponent.monitoring.features.performanceAnalysis.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">{t("performanceComponent.monitoring.dashboard.title")}</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-green-400">
                <span>{t("performanceComponent.monitoring.dashboard.metrics.totalRequests")}</span>
                <span>156,789</span>
              </div>
              <div className="flex justify-between text-blue-400">
                <span>{t("performanceComponent.monitoring.dashboard.metrics.avgResponse")}</span>
                <span>8.5ms</span>
              </div>
              <div className="flex justify-between text-yellow-400">
                <span>{t("performanceComponent.monitoring.dashboard.metrics.activeKeys")}</span>
                <span>12/15</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>{t("performanceComponent.monitoring.dashboard.metrics.errorRate")}</span>
                <span>0.02%</span>
              </div>
              <div className="mt-4 h-20 bg-gray-800 rounded flex items-end justify-between px-2 pb-2">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-blue-500 w-3 rounded-t"
                    style={{ height: `${Math.random() * 60 + 20}px` }}
                    animate={{ height: `${Math.random() * 60 + 20}px` }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;
