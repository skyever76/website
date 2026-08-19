import Link from "next/link";
import { Footer, Header } from "./_components/SiteChrome";
import { InsightCard } from "./_components/InsightCard";
import { categories, insights } from "./_lib/content";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero shell">
        <p className="eyebrow">企业经营提升 · Operating Improvement</p>
        <h1>把全球一线运营经验，<br />转化为适合中国企业的<br />运营提升方法。</h1>
        <p className="hero-copy hero-copy-en">Turning frontline global operating experience into improvement playbooks for Chinese enterprises.</p>
        <div className="field-line" aria-label="核心知识领域">{categories.map((field) => <span key={field.key}>{field.zh} {field.en}</span>)}</div>
      </section>
      <section className="latest shell" aria-labelledby="latest-title">
        <div className="section-heading"><p>01 / 最新观点</p><h2 id="latest-title">Latest Insights</h2></div>
        <div>{insights.slice(0, 3).map((insight) => <InsightCard key={insight.slug} insight={insight} />)}<Link className="text-link" href="/insights">查看全部洞察 →</Link></div>
      </section>
      <section className="knowledge shell" aria-labelledby="knowledge-title">
        <div className="section-heading"><p>02 / 知识体系</p><h2 id="knowledge-title">Knowledge Fields</h2></div>
        <div className="field-grid">{categories.map((field, index) => <Link key={field.key} href={`/insights?category=${encodeURIComponent(field.key)}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{field.zh}<small>{field.en}</small></h3><p>{field.note}</p><i>↗</i></Link>)}</div>
      </section>
      <section className="manifesto shell"><p>“利润是观点，现金是事实。”</p><Link className="text-link" href="/about">关于 Adam →</Link></section>
      <Footer />
    </main>
  );
}
