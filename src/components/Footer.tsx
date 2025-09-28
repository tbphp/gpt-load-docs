"use client";

import Link from "next/link";
import { Github, Mail, Heart, Zap, MessageCircle } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: t("footer.links.docs"), href: "/docs" },
      { name: t("footer.links.changelog"), href: "https://github.com/tbphp/gpt-load/releases" },
      { name: t("footer.links.sponsor"), href: "/docs/sponsor" },
    ],
    community: [
      { name: t("footer.links.github"), href: "https://github.com/tbphp/gpt-load" },
      { name: t("footer.links.issues"), href: "https://github.com/tbphp/gpt-load/issues" },
      { name: t("footer.links.telegram"), href: "https://t.me/+GHpy5SwEllg3MTUx" },
    ],
    resources: [
      { name: t("footer.links.standalone"), href: "/docs/deployment/standalone" },
      { name: t("footer.links.cluster"), href: "/docs/deployment/cluster" },
    ],
    friendlyLinks: [
      { name: "New API", href: "https://www.newapi.ai/" },
    ],
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2 sm:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 dark:text-blue-300" />
              <span className="text-lg sm:text-xl font-bold">GPT-Load</span>
            </Link>
            <p className="text-gray-400 dark:text-gray-500 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://t.me/+GHpy5SwEllg3MTUx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="mailto:tangb7420@gmail.com"
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.product")}
            </h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.community")}
            </h3>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Friendly links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {t("footer.friendlyLinks")}
            </h3>
            <ul className="space-y-2">
              {links.friendlyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
              © {currentYear} GPT-Load. {t("footer.copyright")}{" "}
              <Link
                href="https://github.com/tbphp/gpt-load/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200"
              >
                {t("footer.license")}
              </Link>{" "}
              {t("footer.openSource")}。
            </div>
            <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
              <span>Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 dark:text-red-400" />
              <span>by</span>
              <Link
                href="https://github.com/tbphp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors duration-200"
              >
                tbphp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
