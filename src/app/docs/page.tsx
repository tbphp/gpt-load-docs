import { getTranslations } from "next-intl/server";
import { Zap, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata("docs");
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

interface SecurityConfig {
  title: string;
  line1: string;
  code1: string;
  line2: string;
  code2: string;
}

interface InstallationStep {
  title: string;
  command: string;
  securityConfig?: SecurityConfig;
  visitAdmin?: string;
  loginNote?: string;
}

interface CommonCommand {
  title: string;
  command: string;
}

export default async function QuickStartPage() {
  const t = await getTranslations("docs.quickStartPage");
  const t_rich = await getTranslations({
    namespace: "docs.quickStartPage",
    locale: "zh",
  });

  const prerequisites: string[] = t.raw("prerequisites.items");
  const installationSteps: InstallationStep[] = t.raw(
    "installationSteps.steps"
  );
  const commonCommands: CommonCommand[] = t.raw("commonCommands.commands");
  const securityRules: string[] = t.raw(
    "installationSteps.securityWarning.rules"
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{t("title")}</h1>
        <p className="text-xl text-gray-600">{t("description")}</p>
      </div>

      {/* Quick Start Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("sectionTitle")}
        </h2>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <Zap className="h-5 w-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900">
                {t("lightweightDeployment.title")}
              </h4>
              <p className="text-green-800 text-sm">
                {t("lightweightDeployment.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Prerequisites */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("prerequisites.title")}
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              {prerequisites.map((item: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("installationSteps.title")}
          </h3>

          {/* Security Warning - High Priority */}
          <div className="bg-red-50 border-2 border-red-500 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <div className="text-red-600 text-2xl">🚨</div>
              <div>
                <h4 className="text-lg font-bold text-red-800 mb-2">
                  {t("installationSteps.securityWarning.title")}
                </h4>
                <div className="text-red-700 space-y-2">
                  <p className="font-semibold">
                    {t("installationSteps.securityWarning.body")}
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    {securityRules.map((rule: string, index: number) => (
                      <li key={index}>
                        •{" "}
                        {t_rich.rich(
                          `installationSteps.securityWarning.rules.${index}`,
                          {
                            code: (chunks) => (
                              <code className="bg-red-200 px-1 rounded">
                                {chunks}
                              </code>
                            ),
                          }
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-medium bg-red-100 p-2 rounded">
                    {t_rich.rich(
                      "installationSteps.securityWarning.recommendation",
                      {
                        code: (chunks) => <code>{chunks}</code>,
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {installationSteps.map((step: InstallationStep, index: number) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span className="text-blue-600 font-semibold">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h4>
                </div>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4">
                  <code
                    className="text-sm whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: step.command }}
                  ></code>
                </div>

                {step.securityConfig && (
                  <div className="bg-orange-50 border border-orange-300 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <div className="text-orange-600 text-lg">🔐</div>
                      <div>
                        <h5 className="font-semibold text-orange-800 mb-2">
                          {step.securityConfig.title}
                        </h5>
                        <p className="text-orange-700 text-sm mb-2">
                          {t_rich.rich(
                            `installationSteps.steps.${index}.securityConfig.line1`,
                            {
                              code: (chunks) => (
                                <code className="bg-orange-200 px-1 rounded">
                                  {chunks}
                                </code>
                              ),
                            }
                          )}
                        </p>
                        <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs mb-2">
                          <code>{step.securityConfig.code1}</code>
                        </div>
                        <p className="text-orange-700 text-sm mb-2">
                          {t_rich.rich(
                            `installationSteps.steps.${index}.securityConfig.line2`,
                            {
                              code: (chunks) => <code>{chunks}</code>,
                            }
                          )}
                        </p>
                        <div className="bg-gray-800 text-gray-100 p-2 rounded text-xs">
                          <code>{step.securityConfig.code2}</code>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 3 && ( // Validation step
                  <div className="space-y-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-700 mb-2">
                        {t(`installationSteps.steps.3.visitAdmin`)}
                      </p>
                      <a
                        href="http://localhost:3001"
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        http://localhost:3001
                      </a>
                    </div>
                    <div className="bg-green-50 border border-green-300 rounded-lg p-4">
                      <p className="text-green-800 text-sm">
                        {t_rich.rich(`installationSteps.steps.3.loginNote`, {
                          code: (chunks) => (
                            <code className="bg-green-200 px-1 rounded">
                              {chunks}
                            </code>
                          ),
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Common Commands */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {t("commonCommands.title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {commonCommands.map(
              (cmd: CommonCommand, index: number) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {cmd.title}
                  </h4>
                  <code className="text-sm text-gray-700">{cmd.command}</code>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <p className="text-gray-700">
          {t_rich.rich("nextSteps.text", {
            strong: (chunks) => <strong>{chunks}</strong>,
            a: (chunks) => (
              <a
                href="/docs/deployment"
                className="text-blue-600 hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
