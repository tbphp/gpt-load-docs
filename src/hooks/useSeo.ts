"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/i18n/context';
import { PAGE_SEO_CONFIGS } from '@/lib/metadata';
import { normalizePath, generateDynamicTitle } from '@/utils/seoHelpers';

/**
 * 客户端SEO更新Hook
 * 当路径或语言变化时，动态更新页面标题和meta信息
 * @param pathname 可选的页面路径，如果不提供则使用当前路径
 */
export function useSeo(pathname?: string) {
  const currentPathname = usePathname();
  const { currentLanguage, isLoading } = useLanguage();
  
  // 使用传入的路径或当前路径
  const targetPath = pathname || currentPathname;
  
  useEffect(() => {
    // 如果语言还在加载中，跳过更新
    if (isLoading || typeof document === 'undefined') return;
    
    try {
      // 标准化路径
      const normalizedPath = normalizePath(targetPath);
      
      // 获取SEO配置
      const seoConfig = getSeoConfigForPath(normalizedPath, currentLanguage);
      
      if (seoConfig) {
        // 更新页面标题
        updatePageTitle(seoConfig.title);
        
        // 更新meta描述
        updateMetaDescription(seoConfig.description);
        
        // 更新meta关键词
        updateMetaKeywords(seoConfig.keywords);
        
        // 可选：触发自定义事件通知其他组件
        dispatchSeoUpdateEvent(normalizedPath, currentLanguage);
      }
    } catch (error) {
      console.error('Error updating SEO information:', error);
    }
  }, [targetPath, currentLanguage, isLoading]);
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
 * 更新页面标题
 * @param title 新标题
 */
function updatePageTitle(title: string) {
  if (title && title !== document.title) {
    document.title = generateDynamicTitle(title);
  }
}

/**
 * 更新meta描述
 * @param description 新描述
 */
function updateMetaDescription(description: string) {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }
}

/**
 * 更新meta关键词
 * @param keywords 新关键词
 */
function updateMetaKeywords(keywords: string) {
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && keywords) {
    metaKeywords.setAttribute('content', keywords);
  }
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