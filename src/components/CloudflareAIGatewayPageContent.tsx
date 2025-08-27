"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Cloud,
  Info,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "./ImageViewer";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function CloudflareAIGatewayPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/configuration/cloudflare-aigateway");

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
            <Cloud className="h-5 w-5 text-orange-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("cloudflareAIGateway.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t("cloudflareAIGateway.subtitle")}
        </p>
      </div>

      {/* 重要提示 */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-900 mb-1">{t("cloudflareAIGateway.importantNotice.title")}</h3>
            <p className="text-amber-800 text-sm">
              {t("cloudflareAIGateway.importantNotice.description")}
            </p>
          </div>
        </div>
      </div>

      {/* 第一步：注册登录 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">1</span>
          </div>
          {t("cloudflareAIGateway.step1.title")}
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-gray-900 font-medium mb-2">
                {t("cloudflareAIGateway.step1.dashboard.title")}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {t("cloudflareAIGateway.step1.dashboard.description")}
              </p>
              <Link
                href="https://dash.cloudflare.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://dash.cloudflare.com
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 第二步：进入 AI Gateway */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">2</span>
          </div>
          {t("cloudflareAIGateway.step2.title")}
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧文字内容 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("cloudflareAIGateway.step2.navigation.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step2.navigation.selectMenu.title")}</p>
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t("cloudflareAIGateway.step2.navigation.selectMenu.description") }} />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step2.navigation.accessPage.title")}</p>
                    <p className="text-gray-600 text-sm">
                      {t("cloudflareAIGateway.step2.navigation.accessPage.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
              <ImageViewer
                src="/int_cf_001.png"
                alt={t("cloudflareAIGateway.step2.screenshot.alt")}
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 第三步：创建网关 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          {t("cloudflareAIGateway.step3.title")}
        </h2>

        <div className="space-y-6">
          {/* 创建按钮说明 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium mb-2">{t("cloudflareAIGateway.step3.createButton.title")}</p>
                <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t("cloudflareAIGateway.step3.createButton.description") }} />
              </div>
            </div>
          </div>

          {/* 创建表单配置 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("cloudflareAIGateway.step3.configuration.title")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step3.configuration.gatewayName.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">gpt-load</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1" dangerouslySetInnerHTML={{ __html: t("cloudflareAIGateway.step3.configuration.gatewayName.note") }} />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step3.configuration.defaultSettings.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cloudflareAIGateway.step3.configuration.defaultSettings.description")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-amber-900 font-medium text-sm">
                          {t("cloudflareAIGateway.step3.configuration.important.title")}
                        </p>
                        <ul className="text-amber-800 text-xs mt-1 space-y-1">
                          {tArray("cloudflareAIGateway.step3.configuration.important.items").map((item: string, index: number) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cf_002.png"
                  alt={t("cloudflareAIGateway.step3.screenshot.alt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 第四步：获取 API 地址 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-cyan-600 font-bold text-sm">4</span>
          </div>
          {t("cloudflareAIGateway.step4.title")}
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧文字内容 */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("cloudflareAIGateway.step4.endpoint.title")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step4.endpoint.clickAPI.title")}</p>
                    <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: t("cloudflareAIGateway.step4.endpoint.clickAPI.description") }} />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step4.endpoint.selectChannel.title")}</p>
                    <p className="text-gray-600 text-sm">
                      {t("cloudflareAIGateway.step4.endpoint.selectChannel.description")}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-800 text-sm">
                      {t("cloudflareAIGateway.step4.endpoint.note")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
              <ImageViewer
                src="/int_cf_003.png"
                alt={t("cloudflareAIGateway.step4.screenshot.alt")}
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 第五步：配置到 GPT-Load */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">5</span>
          </div>
          {t("cloudflareAIGateway.step5.title")}
        </h2>

        <div className="space-y-6">
          {/* 配置说明 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("cloudflareAIGateway.step5.configuration.title")}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">{t("cloudflareAIGateway.step5.configuration.copyAddress.title")}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {t("cloudflareAIGateway.step5.configuration.copyAddress.description")}
                  </p>

                  <div className="bg-gray-100 rounded-md p-3">
                    <p className="text-sm text-gray-700 mb-1 font-medium">
                      {t("cloudflareAIGateway.step5.configuration.example.title")}
                    </p>
                    <code className="text-sm text-gray-800 break-all">
                      https://gateway.ai.cloudflare.com/v1/b7fbxxxxxfdba/gpt-load/google-ai-studio
                    </code>
                  </div>

                  <p className="text-gray-600 text-xs mt-2" dangerouslySetInnerHTML={{ __html: t("cloudflareAIGateway.step5.configuration.example.explanation") }} />
                </div>
              </div>
            </div>
          </div>

          {/* 配置截图 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cloudflareAIGateway.step5.screenshot.title")}
              </h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50">
              <ImageViewer
                src="/int_cf_004.png"
                alt={t("cloudflareAIGateway.step5.screenshot.alt")}
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gemini 特别说明 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {t("cloudflareAIGateway.geminiNotice.title")}
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-900 mb-2">{t("cloudflareAIGateway.geminiNotice.reminder")}</h3>
              <div className="text-amber-800 text-sm space-y-2">
                <p>{t("cloudflareAIGateway.geminiNotice.description")}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {tArray("cloudflareAIGateway.geminiNotice.items").map((item: string, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
                <p className="mt-2 font-medium">
                  {t("cloudflareAIGateway.geminiNotice.recommendation")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 网络路由问题提醒 */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          {t("cloudflareAIGateway.networkNotice.title")}
        </h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-amber-900 mb-2">{t("cloudflareAIGateway.networkNotice.regionalBlock")}</h3>
              <div className="text-amber-800 text-sm space-y-2">
                <p>
                  {t("cloudflareAIGateway.networkNotice.description1")}
                </p>
                <p>
                  {t("cloudflareAIGateway.networkNotice.description2")} <code className="bg-amber-100 px-1 rounded">User location is not supported</code> {t("cloudflareAIGateway.networkNotice.description3")}
                </p>
                <p className="mt-2 font-medium">
                  {t("cloudflareAIGateway.networkNotice.solution")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 验证配置 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t("cloudflareAIGateway.verification.title")}</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">{t("cloudflareAIGateway.verification.testConnection")}</h3>
              <p className="text-green-800 text-sm">
                {t("cloudflareAIGateway.verification.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("cloudflareAIGateway.relatedResources.title")}</h3>
        <div className="space-y-2">
          <Link
            href="https://developers.cloudflare.com/ai-gateway/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cloudflareAIGateway.relatedResources.officialDocs")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("cloudflareAIGateway.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("cloudflareAIGateway.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}