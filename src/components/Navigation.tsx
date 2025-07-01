"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, Zap } from "lucide-react";
import { cn } from "../lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">GPT-Load</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  const navItems = [
    { href: "/", label: "首页" },
    { href: "/docs", label: "文档" },
    { href: "/features", label: "功能特性" },
    { href: "/examples", label: "使用示例" },
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
              <Zap className="h-8 w-8 text-blue-600" />
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
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://github.com/tbphp/gpt-load"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              <div className="py-4 space-y-4 border-t border-gray-200">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://github.com/tbphp/gpt-load"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
