"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * 全局图片查看器。
 *
 * 不做注册机制：打开时直接扫描 DOM 里所有 [data-lb-src]，顺序天然与页面一致，
 * 组件增删也不需要同步任何列表。
 *
 * 交互：
 *   点图片打开 · Esc / 点关闭键退出 · ← → 切换同页图片
 *   滚轮或 + − 缩放，双击在「适应窗口」与 100% 之间切换
 *   放大后按住拖动平移
 *
 * 刻意没有「全屏」按钮：查看器本身已占满视口，再进浏览器全屏只是少了个地址栏，
 * 对看清截图毫无帮助。真正有用的是缩放。
 */

type Shot = { src: string; alt: string; caption: string; note: string };

const MIN = 0.2;
const MAX = 5;
/** + − 按钮的档位，滚轮则是连续的 */
const STOPS = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4];

function collect(): Shot[] {
  if (typeof document === "undefined") return [];
  return Array.from(document.querySelectorAll<HTMLElement>("[data-lb-src]")).map((el) => ({
    src: el.dataset.lbSrc ?? "",
    alt: el.dataset.lbAlt ?? "",
    caption: el.dataset.lbCaption ?? "",
    note: el.dataset.lbNote ?? "",
  }));
}

export default function Lightbox() {
  const [shots, setShots] = useState<Shot[]>([]);
  const [index, setIndex] = useState(-1);
  /** null = 适应窗口；数字 = 相对原始尺寸的倍率 */
  const [zoom, setZoom] = useState<number | null>(null);
  const [natural, setNatural] = useState({ w: 0, h: 0 });
  const [fitScale, setFitScale] = useState(1);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const drag = useRef({ on: false, x: 0, y: 0, left: 0, top: 0 });

  const open = index >= 0 && index < shots.length;
  const current = open ? shots[index] : null;
  /** 界面上显示的百分比：适应窗口时显示实际缩放比 */
  const shownPct = Math.round((zoom ?? fitScale) * 100);

  const close = useCallback(() => {
    setIndex(-1);
    setZoom(null);
  }, []);

  const step = useCallback(
    (delta: number) => {
      setZoom(null);
      setIndex((i) => (shots.length === 0 ? i : (i + delta + shots.length) % shots.length));
    },
    [shots.length]
  );

  /** 以视口中心为锚点缩放，避免放大后跑到画面外 */
  const applyZoom = useCallback(
    (next: number | null) => {
      const stage = stageRef.current;
      if (!stage || next === null) {
        setZoom(next);
        return;
      }
      const clamped = Math.min(MAX, Math.max(MIN, next));
      const prev = zoom ?? fitScale;
      const ratio = clamped / prev;
      const cx = stage.scrollLeft + stage.clientWidth / 2;
      const cy = stage.scrollTop + stage.clientHeight / 2;
      setZoom(clamped);
      requestAnimationFrame(() => {
        stage.scrollLeft = cx * ratio - stage.clientWidth / 2;
        stage.scrollTop = cy * ratio - stage.clientHeight / 2;
      });
    },
    [zoom, fitScale]
  );

  const nudge = (dir: 1 | -1) => {
    const cur = zoom ?? fitScale;
    const next =
      dir > 0
        ? STOPS.find((s) => s > cur + 0.001) ?? MAX
        : [...STOPS].reverse().find((s) => s < cur - 0.001) ?? MIN;
    applyZoom(next);
  };

  // 页面任意图片被点击时打开
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-lb-src]");
      if (!trigger) return;
      e.preventDefault();
      const list = collect();
      const at = list.findIndex((s) => s.src === trigger.dataset.lbSrc);
      setShots(list);
      setIndex(at < 0 ? 0 : at);
      setZoom(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // dialog 的 showModal 自带焦点陷阱与 Esc
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
      else if (e.key === "+" || e.key === "=") { e.preventDefault(); nudge(1); }
      else if (e.key === "-") { e.preventDefault(); nudge(-1); }
      else if (e.key === "0") { e.preventDefault(); setZoom(null); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  // 换图后回到适应窗口并重置滚动
  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0, left: 0 });
  }, [index]);

  // 算出「适应窗口」时的真实缩放比，用于百分比显示与缩放起点
  const measure = useCallback(() => {
    const img = imgRef.current;
    const stage = stageRef.current;
    if (!img || !stage || !img.naturalWidth) return;
    setNatural({ w: img.naturalWidth, h: img.naturalHeight });
    const pad = 52;
    const scale = Math.min(
      (stage.clientWidth - pad) / img.naturalWidth,
      (stage.clientHeight - pad) / img.naturalHeight,
      1
    );
    setFitScale(scale > 0 ? scale : 1);
  }, []);

  useEffect(() => {
    if (!open) return;
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [open, index, measure]);

  // 滚轮缩放
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !open) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const cur = zoom ?? fitScale;
      applyZoom(cur * (e.deltaY < 0 ? 1.12 : 1 / 1.12));
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [open, zoom, fitScale, applyZoom]);

  // 放大后按住拖动平移，比拖滚动条顺手
  const onPointerDown = (e: React.PointerEvent) => {
    const stage = stageRef.current;
    if (!stage) return;
    drag.current = {
      on: true,
      x: e.clientX,
      y: e.clientY,
      left: stage.scrollLeft,
      top: stage.scrollTop,
    };
    stage.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const stage = stageRef.current;
    if (!stage || !drag.current.on) return;
    stage.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
    stage.scrollTop = drag.current.top - (e.clientY - drag.current.y);
  };
  const endDrag = (e: React.PointerEvent) => {
    drag.current.on = false;
    stageRef.current?.releasePointerCapture(e.pointerId);
  };

  const zoomed = zoom !== null;
  const imgStyle = zoomed && natural.w ? { width: natural.w * zoom, maxWidth: "none", maxHeight: "none" } : undefined;

  return (
    <dialog
      ref={dialogRef}
      className="lb"
      onClose={close}
      onCancel={close}
      aria-label={current?.caption || "图片查看"}
    >
      {current ? (
        <div className="lb-in">
          <div className="lb-bar">
            <span className="lb-cap">
              {current.caption}
              {current.note ? <span className="lb-note">{current.note}</span> : null}
            </span>

            <div className="lb-acts">
              {shots.length > 1 ? (
                <span className="lb-count">
                  {index + 1} / {shots.length}
                </span>
              ) : null}

              <div className="lb-zoom">
                <button type="button" onClick={() => nudge(-1)} aria-label="缩小">−</button>
                <span className="pct">{shownPct}%</span>
                <button type="button" onClick={() => nudge(1)} aria-label="放大">+</button>
              </div>

              <button type="button" onClick={() => setZoom(null)} disabled={!zoomed}>
                适应窗口
              </button>
              <button type="button" onClick={close} aria-label="关闭">✕</button>
            </div>
          </div>

          <div
            className={`lb-stage${zoomed ? " zoomed" : ""}`}
            ref={stageRef}
            onPointerDown={zoomed ? onPointerDown : undefined}
            onPointerMove={zoomed ? onPointerMove : undefined}
            onPointerUp={zoomed ? endDrag : undefined}
            onPointerCancel={zoomed ? endDrag : undefined}
          >
            {shots.length > 1 ? (
              <button className="lb-nav prev" type="button" onClick={() => step(-1)} aria-label="上一张">
                ←
              </button>
            ) : null}

            {/* 原图直出，不走优化管线——查看器要的就是原始像素 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={current.src}
              alt={current.alt}
              style={imgStyle}
              onLoad={measure}
              onDoubleClick={() => applyZoom(zoomed ? null : 1)}
              draggable={false}
            />

            {shots.length > 1 ? (
              <button className="lb-nav next" type="button" onClick={() => step(1)} aria-label="下一张">
                →
              </button>
            ) : null}
          </div>

          <div className="lb-tip">
            滚轮缩放 · 双击切换 100% · 放大后可拖动 · ← → 切换 · Esc 关闭
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
