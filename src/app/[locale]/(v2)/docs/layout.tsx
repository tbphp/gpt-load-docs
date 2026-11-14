import "@/styles/v2/docs.css";
import { DocsNav } from "@/components/v2/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main" className="docs">
      <div className="shell">
        <div className="g12 docs-grid">
          <DocsNav />
          {children}
        </div>
      </div>
    </main>
  );
}
