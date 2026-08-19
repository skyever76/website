import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../_components/SiteChrome";
export const metadata: Metadata = { title: "关于 About", description: "Adam Cui：拥有多元国际履历的企业经营者，专注有机增长、经营转型与平台建设。" };

const capabilities = [
  { index: "01", title: "Organic Growth", zh: "有机增长", body: "重塑商业与销售体系，把区域机会变成可复制的全国增长。" },
  { index: "02", title: "Turnaround", zh: "经营转型", body: "在经营拐点重建事实、节奏与责任，恢复盈利和增长动能。" },
  { index: "03", title: "Platform Building", zh: "平台建设", body: "整合分散业务，建立统一的组织、运营与数字化底座。" },
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="about-hero shell">
        <p className="eyebrow">About / 关于</p>
        <h1>多元的履历，<br />同一条经营主线。</h1>
        <p>二十余年，跨越不同所有制、行业与市场。始终专注一件事：把复杂企业带向可持续增长。</p>
      </section>

      <section className="about-facts shell" aria-label="职业履历摘要">
          <article><strong>02</strong><p><b>一线 PE 基金</b><span>Portfolio Company CEO</span></p></article>
          <article><strong>02</strong><p><b>跨国企业</b><span>China CEO</span></p></article>
          <article><strong>03</strong><p><b>国企 · 民企 · 外企</b><span>多种所有制经历</span></p></article>
          <article><strong>CN / US</strong><p><b>中国与美国</b><span>两地工作经验</span></p></article>
      </section>

      <section className="about-story shell">
        <div className="section-heading"><p>01 / 职业经历</p><h2>One career,<br />multiple lenses</h2></div>
        <div className="about-narrative">
          <p className="about-lead">既承担过完整的 CEO 责任，也接受过国际战略咨询的系统训练。</p>
          <p>历经国企、民企与跨国企业。两次担任一线 PE 基金 Portfolio Company CEO，两次领导跨国企业中国业务。中美工作经历，带来全球体系与中国场景的双重视角。</p>
          <p>履历横跨科技、工业与 B2B 服务，贯穿有机增长、经营转型、并购整合与组织现代化。最终指向同一件事：让战略进入经营现场，转化为收入、利润、现金与组织能力。</p>
        </div>
      </section>

      <section className="about-capabilities shell" aria-labelledby="capabilities-title">
        <div className="section-heading"><p>02 / 核心经历</p><h2 id="capabilities-title">What I build</h2></div>
        <div className="capability-list">{capabilities.map((item) => <article key={item.index}><span>{item.index}</span><h3>{item.title}<small>{item.zh}</small></h3><p>{item.body}</p></article>)}</div>
      </section>

      <section className="about-philosophy shell">
        <p>“增长不是一个目标数字，<br />而是一套可以被组织重复的能力。”</p>
        <div><span>Operating philosophy</span><p>真正的运营提升，同时改变经营结果与产生结果的系统。</p></div>
      </section>

      <section className="about-english shell">
        <div className="section-heading"><p>03 / English</p><h2>In brief</h2></div>
        <div><p>Adam Cui is a CEO and operating leader with more than twenty years of international experience across private equity-backed portfolio companies, multinational corporations, private enterprises and state-owned businesses. He has worked in both China and the United States and began his problem-solving training in a leading global strategy consulting environment.</p><p>His work centers on three recurring challenges: accelerating organic growth, leading turnarounds and building scalable enterprise platforms. Across industries and ownership models, he helps businesses translate strategy into stronger commercial systems, operating cadence and organizational capability.</p><Link className="text-link" href="/contact">联系 / Get in touch →</Link></div>
      </section>
      <Footer />
    </main>
  );
}
