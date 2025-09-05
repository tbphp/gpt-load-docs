"use client";

import { Sparkles, Globe, Code, Settings } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function GeminiOpenaiPageContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  useSeo("/docs/gemini-openai");

  const configurationSteps = tObjectArray<{title: string; items: string[]}>("geminiOpenai.configuration.steps");
  const cherryStudioSteps = tArray("geminiOpenai.examples.cherryStudio.steps");
  const cherryStudioParams = tObjectArray<{label: string; value: string; note?: string}>("geminiOpenai.examples.cherryStudio.params");
  const notes = tArray("geminiOpenai.notes.items");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          <Sparkles className="inline h-8 w-8 mr-3 text-blue-600 dark:text-blue-400" />
          {t("geminiOpenai.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {t("geminiOpenai.subtitle")}
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          {t("geminiOpenai.notice")}
          <a href="https://ai.google.dev/gemini-api/docs/openai">
            https://ai.google.dev/gemini-api/docs/openai
          </a>
        </p>
      </div>

      {/* Configuration in GPT-Load */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          <Settings className="inline h-6 w-6 mr-2 text-green-600 dark:text-green-400" />
          {t("geminiOpenai.configuration.title")}
        </h2>

        <div className="space-y-8">
          {configurationSteps.map((step, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              {index === 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("geminiOpenai.configuration.groupConfig.title")}</h4>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("geminiOpenai.configuration.importantNotes.title")}</h4>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                      {tArray("geminiOpenai.configuration.importantNotes.items").map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {index === 1 && (
                <>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                      <strong>{t("geminiOpenai.configuration.proxyEndpoint.format")}</strong>
                      {t("geminiOpenai.configuration.proxyEndpoint.description")}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {t("geminiOpenai.configuration.proxyEndpoint.fullPath")}
                      </h4>
                      <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 rounded-lg p-4">
                        <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                          <code>
                            {t("geminiOpenai.configuration.proxyEndpoint.endpoint")}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Client Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          <Code className="inline h-6 w-6 mr-2 text-purple-600 dark:text-purple-400 dark:text-purple-400" />
          {t("geminiOpenai.examples.title")}
        </h2>

        <div className="space-y-8">
          {/* Cherry Studio Configuration */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("geminiOpenai.examples.cherryStudio.title")}
            </h3>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mb-4">
              <p className="text-green-800 dark:text-green-300 text-sm">
                <strong>{t("geminiOpenai.examples.cherryStudio.recommended")}</strong>
                {t("geminiOpenai.examples.cherryStudio.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("geminiOpenai.examples.cherryStudio.stepsTitle")}</h4>
                <ol className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  {cherryStudioSteps.map((step, index) => (
                    <li key={index}>{index + 1}. {step}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">{t("geminiOpenai.examples.cherryStudio.paramsTitle")}</h4>
                <div className="space-y-2 text-sm">
                  {cherryStudioParams.map((param, index) => (
                    <div key={index}>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {param.label}
                      </span>
                      <code className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1 rounded ml-1">
                        {param.value}
                      </code>
                      {param.note && (
                        <p className="text-gray-700 dark:text-gray-300">{param.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* cURL Example */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {t("geminiOpenai.examples.curl.title")}
            </h3>
            <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 rounded-lg p-4">
              <pre className="text-green-400 text-sm whitespace-pre-wrap break-words">
                <code>{t("geminiOpenai.examples.curl.code")}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Globe className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">{t("geminiOpenai.notes.title")}</h3>
              <ul className="text-yellow-800 dark:text-yellow-300 space-y-1 text-sm">
                {notes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}