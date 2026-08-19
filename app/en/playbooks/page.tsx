import type { Metadata } from "next";
import { Header, Footer } from "../../_components/SiteChrome";

const steps = [
  { title: "Stabilize", statement: "Cash flow matters more than profit." },
  { title: "Repair", statement: "Change the people, the method and the battlefield." },
  { title: "Return to Growth", statement: "Find the value pools and focus resources." },
  { title: "Scale", statement: "Standardize, replicate and amplify what works." },
];

export const metadata: Metadata = { title: "The Adam Cui Method", description: "Stabilize, repair, return to growth and scale: Adam Cui's four-step operating improvement method." };

export default function EnglishPlaybooksPage() {
  return <main><Header locale="en" path="/playbooks" /><section className="method-hero shell"><p className="eyebrow">The Adam Cui Method</p><h1>Survive first.<br />Then grow.</h1><p>Operating improvement has a sequence: stabilize the fundamentals, repair the system, restart growth and build a platform that can scale.</p></section><section className="method-steps shell" aria-label="The four-step Adam Cui Method">{steps.map((step, index) => <article key={step.title}><span className="method-index">{String(index + 1).padStart(2, "0")}</span><h2>{step.title}</h2><p>{step.statement}</p></article>)}</section><section className="method-sequence shell" aria-label="Method sequence">{steps.map((step, index) => <span key={step.title}>{step.title}{index < steps.length - 1 && <i>→</i>}</span>)}</section><Footer locale="en" /></main>;
}
