import type { Metadata } from "next";
import { Header, Footer } from "../_components/SiteChrome";

const steps = [
  { zh: "止血", en: "Stabilize", statement: "现金流比利润还要重要。" },
  { zh: "修理", en: "Repair", statement: "改变人、方法和战场。" },
  { zh: "重回增长", en: "Return to Growth", statement: "找到价值点，集中资源投入。" },
  { zh: "平台化", en: "Scale", statement: "把成功模式标准化、复制和放大。" },
];

export const metadata: Metadata = { title: "Adam Cui 四步法", description: "止血、修理、重回增长、平台化：Adam Cui 的企业经营改善四步法。" };

export default function PlaybooksPage() {
  return (
    <main>
      <Header />
      <section className="method-hero shell">
        <p className="eyebrow">Adam Cui Method / 四步法</p>
        <h1>先活下来，<br />再长起来。</h1>
        <p>经营改善有顺序。先稳住基本盘，再修复系统、重启增长，最终形成可以复制的平台。</p>
      </section>
      <section className="method-steps shell" aria-label="Adam Cui 企业经营改善四步法">
        {steps.map((step, index) => (
          <article key={step.zh}>
            <span className="method-index">{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.zh}<small>{step.en}</small></h2>
            <p>{step.statement}</p>
          </article>
        ))}
      </section>
      <section className="method-sequence shell" aria-label="四步法顺序">
        {steps.map((step, index) => <span key={step.zh}>{step.zh}{index < steps.length - 1 && <i>→</i>}</span>)}
      </section>
      <Footer />
    </main>
  );
}
