import { headers } from 'next/headers';
import { DEFAULT_LANGUAGE, SupportedLanguage, isValidLanguage } from '@/i18n/utils';

/**
 * 服务端获取用户首选语言
 * 从中间件设置的 header 中获取已检测的语言
 */
export async function getServerLanguage(): Promise<SupportedLanguage> {
  try {
    const headersList = await headers();
    const detectedLang = headersList.get('x-detected-language');
    
    if (detectedLang && isValidLanguage(detectedLang)) {
      return detectedLang;
    }
    
    return DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

/**
 * 服务端获取语言的 HTML lang 属性值
 */
export async function getServerHtmlLang(): Promise<string> {
  const lang = await getServerLanguage();
  const langMap: Record<SupportedLanguage, string> = {
    'zh': 'zh-CN',
    'en': 'en',
    'ja': 'ja',
  };
  return langMap[lang] || 'zh-CN';
}