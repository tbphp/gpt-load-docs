import { SupportedLanguage } from '../i18n/utils';

interface MetaConfig {
  title: string;
  description: string;
  keywords: string;
}

export const META_CONFIGS: Record<SupportedLanguage, MetaConfig> = {
  zh: {
    title: "GPT-Load",
    description: "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式。提供密钥轮询、多分组管理、负载均衡等功能，为您的 AI 应用提供稳定可靠的代理服务。",
    keywords: "GPT, OpenAI, API, 透明代理, 负载均衡, 密钥轮询, Go, 高性能, AI代理, Gemini, Claude"
  },
  en: {
    title: "GPT-Load",
    description: "Enterprise-grade AI API proxy service that fully preserves native API formats from various AI providers. Features key rotation, multi-group management, load balancing, providing stable and reliable proxy services for your AI applications.",
    keywords: "GPT, OpenAI, API, transparent proxy, load balancing, key rotation, Go, high performance, AI proxy, Gemini, Claude"
  },
  ja: {
    title: "GPT-Load",
    description: "エンタープライズグレードのAI APIプロキシサービス。各AIプロバイダーのネイティブAPIフォーマットを完全に保持。キーローテーション、マルチグループ管理、ロードバランシング機能を提供し、AIアプリケーションに安定したプロキシサービスを提供します。",
    keywords: "GPT, OpenAI, API, トランスペアレントプロキシ, ロードバランシング, キーローテーション, Go, 高性能, AIプロキシ, Gemini, Claude"
  }
};

export const OG_CONFIGS: Record<SupportedLanguage, MetaConfig> = {
  zh: {
    title: "GPT-Load",
    description: "企业级 AI 接口透明代理服务，完全保留各 AI 服务商的原生 API 格式，提供密钥轮询和负载均衡功能",
    keywords: ""
  },
  en: {
    title: "GPT-Load",
    description: "Enterprise-grade AI API proxy service that fully preserves native API formats, featuring key rotation and load balancing",
    keywords: ""
  },
  ja: {
    title: "GPT-Load",
    description: "エンタープライズグレードのAI APIプロキシサービス。ネイティブAPIフォーマットを完全保持、キーローテーションとロードバランシング機能付き",
    keywords: ""
  }
};

// 页面级SEO配置接口
export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
  type?: 'website' | 'article' | 'product';
}

// 页面级SEO配置映射架构
export const PAGE_SEO_CONFIGS: Record<string, Record<SupportedLanguage, PageSeoConfig>> = {
  '/': {
    zh: { ...META_CONFIGS.zh, type: 'website' },
    en: { ...META_CONFIGS.en, type: 'website' },
    ja: { ...META_CONFIGS.ja, type: 'website' }
  },
  '/docs': {
    zh: {
      title: "快速开始 - GPT-Load",
      description: "5分钟快速部署GPT-Load，Docker一键启动，包含完整的数据库和缓存服务。支持多种AI服务的透明代理。",
      keywords: "GPT-Load部署, Docker部署, 快速开始, AI代理安装, 透明代理部署",
      type: 'article'
    },
    en: {
      title: "Quick Start - GPT-Load",
      description: "Deploy GPT-Load in 5 minutes with Docker one-click startup, including complete database and cache services. Transparent proxy for multiple AI services.",
      keywords: "GPT-Load deployment, Docker deployment, quick start, AI proxy installation, transparent proxy setup",
      type: 'article'
    },
    ja: {
      title: "クイックスタート - GPT-Load",
      description: "Dockerワンクリック起動で5分でGPT-Loadをデプロイ。完全なデータベースとキャッシュサービスを含む。複数のAIサービスの透明プロキシ。",
      keywords: "GPT-Loadデプロイメント, Dockerデプロイメント, クイックスタート, AIプロキシインストール, 透明プロキシセットアップ",
      type: 'article'
    }
  },
  '/docs/introduction': {
    zh: {
      title: "项目简介 - GPT-Load",
      description: "深入了解GPT-Load的核心概念、技术架构、支持的AI服务和企业级功能特性。基于Go语言的高性能设计。",
      keywords: "GPT-Load架构, AI代理技术, 透明代理原理, 微服务架构, Go语言, 高并发",
      type: 'article'
    },
    en: {
      title: "Project Introduction - GPT-Load",
      description: "Deep dive into GPT-Load's core concepts, technical architecture, supported AI services, and enterprise-grade features. High-performance design based on Go.",
      keywords: "GPT-Load architecture, AI proxy technology, transparent proxy principles, microservice architecture, Go language, high concurrency",
      type: 'article'
    },
    ja: {
      title: "プロジェクト紹介 - GPT-Load",
      description: "GPT-Loadのコアコンセプト、技術アーキテクチャ、サポートされているAIサービス、エンタープライズ機能の詳細。Goベースの高性能設計。",
      keywords: "GPT-Loadアーキテクチャ, AIプロキシ技術, 透明プロキシ原理, マイクロサービスアーキテクチャ, Go言語, 高同時実行",
      type: 'article'
    }
  },
  '/docs/architecture-design': {
    zh: {
      title: "系统架构 - GPT-Load",
      description: "深入了解GPT-Load的系统架构设计，包括核心服务层、管理服务层、数据存储层的详细组件和高性能透明代理的设计原则。",
      keywords: "系统架构, GPT-Load架构, 透明代理架构, 高性能代理, Go微服务, 分布式系统, 负载均衡",
      type: 'article'
    },
    en: {
      title: "System Architecture - GPT-Load",
      description: "In-depth understanding of GPT-Load's system architecture design, including detailed components of core service layer, management service layer, data storage layer and design principles of high-performance transparent proxy.",
      keywords: "system architecture, GPT-Load architecture, transparent proxy architecture, high-performance proxy, Go microservices, distributed systems, load balancing",
      type: 'article'
    },
    ja: {
      title: "システムアーキテクチャ - GPT-Load",
      description: "GPT-Loadのシステムアーキテクチャ設計の詳細理解。コアサービス層、管理サービス層、データストレージ層の詳細なコンポーネントと高性能透明プロキシの設計原則。",
      keywords: "システムアーキテクチャ, GPT-Loadアーキテクチャ, 透明プロキシアーキテクチャ, 高性能プロキシ, Goマイクロサービス, 分散システム, ロードバランシング",
      type: 'article'
    }
  }
  // 架构预留：后续可继续添加其他页面的SEO配置
};