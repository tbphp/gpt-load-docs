"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import { fetchStars, formatStars } from "@/lib/v2/github";
import { useLocale } from "@/i18n/v2/LocaleProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import { LOCALES, LOCALE_COOKIE, LOCALE_NAMES, type Locale } from "@/i18n/v2/config";

/** 标题走词典，路径固定 */
const NAV = [
  { href: "/docs", key: "docs" },
  { href: "/docs/groups", key: "channels" },
  { href: "/docs/install", key: "deploy" },
  { href: "/changelog", key: "changelog" },
] as const;

const GITHUB = "https://github.com/tbphp/gpt-load";

function HeartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 21s-8-4.9-8-10.4C4 6.9 6.6 4.5 9.6 4.5c1.5 0 2.8.7 3.7 1.8.9-1.1 2.2-1.8 3.7-1.8 3 0 5.6 2.4 5.6 6.1C22.6 16.1 12 21 12 21z" />
    </svg>
  );
}

export default function SiteHeader() {
  const { locale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/docs") {
      return pathname.startsWith("/docs") && !pathname.startsWith("/docs/groups") && !pathname.startsWith("/docs/install");
    }
    return pathname.startsWith(href);
  };

  // 浏览器直接问 GitHub 要 star 数，用访客自己的配额；取不到就不显示数字
  useEffect(() => {
    let alive = true;
    fetchStars().then((n) => {
      if (alive) setStars(formatStars(n));
    });
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // 抽屉里的切换：写 cookie 后带 ?lang 整页跳转，逻辑与下拉一致但不依赖 router
  const switchLocale = (next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`;
    const url = new URL(window.location.href);
    if (next === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.location.href = url.toString();
  };

  return (
    <header className="top">
      <div className="shell top-in">
        <Link className="brand" href="/">
          <Mark size={18} color="currentColor" />
          GPT-Load
        </Link>

        <nav className="nav" aria-label={t.common.primaryNavigation}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "on" : undefined}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          {/* 赞助单独出列：带图标与品牌色，是给赞助方的引导位，不是普通导航 */}
          <Link
            href="/sponsor"
            className={`nav-spon${pathname.startsWith("/sponsor") ? " on" : ""}`}
            aria-current={pathname.startsWith("/sponsor") ? "page" : undefined}
          >
            <HeartIcon />
            {t.nav.sponsor}
          </Link>
        </nav>

        <div className="top-r">
          <a className="gh" href={GITHUB} target="_blank" rel="noopener noreferrer">
            {t.nav.github}
            {stars ? <span className="k">{stars}</span> : null}
          </a>
          <LanguageSwitcher />
          <Link href="/docs/quickstart" className="b">
            {t.nav.quickstart} →
          </Link>
        </div>

        <button
          className="burger"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-mobile-nav"
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>

      <div id="site-mobile-nav" className={`shell top-drawer${open ? " open" : ""}`} hidden={!open}>
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {t.nav[item.key]}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="nav-spon"
              href="/sponsor"
              onClick={() => setOpen(false)}
              aria-current={pathname.startsWith("/sponsor") ? "page" : undefined}
            >
              <HeartIcon />
              {t.nav.sponsor}
            </Link>
          </li>
          <li>
            <Link href="/docs/quickstart" onClick={() => setOpen(false)}>
              {t.nav.quickstart} →
            </Link>
          </li>
          <li>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer">
              {t.nav.github}{stars ? ` · ${stars}` : ""}
            </a>
          </li>
          <li>
            <span className="label" style={{ display: "block", marginBottom: 10 }}>
              {t.nav.language}
            </span>
            <span className="lang-inline">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={code === locale ? "on" : undefined}
                  aria-pressed={code === locale}
                  onClick={() => switchLocale(code)}
                >
                  {LOCALE_NAMES[code]}
                </button>
              ))}
            </span>
          </li>
        </ul>
      </div>
    </header>
  );
}
