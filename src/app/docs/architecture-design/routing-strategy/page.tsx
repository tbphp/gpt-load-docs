import { getTranslations } from 'next-intl/server';
import { Route, ArrowRight, Globe, Settings } from 'lucide-react';
import type { Viewport } from 'next';
import React from 'react';

import { generatePageMetadata } from '@/i18n/metadata';

export async function generateMetadata() {
  return await generatePageMetadata("routing-strategy");
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface ConfigDetail {
  title: string;
  gptLoadConfig: {
    title: string;
    upstreamUrl: string;
    testPath: string;
  };
  clientConfig: {
    title: string;
    apiUrl: string;
    note?: string;
  };
}

interface BestPracticeItem {
  title: string;
  icon: string;
  recommendations: string[];
}

interface RoutingStrategyContent {
  header: {
    title: string;
    description: string;
  };
  coreConcept: {
    title: string;
    principle: {
      title: string;
      description: string;
      rule: string;
      rulePrefix: string;
      ruleSuffix: string;
    };
  };
  processingLogic: {
    title: string;
    serverAddress: string;
    upstreamUrl: string;
    groupName: string;
    clientRequest: string;
    actualRequest: string;
  };
  configExamples: {
    title: string;
    description: string;
    configs: ConfigDetail[];
  };
  bestPractices: {
    title: string;
    practices: BestPracticeItem[];
  };
  summary: {
    title: string;
    description: string;
    corePrinciple: string;
  };
}

const iconComponents: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Settings,
  Route,
  Globe,
};

export default async function RoutingStrategyPage() {
  const t = await getTranslations('performance.routingStrategy');
  const content: RoutingStrategyContent = t.raw('content');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          {content.header.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {content.header.description}
        </p>
      </div>

      {/* Core Concept */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {content.coreConcept.title}
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            {content.coreConcept.principle.title}
          </h3>
          <p className="text-blue-800 dark:text-blue-400 mb-4">
            {content.coreConcept.principle.description}
          </p>
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-4">
            <p className="text-blue-900 dark:text-blue-300 font-mono text-sm">
              {content.coreConcept.principle.rule}
              <span className="font-bold">{content.coreConcept.principle.rulePrefix}</span>
              {'    '}
              {t('replaceWith')}
              {'    '}
              <span className="font-bold">{content.coreConcept.principle.ruleSuffix}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Processing Logic */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {content.processingLogic.title}
        </h2>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="grid gap-4">
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t('serverAddress')}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                http://localhost:3001
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t('upstreamUrlLabel')}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                https://api.test.com
              </code>
            </div>
            <div className="flex items-center text-sm">
              <div className="w-24 text-gray-600 dark:text-gray-400 font-medium">
                {t('groupNameLabel')}:
              </div>
              <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">test</code>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {content.processingLogic.clientRequest}
                </div>
                <code className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded border dark:border-gray-600">
                  http://localhost:3001/proxy/test/v1/chat/completions
                </code>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 mx-4" />
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {content.processingLogic.actualRequest}
                </div>
                <code className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded border dark:border-gray-600">
                  https://api.test.com/v1/chat/completions
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration Examples */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {content.configExamples.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{content.configExamples.description}</p>

        <div className="space-y-8">
          {content.configExamples.configs.map((config, index) => {
            const Icon = iconComponents['Settings'] || Settings;
            const colorClasses = ['text-blue-600', 'text-green-600', 'text-purple-600'];
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
                    <Icon className={`h-5 w-5 ${colorClasses[index % colorClasses.length]} mr-2`} />
                    {config.title}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        {config.gptLoadConfig.title}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="w-20 text-gray-600 dark:text-gray-400">
                            {t('upstreamUrlLabel')}:
                          </span>
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {config.gptLoadConfig.upstreamUrl}
                          </code>
                        </div>
                        <div className="flex">
                          <span className="w-20 text-gray-600 dark:text-gray-400">
                            {t('testPathLabel')}:
                          </span>
                          <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                            {config.gptLoadConfig.testPath}
                          </code>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        {config.clientConfig.title}
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600 dark:text-gray-400">
                            {t('clientApiUrlLabel')}:
                          </span>
                          <code className="block bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-1">
                            {config.clientConfig.apiUrl}
                          </code>
                          {config.clientConfig.note && (
                            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
                              {config.clientConfig.note}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Best Practices */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {content.bestPractices.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.bestPractices.practices.map((practice, index) => {
            const Icon = iconComponents[practice.icon as keyof typeof iconComponents] || Route;
            const bgColor =
              index === 0
                ? 'bg-green-50 dark:bg-green-900/20'
                : 'bg-blue-50 dark:bg-blue-900/20';
            const borderColor =
              index === 0
                ? 'border-green-200 dark:border-green-700'
                : 'border-blue-200 dark:border-blue-700';
            const titleColor =
              index === 0
                ? 'text-green-900 dark:text-green-300'
                : 'text-blue-900 dark:text-blue-300';
            const textColor =
              index === 0
                ? 'text-green-800 dark:text-green-400'
                : 'text-blue-800 dark:text-blue-400';

            return (
              <div key={index} className={`${bgColor} border ${borderColor} rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold ${titleColor} mb-3 flex items-center`}>
                  <Icon className="h-5 w-5 mr-2" />
                  {practice.title}
                </h3>
                <ul className={`${textColor} space-y-2 text-sm`}>
                  {practice.recommendations.map((rec, i) => (
                    <li key={i}>• {rec}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">{content.summary.title}</h2>
        <p className="text-blue-100 mb-4">{content.summary.description}</p>
        <div className="text-blue-100 text-sm">
          {content.summary.corePrinciple}
        </div>
      </div>
    </div>
  );
}
