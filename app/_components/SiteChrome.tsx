import Link from "next/link";

type Locale = "zh" | "en";

function localePath(locale: Locale, path: string) {
  if (locale === "en") return path === "/" ? "/en" : `/en${path}`;
  return path;
}

export function Header({ locale = "zh", path = "/" }: { locale?: Locale; path?: string }) {
  const isEnglish = locale === "en";
  return (
    <header className="site-header shell">
      <Link className="wordmark" href={isEnglish ? "/en" : "/"}>Adam Cui</Link>
      <nav aria-label={isEnglish ? "Primary navigation" : "主导航"}>
        <Link href={localePath(locale, "/insights")}>{isEnglish ? "Insights" : "洞察"}</Link>
        <Link href={localePath(locale, "/playbooks")}>{isEnglish ? "Method" : "方法"}</Link>
        <Link href={localePath(locale, "/about")}>{isEnglish ? "About" : "关于"}</Link>
        <Link href={localePath(locale, "/contact")}>{isEnglish ? "Contact" : "联系"}</Link>
      </nav>
      <div className="language" aria-label={isEnglish ? "Language" : "语言"}>
        <Link className={!isEnglish ? "active" : ""} href={path}>中</Link><span>/</span><Link className={isEnglish ? "active" : ""} href={path === "/" ? "/en" : `/en${path}`}>EN</Link>
      </div>
    </header>
  );
}

export function Footer({ locale = "zh" }: { locale?: Locale }) {
  const isEnglish = locale === "en";
  return (
    <footer className="footer shell">
      <div><strong>Adam Cui</strong><p>{isEnglish ? "Operating Improvement" : "企业经营提升"}</p></div>
      <div className="footer-links"><Link href={localePath(locale, "/insights")}>{isEnglish ? "Insights" : "洞察"}</Link><Link href={localePath(locale, "/playbooks")}>{isEnglish ? "Method" : "方法"}</Link><Link href={localePath(locale, "/about")}>{isEnglish ? "About" : "关于"}</Link></div>
      <p className="copyright">© {new Date().getFullYear()} Adam Cui</p>
    </footer>
  );
}
