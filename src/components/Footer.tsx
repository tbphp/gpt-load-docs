"use client";

import Link from "next/link";
import { Github, Twitter, Mail, Heart, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "功能特性", href: "/features" },
      { name: "使用文档", href: "/docs" },
      { name: "API 参考", href: "/docs/api" },
      { name: "更新日志", href: "/changelog" },
    ],
    community: [
      { name: "GitHub", href: "https://github.com/tbphp/gpt-load" },
      { name: "问题反馈", href: "https://github.com/tbphp/gpt-load/issues" },
      { name: "讨论区", href: "https://github.com/tbphp/gpt-load/discussions" },
      {
        name: "贡献指南",
        href: "https://github.com/tbphp/gpt-load/blob/main/CONTRIBUTING.md",
      },
    ],
    resources: [
      { name: "使用示例", href: "/examples" },
      { name: "部署指南", href: "/docs/deployment" },
      { name: "性能优化", href: "/docs/performance" },
      { name: "故障排除", href: "/docs/troubleshooting" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">GPT-Load</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              高性能的 OpenAI 兼容 API 代理服务器，为您的 AI 应用提供稳定可靠的
              API 访问服务。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/tbphp/gpt-load"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/tbphp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:support@gpt-load.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">社区</h3>
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
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GPT-Load. 使用{" "}
              <Link
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                MIT 协议
              </Link>{" "}
              开源发布。
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>by</span>
              <Link
                href="https://github.com/tbphp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                tbphp
              </Link>
            </div>
          </div>
        </div>

        {/* Sponsor section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            CDN 加速和安全防护由腾讯 EdgeOne 赞助支持
          </p>
          <Link
            href="https://edgeone.ai/?from=github"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="bg-white rounded-lg px-6 py-3 inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200">
              <span className="text-gray-900 font-semibold">EdgeOne</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
