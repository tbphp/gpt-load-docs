"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, BookOpen, Download, Heart } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("cta");
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-violet-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              {t("title")}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <Link
                href="/docs/deployment/standalone"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{t("getStarted")}</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>

              <Link
                href="/docs"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{t("learnMore")}</span>
              </Link>

              <a
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>GitHub</span>
              </a>

              <Link
                href="/docs/sponsor"
                className="inline-flex items-center space-x-2 bg-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center"
              >
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>{t("sponsor")}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
