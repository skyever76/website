import Link from "next/link";
import { Footer, Header } from "./_components/SiteChrome";
import { InsightCard } from "./_components/InsightCard";
import { categories, insights } from "./_lib/content";

export default function Home() {
  const latestInsights = insights.slice(0, 2);
  return (
    <main>
      <Header />
      <section className="hero shell">
        <p className="eyebrow">企业经营提升</p>
        <h1>把全球一线运营经验，<br />转化为适合中国企业的<br />运营提升方法。</h1>
        <div className="field-line" aria-label="核心知识领域">{categories.map((field) => <span key={field.key}>{field.zh}</span>)}</div>
      </section>
      <section className="latest shell" aria-labelledby="latest-title">
        <div className="section-heading"><p>01</p><h2 id="latest-title">最新观点</h2></div>
        <div><div className="latest-grid">{latestInsights.map((insight) => <InsightCard key={insight.slug} insight={insight} />)}{latestInsights.length < 2 ? <div className="latest-placeholder"><span className="meta">下一篇</span><p>正在整理</p><small>只发布经过确认、值得长期保留的内容。</small></div> : null}</div><Link className="text-link" href="/insights">查看全部洞察 →</Link></div>
      </section>
      <section className="knowledge shell" aria-labelledby="knowledge-title">
        <div className="section-heading"><p>02</p><h2 id="knowledge-title">知识领域</h2></div>
        <div className="field-grid">{categories.map((field, index) => <Link key={field.key} href={`/insights#${field.key.replaceAll(" ", "-")}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{field.zh}</h3><p>{field.note}</p><i>↗</i></Link>)}</div>
      </section>
      <section className="manifesto shell"><p>“利润是观点，现金是事实。”</p><Link className="text-link" href="/about">关于 Adam →</Link></section>
      <Footer />
    </main>
  );
}
