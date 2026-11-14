import { cache, type ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { DEFAULT_LOCALE, isLocale, type Locale } from './v2/config';

export type LocalizedPageProps = { params: Promise<{ locale: string }> };
export type LocalizedLayoutProps = LocalizedPageProps & { children: ReactNode };

// React cache 的作用域是单次服务端渲染，多个语言构建不会共享可变状态。
const currentRender = cache(() => ({ locale: DEFAULT_LOCALE as Locale }));

export async function initLocale(params: Promise<{ locale?: string }>): Promise<Locale> {
  const { locale = DEFAULT_LOCALE } = await params;
  if (!isLocale(locale)) notFound();
  currentRender().locale = locale;
  return locale;
}

export function renderLocale(): Locale {
  return currentRender().locale;
}
