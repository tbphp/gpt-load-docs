import { Children, Fragment, cloneElement, createElement, isValidElement, type ReactElement, type ReactNode } from "react";
import type { Locale } from "@/i18n/v2/config";
import en from "./docs-content.en.json";
import ja from "./docs-content.ja.json";
import enTemplates from "./docs-templates.en.json";
import jaTemplates from "./docs-templates.ja.json";

const EN: Record<string, string> = en;
const JA: Record<string, string> = ja;
const EN_TEMPLATES: Record<string, string> = enTemplates;
const JA_TEMPLATES: Record<string, string> = jaTemplates;

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

/**
 * 缺失译文只会静默回退中文，构建和运行都不会报错。
 * 开发期把缺口打到服务端终端，避免改动原文后漏翻却无人察觉。
 * 同一 key 只报一次，防止渲染多次时刷屏。
 */
const reported = new Set<string>();
function reportMissing(locale: Locale, key: string, kind: "content" | "template" = "content") {
  if (process.env.NODE_ENV === "production") return;
  const id = `${locale}:${kind}:${key}`;
  if (reported.has(id)) return;
  reported.add(id);
  console.warn(`[i18n] 缺 ${locale} ${kind} 译文: ${JSON.stringify(key)}`);
}

function containsHan(node: ReactNode): boolean {
  if (typeof node === "string") return /\p{Script=Han}/u.test(node);
  if (Array.isArray(node)) return node.some((child) => containsHan(child));
  if (!isValidElement<Record<string, unknown>>(node)) return false;
  return containsHan(node.props.children as ReactNode);
}

export function translateDocString(locale: Locale, value: string, compact = false): string {
  if (locale === "zh" || !/\p{Script=Han}/u.test(value)) return value;
  const key = normalize(value);
  const dictionary = locale === "ja" ? JA : EN;
  // JSX 会把 &quot; 解码成真实引号，而离线提取器读取的是源码文本。
  const translated = dictionary[key] ?? dictionary[key.replaceAll('"', "&quot;")];
  if (!translated) {
    reportMissing(locale, key);
    return value;
  }

  if (locale === "en") {
    if (compact) return translated;
    const lead = /^[,.;:!?)}\]]/.test(translated) ? "" : " ";
    const tail = /[(\[{]$/.test(translated) ? "" : " ";
    return `${lead}${translated}${tail}`;
  }
  return translated;
}

const TRANSLATED_PROPS = ["alt", "caption", "label", "lede", "note", "title"] as const;

function translateChildTemplate(children: ReactNode, locale: Locale): ReactNode | undefined {
  if (locale === "zh") return undefined;

  const parts: string[] = [];
  const elements: ReactElement<Record<string, unknown>>[] = [];

  Children.forEach(children, (child) => {
    if (typeof child === "string" || typeof child === "number") {
      const text = normalize(String(child));
      if (text) parts.push(text);
      return;
    }
    if (isValidElement<Record<string, unknown>>(child)) {
      const index = elements.length;
      elements.push(child);
      parts.push(`{{${index}}}`);
    }
  });

  if (elements.length === 0) return undefined;
  const key = normalize(parts.join(" "));
  const dictionary = locale === "ja" ? JA_TEMPLATES : EN_TEMPLATES;
  const template = dictionary[key] ?? dictionary[key.replaceAll('"', "&quot;")];
  const needsTranslation = /\p{Script=Han}/u.test(key) || elements.some((element) => containsHan(element));
  if (!template) {
    // 缺模板会退化成逐片段翻译：不会显示中文，但内联元素前后的语序可能失真。
    if (needsTranslation) reportMissing(locale, key, "template");
    return undefined;
  }
  if (!needsTranslation) return undefined;

  // 完整句翻译会保留内联元素边界，并在边界内给出结合上下文后的译文。
  // 例如链接里的宾语在英文中可能换位；只翻译元素前后的碎片会导致语序错乱。
  if (template.includes("§E")) {
    const translated: ReactNode[] = [];
    const pattern = /§E(\d+)§([\s\S]*?)§\/E\1§/g;
    let cursor = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(template))) {
      if (match.index > cursor) translated.push(template.slice(cursor, match.index));
      const element = elements[Number(match[1])];
      if (!element) return undefined;
      translated.push(replaceElementText(element, match[2], locale));
      cursor = pattern.lastIndex;
    }

    if (cursor === 0 || /§\/?E\d+§/.test(template.slice(cursor))) return undefined;
    if (cursor < template.length) translated.push(template.slice(cursor));
    return translated.map((part, index) => createElement(Fragment, { key: `translated-context-${index}` }, part));
  }

  return template.split(/(\{\{\d+\}\})/).filter(Boolean).map((part, index) => {
    const match = part.match(/^\{\{(\d+)\}\}$/);
    const content = match ? translateDocNode(elements[Number(match[1])], locale, true) : part;
    return createElement(Fragment, { key: `translated-${index}` }, content);
  });
}

function replaceElementText(element: ReactElement<Record<string, unknown>>, text: string, locale: Locale): ReactElement {
  const props = { ...element.props };
  const children = props.children as ReactNode;
  if (isValidElement<Record<string, unknown>>(children)) {
    props.children = replaceElementText(children, text, locale);
  } else if (text) {
    props.children = text;
  } else if (children) {
    props.children = translateDocNode(children, locale, true);
  }
  return cloneElement(element, props);
}

function translateCodeNode(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === "string") return translateDocString(locale, node, true);
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props = { ...node.props };
  if (typeof props.children === "string" && /\p{Script=Han}/u.test(props.children)) {
    props.children = translateDocString(locale, props.children, true);
  } else if (props.children) {
    props.children = Children.map(props.children as ReactNode, (child) => translateCodeNode(child, locale));
  }
  return cloneElement(node, props);
}

export function translateDocNode(node: ReactNode, locale: Locale, compact = false): ReactNode {
  if (typeof node === "string") return translateDocString(locale, node, compact);
  if (Array.isArray(node)) {
    return Children.map(node, (child) => translateDocNode(child, locale, compact));
  }
  if (!isValidElement<Record<string, unknown>>(node)) return node;

  const element = node as ReactElement<Record<string, unknown>>;
  const props = { ...element.props };
  for (const key of TRANSLATED_PROPS) {
    if (typeof props[key] === "string") props[key] = translateDocString(locale, props[key] as string).trim();
  }

  const typeName = typeof element.type === "function" ? element.type.name : "";
  const isCodeBlock = typeName === "CodeBlock";
  const isInlineCode = element.type === "code" || element.type === "pre";
  if (props.children && !isInlineCode) {
    const translatedTemplate = isCodeBlock ? undefined : translateChildTemplate(props.children as ReactNode, locale);
    props.children = translatedTemplate ?? (isCodeBlock
      ? Children.map(props.children as ReactNode, (child) => translateCodeNode(child, locale))
      : Children.map(props.children as ReactNode, (child) => translateDocNode(child, locale, compact)));
  }

  return cloneElement(element, props);
}
