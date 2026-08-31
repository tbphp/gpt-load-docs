import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/** 外链自动整页跳转，内链走客户端路由。 */
export default function Button({ href, children, variant = "primary", className }: Props) {
  const cls = ["btn", variant === "primary" ? "btn-p" : "btn-s", className].filter(Boolean).join(" ");
  const external = href.startsWith("http");

  if (external) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
