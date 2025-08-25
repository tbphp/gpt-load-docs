"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  locales,
  localeNames,
  defaultLocale,
  type Locale,
} from "@/i18n/config";

const LanguageSwitcher = () => {
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("languageSwitcher");

  useEffect(() => {
    setMounted(true);
    // 从localStorage读取语言偏好
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setCurrentLocale(savedLocale);
    } else {
      // 检测浏览器语言
      const browserLocale = navigator.language.split("-")[0] as Locale;
      if (locales.includes(browserLocale)) {
        setCurrentLocale(browserLocale);
      }
    }
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    setCurrentLocale(locale);
    localStorage.setItem("locale", locale);

    // 设置cookie用于服务端
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;

    setIsOpen(false);

    // 刷新页面以应用新语言
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="relative">
        <button className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
          <Languages className="w-4 h-4" />
          <span>{t("loading")}</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
      >
        <Languages className="w-4 h-4" />
        <span>{localeNames[currentLocale]}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* 点击外部关闭的遮罩 */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-label={t("changeLanguage")}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]"
            >
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors first:rounded-t-md last:rounded-b-md ${
                    currentLocale === locale
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700"
                  }`}
                >
                  {localeNames[locale]}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
