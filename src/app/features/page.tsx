import Features from "../../components/Features";
import Architecture from "../../components/Architecture";
import Performance from "../../components/Performance";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            功能特性
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            GPT-Load 提供全方位的 AI API 代理解决方案，
            从基础的负载均衡到高级的监控管理，助力您的 AI 应用稳定运行。
          </p>
        </div>
      </div>

      <Features />
      <Architecture />
      <Performance />
    </main>
  );
}
