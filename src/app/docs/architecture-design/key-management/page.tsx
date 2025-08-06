"use client";

import {
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Timer,
  RefreshCw,
  Shield,
  Activity,
} from "lucide-react";

export default function KeyManagementPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">智能密钥管理</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          GPT-Load
          采用智能密钥管理机制，通过轮询负载均衡、自动故障检测和恢复机制，
          确保服务的高可用性和稳定性。
        </p>
      </div>

      {/* 轮询机制 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <RotateCcw className="h-7 w-7 text-blue-600 mr-3" />
          轮询机制
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">目标</h3>
              <p className="text-gray-600">
                实现请求在分组内多个密钥间的公平负载均衡。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                实现方式
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">原子计数器</p>
                    <p className="text-gray-600 text-sm">
                      保证高并发下的轮询一致性和公平性
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">状态过滤</p>
                    <p className="text-gray-600 text-sm">
                      轮询范围仅限于分组内状态为&ldquo;有效&rdquo;的密钥
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 重试与故障处理 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <RefreshCw className="h-7 w-7 text-orange-600 mr-3" />
          重试与故障处理
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-orange-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              触发场景
            </h3>
            <p className="text-gray-600 mt-1">
              当请求失败时（HTTP Status ≥ 400 或网络错误）自动触发
            </p>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              处理流程
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">标记失败</h5>
                  <p className="text-gray-600 text-sm">
                    为当前失败的密钥<strong>失败计数加一</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">获取新密钥</h5>
                  <p className="text-gray-600 text-sm">
                    立即通过轮询机制获取分组内<strong>下一个</strong>可用密钥
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">无感重试</h5>
                  <p className="text-gray-600 text-sm">
                    使用新密钥重新发起请求，此过程对客户端无感
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">重试上限</h5>
                  <p className="text-gray-600 text-sm">
                    配置的<strong>最大重试次数</strong>
                    。若所有尝试均失败，则向客户端返回最终错误
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 密钥拉黑与恢复 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Shield className="h-7 w-7 text-purple-600 mr-3" />
          密钥拉黑与恢复
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 拉黑机制 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                拉黑机制
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">触发条件</h4>
                  <p className="text-gray-600 text-sm">
                    当密钥的累计<strong>失败计数</strong>达到
                    <strong>黑名单阈值</strong>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">执行动作</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">
                        密钥状态更新为&ldquo;无效&rdquo;
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">
                        从轮询队列中移除，不再接收新请求
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 恢复机制 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="h-5 w-5 text-green-600 mr-2" />
                恢复机制
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">触发时机</h4>
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">
                      后台定时任务，按<strong>密钥验证间隔</strong>周期执行
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">恢复流程</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 font-bold text-xs">
                          1
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">
                          健康检查
                        </p>
                        <p className="text-gray-600 text-xs">
                          使用被拉黑的密钥请求验证接口（如 models 列表）
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 font-bold text-xs">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">
                          验证成功
                        </p>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>• 密钥状态恢复为&ldquo;有效&rdquo;</p>
                          <p>
                            • <strong>失败计数重置为 0</strong>
                          </p>
                          <p>• 重新加入轮询队列</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-600 font-bold text-xs">
                          3
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium text-sm">
                          验证失败
                        </p>
                        <p className="text-gray-600 text-xs">
                          保持&ldquo;无效&rdquo;状态，等待下一个检查周期
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 优势总结 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">机制优势</h2>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">负载均衡</h3>
              <p className="text-gray-600 text-sm">
                原子计数器保证高并发下的公平轮询
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <RefreshCw className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">自动恢复</h3>
              <p className="text-gray-600 text-sm">
                定时健康检查，故障密钥自动恢复
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">故障隔离</h3>
              <p className="text-gray-600 text-sm">
                快速识别故障密钥，确保服务稳定性
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
