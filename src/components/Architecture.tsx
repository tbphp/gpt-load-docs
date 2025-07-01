"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Users, Zap } from "lucide-react";

const Architecture = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            系统架构
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解 GPT-Load 如何通过智能路由和负载均衡， 为您的应用提供稳定可靠的
            AI API 服务。
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Client applications */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center mb-2">
                  客户端应用
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="bg-gray-100 px-3 py-1 rounded">Web 应用</div>
                  <div className="bg-gray-100 px-3 py-1 rounded">移动应用</div>
                  <div className="bg-gray-100 px-3 py-1 rounded">API 服务</div>
                </div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <ArrowRight className="h-8 w-8 text-blue-600 hidden lg:block" />
              <div className="lg:hidden">
                <div className="w-2 h-8 bg-blue-600 rounded-full" />
              </div>
            </motion.div>

            {/* GPT-Load proxy */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg p-6 shadow-xl text-white relative">
                <motion.div
                  className="absolute inset-0 bg-white rounded-lg opacity-20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Zap className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center mb-4">
                  GPT-Load 代理
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>密钥轮询</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>负载均衡</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>错误处理</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>实时监控</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <ArrowRight className="h-8 w-8 text-blue-600 hidden lg:block" />
              <div className="lg:hidden">
                <div className="w-2 h-8 bg-blue-600 rounded-full" />
              </div>
            </motion.div>

            {/* API providers */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <Server className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-center mb-2">
                  API 提供商
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="bg-gray-100 px-3 py-1 rounded">OpenAI</div>
                  <div className="bg-gray-100 px-3 py-1 rounded">
                    Azure OpenAI
                  </div>
                  <div className="bg-gray-100 px-3 py-1 rounded">
                    第三方服务
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Flow indicators */}
          <motion.div
            className="absolute top-1/2 left-1/4 transform -translate-y-1/2 hidden lg:block"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </motion.div>
          <motion.div
            className="absolute top-1/2 right-1/4 transform -translate-y-1/2 hidden lg:block"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">统一接入</h3>
            <p className="text-gray-600">
              一个端点接入多个 AI 服务提供商，简化应用架构
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">智能路由</h3>
            <p className="text-gray-600">
              自动选择最优的 API 密钥和服务端点，确保最佳性能
            </p>
          </div>
          <div className="text-center">
            <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-violet-600">3</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">故障容错</h3>
            <p className="text-gray-600">
              当某个服务出现问题时，自动切换到备用服务，保证业务连续性
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
