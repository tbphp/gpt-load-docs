import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isValidLanguage, DEFAULT_LANGUAGE, COOKIE_NAME } from '@/i18n/utils';

export function middleware(request: NextRequest) {
  // 获取URL参数中的lang
  const urlLang = request.nextUrl.searchParams.get('lang');
  
  // 如果URL中有有效的lang参数，设置到cookie中
  if (urlLang && isValidLanguage(urlLang)) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE_NAME, urlLang, {
      maxAge: 365 * 24 * 60 * 60, // 1年
      path: '/',
      sameSite: 'lax'
    });
    
    // 设置自定义header，供服务端组件读取
    response.headers.set('x-detected-language', urlLang);
    return response;
  }
  
  // 如果没有URL参数，检查cookie
  const cookieLang = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLang && isValidLanguage(cookieLang)) {
    const response = NextResponse.next();
    response.headers.set('x-detected-language', cookieLang);
    return response;
  }
  
  // 检查Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language');
  if (acceptLanguage) {
    const langs = acceptLanguage.split(',');
    for (const lang of langs) {
      const cleanLang = lang.split(';')[0].trim().split('-')[0].toLowerCase();
      if (isValidLanguage(cleanLang)) {
        const response = NextResponse.next();
        response.headers.set('x-detected-language', cleanLang);
        // 同时设置到cookie
        response.cookies.set(COOKIE_NAME, cleanLang, {
          maxAge: 365 * 24 * 60 * 60,
          path: '/',
          sameSite: 'lax'
        });
        return response;
      }
    }
  }
  
  // 默认语言
  const response = NextResponse.next();
  response.headers.set('x-detected-language', DEFAULT_LANGUAGE);
  response.cookies.set(COOKIE_NAME, DEFAULT_LANGUAGE, {
    maxAge: 365 * 24 * 60 * 60,
    path: '/',
    sameSite: 'lax'
  });
  
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