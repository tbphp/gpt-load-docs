import type { Metadata } from "next";
import { getLocale } from "@/i18n/v2/server";
import { findDoc } from "@/lib/v2/docs-nav";
import { dictionaryPageMeta } from "@/lib/v2/site";

export async function docPageMetadata(path: string): Promise<Metadata> {
  const locale = await getLocale();
  return dictionaryPageMeta({
    locale,
    path,
    select: (dict) => {
      const doc = findDoc(path, dict);
      if (!doc) return dict.pages.docs;
      return {
        title: doc.label,
        description: `${doc.label} — ${doc.desc ?? dict.pages.docs.description}`,
      };
    },
  });
}
