import {
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  GitBranch,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Viewport } from "next";

// Define TypeScript interfaces for structured data
interface OverviewItem {
  title: string;
  description: string;
}

interface ComponentSubSection {
  title: string;
  items: string[];
}

interface SystemComponent {
  title: string;
  subSections: ComponentSubSection[];
}

interface DataFlowStep {
  title: string;
  description: string;
}

interface DeploymentArchitecture {
  title: string;
  useCase: {
    title: string;
    items: string[];
  };
}

interface TechStackCategory {
  title: string;
  items: string[];
}

interface DesignPrinciple {
  title: string;
  description: string;
}

export const viewport: Viewport = {
  themeColor: "light",
};

import { Metadata } from "next";
import { generatePageMetadata } from "@/i18n/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata("architecture-design");
}

export default async function ArchitectureDesignPage() {
  const t = await getTranslations("docs.architectureDesign");

  const overviewItems: OverviewItem[] = t.raw("overview.items");
  const systemComponents: SystemComponent[] = t.raw("systemComponents.components");
  const dataFlowSteps: DataFlowStep[] = t.raw("dataFlow.steps");
  const deploymentArchitectures: DeploymentArchitecture[] = t.raw(
    "deploymentArchitectures.architectures",
  );
  const techStackCategories: TechStackCategory[] = t.raw("techStack.categories");
  const designPrinciples: DesignPrinciple[] = t.raw("designPrinciples.principles");

  const iconMap: { [key: string]: React.ElementType } = {
    apiGateway: Globe,
    loadBalancing: Server,
    dataStorage: Database,
    securityMonitoring: Shield,
    coreServices: Server,
    managementServices: Layers,
    dataStorageLayer: Database,
    highPerformance: GitBranch,
    highAvailability: Shield,
    scalability: Layers,
    transparentProxy: Globe,
  };

  const colorMap: { [key: string]: string } = {
    apiGateway: "bg-blue-100 text-blue-600",
    loadBalancing: "bg-green-100 text-green-600",
    dataStorage: "bg-purple-100 text-purple-600",
    securityMonitoring: "bg-red-100 text-red-600",
    coreServices: "text-blue-600",
    managementServices: "text-green-600",
    dataStorageLayer: "text-purple-600",
    highPerformance: "bg-blue-100 text-blue-600",
    highAvailability: "bg-green-100 text-green-600",
    scalability: "bg-purple-100 text-purple-600",
    transparentProxy: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {t("header.title")}
        </h1>
        <p className="text-xl text-gray-600">{t("header.subtitle")}</p>
      </div>

      {/* Architecture Overview */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("overview.title")}
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("overview.banner.title")}
            </h3>
            <p className="text-gray-700 text-lg">
              {t("overview.banner.description")}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {overviewItems.map((item, index) => {
            const Icon = iconMap[item.title.toLowerCase().replace(/\s+/g, "")];
            const colorClass =
              colorMap[item.title.toLowerCase().replace(/\s+/g, "")];
            return (
              <div className="text-center" key={index}>
                <div
                  className={`p-4 rounded-lg mb-3 mx-auto w-16 h-16 flex items-center justify-center ${colorClass}`}
                >
                  {Icon && <Icon className="h-8 w-8" />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* System Components */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("systemComponents.title")}
        </h2>
        <div className="space-y-6">
          {systemComponents.map((component, index) => {
            const Icon = iconMap[component.title.toLowerCase().replace(/\s+/g, "")];
            const colorClass = colorMap[component.title.toLowerCase().replace(/\s+/g, "")];
            return (
              <div className="border border-gray-200 rounded-lg p-6" key={index}>
                <div className="flex items-center space-x-3 mb-4">
                  {Icon && <Icon className={`h-6 w-6 ${colorClass}`} />}
                  <h3 className="text-xl font-semibold text-gray-900">
                    {component.title}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {component.subSections.map((sub, subIndex) => (
                    <div key={subIndex}>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {sub.title}
                      </h4>
                      <ul className="text-gray-600 space-y-1 text-sm">
                        {sub.items.map((item, itemIndex) => (
                          <li key={itemIndex}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Data Flow */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("dataFlow.title")}
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 text-gray-600">
          <div className="space-y-4">
            {dataFlowSteps.map((step, index) => (
              <div className="flex items-center space-x-4" key={index}>
                <div
                  className={`text-white px-3 py-1 rounded text-sm font-semibold ${["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500"][index]}`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <span className="font-semibold">{step.title}</span> →{" "}
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment Architectures */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("deploymentArchitectures.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {deploymentArchitectures.map((arch, index) => (
            <div className="border border-gray-200 rounded-lg p-6" key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {arch.title}
              </h3>
              <div
                className={`border rounded-lg p-4 mb-4 ${
                  index === 0
                    ? "bg-green-50 border-green-200"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <h4
                  className={`font-semibold mb-2 ${
                    index === 0 ? "text-green-900" : "text-blue-900"
                  }`}
                >
                  {arch.useCase.title}
                </h4>
                <ul
                  className={`space-y-1 text-sm ${
                    index === 0 ? "text-green-800" : "text-blue-800"
                  }`}
                >
                  {arch.useCase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("techStack.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {techStackCategories.map((category, index) => (
            <div
              className={`border rounded-lg p-6 ${["bg-blue-50 border-blue-200", "bg-green-50 border-green-200", "bg-purple-50 border-purple-200"][index]}`}
              key={index}
            >
              <h3
                className={`font-semibold mb-4 ${["text-blue-900", "text-green-900", "text-purple-900"][index]}`}
              >
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li className="flex items-center space-x-2" key={itemIndex}>
                    <div
                      className={`w-2 h-2 rounded-full ${["bg-blue-500", "bg-green-500", "bg-purple-500"][index]}`}
                    ></div>
                    <span
                      className={`text-sm ${["text-blue-800", "text-green-800", "text-purple-800"][index]}`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Design Principles */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          {t("designPrinciples.title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[0, 1].map((col) => (
            <div className="space-y-4" key={col}>
              {designPrinciples
                .slice(col * 2, col * 2 + 2)
                .map((principle, index) => {
                  const key = principle.title
                    .toLowerCase()
                    .replace(/\s+/g, "");
                  const Icon = iconMap[key];
                  const colorClass = colorMap[key];
                  return (
                    <div className="flex items-start space-x-3" key={index}>
                      <div className={`p-2 rounded-lg ${colorClass}`}>
                        {Icon && <Icon className="h-5 w-5" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
