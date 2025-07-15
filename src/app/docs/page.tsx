import { Server, Database, Shield, Cpu, RotateCcw, Globe } from "lucide-react";
import Link from "next/link";
export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {" "}
      {/* Header */}{" "}
      <div className="mb-12">
        {" "}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          GPT-Load 项目简介
        </h1>{" "}
        <p className="text-xl text-gray-600 leading-relaxed">
          {" "}
          一个高性能、企业级的 AI 接口透明代理服务，专门为需要集成多种 AI
          服务的企业和开发者设计。 采用 Go
          语言开发，具备智能密钥管理、负载均衡和完善的监控功能，专为高并发生产环境而设计。{" "}
        </p>{" "}
      </div>{" "}
      {/* Core Concept */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          核心概念
        </h2>{" "}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          {" "}
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            透明代理
          </h3>{" "}
          <p className="text-blue-800">
            {" "}
            GPT-Load 作为透明代理服务，完全保留各 AI 服务商的原生 API
            格式，不做任何格式转换或统一。 用户如何请求 GPT-Load，GPT-Load
            就如何请求上游服务，实现完全透明的代理功能。{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* Supported Services */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          支持的 AI 服务
        </h2>{" "}
        <div className="grid md:grid-cols-2 gap-6">
          {" "}
          <div className="border border-gray-200 rounded-lg p-6">
            {" "}
            <div className="flex items-center mb-4">
              {" "}
              <Globe className="h-6 w-6 text-blue-600 mr-3" />{" "}
              <h3 className="text-xl font-semibold text-gray-900">OpenAI</h3>{" "}
            </div>{" "}
            <ul className="text-gray-600 space-y-2">
              {" "}
              <li>• 官方 OpenAI API</li> <li>• Azure OpenAI</li>{" "}
              <li>• 所有兼容 OpenAI 格式的第三方服务</li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="border border-gray-200 rounded-lg p-6">
            {" "}
            <div className="flex items-center mb-4">
              {" "}
              <Server className="h-6 w-6 text-green-600 mr-3" />{" "}
              <h3 className="text-xl font-semibold text-gray-900">
                Google Gemini
              </h3>{" "}
            </div>{" "}
            <ul className="text-gray-600 space-y-2">
              {" "}
              <li>• Gemini Pro</li> <li>• Gemini Pro Vision</li>{" "}
              <li>• 支持多模态功能</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Core Features */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          核心特性
        </h2>{" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <Cpu className="h-8 w-8 text-blue-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              高性能架构
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              零拷贝流式传输，基于 Go 协程的并发模型，支持高并发连接{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <RotateCcw className="h-8 w-8 text-green-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              智能密钥管理
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              分组管理、动态轮换、自动重试，确保服务高可用性{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <Shield className="h-8 w-8 text-purple-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              负载均衡
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              多上游支持、权重配置、健康检查，智能路由到可用节点{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <Database className="h-8 w-8 text-orange-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              集群支持
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              Master/Slave 架构，无状态设计，支持水平扩展{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <Server className="h-8 w-8 text-indigo-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              热重载配置
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              三层配置系统，环境变量、系统设置、分组配置，支持热更新{" "}
            </p>{" "}
          </div>{" "}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            {" "}
            <Globe className="h-8 w-8 text-cyan-600 mb-4" />{" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              管理后台
            </h3>{" "}
            <p className="text-gray-600 text-sm">
              {" "}
              Vue 3 现代化界面，实时监控、日志查看、配置管理{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Technology Stack */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          技术栈
        </h2>{" "}
        <div className="grid md:grid-cols-2 gap-8">
          {" "}
          <div>
            {" "}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              后端技术
            </h3>{" "}
            <ul className="space-y-2 text-gray-600">
              {" "}
              <li>
                • <strong>Go 1.23+</strong> - 主要编程语言
              </li>{" "}
              <li>
                • <strong>Gin</strong> - HTTP Web 框架
              </li>{" "}
              <li>
                • <strong>GORM</strong> - ORM 数据库操作框架
              </li>{" "}
              <li>
                • <strong>MySQL 8.2+</strong> - 主数据库存储
              </li>{" "}
              <li>
                • <strong>Redis</strong> - 分布式缓存和状态管理
              </li>{" "}
              <li>
                • <strong>Uber Dig</strong> - 依赖注入容器
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              前端 & 运维
            </h3>{" "}
            <ul className="space-y-2 text-gray-600">
              {" "}
              <li>
                • <strong>Vue 3</strong> - 前端框架
              </li>{" "}
              <li>
                • <strong>TypeScript</strong> - 类型安全
              </li>{" "}
              <li>
                • <strong>Naive UI</strong> - UI 组件库
              </li>{" "}
              <li>
                • <strong>Docker</strong> - 容器化部署
              </li>{" "}
              <li>
                • <strong>Docker Compose</strong> - 容器编排
              </li>{" "}
              <li>
                • <strong>GitHub Actions</strong> - CI/CD 流水线
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Architecture Advantages */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          架构优势
        </h2>{" "}
        <div className="grid md:grid-cols-3 gap-6">
          {" "}
          <div>
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              微服务架构
            </h3>{" "}
            <ul className="text-gray-600 space-y-1 text-sm">
              {" "}
              <li>• 模块化设计</li> <li>• 依赖注入</li> <li>• 接口驱动</li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              分布式设计
            </h3>{" "}
            <ul className="text-gray-600 space-y-1 text-sm">
              {" "}
              <li>• Master/Slave 模式</li> <li>• 分布式锁</li>{" "}
              <li>• 缓存同步</li>{" "}
            </ul>{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              高可用性
            </h3>{" "}
            <ul className="text-gray-600 space-y-1 text-sm">
              {" "}
              <li>• 优雅降级</li> <li>• 故障恢复</li> <li>• 资源保护</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Use Cases */}{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          应用场景
        </h2>{" "}
        <div className="grid md:grid-cols-3 gap-6">
          {" "}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            {" "}
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              企业级 AI 服务
            </h3>{" "}
            <ul className="text-blue-800 space-y-1 text-sm">
              {" "}
              <li>• 大规模 API 调用</li> <li>• 成本控制优化</li>{" "}
              <li>• 服务稳定性保障</li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            {" "}
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              开发者工具
            </h3>{" "}
            <ul className="text-green-800 space-y-1 text-sm">
              {" "}
              <li>• API 统一接入</li> <li>• 调试和监控</li> <li>• 快速部署</li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            {" "}
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              多租户服务
            </h3>{" "}
            <ul className="text-purple-800 space-y-1 text-sm">
              {" "}
              <li>• 租户隔离</li> <li>• 配置定制</li> <li>• 使用统计</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Getting Started */}{" "}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white text-center">
        {" "}
        <h2 className="text-2xl font-bold mb-4">开始使用 GPT-Load</h2>{" "}
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          {" "}
          通过 Docker Compose 快速部署，几分钟内即可启动完整的 AI 接口代理服务{" "}
        </p>{" "}
        <Link
          href="/docs/installation"
          className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {" "}
          查看安装指南{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
