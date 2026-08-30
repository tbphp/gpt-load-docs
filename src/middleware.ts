import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLanguage, COOKIE_NAME } from '@/i18n/utils';
import { DEFAULT_LOCALE } from '@/i18n/v2/config';

/**
 * 语言检测。只负责「查出用户想要哪种语言」，**不决定默认值**——
 * 1.4.x 归档站默认中文、2.0 官网默认英文，各自在自己的 layout 里兜底。
 * 查不出来时不设 header，也不写 cookie。
 *
 * 优先级：URL 参数 ?lang= > Cookie > Accept-Language
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const requestHeaders = new Headers(request.headers);
  // 这些值必须写入转发给 Server Components 的请求头，而不是响应头。
  requestHeaders.set('x-pathname', pathname);

  const next = (locale?: string) => {
    if (locale) requestHeaders.set('x-detected-language', locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  };
  const nextForDetectedLocale = (locale: string) => {
    const isV2 = pathname !== '/v1' && !pathname.startsWith('/v1/');
    const isFile = /\.[a-z0-9]+$/i.test(pathname);
    if (isV2 && !isFile && locale !== DEFAULT_LOCALE && !urlLang) {
      const localizedUrl = request.nextUrl.clone();
      localizedUrl.searchParams.set('lang', locale);
      return NextResponse.redirect(localizedUrl);
    }
    return next(locale);
  };

  // 1. URL 参数：用户的显式选择，同时落盘记住
  const urlLang = request.nextUrl.searchParams.get('lang');
  if (urlLang && isValidLanguage(urlLang)) {
    const response = next(urlLang);
    response.cookies.set(COOKIE_NAME, urlLang, {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  // 2. Cookie：之前记住的选择
  const cookieLang = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLang && isValidLanguage(cookieLang)) {
    return nextForDetectedLocale(cookieLang);
  }

  // 3. 浏览器语言：只是推断，不写 cookie——用户还没真正选过
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    for (const part of acceptLanguage.split(',')) {
      const tag = part.split(';')[0].trim().toLowerCase();
      const candidate = isValidLanguage(tag) ? tag : tag.split('-')[0];
      if (isValidLanguage(candidate)) {
        return nextForDetectedLocale(candidate);
      }
    }
  }

  // 4. 查不出来：交给各站自己兜底
  return next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
