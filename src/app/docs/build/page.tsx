import { FileText, Terminal, Code, CheckCircle } from "lucide-react";

export default function BuildPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">源码构建</h1>
        <p className="text-lg text-gray-600">
          从源代码构建 GPT-Load，适合开发和高级定制需求。
        </p>
      </div>

      {/* 前置要求 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
          前置要求
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <ul className="space-y-2 text-gray-700">
            <li>
              • <strong>Node.js</strong> 18.0 或更高版本
            </li>
            <li>
              • <strong>npm</strong> 或 <strong>yarn</strong> 包管理器
            </li>
            <li>
              • <strong>Git</strong> 版本控制系统
            </li>
          </ul>
        </div>
      </section>

      {/* 克隆仓库 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <Code className="h-6 w-6 text-blue-600 mr-2" />
          克隆仓库
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
            <code>{`git clone https://github.com/tbphp/gpt-load.git
cd gpt-load`}</code>
          </pre>
        </div>
      </section>

      {/* 安装依赖 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <Terminal className="h-6 w-6 text-purple-600 mr-2" />
          安装依赖
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
            <code>{`# 使用 npm
npm install

# 或使用 yarn
yarn install`}</code>
          </pre>
        </div>
      </section>

      {/* 构建项目 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
          <FileText className="h-6 w-6 text-orange-600 mr-2" />
          构建项目
        </h2>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
            <code>{`# 开发模式
npm run dev

# 生产构建
npm run build

# 启动生产服务
npm run start`}</code>
          </pre>
        </div>
      </section>

      {/* 环境配置 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">环境配置</h2>
        <p className="text-gray-600 mb-4">
          创建{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code>{" "}
          文件并配置必要的环境变量：
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <pre className="text-green-400 text-sm">
            <code>{`# 服务端口
PORT=3000

# OpenAI API Keys (多个用逗号分隔)
OPENAI_API_KEYS=sk-key1,sk-key2,sk-key3

# Azure OpenAI 配置 (可选)
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
AZURE_OPENAI_KEY=your-azure-key

# 其他配置
CORS_ORIGIN=*
LOG_LEVEL=info`}</code>
          </pre>
        </div>
      </section>

      {/* 验证安装 */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">验证安装</h2>
        <p className="text-gray-600 mb-4">启动服务后，访问以下端点验证安装：</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <ul className="space-y-2 text-gray-700">
            <li>
              •{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                http://localhost:3000/health
              </code>{" "}
              - 健康检查
            </li>
            <li>
              •{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                http://localhost:3000/stats
              </code>{" "}
              - 统计信息
            </li>
            <li>
              •{" "}
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                http://localhost:3000/v1/models
              </code>{" "}
              - 可用模型
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
