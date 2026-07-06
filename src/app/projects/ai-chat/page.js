import ChatInterface from "@/components/ChatInterface";
export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">AI 智能客服助手</h1>
      <p className="text-gray-500 mb-8">基于 GPT 的新媒体运营顾问 AI，展示 Prompt Engineering 和对话体验设计。</p>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">项目背景</h2><p className="text-gray-600">探索用 AI 实现一个"永远在线的新媒体运营顾问"。</p></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">在线 Demo</h2><ChatInterface /></section>
      <section className="mb-10"><h2 className="text-xl font-semibold mb-3">技术实现</h2><ul className="list-disc list-inside text-gray-600 space-y-1"><li>OpenAI GPT-4o-mini</li><li>System Prompt 定制角色</li><li>多轮对话管理</li></ul></section>
      <section><h2 className="text-xl font-semibold mb-3">反思与改进</h2><p className="text-gray-600">未来可加入 RAG 知识库和对话历史保存。</p></section>
    </div>
  );
}
