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
import { useTranslations } from "next-intl";

const Architecture = () => {
  const t = useTranslations("architecture");
  const t2 = useTranslations("architecturePage");
  const components = [
    {
      icon: Users,
      title: t2("components.client.title"),
      description: t2("components.client.description"),
      items: t2.raw("components.client.items"),
    },
    {
      icon: Shield,
      title: t2("components.proxy.title"),
      description: t2("components.proxy.description"),
      items: t2.raw("components.proxy.items"),
    },
    {
      icon: Server,
      title: t2("components.provider.title"),
      description: t2("components.provider.description"),
      items: t2.raw("components.provider.items"),
    },
  ];
  const infrastructure = [
    {
      icon: Database,
      title: t2("infrastructureComponents.mysql.title"),
      description: t2("infrastructureComponents.mysql.description"),
      details: t2.raw("infrastructureComponents.mysql.details"),
    },
    {
      icon: RotateCcw,
      title: t2("infrastructureComponents.redis.title"),
      description: t2("infrastructureComponents.redis.description"),
      details: t2.raw("infrastructureComponents.redis.details"),
    },
    {
      icon: Monitor,
      title: t2("infrastructureComponents.vue.title"),
      description: t2("infrastructureComponents.vue.description"),
      details: t2.raw("infrastructureComponents.vue.details"),
    },
  ];
  return (
    <section className="py-16 sm:py-20 bg-white">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {t("subtitle")}
            </p>
          </motion.div>
          {/* Data Flow */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center px-4">
              {t2("dataFlow")}
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
                      className="bg-gray-50 rounded-xl p-4 sm:p-6 max-w-xs w-full text-center border border-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg mx-auto mb-3 sm:mb-4">
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {component.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base mb-4">
                        {component.description}
                      </p>
                      <div className="space-y-1 sm:space-y-2">
                        {component.items.map(
                          (item: string, itemIndex: number) => (
                            <div
                              key={itemIndex}
                              className="text-xs sm:text-sm bg-white px-2 py-1 rounded border text-gray-700"
                            >
                              {item}
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                    {/* Arrow */}
                    {index < components.length - 1 && (
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-4 my-4 lg:my-0 hidden lg:block" />
                    )}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          {/* Infrastructure */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center px-4">
              {t2("infrastructure")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {infrastructure.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg mx-auto mb-3 sm:mb-4">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      {item.details.map(
                        (detail: string, detailIndex: number) => (
                          <div
                            key={detailIndex}
                            className="text-xs sm:text-sm bg-white px-2 sm:px-3 py-1 rounded border text-gray-700"
                          >
                            {detail}
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>{" "}
          {/* Deployment Options */}
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-6 sm:p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              {t2("deploymentOptions")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  {t2("deployment.standalone.title")}
                </h4>
                <ul className="space-y-2 text-blue-100 text-sm sm:text-base">
                  {t2
                    .raw("deployment.standalone.items")
                    .map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                </ul>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  {t2("deployment.cluster.title")}
                </h4>
                <ul className="space-y-2 text-blue-100 text-sm sm:text-base">
                  {t2
                    .raw("deployment.cluster.items")
                    .map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
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
