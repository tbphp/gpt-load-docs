'use client';

import NextLink from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { DEFAULT_LOCALE, isLocale } from '@/i18n/v2/config';
import { canonicalPath, localeHref } from '@/i18n/routing.mjs';

type Props = ComponentProps<'a'> & { href: string; prefetch?: boolean; fullReload?: boolean };

/** 在三语导航中保留语言；跨版本整页加载，隔离归档站与新版样式。 */
export default function LocalizedLink({ href, prefetch, fullReload, ...props }: Props) {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname() || '/';
  const locale = isLocale(params?.locale) ? params.locale : DEFAULT_LOCALE;
  const localized = localeHref(href, locale);
  const crossesVersion = href.startsWith('/') && !href.startsWith('//') &&
    !/\.[a-z0-9]+(?:[?#]|$)/i.test(href) &&
    canonicalPath(href.split(/[?#]/)[0]).startsWith('/v1') !== canonicalPath(pathname).startsWith('/v1');

  if (fullReload || crossesVersion) return <a href={localized} {...props} />;
  return <NextLink href={localized} prefetch={prefetch} {...props} />;
}
