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
const Architecture = () => {
  const components = [
    {
      icon: Users,
      title: "客户端应用",
      description: "Web/移动应用通过标准 OpenAI API 格式调用",
      items: ["HTTP/HTTPS 请求", "Bearer Token 认证", "JSON 格式交互"],
    },
    {
      icon: Shield,
      title: "GPT-Load 代理层",
      description: "核心代理服务，负责请求转发和管理",
      items: ["透明代理", "密钥管理", "负载均衡", "请求日志"],
    },
    {
      icon: Server,
      title: "AI 服务提供商",
      description: "多种 AI 服务的统一接入",
      items: ["OpenAI API", "Google Gemini", "其他兼容服务"],
    },
  ];
  const infrastructure = [
    {
      icon: Database,
      title: "MySQL 8.2+",
      description: "持久化存储",
      details: ["配置数据", "用户信息", "请求日志"],
    },
    {
      icon: RotateCcw,
      title: "Redis",
      description: "缓存与锁",
      details: ["密钥缓存", "分布式锁", "会话存储"],
    },
    {
      icon: Monitor,
      title: "Vue 3 管理后台",
      description: "管理界面",
      details: ["实时监控", "配置管理", "日志查看"],
    },
  ];
  return (
    <section className="py-20 bg-white">
      {" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Header */}{" "}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {" "}
              系统架构{" "}
            </h2>{" "}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {" "}
              基于 Go 语言的高性能透明代理架构，支持分布式部署和水平扩展{" "}
            </p>{" "}
          </motion.div>{" "}
          {/* Data Flow */}{" "}
          <div className="mb-16">
            {" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {" "}
              数据流架构{" "}
            </h3>{" "}
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
              {" "}
              {components.map((component, index) => {
                const IconComponent = component.icon;
                return (
                  <div key={index} className="flex items-center">
                    {" "}
                    <motion.div
                      className="bg-gray-50 rounded-xl p-6 max-w-xs text-center border border-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {" "}
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mx-auto mb-4">
                        {" "}
                        <IconComponent className="h-8 w-8 text-blue-600" />{" "}
                      </div>{" "}
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {" "}
                        {component.title}{" "}
                      </h4>{" "}
                      <p className="text-gray-600 text-sm mb-4">
                        {" "}
                        {component.description}{" "}
                      </p>{" "}
                      <div className="space-y-1">
                        {" "}
                        {component.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="text-xs bg-white px-2 py-1 rounded border text-gray-700"
                          >
                            {" "}
                            {item}{" "}
                          </div>
                        ))}{" "}
                      </div>{" "}
                    </motion.div>{" "}
                    {/* Arrow */}{" "}
                    {index < components.length - 1 && (
                      <ArrowRight className="h-8 w-8 text-gray-400 mx-4 hidden lg:block" />
                    )}{" "}
                  </div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          {/* Infrastructure */}{" "}
          <div className="mb-16">
            {" "}
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              {" "}
              基础设施组件{" "}
            </h3>{" "}
            <div className="grid md:grid-cols-3 gap-8">
              {" "}
              {infrastructure.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {" "}
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                      {" "}
                      <IconComponent className="h-6 w-6 text-blue-600" />{" "}
                    </div>{" "}
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {" "}
                      {item.title}{" "}
                    </h4>{" "}
                    <p className="text-gray-600 mb-4"> {item.description} </p>{" "}
                    <div className="space-y-2">
                      {" "}
                      {item.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="text-sm bg-white px-3 py-1 rounded border text-gray-700"
                        >
                          {" "}
                          {detail}{" "}
                        </div>
                      ))}{" "}
                    </div>{" "}
                  </motion.div>
                );
              })}{" "}
            </div>{" "}
          </div>{" "}
          {/* Deployment Options */}{" "}
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {" "}
            <h3 className="text-2xl font-bold mb-4"> 灵活的部署方式 </h3>{" "}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {" "}
              <div className="text-left">
                {" "}
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  单机部署
                </h4>{" "}
                <ul className="space-y-2 text-blue-100">
                  {" "}
                  <li>• Docker Compose 一键启动</li>{" "}
                  <li>• 包含完整的 MySQL + Redis</li>{" "}
                  <li>• 适合开发和小规模生产</li>{" "}
                </ul>{" "}
              </div>{" "}
              <div className="text-left">
                {" "}
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  集群部署
                </h4>{" "}
                <ul className="space-y-2 text-blue-100">
                  {" "}
                  <li>• Master/Slave 架构</li> <li>• 水平扩展支持</li>{" "}
                  <li>• 高可用性保障</li>{" "}
                </ul>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default Architecture;
