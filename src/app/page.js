import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  { slug: "ai-chat", title: "AI 智能客服助手", description: "基于 GPT 的多轮对话机器人，展示 Prompt Engineering 和对话体验设计", icon: "🤖", gradient: "bg-blue-50" },
  { slug: "content-generator", title: "AI 内容生成器", description: "一键生成小红书文案、公众号推文，支持多风格切换", icon: "✍️", gradient: "bg-purple-50" },
  { slug: "doc-qa", title: "AI 文档问答系统", description: "上传文档，AI 基于内容智能回答，初探 RAG 技术", icon: "📚", gradient: "bg-green-50" },
  { slug: "data-analyzer", title: "AI 数据分析面板", description: "输入数据，AI 自动生成分析结论与洞察", icon: "📊", gradient: "bg-orange-50" },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <section className="py-16 md:py-24 text-center">
        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          张
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">张绍康</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-2">
          网络与新媒体本科 · 2026届
        </p>
        <p className="text-base text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          从新媒体运营到 AI 产品，我不断探索用技术放大内容的价值。
          <br />4 个亲手搭建的 AI 应用，展示我从需求洞察到产品落地全链路能力。
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#projects" className="px-8 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-medium">查看项目</a>
          <a href="/about" className="px-8 py-3 border border-gray-200 text-gray-700 rounded-full hover:border-primary-300 hover:text-primary-600 transition-colors font-medium">关于我</a>
          <a href="/resume" className="px-8 py-3 border border-gray-200 text-gray-700 rounded-full hover:border-primary-300 hover:text-primary-600 transition-colors font-medium">在线简历</a>
        </div>
      </section>

      {/* 一句话亮点 */}
      <section className="pb-8 text-center">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "🎯", title: "目标导向", desc: "极强的目标感，善于从需求出发倒推执行路径" },
            { icon: "💬", title: "沟通表达", desc: "新媒体专业训练，精准捕捉痛点并有效传达" },
            { icon: "🚀", title: "执行力", desc: "从策划到落地全流程闭环，结果驱动" },
          ].map((item) => (
            <div key={item.title} className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-semibold mb-1 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16">
        <h2 className="text-2xl font-bold mb-2 text-center">AI 项目展示</h2>
        <p className="text-gray-400 text-sm mb-8 text-center">我用这些项目展示对 AI 产品从概念到落地的理解</p>
        <div className="grid md:grid-cols-2 gap-6">{projects.map((p) => <ProjectCard key={p.slug} {...p} />)}</div>
      </section>

      {/* 经历速览 */}
      <section className="py-16 text-center border-t border-gray-100">
        <h2 className="text-2xl font-bold mb-6">经历速览</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          <div className="p-5 rounded-2xl border border-gray-100 hover:border-primary-100 transition-colors">
            <p className="text-xs text-primary-600 font-medium mb-1">实习</p>
            <p className="font-semibold text-gray-800">山东顶美文化传媒</p>
            <p className="text-sm text-gray-500">新媒体运营 · 短视频内容生态建设</p>
          </div>
          <div className="p-5 rounded-2xl border border-gray-100 hover:border-primary-100 transition-colors">
            <p className="text-xs text-primary-600 font-medium mb-1">校园</p>
            <p className="font-semibold text-gray-800">大学生艺术团团长</p>
            <p className="text-sm text-gray-500">统筹策划毕业歌会、草地音乐节等大型活动</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/about" className="text-primary-600 hover:underline font-medium">查看完整经历 →</a>
        </div>
      </section>
    </div>
  );
}
