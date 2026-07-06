import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "张绍康 | AI 产品作品集", description: "网络与新媒体背景的 AI 产品人 — 张绍康的 AI 应用作品集，展示从需求洞察到产品落地的全链路能力。" };

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
