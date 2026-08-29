"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_COOKIE, LOCALE_NAMES, type Locale } from "@/i18n/v2/config";
import { useLocale } from "@/i18n/v2/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 点击外部或按 Esc 收起
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;

    // 记住选择：一年有效，与 1.4.x 共用同一个 cookie
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;

    // URL 上带 ?lang=，刷新后仍是这个语言，链接也可以直接分享
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", next);
    router.replace(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <div className="lang" ref={boxRef}>
      <button
        type="button"
        className="lang-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.nav.language}
      >
        {LOCALE_NAMES[locale]}
        <span className="lang-caret" aria-hidden="true" />
      </button>

      {open ? (
        <ul className="lang-menu" role="listbox" aria-label={t.nav.language}>
          {LOCALES.map((code) => (
            <li key={code}>
              <button
                type="button"
                role="option"
                aria-selected={code === locale}
                className={code === locale ? "on" : undefined}
                onClick={() => choose(code)}
              >
                {LOCALE_NAMES[code]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
