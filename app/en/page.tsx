import Link from "next/link";
import { Footer, Header } from "../_components/SiteChrome";
import { InsightCard } from "../_components/InsightCard";
import { categories, insights } from "../_lib/content";

export default function EnglishHome() {
  const latestInsights = insights.filter((item) => item.lang !== "zh").slice(0, 2);
  return (
    <main>
      <Header locale="en" />
      <section className="hero shell">
        <p className="eyebrow">Operating Improvement</p>
        <h1>Turning frontline global operating experience into improvement playbooks for Chinese enterprises.</h1>
        <div className="field-line" aria-label="Core knowledge fields">{categories.map((field) => <span key={field.key}>{field.en}</span>)}</div>
      </section>
      <section className="latest shell" aria-labelledby="latest-title-en">
        <div className="section-heading"><p>01</p><h2 id="latest-title-en">Latest Insights</h2></div>
        <div><div className="latest-grid">{latestInsights.map((insight) => <InsightCard key={insight.slug} insight={insight} locale="en" />)}{latestInsights.length < 2 ? <div className="latest-placeholder"><span className="meta">Next insight</span><p>In development</p><small>Only reviewed ideas with lasting value are published.</small></div> : null}</div><Link className="text-link" href="/en/insights">View all insights →</Link></div>
      </section>
      <section className="knowledge shell" aria-labelledby="knowledge-title-en">
        <div className="section-heading"><p>02</p><h2 id="knowledge-title-en">Knowledge Fields</h2></div>
        <div className="field-grid">{categories.map((field, index) => <Link key={field.key} href={`/en/insights#${field.key.replaceAll(" ", "-")}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{field.en}</h3><p>{field.noteEn}</p><i>↗</i></Link>)}</div>
      </section>
      <section className="manifesto shell"><p>“Profit is an opinion. Cash is a fact.”</p><Link className="text-link" href="/en/about">About Adam →</Link></section>
      <Footer locale="en" />
    </main>
  );
}
