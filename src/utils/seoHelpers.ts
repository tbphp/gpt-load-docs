import { SupportedLanguage } from '@/i18n/utils';

/**
 * 标准化路径处理
 * 移除尾部斜杠，确保路径一致性
 * @param pathname 原始路径
 * @returns 标准化的路径
 */
export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  
  // 移除尾部斜杠
  const normalized = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // 确保以斜杠开头
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

/**
 * 语言到OpenGraph locale的映射
 * @param lang 支持的语言
 * @returns OpenGraph标准的locale字符串
 */
export function getLocaleFromLang(lang: SupportedLanguage): string {
  const localeMapping: Record<SupportedLanguage, string> = {
    zh: 'zh_CN',
    en: 'en_US',
    ja: 'ja_JP'
  };
  
  return localeMapping[lang] || 'zh_CN';
}

/**
 * 动态生成页面标题
 * 如果标题不包含站点名，则自动添加
 * @param pageTitle 页面标题
 * @param siteName 站点名称，默认为 'GPT-Load'
 * @returns 完整的页面标题
 */
export function generateDynamicTitle(
  pageTitle: string, 
  siteName: string = 'GPT-Load'
): string {
  if (!pageTitle) return siteName;
  
  // 如果标题已经包含站点名，直接返回
  if (pageTitle.includes(siteName)) {
    return pageTitle;
  }
  
  // 否则添加站点名
  return `${pageTitle} | ${siteName}`;
}

/**
 * 获取页面类型的默认配置
 * @param pageType 页面类型
 * @returns 页面类型对应的默认配置
 */
export function getDefaultConfigByPageType(pageType: 'website' | 'article' | 'product') {
  const defaults = {
    website: {
      type: 'website' as const,
      openGraphType: 'website' as 'website' | 'article',
      priority: 1.0,
      changeFrequency: 'monthly' as const
    },
    article: {
      type: 'article' as const,
      openGraphType: 'article' as 'website' | 'article',
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    product: {
      type: 'product' as const,
      openGraphType: 'website' as 'website' | 'article', // OpenGraph 不支持 product，降级为 website
      priority: 0.9,
      changeFrequency: 'monthly' as const
    }
  };
  
  return defaults[pageType] || defaults.website;
}

/**
 * 生成hreflang链接
 * @param pathname 页面路径
 * @param baseUrl 基础URL，默认为 'https://gpt-load.com'
 * @returns hreflang链接对象
 */
export function generateHreflangLinks(
  pathname: string,
  baseUrl: string = 'https://gpt-load.com'
) {
  const normalizedPath = normalizePath(pathname);
  
  return {
    'zh-CN': `${baseUrl}${normalizedPath}?lang=zh`,
    'en': `${baseUrl}${normalizedPath}?lang=en`,
    'ja': `${baseUrl}${normalizedPath}?lang=ja`,
    'x-default': `${baseUrl}${normalizedPath}`
  };
}

/**
 * 从路径提取页面类型
 * @param pathname 页面路径
 * @returns 推断的页面类型
 */
export function inferPageTypeFromPath(pathname: string): 'website' | 'article' | 'product' {
  const normalizedPath = normalizePath(pathname);
  
  if (normalizedPath === '/') return 'website';
  
  if (normalizedPath.startsWith('/docs')) return 'article';
  
  if (normalizedPath.includes('/product') || normalizedPath.includes('/pricing')) {
    return 'product';
  }
  
  return 'article';
}

/**
 * 验证SEO配置的完整性
 * @param config SEO配置对象
 * @returns 验证结果和错误信息
 */
export function validateSeoConfig(config: {
  title?: string;
  description?: string;
  keywords?: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!config.title || config.title.trim().length === 0) {
    errors.push('页面标题不能为空');
  } else if (config.title.length > 60) {
    errors.push('页面标题建议不超过60个字符');
  }
  
  if (!config.description || config.description.trim().length === 0) {
    errors.push('页面描述不能为空');
  } else if (config.description.length > 160) {
    errors.push('页面描述建议不超过160个字符');
  }
  
  if (!config.keywords || config.keywords.trim().length === 0) {
    errors.push('关键词不能为空');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * 生成结构化数据的基础架构
 * @param type 结构化数据类型
 * @param data 数据内容
 * @returns 结构化数据对象
 */
export function generateStructuredData(
  type: 'Organization' | 'WebSite' | 'Article',
  data: Record<string, unknown>
) {
  const baseStructure = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return baseStructure;
}