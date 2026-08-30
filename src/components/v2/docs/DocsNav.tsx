"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DOC_GROUPS } from "@/lib/v2/docs-nav";

export default function DocsNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const current = DOC_GROUPS.flatMap((g) => g.items).find((d) => d.href === pathname);

  return (
    <nav className="docs-nav">
      <button className="docs-nav-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        {open ? "收起目录" : `目录 — ${current?.label ?? "文档"}`}
      </button>

      <div className={`docs-nav-inner${open ? " open" : ""}`}>
        {DOC_GROUPS.map((g) => (
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
                    <Link href={d.href} className={cls || undefined} onClick={() => setOpen(false)}>
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
            1.4.x 文档 →
          </a>
        </div>
      </div>
    </nav>
  );
}
