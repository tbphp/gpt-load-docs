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
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>(DEFAULT_LANGUAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 客户端初始化语言
    const detectedLanguage = initLanguage();
    setCurrentLanguage(detectedLanguage);
    setIsLoading(false);
  }, []);

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