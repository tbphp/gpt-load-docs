import { cookies, headers } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, matchLocale, type Locale } from "./config";
import { getDict, type Dict } from "./dict";

/**
 * 服务端解析当前语言。优先级与 1.4.x 一致：
 *   URL 参数 ?lang= → Cookie → 浏览器 Accept-Language → 默认（2.0 为英文）
 *
 * URL 参数由 middleware 提前写进 Cookie 与 header，所以这里只需读后两者。
 */
export async function getLocale(): Promise<Locale> {
  try {
    const headerList = await headers();

    // middleware 已按「URL 参数 > Cookie」的顺序算好
    const detected = headerList.get("x-detected-language");
    if (isLocale(detected)) return detected;

    const cookieStore = await cookies();
    const saved = cookieStore.get(LOCALE_COOKIE)?.value;
    if (isLocale(saved)) return saved;

    const fromBrowser = matchLocale(headerList.get("accept-language"));
    if (fromBrowser) return fromBrowser;

    return DEFAULT_LOCALE;
  } catch {
    return DEFAULT_LOCALE;
  }
}

/** 取当前语言的词典 */
export async function getT(): Promise<Dict> {
  return getDict(await getLocale());
}
