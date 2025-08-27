"use client";

import { useLanguage } from '../i18n/context';
import { SupportedLanguage } from '../i18n/utils';

// 翻译类型定义 - 支持各种嵌套结构
type TranslationValue = 
  | string 
  | string[] 
  | { [key: string]: TranslationValue }
  | Array<{ [key: string]: TranslationValue }>
  | Array<{ [key: string]: string | string[] | undefined }>;

export interface Translations {
  [key: string]: TranslationValue;
}

// 导入翻译文件
import zhTranslations from '../i18n/locales/zh.json';
import enTranslations from '../i18n/locales/en.json';
import jaTranslations from '../i18n/locales/ja.json';

// 翻译数据
const translations: Record<SupportedLanguage, Translations> = {
  zh: zhTranslations as Translations,
  en: enTranslations as Translations,
  ja: jaTranslations as Translations,
};

/**
 * 获取嵌套对象的值 - 类型安全版本
 * 支持数组和对象，但只返回字符串类型的值
 */
function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const value = path.split('.').reduce(
    (current: unknown, key) => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, 
    obj
  );
  
  // 只返回字符串类型的值，数组和对象不作为翻译结果返回
  return typeof value === 'string' ? value : undefined;
}

/**
 * 获取嵌套对象中的数组值 - 专门处理数组类型
 */
function getNestedArrayValue(obj: Record<string, unknown>, path: string): string[] {
  const value = path.split('.').reduce(
    (current: unknown, key) => {
      if (current && typeof current === 'object' && key in current) {
        return (current as Record<string, unknown>)[key];
      }
      return undefined;
    }, 
    obj
  );
  
  // 如果是字符串数组，直接返回
  if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
    return value as string[];
  }
  
  // 否则返回空数组
  return [];
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

  const tArray = (key: string): string[] => {
    const value = getNestedArrayValue(translations[currentLanguage], key);
    
    if (value.length > 0) {
      return value;
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhValue = getNestedArrayValue(translations.zh, key);
      if (zhValue.length > 0) {
        return zhValue;
      }
    }

    // 返回空数组
    return [];
  };

  // 泛型函数，用于获取任何类型的数组（包括对象数组）
  const tObjectArray = <T = unknown>(key: string): T[] => {
    const value = key.split('.').reduce(
      (current: unknown, keyPart) => {
        if (current && typeof current === 'object' && keyPart in current) {
          return (current as Record<string, unknown>)[keyPart];
        }
        return undefined;
      }, 
      translations[currentLanguage]
    );
    
    if (Array.isArray(value)) {
      return value as T[];
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhValue = key.split('.').reduce(
        (current: unknown, keyPart) => {
          if (current && typeof current === 'object' && keyPart in current) {
            return (current as Record<string, unknown>)[keyPart];
          }
          return undefined;
        }, 
        translations.zh
      );
      
      if (Array.isArray(zhValue)) {
        return zhValue as T[];
      }
    }

    return [];
  };

  return { t, tArray, tObjectArray, currentLanguage };
}

// 导出translations用于外部更新
export { translations };