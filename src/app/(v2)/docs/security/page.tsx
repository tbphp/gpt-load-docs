import type { Metadata } from "next";
import { DocsPage } from "@/components/v2/docs";

export const metadata: Metadata = {
  title: "安全",
  description: "两把密钥的职责、网络边界、文件权限与上生产检查清单。",
};

export default function Page() {
  return (
    <DocsPage path="/docs/security" title="安全" lede="上生产之前，这一页要从头到尾看一遍。">
      <h2>这一页将会讲</h2>
      <ul>
        <li>两把密钥：<code>AUTH_KEY</code> 管管理面，<code>ENCRYPTION_KEY</code> 管凭据加密</li>
        <li><strong>备份必须数据库 + `encryption.key` 一起</strong>，本版本不支持主密钥轮换</li>
        <li>网络边界：默认只监听 <code>127.0.0.1</code>，远程访问要 TLS 反代 + ACL + 防火墙</li>
        <li>文件权限：受管 <code>DATA_DIR</code> 收 <code>0700</code>，密钥文件收 <code>0600</code></li>
        <li>不要把密钥提交到仓库、日志、截图或公开 issue</li>
        <li>一份可勾选的上生产检查清单</li>
      </ul>
    </DocsPage>
  );
}
