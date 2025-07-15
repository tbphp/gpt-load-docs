"use client";

import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Clock, Activity } from "lucide-react";

const Performance = () => {
  const metrics = [
    {
      label: "默认并发数",
      value: "100",
      description: "MAX_CONCURRENT_REQUESTS 默认值",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Go 版本要求",
      value: "1.23+",
      description: "最低版本要求",
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: "连接池配置",
      value: "100/50",
      description: "最大空闲连接数/每主机连接数",
      icon: Shield,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      label: "请求超时",
      value: "600s",
      description: "默认请求超时时间",
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const comparisons = [
    {
      metric: "配置管理",
      without: "静态配置文件",
      with: "动态热重载",
      improvement: "无需重启",
    },
    {
      metric: "密钥管理",
      without: "手动轮换",
      with: "自动故障恢复",
      improvement: "智能黑名单",
    },
    {
      metric: "集群部署",
      without: "复杂选举机制",
      with: "IS_SLAVE 标记",
      improvement: "简单配置",
    },
    {
      metric: "监控能力",
      without: "基础日志",
      with: "Web 管理界面",
      improvement: "实时统计",
    },
  ];

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
            技术特性
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            基于 Go 1.23+ 的高性能架构设计，为企业级应用提供可靠的代理服务
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
            <h3 className="text-2xl font-bold text-gray-900 mb-4">性能对比</h3>
            <p className="text-gray-600">
              对比直接调用 API vs 使用 GPT-Load 代理的性能差异
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    性能指标
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    直接调用 API
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    使用 GPT-Load
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                    性能提升
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
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
              实时监控功能
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <BarChart3 className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">详细统计</h4>
                  <p className="text-gray-600 text-sm">
                    请求数量、响应时间、错误率等全方位监控
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <Activity className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">健康检查</h4>
                  <p className="text-gray-600 text-sm">
                    实时监控服务状态，及时发现并处理异常
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                  <Zap className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">性能分析</h4>
                  <p className="text-gray-600 text-sm">
                    深入分析性能瓶颈，优化系统配置
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mock dashboard */}
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-semibold">监控面板</h4>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-green-400">
                <span>🟢 总请求数:</span>
                <span>156,789</span>
              </div>
              <div className="flex justify-between text-blue-400">
                <span>⚡ 平均响应:</span>
                <span>8.5ms</span>
              </div>
              <div className="flex justify-between text-yellow-400">
                <span>🔑 活跃密钥:</span>
                <span>12/15</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>❌ 错误率:</span>
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
