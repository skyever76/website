import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Adam Cui｜企业经营提升", template: "%s｜Adam Cui" },
  description: "把全球一线运营经验，转化为适合中国企业的运营提升方法。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  metadataBase: new URL("https://www.adamcui.cn"),
  openGraph: { title: "Adam Cui｜企业经营提升", description: "把全球一线运营经验，转化为适合中国企业的运营提升方法。", type: "website", locale: "zh_CN", images: [{ url: "/og.png", width: 1732, height: 908, alt: "Adam Cui｜企业经营提升" }] },
  twitter: { card: "summary_large_image", title: "Adam Cui｜企业经营提升", description: "把全球一线运营经验，转化为适合中国企业的运营提升方法。", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
