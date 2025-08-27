import { Metadata } from 'next';
import { SupportedLanguage } from '@/i18n/utils';
import { PAGE_SEO_CONFIGS, PageSeoConfig, OG_CONFIGS } from './metadata';
import { getServerLanguage } from './serverLanguage';
import { normalizePath, getLocaleFromLang, generateDynamicTitle } from '@/utils/seoHelpers';

/**
 * 将页面类型转换为OpenGraph支持的类型
 * @param pageType 页面类型
 * @returns OpenGraph支持的类型
 */
function getOpenGraphType(pageType?: string): 'website' | 'article' {
  if (pageType === 'article') return 'article';
  // product 和其他类型都降级为 website
  return 'website';
}

/**
 * 根据路径和语言生成动态元数据
 * @param pathname 页面路径
 * @param lang 语言（可选，将自动检测）
 * @returns Promise<Metadata>
 */
export async function generatePageMetadata(
  pathname: string,
  lang?: SupportedLanguage
): Promise<Metadata> {
  try {
    // 获取语言
    const detectedLang = lang || await getServerLanguage();
    
    // 标准化路径
    const normalizedPath = normalizePath(pathname);
    
    // 获取页面SEO配置
    const pageConfig = getPageSeoConfig(normalizedPath, detectedLang);
    const ogConfig = getPageOgConfig(normalizedPath, detectedLang);
    
    // 生成动态标题
    const dynamicTitle = generateDynamicTitle(pageConfig.title);
    
    return {
      title: dynamicTitle,
      description: pageConfig.description,
      keywords: pageConfig.keywords,
      authors: [{ name: "tbphp" }],
      metadataBase: new URL('https://www.gpt-load.com'),
      icons: {
        icon: [
          { url: "/logo.png", sizes: "32x32", type: "image/png" },
          { url: "/logo.png", sizes: "16x16", type: "image/png" },
        ],
        shortcut: "/logo.png",
        apple: "/logo.png",
      },
      openGraph: {
        title: ogConfig.title,
        description: ogConfig.description,
        type: getOpenGraphType(pageConfig.type),
        url: `https://www.gpt-load.com${normalizedPath}`,
        locale: getLocaleFromLang(detectedLang),
        images: [
          {
            url: "/logo.png",
            width: 1200,
            height: 630,
            alt: "GPT-Load Logo",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: ogConfig.title,
        description: ogConfig.description,
        images: ["/logo.png"],
      },
      alternates: {
        canonical: `https://www.gpt-load.com${normalizedPath}`,
        languages: {
          'zh-CN': `https://www.gpt-load.com${normalizedPath}?lang=zh`,
          'en': `https://www.gpt-load.com${normalizedPath}?lang=en`,
          'ja': `https://www.gpt-load.com${normalizedPath}?lang=ja`,
        }
      }
    };
  } catch (error) {
    console.error('Error generating page metadata:', error);
    
    // 降级处理：返回默认元数据
    return generateFallbackMetadata();
  }
}

/**
 * 获取页面SEO配置
 * @param pathname 标准化的路径
 * @param lang 语言
 * @returns PageSeoConfig
 */
function getPageSeoConfig(pathname: string, lang: SupportedLanguage): PageSeoConfig {
  const pageConfigs = PAGE_SEO_CONFIGS[pathname];
  
  if (pageConfigs && pageConfigs[lang]) {
    return pageConfigs[lang];
  }
  
  // 降级到首页配置
  return PAGE_SEO_CONFIGS['/'][lang];
}

/**
 * 获取页面OpenGraph配置
 * @param pathname 标准化的路径
 * @param lang 语言
 * @returns PageSeoConfig
 */
function getPageOgConfig(pathname: string, lang: SupportedLanguage): PageSeoConfig {
  const pageConfigs = PAGE_SEO_CONFIGS[pathname];
  
  if (pageConfigs && pageConfigs[lang]) {
    return {
      title: pageConfigs[lang].title,
      description: pageConfigs[lang].description,
      keywords: pageConfigs[lang].keywords
    };
  }
  
  // 降级到OG配置
  return OG_CONFIGS[lang];
}

/**
 * 生成降级元数据（当出错时使用）
 * @returns Promise<Metadata>
 */
async function generateFallbackMetadata(): Promise<Metadata> {
  try {
    const lang = await getServerLanguage();
    const config = PAGE_SEO_CONFIGS['/'][lang];
    
    return {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      metadataBase: new URL('https://www.gpt-load.com'),
    };
  } catch {
    // 最后的降级方案
    return {
      title: "GPT-Load - 高性能 AI 接口透明代理服务",
      description: "企业级 AI 接口透明代理服务",
      keywords: "GPT-Load, AI, 代理",
      metadataBase: new URL('https://www.gpt-load.com'),
    };
  }
}

/**
 * 为用户提供的便捷函数：获取当前页面的SEO配置
 * @param pathname 页面路径
 * @returns Promise<PageSeoConfig>
 */
export async function getCurrentPageSeo(pathname: string): Promise<PageSeoConfig> {
  const lang = await getServerLanguage();
  const normalizedPath = normalizePath(pathname);
  return getPageSeoConfig(normalizedPath, lang);
}