import type { Metadata } from "next";
import { Header, Footer } from "../../_components/SiteChrome";

export const metadata: Metadata = { title: "About", description: "Adam Cui is an operating leader focused on organic growth, turnaround and platform building." };

const capabilities = [
  { index: "01", title: "Organic Growth", body: "Rebuild commercial and sales systems, turning regional opportunities into repeatable national growth." },
  { index: "02", title: "Turnaround", body: "Restore facts, cadence and accountability at critical operating inflection points." },
  { index: "03", title: "Platform Building", body: "Integrate fragmented businesses into a unified organization, operating model and digital foundation." },
];

export default function EnglishAboutPage() {
  return (
    <main>
      <Header locale="en" path="/about" />
      <section className="about-hero shell">
        <p className="eyebrow">About</p>
        <h1>A diverse career.<br />One operating thread.</h1>
        <p>More than twenty years across ownership models, industries and markets—always focused on moving complex businesses toward sustainable growth.</p>
      </section>
      <section className="about-facts shell" aria-label="Career summary">
        <article><strong>02</strong><p><span className="about-fact-title">Leading PE Funds</span><span className="about-fact-detail">Portfolio Company CEO</span></p></article>
        <article><strong>02</strong><p><span className="about-fact-title">Multinationals</span><span className="about-fact-detail">China CEO</span></p></article>
        <article><strong>03</strong><p><span className="about-fact-title">SOE · Private · MNC</span><span className="about-fact-detail">Ownership models</span></p></article>
        <article><strong>CN / US</strong><p><span className="about-fact-title">China and the US</span><span className="about-fact-detail">Work experience</span></p></article>
      </section>
      <section className="about-story shell">
        <div className="section-heading"><p>01</p><h2>Career</h2></div>
        <div className="about-narrative">
          <p className="about-lead">From reporting to multinational boards to working shoulder to shoulder with frontline teams in local businesses.</p>
          <p>Experience spans state-owned, private and multinational enterprises, including two CEO roles in portfolio companies backed by leading private equity funds and two China CEO roles in multinational corporations. Work in both China and the United States brings together global systems and local operating realities.</p>
          <p>Across technology, industrial and B2B services, the recurring work has been organic growth, turnaround, M&amp;A integration and organizational modernization—translating strategy into revenue, margin, cash and capability.</p>
        </div>
      </section>
      <section className="about-capabilities shell" aria-labelledby="capabilities-title-en">
        <div className="section-heading"><p>02</p><h2 id="capabilities-title-en">Core Experience</h2></div>
        <div className="capability-list">{capabilities.map((item) => <article key={item.index}><span>{item.index}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
      </section>
      <section className="about-philosophy shell">
        <p>“Growth is not a target number.<br />It is a capability an organization can repeat.”</p>
        <div><span>Operating philosophy</span><p>Real operating improvement changes both the results and the system that produces them.</p></div>
      </section>
      <Footer locale="en" />
    </main>
  );
}
