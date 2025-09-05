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
  '/docs/deployment': {
    zh: {
      title: "部署指南 - GPT-Load",
      description: "GPT-Load提供多种部署方案，从轻量化的单机部署到企业级的集群部署。包含完整的Docker、源码、集群和云端部署指南。",
      keywords: "GPT-Load部署, Docker部署, 单机部署, 集群部署, 源码部署, Claw Cloud, 部署指南, 高可用部署",
      type: 'article'
    },
    en: {
      title: "Deployment Guide - GPT-Load",
      description: "GPT-Load offers multiple deployment options, from lightweight standalone deployment to enterprise-grade cluster deployment. Complete guides for Docker, source code, cluster and cloud deployment.",
      keywords: "GPT-Load deployment, Docker deployment, standalone deployment, cluster deployment, source deployment, Claw Cloud, deployment guide, high availability deployment",
      type: 'article'
    },
    ja: {
      title: "デプロイメントガイド - GPT-Load",
      description: "GPT-Loadは軽量なスタンドアロンデプロイメントからエンタープライズグレードのクラスターデプロイメントまで、複数のデプロイメントオプションを提供。Docker、ソースコード、クラスター、クラウドデプロイメントの完全ガイド。",
      keywords: "GPT-Loadデプロイメント, Dockerデプロイメント, スタンドアロンデプロイメント, クラスターデプロイメント, ソースデプロイメント, Claw Cloud, デプロイメントガイド, 高可用性デプロイメント",
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
  },
  '/docs/deployment/claw-cloud': {
    zh: {
      title: "Claw Cloud 部署 - GPT-Load",
      description: "使用 Claw Cloud 免费云端部署 GPT-Load 的完整指南。提供每月5美元免费额度，支持一键部署、全球区域选择、GitHub认证等便捷功能。",
      keywords: "Claw Cloud部署, 免费云端部署, GPT-Load云部署, GitHub部署, 一键部署, 云端代理, 免费额度",
      type: 'article'
    },
    en: {
      title: "Claw Cloud Deployment - GPT-Load",
      description: "Complete guide for deploying GPT-Load using Claw Cloud's free cloud service. Offers $5 monthly free quota with one-click deployment, global region selection, and GitHub authentication.",
      keywords: "Claw Cloud deployment, free cloud deployment, GPT-Load cloud deployment, GitHub deployment, one-click deployment, cloud proxy, free quota",
      type: 'article'
    },
    ja: {
      title: "Claw Cloud デプロイメント - GPT-Load",
      description: "Claw Cloudの無料クラウドサービスを使用してGPT-Loadをデプロイするための完全ガイド。月額5ドルの無料クォータ、ワンクリックデプロイメント、グローバル地域選択、GitHub認証を提供。",
      keywords: "Claw Cloudデプロイメント, 無料クラウドデプロイメント, GPT-Loadクラウドデプロイメント, GitHubデプロイメント, ワンクリックデプロイメント, クラウドプロキシ, 無料クォータ",
      type: 'article'
    }
  },
  '/docs/deployment/cluster': {
    zh: {
      title: "集群部署 - GPT-Load",
      description: "GPT-Load高可用集群部署完整指南。支持主从架构、水平扩展、分布式部署，包含基础设施要求、部署步骤、配置管理、监控运维等企业级部署方案。",
      keywords: "集群部署, 高可用部署, 主从架构, 分布式部署, Docker集群, MySQL集群, Redis集群, 负载均衡, 水平扩展, 企业级部署",
      type: 'article'
    },
    en: {
      title: "Cluster Deployment - GPT-Load",
      description: "Complete guide for GPT-Load high-availability cluster deployment. Supports master-slave architecture, horizontal scaling, distributed deployment with infrastructure requirements, deployment steps, configuration management, monitoring and maintenance.",
      keywords: "cluster deployment, high availability deployment, master-slave architecture, distributed deployment, Docker cluster, MySQL cluster, Redis cluster, load balancing, horizontal scaling, enterprise deployment",
      type: 'article'
    },
    ja: {
      title: "クラスターデプロイメント - GPT-Load",
      description: "GPT-Load高可用性クラスターデプロイメントの完全ガイド。マスタースレーブアーキテクチャ、水平スケーリング、分散デプロイメントをサポート。インフラ要件、デプロイメント手順、設定管理、監視運用を含む。",
      keywords: "クラスターデプロイメント, 高可用性デプロイメント, マスタースレーブアーキテクチャ, 分散デプロイメント, Dockerクラスター, MySQLクラスター, Redisクラスター, ロードバランシング, 水平スケーリング, エンタープライズデプロイメント",
      type: 'article'
    }
  },
  '/docs/deployment/source': {
    zh: {
      title: "源码部署 - GPT-Load",
      description: "GPT-Load源码部署完整指南。通过源码构建和部署，适合开发者进行功能定制和调试。包含环境要求、安装步骤、项目结构、故障排除等详细说明。",
      keywords: "源码部署, Go开发环境, 源码编译, 开发者部署, 功能定制, 项目结构, 故障排除, GPT-Load源码",
      type: 'article'
    },
    en: {
      title: "Source Code Deployment - GPT-Load",
      description: "Complete guide for GPT-Load source code deployment. Build and deploy from source code, suitable for developers to customize and debug features. Includes environment requirements, installation steps, project structure, troubleshooting.",
      keywords: "source code deployment, Go development environment, source compilation, developer deployment, feature customization, project structure, troubleshooting, GPT-Load source",
      type: 'article'
    },
    ja: {
      title: "ソースコードデプロイメント - GPT-Load",
      description: "GPT-Loadソースコードデプロイメントの完全ガイド。ソースコードからビルドとデプロイ、開発者による機能カスタマイズとデバッグに適している。環境要件、インストール手順、プロジェクト構造、トラブルシューティングを含む。",
      keywords: "ソースコードデプロイメント, Go開発環境, ソースコンパイル, 開発者デプロイメント, 機能カスタマイズ, プロジェクト構造, トラブルシューティング, GPT-Loadソース",
      type: 'article'
    }
  },
  '/docs/deployment/standalone': {
    zh: {
      title: "单机部署 - GPT-Load",
      description: "GPT-Load单机部署完整指南，支持轻量化SQLite快速启动和MySQL/PostgreSQL/Redis增强配置，适合个人用户和小团队快速上手。",
      keywords: "单机部署, Docker部署, SQLite部署, MySQL配置, PostgreSQL配置, Redis配置, 快速部署, GPT-Load",
      type: 'article'
    },
    en: {
      title: "Standalone Deployment - GPT-Load",
      description: "Complete guide for GPT-Load standalone deployment, supporting lightweight SQLite quick start and MySQL/PostgreSQL/Redis enhanced configuration, suitable for individual users and small teams.",
      keywords: "standalone deployment, Docker deployment, SQLite deployment, MySQL configuration, PostgreSQL configuration, Redis configuration, quick deployment, GPT-Load",
      type: 'article'
    },
    ja: {
      title: "スタンドアロンデプロイメント - GPT-Load",
      description: "GPT-Loadスタンドアロンデプロイメントの完全ガイド。軽量SQLiteクイックスタートとMySQL/PostgreSQL/Redis拡張設定をサポート。個人ユーザーと小チームに適しています。",
      keywords: "スタンドアロンデプロイメント, Dockerデプロイメント, SQLiteデプロイメント, MySQL設定, PostgreSQL設定, Redis設定, クイックデプロイメント, GPT-Load",
      type: 'article'
    }
  },
  '/docs/gemini-openai': {
    zh: {
      title: "Gemini 官方 OpenAI 兼容格式 - GPT-Load",
      description: "GPT-Load支持Google Gemini官方OpenAI兼容格式，使用标准OpenAI SDK访问Gemini模型。包含完整的配置步骤和Cherry Studio集成指南。",
      keywords: "Gemini OpenAI兼容, Gemini API, OpenAI SDK, Cherry Studio, GPT-Load配置, Gemini代理, AI模型兼容",
      type: 'article'
    },
    en: {
      title: "Gemini Official OpenAI Compatible Format - GPT-Load",
      description: "GPT-Load supports Google Gemini's official OpenAI compatible format, allowing access to Gemini models using standard OpenAI SDK. Complete configuration steps and Cherry Studio integration guide included.",
      keywords: "Gemini OpenAI compatible, Gemini API, OpenAI SDK, Cherry Studio, GPT-Load configuration, Gemini proxy, AI model compatibility",
      type: 'article'
    },
    ja: {
      title: "Gemini 公式 OpenAI 互換フォーマット - GPT-Load",
      description: "GPT-LoadはGoogle Geminiの公式OpenAI互換フォーマットをサポートし、標準のOpenAI SDKでGeminiモデルにアクセス可能。完全な設定手順とCherry Studio統合ガイドを含みます。",
      keywords: "Gemini OpenAI互換, Gemini API, OpenAI SDK, Cherry Studio, GPT-Load設定, Geminiプロキシ, AIモデル互換性",
      type: 'article'
    }
  },
  '/docs/integrations': {
    zh: {
      title: "接入指南 - GPT-Load",
      description: "GPT-Load支持接入各种AI应用和开发工具，包括Roo Code、New API、Cherry Studio、Claude Code Router等。通过统一代理接口实现负载均衡和故障转移。",
      keywords: "GPT-Load接入, AI应用集成, 开发工具, API工具, 桌面应用, Roo Code, New API, Cherry Studio, Claude Code Router",
      type: 'article'
    },
    en: {
      title: "Integration Guide - GPT-Load",
      description: "GPT-Load supports integration with various AI applications and development tools, including Roo Code, New API, Cherry Studio, Claude Code Router. Achieve load balancing and failover through unified proxy interface.",
      keywords: "GPT-Load integration, AI application integration, development tools, API tools, desktop applications, Roo Code, New API, Cherry Studio, Claude Code Router",
      type: 'article'
    },
    ja: {
      title: "統合ガイド - GPT-Load",
      description: "GPT-LoadはRoo Code、New API、Cherry Studio、Claude Code Routerなど、様々なAIアプリケーションと開発ツールとの統合をサポート。統一プロキシインターフェースを通じて負荷分散とフェイルオーバーを実現。",
      keywords: "GPT-Load統合, AIアプリケーション統合, 開発ツール, APIツール, デスクトップアプリケーション, Roo Code, New API, Cherry Studio, Claude Code Router",
      type: 'article'
    }
  },
  '/docs/integrations/cherry-studio': {
    zh: {
      title: "Cherry Studio 接入指南 - GPT-Load",
      description: "详细指南教您将GPT-Load代理服务接入Cherry Studio AI客户端，支持OpenAI、Gemini、Gemini OpenAI兼容和Anthropic四种渠道类型的完整配置。",
      keywords: "Cherry Studio接入, GPT-Load集成, AI客户端配置, OpenAI代理, Gemini代理, Claude代理, 多渠道配置, Cherry Studio设置",
      type: 'article'
    },
    en: {
      title: "Cherry Studio Integration Guide - GPT-Load",
      description: "Comprehensive guide to integrate GPT-Load proxy service with Cherry Studio AI client, supporting complete configuration for OpenAI, Gemini, Gemini OpenAI compatible, and Anthropic channel types.",
      keywords: "Cherry Studio integration, GPT-Load integration, AI client configuration, OpenAI proxy, Gemini proxy, Claude proxy, multi-channel configuration, Cherry Studio setup",
      type: 'article'
    },
    ja: {
      title: "Cherry Studio 統合ガイド - GPT-Load",
      description: "GPT-LoadプロキシサービスをCherry Studio AIクライアントと統合する包括的ガイド。OpenAI、Gemini、Gemini OpenAI互換、Anthropicの4つのチャネルタイプの完全な設定をサポート。",
      keywords: "Cherry Studio統合, GPT-Load統合, AIクライアント設定, OpenAIプロキシ, Geminiプロキシ, Claudeプロキシ, マルチチャネル設定, Cherry Studioセットアップ",
      type: 'article'
    }
  },
  '/docs/integrations/claude-code-router': {
    zh: {
      title: "Claude Code Router 接入指南 - GPT-Load",
      description: "详细指南教您将GPT-Load代理服务接入Claude Code Router工具中，支持多模型智能路由和代码辅助功能，包含完整的安装、配置和使用步骤。",
      keywords: "Claude Code Router接入, GPT-Load集成, 代码辅助工具, 多模型路由, 智能代码助手, AI开发工具, Claude Code配置, 代码路由器",
      type: 'article'
    },
    en: {
      title: "Claude Code Router Integration Guide - GPT-Load",
      description: "Comprehensive guide to integrate GPT-Load proxy service with Claude Code Router tool, supporting multi-model intelligent routing and code assistance features with complete installation, configuration, and usage steps.",
      keywords: "Claude Code Router integration, GPT-Load integration, code assistance tool, multi-model routing, intelligent code assistant, AI development tools, Claude Code configuration, code router",
      type: 'article'
    },
    ja: {
      title: "Claude Code Router 統合ガイド - GPT-Load",
      description: "GPT-LoadプロキシサービスをClaude Code Routerツールと統合する包括的ガイド。マルチモデルインテリジェントルーティングとコードアシスタンス機能をサポートし、完全なインストール、設定、使用手順を含みます。",
      keywords: "Claude Code Router統合, GPT-Load統合, コードアシスタンスツール, マルチモデルルーティング, インテリジェントコードアシスタント, AI開発ツール, Claude Code設定, コードルーター",
      type: 'article'
    }
  },
  '/docs/integrations/new-api': {
    zh: {
      title: "New API 接入指南 - GPT-Load",
      description: "详细指南教您将GPT-Load代理服务接入New API平台中，支持OpenAI、Gemini、Gemini OpenAI兼容和Anthropic四种渠道类型，包含完整的配置步骤和高级功能设置。",
      keywords: "New API接入, GPT-Load集成, OpenAI渠道, Gemini配置, Anthropic接入, 渠道管理, AI模型代理, New API平台, 思考功能, 搜索工具",
      type: 'article'
    },
    en: {
      title: "New API Integration Guide - GPT-Load",
      description: "Comprehensive guide to integrate GPT-Load proxy service with New API platform, supporting OpenAI, Gemini, Gemini OpenAI compatibility, and Anthropic channel types with complete configuration steps and advanced features.",
      keywords: "New API integration, GPT-Load integration, OpenAI channel, Gemini configuration, Anthropic integration, channel management, AI model proxy, New API platform, thinking features, search tools",
      type: 'article'
    },
    ja: {
      title: "New API 統合ガイド - GPT-Load",
      description: "GPT-LoadプロキシサービスをNew APIプラットフォームと統合する包括的ガイド。OpenAI、Gemini、Gemini OpenAI互換、Anthropicの4つのチャンネルタイプをサポートし、完全な設定手順と高度な機能設定を含みます。",
      keywords: "New API統合, GPT-Load統合, OpenAIチャンネル, Gemini設定, Anthropic統合, チャンネル管理, AIモデルプロキシ, New APIプラットフォーム, 思考機能, 検索ツール",
      type: 'article'
    }
  },
  '/docs/integrations/roo-code': {
    zh: {
      title: "Roo Code 接入指南 - GPT-Load",
      description: "详细指南教您将GPT-Load代理服务接入Roo Code智能代码助手中，支持OpenAI、Gemini和Anthropic三种渠道类型，包含完整的配置步骤和方法说明。",
      keywords: "Roo Code接入, GPT-Load集成, 智能代码助手, OpenAI Compatible, Google Gemini, Anthropic Claude, 代码助手配置, AI编程工具",
      type: 'article'
    },
    en: {
      title: "Roo Code Integration Guide - GPT-Load",
      description: "Comprehensive guide to integrate GPT-Load proxy service with Roo Code intelligent code assistant, supporting OpenAI, Gemini, and Anthropic channel types with complete configuration steps and methods.",
      keywords: "Roo Code integration, GPT-Load integration, intelligent code assistant, OpenAI Compatible, Google Gemini, Anthropic Claude, code assistant configuration, AI programming tools",
      type: 'article'
    },
    ja: {
      title: "Roo Code 統合ガイド - GPT-Load",
      description: "GPT-LoadプロキシサービスをRoo Codeインテリジェントコードアシスタントと統合する包括的ガイド。OpenAI、Gemini、Anthropicの3つのチャンネルタイプをサポートし、完全な設定手順と方法説明を含みます。",
      keywords: "Roo Code統合, GPT-Load統合, インテリジェントコードアシスタント, OpenAI Compatible, Google Gemini, Anthropic Claude, コードアシスタント設定, AIプログラミングツール",
      type: 'article'
    }
  },
  '/docs/sponsor': {
    zh: {
      title: "支持赞助 - GPT-Load",
      description: "如果GPT-Load对您有帮助，欢迎通过微信、支付宝、爱发电等方式支持项目发展。您的每一份支持都是我们持续改进的动力。",
      keywords: "GPT-Load赞助, 项目支持, 微信赞助, 支付宝赞助, 爱发电, 开源支持, 项目捐赠",
      type: 'article'
    },
    en: {
      title: "Sponsor - GPT-Load",
      description: "If GPT-Load helps you, welcome to support the project through WeChat, Alipay, Afdian and other ways. Every support is our motivation for continuous improvement.",
      keywords: "GPT-Load sponsor, project support, WeChat sponsor, Alipay sponsor, Afdian, open source support, project donation",
      type: 'article'
    },
    ja: {
      title: "スポンサー - GPT-Load",
      description: "GPT-Loadがお役に立った場合は、WeChat、Alipay、Afdianなどの方法でプロジェクトをサポートしてください。すべてのサポートは私たちの継続的な改善のモチベーションです。",
      keywords: "GPT-Loadスポンサー, プロジェクトサポート, WeChatスポンサー, Alipayスポンサー, Afdian, オープンソースサポート, プロジェクト寄付",
      type: 'article'
    }
  },
  '/contributors': {
    zh: {
      title: "贡献者 - GPT-Load",
      description: "感谢所有为GPT-Load项目做出贡献的开发者们！查看项目贡献者列表，了解如何参与开源贡献，一起推动项目发展。",
      keywords: "GPT-Load贡献者, 开源贡献, 项目贡献者, GitHub贡献, 代码贡献, 社区参与, 开源协作",
      type: 'article'
    },
    en: {
      title: "Contributors - GPT-Load",
      description: "Thanks to all developers who have contributed to the GPT-Load project! View the project contributors list and learn how to participate in open source contributions to drive project development together.",
      keywords: "GPT-Load contributors, open source contribution, project contributors, GitHub contribution, code contribution, community participation, open source collaboration",
      type: 'article'
    },
    ja: {
      title: "貢献者 - GPT-Load",
      description: "GPT-Loadプロジェクトに貢献してくださったすべての開発者の皆様に感謝いたします！プロジェクト貢献者リストを確認し、オープンソース貢献への参加方法を学んで、一緒にプロジェクトの発展を推進しましょう。",
      keywords: "GPT-Load貢献者, オープンソース貢献, プロジェクト貢献者, GitHub貢献, コード貢献, コミュニティ参加, オープンソース協働",
      type: 'article'
    }
  },
  '/docs/faq': {
    zh: {
      title: "常见问题 - GPT-Load",
      description: "快速解决GPT-Load使用中的常见问题。涵盖系统设置、密钥管理、配置优先级、故障排除等常见技术问题的详细解答。",
      keywords: "GPT-Load FAQ, 常见问题, 技术支持, 密钥管理, 系统配置, 故障排除, 黑名单设置, 分组配置",
      type: 'article'
    },
    en: {
      title: "FAQ - GPT-Load",
      description: "Quickly solve common issues when using GPT-Load. Covers detailed answers to common technical questions about system settings, key management, configuration priority, troubleshooting and more.",
      keywords: "GPT-Load FAQ, frequently asked questions, technical support, key management, system configuration, troubleshooting, blacklist settings, group configuration",
      type: 'article'
    },
    ja: {
      title: "よくある質問 - GPT-Load",
      description: "GPT-Load使用時の一般的な問題を素早く解決。システム設定、キー管理、構成優先度、トラブルシューティングなどの技術的な質問に対する詳細な回答を提供。",
      keywords: "GPT-Load FAQ, よくある質問, 技術サポート, キー管理, システム構成, トラブルシューティング, ブラックリスト設定, グループ構成",
      type: 'article'
    }
  },
  '/docs/configuration/security': {
    zh: {
      title: "安全性配置 - GPT-Load",
      description: "深入了解GPT-Load的安全配置最佳实践，包括AUTH_KEY复杂度要求、ENCRYPTION_KEY加密设置、数据迁移、密钥管理等企业级安全方案。",
      keywords: "GPT-Load安全性, AUTH_KEY配置, ENCRYPTION_KEY加密, 密钥安全, 数据加密, 安全最佳实践, 密钥管理, 安全配置",
      type: 'article'
    },
    en: {
      title: "Security Configuration - GPT-Load",
      description: "In-depth understanding of GPT-Load security configuration best practices, including AUTH_KEY complexity requirements, ENCRYPTION_KEY encryption settings, data migration, key management and enterprise-grade security solutions.",
      keywords: "GPT-Load security, AUTH_KEY configuration, ENCRYPTION_KEY encryption, key security, data encryption, security best practices, key management, security configuration",
      type: 'article'
    },
    ja: {
      title: "セキュリティ設定 - GPT-Load",
      description: "GPT-Loadのセキュリティ設定ベストプラクティスの詳細理解。AUTH_KEY複雑性要件、ENCRYPTION_KEY暗号化設定、データ移行、キー管理などのエンタープライズグレードセキュリティソリューションを含む。",
      keywords: "GPT-Loadセキュリティ, AUTH_KEY設定, ENCRYPTION_KEY暗号化, キーセキュリティ, データ暗号化, セキュリティベストプラクティス, キー管理, セキュリティ設定",
      type: 'article'
    }
  }
  // 架构预留：后续可继续添加其他页面的SEO配置
};