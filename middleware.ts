import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales, type Locale } from "./src/i18n/config";

export function middleware(request: NextRequest) {
  // 检查是否已经有语言cookie
  let locale = request.cookies.get("locale")?.value as Locale;

  // 如果没有cookie，尝试从Accept-Language header检测
  if (!locale || !locales.includes(locale)) {
    const acceptLanguage = request.headers.get("accept-language");

    if (acceptLanguage) {
      // 解析Accept-Language header
      const preferredLocale = acceptLanguage
        .split(",")
        .map((lang) => lang.split(";")[0].trim())
        .find((lang) => {
          const code = lang.split("-")[0] as Locale;
          return locales.includes(code);
        });

      if (preferredLocale) {
        locale = preferredLocale.split("-")[0] as Locale;
      }
    }

    // 如果还是没有检测到，使用默认语言
    if (!locale || !locales.includes(locale)) {
      locale = defaultLocale;
    }
  }

  // 创建响应并设置语言cookie
  const response = NextResponse.next();

  // 只在需要时设置cookie
  if (request.cookies.get("locale")?.value !== locale) {
    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1年
      httpOnly: false, // 允许客户端JavaScript访问
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 其他静态资源
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg).*)",
  ],
};
