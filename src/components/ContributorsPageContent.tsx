"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Github, Users, Heart, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function ContributorsPageContent() {
  const { t, tArray } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useSeo("/contributors");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-12 w-12 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            {t("contributors.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("contributors.description")}
        </p>
      </div>

      {/* 感谢致辞 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
        <div className="flex items-center mb-4">
          <Heart className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">
            {t("contributors.thanks.title")}
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t("contributors.thanks.message")}
        </p>
        <p className="text-gray-600 text-sm">{t("contributors.thanks.note")}</p>
      </div>

      {/* 贡献者展示 */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          {t("contributors.list.title")}
        </h2>

        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          {!imageError ? (
            <div className="relative">
              {!imageLoaded && (
                <div className="flex items-center justify-center h-32 bg-gray-100 rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-gray-600">
                    {t("contributors.list.loading")}
                  </span>
                </div>
              )}
              <Link
                href="https://github.com/tbphp/gpt-load/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://contrib.rocks/image?repo=tbphp/gpt-load"
                  alt={t("contributors.list.alt")}
                  width={800}
                  height={200}
                  className={`mx-auto rounded-lg transition-opacity duration-300 ${
                    imageLoaded
                      ? "opacity-100"
                      : "opacity-0 absolute top-0 left-0"
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  unoptimized
                />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-32 bg-gray-50 rounded-lg">
              <Github className="h-12 w-12 text-gray-400 mb-2" />
              <p className="text-gray-600 mb-2">
                {t("contributors.list.error")}
              </p>
              <Link
                href="https://github.com/tbphp/gpt-load/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
              >
                {t("contributors.list.viewOnGithub")}
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* 如何贡献 */}
      <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t("contributors.howTo.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {t("contributors.howTo.codeTitle")}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {tArray("contributors.howTo.codeItems").map(
                (item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-3">
              {t("contributors.howTo.otherTitle")}
            </h3>
            <ul className="space-y-2 text-gray-600">
              {tArray("contributors.howTo.otherItems").map(
                (item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* 行动号召 */}
      <div className="text-center">
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="https://github.com/tbphp/gpt-load"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <Github className="h-5 w-5 mr-2" />
            {t("contributors.cta.github")}
          </Link>

          <Link
            href="https://github.com/tbphp/gpt-load/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            <ExternalLink className="h-5 w-5 mr-2" />
            {t("contributors.cta.issues")}
          </Link>
        </div>
      </div>
    </div>
  );
}
