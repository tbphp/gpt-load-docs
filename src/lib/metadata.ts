import { SupportedLanguage } from '../i18n/utils';

interface MetaConfig {
  title: string;
  description: string;
  keywords: string;
}

export const META_CONFIGS: Record<SupportedLanguage, MetaConfig> = {
  zh: {
    title: "GPT-Load - 高性能 AI 接口透明代理服务",
    description: "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式。提供密钥轮询、多分组管理、负载均衡等功能，为您的 AI 应用提供稳定可靠的代理服务。",
    keywords: "GPT, OpenAI, API, 透明代理, 负载均衡, 密钥轮询, Go, 高性能, AI代理, Gemini, Claude"
  },
  en: {
    title: "GPT-Load - High-Performance AI API Transparent Proxy",
    description: "Enterprise-grade AI API proxy service that fully preserves native API formats from various AI providers. Features key rotation, multi-group management, load balancing, providing stable and reliable proxy services for your AI applications.",
    keywords: "GPT, OpenAI, API, transparent proxy, load balancing, key rotation, Go, high performance, AI proxy, Gemini, Claude"
  },
  ja: {
    title: "GPT-Load - 高性能AI APIトランスペアレントプロキシ",
    description: "エンタープライズグレードのAI APIプロキシサービス。各AIプロバイダーのネイティブAPIフォーマットを完全に保持。キーローテーション、マルチグループ管理、ロードバランシング機能を提供し、AIアプリケーションに安定したプロキシサービスを提供します。",
    keywords: "GPT, OpenAI, API, トランスペアレントプロキシ, ロードバランシング, キーローテーション, Go, 高性能, AIプロキシ, Gemini, Claude"
  }
};

export const OG_CONFIGS: Record<SupportedLanguage, MetaConfig> = {
  zh: {
    title: "GPT-Load - 高性能 AI 接口透明代理服务",
    description: "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式，提供密钥轮询和负载均衡功能",
    keywords: ""
  },
  en: {
    title: "GPT-Load - High-Performance AI API Transparent Proxy",
    description: "Enterprise-grade AI API proxy service that fully preserves native API formats, featuring key rotation and load balancing",
    keywords: ""
  },
  ja: {
    title: "GPT-Load - 高性能AI APIトランスペアレントプロキシ",
    description: "エンタープライズグレードのAI APIプロキシサービス。ネイティブAPIフォーマットを完全保持、キーローテーションとロードバランシング機能付き",
    keywords: ""
  }
};