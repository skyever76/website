import type { Metadata } from "next";
import { Header, Footer } from "../_components/SiteChrome";
export const metadata: Metadata = { title: "联系 Contact", description: "通过电子邮件或微信联系 Adam Cui。" };

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="contact-hero shell">
        <p className="eyebrow">Contact / 联系</p>
        <h1>有值得解决的<br />经营问题，来聊聊。</h1>
        <p>欢迎围绕企业经营提升、AI 赋能与并购整合交流。</p>
      </section>
      <section className="contact-methods shell" aria-label="联系方式">
        <a className="contact-method contact-email" href="mailto:adamcui@gmail.com">
          <div className="contact-method-label"><span>01</span><p>Email / 电子邮件</p></div>
          <div className="contact-method-content"><strong>adamcui@gmail.com</strong><p>项目交流、专业讨论与合作邀请</p></div>
          <i aria-hidden="true">↗</i>
        </a>
        <div className="contact-method">
          <div className="contact-method-label"><span>02</span><p>WeChat / 微信</p></div>
          <div className="contact-method-content"><strong>adamcuicheng</strong><p>添加时请简单注明来意</p></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
