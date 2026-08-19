import Link from "next/link";

export function Header() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/">Adam Cui</Link>
      <nav aria-label="主导航">
        <Link href="/insights">洞察</Link>
        <Link href="/playbooks">方法</Link>
        <Link href="/about">关于</Link>
        <Link href="/contact">联系</Link>
      </nav>
      <span className="language" aria-label="当前语言">中 / EN</span>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer shell">
      <div><strong>Adam Cui</strong><p>企业经营提升 · Operating Improvement</p></div>
      <div className="footer-links"><Link href="/insights">洞察</Link><Link href="/playbooks">方法</Link><Link href="/about">关于</Link></div>
      <p className="copyright">© {new Date().getFullYear()} Adam Cui</p>
    </footer>
  );
}
