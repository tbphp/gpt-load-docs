"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TopLoadingProps {
  isLoading: boolean;
}

const TopLoading = ({ isLoading }: TopLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingId, setLoadingId] = useState(0); // 用于强制重置动画
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 清理之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isLoading) {
      // 新的loading开始，强制重置
      setLoadingId(prev => prev + 1); // 改变key强制重新渲染
      setIsVisible(true);
      setProgress(0);
      
      // 立即设置为1%，避免0的闪烁
      setProgress(1);
      
      // 快速到达30%
      const quickStart = setTimeout(() => {
        setProgress(30);
      }, 100);
      
      // 缓慢增长到70%
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 70) return prev;
          return prev + Math.random() * 8 + 2; // 2-10的随机增长
        });
      }, 200);

      return () => {
        clearTimeout(quickStart);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    } else {
      // 完成加载时快速到100%
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      setProgress(100);
      
      // 延迟隐藏，确保用户能看到完成状态
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        setProgress(0); // 隐藏后重置进度
      }, 500);
    }
  }, [isLoading]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={`loading-${loadingId}`} // 使用key强制重新渲染
          className="fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            key={`progress-${loadingId}`} // 进度条也使用独立key
            className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{
              duration: progress === 100 ? 0.3 : 0.5,
              ease: progress === 100 ? "easeOut" : "easeInOut"
            }}
            style={{
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
            }}
          />
          
          {/* 发光效果 */}
          <motion.div
            key={`glow-${loadingId}`} // 发光效果也使用独立key
            className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/50 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: `${progress - 100}%` }}
            transition={{
              duration: progress === 100 ? 0.3 : 0.8,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopLoading;