"use client";

import {
  Layers,
  GitMerge,
  Gauge,
  Shield,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  BarChart3,
  Lock,
  Network,
  Boxes,
  Wrench,
  Target,
  AlertCircle,
  Info,
} from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";

export default function AggregateGroupsContent() {
  const { t, tArray, tObjectArray } = useTranslation();

  // Use useSeo hook to handle title updates on language switch
  useSeo("/docs/architecture-design/aggregate-groups");

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t("aggregateGroups.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {t("aggregateGroups.subtitle")}
        </p>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Layers className="h-7 w-7 text-blue-600 dark:text-blue-400 mr-3" />
          {t("aggregateGroups.overview.title")}
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("aggregateGroups.overview.what.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("aggregateGroups.overview.what.description")}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {tObjectArray<{ title: string; description: string }>(
              "aggregateGroups.overview.what.features"
            ).map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {feature.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            {t("aggregateGroups.overview.useCases.title")}
          </h3>
          <div className="space-y-3">
            {tObjectArray<{ title: string; description: string }>(
              "aggregateGroups.overview.useCases.items"
            ).map((useCase, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {useCase.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Boxes className="h-7 w-7 text-purple-600 dark:text-purple-400 mr-3" />
          {t("aggregateGroups.concepts.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {tObjectArray<{ term: string; definition: string; icon?: string }>(
            "aggregateGroups.concepts.items"
          ).map((concept, index) => {
            const icons = [Network, GitMerge, Gauge, Info];
            const colors = ["blue", "green", "orange", "purple"];
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div
                    className={`w-10 h-10 bg-${color}-100 dark:bg-${color}-900/30 rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon
                      className={`h-5 w-5 text-${color}-600 dark:text-${color}-400`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pt-1">
                    {concept.term}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {concept.definition}
                </p>
              </div>
            );
          })}
        </div>

        {/* State Table */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("aggregateGroups.states.title")}
          </h3>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    {tArray("aggregateGroups.states.table.headers").map(
                      (header, index) => (
                        <th
                          key={index}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {tObjectArray<{
                    weight: string;
                    hasKeys: string;
                    status: string;
                    icon: string;
                    description: string;
                  }>("aggregateGroups.states.table.rows").map((row, index) => {
                    const statusIcons: Record<string, React.ReactElement> = {
                      valid: (
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />
                      ),
                      disabled: (
                        <XCircle className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
                      ),
                      invalid: (
                        <AlertTriangle className="h-5 w-5 text-red-500 dark:text-red-400" />
                      ),
                    };

                    return (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/30"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {row.weight}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {row.hasKeys}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {statusIcons[row.icon]}
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {row.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {row.description}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Settings className="h-7 w-7 text-cyan-600 dark:text-cyan-400 mr-3" />
          {t("aggregateGroups.design.title")}
        </h2>

        {/* Load Balancing Algorithm */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-6">
          <div className="bg-cyan-50 dark:bg-cyan-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <BarChart3 className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
              {t("aggregateGroups.design.algorithm.title")}
            </h3>
          </div>

          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("aggregateGroups.design.algorithm.description")}
            </p>

            <div className="space-y-3">
              {tArray("aggregateGroups.design.algorithm.features").map(
                (feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Selection Logic */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-blue-50 dark:bg-blue-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <GitMerge className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              {t("aggregateGroups.design.selection.title")}
            </h3>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {tObjectArray<{ step: string; description: string }>(
                "aggregateGroups.design.selection.steps"
              ).map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white">
                      {step.step}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                {t("aggregateGroups.design.selection.features.title")}
              </h4>
              <ul className="space-y-2">
                {tArray("aggregateGroups.design.selection.features.items").map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start"
                    >
                      <span className="mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Rules */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Shield className="h-7 w-7 text-orange-600 dark:text-orange-400 mr-3" />
          {t("aggregateGroups.rules.title")}
        </h2>

        <div className="space-y-6">
          {/* Sub-group Restrictions */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
              {t("aggregateGroups.rules.restrictions.title")}
            </h3>

            <div className="space-y-4">
              {tObjectArray<{
                rule: string;
                allowed: string;
                forbidden: string;
              }>("aggregateGroups.rules.restrictions.items").map(
                (item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-orange-500 dark:border-orange-400 pl-4"
                  >
                    <p className="text-gray-900 dark:text-white font-medium mb-2">
                      {item.rule}
                    </p>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {item.allowed}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <XCircle className="h-4 w-4 text-red-500 dark:text-red-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {item.forbidden}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Weight Configuration */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Gauge className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
              {t("aggregateGroups.rules.weights.title")}
            </h3>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {tObjectArray<{ label: string; value: string }>(
                  "aggregateGroups.rules.weights.specs"
                ).map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {spec.label}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <TrendingUp className="h-7 w-7 text-green-600 dark:text-green-400 mr-3" />
          {t("aggregateGroups.bestPractices.title")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {tObjectArray<{
            title: string;
            description: string;
            config: string;
            benefits: string[];
          }>("aggregateGroups.bestPractices.patterns").map((pattern, index) => {
            const icons = [Target, Shield, TrendingUp, Zap];
            const colors = ["blue", "green", "purple", "orange"];
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <div
                  className={`bg-${color}-50 dark:bg-${color}-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Icon
                      className={`h-5 w-5 text-${color}-600 dark:text-${color}-400 mr-2`}
                    />
                    {pattern.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {pattern.description}
                  </p>

                  <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mb-4">
                    <pre className="text-green-400 text-xs font-mono overflow-x-auto">
                      {pattern.config}
                    </pre>
                  </div>

                  <div>
                    <p className="text-gray-900 dark:text-white font-medium text-sm mb-2">
                      {t("aggregateGroups.bestPractices.benefitsLabel")}
                    </p>
                    <ul className="space-y-1">
                      {pattern.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="text-gray-600 dark:text-gray-400 text-xs flex items-start"
                        >
                          <span className="mr-2 text-green-500 dark:text-green-400">
                            ✓
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Wrench className="h-7 w-7 text-red-600 dark:text-red-400 mr-3" />
          {t("aggregateGroups.troubleshooting.title")}
        </h2>

        <div className="space-y-4">
          {tObjectArray<{ problem: string; cause: string; solution: string[] }>(
            "aggregateGroups.troubleshooting.issues"
          ).map((issue, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <div className="bg-red-50 dark:bg-red-900/20 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  {issue.problem}
                </h3>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {t("aggregateGroups.troubleshooting.causeLabel")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {issue.cause}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {t("aggregateGroups.troubleshooting.solutionLabel")}
                  </h4>
                  <ul className="space-y-2">
                    {issue.solution.map((step, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 dark:text-green-400 font-bold text-xs">
                            {i + 1}
                          </span>
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
