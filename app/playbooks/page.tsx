import type { Metadata } from "next";
import { Header, Footer } from "../_components/SiteChrome";
const playbooks = [
  ["Pricing", "定价", "从客户价值、价格架构到落地治理。"], ["Working Capital", "营运资本", "把库存、应收与应付变成经营动作。"], ["100-Day Plan", "百天计划", "在关键窗口建立事实、节奏与责任。"], ["Sales Productivity", "销售效能", "用过程计量改善销售产出。"], ["M&A Integration", "并购整合", "把交易逻辑转化为协同与经营结果。"]
];
export const metadata: Metadata = { title: "方法 Playbooks", description: "把零散经验沉淀为可复用的企业经营提升打法。" };
export default function PlaybooksPage() { return <main><Header /><section className="page-intro shell"><p className="eyebrow">Playbooks / 方法</p><h1>从观点，<br />走向可复用的打法。</h1><p>零散文章会逐渐长成结构化方法论，支持团队在真实经营场景中反复使用。</p></section><section className="playbook-list shell">{playbooks.map(([en, zh, note], index) => <article key={en}><span>{String(index + 1).padStart(2, "0")}</span><h2>{en}<small>{zh}</small></h2><p>{note}</p><mark>规划中</mark></article>)}</section><Footer /></main>; }
