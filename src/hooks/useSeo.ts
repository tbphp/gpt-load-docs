"use client";

import { useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/context';
import { PAGE_SEO_CONFIGS } from '@/lib/metadata';
import { normalizePath, generateDynamicTitle } from '@/utils/seoHelpers';

// 全局缓存对象
const seoCache = new Map<string, { title: string; description: string; keywords: string }>();
const titleCache = new Map<string, string>();

/**
 * 客户端SEO更新Hook - 优化版本，添加缓存机制
 * 当路径或语言变化时，动态更新页面标题和meta信息
 * @param pathname 可选的页面路径，如果不提供则使用当前路径
 */
export function useSeo(pathname?: string) {
  const currentPathname = usePathname();
  const { currentLanguage, isLoading } = useLanguage();
  const lastUpdateRef = useRef<string>('');
  
  // 使用传入的路径或当前路径
  const targetPath = pathname || currentPathname;
  
  // 使用 useMemo 缓存标准化路径计算
  const normalizedPath = useMemo(() => {
    return normalizePath(targetPath);
  }, [targetPath]);
  
  // 使用 useMemo 缓存SEO配置查找
  const seoConfig = useMemo(() => {
    if (isLoading) return null;
    
    const cacheKey = `${normalizedPath}-${currentLanguage}`;
    
    // 检查缓存
    if (seoCache.has(cacheKey)) {
      return seoCache.get(cacheKey);
    }
    
    // 计算并缓存
    const config = getSeoConfigForPath(normalizedPath, currentLanguage);
    if (config) {
      seoCache.set(cacheKey, config);
    }
    
    return config;
  }, [normalizedPath, currentLanguage, isLoading]);
  
  useEffect(() => {
    // 如果语言还在加载中或没有配置，跳过更新
    if (isLoading || !seoConfig || typeof document === 'undefined') return;
    
    // 创建更新标识，避免重复更新
    const updateKey = `${normalizedPath}-${currentLanguage}`;
    if (lastUpdateRef.current === updateKey) return;
    
    try {
      // 批量更新DOM，减少重绘
      const updatePromises = [
        updatePageTitleCached(seoConfig.title),
        updateMetaDescriptionCached(seoConfig.description),
        updateMetaKeywordsCached(seoConfig.keywords)
      ];
      
      Promise.all(updatePromises).then(() => {
        // 标记已更新
        lastUpdateRef.current = updateKey;
        
        // 异步触发事件，不阻塞渲染
        setTimeout(() => {
          dispatchSeoUpdateEvent(normalizedPath, currentLanguage);
        }, 0);
      });
      
    } catch (error) {
      console.error('Error updating SEO information:', error);
    }
  }, [normalizedPath, currentLanguage, seoConfig, isLoading]);
}

/**
 * 获取指定路径和语言的SEO配置
 * @param pathname 标准化的路径
 * @param language 当前语言
 * @returns SEO配置或null
 */
function getSeoConfigForPath(pathname: string, language: string) {
  const pageConfigs = PAGE_SEO_CONFIGS[pathname];
  
  if (pageConfigs && pageConfigs[language as keyof typeof pageConfigs]) {
    return pageConfigs[language as keyof typeof pageConfigs];
  }
  
  // 降级到首页配置
  const homeConfigs = PAGE_SEO_CONFIGS['/'];
  return homeConfigs[language as keyof typeof homeConfigs] || null;
}

/**
 * 缓存版本：更新页面标题
 * @param title 新标题
 */
async function updatePageTitleCached(title: string): Promise<void> {
  if (!title) return;
  
  const dynamicTitle = generateDynamicTitle(title);
  
  // 检查是否需要更新
  if (titleCache.get('current') === dynamicTitle) return;
  
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      document.title = dynamicTitle;
      titleCache.set('current', dynamicTitle);
      resolve();
    });
  });
}

/**
 * 缓存版本：更新meta描述
 * @param description 新描述
 */
async function updateMetaDescriptionCached(description: string): Promise<void> {
  if (!description) return;
  
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && metaDescription.getAttribute('content') !== description) {
        metaDescription.setAttribute('content', description);
      }
      resolve();
    });
  });
}

/**
 * 缓存版本：更新meta关键词
 * @param keywords 新关键词
 */
async function updateMetaKeywordsCached(keywords: string): Promise<void> {
  if (!keywords) return;
  
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords && metaKeywords.getAttribute('content') !== keywords) {
        metaKeywords.setAttribute('content', keywords);
      }
      resolve();
    });
  });
}


/**
 * 派发SEO更新事件
 * 允许其他组件监听SEO变化
 * @param pathname 页面路径
 * @param language 当前语言
 */
function dispatchSeoUpdateEvent(pathname: string, language: string) {
  const event = new CustomEvent('seoUpdate', {
    detail: { pathname, language }
  });
  document.dispatchEvent(event);
}

/**
 * 监听SEO更新事件的Hook
 * @param callback 事件回调函数
 */
export function useSeoUpdateListener(
  callback: (detail: { pathname: string; language: string }) => void
) {
  useEffect(() => {
    const handleSeoUpdate = (event: CustomEvent) => {
      callback(event.detail);
    };
    
    document.addEventListener('seoUpdate', handleSeoUpdate as EventListener);
    
    return () => {
      document.removeEventListener('seoUpdate', handleSeoUpdate as EventListener);
    };
  }, [callback]);
}

/**
 * 获取当前页面SEO信息的Hook
 * @param pathname 可选的页面路径
 * @returns 当前页面的SEO配置
 */
export function useCurrentPageSeo(pathname?: string) {
  const currentPathname = usePathname();
  const { currentLanguage } = useLanguage();
  
  const targetPath = pathname || currentPathname;
  const normalizedPath = normalizePath(targetPath);
  
  return getSeoConfigForPath(normalizedPath, currentLanguage);
}

/**
 * 轻量级SEO Hook
 * 仅更新页面标题，不涉及其他meta标签
 * @param title 页面标题
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    if (title && typeof document !== 'undefined') {
      const dynamicTitle = generateDynamicTitle(title);
      if (document.title !== dynamicTitle) {
        document.title = dynamicTitle;
      }
    }
  }, [title]);
}