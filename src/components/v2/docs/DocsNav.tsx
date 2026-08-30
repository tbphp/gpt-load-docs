"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getLocalizedDocGroups } from "@/lib/v2/docs-nav";
import { useLocale } from "@/i18n/v2/LocaleProvider";

export default function DocsNav() {
  const { t } = useLocale();
  const groups = getLocalizedDocGroups(t);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = groups.flatMap((g) => g.items).find((d) => d.href === pathname);

  return (
    <nav className="docs-nav">
      <button
        className="docs-nav-toggle"
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="docs-navigation-panel"
      >
        {open ? t.docsUi.collapse : `${t.docsUi.menu} — ${current?.label ?? t.docsUi.crumb}`}
      </button>

      <div id="docs-navigation-panel" className={`docs-nav-inner${open ? " open" : ""}`}>
        {groups.map((g) => (
          <div className="docs-nav-g" key={g.title}>
            <div className="h">{g.title}</div>
            <ul>
              {g.items.map((d) => {
                const cls = [
                  pathname === d.href ? "on" : "",
                  d.href.split("/").length > 3 ? "sub" : "",
                  d.status === "draft" ? "draft" : "",
                ]
                  .filter(Boolean)
                  .join(" ");
                return (
                  <li key={d.href}>
                    <Link
                      href={d.href}
                      className={cls || undefined}
                      onClick={() => setOpen(false)}
                      aria-current={pathname === d.href ? "page" : undefined}
                    >
                      {d.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="docs-nav-foot">
          <a className="label" href="/v1/docs">
            {t.docsUi.legacy}
          </a>
        </div>
      </div>
    </nav>
  );
}
