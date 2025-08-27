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
  },
  '/docs/architecture-design/key-management': {
    zh: {
      title: "智能密钥管理 - GPT-Load",
      description: "详细了解GPT-Load智能密钥管理机制，包括轮询负载均衡、自动故障检测、密钥拉黑与恢复等核心功能。",
      keywords: "智能密钥管理, 负载均衡, 故障检测, 密钥轮询, 自动恢复, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Intelligent Key Management - GPT-Load",
      description: "Detailed understanding of GPT-Load intelligent key management mechanism, including polling load balancing, automatic failure detection, key blacklisting and recovery.",
      keywords: "intelligent key management, load balancing, failure detection, key rotation, automatic recovery, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "インテリジェントキー管理 - GPT-Load",
      description: "GPT-Loadのインテリジェントキー管理機構の詳細理解。ポーリング負荷分散、自動障害検出、キーブラックリストと復旧を含む。",
      keywords: "インテリジェントキー管理, 負荷分散, 障害検出, キーローテーション, 自動復旧, GPT-Load",
      type: 'article'
    }
  },
  '/docs/architecture-design/performance': {
    zh: {
      title: "性能详解 - GPT-Load",
      description: "深入了解GPT-Load的极致性能设计，包括零I/O操作、零拷贝流传输、无锁并发、异步任务等核心优化策略。",
      keywords: "性能优化, 零拷贝, 流式传输, 无锁并发, 异步处理, 高性能代理, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Performance Details - GPT-Load",
      description: "Deep dive into GPT-Load's ultimate performance design, including zero I/O operations, zero-copy streaming, lock-free concurrency, async tasks and core optimization strategies.",
      keywords: "performance optimization, zero-copy, streaming, lock-free concurrency, async processing, high-performance proxy, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "パフォーマンス詳解 - GPT-Load",
      description: "GPT-Loadの究極のパフォーマンス設計の詳細解説。ゼロI/O操作、ゼロコピーストリーミング、ロックフリー並行処理、非同期タスクなどのコア最適化戦略を含む。",
      keywords: "パフォーマンス最適化, ゼロコピー, ストリーミング, ロックフリー並行処理, 非同期処理, 高性能プロキシ, GPT-Load",
      type: 'article'
    }
  },
  '/docs/architecture-design/routing-strategy': {
    zh: {
      title: "路径设计策略 - GPT-Load",
      description: "深入理解GPT-Load的路径处理机制和配置方法，掌握透明代理的路径替换原理，学习最佳配置实践。",
      keywords: "路径设计, 透明代理, 路径配置, API路由, 上游地址, 代理配置, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Routing Strategy - GPT-Load",
      description: "In-depth understanding of GPT-Load's path processing mechanism and configuration methods, master transparent proxy path replacement principles, learn best configuration practices.",
      keywords: "routing strategy, transparent proxy, path configuration, API routing, upstream address, proxy configuration, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "ルーティング戦略 - GPT-Load",
      description: "GPT-Loadのパス処理メカニズムと設定方法の詳細理解。透明プロキシのパス置換原理をマスターし、最適な設定実践を学ぶ。",
      keywords: "ルーティング戦略, 透明プロキシ, パス設定, APIルーティング, アップストリームアドレス, プロキシ設定, GPT-Load",
      type: 'article'
    }
  },
  '/docs/configuration': {
    zh: {
      title: "配置说明 - GPT-Load",
      description: "掌握GPT-Load的三层配置系统架构，包括环境变量、系统设置、分组配置的优先级管理，以及热更新、配置验证等最佳实践。",
      keywords: "配置管理, 三层配置, 热更新, 系统设置, 环境变量, 分组配置, 优先级管理, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Configuration - GPT-Load",
      description: "Master GPT-Load's three-tier configuration system architecture, including priority management of environment variables, system settings, group configurations, and best practices for hot reloading and configuration validation.",
      keywords: "configuration management, three-tier configuration, hot reload, system settings, environment variables, group configuration, priority management, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "設定説明 - GPT-Load",
      description: "GPT-Loadの3層設定システムアーキテクチャをマスター。環境変数、システム設定、グループ設定の優先度管理、ホットリロード、設定検証のベストプラクティスを含む。",
      keywords: "設定管理, 3層設定, ホットリロード, システム設定, 環境変数, グループ設定, 優先度管理, GPT-Load",
      type: 'article'
    }
  },
  '/docs/configuration/cloudflare-aigateway': {
    zh: {
      title: "Cloudflare AI Gateway 上游配置 - GPT-Load",
      description: "详细指南教您配置Cloudflare AI Gateway作为GPT-Load的上游代理，通过全球网络优化AI服务请求性能和稳定性，包含完整配置步骤。",
      keywords: "Cloudflare AI Gateway, 上游代理, 代理配置, AI网关, 性能优化, 网络加速, GPT-Load配置, AI服务代理",
      type: 'article'
    },
    en: {
      title: "Cloudflare AI Gateway Upstream Configuration - GPT-Load",
      description: "Comprehensive guide to configure Cloudflare AI Gateway as GPT-Load's upstream proxy, optimizing AI service request performance and stability through global network with complete setup steps.",
      keywords: "Cloudflare AI Gateway, upstream proxy, proxy configuration, AI gateway, performance optimization, network acceleration, GPT-Load configuration, AI service proxy",
      type: 'article'
    },
    ja: {
      title: "Cloudflare AI Gateway アップストリーム設定 - GPT-Load",
      description: "GPT-LoadのアップストリームプロキシとしてCloudflare AI Gatewayを設定する包括的ガイド。グローバルネットワークを通じてAIサービスリクエストのパフォーマンスと安定性を最適化する完全な設定手順を含む。",
      keywords: "Cloudflare AI Gateway, アップストリームプロキシ, プロキシ設定, AIゲートウェイ, パフォーマンス最適化, ネットワーク高速化, GPT-Load設定, AIサービスプロキシ",
      type: 'article'
    }
  },
  '/docs/configuration/environment': {
    zh: {
      title: "环境配置 - GPT-Load",
      description: "详细了解GPT-Load的环境变量配置体系，包括服务器配置、数据库连接、安全认证、代理设置等核心环境参数的设置方法和最佳实践。",
      keywords: "环境配置, 环境变量, 服务器配置, 数据库配置, 安全配置, 代理配置, GPT-Load部署, 系统配置",
      type: 'article'
    },
    en: {
      title: "Environment Configuration - GPT-Load",
      description: "Detailed understanding of GPT-Load's environment variable configuration system, including setup methods and best practices for server configuration, database connections, security authentication, proxy settings and other core environment parameters.",
      keywords: "environment configuration, environment variables, server configuration, database configuration, security configuration, proxy configuration, GPT-Load deployment, system configuration",
      type: 'article'
    },
    ja: {
      title: "環境設定 - GPT-Load",
      description: "GPT-Loadの環境変数設定システムの詳細理解。サーバー設定、データベース接続、セキュリティ認証、プロキシ設定など、コア環境パラメータの設定方法とベストプラクティスを含む。",
      keywords: "環境設定, 環境変数, サーバー設定, データベース設定, セキュリティ設定, プロキシ設定, GPT-Loadデプロイメント, システム設定",
      type: 'article'
    }
  },
  '/docs/channels': {
    zh: {
      title: "渠道类型 - GPT-Load",
      description: "全面了解GPT-Load支持的AI服务渠道，包括OpenAI、Gemini、Claude等主流服务的接入配置、认证方式、SDK使用和迁移指南。",
      keywords: "AI渠道, OpenAI接入, Gemini配置, Claude API, 多服务接入, API代理, 统一接口, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Channel Types - GPT-Load",
      description: "Comprehensive understanding of AI service channels supported by GPT-Load, including access configuration, authentication methods, SDK usage and migration guides for mainstream services like OpenAI, Gemini, Claude.",
      keywords: "AI channels, OpenAI integration, Gemini configuration, Claude API, multi-service access, API proxy, unified interface, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "チャネルタイプ - GPT-Load",
      description: "GPT-LoadがサポートするAIサービスチャネルの包括的理解。OpenAI、Gemini、Claude等の主流サービスのアクセス設定、認証方式、SDK使用、移行ガイドを含む。",
      keywords: "AIチャネル, OpenAI統合, Gemini設定, Claude API, マルチサービスアクセス, APIプロキシ, 統一インターフェース, GPT-Load",
      type: 'article'
    }
  },
  '/docs/configuration/management': {
    zh: {
      title: "分组配置管理 - GPT-Load",
      description: "分组创建和配置的完整指南，包括基础配置、上游地址、高级设置等功能的详细配置说明和最佳实践。",
      keywords: "分组配置管理, 分组创建, 基础配置, 上游地址配置, 高级设置, 负载均衡, 参数覆盖, GPT-Load配置",
      type: 'article'
    },
    en: {
      title: "Group Configuration Management - GPT-Load",
      description: "Complete guide for group creation and configuration, including detailed configuration instructions and best practices for basic settings, upstream addresses, advanced settings and other features.",
      keywords: "group configuration management, group creation, basic configuration, upstream configuration, advanced settings, load balancing, parameter override, GPT-Load configuration",
      type: 'article'
    },
    ja: {
      title: "グループ設定管理 - GPT-Load",
      description: "グループ作成と設定の完全ガイド。基本設定、アップストリームアドレス、高級設定などの機能の詳細な設定方法とベストプラクティスを含みます。",
      keywords: "グループ設定管理, グループ作成, 基本設定, アップストリーム設定, 高級設定, ロードバランシング, パラメーターオーバーライド, GPT-Load設定",
      type: 'article'
    }
  },
  '/docs/configuration/project': {
    zh: {
      title: "项目配置 - GPT-Load",
      description: "GPT-Load项目配置系统的完整指南，包括系统设置、分组配置的详细参数说明、配置优先级管理和最佳实践。",
      keywords: "项目配置, 系统设置, 分组配置, 配置管理, 参数配置, 热重载, 动态配置, GPT-Load配置",
      type: 'article'
    },
    en: {
      title: "Project Configuration - GPT-Load",
      description: "Complete guide to GPT-Load project configuration system, including detailed parameter descriptions for system settings, group configurations, configuration priority management and best practices.",
      keywords: "project configuration, system settings, group configuration, configuration management, parameter settings, hot reload, dynamic configuration, GPT-Load configuration",
      type: 'article'
    },
    ja: {
      title: "プロジェクト設定 - GPT-Load",
      description: "GPT-Loadプロジェクト設定システムの完全ガイド。システム設定、グループ設定の詳細なパラメーター説明、設定優先度管理とベストプラクティスを含みます。",
      keywords: "プロジェクト設定, システム設定, グループ設定, 設定管理, パラメーター設定, ホットリロード, 動的設定, GPT-Load設定",
      type: 'article'
    }
  }
  // 架构预留：后续可继续添加其他页面的SEO配置
};