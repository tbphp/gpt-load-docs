import { SupportedLanguage } from '@/i18n/utils';
import { getServerLanguage } from './serverLanguage';

// 动态导入翻译文件
async function getTranslations(lang: SupportedLanguage) {
  try {
    const translations = await import(`@/i18n/locales/${lang}.json`);
    return translations.default || translations;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}:`, error);
    // 降级到默认中文翻译
    const fallback = await import('@/i18n/locales/zh.json');
    return fallback.default || fallback;
  }
}

/**
 * 服务端翻译函数
 * @param key 翻译key，支持嵌套路径如 "docsQuickStart.title"
 * @param lang 可选语言，默认使用检测到的语言
 */
export async function getServerTranslation(key: string, lang?: SupportedLanguage) {
  const targetLang = lang || await getServerLanguage();
  const translations = await getTranslations(targetLang);
  
  // 解析嵌套key
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k as keyof typeof value];
    } else {
      console.warn(`Translation key "${key}" not found for language "${targetLang}"`);
      return key; // 返回原key作为降级
    }
  }
  
  return typeof value === 'string' ? value : key;
}

/**
 * 服务端批量翻译函数
 * @param keys 翻译key数组
 * @param lang 可选语言
 */
export async function getServerTranslations(keys: string[], lang?: SupportedLanguage) {
  const targetLang = lang || await getServerLanguage();
  
  const results: Record<string, string> = {};
  for (const key of keys) {
    results[key] = await getServerTranslation(key, targetLang);
  }
  
  return results;
}

/**
 * 获取完整的翻译对象（用于客户端hydration）
 * @param lang 可选语言
 */
export async function getServerTranslationObject(lang?: SupportedLanguage) {
  const targetLang = lang || await getServerLanguage();
  return await getTranslations(targetLang);
}