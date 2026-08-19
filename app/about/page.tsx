import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../_components/SiteChrome";
export const metadata: Metadata = { title: "关于 About", description: "Adam Cui：拥有多元国际履历的企业经营者，专注有机增长、经营转型与平台建设。" };

const capabilities = [
  { index: "01", title: "Organic Growth", zh: "有机增长", body: "重塑商业模式与销售体系，把分散的区域机会转化为可复制、可持续的全国性增长能力。" },
  { index: "02", title: "Turnaround", zh: "经营转型", body: "在业务拐点和经营压力下重建事实、节奏与责任，恢复盈利能力，并让组织重新获得增长动能。" },
  { index: "03", title: "Platform Building", zh: "平台建设", body: "整合分散业务，建立统一的组织、运营与数字化底座，让企业能够跨区域、跨业务持续扩张。" },
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="about-hero shell">
        <p className="eyebrow">About / 关于</p>
        <h1>多元的履历，<br />同一条经营主线。</h1>
        <p>二十余年国际化领导经验，跨越不同所有制、行业与市场环境，始终专注于一件事：把复杂企业带向可持续增长。</p>
      </section>

      <section className="about-facts shell" aria-label="职业履历摘要">
        <article><strong>02</strong><p>一线 PE 基金<br />Portfolio Company CEO</p></article>
        <article><strong>02</strong><p>跨国企业<br />China CEO</p></article>
        <article><strong>03</strong><p>国企 · 民企 · 外企<br />多种所有制经历</p></article>
        <article><strong>CN / US</strong><p>中国与美国<br />两地工作经验</p></article>
      </section>

      <section className="about-story shell">
        <div className="section-heading"><p>01 / 我的经历</p><h2>One career,<br />multiple lenses</h2></div>
        <div className="about-narrative">
          <p className="about-lead">我既在经营一线承担过完整的 CEO 责任，也在国际战略咨询环境中训练过解决复杂问题的方法。</p>
          <p>职业经历覆盖国有企业、民营企业与跨国公司，先后担任两家一线 PE 基金 Portfolio Company 的 CEO，并曾领导两家跨国企业在中国的业务。在中国与美国的工作经验，让我能够同时理解全球管理体系与中国企业的现实语境。</p>
          <p>这不是一条单一行业或单一职能的履历。它横跨科技、工业与 B2B 服务等领域，也经历过创业式增长、成熟业务再出发、并购整合与组织现代化等不同阶段。多元背景最终汇聚成一条清晰主线：让战略真正进入经营现场，并转化为收入、利润、现金和组织能力。</p>
        </div>
      </section>

      <section className="about-capabilities shell" aria-labelledby="capabilities-title">
        <div className="section-heading"><p>02 / 核心经历</p><h2 id="capabilities-title">What I build</h2></div>
        <div className="capability-list">{capabilities.map((item) => <article key={item.index}><span>{item.index}</span><h3>{item.title}<small>{item.zh}</small></h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="about-philosophy shell">
        <p>“增长不是一个目标数字，<br />而是一套可以被组织重复的能力。”</p>
        <div><span>Operating philosophy</span><p>我相信真正的运营提升，必须同时改变经营结果与产生结果的系统。</p></div>
      </section>

      <section className="about-english shell">
        <div className="section-heading"><p>03 / English</p><h2>In brief</h2></div>
        <div><p>Adam Cui is a CEO and operating leader with more than twenty years of international experience across private equity-backed portfolio companies, multinational corporations, private enterprises and state-owned businesses. He has worked in both China and the United States and began his problem-solving training in a leading global strategy consulting environment.</p><p>His work centers on three recurring challenges: accelerating organic growth, leading turnarounds and building scalable enterprise platforms. Across industries and ownership models, he helps businesses translate strategy into stronger commercial systems, operating cadence and organizational capability.</p><Link className="text-link" href="/contact">与我联系 / Get in touch →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
