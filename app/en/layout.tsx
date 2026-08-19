import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Adam Cui | Operating Improvement", template: "%s | Adam Cui" },
  description: "Turning frontline global operating experience into improvement playbooks for Chinese enterprises.",
  openGraph: { title: "Adam Cui | Operating Improvement", description: "Turning frontline global operating experience into improvement playbooks for Chinese enterprises.", locale: "en_US" },
  twitter: { title: "Adam Cui | Operating Improvement", description: "Turning frontline global operating experience into improvement playbooks for Chinese enterprises." },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div lang="en">{children}</div>;
}
