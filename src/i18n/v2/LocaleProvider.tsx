"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "./config";
import type { Dict } from "./dict";

type Ctx = { locale: Locale; t: Dict };

const LocaleContext = createContext<Ctx | null>(null);

/** 由 server layout 注入已解析好的语言与词典，客户端组件据此渲染 */
export function LocaleProvider({ locale, t, children }: Ctx & { children: ReactNode }) {
  return <LocaleContext.Provider value={{ locale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Ctx {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale 必须在 LocaleProvider 内使用");
  return ctx;
}
