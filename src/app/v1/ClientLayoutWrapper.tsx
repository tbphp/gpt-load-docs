"use client";

import { useEffect, ReactNode } from 'react';
import { useLanguage } from '@/i18n/context';
import TopLoading from '@/components/TopLoading';
import { useRouterLoading } from '@/hooks/useRouterLoading';

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProps) => {
  const { currentLanguage, isLoading } = useLanguage();
  const { isLoading: isRouterLoading } = useRouterLoading();

  useEffect(() => {
    if (!isLoading && typeof document !== 'undefined') {
      // 只更新html lang属性，标题由各页面的 useSeo hook 处理
      const langMap: Record<string, string> = {
        'zh': 'zh-CN',
        'en': 'en',
        'ja': 'ja',
      };
      
      document.documentElement.lang = langMap[currentLanguage] || 'zh-CN';
    }
  }, [currentLanguage, isLoading]);

  return (
    <>
      <TopLoading isLoading={isRouterLoading} />
      {children}
    </>
  );
};

export default ClientLayoutWrapper;