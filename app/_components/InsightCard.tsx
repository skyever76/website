import Link from "next/link";
import { Insight, languageLabel } from "../_lib/content";

export function InsightCard({ insight, locale = "zh" }: { insight: Insight; locale?: "zh" | "en" }) {
  return (
    <Link className="insight-row" href={`${locale === "en" ? "/en" : ""}/insights/${insight.slug}`}>
      <div><span className="meta">{insight.series ? `${insight.series} · ` : ""}{languageLabel[insight.lang]} · {insight.date.replaceAll("-", ".")}</span><h3>{insight.title}</h3><p>{insight.description}</p></div>
      <span className="arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
