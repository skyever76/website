import type { Metadata } from "next";
import { Header, Footer } from "../_components/SiteChrome";
import { InsightCard } from "../_components/InsightCard";
import { categories, insights } from "../_lib/content";

export const metadata: Metadata = { title: "洞察 Insights", description: "按运营提升知识树组织的 Adam Cui 深度洞察。" };
export default function InsightsPage() {
  return <main><Header /><section className="page-intro shell"><p className="eyebrow">Insights / 洞察</p><h1>按知识树组织，<br />不按时间线。</h1><p>围绕企业经营结果，把长期有效的观点与实战方法放进同一套框架。</p></section><section className="category-list shell">{categories.map((category, index) => { const items = insights.filter((item) => item.category === category.key); return <section id={category.key.replaceAll(" ", "-")} key={category.key} className="category-block"><header><span>{String(index + 1).padStart(2, "0")}</span><h2>{category.zh}<small>{category.en}</small></h2><p>{category.note}</p></header><div>{items.length ? items.map((item) => <InsightCard key={item.slug} insight={item} />) : <p className="empty">待沉淀 / In development</p>}</div></section>; })}</section><Footer /></main>;
}
