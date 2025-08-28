"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export const useRouterLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const startLoading = useCallback(() => {
    // 强制重置loading状态，确保新的loading从头开始
    setIsLoading(false);
    // 使用setTimeout确保状态更新生效
    setTimeout(() => {
      setIsLoading(true);
    }, 10);
  }, []);

  const stopLoading = useCallback(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    // 监听所有链接点击事件
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);
        
        // 检查是否是内部链接
        if (url.origin === currentUrl.origin) {
          // 检查是否不是外部打开
          if (!link.target || link.target === '_self') {
            // 检查是否是不同页面或参数变化
            if (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search) {
              startLoading();
            }
          }
        }
      }
    };

    // 监听表单提交 (用于语言切换表单)
    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      if (form && form.method && form.method.toLowerCase() === 'post') {
        startLoading();
      }
    };

    // 监听浏览器前进后退
    const handlePopState = () => {
      startLoading();
    };

    // 添加事件监听
    document.addEventListener('click', handleLinkClick, true); // 使用捕获阶段确保优先执行
    document.addEventListener('submit', handleFormSubmit);
    window.addEventListener('popstate', handlePopState);

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
      }, 1200); // 最大显示1.2秒，避免无限loading

      return () => clearTimeout(timer);
    }
  }, [pathname, isLoading]);

  // 页面加载完成后停止loading
  useEffect(() => {
    stopLoading();
  }, [pathname, stopLoading]);

  return { isLoading, startLoading, stopLoading };
};