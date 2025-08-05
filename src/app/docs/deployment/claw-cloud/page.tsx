import {
  Globe,
  Github,
  Zap,
  Settings,
  Play,
  CheckCircle,
  AlertTriangle,
  Info,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import ImageViewer from "../../../../components/ImageViewer";

export default function ClawCloudPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Claw Cloud 部署
        </h1>
        <p className="text-xl text-gray-600">
          使用 Claw Cloud 免费云端部署 GPT-Load，无需服务器，一键部署，快速体验
        </p>
      </div>

      {/* Important Warning */}
      <div className="mb-12">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg shadow-sm">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-3">
                ⚠️ 重要提醒：请务必备份您的数据！
              </h3>
              <div className="text-red-800 space-y-2">
                <p className="font-medium">
                  Claw Cloud
                  是实验性免费服务，服务稳定性无法保证，存在以下风险：
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>服务可能出现不稳定或临时不可用的情况</li>
                  <li>数据可能因服务故障而丢失</li>
                  <li>免费服务没有 SLA 保障</li>
                  <li>实例可能会被重启或重新分配</li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded border">
                  <p className="font-semibold text-red-900">🔄 强烈建议：</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>定期导出和备份您的配置数据</li>
                    <li>保存好所有重要的 API 密钥和配置信息</li>
                    <li>对于生产环境，请考虑使用稳定的付费云服务</li>
                    <li>将 Claw Cloud 仅用于测试和学习目的</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">服务概览</h2>

        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Claw Cloud 免费部署
            </h3>
            <p className="text-gray-700 text-lg">
              轻量级云端部署方案，使用 SQLite 数据库和内存存储，完全免费的 5
              美元月度额度
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-cyan-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Zap className="h-8 w-8 text-cyan-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">免费额度</h3>
            <p className="text-gray-600 text-sm">每月 5 美元免费使用额度</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">全球部署</h3>
            <p className="text-gray-600 text-sm">
              支持多个地区部署，优化访问速度
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center">
              <Github className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">简单认证</h3>
            <p className="text-gray-600 text-sm">
              仅需 GitHub 账号即可开始使用
            </p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">前提条件</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900">账号要求</h4>
              <p className="text-yellow-800 text-sm">
                需要拥有半年以上的 GitHub 账号才能使用 Claw Cloud 服务
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">服务特性</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">免费额度</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 每月 5 美元免费使用额度</li>
                <li>• 适合个人用户和小规模测试</li>
                <li>• 无需信用卡验证</li>
                <li>• 超额后可选择付费继续使用</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">技术规格</h4>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• 使用 SQLite 数据库</li>
                <li>• 内存存储（无 Redis）</li>
                <li>• 自动备份和恢复</li>
                <li>• 内置监控和日志</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Steps */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">部署步骤</h2>

        <div className="space-y-8">
          {/* Step 1: Register and Login */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  注册并登录
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  使用 GitHub 登录 Claw Cloud
                </h4>
                <p className="text-gray-700 mb-2">
                  访问 Claw Cloud 官网并点击 <code>Get started for free</code>
                  ，使用 GitHub 账号进行登录。
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <a
                    href="https://run.claw.cloud"
                    className="text-blue-600 hover:text-blue-800 underline flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>https://run.claw.cloud</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  选择部署区域
                </h4>
                <p className="text-gray-700 mb-2">
                  登录后在左上角选择合适的部署区域：
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    <div className="mb-2">推荐区域：</div>
                    <ul className="space-y-1">
                      <li>
                        • <strong>Singapore</strong> - 新加坡
                      </li>
                      <li>
                        • <strong>Japan</strong> - 日本
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-20 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <ImageViewer
                    src="/claw_1.png"
                    alt="Claw Cloud 区域选择界面"
                    width={250}
                    height={400}
                  />
                </div>
                <p className="text-gray-600 text-sm text-center mt-2">
                  Claw Cloud 区域选择界面
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Create Application */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  创建应用
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  启动应用创建
                </h4>
                <p className="text-gray-700 mb-2">
                  点击中间的 &quot;App Launchpad&quot;，然后点击右上角的
                  &quot;Create App&quot; 开始创建应用
                </p>
                <div className="bg-gray-20 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-center">
                    <ImageViewer
                      src="/claw_2.png"
                      alt="Claw Cloud 创建应用界面"
                      width={800}
                      height={400}
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center mt-2">
                    App Launchpad - 创建应用
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Configure Application */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  配置应用
                </h3>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  填写应用配置表单
                </h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Basic（基础信息）
                        </h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">
                              Application Name:
                            </span>
                            <code className="bg-gray-100 px-1 rounded ml-2">
                              gpt-load
                            </code>
                          </div>
                          <div>
                            <span className="font-medium">Image:</span>
                            <span className="ml-2">选择 Public</span>
                          </div>
                          <div>
                            <span className="font-medium">Image Name:</span>
                            <code className="bg-gray-100 px-1 rounded ml-2">
                              ghcr.io/tbphp/gpt-load:latest
                            </code>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">
                          Usage（资源配置）
                        </h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Usage:</span>
                            <span className="ml-2">Fixed</span>
                          </div>
                          <div>
                            <span className="font-medium">Replicas:</span>
                            <span className="ml-2">1</span>
                          </div>
                          <div>
                            <span className="font-medium">CPU:</span>
                            <span className="ml-2">1 (可根据需要调整)</span>
                          </div>
                          <div>
                            <span className="font-medium">Memory:</span>
                            <span className="ml-2">512M (可根据需要调整)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-blue-900">
                          资源配置建议
                        </h5>
                        <p className="text-blue-800 text-sm">
                          按照 5 美元额度计算，建议配置为 CPU: 1, Memory: 512M。
                          如果个人使用且网络流量较小，可以降低配置以节省费用。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Network（网络配置）
                </h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Container Port:</span>
                      <code className="bg-gray-100 px-1 rounded ml-2">
                        3001
                      </code>
                    </div>
                    <div>
                      <span className="font-medium">Public Access:</span>
                      <span className="ml-2">✅ 开启</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Environment Variables（环境变量）
                </h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 mb-2">
                    点击 &quot;Environment Variables&quot; 添加以下配置：
                  </p>
                  <div className="space-y-2">
                    <div className="bg-gray-100 p-2 rounded text-sm">
                      <code>
                        <span className="font-medium">AUTH_KEY</span>=
                        <span className="text-green-600">
                          sk-your-custom-key
                        </span>
                      </code>
                    </div>
                    <p className="text-gray-600 text-sm">
                      ⚠️ 请将{" "}
                      <code className="bg-gray-100 px-1 rounded">
                        sk-your-custom-key
                      </code>
                      替换为您自己的密码，不要使用默认值或公开分享
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">
                  Local Storage（存储配置）
                </h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Local Storage:</span>
                      <span className="ml-2">
                        点击 &quot;Add&quot; 添加存储
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Capacity:</span>
                      <span className="ml-2">1G</span>
                    </div>
                    <div>
                      <span className="font-medium">Mount Path:</span>
                      <code className="bg-gray-100 px-1 rounded ml-2">
                        /app/data
                      </code>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    配置完成后点击 &quot;Confirm&quot; 保存存储配置
                  </p>
                </div>
              </div>

              <div className="bg-gray-20 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <ImageViewer
                    src="/claw_3.png"
                    alt="Claw Cloud 应用配置界面"
                    width={600}
                    height={400}
                  />
                </div>
                <p className="text-gray-600 text-sm text-center mt-2">
                  应用配置表单
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Deploy Application */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <span className="text-green-600 font-semibold">4</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  部署应用
                </h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">启动部署</h4>
                <p className="text-gray-700 mb-2">
                  配置完成后，点击右上角的 &quot;Deploy Application&quot;
                  按钮开始部署应用
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900">部署完成</h5>
                      <p className="text-green-800 text-sm">
                        整个创建流程非常简单方便！部署完成后，需要等待公网地址生效，过程可能需要几分钟。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  等待服务启动
                </h4>
                <p className="text-gray-700 mb-2">
                  耐心等待 &quot;Public Address&quot; 的状态变为绿色的
                  &quot;Available&quot;，就可以访问您的 GPT-Load 服务了
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Access and Usage */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          访问和使用
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              首次访问
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  获取访问地址
                </h4>
                <p className="text-gray-700 mb-2">
                  部署完成后，在 Claw Cloud 控制台中可以看到您的应用公网地址
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    <div className="mb-2">访问地址类似：</div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      https://ax***fta.region.clawcloudrun.com
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  登录管理界面
                </h4>
                <p className="text-gray-700 mb-2">
                  访问您的应用地址，使用配置的 AUTH_KEY 登录管理界面
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-blue-900">安全提示</h5>
                      <p className="text-blue-800 text-sm">
                        请确保您的 AUTH_KEY 是安全的，不要在公共场所或文档中分享
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              API 使用
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  API 代理地址
                </h4>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="text-sm text-gray-700">
                    <div className="mb-2">API 代理端点：</div>
                    <code className="bg-gray-100 px-2 py-1 rounded">
                      https://ax***fta.region.clawcloudrun.com/proxy/{"{"}
                      group_name{"}"}
                    </code>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">使用示例</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <code className="text-sm">
                    curl -X POST
                    https://ax***fta.region.clawcloudrun.com/proxy/openai/v1/chat/completions
                    \<br />
                    &nbsp;&nbsp;-H &quot;Authorization: Bearer
                    your-auth-key&quot; \<br />
                    &nbsp;&nbsp;-H &quot;Content-Type: application/json&quot; \
                    <br />
                    &nbsp;&nbsp;-d &apos;
                    {`{"model": "gpt-4.1-mini", "messages": [{"role": "user", "content": "Hello"}]`}
                    &apos;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update and Maintenance */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          更新和维护
        </h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              版本更新
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">更新步骤</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded text-blue-600 font-semibold text-xs w-5 h-5 flex items-center justify-center mt-0.5">
                      1
                    </div>
                    <p className="text-gray-700">
                      进入 App Launchpad，选择您创建的应用
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded text-blue-600 font-semibold text-xs w-5 h-5 flex items-center justify-center mt-0.5">
                      2
                    </div>
                    <p className="text-gray-700">
                      点击右上角的 &quot;Update&quot; 按钮
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded text-blue-600 font-semibold text-xs w-5 h-5 flex items-center justify-center mt-0.5">
                      3
                    </div>
                    <p className="text-gray-700">
                      在更新页面，无需修改任何配置，直接点击 &quot;Update&quot;
                      按钮
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-blue-100 p-1 rounded text-blue-600 font-semibold text-xs w-5 h-5 flex items-center justify-center mt-0.5">
                      4
                    </div>
                    <p className="text-gray-700">等待更新和重启完成</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <RefreshCw className="h-4 w-4 text-green-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-green-900">自动更新</h5>
                    <p className="text-green-800 text-sm">
                      更新过程会自动拉取最新版本的镜像，无需手动配置
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              监控和日志
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">应用监控</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 在 Claw Cloud 控制台查看应用状态</li>
                  <li>• 监控资源使用情况和费用</li>
                  <li>• 查看应用运行日志</li>
                  <li>• 设置告警和通知</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">费用控制</h4>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• 定期查看月度用量和费用</li>
                  <li>• 根据实际使用情况调整资源配置</li>
                  <li>• 设置费用预算和告警</li>
                  <li>• 考虑在低峰期暂停服务</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">故障排除</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              常见问题
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">应用无法启动</h4>
                <p className="text-gray-600 text-sm mb-2">
                  可能的原因：镜像拉取失败、配置错误或资源不足
                </p>
                <p className="text-gray-600 text-sm">
                  解决方案：检查应用日志，确认镜像地址和配置正确
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">
                  无法访问公网地址
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  可能的原因：DNS 传播延迟或网络问题
                </p>
                <p className="text-gray-600 text-sm">
                  解决方案：等待几分钟后重试，检查网络连接
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">认证失败</h4>
                <p className="text-gray-600 text-sm mb-2">
                  可能的原因：AUTH_KEY 配置错误或未设置
                </p>
                <p className="text-gray-600 text-sm">
                  解决方案：检查环境变量配置，确保 AUTH_KEY 正确
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">下一步</h2>
        <p className="text-gray-700 mb-6">Claw Cloud 部署完成后，您可以：</p>
        <ul className="space-y-2 text-gray-700 mb-6">
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>通过 Web 管理界面配置 AI 服务</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>添加 API 密钥开始使用代理服务</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>监控使用情况和费用</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>根据需要升级到更高配置</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/docs/configuration"
            className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <Settings className="h-4 w-4 mr-2" />
            配置说明
          </a>
          <a
            href="/docs/management"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Globe className="h-4 w-4 mr-2" />
            管理使用说明
          </a>
        </div>
      </div>
    </div>
  );
}
