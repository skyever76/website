import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../_components/SiteChrome";
import { categories, insights, languageLabel } from "../_lib/content";

export const metadata: Metadata = { title: "洞察 Insights", description: "按运营提升知识树组织的 Adam Cui 深度洞察。" };
export default function InsightsPage() {
  const knownCategories = new Set(categories.map((category) => category.key as string));
  const directory = [
    ...categories,
    { key: "Other", zh: "其他", en: "Other", note: "跨领域观点与延伸思考" },
  ];

  return <main><Header /><section className="page-intro shell"><p className="eyebrow">Insights / 洞察</p><h1>按知识树组织，<br />不按时间线。</h1><p>围绕企业经营结果，把长期有效的观点与实战方法放进同一套框架。</p></section><section className="insight-directory shell">{directory.map((category, index) => { const items = category.key === "Other" ? insights.filter((item) => !knownCategories.has(item.category)) : insights.filter((item) => item.category === category.key); return <section id={category.key.replaceAll(" ", "-")} key={category.key} className="directory-card"><header><span>{String(index + 1).padStart(2, "0")}</span><h2>{category.zh}<small>{category.en}</small></h2><p>{category.note}</p></header><div className="directory-links">{items.length ? items.map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="directory-link"><span>{item.series || languageLabel[item.lang]}</span><strong>{item.title}</strong><i aria-hidden="true">↗</i></Link>) : <p className="empty">待沉淀 / In development</p>}</div></section>; })}</section><Footer /></main>;
}
