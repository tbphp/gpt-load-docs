"use client";

import { ChevronLeft, ChevronRight, Maximize2, Minus, Plus, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";

type Shot = {
  src: string;
  alt: string;
  caption: string;
  note: string;
};

type LoadState = "loading" | "ready" | "error";

const MAX_ZOOM = 3;
const ZOOM_FACTOR = 1.25;
const FIT_EPSILON = 1.01;

function readShot(element: HTMLElement): Shot {
  return {
    src: element.dataset.lbSrc ?? "",
    alt: element.dataset.lbAlt ?? "",
    caption: element.dataset.lbCaption ?? "",
    note: element.dataset.lbNote ?? "",
  };
}

function collect(trigger: HTMLElement) {
  const triggers = Array.from(document.querySelectorAll<HTMLElement>("[data-lb-src]"));
  return {
    shots: triggers.map(readShot),
    index: Math.max(0, triggers.indexOf(trigger)),
  };
}

/**
 * 全站唯一的图片查看器。
 *
 * Figure 仍然保持 Server Component；查看器打开时按页面顺序收集触发器，
 * 因而不需要额外注册图片。交互集中在底部工具栏：
 * 点击图片看原始尺寸，按钮 / 快捷键缩放，放大后滚动或拖动查看。
 */
export default function Lightbox() {
  const { t } = useLocale();
  const titleId = useId();
  const helpId = useId();

  const [shots, setShots] = useState<Shot[]>([]);
  const [index, setIndex] = useState(-1);
  /** null 表示适应窗口；数字表示相对原始像素的倍率。 */
  const [zoom, setZoom] = useState<number | null>(null);
  const [natural, setNatural] = useState({ width: 0, height: 0 });
  const [fitScale, setFitScale] = useState(1);
  const [loadState, setLoadState] = useState<LoadState>("loading");

  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ignoreClickRef = useRef(false);
  const dragRef = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    x: 0,
    y: 0,
    left: 0,
    top: 0,
  });

  const open = index >= 0 && index < shots.length;
  const current = open ? shots[index] : null;
  const zoomed = zoom !== null;
  const currentScale = zoom ?? fitScale;
  const shownPercentage = Math.round(currentScale * 100);
  const canZoomIn = currentScale < MAX_ZOOM - 0.001;

  const close = useCallback(() => {
    setIndex(-1);
    setZoom(null);
  }, []);

  const step = useCallback(
    (delta: number) => {
      if (shots.length < 2) return;
      setIndex((currentIndex) => (currentIndex + delta + shots.length) % shots.length);
    },
    [shots.length]
  );

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-lb-src]");
      if (!trigger) return;

      event.preventDefault();
      const collected = collect(trigger);
      setShots(collected.shots);
      setIndex(collected.index);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setZoom(null);
    setNatural({ width: 0, height: 0 });
    setLoadState("loading");
    stageRef.current?.scrollTo({ top: 0, left: 0 });
  }, [index, open]);

  const measure = useCallback(() => {
    const image = imageRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!image || !stage || !canvas || !image.naturalWidth) return;

    const canvasStyle = window.getComputedStyle(canvas);
    const horizontalPadding =
      (Number.parseFloat(canvasStyle.paddingLeft) || 0) +
      (Number.parseFloat(canvasStyle.paddingRight) || 0);
    const verticalPadding =
      (Number.parseFloat(canvasStyle.paddingTop) || 0) +
      (Number.parseFloat(canvasStyle.paddingBottom) || 0);
    const availableWidth = Math.max(1, stage.clientWidth - horizontalPadding);
    const availableHeight = Math.max(1, stage.clientHeight - verticalPadding);
    const nextFitScale = Math.min(
      availableWidth / image.naturalWidth,
      availableHeight / image.naturalHeight,
      1
    );

    setNatural((previous) =>
      previous.width === image.naturalWidth && previous.height === image.naturalHeight
        ? previous
        : { width: image.naturalWidth, height: image.naturalHeight }
    );
    setFitScale((previous) =>
      Math.abs(previous - nextFitScale) < 0.0001 ? previous : nextFitScale
    );
    setZoom((previous) =>
      previous !== null && previous <= nextFitScale * FIT_EPSILON ? null : previous
    );
  }, []);

  useEffect(() => {
    if (!open) return;

    const stage = stageRef.current;
    if (!stage) return;

    const frame = requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(stage);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [index, measure, open]);

  const applyZoom = useCallback(
    (requested: number | null) => {
      const stage = stageRef.current;
      if (!stage) return;

      const centerX = (stage.scrollLeft + stage.clientWidth / 2) / Math.max(stage.scrollWidth, 1);
      const centerY = (stage.scrollTop + stage.clientHeight / 2) / Math.max(stage.scrollHeight, 1);
      const next =
        requested === null || requested <= fitScale * FIT_EPSILON
          ? null
          : Math.min(MAX_ZOOM, requested);

      setZoom(next);

      requestAnimationFrame(() => {
        if (next === null) {
          stage.scrollTo({ top: 0, left: 0 });
          return;
        }

        stage.scrollTo({
          left: centerX * stage.scrollWidth - stage.clientWidth / 2,
          top: centerY * stage.scrollHeight - stage.clientHeight / 2,
        });
      });
    },
    [fitScale]
  );

  const resetZoom = useCallback(() => applyZoom(null), [applyZoom]);

  const nudge = useCallback(
    (direction: 1 | -1) => {
      const next =
        direction > 0 ? currentScale * ZOOM_FACTOR : currentScale / ZOOM_FACTOR;
      applyZoom(next);
    },
    [applyZoom, currentScale]
  );

  const showActualSize = useCallback(() => {
    const next = fitScale < 0.95 ? 1 : Math.min(MAX_ZOOM, fitScale * 1.75);
    applyZoom(next);
  }, [applyZoom, fitScale]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && shots.length > 1) {
        event.preventDefault();
        step(1);
      } else if (event.key === "ArrowLeft" && shots.length > 1) {
        event.preventDefault();
        step(-1);
      } else if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        nudge(1);
      } else if (event.key === "-") {
        event.preventDefault();
        nudge(-1);
      } else if (event.key === "0") {
        event.preventDefault();
        resetZoom();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [nudge, open, resetZoom, shots.length, step]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !open) return;

    const onWheel = (event: WheelEvent) => {
      // 普通滚轮保留给滚动查看；触控板捏合或 Ctrl/⌘ + 滚轮才缩放。
      if (!event.ctrlKey && !event.metaKey) return;
      event.preventDefault();
      applyZoom(currentScale * Math.exp(-event.deltaY * 0.002));
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [applyZoom, currentScale, open]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    if (!stage || !zoomed || event.button !== 0) return;

    dragRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      left: stage.scrollLeft,
      top: stage.scrollTop,
    };
    stage.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    const drag = dragRef.current;
    if (!stage || !drag.active || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.x;
    const deltaY = event.clientY - drag.y;
    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) drag.moved = true;
    stage.scrollLeft = drag.left - deltaX;
    stage.scrollTop = drag.top - deltaY;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    const drag = dragRef.current;
    if (!stage || !drag.active || drag.pointerId !== event.pointerId) return;

    ignoreClickRef.current = drag.moved;
    drag.active = false;
    if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
    requestAnimationFrame(() => {
      ignoreClickRef.current = false;
    });
  };

  const onStageClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (ignoreClickRef.current) return;
    if (event.target === stageRef.current || event.target === canvasRef.current) close();
  };

  const onImageClick = () => {
    if (!zoomed && loadState === "ready") showActualSize();
  };

  const imageStyle = natural.width
    ? {
        width: natural.width * currentScale,
        height: natural.height * currentScale,
        maxWidth: "none",
        maxHeight: "none",
      }
    : undefined;

  return (
    <dialog
      ref={dialogRef}
      className="lb"
      onClose={close}
      onCancel={close}
      aria-labelledby={titleId}
      aria-describedby={helpId}
    >
      {current ? (
        <div className="lb-in">
          <div className="lb-header">
            <div className="lb-heading">
              <h2 id={titleId}>{current.caption}</h2>
              {current.note ? <p>{current.note}</p> : null}
            </div>

            <div className="lb-header-actions">
              {shots.length > 1 ? (
                <span className="lb-count" aria-live="polite">
                  {index + 1} / {shots.length}
                </span>
              ) : null}
              <button
                type="button"
                className="lb-close"
                onClick={close}
                aria-label={t.common.close}
                title={t.common.close}
                autoFocus
              >
                <X size={19} strokeWidth={1.75} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lb-body">
            <div
              className={`lb-stage${zoomed ? " is-pannable" : ""}`}
              ref={stageRef}
              aria-busy={loadState === "loading"}
              onClick={onStageClick}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
            >
              <div className="lb-canvas" ref={canvasRef}>
                {/* 查看器需要原始像素，因此不经过 Next Image 优化管线。 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imageRef}
                  className="lb-image"
                  src={current.src}
                  alt={current.alt}
                  style={imageStyle}
                  data-state={loadState}
                  onLoad={() => {
                    measure();
                    setLoadState("ready");
                  }}
                  onError={() => setLoadState("error")}
                  onClick={onImageClick}
                  draggable={false}
                />
              </div>
            </div>

            {loadState !== "ready" ? (
              <div
                className={`lb-status${loadState === "error" ? " is-error" : ""}`}
                role={loadState === "error" ? "alert" : "status"}
              >
                {loadState === "error" ? t.common.imageLoadFailed : t.common.imageLoading}
              </div>
            ) : null}
          </div>

          <div className="lb-footer">
            <div className="lb-controls" role="toolbar" aria-label={t.common.imageViewer}>
              {shots.length > 1 ? (
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label={t.common.previousImage}
                  title={t.common.previousImage}
                >
                  <ChevronLeft size={20} strokeWidth={1.75} aria-hidden="true" />
                </button>
              ) : null}

              <button
                type="button"
                onClick={() => nudge(-1)}
                disabled={!zoomed}
                aria-label={t.common.zoomOut}
                title={t.common.zoomOut}
              >
                <Minus size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="lb-level"
                onClick={resetZoom}
                disabled={!zoomed}
                aria-label={t.common.fitWindow}
                title={t.common.fitWindow}
              >
                {zoomed ? (
                  `${shownPercentage}%`
                ) : (
                  <>
                    <Maximize2 size={15} strokeWidth={1.75} aria-hidden="true" />
                    <span>{t.common.fit}</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => nudge(1)}
                disabled={!canZoomIn}
                aria-label={t.common.zoomIn}
                title={t.common.zoomIn}
              >
                <Plus size={18} strokeWidth={1.75} aria-hidden="true" />
              </button>

              {shots.length > 1 ? (
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label={t.common.nextImage}
                  title={t.common.nextImage}
                >
                  <ChevronRight size={20} strokeWidth={1.75} aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>

          <p id={helpId} className="lb-sr">
            {t.common.viewerHelp}
          </p>
        </div>
      ) : null}
    </dialog>
  );
}
