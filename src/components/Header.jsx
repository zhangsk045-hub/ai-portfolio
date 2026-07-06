"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "首页" },
    { href: "/projects/ai-chat", label: "AI 客服" },
    { href: "/projects/content-generator", label: "内容生成" },
    { href: "/projects/doc-qa", label: "文档问答" },
    { href: "/projects/data-analyzer", label: "数据分析" },
    { href: "/about", label: "关于我" },
    { href: "/resume", label: "简历" },
    { href: "/blog", label: "博客" },
  ];
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">张绍康</Link>
        <nav className="hidden md:flex gap-6">
          {links.map((l) => <Link key={l.href} href={l.href} className="text-gray-600 hover:text-primary-600 text-sm">{l.label}</Link>)}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && <div className="md:hidden border-t px-4 py-4 bg-white">{links.map((l) => <Link key={l.href} href={l.href} className="block py-2 text-gray-600" onClick={() => setOpen(false)}>{l.label}</Link>)}</div>}
    </header>
  );
}
