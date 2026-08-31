import type { Locale } from "../config";
import { zh, type Dict } from "./zh";
import { en } from "./en";
import { ja } from "./ja";

const DICTS: Record<Locale, Dict> = { en, zh, ja };

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}

export type { Dict };
