"use client";

import { ReactNode, useState } from "react";
import DocsNavigation from "../../components/DocsNavigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function DocsLayout({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile menu button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <>
                <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">{t("nav.close")}</span>
              </>
            ) : (
              <>
                <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300">{t("nav.menu")}</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                <DocsNavigation
                  onItemClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              <DocsNavigation />
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 max-w-none">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
