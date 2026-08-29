import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLanguage, COOKIE_NAME } from '@/i18n/utils';

/**
 * 语言检测。只负责「查出用户想要哪种语言」，**不决定默认值**——
 * 1.4.x 归档站默认中文、2.0 官网默认英文，各自在自己的 layout 里兜底。
 * 查不出来时不设 header，也不写 cookie。
 *
 * 优先级：URL 参数 ?lang= > Cookie > Accept-Language
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  // 供根布局判断当前请求属于 2.0 官网还是 1.4.x 归档站
  response.headers.set('x-pathname', pathname);

  // 1. URL 参数：用户的显式选择，同时落盘记住
  const urlLang = request.nextUrl.searchParams.get('lang');
  if (urlLang && isValidLanguage(urlLang)) {
    response.headers.set('x-detected-language', urlLang);
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
    response.headers.set('x-detected-language', cookieLang);
    return response;
  }

  // 3. 浏览器语言：只是推断，不写 cookie——用户还没真正选过
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    for (const part of acceptLanguage.split(',')) {
      const tag = part.split(';')[0].trim().toLowerCase();
      const candidate = isValidLanguage(tag) ? tag : tag.split('-')[0];
      if (isValidLanguage(candidate)) {
        response.headers.set('x-detected-language', candidate);
        return response;
      }
    }
  }

  // 4. 查不出来：交给各站自己兜底
  return response;
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
