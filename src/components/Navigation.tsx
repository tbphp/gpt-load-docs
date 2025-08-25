"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, Heart } from "lucide-react";
import { cn, formatStars } from "../lib/utils";
import { useGitHubStars } from "@/context/GitHubStarsContext";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { stars } = useGitHubStars();
  const t = useTranslations("navigation");

  useEffect(() => {
    // 初始化时检查滚动位置
    const initialScrollPosition = window.scrollY > 10;
    setIsScrolled(initialScrollPosition);
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 防止服务端渲染和客户端渲染不一致的问题
  // 在挂载前始终显示有背景的状态，避免闪烁
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">GPT-Load</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/docs", label: t("docs") },
    { href: "/docs/sponsor", label: t("sponsor"), icon: Heart },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <Image
                src="/logo.png"
                alt={t("logoAlt")}
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <motion.div
                className="absolute inset-0 bg-blue-400 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">GPT-Load</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors duration-200 font-medium flex items-center space-x-1",
                  item.href === "/docs/sponsor"
                    ? "text-red-600 hover:text-red-700"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="https://github.com/tbphp/gpt-load"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span>{t("github")}</span>
              {stars !== null && (
                <div className="ml-2 flex items-center space-x-1 rounded-md bg-gray-700 px-2 py-1 text-xs">
                  <span>⭐</span>
                  <span>{formatStars(stars)}</span>
                </div>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={t("toggleMenu")}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-3 border-t border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-2 transition-colors duration-200 font-medium py-2 px-2",
                      item.href === "/docs/sponsor"
                        ? "text-red-600 hover:text-red-700"
                        : "text-gray-700 hover:text-blue-600"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.label}</span>
                  </Link>
                ))}
                <div className="pt-2">
                  <Link
                    href="https://github.com/tbphp/gpt-load"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Github className="h-4 w-4" />
                    <span>{t("github")}</span>
                    {stars !== null && (
                      <div className="ml-2 flex items-center space-x-1 rounded-md bg-gray-700 px-2 py-1 text-xs">
                        <span>⭐</span>
                        <span>{formatStars(stars)}</span>
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
