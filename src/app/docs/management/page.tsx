import { Users, Monitor, CheckCircle, AlertTriangle } from "lucide-react";

export default function ManagementPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          管理页面使用说明
        </h1>
        <p className="text-xl text-gray-600">
          完整的 Web 管理界面使用指南，包括分组管理、密钥配置、系统监控等功能
        </p>
      </div>

      {/* Access */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          访问管理界面
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            管理界面地址
          </h3>
          <div className="text-center">
            <code className="bg-white px-4 py-2 rounded-lg text-lg font-mono border text-gray-600">
              http://localhost:3001
            </code>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">默认配置</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 端口: 3001 (可在配置中修改)</li>
                <li>• 协议: HTTP (可通过nginx配置 HTTPS)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">安全建议</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 设置强密码保护</li>
                <li>• 定期备份配置数据</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Monitor className="inline h-6 w-6 mr-2 text-blue-600" />
          仪表盘
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              用量统计
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-green-600">
                    密钥统计
                  </div>
                </div>
                <p className="text-gray-600 text-sm">统计分组和秘钥信息</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-blue-600">
                    请求统计
                  </div>
                </div>
                <p className="text-gray-600 text-sm">总请求数、失败率</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-2">
                  <div className="text-2xl font-bold text-purple-600">
                    请求趋势
                  </div>
                </div>
                <p className="text-gray-600 text-sm">24小时请求折线图</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Group Management */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          <Users className="inline h-6 w-6 mr-2 text-green-600" />
          分组管理
        </h2>

        <div className="space-y-8">
          {/* Create Group */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              创建新分组
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">基础设置</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      分组名称
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      用于代理路径的唯一标识符，如
                      &ldquo;openai&rdquo;、&ldquo;gemini&rdquo;
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      服务类型
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      选择 OpenAI 格式或 Gemini 格式
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      分组描述
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      可选的分组说明信息
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">上游配置</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      上游地址
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      原始 API 服务地址，如 https://api.openai.com
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      负载均衡
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      支持轮询、加权轮询、最少连接等策略
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      健康检查
                    </label>
                    <div className="bg-gray-100 p-2 rounded text-sm text-gray-600">
                      定期检查上游服务可用性
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">创建步骤</h4>
                  <ol className="text-blue-800 text-sm space-y-1">
                    <li>1. 填写分组基础信息</li>
                    <li>2. 配置上游服务地址</li>
                    <li>3. 保存分组</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips and Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">使用技巧</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">最佳实践</h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• 定期备份分组配置和密钥数据</li>
                  <li>• 监控密钥使用情况，及时更新失效密钥</li>
                  <li>• 根据负载情况调整权重和限制配置</li>
                  <li>• 启用健康检查确保上游服务可用性</li>
                  <li>• 设置合理的告警阈值避免误报</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">注意事项</h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• 管理界面包含敏感信息，请勿暴露在公网</li>
                  <li>• 密钥信息仅在添加时显示，请妥善保存</li>
                  <li>• 修改核心配置后需要重启服务生效</li>
                  <li>• 删除分组前请确保没有正在使用的客户端</li>
                  <li>• 定期查看错误日志排查潜在问题</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
