import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "../../../_components/SiteChrome";
import { categories, insights } from "../../../_lib/content";

export function generateStaticParams() { return insights.filter((item) => item.lang !== "zh").map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = insights.find((entry) => entry.slug === slug && entry.lang !== "zh");
  if (!item) return {};
  return { title: item.title, description: item.description, openGraph: { title: item.title, description: item.description, images: [] }, twitter: { title: item.title, description: item.description, images: [] } };
}

function ArticleBody({ body }: { body: string }) {
  return <>{body.split(/\n\n+/).map((block, index) => {
    if (block.startsWith("## ")) return <h2 key={index}>{block.slice(3)}</h2>;
    if (block.startsWith("> ")) return <blockquote key={index}>{block.slice(2)}</blockquote>;
    if (block.split("\n").every((line) => line.startsWith("- "))) return <ul key={index}>{block.split("\n").map((line) => <li key={line}>{line.slice(2)}</li>)}</ul>;
    return <p key={index}>{block}</p>;
  })}</>;
}

export default async function EnglishInsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = insights.find((entry) => entry.slug === slug && entry.lang !== "zh");
  if (!item) notFound();
  const category = categories.find((entry) => entry.key === item.category);
  return <main lang="en"><Header locale="en" path="/insights" /><article className="article shell"><header><Link className="back-link" href="/en/insights">← Back to insights</Link><p className="eyebrow">{item.series || "Insight"} · {category?.en}</p><h1>{item.title}</h1><p className="article-deck">{item.description}</p><div className="article-meta"><span>{item.date}</span><span>{item.tags.join(" · ")}</span></div></header><div className="article-layout"><aside><span>Knowledge field</span><strong>{category?.en}</strong></aside><div className="article-body"><ArticleBody body={item.body} /></div></div></article><Footer locale="en" /></main>;
}
