"use client";

import { useLanguage } from '../i18n/context';
import { SupportedLanguage } from '../i18n/utils';

// 翻译类型定义
export interface Translations {
  [key: string]: any;
}

// 导入翻译文件
import zhTranslations from '../i18n/locales/zh.json';
import enTranslations from '../i18n/locales/en.json';
import jaTranslations from '../i18n/locales/ja.json';

// 翻译数据
const translations: Record<SupportedLanguage, Translations> = {
  zh: zhTranslations,
  en: enTranslations,
  ja: jaTranslations,
};

/**
 * 获取嵌套对象的值
 */
function getNestedValue(obj: any, path: string): string | undefined {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * 翻译Hook
 */
export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (key: string, fallback?: string): string => {
    const value = getNestedValue(translations[currentLanguage], key);
    
    if (value !== undefined) {
      return value;
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhValue = getNestedValue(translations.zh, key);
      if (zhValue !== undefined) {
        return zhValue;
      }
    }

    // 返回提供的fallback或者key本身
    return fallback || key;
  };

  return { t, currentLanguage };
}

// 导出translations用于外部更新
export { translations };