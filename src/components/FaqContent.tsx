"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";
import { useSeo } from "@/hooks/useSeo";
import { 
  ChevronDown,
  Search,
  HelpCircle,
  Settings,
  Shield,
  Users,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function FaqContent() {
  const { t, tObjectArray } = useTranslation();
  useSeo("/docs/faq");

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const faqCategories = tObjectArray<{
    id: string;
    title: string;
    icon: string;
    description: string;
  }>("faq.categories");

  const faqItems = tObjectArray<{
    id: string;
    category: string;
    question: string;
    answer: string;
    tags: string[];
  }>("faq.items");

  const getIcon = (iconName: string) => {
    const icons = {
      Settings,
      Shield,
      Users,
      AlertCircle,
      HelpCircle,
    };
    return icons[iconName as keyof typeof icons] || HelpCircle;
  };

  const filteredFaqs = faqItems.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = !activeCategory || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* 搜索框 */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t("faq.searchPlaceholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                !activeCategory
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              )}
            >
              {t("faq.allCategories")}
            </button>
            {faqCategories.map((category) => {
              const IconComponent = getIcon(category.icon);
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    activeCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  )}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ 列表 */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("faq.noResults")}
              </h3>
              <p className="text-gray-500">
                {t("faq.noResultsDescription")}
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openFaqs.includes(index);
              return (
                <motion.div
                  key={`${faq.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                  >
                    <h3 className="text-lg font-medium text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-gray-500 transition-transform flex-shrink-0",
                        isOpen ? "transform rotate-180" : ""
                      )}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pt-0">
                          <div className="prose prose-sm max-w-none text-gray-600">
                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                          </div>
                          {faq.tags.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* 底部联系信息 */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("faq.needMoreHelp")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("faq.needMoreHelpDescription")}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/tbphp/gpt-load/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("faq.contactSupport")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}