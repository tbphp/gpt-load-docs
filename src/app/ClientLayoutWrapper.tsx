"use client";

import { useEffect, ReactNode } from 'react';
import { useLanguage } from '@/i18n/context';
import { META_CONFIGS } from '@/lib/metadata';

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProps) => {
  const { currentLanguage, isLoading } = useLanguage();

  useEffect(() => {
    if (!isLoading && typeof document !== 'undefined') {
      // 更新html lang属性
      const langMap: Record<string, string> = {
        'zh': 'zh-CN',
        'en': 'en',
        'ja': 'ja',
      };
      
      document.documentElement.lang = langMap[currentLanguage] || 'zh-CN';
      
      // 动态更新页面标题和描述
      const config = META_CONFIGS[currentLanguage];
      if (config) {
        document.title = config.title;
        
        // 更新meta描述
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', config.description);
        }
        
        // 更新meta关键词
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', config.keywords);
        }
      }
    }
  }, [currentLanguage, isLoading]);

  return <>{children}</>;
};

export default ClientLayoutWrapper;