"use client";

import { Mail } from "lucide-react";

export default function SponsorContactButton({ label }: { label: string }) {
  const contact = () => {
    // 点击时才解码，避免构建压缩重新合并出明文邮箱；这不是保密机制。
    const address = window.atob("dGFuZ2I3NDIwQGdtYWlsLmNvbQ==");
    window.location.href = `mailto:${address}`;
  };

  return (
    <button type="button" className="btn btn-p" onClick={contact}>
      <Mail size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
