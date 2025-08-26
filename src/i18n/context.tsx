"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  SupportedLanguage, 
  initLanguage, 
  setPreferredLanguage, 
  removeUrlLanguageParam,
  DEFAULT_LANGUAGE 
} from './utils';

interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  switchLanguage: (lang: SupportedLanguage) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: SupportedLanguage;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(
    initialLanguage || DEFAULT_LANGUAGE
  );
  const [isLoading, setIsLoading] = useState(!initialLanguage);

  useEffect(() => {
    // 如果有服务端传入的初始语言，则无需客户端检测
    if (initialLanguage) {
      setCurrentLanguage(initialLanguage);
      setIsLoading(false);
      return;
    }
    
    // 兜底：客户端初始化语言（仅在没有服务端语言时）
    const detectedLanguage = initLanguage();
    setCurrentLanguage(detectedLanguage);
    setIsLoading(false);
  }, [initialLanguage]);

  const switchLanguage = (newLang: SupportedLanguage) => {
    // 更新 Cookie
    setPreferredLanguage(newLang);
    
    // 清除 URL 参数
    removeUrlLanguageParam();
    
    // 更新状态
    setCurrentLanguage(newLang);
  };

  const value: LanguageContextType = {
    currentLanguage,
    switchLanguage,
    isLoading,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}