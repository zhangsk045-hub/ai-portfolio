import Link from "next/link";
const posts = {
  "my-ai-learning-journey": {
    title: "从新媒体到 AI 产品：我的学习路径", date: "2026-07-01",
    content: "作为一个网络与新媒体专业的学生，我在大学期间学了很多有趣的东西：传播学理论、内容创作、用户研究、数据分析……但总觉得缺了点什么。\n\n直到我接触了 AI。准确说，是 ChatGPT 让我第一次意识到：AI 不是一个遥远的技术名词，而是一个能真正提升内容生产效率的工具。\n\n第一阶段：用 AI 工具（3个月）\n从 ChatGPT 开始，学会写 Prompt，用 AI 辅助写文案、做翻译、整理信息。\n\n第二阶段：理解 AI 原理（2个月）\n开始了解什么是大语言模型、什么是 API、Prompt Engineering 的核心思想。\n\n第三阶段：动手做项目（现在）\n把这个作品集做出来。从产品构思到实现，每一步都在加深我对 AI 产品的理解。"
  },
  "prompt-engineering-for-product": {
    title: "产品经理为什么要学 Prompt Engineering？", date: "2026-07-03",
    content: "很多人觉得 Prompt Engineering 是写提示词的技术活，但我认为它更是一种产品思维。\n\n写好一个 Prompt 其实就是在做产品设计：\n- 你要清楚地定义问题（用户需求）\n- 你要设定边界和约束（产品规格）\n- 你要迭代和测试（A/B 测试）\n- 你要考虑不同场景的适配（多场景覆盖）"
  },
  "rag-beginners-guide": {
    title: "RAG 是什么？一个文科生的理解", date: "2026-07-05",
    content: "RAG = Retrieval-Augmented Generation（检索增强生成）。\n\n想象你是一个知识渊博的教授，但有人问你一个你没看过的手册：\n1. 凭已有知识瞎猜（可能错）\n2. 先查手册再回答（RAG）\n\nRAG 就是[先查资料再回答]的思维。在 AI 产品面试中，能讲清楚 RAG 的基本概念和场景，是很大的加分项。"
  },
};
export default function BlogPostPage({ params }) {
  const post = posts[params.slug];
  if (!post) return <div className="max-w-3xl mx-auto px-4 py-16"><h1 className="text-2xl font-bold">文章不存在</h1><Link href="/blog" className="text-primary-600">← 返回</Link></div>;
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-gray-400 hover:text-primary-600 text-sm inline-block mb-4">← 返回博客</Link>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-8">{post.date}</p>
      <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-line">{post.content}</div>
    </div>
  );
}
