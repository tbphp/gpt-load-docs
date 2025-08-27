"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Settings,
  Plus,
} from "lucide-react";
import Link from "next/link";
import ImageViewer from "./ImageViewer";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function CherryStudioPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/integrations/cherry-studio");

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
            <span className="text-pink-600 font-bold text-sm">CS</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t("cherryStudio.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600">
          {t("cherryStudio.description")}
        </p>
      </div>

      {/* 前置条件 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 mb-1">{t("cherryStudio.prerequisites.title")}</h3>
            <p className="text-blue-800 text-sm">
              {t("cherryStudio.prerequisites.description")}
            </p>
          </div>
        </div>
      </div>

      {/* 通用添加说明 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <Plus className="h-4 w-4 text-gray-600" />
          </div>
          {t("cherryStudio.generalSteps.title")}
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Settings className="h-5 w-5 text-blue-600 mr-2" />
            {t("cherryStudio.generalSteps.serviceLocation.title")}
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">{t("cherryStudio.generalSteps.serviceLocation.step1.title")}</p>
                <p className="text-gray-600 text-sm">
                  {t("cherryStudio.generalSteps.serviceLocation.step1.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">{t("cherryStudio.generalSteps.serviceLocation.step2.title")}</p>
                <p className="text-gray-600 text-sm">
                  {t("cherryStudio.generalSteps.serviceLocation.step2.description")}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-900 font-medium">{t("cherryStudio.generalSteps.serviceLocation.step3.title")}</p>
                <p className="text-gray-600 text-sm">
                  {t("cherryStudio.generalSteps.serviceLocation.step3.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-amber-900 mb-1">{t("cherryStudio.generalSteps.reminder.title")}</h4>
              <p className="text-amber-800 text-sm">
                {t("cherryStudio.generalSteps.reminder.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OpenAI 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-green-600 font-bold text-sm">1</span>
          </div>
          {t("cherryStudio.openai.title")}
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.openai.create.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.openai.create.stepsTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.openai.create.step1.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.openai.create.step1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("cherryStudio.openai.create.step2.title")}
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">OpenAI</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.openai.create.step2.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_openai_create.png"
                  alt={t("cherryStudio.openai.create.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.openai.config.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.openai.config.parametersTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.openai.config.apiKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.openai.config.apiKey.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.openai.config.apiUrl.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/openai
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.openai.config.apiUrl.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.openai.config.models.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.openai.config.models.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_openai_config.png"
                  alt={t("cherryStudio.openai.config.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-600 font-bold text-sm">2</span>
          </div>
          {t("cherryStudio.gemini.title")}
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.gemini.create.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.gemini.create.stepsTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.gemini.create.step1.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.gemini.create.step1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("cherryStudio.gemini.create.step2.title")}
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">Gemini</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.gemini.create.step2.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_create.png"
                  alt={t("cherryStudio.gemini.create.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-cyan-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.gemini.config.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.gemini.config.parametersTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.gemini.config.apiKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.gemini.config.apiKey.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.gemini.config.apiUrl.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/gemini
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.gemini.config.apiUrl.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.gemini.config.models.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.gemini.config.models.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_config.png"
                  alt={t("cherryStudio.gemini.config.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gemini OpenAI 兼容格式 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-purple-600 font-bold text-sm">3</span>
          </div>
          {t("cherryStudio.geminiOpenai.title")}
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-purple-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.geminiOpenai.create.title")}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {t("cherryStudio.geminiOpenai.create.subtitle")}
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.geminiOpenai.create.stepsTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.geminiOpenai.create.step1.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.geminiOpenai.create.step1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("cherryStudio.geminiOpenai.create.step2.title")}
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">OpenAI</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.geminiOpenai.create.step2.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_openai_create.png"
                  alt={t("cherryStudio.geminiOpenai.create.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-orange-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.geminiOpenai.config.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.geminiOpenai.config.parametersTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.geminiOpenai.config.apiKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.geminiOpenai.config.apiKey.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.geminiOpenai.config.apiUrl.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800 break-all">
                          http://localhost:3001/proxy/gemini/v1beta/openai/
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.geminiOpenai.config.apiUrl.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.geminiOpenai.config.models.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.geminiOpenai.config.models.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_gemini_openai_config.png"
                  alt={t("cherryStudio.geminiOpenai.config.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 重要提示 */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-900 mb-1">{t("cherryStudio.geminiOpenai.warning.title")}</h4>
                <p className="text-red-800 text-sm">
                  {t("cherryStudio.geminiOpenai.warning.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anthropic 渠道配置 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-violet-600 font-bold text-sm">4</span>
          </div>
          {t("cherryStudio.anthropic.title")}
        </h2>

        <div className="space-y-6">
          {/* 创建服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-violet-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.anthropic.create.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.anthropic.create.stepsTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.anthropic.create.step1.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.anthropic.create.step1.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">
                        {t("cherryStudio.anthropic.create.step2.title")}
                      </p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">Anthropic</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.anthropic.create.step2.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_anthropic_create.png"
                  alt={t("cherryStudio.anthropic.create.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>

          {/* 配置服务 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-indigo-50 px-6 py-3 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t("cherryStudio.anthropic.config.title")}
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 左侧文字内容 */}
              <div className="p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-4">
                  {t("cherryStudio.anthropic.config.parametersTitle")}
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.anthropic.config.apiKey.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">sk-123456</code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.anthropic.config.apiKey.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.anthropic.config.apiUrl.title")}</p>
                      <div className="bg-gray-100 rounded-md p-3 mt-2">
                        <code className="text-sm text-gray-800">
                          http://localhost:3001/proxy/anthropic
                        </code>
                      </div>
                      <p className="text-gray-600 text-xs mt-1">
                        {t("cherryStudio.anthropic.config.apiUrl.description")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{t("cherryStudio.anthropic.config.models.title")}</p>
                      <p className="text-gray-600 text-sm">
                        {t("cherryStudio.anthropic.config.models.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧图片 */}
              <div className="bg-gray-50 flex items-center justify-center p-6 lg:border-l border-gray-200">
                <ImageViewer
                  src="/int_cs_anthropic_config.png"
                  alt={t("cherryStudio.anthropic.config.imageAlt")}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 重要说明 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t("cherryStudio.importantNotes.title")}</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">{t("cherryStudio.importantNotes.configurationNotes.title")}</h3>
              <div className="text-blue-800 text-sm space-y-1">
                {tArray("cherryStudio.importantNotes.configurationNotes.items").map((note: string, index: number) => (
                  <p key={index}>• {note}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相关链接 */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("cherryStudio.relatedResources.title")}</h3>
        <div className="space-y-2">
          <Link
            href="https://docs.cherry-ai.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cherryStudio.relatedResources.cherryStudioDocs")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/configuration"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("cherryStudio.relatedResources.gptLoadConfig")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
          <br />
          <Link
            href="/docs/channels"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            {t("cherryStudio.relatedResources.channelTypes")}
            <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}