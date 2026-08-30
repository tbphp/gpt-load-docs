"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_COOKIE, LOCALE_NAMES, type Locale } from "@/i18n/v2/config";
import { useLocale } from "@/i18n/v2/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
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
    // 记住选择：一年有效，与 1.4.x 共用同一个 cookie
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
  };

  const hrefFor = (next: Locale) => {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "en") params.delete("lang");
    else params.set("lang", next);
    const query = params.toString();
    return query ? `${pathname}?${query}` : pathname;
  };

  const moveFocus = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
    if (links.length === 0) return;
    event.preventDefault();
    const current = links.indexOf(document.activeElement as HTMLAnchorElement);
    const next = event.key === "Home"
      ? 0
      : event.key === "End"
        ? links.length - 1
        : event.key === "ArrowDown"
          ? (current + 1 + links.length) % links.length
          : (current - 1 + links.length) % links.length;
    links[next].focus();
  };

  return (
    <div className="lang" ref={boxRef}>
      <button
        type="button"
        className="lang-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={t.nav.language}
      >
        {LOCALE_NAMES[locale]}
        <span className="lang-caret" aria-hidden="true" />
      </button>

      {open ? (
        <ul className="lang-menu" role="menu" aria-label={t.nav.language} onKeyDown={moveFocus}>
          {LOCALES.map((code) => (
            <li key={code}>
              <Link
                role="menuitem"
                aria-current={code === locale ? "true" : undefined}
                className={code === locale ? "on" : undefined}
                onClick={() => choose(code)}
                href={hrefFor(code)}
              >
                {LOCALE_NAMES[code]}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
