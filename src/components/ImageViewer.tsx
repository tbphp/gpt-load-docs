"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // 打开后接管焦点与滚动；关闭时恢复到触发图片，避免键盘用户丢失当前位置。
  useEffect(() => {
    if (!isExpanded) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => closeRef.current?.focus());
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsExpanded(false);
        return;
      }
      if (event.key !== "Tab") return;

      const dialog = dialogRef.current;
      if (!dialog) return;
      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')
      ).filter((element) => !element.hasAttribute("hidden"));
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
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
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsExpanded(false);
        }}
      >
        {/* 固定大小的模态框容器 */}
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="relative bg-white/10 backdrop-blur-sm rounded-lg max-w-5xl max-h-full w-full h-full flex flex-col"
        >
          {/* 图片容器 - 可滚动但不显示滚动条 */}
          <div className="flex-1 overflow-auto scrollbar-hide p-4">
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
            ref={closeRef}
            type="button"
            onClick={() => setIsExpanded(false)}
            className="absolute top-2 right-2 text-white bg-black/60 backdrop-blur-sm rounded-full p-3 hover:bg-black/80 transition-all shadow-lg border border-white/20"
            title={t("imageViewer.closeButton")}
            aria-label={t("imageViewer.closeButton")}
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
        <button
          ref={triggerRef}
          type="button"
          className="relative cursor-zoom-in group border-0 bg-transparent p-0"
          onClick={() => setIsExpanded(true)}
          aria-label={`${t("imageViewer.clickToEnlarge")}: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-lg shadow-md transition-transform group-hover:scale-105 origin-bottom ${className}`}
          />
        </button>
        <p className="text-gray-500 text-sm mt-2">{t("imageViewer.clickToEnlarge")}</p>
      </div>
      <ImageModal />
    </>
  );
}
