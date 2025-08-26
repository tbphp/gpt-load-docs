"use client";

import { useSeo } from "@/hooks/useSeo";

export default function HomeSeoHandler() {
  // 为首页处理SEO更新
  useSeo("/");
  
  return null; // 这个组件不渲染任何内容
}