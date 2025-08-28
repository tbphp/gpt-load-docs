"use client";

import { useMemo } from 'react';
import { useLanguage } from '../i18n/context';
import { SupportedLanguage } from '../i18n/utils';

// 全局翻译缓存
const translationCache = new Map<string, string>();
const arrayCache = new Map<string, string[]>();
const objectCache = new Map<string, unknown[]>();

// 翻译类型定义 - 支持各种嵌套结构
type TranslationValue = 
  | string 
  | string[] 
  | { [key: string]: TranslationValue }
  | Array<{ [key: string]: TranslationValue }>
  | Array<{ [key: string]: string | string[] | undefined }>
  | Array<{ [key: string]: unknown }>  // 添加支持更复杂的对象结构
  | { [key: string]: unknown }         // 添加支持任意对象结构
  | null;

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
 * 缓存版本：获取嵌套对象的值 - 类型安全版本
 * 支持数组和对象，但只返回字符串类型的值
 */
function getNestedValueCached(obj: Record<string, unknown>, path: string, lang: string): string | undefined {
  const cacheKey = `${lang}-${path}`;
  
  // 检查缓存
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey);
  }
  
  // 计算值
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
  const result = typeof value === 'string' ? value : undefined;
  
  // 缓存结果（包括undefined）
  if (result !== undefined) {
    translationCache.set(cacheKey, result);
  }
  
  return result;
}

/**
 * 缓存版本：获取嵌套对象中的数组值 - 专门处理数组类型
 */
function getNestedArrayValueCached(obj: Record<string, unknown>, path: string, lang: string): string[] {
  const cacheKey = `${lang}-${path}`;
  
  // 检查缓存
  if (arrayCache.has(cacheKey)) {
    return arrayCache.get(cacheKey)!;
  }
  
  // 计算值
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
  let result: string[] = [];
  if (Array.isArray(value) && value.every(item => typeof item === 'string')) {
    result = value as string[];
  }
  
  // 缓存结果
  arrayCache.set(cacheKey, result);
  
  return result;
}

/**
 * 翻译Hook - 优化缓存版本
 */
export function useTranslation() {
  const { currentLanguage } = useLanguage();

  // 使用 useMemo 缓存翻译函数，避免组件重新创建函数
  const t = useMemo(() => (key: string, fallback?: string): string => {
    const value = getNestedValueCached(translations[currentLanguage], key, currentLanguage);
    
    if (value !== undefined) {
      return value;
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhValue = getNestedValueCached(translations.zh, key, 'zh');
      if (zhValue !== undefined) {
        return zhValue;
      }
    }

    // 返回提供的fallback或者key本身
    return fallback || key;
  }, [currentLanguage]);

  const tArray = useMemo(() => (key: string): string[] => {
    const value = getNestedArrayValueCached(translations[currentLanguage], key, currentLanguage);
    
    if (value.length > 0) {
      return value;
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhValue = getNestedArrayValueCached(translations.zh, key, 'zh');
      if (zhValue.length > 0) {
        return zhValue;
      }
    }

    // 返回空数组
    return [];
  }, [currentLanguage]);

  // 缓存版本：泛型函数，用于获取任何类型的数组（包括对象数组）
  const tObjectArray = useMemo(() => <T = unknown>(key: string): T[] => {
    const cacheKey = `${currentLanguage}-${key}`;
    
    // 检查缓存
    if (objectCache.has(cacheKey)) {
      return objectCache.get(cacheKey) as T[];
    }
    
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
      objectCache.set(cacheKey, value);
      return value as T[];
    }

    // 如果当前语言没有翻译，尝试使用中文作为fallback
    if (currentLanguage !== 'zh') {
      const zhCacheKey = `zh-${key}`;
      
      // 检查中文缓存
      if (objectCache.has(zhCacheKey)) {
        return objectCache.get(zhCacheKey) as T[];
      }
      
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
        objectCache.set(zhCacheKey, zhValue);
        objectCache.set(cacheKey, zhValue); // 也缓存当前语言的结果
        return zhValue as T[];
      }
    }

    // 缓存空数组结果
    const emptyResult: unknown[] = [];
    objectCache.set(cacheKey, emptyResult);
    return emptyResult as T[];
  }, [currentLanguage]);

  return { t, tArray, tObjectArray, currentLanguage };
}

// 导出translations用于外部更新
export { translations };