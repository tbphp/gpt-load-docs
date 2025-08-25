import {
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Timer,
  RefreshCw,
  Shield,
  Activity,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Viewport, Metadata } from "next";

interface PollingMechanismImplementation {
  title: string;
  description: string;
}

interface RetryProcessStep {
  title: string;
  description: string;
}

interface BlacklistMechanism {
  title: string;
  trigger: string;
  action: string[];
}

interface RecoveryProcessStep {
  title: string;
  description: string;
}

interface RecoveryMechanism {
  title: string;
  trigger: string;
  process: RecoveryProcessStep[];
}

interface Advantage {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const viewport: Viewport = {
  themeColor: "light",
};

import { generatePageMetadata } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata("key-management");
}

export default async function KeyManagementPage() {
  const t = await getTranslations("docs.keyManagementPage");

  const pollingImplementations: PollingMechanismImplementation[] = t.raw(
    "polling.implementation.items",
  );
  const retryProcessSteps: RetryProcessStep[] = t.raw("retry.process.steps");
  const blacklist: BlacklistMechanism = t.raw("blacklist");
  const recovery: RecoveryMechanism = t.raw("recovery");
  const advantages: Advantage[] = t.raw("advantages.items");

  const iconMap: { [key: string]: React.ElementType } = {
    polling: RotateCcw,
    retry: RefreshCw,
    blacklist: Shield,
    recovery: Activity,
    loadBalancing: RotateCcw,
    autoRecovery: RefreshCw,
    faultIsolation: Shield,
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("header.title")}
        </h1>
        <p
          className="text-xl text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t("header.description") }}
        />
      </div>

      {/* Polling Mechanism */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <RotateCcw className="h-7 w-7 text-blue-600 mr-3" />
          {t("polling.title")}
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("polling.goal.title")}
              </h3>
              <p className="text-gray-600">{t("polling.goal.description")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t("polling.implementation.title")}
              </h3>
              <div className="space-y-3">
                {pollingImplementations.map((item, index) => (
                  <div className="flex items-start space-x-3" key={index}>
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 font-medium">{item.title}</p>
                      <p
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retry and Fault Handling */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <RefreshCw className="h-7 w-7 text-orange-600 mr-3" />
          {t("retry.title")}
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-orange-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              {t("retry.trigger.title")}
            </h3>
            <p className="text-gray-600 mt-1">{t("retry.trigger.description")}</p>
          </div>
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              {t("retry.process.title")}
            </h4>
            <div className="space-y-4">
              {retryProcessSteps.map((step, index) => (
                <div className="flex items-start space-x-4" key={index}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${["bg-red-100 text-red-600", "bg-blue-100 text-blue-600", "bg-green-100 text-green-600", "bg-gray-100 text-gray-600"][index]}`}
                  >
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{step.title}</h5>
                    <p
                      className="text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Blacklisting and Recovery */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 flex items-center">
          <Shield className="h-7 w-7 text-purple-600 mr-3" />
          {t("blacklistRecovery.title")}
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Blacklist Mechanism */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-red-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                {blacklist.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("blacklist.trigger.title")}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {t.rich("blacklist.trigger.description", {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("blacklist.action.title")}
                  </h4>
                  <div className="space-y-2">
                    {t.raw("blacklist.action.items").map((item: string, index: number) => (
                      <div className="flex items-center space-x-2" key={index}>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span
                          className="text-gray-600 text-sm"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recovery Mechanism */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Activity className="h-5 w-5 text-green-600 mr-2" />
                {recovery.title}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("recovery.trigger.title")}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <Timer className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600 text-sm">
                      {t.rich("recovery.trigger.description", {
                        strong: (chunks) => <strong>{chunks}</strong>,
                      })}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t("recovery.process.title")}
                  </h4>
                  <div className="space-y-3">
                    {recovery.process.steps.map((step, index) => (
                      <div className="flex items-start space-x-3" key={index}>
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${["bg-blue-100 text-blue-600", "bg-green-100 text-green-600", "bg-gray-100 text-gray-600"][index]}`}
                        >
                          <span className="font-bold text-xs">{index + 1}</span>
                        </div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">
                            {step.title}
                          </p>
                          <div
                            className="text-xs text-gray-600 space-y-1"
                            dangerouslySetInnerHTML={{ __html: step.description }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          {t("advantages.title")}
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => {
              const Icon =
                iconMap[
                  (advantage.title as string)
                    .toLowerCase()
                    .replace(/\s+/g, "")
                ] || Shield;
              return (
                <div className="text-center" key={index}>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${["bg-blue-100 text-blue-600", "bg-green-100 text-green-600", "bg-purple-100 text-purple-600"][index]}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
