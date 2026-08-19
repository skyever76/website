export const categories = [
  { key: "Revenue", zh: "增长", en: "Revenue", note: "从客户价值到可持续收入" },
  { key: "Margin", zh: "利润", en: "Margin", note: "让增长转化为真实的盈利能力" },
  { key: "Cash", zh: "现金", en: "Cash", note: "营运资本与现金纪律" },
  { key: "Organization", zh: "组织", en: "Organization", note: "组织能力、人才与责任体系" },
  { key: "Operating System", zh: "执行", en: "Operating System", note: "把战略变成可重复的经营动作" },
  { key: "AI Enablement", zh: "AI 赋能", en: "AI Enablement", note: "让 AI 成为企业经营能力的一部分" },
  { key: "M&A Integration", zh: "并购整合", en: "M&A Integration", note: "从交易完成走向价值兑现" },
] as const;

export type Insight = {
  slug: string; title: string; description: string; category: string; date: string;
  lang: "zh" | "en" | "both"; series?: string; tags: string[]; draft: boolean; body: string;
};

function parseFrontMatter(source: string, slug: string): Insight {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error(`Missing front matter: ${slug}`);
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const split = line.indexOf(":");
    if (split > -1) data[line.slice(0, split).trim()] = line.slice(split + 1).trim().replace(/^['"]|['"]$/g, "");
  }
  const tags = (data.tags || "[]").replace(/^\[|\]$/g, "").split(",").map((tag) => tag.trim()).filter(Boolean);
  return { slug, title: data.title, description: data.description, category: data.category, date: data.date, lang: data.lang as Insight["lang"], series: data.series, tags, draft: data.draft === "true", body: match[2].trim() };
}

const sources = import.meta.glob("../../content/insights/*.md", { import: "default", eager: true }) as Record<string, string>;
export const insights = Object.entries(sources).map(([path, source]) => parseFrontMatter(source, path.split("/").pop()!.replace(/\.md$/, ""))).filter((item) => !item.draft).sort((a, b) => b.date.localeCompare(a.date));
export const languageLabel = { zh: "中文", en: "EN", both: "中 / EN" } as const;
