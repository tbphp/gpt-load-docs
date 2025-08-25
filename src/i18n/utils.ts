export type SupportedLanguage = 'zh' | 'en' | 'ja';

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['zh', 'en', 'ja'];

export const LANGUAGE_NAMES = {
  zh: '中文',
  en: 'English', 
  ja: '日本語',
} as const;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'zh';
export const COOKIE_NAME = 'preferred-language';

/**
 * 检查语言是否受支持
 */
export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

/**
 * 获取URL参数中的语言
 */
export function getUrlLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang');
  
  return lang && isValidLanguage(lang) ? lang : null;
}

/**
 * 从URL中移除语言参数
 */
export function removeUrlLanguageParam(): void {
  if (typeof window === 'undefined') return;
  
  const url = new URL(window.location.href);
  url.searchParams.delete('lang');
  window.history.replaceState(null, '', url.toString());
}

/**
 * 检测系统语言
 */
export function detectSystemLanguage(): SupportedLanguage | null {
  if (typeof window === 'undefined') return null;
  
  const lang = navigator.language.toLowerCase();
  
  // 精确匹配
  if (isValidLanguage(lang)) {
    return lang;
  }
  
  // 前缀匹配
  const langPrefix = lang.split('-')[0];
  if (isValidLanguage(langPrefix)) {
    return langPrefix;
  }
  
  // 特殊处理
  if (lang.startsWith('zh') || lang.includes('chinese')) {
    return 'zh';
  }
  if (lang.startsWith('ja') || lang.includes('japanese')) {
    return 'ja';
  }
  if (lang.startsWith('en') || lang.includes('english')) {
    return 'en';
  }
  
  return null;
}

/**
 * 设置Cookie
 */
export function setCookie(name: string, value: string, days: number = 365): void {
  if (typeof document === 'undefined') return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

/**
 * 获取Cookie
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  
  return null;
}

/**
 * 获取用户偏好语言（从Cookie）
 */
export function getPreferredLanguage(): SupportedLanguage | null {
  const cookieLang = getCookie(COOKIE_NAME);
  return cookieLang && isValidLanguage(cookieLang) ? cookieLang : null;
}

/**
 * 设置用户偏好语言（到Cookie）
 */
export function setPreferredLanguage(lang: SupportedLanguage): void {
  setCookie(COOKIE_NAME, lang);
}

/**
 * 初始化语言检测
 * 优先级：URL参数 > Cookie > 系统语言 > 默认语言
 */
export function initLanguage(): SupportedLanguage {
  // 1. URL 参数优先（同时更新 Cookie）
  const urlLang = getUrlLanguage();
  if (urlLang) {
    setPreferredLanguage(urlLang);
    return urlLang;
  }
  
  // 2. Cookie 检测
  const preferredLang = getPreferredLanguage();
  if (preferredLang) {
    return preferredLang;
  }
  
  // 3. 系统语言检测
  const systemLang = detectSystemLanguage();
  if (systemLang) {
    setPreferredLanguage(systemLang);
    return systemLang;
  }
  
  // 4. 默认语言
  setPreferredLanguage(DEFAULT_LANGUAGE);
  return DEFAULT_LANGUAGE;
}