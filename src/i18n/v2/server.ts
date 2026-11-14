import { renderLocale } from '../static-locale';
import { getDict, type Dict } from './dict';
import type { Locale } from './config';

/** 页面入口从静态路由参数设定语言，不读取请求头或 Cookie。 */
export async function getLocale(): Promise<Locale> {
  return renderLocale();
}

export async function getT(): Promise<Dict> {
  return getDict(await getLocale());
}
