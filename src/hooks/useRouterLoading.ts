"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";

export const useRouterLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const lastClickTimeRef = useRef<number>(0);

  const startLoading = useCallback(() => {
    // 防抖机制：避免极快速点击造成的性能问题
    const now = Date.now();
    if (now - lastClickTimeRef.current < 50) {
      return; // 50ms内的点击忽略
    }
    lastClickTimeRef.current = now;

    // 清除之前的防抖定时器
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    // 强制重置loading状态，确保新loading从头开始
    setIsLoading(false);
    
    // 使用微任务确保状态更新生效
    debounceRef.current = setTimeout(() => {
      setIsLoading(true);
    }, 8);
  }, []);

  const stopLoading = useCallback(() => {
    // 清除防抖定时器
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  }, []);

  useEffect(() => {
    // 监听所有链接点击事件
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        try {
          const url = new URL(link.href);
          const currentUrl = new URL(window.location.href);
          
          // 检查是否是内部链接
          if (url.origin === currentUrl.origin) {
            // 检查是否不是外部打开
            if (!link.target || link.target === '_self') {
              // 更精确的触发判断：检查是否是不同页面或参数变化
              if (url.pathname !== currentUrl.pathname || 
                  url.search !== currentUrl.search ||
                  url.hash !== currentUrl.hash) {
                startLoading();
              }
            }
          }
        } catch (error) {
          // URL解析失败，忽略this click
          console.warn('Failed to parse URL:', link.href, error);
        }
      }
    };

    // 监听表单提交 (用于语言切换表单)
    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form && form.action) {
        try {
          const url = new URL(form.action, window.location.href);
          const currentUrl = new URL(window.location.href);
          
          if (url.origin === currentUrl.origin &&
              (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search)) {
            startLoading();
          }
        } catch (error) {
          // URL解析失败，按原来的逻辑处理
          console.warn('Failed to parse form action:', form.action, error);
          if (form.method && form.method.toLowerCase() === 'post') {
            startLoading();
          }
        }
      }
    };

    // 监听浏览器前进后退
    const handlePopState = () => {
      startLoading();
    };

    // 使用捕获阶段和合理的防抖
    document.addEventListener('click', handleLinkClick, { 
      capture: true, 
      passive: true 
    });
    document.addEventListener('submit', handleFormSubmit, { passive: false });
    window.addEventListener('popstate', handlePopState, { passive: true });

    return () => {
      document.removeEventListener('click', handleLinkClick, true);
      document.removeEventListener('submit', handleFormSubmit);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [startLoading]);

  // 监听路由变化，路由变化完成后隐藏loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // 减少最大显示时间到1秒

      return () => clearTimeout(timer);
    }
  }, [pathname, isLoading]);

  // 页面加载完成后停止loading
  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  // 清理防抖定时器
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  return { isLoading, startLoading, stopLoading };
};