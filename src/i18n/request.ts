import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, locales, type Locale } from "./config";

export default getRequestConfig(async () => {
  // 从cookie中获取语言设置
  const cookieStore = await cookies();
  let locale = cookieStore.get("locale")?.value as Locale;

  // 如果cookie中没有语言设置，使用默认语言
  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
