"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function SponsorPageContent() {
  const { t, tArray } = useTranslation();
  
  // 关键：添加 useSeo hook 用于语言切换时的SEO更新
  useSeo("/docs/sponsor");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t("sponsor.title")}</h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t("sponsor.subtitle")}
        </p>
      </div>

      {/* Payment QR Codes */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* WeChat Pay */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 border border-green-200 dark:border-green-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("sponsor.paymentMethods.wechat.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t("sponsor.paymentMethods.wechat.description")}</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <Image
                  src="/sk-wx.jpg"
                  alt={t("sponsor.paymentMethods.wechat.qrCodeAlt")}
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-green-600 rounded-lg p-3">
              <p className="text-sm text-white font-medium">{t("sponsor.paymentMethods.wechat.instruction")}</p>
            </div>
          </div>

          {/* Alipay */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("sponsor.paymentMethods.alipay.title")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t("sponsor.paymentMethods.alipay.description")}</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                <Image
                  src="/sk-zfb.jpg"
                  alt={t("sponsor.paymentMethods.alipay.qrCodeAlt")}
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg p-3">
              <p className="text-sm text-white font-medium">{t("sponsor.paymentMethods.alipay.instruction")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Online Sponsor Platforms */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-6 w-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{t("sponsor.onlinePlatform.title")}</h2>
        </div>

        <div className="flex justify-center">
          <a
            href="https://afdian.com/a/gpt-load"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="text-2xl">💖</span>
            <div className="text-left">
              <div className="font-bold">{t("sponsor.onlinePlatform.afdian.title")}</div>
            </div>
          </a>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
          {t("sponsor.onlinePlatform.afdian.description")}
        </p>
      </div>

      {/* Thank You Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{t("sponsor.thankYou.title")}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t("sponsor.thankYou.message")}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          {tArray("sponsor.thankYou.tags").map((tag: string, index: number) => (
            <span key={index} className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Alternative Support */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t("sponsor.alternativeSupport.title")}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/tbphp/gpt-load"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {t("sponsor.alternativeSupport.github.title")}
          </a>
          <a
            href="https://github.com/tbphp/gpt-load/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {t("sponsor.alternativeSupport.issues.title")}
          </a>
          <a
            href="https://github.com/tbphp/gpt-load/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            {t("sponsor.alternativeSupport.contribute.title")}
          </a>
        </div>
      </div>
    </div>
  );
}