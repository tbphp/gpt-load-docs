"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Clock, Activity } from "lucide-react";

const Performance = () => {
  const t = useTranslations("performance");

  const metrics = [
    {
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ].map((metric, index) => ({
    ...metric,
    label: t(`metrics.${index}.label`),
    value: t(`metrics.${index}.value`),
    description: t(`metrics.${index}.description`),
  }));

  const comparisons = t
    .raw("comparison.rows")
    .map(
      (row: { metric: string; without: string; with: string; improvement: string }) =>
        row
    );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
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
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${metric.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${metric.color}`} />
                </div>
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </h3>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Performance comparison */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("comparison.title")}
            </h3>
            <p className="text-gray-600">{t("comparison.subtitle")}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    {t("comparison.header.metric")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("comparison.header.without")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("comparison.header.with")}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    {t("comparison.header.improvement")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison: { metric: string; without: string; with: string; improvement: string }, index: number) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {comparison.metric}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-red-600">
                      {comparison.without}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold">
                      {comparison.with}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("monitoring.title")}
            </h3>
            <div className="space-y-4">
              {t
                .raw("monitoring.features")
                .map((feature: { title: string; description: string }, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 ${
                        ["bg-blue-100", "bg-green-100", "bg-purple-100"][
                          index % 3
                        ]
                      } rounded-full flex items-center justify-center mt-1`}
                    >
                      {[BarChart3, Activity, Zap][index % 3]({
                        className: `h-4 w-4 ${
                          ["text-blue-600", "text-green-600", "text-purple-600"][
                            index % 3
                          ]
                        }`,
                      })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">
                {t("monitoring.dashboard.title")}
              </h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-green-400">
                <span>🟢 {t("monitoring.dashboard.totalRequests")}</span>
                <span>156,789</span>
              </div>
              <div className="flex justify-between text-blue-400">
                <span>⚡ {t("monitoring.dashboard.avgResponse")}</span>
                <span>8.5ms</span>
              </div>
              <div className="flex justify-between text-yellow-400">
                <span>🔑 {t("monitoring.dashboard.activeKeys")}</span>
                <span>12/15</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>❌ {t("monitoring.dashboard.errorRate")}</span>
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
