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
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function KeyManagementPageContent() {
  const { t, tArray } = useTranslation();
  
  // 使用 useSeo hook 处理语言切换时的标题更新
  useSeo("/docs/architecture-design/key-management");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">{t('keyManagement.title')}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {t('keyManagement.subtitle')}
        </p>
      </div>

      {/* 轮询机制 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <RotateCcw className="h-7 w-7 text-blue-600 dark:text-blue-400 mr-3" />
          {t('keyManagement.polling.title')}
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('keyManagement.polling.objective.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t('keyManagement.polling.objective.description')}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('keyManagement.polling.implementation.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{t('keyManagement.polling.implementation.atomicCounter.title')}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('keyManagement.polling.implementation.atomicCounter.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">{t('keyManagement.polling.implementation.statusFilter.title')}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('keyManagement.polling.implementation.statusFilter.description')}
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
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <RefreshCw className="h-7 w-7 text-orange-600 dark:text-orange-400 mr-3" />
          {t('keyManagement.retry.title')}
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-orange-50 dark:bg-orange-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-2" />
              {t('keyManagement.retry.trigger.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {t('keyManagement.retry.trigger.description')}
            </p>
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              {t('keyManagement.retry.process.title')}
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 dark:text-red-400 font-bold text-sm">1</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">{t('keyManagement.retry.process.step1.title')}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t('keyManagement.retry.process.step1.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">2</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">{t('keyManagement.retry.process.step2.title')}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t('keyManagement.retry.process.step2.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">3</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">{t('keyManagement.retry.process.step3.title')}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t('keyManagement.retry.process.step3.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">4</span>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">{t('keyManagement.retry.process.step4.title')}</h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t('keyManagement.retry.process.step4.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 密钥拉黑与恢复 */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Shield className="h-7 w-7 text-purple-600 dark:text-purple-400 mr-3" />
          {t('keyManagement.blacklist.title')}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 拉黑机制 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                {t('keyManagement.blacklist.mechanism.title')}
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.blacklist.mechanism.trigger.title')}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t('keyManagement.blacklist.mechanism.trigger.description')}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.blacklist.mechanism.actions.title')}</h4>
                  <div className="space-y-2">
                    {tArray('keyManagement.blacklist.mechanism.actions.items').map((action, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 恢复机制 */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="bg-green-50 dark:bg-green-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <Activity className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                {t('keyManagement.recovery.title')}
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.recovery.timing.title')}</h4>
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {t('keyManagement.recovery.timing.description')}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.recovery.process.title')}</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">
                          1
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium text-sm">
                          {t('keyManagement.recovery.process.step1.title')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          {t('keyManagement.recovery.process.step1.description')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 dark:text-green-400 font-bold text-xs">
                          2
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium text-sm">
                          {t('keyManagement.recovery.process.step2.title')}
                        </p>
                        <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                          {tArray('keyManagement.recovery.process.step2.items').map((item, index) => (
                            <p key={index}>• {item}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gray-600 dark:text-gray-400 font-bold text-xs">
                          3
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium text-sm">
                          {t('keyManagement.recovery.process.step3.title')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          {t('keyManagement.recovery.process.step3.description')}
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
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">{t('keyManagement.advantages.title')}</h2>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <RotateCcw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.advantages.loadBalancing.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('keyManagement.advantages.loadBalancing.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <RefreshCw className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.advantages.autoRecovery.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('keyManagement.advantages.autoRecovery.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t('keyManagement.advantages.faultIsolation.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {t('keyManagement.advantages.faultIsolation.description')}  
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}