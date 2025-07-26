"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorPage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">支持赞助</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          如果 GPT-Load 对您有帮助，欢迎请作者喝杯咖啡 ☕️
        </p>
      </motion.div>

      {/* Payment QR Codes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* WeChat Pay */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                微信
              </h3>
              <p className="text-sm text-gray-600">扫描二维码进行赞助</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <Image
                  src="/sk-wx.jpg"
                  alt="微信支付二维码"
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-green-600 rounded-lg p-3">
              <p className="text-sm text-white font-medium">微信扫一扫</p>
            </div>
          </motion.div>

          {/* Alipay */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                支付宝
              </h3>
              <p className="text-sm text-gray-600">扫描二维码进行赞助</p>
            </div>
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <Image
                  src="/sk-zfb.jpg"
                  alt="支付宝付款二维码"
                  width={280}
                  height={280}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="bg-blue-600 rounded-lg p-3">
              <p className="text-sm text-white font-medium">支付宝扫一扫</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Online Sponsor Platforms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <Heart className="h-6 w-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">在线赞助平台</h2>
        </div>

        <div className="flex justify-center">
          <motion.a
            href="https://afdian.com/a/gpt-load"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="text-2xl">💖</span>
            <div className="text-left">
              <div className="font-bold">爱发电赞助</div>
            </div>
          </motion.a>
        </div>

        <p className="text-center text-gray-600 mt-4 text-sm">
          通过爱发电平台，您可以选择一次性赞助或定期支持项目发展
        </p>
      </motion.div>

      {/* Thank You Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-6 w-6 text-red-500 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-900">感谢您的支持</h2>
        </div>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          您的每一份支持都是我们持续改进 GPT-Load
          的动力。无论金额大小，我们都深表感谢！
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
            💝 每份心意都珍贵
          </span>
          <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
            🚀 让项目更上一层楼
          </span>
          <span className="bg-white px-4 py-2 rounded-full border border-gray-200">
            ❤️ 开源精神万岁
          </span>
        </div>
      </motion.div>

      {/* Alternative Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          其他支持方式
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/tbphp/gpt-load"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            ⭐ GitHub Star
          </a>
          <a
            href="https://github.com/tbphp/gpt-load/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            🐛 反馈问题
          </a>
          <a
            href="https://github.com/tbphp/gpt-load/pulls"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            🔧 贡献代码
          </a>
        </div>
      </motion.div>
    </div>
  );
}
