import BlogCard from "@/components/BlogCard";
const posts = [
  { slug: "my-ai-learning-journey", title: "从新媒体到 AI 产品：我的学习路径", excerpt: "一个网络与新媒体专业的学生，如何开始接触 AI 并做出自己的作品集。", date: "2026-07-01" },
  { slug: "prompt-engineering-for-product", title: "产品经理为什么要学 Prompt Engineering？", excerpt: "Prompt Engineering 不只是写提示词，更是一种产品思维。", date: "2026-07-03" },
  { slug: "rag-beginners-guide", title: "RAG 是什么？一个文科生的理解", excerpt: "用大白话讲清楚 RAG 是什么，为什么它对 AI 产品很重要。", date: "2026-07-05" },
];
export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">博客</h1>
      <div className="space-y-4">{posts.map((p) => <BlogCard key={p.slug} {...p} />)}</div>
    </div>
  );
}
