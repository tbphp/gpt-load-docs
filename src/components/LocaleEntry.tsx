'use client';

import { useEffect } from 'react';
import { entryHref } from '@/i18n/routing.mjs';
import { getPreferredLanguage, setPreferredLanguage } from '@/i18n/utils';
import { isLocale } from '@/i18n/v2/config';

/** 旧入口在浏览器中选择静态语言页，页面本身不需要服务端函数。 */
export default function LocaleEntry() {
  useEffect(() => {
    const current = new URL(window.location.href);
    const explicit = current.searchParams.get('lang');
    if (isLocale(explicit)) setPreferredLanguage(explicit);
    const target = entryHref(current.href, getPreferredLanguage(), navigator.language);
    if (target !== `${current.pathname}${current.search}${current.hash}`) window.location.replace(target);
  }, []);
  return null;
}
