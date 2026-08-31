"use client";

import { useEffect, useMemo, useRef, type CSSProperties } from "react";
import { useLocale } from "@/i18n/v2/LocaleProvider";

/**
 * 首屏路由图。
 *
 * 动效画的就是调度本身：请求从左侧进入，穿过认证到达网关，网关按权重挑一条路由送出去。
 * 被选中的支线亮成墨蓝、其余压暗，图注同步显示当前路由，右端计数器累加。
 * 权重与真实流量分布一致，所以官方 API 那条最常亮。
 *
 * 坐标系固定为 700 × 420，折点全部落在首页 12 栏网格的栏边界上。
 */

type Endpoint = {
  key: string;
  /** 支线路径 */
  d: string;
  /** 端点标签基线 y，方块与数量由它推出 */
  labelY: number;
  /** 分类色变量名，与渠道墙共用同一套 */
  cat: string;
  /** 选路权重 */
  weight: number;
  /** 入场延迟（秒） */
  drawDelay: number;
};

const ENDPOINTS: Endpoint[] = [
  { key: "r0", d: "M415,162 H492 V26  H617", labelY: 16,  cat: "var(--cat-1)", weight: 44, drawDelay: 0.62 },
  { key: "r1", d: "M415,174 H593 V110 H617", labelY: 100, cat: "var(--cat-2)", weight: 18, drawDelay: 0.68 },
  { key: "r2", d: "M415,186 H593 V250 H617", labelY: 240, cat: "var(--cat-3)", weight: 24, drawDelay: 0.74 },
  { key: "r3", d: "M415,198 H492 V334 H617", labelY: 324, cat: "var(--cat-4)", weight: 14, drawDelay: 0.80 },
];

/** 快节奏：进 / 挑凭据 / 出 / 间歇（毫秒） */
const IN = 420;
const HOLD = 160;
const OUT = 520;
const REST = 300;
const START = 1220;

const SANS = "Helvetica Neue, Archivo, PingFang SC, sans-serif";
const MONO = "IBM Plex Mono, monospace";

const del = (s: number) => ({ "--del": `${s}s` }) as CSSProperties;
const delDur = (s: number, d: number) => ({ "--del": `${s}s`, "--dur-draw": `${d}s` }) as CSSProperties;
const catStyle = (s: number, d: number, cat: string) =>
  ({ "--del": `${s}s`, "--dur-draw": `${d}s`, "--rt-c": cat }) as CSSProperties;

export default function RouteDiagram() {
  const { locale, t } = useLocale();
  const endpoints = useMemo(
    () => ENDPOINTS.map((endpoint, index) => ({ ...endpoint, name: t.home.protocols.groups[index], count: [4, 3, 8, 4][index] })),
    [t]
  );
  const rootRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sig = root.querySelector<SVGRectElement>("#sig");
    const gw = root.querySelector<SVGRectElement>("#gw");
    const pIn = root.querySelector<SVGPathElement>("#pIn");
    const legend = root.querySelector<SVGTextElement>("#legendTx");
    const legendSw = root.querySelector<SVGRectElement>("#legendSw");
    const counter = root.querySelector<SVGTextElement>("#counter");
    if (!sig || !gw || !pIn || !legend || !counter) return;

    root.classList.add("play");
    if (reduce) return;

    const routes = endpoints.map((e) => ({
      ...e,
      path: root.querySelector<SVGPathElement>(`#${e.key}`),
      end: root.querySelector<SVGGElement>(`#${e.key}-end`),
    })).filter((r) => r.path && r.end);

    const totalWeight = routes.reduce((s, r) => s + r.weight, 0);

    const pick = () => {
      let acc = 0;
      const target = Math.random() * totalWeight;
      for (const r of routes) {
        acc += r.weight;
        if (target <= acc) return r;
      }
      return routes[0];
    };

    const clearHighlight = () => {
      sig.style.setProperty("fill", "var(--ink)");
      for (const r of routes) {
        r.path!.classList.remove("hot", "dim");
        r.end!.classList.remove("dim");
        r.end!.querySelectorAll(".nd").forEach((n) => n.classList.remove("hot"));
      }
    };

    const applyHighlight = (sel: (typeof routes)[number]) => {
      for (const r of routes) {
        const on = r === sel;
        r.path!.classList.toggle("hot", on);
        r.path!.classList.toggle("dim", !on);
        r.end!.classList.toggle("dim", !on);
        r.end!.querySelectorAll(".nd").forEach((n) => n.classList.toggle("hot", on));
      }
      legend.textContent = t.common.routeRouted.replace("{name}", sel.name);
      legendSw?.setAttribute("fill", sel.cat);
    };

    const place = (path: SVGPathElement, t: number) => {
      const p = path.getPointAtLength(path.getTotalLength() * t);
      sig.setAttribute("x", (p.x - 4.5).toFixed(2));
      sig.setAttribute("y", (p.y - 4.5).toFixed(2));
    };

    let phase: "wait" | "in" | "hold" | "out" | "rest" = "wait";
    let phaseT = 0;
    let last = 0;
    let count = 0;
    let visible = true;
    let cur: (typeof routes)[number] | null = null;
    let raf = 0;
    // smoothstep，让方块在两端减速
    const ease = (t: number) => t * t * (3 - 2 * t);

    const tick = (now: number) => {
      if (!last) last = now;
      const dt = now - last;
      last = now;

      if (visible) {
        phaseT += dt;

        if (phase === "wait") {
          if (phaseT >= START) { phase = "in"; phaseT = 0; sig.setAttribute("opacity", "1"); }
        } else if (phase === "in") {
          const t = Math.min(phaseT / IN, 1);
          place(pIn, ease(t));
          if (t >= 1) {
            phase = "hold"; phaseT = 0;
            sig.setAttribute("opacity", "0");
            gw.classList.add("pulse");
            cur = pick();
          }
        } else if (phase === "hold") {
          if (phaseT >= HOLD) {
            phase = "out"; phaseT = 0;
            gw.classList.remove("pulse");
            sig.setAttribute("opacity", "1");
            if (cur) applyHighlight(cur);
          }
        } else if (phase === "out" && cur) {
          const progress = Math.min(phaseT / OUT, 1);
          place(cur.path!, ease(progress));
          if (progress >= 1) {
            phase = "rest"; phaseT = 0;
            sig.setAttribute("opacity", "0");
            count += 1;
            counter.textContent = t.common.routeRequests.replace("{count}", count.toLocaleString(locale));
          }
        } else if (phase === "rest") {
          if (phaseT >= REST) {
            clearHighlight();
            phase = "in"; phaseT = 0;
            sig.setAttribute("opacity", "1");
          }
        }
      }

      raf = requestAnimationFrame(tick);
    };

    // 滚出视口就停，不在后台空转
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (!visible) {
          sig.setAttribute("opacity", "0");
          gw.classList.remove("pulse");
        }
      },
      { threshold: 0.05 }
    );
    io.observe(root);

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [endpoints, locale, t.common.routeRequests, t.common.routeRouted]);

  return (
    <svg ref={rootRef} className="route-svg" viewBox="0 0 700 420" fill="none" aria-label={t.common.routeDiagram}>
      {/* 主干 */}
      <path className="rt draw" id="pIn" pathLength={1} style={delDur(0.06, 0.3)} d="M11,180 H213" />

      {/* 起点 */}
      <rect className="nd pop" style={del(0)} x="4" y="173" width="14" height="14" fill="#0a0a0a" />
      <text className="pop" style={del(0.04)} x="4" y="158" fill="#0a0a0a" fontSize="12" fontWeight="600" fontFamily={SANS}>{t.common.yourApplication}</text>
      <text className="pop" style={del(0.08)} x="4" y="214" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.5" fontFamily={MONO}>{t.common.routeBaseUrl}</text>
      <text className="pop" style={del(0.11)} x="4" y="228" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.5" fontFamily={MONO}>{t.common.routeAccessKey}</text>

      {/* 认证 */}
      <rect className="nd pop" style={del(0.22)} x="106" y="174" width="12" height="12" fill="#ffffff" stroke="#0a0a0a" strokeWidth="2" />
      <text className="pop" style={del(0.25)} x="106" y="160" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.4" fontFamily={MONO}>{t.common.routeAuth}</text>

      {/* 网关：框内只放名字，说明放框外，避免溢出 */}
      <rect className="gwbox gwdraw" id="gw" pathLength={1} x="213" y="148" width="202" height="64" fill="#ffffff" stroke="#0a0a0a" strokeWidth="2" />
      <text className="pop" style={del(0.56)} x="237" y="187" fill="#0a0a0a" fontSize="19" fontWeight="700" letterSpacing="-0.5" fontFamily={SANS}>GPT-LOAD</text>
      <g className="pop" style={del(0.6)} stroke="#0a0a0a" strokeWidth="2">
        <path d="M401,162 H415 M401,174 H415 M401,186 H415 M401,198 H415" />
      </g>
      <text className="pop" style={del(0.64)} x="213" y="234" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.4" fontFamily={MONO}>{t.common.routeSchedule}</text>
      <text className="pop" style={del(0.67)} x="213" y="248" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.4" fontFamily={MONO}>{t.common.routeObservability}</text>

      {/* 四条支线，各自带分类色 */}
      {endpoints.map((e) => (
        <path key={e.key} className="rt draw" id={e.key} pathLength={1} style={catStyle(e.drawDelay, 0.34, e.cat)} d={e.d} />
      ))}

      {/* 端点：标签在上、方块居中、数量在下 */}
      {endpoints.map((e, i) => (
        <g className="lb" id={`${e.key}-end`} key={`${e.key}-end`} style={{ "--rt-c": e.cat } as CSSProperties}>
          <text className="pop lb-name" style={del(0.94 + i * 0.02)} x="696" y={e.labelY} textAnchor="end" fill="#0a0a0a" fontSize="12" fontWeight="600" fontFamily={SANS}>{e.name}</text>
          <rect className="nd pop" style={del(0.92 + i * 0.02)} x="617" y={e.labelY + 4} width="12" height="12" fill="#ffffff" stroke={e.cat} strokeWidth="2" />
          <text className="pop" style={del(0.97 + i * 0.02)} x="696" y={e.labelY + 34} textAnchor="end" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.3" fontFamily={MONO}>{t.common.routeChannels.replace("{count}", String(e.count))}</text>
        </g>
      ))}

      {/* 运动中的请求 */}
      <rect className="signal" id="sig" x="0" y="0" width="9" height="9" opacity="0" />

      {/* 图注 */}
      <g className="pop" style={del(1.06)}>
        <path d="M11,378 H693" stroke="#ececec" strokeWidth="1" />
        <text x="11" y="400" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.6" fontFamily={MONO}>{t.common.routeFigure}</text>
        <rect id="legendSw" x="160" y="391" width="9" height="9" fill="var(--cat-1)" />
        <text id="legendTx" x="178" y="400" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.3" fontFamily={MONO}>{t.common.routeRouted.replace("{name}", endpoints[0].name)}</text>
        <text id="counter" x="693" y="400" fill="#6a6a6a" fontSize="9.5" letterSpacing="1.3" textAnchor="end" fontFamily={MONO}>{t.common.routeRequests.replace("{count}", "0")}</text>
      </g>
    </svg>
  );
}
