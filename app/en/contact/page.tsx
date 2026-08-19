import type { Metadata } from "next";
import { Header, Footer } from "../../_components/SiteChrome";

export const metadata: Metadata = { title: "Contact", description: "Contact Adam Cui by email or WeChat." };

export default function EnglishContactPage() {
  return <main><Header locale="en" path="/contact" /><section className="contact-hero shell"><p className="eyebrow">Contact</p><h1>Have an operating challenge worth solving? Let’s talk.</h1><p>Conversations around operating improvement, AI enablement and M&amp;A integration are welcome.</p></section><section className="contact-methods shell" aria-label="Contact methods"><a className="contact-method contact-email" href="mailto:adamcui@gmail.com"><div className="contact-method-label"><span>01</span><p>Email</p></div><div className="contact-method-content"><strong>adamcui@gmail.com</strong><p>Operating challenges, professional exchange and collaboration</p></div><i aria-hidden="true">↗</i></a><div className="contact-method"><div className="contact-method-label"><span>02</span><p>WeChat</p></div><div className="contact-method-content"><strong>adamcuicheng</strong><p>Please include a short note when adding the account</p></div></div></section><Footer locale="en" /></main>;
}
