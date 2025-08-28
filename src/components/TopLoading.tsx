"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface TopLoadingProps {
  isLoading: boolean;
}

const TopLoading = ({ isLoading }: TopLoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingId, setLoadingId] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);

  // 平滑的进度曲线函数
  const calculateProgress = (elapsed: number): number => {
    // 使用分段函数创建更自然的进度曲线
    if (elapsed < 200) {
      // 前200ms快速到30%
      return Math.min(30, (elapsed / 200) * 30);
    } else if (elapsed < 800) {
      // 200-800ms缓慢增长到80%
      const t = (elapsed - 200) / 600;
      const easeOut = 1 - Math.pow(1 - t, 3); // ease-out cubic
      return 30 + easeOut * 50;
    } else {
      // 800ms后非常缓慢增长到90%
      const t = Math.min((elapsed - 800) / 2000, 1);
      const easeOut = 1 - Math.pow(1 - t, 4); // 更缓慢的增长
      return 80 + easeOut * 10;
    }
  };

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
      setLoadingId(prev => prev + 1);
      setIsVisible(true);
      setProgress(0);
      startTimeRef.current = Date.now();
      
      // 立即开始进度更新
      setProgress(1);
      
      // 使用平滑更新机制
      intervalRef.current = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        const newProgress = calculateProgress(elapsed);
        setProgress(newProgress);
        
        // 如果达到90%停止自动增长,等待完成信号
        if (newProgress >= 90) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, 50); // 更频繁的更新，更平滑

      return () => {
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
        setProgress(0);
      }, 400); // 稍微缩短完成显示时间
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
          key={`loading-${loadingId}`}
          className="fixed top-0 left-0 right-0 z-[9999] h-[2px] bg-gray-50/90"
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
        >
          <motion.div
            key={`progress-${loadingId}`}
            className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 origin-left relative overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{
              duration: progress === 100 ? 0.2 : 0.3,
              ease: progress === 100 ? [0.4, 0, 0.2, 1] : [0.25, 0.1, 0.25, 1]
            }}
            style={{
              borderRadius: "0 1px 1px 0",
              boxShadow: "0 0 12px rgba(59, 130, 246, 0.35), 0 0 24px rgba(59, 130, 246, 0.08)"
            }}
          />
          
          {/* 优化的发光效果 */}
          <motion.div
            key={`glow-${loadingId}`}
            className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white/50 via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: `${progress - 100}%` }}
            transition={{
              duration: progress === 100 ? 0.2 : 0.65,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            style={{
              borderRadius: "0 1px 1px 0"
            }}
          />

          {/* 简化的脉冲效果 */}
          <motion.div
            key={`pulse-${loadingId}`}
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-blue-400/15 to-cyan-400/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              borderRadius: "0 1px 1px 0"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopLoading;