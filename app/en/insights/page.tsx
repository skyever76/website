import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../../_components/SiteChrome";
import { categories, insights } from "../../_lib/content";

export const metadata: Metadata = { title: "Insights", description: "Adam Cui's operating improvement insights, organized by knowledge field." };

export default function EnglishInsightsPage() {
  const knownCategories = new Set(categories.map((category) => category.key as string));
  const directory = [...categories, { key: "Other", en: "Other", noteEn: "Cross-disciplinary ideas and adjacent perspectives" }];
  return <main><Header locale="en" path="/insights" /><section className="page-intro shell"><p className="eyebrow">Insights</p><h1>Organized by knowledge,<br />not chronology.</h1><p>Long-lasting ideas and practical methods, organized around enterprise operating outcomes.</p></section><section className="insight-directory shell">{directory.map((category, index) => { const items = (category.key === "Other" ? insights.filter((item) => !knownCategories.has(item.category)) : insights.filter((item) => item.category === category.key)).filter((item) => item.lang !== "zh"); return <section id={category.key.replaceAll(" ", "-")} key={category.key} className="directory-card"><header><span>{String(index + 1).padStart(2, "0")}</span><h2>{category.en}</h2><p>{category.noteEn}</p></header><div className="directory-links">{items.length ? items.map((item) => <Link key={item.slug} href={`/en/insights/${item.slug}`} className="directory-link"><span>{item.series || "Insight"}</span><strong>{item.title}</strong><i aria-hidden="true">↗</i></Link>) : <p className="empty">In development</p>}</div></section>; })}</section><Footer locale="en" /></main>;
}
