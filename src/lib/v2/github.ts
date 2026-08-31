/**
 * GitHub 数据。
 *
 * 全部在**浏览器**里直接请求 api.github.com：
 * 官网没有需要保管密钥的服务端，访客各自用自己的 IP 配额（60 次/小时），
 * 不集中消耗服务器配额，也就不需要任何 token。
 *
 * 结果写进 localStorage 缓存，同一访客在 TTL 内不会重复请求。
 */

const REPO = "tbphp/gpt-load";
const API = "https://api.github.com";

export type Release = {
  tag: string;
  name: string;
  url: string;
  publishedAt: string | null;
  prerelease: boolean;
  /** 正文摘要，已去掉 Markdown 标记 */
  summary: string;
};

export type Contributor = {
  login: string;
  avatar: string;
  url: string;
  contributions: number;
};

/* ---------------------------------------------------------------- 缓存 */

type Entry<T> = { at: number; data: T };

function readCache<T>(key: string, ttl: number): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as Entry<T>;
    if (Date.now() - entry.at > ttl) return null;
    return entry.data;
  } catch {
    // 隐私模式、存储被禁用、JSON 损坏——一律当作没有缓存
    return null;
  }
}

function writeCache<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify({ at: Date.now(), data } satisfies Entry<T>));
  } catch {
    // 写不进去不影响功能，忽略
  }
}

async function ghJson<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}${path}`, { headers: { Accept: "application/vnd.github+json" } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/* ---------------------------------------------------------------- 取数 */

const TTL_STARS = 60 * 60 * 1000;
const TTL_RELEASES = 30 * 60 * 1000;
const TTL_CONTRIBUTORS = 60 * 60 * 1000;

export async function fetchStars(): Promise<number | null> {
  const key = "gl:stars";
  const hit = readCache<number>(key, TTL_STARS);
  if (hit !== null) return hit;

  const data = await ghJson<{ stargazers_count?: unknown }>(`/repos/${REPO}`);
  const stars = typeof data?.stargazers_count === "number" ? data.stargazers_count : null;
  if (stars !== null) writeCache(key, stars);
  return stars;
}

export async function fetchReleases(limit = 20): Promise<Release[] | null> {
  const key = "gl:releases";
  const hit = readCache<Release[]>(key, TTL_RELEASES);
  if (hit) return hit;

  const data = await ghJson<unknown>(`/repos/${REPO}/releases?per_page=${limit}`);
  if (!Array.isArray(data)) return null;

  const list = data.map((r) => {
    const o = r as Record<string, unknown>;
    return {
      tag: typeof o.tag_name === "string" ? o.tag_name : "",
      name: typeof o.name === "string" && o.name ? o.name : String(o.tag_name ?? ""),
      url: typeof o.html_url === "string" ? o.html_url : `https://github.com/${REPO}/releases`,
      publishedAt: typeof o.published_at === "string" ? o.published_at : null,
      prerelease: Boolean(o.prerelease),
      summary: toSummary(o.body),
    } satisfies Release;
  });
  writeCache(key, list);
  return list;
}

export async function fetchContributors(): Promise<Contributor[] | null> {
  const key = "gl:contributors";
  const hit = readCache<Contributor[]>(key, TTL_CONTRIBUTORS);
  if (hit) return hit;

  const data = await ghJson<unknown>(`/repos/${REPO}/contributors?per_page=100`);
  if (!Array.isArray(data)) return null;

  const list = data
    .map((c) => {
      const o = c as Record<string, unknown>;
      return {
        login: typeof o.login === "string" ? o.login : "",
        avatar: typeof o.avatar_url === "string" ? o.avatar_url : "",
        url: typeof o.html_url === "string" ? o.html_url : "",
        contributions: typeof o.contributions === "number" ? o.contributions : 0,
      } satisfies Contributor;
    })
    .filter((c) => c.login && !c.login.endsWith("[bot]"));
  writeCache(key, list);
  return list;
}

/* ---------------------------------------------------------------- 格式化 */

/** 3421 → "3.4k"；不足一千原样返回。 */
export function formatStars(stars: number | null): string | null {
  if (stars === null) return null;
  if (stars < 1000) return String(stars);
  return `${(stars / 1000).toFixed(1).replace(/\.0$/, "")}k`;
}

/** 2026-08-29 → 2026.08.29 */
export function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p(d.getMonth() + 1)}.${p(d.getDate())}`;
}

/** 把 Release 正文压成几行纯文本，避免为了渲染 Markdown 引一个解析器进来 */
function toSummary(body: unknown, max = 260): string {
  if (typeof body !== "string") return "";
  const text = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/[*_>`]/g, "")
    .replace(/\r?\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

export const REPO_URL = `https://github.com/${REPO}`;
