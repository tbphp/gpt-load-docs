"use client";

import {
  Zap,
  Cpu,
  Database,
  Workflow,
  TrendingUp,
  MemoryStick,
  Network,
  Timer,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function PerformancePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">性能详解</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          GPT-Load 采用<strong>&ldquo;代理路径优先&rdquo;</strong>
          的高性能设计哲学， 一切优化都为保障核心代理请求的极致性能和稳定性。
        </p>
      </div>

      {/* 核心性能指标 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          核心性能特性
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-blue-900 mb-2">零 I/O 操作</h3>
            <p className="text-blue-700 text-sm">代理请求全内存处理</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Network className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-green-900 mb-2">零拷贝流传输</h3>
            <p className="text-green-700 text-sm">直接流式数据转发</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-purple-900 mb-2">无锁并发</h3>
            <p className="text-purple-700 text-sm">原子操作高效处理</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <MemoryStick className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-orange-900 mb-2">极低资源占用</h3>
            <p className="text-orange-700 text-sm">单核 128MB 内存运行</p>
          </div>
        </div>
      </div>

      {/* 极致的代理请求性能 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Zap className="h-7 w-7 text-blue-600 mr-3" />
          极致的代理请求性能
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <p className="text-blue-900 font-medium">
            为了实现最低延迟和最高并发，代理请求的核心路径被设计为
            <strong>&ldquo;零 I/O 操作&rdquo;</strong>。
          </p>
        </div>

        <div className="space-y-6">
          {/* 全内存服务 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  全内存服务
                </h3>
                <p className="text-gray-600 text-sm">
                  所有路由和决策所需的数据，包括分组配置、密钥信息等，都在服务启动和配置变更时预加载到内存中。
                  代理请求期间无需任何数据库或磁盘访问。
                </p>
              </div>
            </div>
          </div>

          {/* 零拷贝流式传输 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Network className="h-5 w-5 text-green-600 mr-2" />
                零拷贝流式传输 (Zero-Copy Streaming)
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* 机制说明 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">实时透传机制</h4>
                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="text-gray-700 text-sm mb-2">
                      GPT-Load 采用<strong>实时透传模式</strong>，直接将上游服务的数据流 
                      (<code className="bg-gray-100 px-1 rounded">io.Reader</code>) 
                      对接到客户端响应 (<code className="bg-gray-100 px-1 rounded">io.Writer</code>)，
                      <strong>不进行任何中间缓冲、按行读取或内容解析</strong>。
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-900 mb-2">与传统流式处理的区别</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-red-700 font-medium mb-1">❌ 传统方式</p>
                        <p className="text-red-600">按行读取 → 解析处理 → 缓冲输出</p>
                      </div>
                      <div>
                        <p className="text-green-700 font-medium mb-1">✅ GPT-Load 方式</p>
                        <p className="text-green-600">上游数据流 → 直接透传 → 客户端</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 核心优势 */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">核心优势</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">避免数据包截断</span>
                          <p className="text-gray-600 text-xs mt-1">
                            不会因按行读取而破坏原始数据包结构
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">极致兼容性</span>
                          <p className="text-gray-600 text-xs mt-1">
                            天然支持 SSE、JSON 流、二进制等所有数据格式
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">无限响应能力</span>
                          <p className="text-gray-600 text-xs mt-1">
                            理论上可处理任意大小的上游响应数据
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">零延迟传输</span>
                          <p className="text-gray-600 text-xs mt-1">
                            数据到达即转发，无缓冲等待时间
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">极低内存占用</span>
                          <p className="text-gray-600 text-xs mt-1">
                            不缓存数据，内存使用量与响应大小无关
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <div>
                          <span className="text-gray-900 font-medium text-sm">原生性能体验</span>
                          <p className="text-gray-600 text-xs mt-1">
                            响应速度无限贴近上游服务原生表现
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 异步日志 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Timer className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  异步日志
                </h3>
                <p className="text-gray-600 text-sm">
                  请求日志的记录采用<strong>延迟异步写入</strong>
                  策略，完全与请求-响应生命周期解耦，
                  确保日志操作不会对实时代理性能产生任何干扰。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 动态资源与并发管理 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Workflow className="h-7 w-7 text-green-600 mr-3" />
          动态资源与并发管理
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* HTTP 客户端复用 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                HTTP 客户端高效复用
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600 text-sm">
                    为每个分组维护独立的、可复用底层连接的 HTTP 客户端实例
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-600 text-sm">
                    当分组配置（如超时）变更时，系统会
                    <strong>实时动态地</strong>
                    生成新客户端实例，确保配置即时生效
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 原子操作与无锁设计 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                原子操作与无锁设计
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm">
                在密钥轮询计数等高频并发操作中，使用{" "}
                <code className="bg-gray-100 px-1 rounded">sync/atomic</code>
                包进行无锁化编程，避免了互斥锁（Mutex）带来的性能开销。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 异步任务与可扩展性 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-7 w-7 text-orange-600 mr-3" />
          异步任务与可扩展性
        </h2>

        <div className="space-y-6">
          {/* 海量密钥异步管理 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                海量密钥的异步管理
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">机制</h4>
                  <p className="text-gray-600 text-sm">
                    添加和验证密钥等操作均作为<strong>异步后台任务</strong>
                    执行。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">优势</h4>
                  <p className="text-gray-600 text-sm">
                    使得管理操作不会阻塞服务，理论上允许系统管理百万级别的海量密钥。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 集群支持与配置同步 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-cyan-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Globe className="h-5 w-5 text-cyan-600 mr-2" />
                集群支持与配置同步
              </h3>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">架构</h4>
                  <p className="text-gray-600 text-sm">
                    支持多节点主从（Master-Slave）架构进行水平扩展。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">同步</h4>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      主节点的配置变更通过 Redis Pub/Sub 推送通知
                    </p>
                    <p className="text-gray-600 text-sm">
                      从节点通过内置的<strong>配置同步器</strong>
                      监听并拉取更新，实现集群间配置的最终一致性
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 轻量级与资源效率 */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <MemoryStick className="h-7 w-7 text-purple-600 mr-3" />
          轻量级与资源效率
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* 极低资源占用 */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">
              极低的资源占用
            </h3>
            <p className="text-purple-800 text-sm mb-4">
              得益于 Go
              语言高效的内存管理以及上述性能优化（如零拷贝、连接池复用），
              GPT-Load
              作为一个编译后的二进制文件运行，无额外运行时依赖，实现了极低的资源占用。
            </p>
            <div className="bg-purple-200 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  单核 CPU
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-1">
                <MemoryStick className="h-4 w-4 text-purple-700" />
                <span className="text-purple-900 text-sm font-medium">
                  128MB 内存
                </span>
              </div>
            </div>
          </div>

          {/* 适用性广 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              适用性广
            </h3>
            <p className="text-green-800 text-sm mb-4">
              在典型的单机部署场景下，仅需较低的 CPU
              和内存即可保障服务的流畅运行。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm">
                  胜任大型企业的高并发场景
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-green-800 text-sm">
                  适合资源有限的个人开发者环境
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
