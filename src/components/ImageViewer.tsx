"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

interface ImageViewerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
}

export default function ImageViewer({
  src,
  alt,
  width = 300,
  height = 400,
  className = "",
  containerClassName = "",
}: ImageViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();

  // 键盘事件监听
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsExpanded(false);
    }
  };

  // 监听键盘事件和防止背景滚动
  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isExpanded]);

  const ImageModal = () => {
    if (!isExpanded) return null;

    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-8"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(30,30,30,0.3) 50%, rgba(0,0,0,0.2) 100%)",
          backdropFilter: "blur(8px)",
        }}
        onClick={() => setIsExpanded(false)}
      >
        {/* 固定大小的模态框容器 */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-lg max-w-5xl max-h-full w-full h-full flex flex-col">
          {/* 图片容器 - 可滚动但不显示滚动条 */}
          <div
            className="flex-1 overflow-auto scrollbar-hide p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-h-full flex items-start justify-center">
              <Image
                src={src}
                alt={alt}
                width={1000}
                height={800}
                className="max-w-none h-auto object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-white bg-black/60 backdrop-blur-sm rounded-full p-3 hover:bg-black/80 transition-all shadow-lg border border-white/20"
            title={t("imageViewer.closeButton")}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {t("imageViewer.instructions")}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`text-center ${containerClassName}`}>
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsExpanded(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-lg shadow-md transition-transform group-hover:scale-105 origin-bottom ${className}`}
          />
        </div>
        <p className="text-gray-500 text-sm mt-2">{t("imageViewer.clickToEnlarge")}</p>
      </div>
      <ImageModal />
    </>
  );
}
