"use client";

import { useEffect, ReactNode } from 'react';
import { useLanguage } from '@/i18n/context';

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
    }
  }, [currentLanguage, isLoading]);

  return <>{children}</>;
};

export default ClientLayoutWrapper;