"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";
import { useState } from "react";
import {
  ChevronRight,
  Shield,
  Key,
  Lock,
  AlertTriangle,
  CheckCircle,
  Copy,
  RefreshCw,
} from "lucide-react";

export default function SecurityContent() {
  const { t, tArray, tObjectArray } = useTranslation();
  useSeo("/docs/configuration/security");

  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(id);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const encryptionSteps = tObjectArray<{
    title: string;
    command?: string;
    description: string;
  }>("security.encryption.steps");

  const migrationMethods = tObjectArray<{
    title: string;
    description: string;
    commands: { enable: string; disable: string; change: string };
  }>("security.encryption.migrationMethods.items");

  const bestPractices = tObjectArray<{
    title: string;
    description: string;
    icon: string;
  }>("security.bestPractices.items");

  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      shield: <Shield className="w-5 h-5" />,
      key: <Key className="w-5 h-5" />,
      lock: <Lock className="w-5 h-5" />,
      refresh: <RefreshCw className="w-5 h-5" />,
    };
    return icons[iconName] || <CheckCircle className="w-5 h-5" />;
  };

  return (
    <article className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("security.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("security.description")}
        </p>
      </div>

      {/* Security Overview */}
      <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <div className="flex items-start space-x-3">
          <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
              {t("security.overview.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("security.overview.content")}
            </p>
          </div>
        </div>
      </div>

      {/* AUTH_KEY Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <Key className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
          {t("security.authKey.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {t("security.authKey.description")}
        </p>

        {/* Simple recommendation */}
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-800 dark:text-yellow-300">
              {t("security.authKey.recommendation")}
            </p>
          </div>
        </div>

        {/* Generate Secure Key */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
            {t("security.authKey.generate.title")}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {t("security.authKey.generate.description")}
          </p>
          <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 text-gray-100 p-3 rounded-md font-mono text-sm relative">
            <code>
              openssl rand -base64 32 | tr -d &quot;=+/&quot; | cut -c1-32
            </code>
            <button
              onClick={() =>
                copyToClipboard(
                  'openssl rand -base64 32 | tr -d "=+/" | cut -c1-32',
                  "auth-gen"
                )
              }
              className="absolute right-2 top-2 p-1 hover:bg-gray-700 rounded transition-colors"
            >
              {copiedCommand === "auth-gen" ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ENCRYPTION_KEY Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <Lock className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
          {t("security.encryption.title")}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          {t("security.encryption.description")}
        </p>

        {/* Benefits */}
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold mb-2 text-green-900 dark:text-green-200">
            {t("security.encryption.benefits.title")}
          </h3>
          <ul className="space-y-2">
            {tArray("security.encryption.benefits.items").map(
              (benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-green-800 dark:text-green-300">
                    {benefit}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Migration Steps */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
            {t("security.encryption.migration.title")}
          </h3>

          <div className="space-y-4">
            {encryptionSteps.map((step, index) => (
              <div
                key={index}
                className="border-l-2 border-blue-300 dark:border-blue-600 pl-4"
              >
                <div className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {step.description}
                    </p>
                    {step.command && (
                      <div className="bg-gray-900 dark:bg-black dark:border dark:border-gray-700 text-gray-100 p-2 rounded text-xs font-mono relative">
                        <code>{step.command}</code>
                        <button
                          onClick={() =>
                            copyToClipboard(step.command!, `step-${index}`)
                          }
                          className="absolute right-2 top-2 p-1 hover:bg-gray-700 rounded transition-colors"
                        >
                          {copiedCommand === `step-${index}` ? (
                            <CheckCircle className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Migration Methods */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
            {t("security.encryption.migrationMethods.title")}
          </h3>
          <div className="space-y-4">
            {migrationMethods.map((method, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <div className="bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-600 rounded p-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("security.encryption.migrationMethods.enable")}
                    </p>
                    <code className="text-xs font-mono text-gray-900 dark:text-gray-100">
                      {method.commands.enable}
                    </code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-600 rounded p-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("security.encryption.migrationMethods.disable")}
                    </p>
                    <code className="text-xs font-mono text-gray-900 dark:text-gray-100">
                      {method.commands.disable}
                    </code>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-600 rounded p-3">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      {t("security.encryption.migrationMethods.change")}
                    </p>
                    <code className="text-xs font-mono text-gray-900 dark:text-gray-100">
                      {method.commands.change}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Warning - ENCRYPTION_KEY Loss */}
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-300 dark:border-red-700">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-2 flex-shrink-0 mt-0.5 animate-pulse" />
            <div>
              <h4 className="font-bold text-red-900 dark:text-red-200 mb-2 text-lg">
                {t("security.encryption.criticalWarning.title")}
              </h4>
              <p className="text-red-800 dark:text-red-300 font-semibold mb-3">
                {t("security.encryption.criticalWarning.mainWarning")}
              </p>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                {tArray("security.encryption.criticalWarning.consequences").map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-600 dark:text-red-400 mr-2">
                        ⚠️
                      </span>
                      <span>{item}</span>
                    </li>
                  )
                )}
              </ul>
              <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded-md">
                <p className="text-sm font-semibold text-red-900 dark:text-red-200">
                  {t("security.encryption.criticalWarning.backupReminder")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start">
            <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-1">
                {t("security.encryption.warning.title")}
              </h4>
              <ul className="text-sm text-yellow-800 dark:text-yellow-300 space-y-1">
                {tArray("security.encryption.warning.items").map(
                  (item, index) => (
                    <li key={index}>• {item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
          <Shield className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
          {t("security.bestPractices.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {bestPractices.map((practice, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 flex-shrink-0">
                  {getIcon(practice.icon)}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {practice.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
          {t("security.resources.title")}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t("security.resources.description")}
        </p>
        <div className="flex flex-wrap gap-3">
          {tObjectArray<{ text: string; url: string }>(
            "security.resources.links"
          ).map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {link.text}
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
